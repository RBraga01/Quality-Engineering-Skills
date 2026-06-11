# Changelog

All notable changes to Quality-Engineering-Skills are documented here.

---

## [v2.1.0] — 2026-06-11

### Added

- M365 Copilot Plugin: Cloudflare Worker API (`platforms/m365/worker.js` + `wrangler.toml`) — 6 endpoints, Claude Haiku backend, CORS-ready. Unblocks AppSource sideload path.
- M365 Copilot Plugin card added to landing page (`docs/index.html`) with `Coming Soon` badge.
- `badge-pending` style added to landing page for platforms with code ready but not yet deployed.
- GitHub Pages enabled — landing page live at `https://rbraga01.github.io/Quality-Engineering-Skills/`.

### Changed

- **Governance:** migmcc elevated to co-creator — direct push to master, equal authority on all decisions. `CLAUDE.md`, `CODEOWNERS`, `CONTRIBUTING.md`, `STATUS.md`, `docs/index.html` updated to reflect co-creator status.
- **Platform strategy:** Store submissions (GPT Store, Slack App Directory, M365 AppSource, Gemini Marketplace) removed from public setup guides — managed exclusively by @RBraga01 and @migmcc. Public guides now cover self-hosted / org-internal deployment only.
- **Platform copy:** All system instruction files (`gpt-instructions.md`, `project-instructions.md`, `gemini-instructions.md`, `slack-instructions.md`, `copilot-instructions.md`, `worker.js`) and marketing copy updated from "15+ years" to "decades of" — collective statement, not per-person.
- **agentskills.io badge:** Changed from `submission pending` → `format: agentskills.io` (open standard, self-declared format compatibility, no registry submission process exists).
- **Platform claims:** Replaced "20+ AI coding platforms" with "any agentskills.io-compatible AI tool" in README and landing page hero — accurate, forward-looking, not a made-up count.
- **Badge order in README:** Skills → Agents → agentskills.io format → MIT (last).
- **Landing page link** added to README header.
- **Platform status table** added to `STATUS.md` with per-platform state, blocker, and connector file reference.
- **M365 `plugin-manifest.json`:** `privacy_policy_url` updated from LICENSE file to GitHub Pages privacy page.
- **`Week 5` references** removed from `openapi.yaml` and `slack/setup-guide.md`.
- **`docs/` internal files** removed pre-launch (`launch-plan.md`, `review-brief-migmcc-v2.md`, `review-brief-migmcc-v3.md`, `migmcc-launch-guide.md`, `HumanWork.md`) — were never committed, deleted locally.
- **Local Windows paths** (`E:\quality-engineering-skills.md`) removed from `CLAUDE.md` and `docs/maintenance-checklist.md`.
- **Slack platform card** badge changed to `Coming Soon` — worker code exists but no deployed instance.

---

## [v2.0.0] — 2026-06-06

### Added

**9 new skills** across 4 new domains (commits 312ab74, 70e57f6):

| Skill | Domain | Standard |
|-------|--------|---------|
| [ppap](skills/planning/ppap/) | planning | AIAG PPAP 4th Edition (2006) |
| [apqp](skills/planning/apqp/) | planning | AIAG APQP 2nd Edition (2008) |
| [control-plan](skills/planning/control-plan/) | planning | AIAG Control Plan Reference Manual |
| [dvp-test-plan](skills/planning/dvp-test-plan/) | planning | IATF 16949:2016 §8.3.4.3 |
| [msa-gauge-rr](skills/measurement/msa-gauge-rr/) | measurement | AIAG MSA 4th Edition (2010) |
| [spc-control-charts](skills/measurement/spc-control-charts/) | measurement | AIAG SPC 2nd Edition (2005) |
| [vda-6-3-audit](skills/audit/vda-6-3-audit/) | audit | VDA 6.3 4th Edition (2023) |
| [dmaic](skills/problem-solving/dmaic/) | problem-solving | Six Sigma / ISO 9001:2015 §10.3 |
| [supplier-scar](skills/supplier-quality/supplier-scar/) | supplier-quality | ISO 9001:2015 §8.4 / IATF §8.4.1 |

**2 new agents:**

| Agent | Purpose |
|-------|---------|
| [ppap-checker](skills/agents/ppap-checker/) | Interactive 18-element PPAP completeness checker with OEM-specific gates |
| [control-plan-builder](skills/agents/control-plan-builder/) | Row-by-row Control Plan builder from PFMEA data — includes D7 update mode |

**13 new reference files** — all 22 skills now have supporting reference material (commit e3af81a):

