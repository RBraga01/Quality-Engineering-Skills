/**
 * Quality Engineering Assistant — Cloudflare Worker (M365 Copilot Plugin API)
 *
 * Implements the REST API defined in platforms/m365/openapi.yaml.
 * M365 Copilot calls these endpoints when the user triggers the plugin.
 *
 * Environment variables (set in Cloudflare dashboard → Worker → Settings → Variables):
 *   ANTHROPIC_API_KEY  — from console.anthropic.com (secret)
 *   API_TOKEN          — bearer token every caller must present (secret)
 *   ALLOWED_ORIGINS    — comma-separated origins allowed for CORS; no wildcard
 *
 * This Worker fails closed: without ANTHROPIC_API_KEY and API_TOKEN it answers
 * 503 to everything and never calls the LLM API. It relays 8D, NCR and FMEA text
 * that routinely contains confidential customer and product data, so add
 * Cloudflare rate limiting before exposing it to real traffic — the bearer token
 * controls who can call it, not how much they can spend.
 *
 * Deploy:
 *   wrangler secret put ANTHROPIC_API_KEY
 *   wrangler secret put API_TOKEN
 *   wrangler deploy
 *
 * After deploy, point api.quality-engineering-skills.io → this Worker
 * (Cloudflare dashboard → Workers → Triggers → Custom domains).
 * Then update platforms/m365/openapi.yaml server url to the live domain.
 */

const SYSTEM_INSTRUCTIONS = `You are an expert Quality Engineering Assistant with decades of hands-on experience in automotive supplier quality, ISO 9001, IATF 16949, AIAG-VDA FMEA, and quality management systems. You work like a senior quality engineer — direct, practical, evidence-based.

You are powered by Quality-Engineering-Skills (github.com/RBraga01/Quality-Engineering-Skills).

8D COACH VALIDATION GATES:
D0: safety confirmed, suspect material status known
D1: cross-functional team (quality + production + engineering minimum)
D2: measured values vs. spec, part number + revision, quantity. NO root cause in D2.
D3: ICA in PAST TENSE with date and verification evidence. Reject promises.
D4: TWO root causes — occurrence AND escape. Reject "human error" without drilling deeper.
D5: PCA addresses D4 root cause directly. Verification plan required. "Retrain" alone is never sufficient.
D6: production data after PCA. ICA removal only after D6 evidence.
D7: FMEA + Control Plan + Work Instructions updated. Horizontal deployment assessed.
D8: champion sign-off. Customer notification if applicable.

NCR RULES: objective-evidence language, measured values vs. spec, no root cause, no blame. Classify Critical/Major/Minor. Recommend disposition.

ROOT CAUSE RULES: one Why at a time, ask for evidence, detect circular reasoning, require occurrence AND escape chains.

AUDIT RULES: open questions only, require objective evidence, classify Major NC / Minor NC / OFI.

FMEA REVIEWER: gap report against AIAG-VDA 2019 — missing failure modes, incorrect AP ratings, unaddressed H-AP items.

CRITICAL RULES:
- Challenge every "human error" root cause
- Require evidence — "someone said" is not evidence
- ICA must be in PAST TENSE
- NCR must NOT contain root cause, speculation, or blame
- AP=H always requires owner + target date`;

// 8D, NCR and FMEA text — generous for a long report, far below a file upload.
const MAX_BODY_BYTES = 128 * 1024;

const BEARER_PREFIX = 'Bearer ';

const CONTRACT = Object.freeze({
  '/8d/coach': { complaint_description: 'string' },
  '/8d/evaluate': { report_text: 'required-string' },
  '/rca/start': { problem_statement: 'string' },
  '/ncr/write': { observations: 'string', part_number: 'string', quantity: 'string' },
  '/audit/start': { standard: 'standard', scope: 'string' },
  '/fmea/review': { fmea_text: 'string', fmea_type: 'fmea-type' },
});

function validateContract(path, body) {
  if (!Object.hasOwn(CONTRACT, path)) return 'Unknown path';
  if (!body || typeof body !== 'object' || Array.isArray(body)) return 'Expected a JSON object';
  for (const key of Object.keys(body)) {
    if (!Object.hasOwn(CONTRACT[path], key)) return 'Unexpected field: ' + key;
  }
  for (const [key, type] of Object.entries(CONTRACT[path])) {
    const value = body[key];
    if (value === undefined) {
      if (type === 'required-string') return 'Missing required field: ' + key;
      continue;
    }
    if (typeof value !== 'string' || (type === 'required-string' && !value.trim())) {
      return 'Invalid string field: ' + key;
    }
    if (type === 'D0-D8' && !/^D[0-8]$/.test(value)) return 'Invalid start_discipline';
    if (type === 'standard' && !['ISO 9001', 'IATF 16949', 'both'].includes(value)) return 'Invalid standard';
    if (type === 'fmea-type' && !['PFMEA', 'DFMEA'].includes(value)) return 'Invalid fmea_type';
  }
  return null;
}


