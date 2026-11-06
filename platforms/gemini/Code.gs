/**
 * Quality Engineering Assistant — Google Workspace Add-on
 *
 * Setup:
 * 1. In Apps Script editor, go to Project Settings → Script Properties
 * 2. Add property: GEMINI_API_KEY = your key from aistudio.google.com/apikey
 * 3. Deploy as Google Workspace Add-on (see marketplace-listing.md)
 */

const DEFAULT_GEMINI_MODEL = 'gemini-3.1-flash-lite'; // Supported 2026 replacement; override through Script Properties.

const SYSTEM_INSTRUCTIONS = `You are an expert Quality Engineering Assistant with 15+ years of hands-on experience in automotive supplier quality, ISO 9001, IATF 16949, AIAG-VDA FMEA, and quality management systems. You work like a senior quality engineer sitting next to the user — direct, practical, evidence-based.

You are powered by Quality-Engineering-Skills (github.com/RBraga01/Quality-Engineering-Skills).

You operate inside a Google Workspace sidebar. Keep responses concise. Use markdown-style formatting with **bold** for key terms. Adapt output for the current app:
- In Google Docs: use heading structure for reports
- In Google Sheets: offer table-formatted output the user can paste
- In Gmail: offer to draft the response as email-ready text

8D COACH VALIDATION GATES:
D0: safety confirmed, suspect material status known
D1: cross-functional team (quality + production + engineering minimum)
D2: measured values vs. spec, part number + revision, quantity. NO root cause in D2.
D3: ICA in PAST TENSE with date and verification evidence. Reject promises.
D4: TWO root causes — occurrence AND escape. Reject "human error" without drilling deeper.
D5: PCA addresses D4 root cause. Verification plan required. "Retrain" alone is never sufficient.
D6: production data after PCA. ICA removal only after D6 evidence.
D7: FMEA + Control Plan + Work Instructions updated. Horizontal deployment assessed.
D8: champion sign-off. Customer notification if applicable.

CRITICAL RULES:
- Challenge every "human error" root cause
- Require evidence at every step
- ICA must be in PAST TENSE
- NCR must NOT contain root cause, speculation, or blame
- AP=H in FMEA always requires owner + target date

TONE: Direct and specific. Challenge weak answers constructively. No disclaimers. You are a quality engineering expert.`;

// ── Entry points ──────────────────────────────────────────────────────────────

function onHomepage(e) {
  return buildHomeCard();
}

function onDocsHomepage(e) {
  return buildHomeCard('docs');
}

function onSheetsHomepage(e) {
  return buildHomeCard('sheets');
}

function onGmailOpen(e) {
  return buildHomeCard('gmail');
}

// ── Card builders ─────────────────────────────────────────────────────────────

function buildHomeCard(appContext) {
  const header = CardService.newCardHeader()
    .setTitle('Quality Engineering Assistant')
    .setSubtitle('ISO 9001 · IATF 16949 · AIAG-VDA FMEA')
    .setImageUrl('https://raw.githubusercontent.com/RBraga01/Quality-Engineering-Skills/master/platforms/gemini/logo.png')
    .setImageStyle(CardService.ImageStyle.CIRCLE);

  const modeSection = CardService.newCardSection()
    .setHeader('Choose a mode')
    .addWidget(
      CardService.newTextButton()
        .setText('🔧 8D Coach')
        .setOnClickAction(CardService.newAction().setFunctionName('open8DCoach'))
    )
    .addWidget(
      CardService.newTextButton()
        .setText('📋 8D Evaluator')
        .setOnClickAction(CardService.newAction().setFunctionName('open8DEvaluator'))
    )
    .addWidget(
      CardService.newTextButton()
        .setText('🔍 Root Cause Analysis')
        .setOnClickAction(CardService.newAction().setFunctionName('openRCA'))
    )
    .addWidget(
      CardService.newTextButton()
        .setText('📄 NCR Writer')
        .setOnClickAction(CardService.newAction().setFunctionName('openNCR'))
    )
    .addWidget(
      CardService.newTextButton()
        .setText('✅ Audit Guide')
        .setOnClickAction(CardService.newAction().setFunctionName('openAudit'))
    )
    .addWidget(
      CardService.newTextButton()
        .setText('⚙️ FMEA Reviewer')
        .setOnClickAction(CardService.newAction().setFunctionName('openFMEA'))
    );

  const footerSection = CardService.newCardSection()
    .addWidget(
      CardService.newTextParagraph().setText(
        '<font color="#6b7280">Powered by Quality-Engineering-Skills</font>'
      )
    );

  return CardService.newCardBuilder()
    .setHeader(header)
    .addSection(modeSection)
    .addSection(footerSection)
    .build();
}

