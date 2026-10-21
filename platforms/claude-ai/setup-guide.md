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

The `platforms/claude-ai/knowledge/` folder contains **36 generated mirrors**
of the canonical source, validated byte-for-byte by CI. It is not a 16-file
upload package.

For manual setup, use the same **10-file consolidated export** in
[`../chatgpt/export/`](../chatgpt/export/), including `00-INDEX.md`.
Upload those ten Markdown files to your Claude.ai Project subject to
your account's current file limits. All 23 skills, 8 agents and the
supporting Markdown references/templates are represented.

## Step 3 — Test before using

Start a conversation with each of these to confirm everything is working:

- `"Evaluate this 8D: [paste a weak example]"` → should flag gaps per discipline
- `"Help me run a 5-Why for a connector intermittent failure"` → should ask for evidence at each step
- `"Write an NCR for a dimensional non-conformance"` → should ask for measured values and spec
- `"Start an ISO 9001 internal audit for clause §8"` → should ask open questions, require evidence

---

## Keeping it up to date

When the skills are updated in the [GitHub repository](https://github.com/RBraga01/Quality-Engineering-Skills):

1. Download the updated files from `platforms/chatgpt/export/`
2. Remove the old files from your Claude.ai project
3. Upload all ten regenerated Markdown files

The Project Instructions stay the same — only the knowledge files change.

---

## Note on sharing

Claude.ai Projects are private to your account by default. You can share a project link with other Claude users on your team.
A Claude account is required — ChatGPT GPTs also require account sign-in to chat.
