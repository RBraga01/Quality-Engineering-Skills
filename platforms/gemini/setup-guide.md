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
3. Replace the content with the **canonical** [`platforms/gemini/appsscript.json`](appsscript.json). `workspace-addon-manifest.json` remains an identical compatibility copy; do not mix callbacks from a different sample.

### Step 3 — Install the actual implementation

Copy the **entire** [`Code.gs`](Code.gs) from this repository into your Apps Script project.
Do **not** use older snippets or a partial handler example: the manifest references the
entry points implemented in that exact file. The full script contains the 8D, NCR, FMEA,
audit and RCA cards and their submit handlers.

This first version is intentionally **stateless**: each Submit request sends the supplied
text in a new Gemini request. The result card's **New request** button starts a fresh form,
not a continuation of the previous investigation. Do not paste confidential supplier/customer
content without permission to transmit it to Google.

The model defaults to `gemini-3.1-flash-lite` (supported replacement in the 2026 Gemini
deprecation guide). You can set `GEMINI_MODEL` in Script Properties to another
supported model if your account and budget require it. Confirm current support and pricing
before deployment.

### Step 4 — Add your API key

1. In Apps Script, go to **Project Settings** → **Script properties**.
2. Click **Add script property**.
3. Property name: `GEMINI_API_KEY`
4. Value: your Gemini API key from [aistudio.google.com/apikey](https://aistudio.google.com/apikey)
5. Click **Save script properties**. Optionally add `GEMINI_MODEL` (for example `gemini-3.1-flash-lite`). The script never stores the key in the repository.

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
