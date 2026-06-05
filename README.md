# Quality-Engineering-Skills

**Structured quality engineering skills for AI agents — ISO 9001, IATF 16949, AIAG-VDA FMEA, VDA 6.3.**
Works with Claude Code, Codex CLI, Cursor, Gemini CLI, and 20+ AI coding platforms.

[![agentskills.io](https://img.shields.io/badge/agentskills.io-compatible-blue)](https://agentskills.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Skills](https://img.shields.io/badge/skills-13-orange)](skills/)
[![Agents](https://img.shields.io/badge/agents-6-purple)](skills/agents/)

---

## Install in 30 seconds

```bash
npx skills add RBraga01/Quality-Engineering-Skills
```

Or clone directly:

```bash
git clone https://github.com/RBraga01/Quality-Engineering-Skills.git
```

---

## What this solves

AI agents are powerful — but they don't know 8D from PDCA, can't apply the AIAG-VDA Action Priority table, and generate generic NCR text that no auditor would accept.

**Quality-Engineering-Skills packages 15 years of hands-on quality engineering expertise** — automotive supplier quality, claims management, 8D, FMEA, and ISO 9001 auditing — into structured skills your AI agent can load and apply immediately.

Every skill maps to specific standard clauses. Every agent validates methodology, not just format.

---

## Coverage

| Domain | Skills | Standards |
|--------|--------|-----------|
| Problem Solving | 8D (D0–D8), 5-Why, Fishbone, Is/Is-Not, PDCA | ISO 9001 §10.2, IATF 16949 §10.2.3 |
| Risk Analysis | PFMEA, DFMEA, Action Priority (AP) | AIAG-VDA FMEA 2019, IATF 16949 §8.3 |
| Documentation | NCR, CAR, 8D Customer Report | ISO 9001 §7.5, §8.7, §10.2 |
| Audit | ISO 9001 Internal, IATF 16949 Supplemental | ISO 9001:2015, IATF 16949:2016 |

| Industries covered |
|----|
| Automotive · Electronics · Aerospace · Medical Devices · General Manufacturing |

---

## 5 Hook Agents

Drop these into any project and your AI becomes a trained quality professional.

### `/8d-coach`
Guides you through a full 8D — D0 emergency response to D8 team recognition. Validates root cause depth (rejects "human error" without systemic analysis), verifies containment before moving to D4, and checks D7 prevention updates.

```
/8d-coach
> D0: Is this a safety or regulatory issue? [Y/N]
> D1: List team members by function (minimum: quality, production, engineering)
> D2: Describe the defect — What? Where? When? How many? ...
```

### `/fmea-reviewer`
Audits an existing PFMEA or DFMEA against AIAG-VDA 2019. Returns a structured gap report: missing failure modes, incorrect AP ratings, unaddressed H-AP items, missing special characteristics.

### `/rca-facilitator`
Runs a structured 5-Why with chain validation. Challenges each answer with evidence requirements. Detects symptomatic vs. systemic root causes. Catches circular reasoning. Produces a validated, reversible Why chain.

### `/ncr-writer`
Takes bullet-point observations and generates professional NCR text: objective evidence language, severity classification (Critical/Major/Minor), and disposition recommendation. No more "part looks wrong."

### `/audit-guide`
Interactive internal audit for ISO 9001 or IATF 16949. Works clause by clause, scores findings (Major/Minor/OFI), generates a structured audit report with evidence references.

---

## Skill index

<details>
<summary><strong>Problem Solving</strong> (ISO 9001 §10.2)</summary>

| Skill | Description |
|-------|-------------|
| [8d-problem-solving](skills/problem-solving/8d-problem-solving/) | Full D0–D8 methodology with discipline-by-discipline instructions, templates, and validation criteria |
| [5why-root-cause](skills/problem-solving/5why-root-cause/) | Structured 5-Why chain construction, evidence validation, systemic vs. symptomatic detection |
| [fishbone-analysis](skills/problem-solving/fishbone-analysis/) | Ishikawa diagram using 6M (Man, Machine, Method, Material, Measurement, Environment) |
| [is-is-not-scoping](skills/problem-solving/is-is-not-scoping/) | Ford D2 problem scoping tool — defines problem boundary and eliminates hypotheses |
| [pdca-improvement](skills/problem-solving/pdca-improvement/) | Plan-Do-Check-Act cycle structure with gate criteria for continuous improvement |

</details>

<details>
<summary><strong>Risk Analysis</strong> (AIAG-VDA FMEA 2019)</summary>

| Skill | Description |
|-------|-------------|
| [pfmea-process](skills/risk-analysis/pfmea-process/) | 7-step Process FMEA per AIAG-VDA 2019: Structure → Function → Failure → Risk → Optimization |
| [dfmea-design](skills/risk-analysis/dfmea-design/) | Design FMEA with interface matrix and design intent failure analysis |
| [action-priority-ap](skills/risk-analysis/action-priority-ap/) | AP table logic replacing legacy RPN — H/M/L classification with action requirements |

</details>

<details>
<summary><strong>Documentation</strong> (ISO 9001 §7.5, §8.7, §10.2)</summary>

| Skill | Description |
|-------|-------------|
| [ncr-writing](skills/documentation/ncr-writing/) | Non-Conformance Report: objective evidence language, severity grading, disposition |
| [car-corrective-action](skills/documentation/car-corrective-action/) | Corrective Action Request with effectiveness verification requirements |
| [8d-report-writing](skills/documentation/8d-report-writing/) | Customer-facing 8D report writing for OEM submission (Ford, BMW, VW, Stellantis) |

</details>

<details>
<summary><strong>Audit</strong> (ISO 9001 §9.2, IATF 16949 §9.2.2)</summary>

| Skill | Description |
|-------|-------------|
| [iso-9001-internal-audit](skills/audit/iso-9001-internal-audit/) | §4–§10 internal audit question bank with finding classification |
| [iatf-16949-audit](skills/audit/iatf-16949-audit/) | IATF 16949 supplemental requirements audit — CSR, contingency plans, error-proofing |

</details>

<details>
<summary><strong>Agents</strong></summary>

| Agent | Description |
|-------|-------------|
| [8d-coach](skills/agents/8d-coach/) | Interactive D0–D8 coach with validation gates |
| [fmea-reviewer](skills/agents/fmea-reviewer/) | PFMEA/DFMEA gap audit against AIAG-VDA 2019 |
| [rca-facilitator](skills/agents/rca-facilitator/) | Structured 5-Why with evidence validation |
| [ncr-writer](skills/agents/ncr-writer/) | Professional NCR generator from bullet inputs |
| [audit-guide](skills/agents/audit-guide/) | Interactive ISO 9001 / IATF internal audit |
| [skill-auditor](skills/agents/skill-auditor/) | Automated audit and scoring of SKILL.md and REFERENCE files against framework standards |

</details>

---

## Framework mapping

Every `SKILL.md` carries metadata linking it to the standards it implements.

```yaml
metadata:
  iso-9001: "10.2"
  iatf-16949: "10.2.3"
  domain: quality-engineering
  industries: automotive,electronics,aerospace,medical,general
```

---

## Roadmap

**v1 (current):** ISO 9001 + IATF 16949 core — problem solving, FMEA, documentation, auditing

**v2:** PPAP (5 levels, 18 elements), APQP (5 phases), Control Plan linkage

**v3:** MSA (Gauge R&R), SPC (control charts, Cp/Cpk), Supplier qualification

**v4:** AS9100 Rev D (aerospace), ISO 13485 (medical), HACCP / ISO 22000 (food safety)

**Multilingual:** PT · DE · ES · ZH

---

## Contributing

Quality engineering is global. If you have domain expertise to add:

- **Automotive:** PPAP, APQP, OEM customer-specific requirements
- **Aerospace:** AS9100, AS13100, RCCA
- **Medical devices:** ISO 13485, FDA 21 CFR Part 820
- **Food safety:** HACCP, ISO 22000, FSSC 22000
- **Statistics:** SPC, MSA, sampling plans

See [CONTRIBUTING.md](CONTRIBUTING.md) for the skill format and submission process.

---

## Authors

**[@RBraga01](https://github.com/RBraga01)** — Automotive Supplier Quality Engineer with 15+ years of experience in electronic components and supplier claims management (~30 suppliers). Focused on scalable, system-driven quality engineering, combining 8D, 5-Why root cause analysis, and FMEA to build robust, audit-ready processes and reusable quality frameworks.

**[@migmcc](https://github.com/migmcc)** — Global Quality Manager at Bosch with 34 years of experience in automotive electronics supplier quality. Manages a portfolio of 20–40 global suppliers of electromechanical and electronic displays, processing 100+ quality complaints annually. Expert in 8D, FMEA, and ISO 9001 across the full quality lifecycle — from new product development to critical production incidents. Co-founder [iPS](https://github.com/RBraga01/iPS).

Part of the [iPS](https://github.com/RBraga01/iPS) quality management ecosystem.
