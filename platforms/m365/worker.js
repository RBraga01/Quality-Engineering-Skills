/**
 * Quality Engineering Assistant — Cloudflare Worker (M365 Copilot Plugin API)
 *
 * Implements the REST API defined in platforms/m365/openapi.yaml.
 * M365 Copilot calls these endpoints when the user triggers the plugin.
 *
 * Environment variables (set in Cloudflare dashboard → Worker → Settings → Variables):
 *   ANTHROPIC_API_KEY  — from console.anthropic.com
 *
 * Deploy:
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

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    if (request.method !== 'POST') {
      return jsonResponse({ error: 'Method not allowed' }, 405);
    }

    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, '');

    let body = {};
    try {
      body = await request.json();
    } catch {
      // empty body is fine for some endpoints
    }

    try {
      switch (path) {
        case '/8d/coach':
          return jsonResponse(await coach8d(body, env));
        case '/8d/evaluate':
          return jsonResponse(await evaluate8d(body, env));
        case '/rca/start':
          return jsonResponse(await rcaStart(body, env));
        case '/ncr/write':
          return jsonResponse(await ncrWrite(body, env));
        case '/audit/start':
          return jsonResponse(await auditStart(body, env));
        case '/fmea/review':
          return jsonResponse(await fmeaReview(body, env));
        default:
          return jsonResponse({ error: 'Not found' }, 404);
      }
    } catch (err) {
      return jsonResponse({ error: err.message }, 500);
    }
  },
};

async function coach8d(body, env) {
  const { complaint_description, start_discipline = 'D0' } = body;
  const prompt = complaint_description
    ? `Start 8D Coach from ${start_discipline}. The complaint is: ${complaint_description}`
    : `Start 8D Coach from ${start_discipline}. Ask me the first required question.`;
  const message = await callClaude(prompt, env.ANTHROPIC_API_KEY);
  return {
    session_id: crypto.randomUUID(),
    current_step: start_discipline,
    message,
    validation_status: 'pending',
    next_question: '',
  };
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
  const { problem_statement } = body;
  const prompt = problem_statement
    ? `Start a structured 5-Why root cause analysis. Problem statement: ${problem_statement}. Ask me for the first Why.`
    : 'Start a structured 5-Why root cause analysis. Ask me for the problem statement.';
  const message = await callClaude(prompt, env.ANTHROPIC_API_KEY);
  return {
    session_id: crypto.randomUUID(),
    current_step: 'Why 1',
    message,
    validation_status: 'pending',
    next_question: '',
  };
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
  const { standard = 'ISO 9001', scope } = body;
  const prompt = scope
    ? `Start an internal audit for ${standard}. Scope: ${scope}. Ask the first open question for the first relevant clause.`
    : `Start an internal audit for ${standard}. Ask me for the scope first.`;
  const message = await callClaude(prompt, env.ANTHROPIC_API_KEY);
  return {
    session_id: crypto.randomUUID(),
    current_step: 'Scope definition',
    message,
    validation_status: 'pending',
    next_question: '',
  };
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
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
  });
}