| File | Purpose |
|------|---------|
| `fishbone-analysis/references/6m-category-guide.md` | Per-M taxonomy, question prompts, fishbone-to-5why linkage |
| `is-is-not-scoping/references/hypothesis-elimination.md` | Hypothesis tracking template, elimination logic, worked example |
| `pdca-improvement/references/pdca-examples.md` | 3 worked PDCA examples, gate checklists, PDCA vs 8D vs DMAIC table |
| `dmaic/references/statistical-tools.md` | 27-tool DMAIC phase reference, hypothesis test selection guide |
| `ppap/references/18-elements-checklist.md` | AIAG Table 4.1 Level 1–5 matrix, acceptance criteria, OEM overrides |
| `apqp/references/phase-deliverables.md` | Deliverables per phase, gate checklists, APQP-to-PPAP cross-reference |
| `control-plan/references/control-plan-template.md` | 13-column template, sample plan guide, PFMEA-to-CP mapping |
| `dvp-test-plan/references/dvp-template.md` | 13-column template, test category library, DFMEA linkage |
| `msa-gauge-rr/references/gauge-rr-study-guide.md` | Study conductor guide, worked 10×3×2 numeric example |
| `spc-control-charts/references/chart-selection-guide.md` | Decision tree, constants tables, Western Electric rules, OOC response |
| `vda-6-3-audit/references/p1-p7-questions.md` | 75+ questions P1–P7 with weights, evidence types, common findings |
| `supplier-scar/references/scar-template.md` | SCAR template, 8D evaluation scorecard, escalation matrix |
| `car-corrective-action/references/car-template.md` | 11-section CAR template, RC vs CA checklist, CAR vs SCAR distinction |

**Tier 2 platform connectors** (commit b1eefc2, e41f6d2):

| Platform | Files |
|----------|-------|
| Microsoft Teams / Copilot Studio | `platforms/teams/` — system prompt, bot config, Teams manifest, AppSource listing |
| Microsoft 365 AppSource | `platforms/m365/` — plugin manifest, OpenAPI spec, setup guide |
| Google Gemini / Workspace | `platforms/gemini/` — system prompt, Apps Script add-on, Marketplace listing |
| Slack | `platforms/slack/` — Cloudflare Worker (production, with signature verification), app manifest, App Directory listing |

**Infrastructure:**
- `docs/privacy.html` — Privacy policy page required for all store submissions
- `docs/launch-plan.md` — Lead launch plan for Week 5 public release
- `STATUS.md` — Updated to 22 skills / 8 agents / 23 reference files / all 🟢

### Changed

