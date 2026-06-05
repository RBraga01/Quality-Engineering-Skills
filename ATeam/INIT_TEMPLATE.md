# Project Init Document

> Copy this file to your project root as `INIT.md` and fill in each section.
> The Lead Orchestrator reads this file when you run `/orchestrate init` and uses
> it to evaluate which agents and skills to keep or prune for this specific project.

---

## Project Identity

**Name:** [Project name]
**Type:** [web-app | mobile-app | api-backend | cli-tool | library | data-pipeline | other]
**Status:** [greenfield | active-development | maintenance | legacy]

## Primary Programming Languages

List every language used in this project. Agents for unlisted languages will be pruned.

- [ ] TypeScript / JavaScript
- [ ] Python
- [ ] Go
- [ ] Rust
- [ ] Kotlin / Java (Android)
- [ ] Swift (iOS / macOS)
- [ ] Dart (Flutter)
- [ ] Other: ___________

## Tech Stack

**Frontend:** [Next.js / React / Vue / none]
**Backend:** [FastAPI / Express / Django / Go / none]
**Database:** [PostgreSQL / MySQL / MongoDB / SQLite / none]
**Runtime:** [Node.js / Python / Go / Bun / other]
**CI/CD:** [GitHub Actions / Vercel / Railway / other]

## Communication & Collaboration Tools

List tools in active use. Agents for unlisted tools will be pruned.

- [ ] Gmail / email
- [ ] Slack
- [ ] GitHub Issues / PRs
- [ ] Linear
- [ ] Notion
- [ ] None — this is a pure engineering project

## Scope Boundaries

Answer each question to help the orchestrator decide which agents to keep.

**Will this project have E2E tests?** [yes / no / later]
**Will this project use a PostgreSQL database?** [yes / no]
**Will this project handle authentication or user data?** [yes / no]
**Is there a multi-channel communication workflow?** [yes / no]
**Are there autonomous agent loops running unattended?** [yes / no]
**Will there be regular documentation / codemaps?** [yes / no]
**Does this project make LLM API calls?** [yes / no]
**Does this project use Terraform / Docker / Kubernetes?** [yes / no]
**Does this project have a production environment?** [yes / no]
**Are there performance targets or SLAs?** [yes — specify: _____ / no]

## Compliance Scope

Which regulations apply? The `compliance-reviewer` agent only activates for declared scopes.

- [ ] GDPR / RGPD (any project with EU users)
- [ ] COPPA (directed at or collecting data from under-13)
- [ ] PCI-DSS (handles payment card data)
- [ ] SOC2 (B2B SaaS storing customer data)
- [ ] HIPAA (US healthcare, PHI handling)
- [ ] None

## Team & Workflow

**Number of developers:** [1 / 2-5 / 5+]
**Branching model:** [trunk / gitflow / feature-branches]
**Review process:** [self-review / peer-review / automated-only]

## Quality Standards

**Minimum test coverage:** [80% / 90% / none]
**Linting enforced:** [yes / no]
**Type checking enforced:** [yes / no]

## Special Constraints

Any domain-specific guardrails the orchestrator should enforce across all agents:

- Example: No English user-facing strings (pt-PT only)
- Example: No INTERNET permission in Android manifests
- Example: All DB queries must use parameterized statements

List yours:
- ___________
- ___________

## CLI Environment

Which AI coding CLI(s) will be active in this project? The orchestrator uses this to verify
that the correct platform configs are in place and to flag incompatibilities at init time.

- [ ] Claude Code (native — uses `.claude/`)
- [ ] Codex CLI (uses `.codex-plugin/`)
- [ ] Cursor (uses `.cursor-plugin/`)
- [ ] OpenCode (uses `.opencode/`)
- [ ] Multiple CLIs simultaneously (see multi-CLI notes below)

**Multi-CLI note:** When more than one CLI is active, all agents share the same
`.agent-sync/` state directory and the same `.claude/agents/` definitions.
Each CLI reads skills and rules from its own plugin manifest. Hooks (session-start,
post-tool-use) must be configured separately per platform — they do not auto-propagate.

## Daily Workflow Mode

How will the orchestrator be invoked?

- [ ] Daily standup mode (morning / tick / report cycle)
- [ ] On-demand dispatch (ad hoc per feature/bug)
- [ ] CI/CD triggered (automated pipeline)

## Existing TASKS.md

Does this project already have a `TASKS.md` backlog the orchestrator should consume?
[yes — path: ___________ / no — orchestrator will create one]

---

> Once this file is complete, run `/orchestrate init` to initialize the team.
