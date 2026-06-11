# Google Gemini / Workspace Setup Guide

Two deployment tracks, from quickest to most powerful:

- **Track A — AI Studio (available now, zero setup):** Use the system prompt directly in Google AI Studio or Gemini Advanced. Works today, no coding required.
- **Track B — Workspace Add-on (Apps Script):** Deploy as a native sidebar in Google Docs, Sheets, and Gmail. Requires Apps Script setup.

---

## Track A — Google AI Studio / Gemini Advanced

### Option 1: Google AI Studio (aistudio.google.com)

Best for: developers, testing, API-based workflows.

1. Go to [aistudio.google.com](https://aistudio.google.com).
2. Click **New prompt** → **System instructions**.
3. Open `platforms/gemini/gemini-instructions.md` from this repository.
4. Copy all content (everything below the `#` comment header lines).
5. Paste into the **System instructions** field.
6. Under **Model**, select **Gemini 2.0 Flash** or **Gemini 2.0 Pro** (Pro for best methodology depth).
7. Click **Run** to start a session.
8. To save: click **Save prompt** and share the link with your team.

**Multimodal tip:** In AI Studio, you can upload a photo of a defect or a printed 8D form directly in the prompt. The assistant will analyse the image and apply the quality methodology.

### Option 2: Gemini Advanced (gemini.google.com)

Best for: individual quality engineers with Google One AI Premium or Google Workspace.

1. Go to [gemini.google.com](https://gemini.google.com).
2. Start a new conversation.
3. Paste the content of `platforms/gemini/gemini-instructions.md` as your first message, followed by:
   ```
   This is your system context. Acknowledge and wait for my first quality engineering request.
   ```
4. Gemini will acknowledge and be ready.

> **Limitation:** Gemini Advanced does not have persistent system instructions like AI Studio. Re-paste at the start of each new conversation, or use Google AI Studio for persistent configuration.

### Option 3: Gemini for Google Workspace (Admin deployment)

If your organisation has **Gemini for Google Workspace** (Business/Enterprise add-on):

1. Ask your Google Workspace admin to configure a **Gemini App** via [admin.google.com](https://admin.google.com).
2. The admin can set a custom system prompt at the organisation level under **Apps** → **Google Workspace** → **Gemini**.
3. Provide the admin with `platforms/gemini/gemini-instructions.md` content.

---

## Track B — Google Workspace Add-on (Apps Script)

Deploy as a native sidebar in Google Docs, Sheets, and Gmail. Users open the sidebar and interact with the Quality Engineering Assistant without leaving their document.

### Prerequisites

- Google Workspace account (Business Starter or higher)
- Access to [script.google.com](https://script.google.com) (Apps Script)
- Gemini API key from [aistudio.google.com/apikey](https://aistudio.google.com/apikey)

### Step 1 — Create the Apps Script project

1. Go to [script.google.com](https://script.google.com).
2. Click **New project**.
3. Name: `Quality Engineering Assistant`.

### Step 2 — Set up the manifest

1. Click **Project Settings** (gear icon) → enable **Show "appsscript.json" manifest file in editor**.
2. In the editor, open `appsscript.json`.
3. Replace the content with the contents of `platforms/gemini/workspace-addon-manifest.json` from this repository.

### Step 3 — Create the main script

Create a new file `Code.gs` and add the following:

```javascript
const GEMINI_API_KEY = PropertiesService.getScriptProperties().getProperty('GEMINI_API_KEY');
const GEMINI_MODEL = 'gemini-2.0-flash';
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

// Load system instructions from the repository (or paste inline)
const SYSTEM_INSTRUCTIONS = `[PASTE CONTENT OF platforms/gemini/gemini-instructions.md HERE]`;

function onHomepage(e) {
  return buildCard('Quality Engineering Assistant', 
    'Choose a mode to get started:', 
    getMainMenuButtons());
}

function start8DCoach(e) {
  const response = callGemini('Start the 8D Coach. Ask me D0 first.');
  return buildCard('8D Coach', response, [backButton()]);
}

function startNCRWriter(e) {
  const response = callGemini('Start NCR Writer mode. Ask me for the defect observations.');
  return buildCard('NCR Writer', response, [backButton()]);
}

function startRCA(e) {
  const response = callGemini('Start Root Cause Analysis mode. Ask me for the problem statement.');
  return buildCard('Root Cause Analysis', response, [backButton()]);
}

function startAuditGuide(e) {
  const response = callGemini('Start Audit Guide mode. Ask me which standard to audit.');
  return buildCard('Audit Guide', response, [backButton()]);
}

function onDocOpen(e) { return onHomepage(e); }
function onSheetOpen(e) { return onHomepage(e); }
function onGmailMessage(e) { return onHomepage(e); }

function callGemini(userMessage) {
  const payload = {
    system_instruction: { parts: [{ text: SYSTEM_INSTRUCTIONS }] },
    contents: [{ role: 'user', parts: [{ text: userMessage }] }],
    generationConfig: { temperature: 0.3, maxOutputTokens: 2048 }
  };
  
  const options = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };
  
  const response = UrlFetchApp.fetch(GEMINI_API_URL, options);
  const json = JSON.parse(response.getContentText());
  
  if (json.candidates && json.candidates[0]) {
    return json.candidates[0].content.parts[0].text;
  }
  return 'Error: Could not reach Gemini API. Check your API key in Script Properties.';
}

function buildCard(title, text, buttons) {
  return CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader().setTitle(title))
    .addSection(
      CardService.newCardSection()
        .addWidget(CardService.newTextParagraph().setText(text))
    )
    .addSection(
      CardService.newCardSection().addWidget(
        buttons.reduce((row, btn) => row.addButton(btn), 
          CardService.newButtonSet())
      )
    )
    .build();
}

function getMainMenuButtons() {
  return CardService.newButtonSet()
    .addButton(CardService.newTextButton().setText('8D Coach').setOnClickAction(
      CardService.newAction().setFunctionName('start8DCoach')))
    .addButton(CardService.newTextButton().setText('NCR Writer').setOnClickAction(
      CardService.newAction().setFunctionName('startNCRWriter')))
    .addButton(CardService.newTextButton().setText('Root Cause').setOnClickAction(
      CardService.newAction().setFunctionName('startRCA')))
    .addButton(CardService.newTextButton().setText('Audit Guide').setOnClickAction(
      CardService.newAction().setFunctionName('startAuditGuide')));
}

function backButton() {
  return CardService.newTextButton().setText('← Back').setOnClickAction(
    CardService.newAction().setFunctionName('onHomepage'));
}
```

### Step 4 — Add your API key

1. In Apps Script, go to **Project Settings** → **Script properties**.
2. Click **Add script property**.
3. Property name: `GEMINI_API_KEY`
4. Value: your Gemini API key from [aistudio.google.com/apikey](https://aistudio.google.com/apikey)
5. Click **Save script properties**.

### Step 5 — Deploy

1. Click **Deploy** → **New deployment**.
2. Select type: **Add-on**.
3. Description: `Quality Engineering Assistant v1.0`
4. Click **Deploy**.
5. In the deployment dialog, copy the **Deployment ID**.

### Step 6 — Install and test

1. Open a Google Doc.
2. Go to **Extensions** → **Add-ons** → **Manage add-ons**.
3. Find your deployed add-on and install it.
4. The sidebar will appear under **Extensions** → **Quality Engineering Assistant**.

---

## Updating the add-on

When `gemini-instructions.md` is updated:
1. Update the `SYSTEM_INSTRUCTIONS` constant in `Code.gs`.
2. Deploy a new version: **Deploy** → **Manage deployments** → **Edit** → **New version**.
3. All users get the update automatically.

---

## Support

Issues: [github.com/RBraga01/Quality-Engineering-Skills/issues](https://github.com/RBraga01/Quality-Engineering-Skills/issues)
