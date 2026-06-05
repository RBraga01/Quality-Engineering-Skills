# Quality-Engineering-Skills — Claude Code Rules

## Team

| Role | GitHub | Scope |
|------|--------|-------|
| Lead manager | @RBraga01 (Ricardo Braga) | All decisions. Final authority on structure, platforms, releases |
| Contributor | @migmcc | Skill content only — see allowed work below |

## Workflow — no direct pushes to master

1. Create a feature branch: `git checkout -b feat/skill-name` or `fix/description`
2. Work locally and commit
3. Push branch and open a PR on GitHub
4. Wait for @RBraga01 review and approval before merging
5. **Never push directly to `master`**

### Branch naming

| Prefix | Use for |
|--------|---------|
| `feat/skill-name` | New skill |
| `fix/skill-name` | Correction to existing skill |
| `docs/description` | Documentation only |
| `chore/description` | Maintenance, formatting |

## What @migmcc can do without prior authorisation

- Edit content inside any existing `SKILL.md` (corrections, improvements, additions)
- Create new `SKILL.md` files inside existing domain folders under `skills/`
- Add or edit files inside `assets/` or `references/` within an existing skill folder
- Fix typos, improve language, add examples, improve validation criteria

Open a PR for any of the above — @RBraga01 reviews and merges.

## What requires explicit authorisation before implementing

Do NOT implement these. Open a GitHub Issue with label `proposal` and wait for approval.

- Any change to `platforms/` (ChatGPT, Claude.ai, Teams, Gemini, Slack connectors)
- Any change to `skills/agents/` (agent definitions)
- Creating a new domain folder (new top-level directory under `skills/`)
- Any change to `README.md`, `CONTRIBUTING.md`, `CLAUDE.md`, `LICENSE`
- Repo settings, GitHub Actions, branch rules
- Making the repository public (only at Week 5 launch — never before)

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
