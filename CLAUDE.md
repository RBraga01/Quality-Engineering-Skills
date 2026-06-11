# Quality-Engineering-Skills — Claude Code Rules

## Team

| Role | GitHub | Scope |
|------|--------|-------|
| Creator | @RBraga01 (Ricardo Braga) | All decisions. Final authority on structure, platforms, releases |
| Creator | @migmcc | All decisions. Equal authority on structure, platforms, releases, and content |

## Workflow

Both creators push directly to `master`. No PR required.

| Who | Workflow |
|-----|----------|
| @RBraga01 | Pushes directly to `master`. No PR required. |
| @migmcc | Pushes directly to `master`. No PR required. |

For significant structural changes (new domains, platform connector changes, releases), creators align before pushing — not as a gate, but as good practice between co-owners.

## What both creators can do without prior authorisation

- Any change to `SKILL.md` files (corrections, new skills, new domains)
- Any change to `skills/agents/` (agent definitions)
- Any change to `platforms/` (ChatGPT, Claude.ai, Teams, Gemini, Slack connectors)
- Any change to `README.md`, `CONTRIBUTING.md`, `CLAUDE.md`, `LICENSE`
- Add or edit files inside `assets/` or `references/` within any skill folder
- Repo settings, GitHub Actions, branch rules

## Source of truth

- `skills/` SKILL.md files are the canonical source for all methodology content
- Platform connectors in `platforms/` adapt FROM the SKILL.md files — never the other way around
- The master plan is at `E:\quality-engineering-skills.md` (local to lead, not in repo)

## Commit message format

```
<type>: <short description>
```

Types: `feat`, `fix`, `docs`, `chore`, `refactor`

Examples:
- `feat: add pfmea-detection-controls skill`
- `fix: correct ap-table severity thresholds`
- `docs: add reference links to 8d-problem-solving`