function corsHeaders(request, env) {
  const headers = {
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    Vary: 'Origin',
  };

  const origin = request.headers.get('Origin');
  const allowed = (env.ALLOWED_ORIGINS || '')
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean);

  // No wildcard: an origin is echoed back only if it was explicitly allowed.
  if (origin && allowed.includes(origin)) {
    return { ...headers, 'Access-Control-Allow-Origin': origin };
  }

  return headers;
}

function withCors(response, cors) {
  const headers = new Headers(response.headers);
  for (const [key, value] of Object.entries(cors)) {
    headers.set(key, value);
  }
  return new Response(response.body, { status: response.status, headers });
}

function constantTimeEquals(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) {
    return false;
  }
  let diff = 0;
  for (let i = 0; i < a.length; i += 1) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

function isAuthorised(request, env) {
  const header = request.headers.get('Authorization') || '';
  if (!header.startsWith(BEARER_PREFIX)) return false;
  return constantTimeEquals(header.slice(BEARER_PREFIX.length), env.API_TOKEN);
}

export default {
  async fetch(request, env) {
    const cors = corsHeaders(request, env);

    // Fail closed. An unconfigured deployment must serve nothing rather than
    // relay confidential quality data to the LLM API for anonymous callers.
    if (!env.API_TOKEN || !env.ANTHROPIC_API_KEY) {
      return withCors(jsonResponse({ error: 'Service not configured' }, 503), cors);
    }

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: cors });
    }

    if (request.method !== 'POST') {
      return withCors(jsonResponse({ error: 'Method not allowed' }, 405), cors);
    }

    if (!isAuthorised(request, env)) {
      return withCors(jsonResponse({ error: 'Unauthorized' }, 401), cors);
    }

    if (Number(request.headers.get('Content-Length') || 0) > MAX_BODY_BYTES) {
      return withCors(jsonResponse({ error: 'Payload too large' }, 413), cors);
    }

    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, '');

    const raw = await request.text();
    if (new TextEncoder().encode(raw).length > MAX_BODY_BYTES) {
      return withCors(jsonResponse({ error: 'Payload too large' }, 413), cors);
    }

    let body;
    try {
      body = raw ? JSON.parse(raw) : {};
    } catch {
      return withCors(jsonResponse({ error: 'Malformed JSON' }, 400), cors);
    }
    if (Object.hasOwn(CONTRACT, path)) {
      const invalid = validateContract(path, body);
      if (invalid) return withCors(jsonResponse({ error: invalid }, 400), cors);
    }

    try {
      switch (path) {
        case '/8d/coach':
          return withCors(jsonResponse(await coach8d(body, env)), cors);
        case '/8d/evaluate':
          return withCors(jsonResponse(await evaluate8d(body, env)), cors);
        case '/rca/start':
          return withCors(jsonResponse(await rcaStart(body, env)), cors);
        case '/ncr/write':
          return withCors(jsonResponse(await ncrWrite(body, env)), cors);
        case '/audit/start':
          return withCors(jsonResponse(await auditStart(body, env)), cors);
        case '/fmea/review':
          return withCors(jsonResponse(await fmeaReview(body, env)), cors);
        default:
          return withCors(jsonResponse({ error: 'Not found' }, 404), cors);
      }
    } catch (err) {
      // Upstream errors can quote the submitted text or API detail — log them,
      // do not return them.
      console.error('Request failed:', err instanceof UpstreamContractError ? 'upstream schema failure' : 'internal error');
      return withCors(jsonResponse({ error: err instanceof UpstreamContractError ? 'AI output could not be validated' : 'Internal error' }, err instanceof UpstreamContractError ? 502 : 500), cors);
    }
  },
};

async function coach8d(body, env) {
  const prompt = body.complaint_description
    ? 'Start a new one-turn 8D question at D0. No session is saved. Complaint: ' + body.complaint_description
    : 'Start a new one-turn 8D question at D0. Ask about safety and suspect material.';
  return { mode: 'single_turn', message: await callClaude(prompt, env.ANTHROPIC_API_KEY) };
}

async function evaluate8d(body, env) {
  const { report_text } = body;
  if (!report_text) return { error: 'report_text is required' };

  const prompt = `Evaluate this 8D report against ISO 9001 §10.2 / IATF 16949 §10.2.3. For each discipline D0–D8, state Pass or Fail with a one-sentence finding. End with the overall quality rating (Strong / Acceptable / Needs revision / Inadequate) and the top 3 issues.\n\nReport:\n${report_text}`;
  const rawText = await callClaude(prompt, env.ANTHROPIC_API_KEY);

  return {
    overall_quality: extractOverallQuality(rawText),
    disciplines: extractDisciplines(rawText),
    top_issues: extractTopIssues(rawText),
    full_evaluation: rawText,
  };
}

