# Microsoft 365 Copilot Setup Guide

> **⭐ Recommended path: the declarative agent in [`declarative-agent/`](declarative-agent/).**
> No backend, no API keys, no code — the agent runs on the user's own M365 Copilot license,
> exactly like the ChatGPT custom GPT and the Claude.ai project instructions.
> See [declarative-agent/README.md](declarative-agent/README.md) for sideload, org-wide
> deployment, and AppSource publication.

---

## Advanced alternative — self-hosted API plugin

The tracks below describe a **different architecture**: an API plugin backed by your own
Cloudflare Worker calling the Anthropic API **at your cost**. Use this only if you need
server-side control over the model and prompts. Most users should use the declarative agent above.

- **Track 0 — Deploy the API (required first):** Deploy the Cloudflare Worker that powers the plugin.
- **Track A — Sideload (internal testing):** Deploy directly to your M365 tenant for testing without AppSource submission.
- **Track B — AppSource publication:** Publish to the Microsoft 365 AppSource marketplace once the API is live.

> **⚠️ Security note:** the Worker **fails closed**. It requires `ANTHROPIC_API_KEY` and
> `API_TOKEN`; until both secrets are set it answers `503` to every request and never calls
> the Anthropic API. Every call must then present `Authorization: Bearer <API_TOKEN>`, and
> browser access is limited to the origins in `ALLOWED_ORIGINS` (no wildcard).
>
> One thing is still on you: **rate limiting is not implemented in the Worker.** The bearer
> token controls *who* can call the API, not *how much* they can spend against your Anthropic
> budget. Configure Cloudflare rate limiting before exposing it to real traffic.
>
> The endpoints accept 8D, NCR and FMEA text, which routinely contains confidential customer,
> product, supplier and IP data. Deploying this Worker sends that text to the Anthropic API —
> do not deploy it for data you are not permitted to disclose to a third-party processor.

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

## AppSource listing

AppSource publication is managed exclusively by @RBraga01 and @migmcc from the official QES repository. Track A (sideload) is the correct path for org-internal deployment without AppSource.

## Updating the plugin

When SKILL.md methodology is updated:
1. Update `plugin-manifest.json` version field.
2. If new functions added, update both `plugin-manifest.json` functions array and `openapi.yaml` paths.
3. Re-sideload the updated package (Track A).

---

## Support

Issues and questions: [github.com/RBraga01/Quality-Engineering-Skills/issues](https://github.com/RBraga01/Quality-Engineering-Skills/issues)
