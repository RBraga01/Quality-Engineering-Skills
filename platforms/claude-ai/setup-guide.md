# Claude.ai Project — Setup Guide

## Create the project at claude.ai

1. Go to claude.ai → **Projects** → **New Project**

2. **Name:**
   ```
   Quality Engineering Assistant
   ```

3. **Project Instructions:**
   Paste the full content of `project-instructions.md`

4. **Add knowledge files** (drag & drop or upload):
   All 16 files are pre-renamed and ready in **`platforms/claude-ai/knowledge/`**.
   Download that folder and upload all files directly — no renaming needed.

   | File | Content |
   |------|---------|
   | `8d-problem-solving.md` | Core skill |
   | `8d-template.md` | 8D fillable template |
   | `5why-root-cause.md` | Core skill |
   | `fishbone-analysis.md` | Core skill |
   | `is-is-not-scoping.md` | Core skill |
   | `pfmea-process.md` | Core skill |
   | `ap-table.md` | AP table reference |
   | `action-priority-ap.md` | Core skill |
   | `ncr-writing.md` | Core skill |
   | `car-corrective-action.md` | Core skill |
   | `8d-report-writing.md` | Core skill |
   | `iso-9001-internal-audit.md` | Core skill |
   | `iatf-16949-audit.md` | Core skill |
   | `d0-d8-guide.md` | D0–D8 gate criteria reference |
   | `oem-requirements.md` | OEM-specific AP requirements |
   | `oem-formats.md` | OEM 8D submission formats |

   > When skills are updated, re-copy the updated files into `platforms/claude-ai/knowledge/` before re-uploading.

5. **Test before sharing:**
   - Start conversation: "Evaluate this 8D: [paste a weak example]"
   - Start conversation: "Help me with a 5-Why for a connector failure"
   - Confirm responses follow the validation gate logic

## Sharing with others

Claude.ai Projects can be shared via link with other Claude users.
Useful for: sharing with a quality team, testing with colleagues before broader launch.

Note: Claude.ai Projects require a Claude account. Not as frictionless as ChatGPT's GPT Store for anonymous users — prioritise the ChatGPT GPT for widest reach.

## Keeping it updated

When the SKILL.md files are updated in the GitHub repo:
1. Download the updated files
2. Re-upload to the project (replace existing)
The project instructions remain the same — only the knowledge files change.