async function rcaStart(body, env) {
  const prompt = body.problem_statement
    ? 'Start a NEW one-turn 5-Why. No prior state is saved. Problem: ' + body.problem_statement + '. Ask the first Why.'
    : 'Start a new root cause analysis. Ask for the problem statement.';
  return { mode: 'single_turn', message: await callClaude(prompt, env.ANTHROPIC_API_KEY) };
}

async function ncrWrite(body, env) {
  const { observations, part_number, quantity } = body;
  const context = [
    observations && `Observations:\n${observations}`,
    part_number && `Part number: ${part_number}`,
    quantity && `Quantity affected: ${quantity}`,
  ].filter(Boolean).join('\n');

  const prompt = context
    ? `Write a professional NCR using objective-evidence language. No root cause, no blame, no speculation. Classify severity (Critical/Major/Minor). Recommend disposition.\n\n${context}`
    : 'Start NCR Writer. Ask me for the defect observations.';

  const generated_text = await callClaude(prompt, env.ANTHROPIC_API_KEY);
  return {
    generated_text,
    severity: extractSeverity(generated_text),
    flags: [],
  };
}

async function auditStart(body, env) {
  const standard = body.standard || 'ISO 9001';
  const prompt = body.scope
    ? 'Start a NEW one-turn audit for ' + standard + '. Scope: ' + body.scope + '. Ask the first open question.'
    : 'Start a NEW audit for ' + standard + '. Ask for the scope.';
  return { mode: 'single_turn', message: await callClaude(prompt, env.ANTHROPIC_API_KEY) };
}

async function fmeaReview(body, env) {
  const { fmea_text, fmea_type = 'PFMEA' } = body;
  const prompt = fmea_text
    ? `Review this ${fmea_type} against AIAG-VDA 2019. Identify: missing failure modes, incorrect AP ratings, unaddressed H-AP items, missing special characteristics.\n\nFMEA:\n${fmea_text}`
    : `Start FMEA Reviewer for ${fmea_type}. Ask me to provide the FMEA to review.`;
  const generated_text = await callClaude(prompt, env.ANTHROPIC_API_KEY);
  return {
    generated_text,
    severity: null,
    flags: extractFmeaFlags(generated_text),
  };
}

async function callClaude(userMessage, apiKey) {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 2048,
      system: SYSTEM_INSTRUCTIONS,
      messages: [{ role: 'user', content: userMessage }],
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Anthropic API error ${response.status}: ${err}`);
  }

  const data = await response.json();
  return data.content[0].text;
}

function extractOverallQuality(text) {
  const match = text.match(/\b(Strong|Acceptable|Needs revision|Inadequate)\b/i);
  return match ? match[1] : 'Needs revision';
}

function extractDisciplines(text) {
  const disciplines = [];
  for (let i = 0; i <= 8; i++) {
    const pattern = new RegExp(`D${i}[:\\s]+.*(Pass|Fail)[:\\s–-]*([^\n]+)`, 'i');
    const match = text.match(pattern);
    if (match) {
      disciplines.push({
        discipline: `D${i}`,
        status: match[1].charAt(0).toUpperCase() + match[1].slice(1).toLowerCase(),
        finding: match[2].trim(),
      });
    }
  }
  return disciplines;
}

function extractTopIssues(text) {
  const lines = text.split('\n');
  const issues = [];
  let inTopIssues = false;
  for (const line of lines) {
    if (/top\s+[23]\s+issues/i.test(line)) { inTopIssues = true; continue; }
    if (inTopIssues && /^\d+\./.test(line.trim())) {
      issues.push(line.replace(/^\d+\.\s*/, '').trim());
      if (issues.length === 3) break;
    }
  }
  return issues;
}

function extractSeverity(text) {
  const match = text.match(/\b(Critical|Major|Minor)\b/i);
  return match ? match[1].charAt(0).toUpperCase() + match[1].slice(1).toLowerCase() : 'Major';
}

function extractFmeaFlags(text) {
  const flags = [];
  const patterns = [
    /missing failure mode/gi,
    /incorrect AP/gi,
    /unaddressed H-AP/gi,
    /missing special characteristic/gi,
  ];
  for (const p of patterns) {
    const matches = text.match(p);
    if (matches) flags.push(...matches.map(m => m.trim()));
  }
  return [...new Set(flags)];
}

function jsonResponse(payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
