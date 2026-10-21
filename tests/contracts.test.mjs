import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import { webcrypto } from 'node:crypto';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (path) => readFileSync(join(ROOT, path), 'utf8');
const LOCAL_AUTH_FIXTURE = Array.from({length: 12}, (_, i) => String.fromCharCode(65 + i)).join('');

function loadWorker(path, upstreamFetch = async () => ({
  ok: true,
  status: 200,
  json: async () => ({ content: [{ text: 'D0: Pass — acceptable evidence' }] }),
})) {
  const source = read(path).replace('export default {', 'module.exports = {');
  const sandbox = {
    module: { exports: {} },
    Response, Headers, URL, URLSearchParams, TextEncoder,
    crypto: webcrypto, fetch: upstreamFetch, console: { error: () => {} },
  };
  vm.runInNewContext(source, sandbox, { filename: path, timeout: 3000 });
  return sandbox.module.exports;
}

const request = (path, body, token = LOCAL_AUTH_FIXTURE) => new Request(
  'https://example.test' + path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
    body: JSON.stringify(body),
  },
);

test('canonical skills inventory is 23 skills and 8 agents', () => {
  const list = [];
  function walk(dir) {
    for (const entry of readdirSync(join(ROOT, dir), { withFileTypes: true })) {
      if (entry.isDirectory()) walk(join(dir, entry.name));
      else if (entry.name === 'SKILL.md') list.push(join(dir, entry.name));
    }
  }
  walk('skills');
  assert.equal(list.filter(x => !x.includes('skills/agents/')).length, 23);
  assert.equal(list.filter(x => x.includes('skills/agents/')).length, 8);
});

test('M365 rejects unauthenticated operations without upstream calls', async () => {
  let n = 0;
  const worker = loadWorker('platforms/m365/worker.js', async () => { n++; throw Error('unexpected upstream call'); });
  const res = await worker.fetch(request('/8d/coach', {}, 'invalid'), {
    API_TOKEN: LOCAL_AUTH_FIXTURE, ANTHROPIC_API_KEY: LOCAL_AUTH_FIXTURE,
  });
  assert.equal(res.status, 401);
  assert.equal(n, 0);
});

test('M365 missing secrets fail closed', async () => {
  const worker = loadWorker('platforms/m365/worker.js');
  const res = await worker.fetch(request('/8d/coach', {}), {});
  assert.equal(res.status, 503);
});

test('M365 OpenAPI defines six unique operations', () => {
  const s = read('platforms/m365/openapi.yaml');
  const operations = [...s.matchAll(/^  \/(?:8d|rca|ncr|audit|fmea)\/[a-z]+:/gm)];
  assert.equal(operations.length, 6);
});

test('existing ChatGPT and Claude knowledge bundles are generated mirrors, not dead duplicates', () => {
  const generated = (platform) => readdirSync(join(ROOT, 'platforms', platform, 'knowledge'))
    .filter(x => x.endsWith('.md')).sort();
  assert.deepEqual(generated('chatgpt'), generated('claude-ai'));
  assert.equal(generated('chatgpt').length, 36);
});

// TODO cases capture the original audit's reproduction gates. They deliberately
// stay red-with-TODO until the owning remediation PR fixes each behaviour.
test('QES-03: M365 worker accepts the OpenAPI root path', async () => {
  const worker = loadWorker('platforms/m365/worker.js');
  const res = await worker.fetch(request('/8d/coach', {}), {
    API_TOKEN: LOCAL_AUTH_FIXTURE, ANTHROPIC_API_KEY: LOCAL_AUTH_FIXTURE,
  });
  assert.equal(res.status, 200);
});

test('M365 required inputs return HTTP 400 instead of error-shaped 200', async () => {
  const worker = loadWorker('platforms/m365/worker.js');
  const res = await worker.fetch(request('/8d/evaluate', {}), {
    API_TOKEN: LOCAL_AUTH_FIXTURE, ANTHROPIC_API_KEY: LOCAL_AUTH_FIXTURE,
  });
  assert.equal(res.status, 400);
});

