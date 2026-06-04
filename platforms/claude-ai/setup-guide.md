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
   Upload these files from the repository:
   - `skills/problem-solving/8d-problem-solving/SKILL.md`
   - `skills/problem-solving/8d-problem-solving/assets/8d-template.md`
   - `skills/problem-solving/5why-root-cause/SKILL.md`
   - `skills/problem-solving/fishbone-analysis/SKILL.md`
   - `skills/problem-solving/is-is-not-scoping/SKILL.md`
   - `skills/problem-solving/pdca-improvement/SKILL.md`
   - `skills/risk-analysis/pfmea-process/SKILL.md`
   - `skills/risk-analysis/pfmea-process/assets/ap-table.md`
   - `skills/risk-analysis/dfmea-design/SKILL.md`
   - `skills/risk-analysis/action-priority-ap/SKILL.md`
   - `skills/documentation/ncr-writing/SKILL.md`
   - `skills/documentation/car-corrective-action/SKILL.md`
   - `skills/documentation/8d-report-writing/SKILL.md`
   - `skills/audit/iso-9001-internal-audit/SKILL.md`
   - `skills/audit/iatf-16949-audit/SKILL.md`

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