**v2 SKILL.md corrections by @migmcc** (PR #3, commit 70e57f6):

11 files corrected across the new v2 batch. Key corrections:
- PPAP: 300-part production trial run minimum added (AIAG §4.0) — was missing entirely
- ppap-checker: Cpk threshold table corrected (1.33–1.67 = conditional, not acceptable; 1.00–1.33 = block + 100% inspection)
- MSA: root cause investigation guide added for %GRR > 30% (high-EV vs high-AV tables with corrective actions)
- VDA 6.3: weighted average calculation explained (equal-weight averaging is a calculation error); score-4 vs score-6 distinction clarified; auditor qualification requirement added
- Control Plan: OEM-specific special characteristic symbol conventions added (Ford, GM, VW, BMW, Stellantis)
- SCAR: warranty cost recovery / debit note risk added; CS1/CS2 controlled shipping reference added

**v3 reference file corrections by @migmcc** (PR #4):

6 of 13 new reference files corrected:
- MSA gauge-rr: AV constant corrected — K₂=0.5231 (not d₂*=1.693, which is the EV value)
- SPC chart-selection: DPPM for Cpk≥1.67 corrected from 57→233 ppm (consistent with 1.5σ shift model)
- APQP phase-deliverables: PSW cross-reference corrected (Programme Charter → Quality Planning Sign-Off)
- DVP template: reliability sample size guidance expanded with test duration multipliers
- DMAIC statistical-tools: Excel STDEV() clarified as computing Ppk (overall σ), not Cpk
- PDCA examples: internal numeric consistency fixed (18→20 parts, 4.5%→5.0%)

---

## [v1.2.0] — 2026-06-05

### Added

**`skill-auditor` agent** — automated audit framework for SKILL.md and REFERENCE files. Scores 0–10 across 5 dimensions (Structure, Execution, Auditability, Integration, Completeness). Includes quality gates (block if score < 8), maturity model (Level 1–5), and cross-skill consistency rules. Reference: `skills/agents/skill-auditor/references/cross-skill-rules.md`.

**Governance files:**
- `CLAUDE.md` (repo) — contributor rules, structural change gates, workflow for @migmcc
- `.github/CODEOWNERS` — @RBraga01 as required reviewer on all paths
- Lead override in global `CLAUDE.md` — lead pushes directly to master; contributor uses PRs

### Changed

**Enterprise-grade polish — 10 skills** (contributed by @migmcc, PR #1):

| File | Key additions |
|------|--------------|
| `action-priority-ap/SKILL.md` | Goal, Required Checklist, M-AP clarification, revised-AP governance |
| `action-priority-ap/references/oem-requirements.md` | Required Compliance Checklist, CSR binding note, residual risk governance |
| `ncr-writing/SKILL.md` | Required NCR Checklist, legal/audit note, Critical definition expanded |
| `ncr-writing/assets/ncr-template.md` | Completion Checklist, severity escalation, effectiveness verification |
| `8d-report-writing/SKILL.md` | Required 8D Checklist, D2/D3/D4/D6 discipline improvements |
| `8d-report-writing/references/oem-formats.md` | 8D Submission Checklist, OEM rejection risks, version governance |
| `iso-9001-internal-audit/SKILL.md` | Goal, Required Audit Checklist, process-based approach, sampling guidance |
| `iso-9001-internal-audit/references/clause-questions.md` | How to use, Required Audit Behaviour, sampling rule, risk prioritisation |
| `iatf-16949-audit/SKILL.md` | Goal, Required IATF Checklist, product audit section, three-stream mandate |
| `iatf-16949-audit/references/supplemental-requirements.md` | IATF Supplemental Audit Checklist, clause-by-clause patches |

**`interface-matrix.md` audit improvements:**
- Execution checklist added at top
- Validation gate: critical interfaces must be validated by FEA/simulation/DVP
- Interface prioritisation by severity and likelihood
- Misuse and abuse scenarios in user interface section
- Direction (input/output) mandatory on all boundary diagram arrows
- Multiple interaction types must be listed explicitly (F + T + C, not collapsed)
- Statistical tolerance stack-up (RSS) when Cpk data available

**README** — GitHub usernames in Authors, expanded bios for @RBraga01 and @migmcc, badges corrected to 13 skills / 6 agents, skill-auditor added to skill index.

**LICENSE** — copyright updated to full legal name (Ricardo Romão Marques Braga).

---

## [v1.1.0] — 2026-06-05

### Added

**Output Format mechanism** — all 18 skills and agents now ask the user how they want output at invocation. Three options: Structured Markdown (A), Plain tables for Excel/Word (B), Narrative report (C). Default: A. Platform-aware: skips the question if the session context already defines a format.

**Reference files** — 9 new methodology reference files with real content (not stubs):

| File | Content |
|------|---------|
| `skills/problem-solving/8d-problem-solving/references/d0-d8-guide.md` | D0–D8 gate criteria, evidence requirements, OEM-specific notes |
| `skills/problem-solving/5why-root-cause/references/chain-validation.md` | Why chain validation rules, reversal check, anti-patterns |
| `skills/risk-analysis/pfmea-process/references/aiag-vda-2019.md` | 7-step PFMEA reference, S/O/D rating tables, PFMEA→Control Plan linkage |
| `skills/risk-analysis/dfmea-design/references/interface-matrix.md` | Interface matrix construction, boundary diagram, failure mode patterns |
| `skills/risk-analysis/action-priority-ap/references/oem-requirements.md` | OEM-specific AP requirements: Ford EJ, GM BIQS, VW, BMW, Stellantis |
| `skills/documentation/ncr-writing/assets/ncr-template.md` | Fillable NCR template with field guidance and severity decision tree |
| `skills/documentation/8d-report-writing/references/oem-formats.md` | Ford/BMW/VW/GM/Stellantis format differences and submission requirements |
| `skills/audit/iso-9001-internal-audit/references/clause-questions.md` | §4–§10 question bank with evidence anchors |
| `skills/audit/iatf-16949-audit/references/supplemental-requirements.md` | All 16 IATF supplemental requirements with audit questions |

**Observability files:**
- `STATUS.md` — skill dashboard with reference coverage, pairing, and status flags
- `CHANGELOG.md` — this file

### Changed

**Description engineering** — trigger phrases added to first 400 characters of all 18 skill descriptions. Key phrases users naturally type are now in the discoverable zone. All descriptions remain ≤1024 characters.

**CONTRIBUTING.md** — added Output Format requirement (mandatory for all new skills) and description engineering rules (trigger phrase placement, ≤1024 char limit, 3+ literal user phrases required).

---

## [v1.0.0] — 2026-06-01

### Added

Initial release.

- **13 skills** across 4 domains: problem-solving, risk-analysis, documentation, audit
- **5 interactive agents**: 8d-coach, fmea-reviewer, rca-facilitator, ncr-writer, audit-guide
- ISO 9001:2015 and IATF 16949:2016 clause mappings in all skill frontmatter
- MIT license
- Platform connector documentation: ChatGPT (GPT Actions), Claude.ai (Projects)
- CONTRIBUTING.md with skill format specification and submission checklist