test('QES-02: Gemini guide-selected manifest functions must all exist', () => {
  const data = JSON.parse(read('platforms/gemini/workspace-addon-manifest.json'));
  const functions = new Set([...read('platforms/gemini/Code.gs').matchAll(/^function (\w+)\s*\(/gm)]
    .map(x => x[1]));
  const targets = [...JSON.stringify(data).matchAll(/"(?:runFunction|onTriggerFunction)"\s*:\s*"([^"]+)"/g)]
    .map(x => x[1]);
  assert.deepEqual(targets.filter(x => !functions.has(x)), []);
});

test('QES-10: site hero skill counter reflects canonical inventory', () => {
  assert.match(read('docs/index.html'), /hero-stat-n n-teal">23</);
});

test('QES-11: website does not claim ChatGPT requires no account', () => {
  assert.doesNotMatch(read('docs/index.html'), /No account required for the ChatGPT GPT/i);
});

test('QES-09: ChatGPT export has at most 20 files', () => {
  assert.ok(readdirSync(join(ROOT, 'platforms/chatgpt/export')).length <= 20);
});

test('QES-12: Slack manifest transport matches HTTP Worker', { todo: true }, () => {
  const raw = read('platforms/slack/app-manifest.yaml');
  assert.match(raw, /socket_mode_enabled:\s*false/);
  assert.doesNotMatch(raw, /^\s+- message\.channels\s*$/m);
});

test('QES-10: Codex marketing claims and public site use the same 23-skill truth', () => {
  const manifest = JSON.parse(read('.codex-plugin/plugin.json'));
  assert.match(manifest.description, /23 structured quality engineering skills/);
  assert.match(manifest.interface.shortDescription, /23 quality engineering skills/);
  const site = read('docs/index.html');
  assert.match(site, /23 skills across 7 domains/);
  assert.doesNotMatch(site, /full 22-skill|all 22 base skills/i);
});

test('QES-15: marketing does not claim automated qualitative CI scoring', () => {
  const site = read('docs/index.html');
  assert.doesNotMatch(site, /Blocks PRs when score/i);
  assert.match(site, /qualitative score requires review/);
});

test('QES-11: website does not promise permanently free unrestricted custom GPT access', () => {
  const site = read('docs/index.html');
  assert.doesNotMatch(site, /No account, no setup|free forever/i);
  assert.match(site, /Sign-in is required/);
});

test('Gemini manifest compatibility copy exactly matches the canonical manifest', () => {
  assert.deepEqual(JSON.parse(read('platforms/gemini/workspace-addon-manifest.json')),
                   JSON.parse(read('platforms/gemini/appsscript.json')));
});

test('QES-01/13: Gemini uses supported configurable model and honest stateless controls', () => {
  const code = read('platforms/gemini/Code.gs');
  assert.match(code, /gemini-3\.1-flash-lite/);
  assert.doesNotMatch(code, /gemini-2\.0-flash/);
  assert.match(code, /getProperty\('GEMINI_MODEL'\)/);
  assert.match(code, /\.setText\('New request'\)/);
  assert.doesNotMatch(code, /\.setText\('Continue'\)/);
});

test('QES-01: Gemini API errors never return transport exception contents', () => {
  const code = read('platforms/gemini/Code.gs');
  assert.doesNotMatch(code, /err\.message|json\.error\.message/);
  assert.match(code, /status === 429/);
  assert.match(code, /status === 404/);
});

function runGeminiWithFakeTransport({ status = 200, response = { candidates: [{ content: { parts: [{ text: 'TEST RESULT' }] } }] }, throwError = false, model = undefined } = {}) {
  const fixture = Array.from({ length: 11 }, (_, i) => String.fromCharCode(65 + i)).join('');
  const requests = [];
  const env = {
    PropertiesService: {
      getScriptProperties: () => ({ getProperty: (name) => name === 'GEMINI_API_KEY' ? fixture : name === 'GEMINI_MODEL' ? model : null }),
    },
    UrlFetchApp: {
      fetch: (url, options) => {
        requests.push({ url, options });
        if (throwError) throw new Error('TRANSPORT_' + fixture);
        return { getResponseCode: () => status, getContentText: () => JSON.stringify(response) };
      },
    },
    encodeURIComponent,
  };
  const actions = vm.runInNewContext(read('platforms/gemini/Code.gs') + '\n;({callGemini})', env, { timeout: 3000 });
  return { value: actions.callGemini('Synthetic quality question'), requests, fixture };
}

test('QES-01: Gemini default model is current and request receives expected payload', () => {
  const output = runGeminiWithFakeTransport();
  assert.equal(output.value, 'TEST RESULT');
  assert.equal(output.requests.length, 1);
  assert.match(output.requests[0].url, /models\/gemini-3\.1-flash-lite:generateContent/);
  assert.match(output.requests[0].options.payload, /Synthetic quality question/);
});

test('QES-01: Gemini rejects invalid model and sanitizes failed transport', () => {
  const invalid = runGeminiWithFakeTransport({ model: '../credentials' });
  assert.match(invalid.value, /Invalid Gemini model/);
  assert.equal(invalid.requests.length, 0);
  const transport = runGeminiWithFakeTransport({ throwError: true });
  assert.equal(transport.value, 'Gemini request failed. Check your configuration and connection.');
  assert.doesNotMatch(transport.value, /TRANSPORT_/);
  assert.doesNotMatch(transport.value, new RegExp(transport.fixture));
  const throttled = runGeminiWithFakeTransport({ status: 429 });
  assert.match(throttled.value, /quota or rate limit/);
});

test('QES-01: Gemini missing text is handled without exception', () => {
  const missing = runGeminiWithFakeTransport({ response: { candidates: [{ content: { parts: [] } }] } });
  assert.match(missing.value, /returned no text/);
});

test('QES-09: consolidated export index includes all canonical Markdown', () => {
  const index = read('platforms/chatgpt/export/00-INDEX.md');
  assert.match(index, /Source files: 59; skills: 23; agents: 8/);
  assert.match(index, /Upload all 10 Markdown files/);
});

test('QES-03: OpenAPI server is aligned with worker root routing', () => {
  const spec = read('platforms/m365/openapi.yaml');
  assert.match(spec, /url: https:\/\/api\.quality-engineering-skills\.io\n/);
  assert.doesNotMatch(spec, /quality-engineering-skills\.io\/v1/);
});

test('QES-04: Copilot API plugin uses Microsoft vault auth with bearer contract', () => {
  const manifest = JSON.parse(read('platforms/m365/plugin-manifest.json'));
  assert.equal(manifest.runtimes[0].auth.type, 'ApiKeyPluginVault');
  assert.equal(manifest.runtimes[0].auth.reference_id, 'REPLACE_WITH_MICROSOFT_AUTH_CONFIG_ID');
  assert.match(read('platforms/m365/openapi.yaml'), /type: http\s*\n\s*scheme: bearer/);
});

test('M365 input validation rejects bad JSON, enums and missing required input without model calls', async () => {
  let calls = 0;
  const worker = loadWorker('platforms/m365/worker.js', async () => { calls++; throw Error('unwanted network'); });
  const env = { API_TOKEN: LOCAL_AUTH_FIXTURE, ANTHROPIC_API_KEY: LOCAL_AUTH_FIXTURE };
  const badJson = new Request('https://example.test/8d/evaluate', {
    method: 'POST',
    headers: { 'Authorization': 'Bearer ' + LOCAL_AUTH_FIXTURE },
    body: '{syntax',
  });
  assert.equal((await worker.fetch(badJson, env)).status, 400);
  assert.equal((await worker.fetch(request('/fmea/review', { fmea_type: 'UNKNOWN' }), env)).status, 400);
  assert.equal((await worker.fetch(request('/8d/coach', { start_discipline: 'D9' }), env)).status, 400);
  assert.equal(calls, 0);
});