function buildInputCard(title, inputLabel, inputHint, submitFunction, placeholder) {
  const header = CardService.newCardHeader().setTitle(title);

  const inputSection = CardService.newCardSection()
    .addWidget(
      CardService.newTextInput()
        .setFieldName('user_input')
        .setTitle(inputLabel)
        .setHint(inputHint || '')
        .setMultiline(true)
        .setValue(placeholder || '')
    )
    .addWidget(
      CardService.newButtonSet()
        .addButton(
          CardService.newTextButton()
            .setText('Submit')
            .setOnClickAction(
              CardService.newAction().setFunctionName(submitFunction)
            )
            .setTextButtonStyle(CardService.TextButtonStyle.FILLED)
        )
        .addButton(
          CardService.newTextButton()
            .setText('← Back')
            .setOnClickAction(CardService.newAction().setFunctionName('onHomepage'))
        )
    );

  return CardService.newCardBuilder()
    .setHeader(header)
    .addSection(inputSection)
    .build();
}

function buildResultCard(title, result, nextFunction) {
  const header = CardService.newCardHeader().setTitle(title);

  const resultSection = CardService.newCardSection()
    .addWidget(CardService.newTextParagraph().setText(result));

  const buttonSet = CardService.newButtonSet()
    .addButton(
      CardService.newTextButton()
        .setText('New request')
        .setOnClickAction(CardService.newAction().setFunctionName(nextFunction || 'onHomepage'))
    )
    .addButton(
      CardService.newTextButton()
        .setText('← Home')
        .setOnClickAction(CardService.newAction().setFunctionName('onHomepage'))
    );

  if (SpreadsheetApp && nextFunction !== 'onHomepage') {
    try {
      buttonSet.addButton(
        CardService.newTextButton()
          .setText('Copy to Sheet')
          .setOnClickAction(CardService.newAction().setFunctionName('copyResultToSheet')
            .setParameters({ content: result }))
      );
    } catch (e) { /* not in Sheets context */ }
  }

  const actionSection = CardService.newCardSection().addWidget(buttonSet);

  return CardService.newCardBuilder()
    .setHeader(header)
    .addSection(resultSection)
    .addSection(actionSection)
    .build();
}

// ── Mode openers ──────────────────────────────────────────────────────────────

function open8DCoach(e) {
  return buildInputCard(
    '8D Coach',
    'Describe the customer complaint',
    'What happened? What part? How many affected?',
    'submit8DCoach'
  );
}

function open8DEvaluator(e) {
  return buildInputCard(
    '8D Evaluator',
    'Paste your 8D report',
    'Copy and paste the full 8D text to evaluate',
    'submit8DEvaluator'
  );
}

function openRCA(e) {
  return buildInputCard(
    'Root Cause Analysis',
    'Problem statement',
    'Describe the problem clearly. Include what, where, when, how many.',
    'submitRCA'
  );
}

function openNCR(e) {
  return buildInputCard(
    'NCR Writer',
    'Defect observations (bullet points)',
    'Part number, defect description, quantities, measurements',
    'submitNCR'
  );
}

function openAudit(e) {
  return buildInputCard(
    'Audit Guide',
    'Standard and scope',
    'e.g. ISO 9001 full QMS, or IATF clause 8.4, or both',
    'submitAudit'
  );
}

function openFMEA(e) {
  return buildInputCard(
    'FMEA Reviewer',
    'Paste FMEA content or describe the process',
    'Include: process step, function, failure mode, effect, cause, controls, AP rating',
    'submitFMEA'
  );
}

// ── Submit handlers ───────────────────────────────────────────────────────────

function submit8DCoach(e) {
  const input = e.formInput.user_input;
  const prompt = `Start 8D Coach. Complaint: ${input}. Begin with D0 gate.`;
  const result = callGemini(prompt);
  return buildResultCard('8D Coach — D0', result, 'open8DCoach');
}

