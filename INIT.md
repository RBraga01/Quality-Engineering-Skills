# Project Init Document

---

## Project Identity

**Name:** Quality Engineering Skills
**Type:** other (knowledge/skills repository — Markdown skill files for AI agents)
**Status:** active-development

## Primary Programming Languages

This is a documentation/skills repository. No compiled languages are used.

- [ ] TypeScript / JavaScript
- [ ] Python
- [ ] Go
- [ ] Rust
- [ ] Kotlin / Java (Android)
- [ ] Swift (iOS / macOS)
- [ ] Dart (Flutter)
- [x] Other: Markdown (SKILL.md files, templates, agent instructions)

## Tech Stack

**Frontend:** none
**Backend:** none
**Database:** none
**Runtime:** none
**CI/CD:** GitHub Actions (planned)

## Communication & Collaboration Tools

- [ ] Gmail / email
- [ ] Slack
- [x] GitHub Issues / PRs
- [ ] Linear
- [ ] Notion
- [ ] None — this is a pure engineering project

## Scope Boundaries

**Will this project have E2E tests?** no
**Will this project use a PostgreSQL database?** no
**Will this project handle authentication or user data?** no
**Is there a multi-channel communication workflow?** no
**Are there autonomous agent loops running unattended?** no
**Will there be regular documentation / codemaps?** yes
**Does this project make LLM API calls?** no
**Does this project use Terraform / Docker / Kubernetes?** no
**Does this project have a production environment?** yes — GitHub repo + agentskills.io
**Are there performance targets or SLAs?** no

## Compliance Scope

- [x] None

## Team & Workflow

**Number of developers:** 2 (Miguel + RBraga)
**Branching model:** feature-branches
**Review process:** peer-review

## Quality Standards

**Minimum test coverage:** none (Markdown skills repo)
**Linting enforced:** no
**Type checking enforced:** no

## Special Constraints

- Every SKILL.md must include `metadata:` frontmatter with standard clause references (iso-9001, iatf-16949, domain, industries)
- Skill files must follow the existing SKILL.md structure (no ad-hoc formats)
- No programming code in skill files — pure methodology and instructions
- Portuguese translation (PT) must mirror English source exactly — no added/removed content
- Tasks must be claimed in TASKS.md before work starts to avoid parallel duplication

## CLI Environment

- [x] Claude Code (native — uses `.claude/`)
- [ ] Codex CLI
- [ ] Cursor
- [ ] OpenCode

## Daily Workflow Mode

- [x] Daily standup mode (morning / tick / report cycle)
- [x] On-demand dispatch (ad hoc per feature/bug)
- [ ] CI/CD triggered

## Existing TASKS.md

yes — path: TASKS.md

---

> Once this file is complete, run `/orchestrate init` to initialize the team.
