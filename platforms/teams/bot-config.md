# Copilot Studio → Teams Setup Guide

Deploy the Quality Engineering Assistant to Microsoft Teams in under 30 minutes using Microsoft Copilot Studio (free with M365 Business / Enterprise).

---

## Prerequisites

- Microsoft 365 Business Standard / Premium / Enterprise (or Copilot Studio standalone licence)
- Teams admin rights (or IT admin approval to publish custom apps)
- Access to [copilotstudio.microsoft.com](https://copilotstudio.microsoft.com)

---

## Step 1 — Create the agent in Copilot Studio

1. Go to [copilotstudio.microsoft.com](https://copilotstudio.microsoft.com) and sign in with your M365 account.
2. Click **Create** → **New agent**.
3. Name: `Quality Engineering Assistant`
4. Description: `Structured quality engineering methodology — 8D, FMEA, NCR, RCA, Internal Audit. Powered by Quality-Engineering-Skills.`
5. Click **Skip to configure** (skip the AI-assisted wizard).

---

## Step 2 — Paste the instructions

1. In the **Instructions** tab, delete the default text.
2. Open `platforms/teams/copilot-instructions.md` from this repository.
3. Copy the entire content (everything below the `#` comment header lines).
4. Paste into the Instructions field.
5. Click **Save**.

---

## Step 3 — Set the opening message

1. Go to **Settings** → **Conversation start**.
2. Under **Greeting message**, paste:

```
I'm your Quality Engineering Assistant. I can help you with:
- 8D coaching — guide you through D0 to D8
- 8D evaluation — review and score an existing 8D
- Root cause analysis — structured 5-Why facilitation
- NCR writing — professional non-conformance documentation
- Internal audit — ISO 9001 or IATF 16949 clause-by-clause

What are you working on?
```

---

## Step 4 — (Optional) Add knowledge sources

Upload the SKILL.md files as knowledge sources to give the agent deeper, citation-backed answers.

1. Go to **Knowledge** → **Add knowledge**.
2. Select **Files**.
3. Upload the following files from `skills/`:
   - `problem-solving/8d-problem-solving/SKILL.md`
   - `problem-solving/5why-root-cause/SKILL.md`
   - `problem-solving/fishbone-analysis/SKILL.md`
   - `problem-solving/is-is-not-scoping/SKILL.md`
   - `risk-analysis/pfmea-process/SKILL.md`
   - `risk-analysis/dfmea-design/SKILL.md`
   - `risk-analysis/action-priority-ap/SKILL.md`
   - `documentation/ncr-writing/SKILL.md`
   - `documentation/car-corrective-action/SKILL.md`
   - `documentation/8d-report-writing/SKILL.md`
   - `audit/iso-9001-internal-audit/SKILL.md`
   - `audit/iatf-16949-audit/SKILL.md`
4. Click **Save**.

> **Note:** Copilot Studio uses the uploaded files for RAG (retrieval-augmented generation). The instructions in Step 2 define behaviour; the uploaded files add methodology depth.

---

## Step 5 — Test in Copilot Studio

1. Click **Test your agent** (top-right panel).
2. Type: `I need to open an 8D for a customer complaint`
3. Verify the agent starts the D0 gate correctly.
4. Type: `evaluate this 8D:` and paste any sample 8D text.
5. Verify the evaluation report format.

---

## Step 6 — Publish to Teams

1. Click **Publish** → **Publish** to save the latest version.
2. Go to **Channels** → **Microsoft Teams**.
3. Click **Turn on Teams**.
4. Click **Open agent in Teams** — this opens the Teams client with the bot available to you personally.

---

## Step 7 — Make available to your organisation

**Option A — Share with specific users (quickest):**
1. In Copilot Studio, go to **Share**.
2. Add users by email or M365 group.
3. Users receive a Teams chat notification with a link to open the bot.

**Option B — Deploy via Teams Admin Center (org-wide):**
1. In Copilot Studio, go to **Channels** → **Microsoft Teams** → **Download Teams app package** (downloads a `.zip`).
2. Go to [admin.teams.microsoft.com](https://admin.teams.microsoft.com).
3. **Teams apps** → **Manage apps** → **Upload new app**.
4. Upload the `.zip` package.
5. Set **Publish status** to **Published**.
6. Optionally pin the app for target users via **Setup policies**.

---

## Step 8 — Pin to Teams sidebar (recommended)

Users can pin the bot to the left rail for fast access:
1. Right-click the bot name in the Teams sidebar.
2. Select **Pin**.

Or deploy pinned automatically via Teams Admin Center → **Setup policies** → **Pinned apps**.

---

## Updating the agent

When SKILL.md files are updated in this repository:
1. Re-upload updated SKILL.md files in **Knowledge** → replace existing files.
2. Click **Publish** to push the update live.
3. No user action required — the update is instant for all connected users.

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Bot doesn't respond in Teams | Verify the agent is published (not just saved) and Teams channel is enabled |
| Bot gives generic answers | Check that instructions were pasted correctly and saved |
| "Human error" not challenged | Ensure the full instructions block was pasted — check for truncation |
| Cannot upload app to Admin Center | Requires Teams admin role — contact your IT admin |
| Knowledge not retrieving files | Re-upload SKILL.md files; ensure files are under 512KB each |

---

## Support

Issues and questions: [github.com/RBraga01/Quality-Engineering-Skills/issues](https://github.com/RBraga01/Quality-Engineering-Skills/issues)
