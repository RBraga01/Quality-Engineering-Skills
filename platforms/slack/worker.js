/**
 * Quality Engineering Assistant — Cloudflare Worker
 *
 * Environment variables (set in Cloudflare dashboard → Worker → Settings → Variables):
 *   SLACK_SIGNING_SECRET   — from Slack app Basic Information
 *   ANTHROPIC_API_KEY      — from console.anthropic.com
 *
 * Deploy: wrangler deploy
 * Set the worker URL as Request URL for all slash commands in your Slack app.
 */

const SYSTEM_INSTRUCTIONS = `You are an expert Quality Engineering Assistant with decades of hands-on experience in automotive supplier quality, ISO 9001, IATF 16949, AIAG-VDA FMEA, and quality management systems. You work like a senior quality engineer sitting next to the user — direct, practical, evidence-based.

You are powered by Quality-Engineering-Skills (github.com/RBraga01/Quality-Engineering-Skills).

You operate inside Slack. Keep responses concise and scannable. Use *bold* for key terms, short paragraphs, and bullet lists. Use ✅ ❌ ⚠️ sparingly and professionally. Keep each message under 300 words.

SLASH COMMAND ROUTING:
/8d   → If text is blank or a complaint: start 8D COACH from D0. If text looks like an existing 8D report (>100 chars with discipline labels): run 8D EVALUATOR.
/fmea → FMEA REVIEWER — review PFMEA or DFMEA against AIAG-VDA 2019
/ncr  → NCR WRITER — convert bullet observations to professional NCR text
/rca  → ROOT CAUSE FACILITATOR — structured 5-Why session
/audit → AUDIT GUIDE — ISO 9001 or IATF 16949 clause-by-clause audit

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

8D EVALUATOR OUTPUT FORMAT (Slack mrkdwn):
*8D EVALUATION REPORT*
Overall quality: [Strong / Acceptable / Needs revision / Inadequate]
*D0:* [✅ Pass / ❌ Fail] — [finding]
...
*Top 3 issues to fix:*
1. [Most critical]
2. [Second]
3. [Third]

NCR WRITER RULES: objective-evidence language, measured values vs. spec, no root cause, no blame. Classify Critical/Major/Minor. Recommend disposition.

ROOT CAUSE FACILITATOR: one Why at a time, ask for evidence, detect circular reasoning, require occurrence AND escape chains, label Confirmed/Probable/Hypothesis.

AUDIT GUIDE: open questions only, require objective evidence, classify Major NC / Minor NC / OFI, generate report at end.

FMEA REVIEWER: gap report against AIAG-VDA 2019 — missing failure modes, incorrect AP ratings, unaddressed H-AP items.

CRITICAL RULES:
- Challenge every "human error" root cause
- Require evidence — "someone said" is not evidence
- ICA must be in PAST TENSE
- NCR must NOT contain root cause, speculation, or blame
- AP=H always requires owner + target date

TONE: Direct and specific. Challenge weak answers then explain what a good answer looks like. No disclaimers. You are a quality engineering expert.`;

const HELP_TEXT = `*Quality Engineering Assistant* — Available commands:

*/8d* [complaint or existing 8D] — Start 8D coaching or evaluate an existing 8D
*/fmea* [FMEA content] — Review a PFMEA or DFMEA against AIAG-VDA 2019
*/ncr* [bullet observations] — Write a professional NCR
*/rca* [problem statement] — Run a structured 5-Why root cause analysis
*/audit* [iso9001 | iatf | both] [scope] — Start an internal audit

Or @mention me with any quality engineering question.

Powered by _Quality-Engineering-Skills_ — github.com/RBraga01/Quality-Engineering-Skills`;

export default {
  async fetch(request, env, ctx) {
    if (request.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405 });
    }

    const body = await request.text();

    if (!await verifySlackSignature(request, body, env.SLACK_SIGNING_SECRET)) {
      return new Response('Unauthorized', { status: 401 });
    }

    const params = new URLSearchParams(body);
    const command = params.get('command');
    const text = (params.get('text') || '').trim();
    const responseUrl = params.get('response_url');

    // /qe-help is synchronous — respond immediately
    if (command === '/qe-help') {
      return jsonResponse({ response_type: 'ephemeral', text: HELP_TEXT });
    }

    // All other commands: acknowledge immediately, process in background
    ctx.waitUntil(processCommand(command, text, responseUrl, env));

    return jsonResponse({
      response_type: 'ephemeral',
      text: '_Processing..._',
    });
  },
};

async function processCommand(command, text, responseUrl, env) {
  try {
    const prompt = buildPrompt(command, text);
    const reply = await callClaude(prompt, env.ANTHROPIC_API_KEY);
    await postToSlack(responseUrl, { response_type: 'in_channel', text: reply });
  } catch (err) {
    await postToSlack(responseUrl, {
      response_type: 'ephemeral',
      text: `⚠️ Error: ${err.message}. Check the bot configuration or try again.`,
    });
  }
}

function buildPrompt(command, text) {
  if (command === '/8d') {
    if (!text) return 'Start 8D Coach. Ask me about D0 first.';
    if (text.length > 120) return `Evaluate this 8D report:\n\n${text}`;
    return `Start 8D Coach. The complaint is: ${text}. Begin with D0.`;
  }
  if (command === '/fmea') {
    return text
      ? `Review this FMEA against AIAG-VDA 2019:\n\n${text}`
      : 'Start FMEA Reviewer. Ask me for the FMEA to review (PFMEA or DFMEA).';
  }
  if (command === '/ncr') {
    return text
      ? `Write a professional NCR. Observations:\n${text}`
      : 'Start NCR Writer. Ask me for the defect observations.';
  }
  if (command === '/rca') {
    return text
      ? `Start Root Cause Analysis. Problem statement: ${text}`
      : 'Start Root Cause Analysis. Ask me for the problem statement.';
  }
  if (command === '/audit') {
    return text
      ? `Start Audit Guide. ${text}`
      : 'Start Audit Guide. Ask me which standard (ISO 9001, IATF 16949, or both) and the scope.';
  }
  return text || 'How can I help with quality engineering?';
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
      max_tokens: 1024,
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

async function postToSlack(responseUrl, payload) {
  await fetch(responseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
}

async function verifySlackSignature(request, body, signingSecret) {
  const timestamp = request.headers.get('X-Slack-Request-Timestamp');
  const slackSig = request.headers.get('X-Slack-Signature');

  if (!timestamp || !slackSig) return false;

  // Reject requests older than 5 minutes
  if (Math.abs(Date.now() / 1000 - parseInt(timestamp)) > 300) return false;

  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(signingSecret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const sigBytes = await crypto.subtle.sign(
    'HMAC',
    key,
    encoder.encode(`v0:${timestamp}:${body}`)
  );

  const computed = 'v0=' + Array.from(new Uint8Array(sigBytes))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');

  return computed === slackSig;
}

function jsonResponse(payload) {
  return new Response(JSON.stringify(payload), {
    headers: { 'Content-Type': 'application/json' },
  });
}
