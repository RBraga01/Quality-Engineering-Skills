# Microsoft 365 AppSource / Copilot Plugin Setup Guide

This guide covers three deployment tracks for the Quality Engineering Assistant as an M365 Copilot extension:

- **Track 0 — Deploy the API (required first):** Deploy the Cloudflare Worker that powers the plugin.
- **Track A — Sideload (internal testing):** Deploy directly to your M365 tenant for testing without AppSource submission.
- **Track B — AppSource publication:** Publish to the Microsoft 365 AppSource marketplace once the API is live.

---

---

## Track 0 — Deploy the API (do this first)

The plugin calls a REST API. Deploy it with Cloudflare Workers before configuring the M365 plugin.

### Prerequisites

- [Cloudflare account](https://dash.cloudflare.com) (free tier is sufficient)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/): `npm install -g wrangler`
- Anthropic API key from [console.anthropic.com](https://console.anthropic.com)

### Step 1 — Deploy the Worker

```bash
cd platforms/m365
wrangler deploy
```

This deploys to `https://quality-engineering-assistant-api.<your-subdomain>.workers.dev`.

### Step 2 — Set the API key secret

```bash
wrangler secret put ANTHROPIC_API_KEY
# Paste your Anthropic API key when prompted
```

### Step 3 — (Optional) Add a custom domain

For AppSource submission the API must be at `api.quality-engineering-skills.io`:

1. In [Cloudflare dashboard](https://dash.cloudflare.com) → **Workers & Pages** → `quality-engineering-assistant-api` → **Settings** → **Triggers**
2. Under **Custom Domains**, add `api.quality-engineering-skills.io`
3. Update `platforms/m365/openapi.yaml` server URL to `https://api.quality-engineering-skills.io/v1`

For sideload testing, the `*.workers.dev` URL is sufficient — update `openapi.yaml` with that URL instead.

### Step 4 — Verify the API is live

```bash
curl -X POST https://<your-worker-url>/8d/coach \
  -H "Content-Type: application/json" \
  -d '{"complaint_description":"customer returned parts with incorrect dimensions"}'
```

Expected: a JSON response with `session_id`, `current_step`, and `message` fields.

---

## What this enables

Once deployed, the Quality Engineering Assistant appears as a plugin inside:
- **Microsoft 365 Copilot** (Teams, Outlook, Word, PowerPoint, Excel)
- **Copilot Chat** in Teams
- **Microsoft 365 Chat** at microsoft365.com

Users trigger it by typing `@QE Assistant` or by selecting it from the plugin picker.

---

## Track A — Sideload for internal testing

### Prerequisites

- Microsoft 365 tenant with Copilot licences (M365 E3/E5 + Copilot add-on)
- Teams admin or Global admin rights
- Microsoft 365 Developer Portal access: [dev.teams.microsoft.com](https://dev.teams.microsoft.com)

### Step 1 — Register the app

1. Go to [dev.teams.microsoft.com/apps](https://dev.teams.microsoft.com/apps).
2. Click **New app**.
3. Fill in:
   - **App name:** `Quality Engineering Assistant`
   - **Short description:** `8D, FMEA, NCR, RCA and Internal Audit for quality engineers.`
   - **Long description:** `Structured quality engineering methodology for AI agents. Supports 8D coaching, FMEA review, NCR writing, 5-Why root cause analysis, and ISO 9001 / IATF 16949 internal audit.`
   - **Developer name:** `Quality-Engineering-Skills`
   - **Website URL:** `https://github.com/RBraga01/Quality-Engineering-Skills`
   - **Privacy policy URL:** `https://github.com/RBraga01/Quality-Engineering-Skills/blob/master/LICENSE`
   - **Terms of use URL:** `https://github.com/RBraga01/Quality-Engineering-Skills/blob/master/LICENSE`
4. Upload icons (192×192 color, 32×32 outline PNG).

### Step 2 — Add the plugin capability

1. In the app editor, go to **App features** → **Message extension / Copilot plugin**.
2. Select **Copilot plugin**.
3. Under **Plugin manifest**, upload `platforms/m365/plugin-manifest.json`.
4. Under **API spec**, upload `platforms/m365/openapi.yaml`.

> **Note:** Complete Track 0 (Cloudflare Worker deploy) before sideloading. Update `openapi.yaml` with your Worker URL before uploading the spec in Step 2.

### Step 3 — Sideload to your tenant

1. Click **Preview in Teams** → **Install for me**.
2. Accept the permissions prompt.
3. In Teams, open a new chat with **Copilot**.
4. Click the plugin icon (bottom-right of the chat input) → find **Quality Engineering Assistant**.
5. Enable the plugin.
6. Type: `@QE Assistant start an 8D for a customer complaint`

### Step 4 — Deploy to your organisation (admin)

1. In Teams Admin Center ([admin.teams.microsoft.com](https://admin.teams.microsoft.com)), go to **Teams apps** → **Manage apps**.
2. Click **Upload new app** and upload the `.zip` from the Developer Portal (App Package → Download).
3. Set **Publish status** to **Published**.
4. Go to **Setup policies** to pre-install for target user groups (e.g., Quality department).

---

## Track B — AppSource submission

AppSource requires the public API to be live at `https://api.quality-engineering-skills.io/v1` (complete Track 0 first).

### Prerequisites for AppSource

- Microsoft Partner Center account: [partner.microsoft.com](https://partner.microsoft.com)
- Microsoft 365 App Compliance Program (MCAS/SSPA) — required for marketplace listing
- Public API endpoint responding to all operations in `openapi.yaml`

### Submission checklist

- [ ] Public API live and returning valid responses
- [ ] `openapi.yaml` updated with live server URL
- [ ] `plugin-manifest.json` logo_url pointing to a public PNG
- [ ] App icons (192×192 color + 32×32 outline) prepared
- [ ] Privacy policy page live (separate URL, not GitHub)
- [ ] Terms of use page live
- [ ] Publisher verification complete in Partner Center
- [ ] App tested end-to-end against each function in `plugin-manifest.json`
- [ ] Microsoft App Compliance attestation completed

### Submission steps

1. Log in to [partner.microsoft.com](https://partner.microsoft.com) → **Marketplace offers** → **New offer** → **Microsoft 365 and Teams app**.
2. Complete product listing:
   - Category: **Productivity** → **Project management**
   - Secondary category: **Compliance & legal**
3. Upload the app package (from Developer Portal).
4. Complete the App Compliance section.
5. Submit for Microsoft review (typically 5–7 business days).

---

## Updating the plugin

When SKILL.md methodology is updated:
1. Update `plugin-manifest.json` version field.
2. If new functions added, update both `plugin-manifest.json` functions array and `openapi.yaml` paths.
3. Re-sideload or resubmit to AppSource as applicable.
4. For AppSource: incremental updates resubmit through Partner Center (same offer, new version).

---

## Support

Issues and questions: [github.com/RBraga01/Quality-Engineering-Skills/issues](https://github.com/RBraga01/Quality-Engineering-Skills/issues)
