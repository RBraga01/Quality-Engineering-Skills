# Claude.ai Project — Setup Guide

Set up your own Quality Engineering Assistant in Claude.ai in under 10 minutes.
This creates a private AI assistant that knows your quality engineering skills — 8D, FMEA, NCR, audits — and works inside your Claude.ai account.

> **Prefer a no-setup option?** Use the ready-made [ChatGPT GPT](https://chatgpt.com/g/g-6a22e9e03f8881918c35741d618bad54-quality-engineering-assistant) instead — no configuration needed.

---

## Step 1 — Create the project

1. Go to [claude.ai](https://claude.ai) → **Projects** → **New Project**

2. **Name:**
   ```
   Quality Engineering Assistant
   ```

3. **Project Instructions:**
   Open [`project-instructions.md`](project-instructions.md) in this folder and paste the full content into the **Project Instructions** field.

---

## Step 2 — Upload knowledge files

1. Download the [`knowledge/`](knowledge/) folder from this repository
2. Upload all 16 files to the project (drag & drop or use the upload button)

| File | Content |
|------|---------|
| `8d-problem-solving.md` | Full 8D methodology D0–D8 |
| `8d-template.md` | Fillable 8D report template |
| `5why-root-cause.md` | 5-Why root cause analysis |
| `fishbone-analysis.md` | Fishbone / Ishikawa 6M |
| `is-is-not-scoping.md` | Is / Is-Not problem scoping |
| `pfmea-process.md` | PFMEA 7-step AIAG-VDA 2019 |
| `ap-table.md` | Action Priority table |
| `action-priority-ap.md` | AP classification and OEM rules |
| `ncr-writing.md` | Non-Conformance Report writing |
| `car-corrective-action.md` | Corrective Action Request |
| `8d-report-writing.md` | 8D customer report (OEM formats) |
| `iso-9001-internal-audit.md` | ISO 9001 internal audit |
| `iatf-16949-audit.md` | IATF 16949 supplemental audit |
| `d0-d8-guide.md` | D0–D8 gate criteria reference |
| `oem-requirements.md` | OEM-specific AP requirements |
| `oem-formats.md` | OEM 8D submission formats |

---

## Step 3 — Test before using

Start a conversation with each of these to confirm everything is working:

- `"Evaluate this 8D: [paste a weak example]"` → should flag gaps per discipline
- `"Help me run a 5-Why for a connector intermittent failure"` → should ask for evidence at each step
- `"Write an NCR for a dimensional non-conformance"` → should ask for measured values and spec
- `"Start an ISO 9001 internal audit for clause §8"` → should ask open questions, require evidence

---

## Keeping it up to date

When the skills are updated in the [GitHub repository](https://github.com/RBraga01/Quality-Engineering-Skills):

1. Download the updated files from `platforms/claude-ai/knowledge/`
2. Remove the old files from your Claude.ai project
3. Upload the new versions

The Project Instructions stay the same — only the knowledge files change.

---

## Note on sharing

Claude.ai Projects are private to your account by default. You can share a project link with other Claude users on your team.
A Claude account is required — it is not anonymous like the ChatGPT GPT Store.
