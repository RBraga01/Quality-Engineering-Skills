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
test('QES-03: OpenAPI base path must be routable in Worker', { todo: true }, async () => {
  const worker = loadWorker('platforms/m365/worker.js');
  const res = await worker.fetch(request('/v1/8d/coach', {}), {
    API_TOKEN: LOCAL_AUTH_FIXTURE, ANTHROPIC_API_KEY: LOCAL_AUTH_FIXTURE,
  });
  assert.equal(res.status, 200);
});

test('QES-07: invalid M365 request should return HTTP 400', { todo: true }, async () => {
  const worker = loadWorker('platforms/m365/worker.js');
  const res = await worker.fetch(request('/8d/evaluate', {}), {
    API_TOKEN: LOCAL_AUTH_FIXTURE, ANTHROPIC_API_KEY: LOCAL_AUTH_FIXTURE,
  });
  assert.equal(res.status, 400);
});

test('QES-02: Gemini guide-selected manifest functions must all exist', { todo: true }, () => {
  const data = JSON.parse(read('platforms/gemini/workspace-addon-manifest.json'));
  const functions = new Set([...read('platforms/gemini/Code.gs').matchAll(/^function (\w+)\s*\(/gm)]
    .map(x => x[1]));
  const targets = [...JSON.stringify(data).matchAll(/"(?:runFunction|onTriggerFunction)"\s*:\s*"([^"]+)"/g)]
    .map(x => x[1]);
  assert.deepEqual(targets.filter(x => !functions.has(x)), []);
});

test('QES-10: site hero skill counter reflects canonical inventory', { todo: true }, () => {
  assert.match(read('docs/index.html'), /hero-stat-n n-teal">23</);
});

test('QES-11: website does not claim ChatGPT requires no account', { todo: true }, () => {
  assert.doesNotMatch(read('docs/index.html'), /No account required for the ChatGPT GPT/i);
});

test('QES-09: ChatGPT export has at most 20 files', { todo: true }, () => {
  assert.ok(readdirSync(join(ROOT, 'platforms/chatgpt/export')).length <= 20);
});

test('QES-12: Slack manifest transport matches HTTP Worker', { todo: true }, () => {
  const raw = read('platforms/slack/app-manifest.yaml');
  assert.match(raw, /socket_mode_enabled:\s*false/);
  assert.doesNotMatch(raw, /^\s+- message\.channels\s*$/m);
});