function submit8DEvaluator(e) {
  const input = e.formInput.user_input;
  const prompt = `Evaluate this 8D report against ISO 9001 §10.2 / IATF 16949 §10.2.3 criteria:\n\n${input}`;
  const result = callGemini(prompt);
  return buildResultCard('8D Evaluation Report', result, 'open8DEvaluator');
}

function submitRCA(e) {
  const input = e.formInput.user_input;
  const prompt = `Start Root Cause Analysis. Problem: ${input}. Begin with Why 1.`;
  const result = callGemini(prompt);
  return buildResultCard('Root Cause Analysis', result, 'openRCA');
}

function submitNCR(e) {
  const input = e.formInput.user_input;
  const prompt = `Write a professional NCR. Observations:\n${input}`;
  const result = callGemini(prompt);
  return buildResultCard('NCR Draft', result, 'openNCR');
}

function submitAudit(e) {
  const input = e.formInput.user_input;
  const prompt = `Start Audit Guide. Scope: ${input}`;
  const result = callGemini(prompt);
  return buildResultCard('Audit Guide', result, 'openAudit');
}

function submitFMEA(e) {
  const input = e.formInput.user_input;
  const prompt = `Review this FMEA against AIAG-VDA 2019. Identify gaps, incorrect AP ratings, missing failure modes:\n\n${input}`;
  const result = callGemini(prompt);
  return buildResultCard('FMEA Gap Report', result, 'openFMEA');
}

// ── Gemini API call ───────────────────────────────────────────────────────────

function callGemini(userMessage) {
  const settings = PropertiesService.getScriptProperties();
  const apiKey = settings.getProperty('GEMINI_API_KEY');
  if (!apiKey) {
    return 'Gemini is not configured. Add GEMINI_API_KEY in Apps Script → Project Settings → Script Properties.';
  }
  const model = settings.getProperty('GEMINI_MODEL') || DEFAULT_GEMINI_MODEL;
  if (!/^[a-zA-Z0-9._-]+$/.test(model)) {
    return 'Invalid Gemini model setting. Check GEMINI_MODEL in Script Properties.';
  }
  const url = 'https://generativelanguage.googleapis.com/v1beta/models/'
    + encodeURIComponent(model) + ':generateContent?key=' + encodeURIComponent(apiKey);
  const payload = {
    system_instruction: { parts: [{ text: SYSTEM_INSTRUCTIONS }] },
    contents: [{ role: 'user', parts: [{ text: userMessage }] }],
    generationConfig: { temperature: 0.3, maxOutputTokens: 2048 },
  };
  try {
    const response = UrlFetchApp.fetch(url, {
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify(payload),
      muteHttpExceptions: true,
    });
    const status = response.getResponseCode();
    if (status === 401 || status === 403) return 'Gemini authentication failed. Check GEMINI_API_KEY and permissions.';
    if (status === 404) return 'Gemini model not available. Check the GEMINI_MODEL setting.';
    if (status === 429) return 'Gemini quota or rate limit reached. Try again later.';
    if (status >= 500) return 'Gemini is temporarily unavailable. Try again later.';
    if (status < 200 || status >= 300) return 'Gemini request failed (HTTP ' + status + ').';
    const data = JSON.parse(response.getContentText());
    const candidate = data.candidates && data.candidates[0];
    const parts = candidate && candidate.content && candidate.content.parts;
    const text = parts && parts.filter(p => typeof p.text === 'string').map(p => p.text).join('\n');
    return text || 'Gemini returned no text. Retry or choose another supported model.';
  } catch (_) {
    // Never expose exception messages: some transport failures include the URL/API key.
    return 'Gemini request failed. Check your configuration and connection.';
  }
}

// ── Utility ───────────────────────────────────────────────────────────────────

function copyResultToSheet(e) {
  try {
    const content = e.parameters.content;
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const lastRow = sheet.getLastRow();
    sheet.getRange(lastRow + 1, 1).setValue(content);
    return CardService.newActionResponseBuilder()
      .setNotification(CardService.newNotification().setText('Result copied to sheet.'))
      .build();
  } catch (err) {
    return CardService.newActionResponseBuilder()
      .setNotification(CardService.newNotification().setText('Could not copy to sheet.'))
      .build();
  }
}
