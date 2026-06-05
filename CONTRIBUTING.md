# Contributing to Quality-Engineering-Skills

Thank you for contributing. Every submission adds real methodology knowledge that quality engineers worldwide will use.

## Governance

| Role | Who | Can do independently |
|------|-----|----------------------|
| Lead manager | @RBraga01 | All structural decisions, platform connectors, releases |
| Contributor | @migmcc and others | Skill content — new skills, corrections, improvements |

**All contributions go through a PR.** No direct pushes to `master`.  
Structural changes (platforms, agents, new domains, README) require a GitHub Issue with label `proposal` first.  
See `CLAUDE.md` for the full rules.

## Skill format

Each skill lives in its own directory under `skills/<domain>/<skill-name>/`.

The directory name must match the `name` field in `SKILL.md` exactly (lowercase, hyphens only).

### Minimum structure

```
skills/<domain>/<skill-name>/
└── SKILL.md
```

### Full structure

```
skills/<domain>/<skill-name>/
├── SKILL.md              ← required
├── references/
│   └── *.md              ← detailed reference material
└── assets/
    └── *.md              ← templates, checklists, forms
```

### SKILL.md format

```markdown
---
name: your-skill-name
description: >-
  One or two sentences: what this skill does and when an agent should use it.
  Include standard names and methodology terms so agents can discover it.
license: MIT
metadata:
  author: your-github-username
  version: "1.0"
  iso-9001: "clause"            # e.g. "10.2"
  iatf-16949: "clause"          # if applicable
  aiag-reference: "..."         # if applicable
  vda-reference: "..."          # if applicable
  domain: quality-engineering
  subdomain: problem-solving    # problem-solving | risk-analysis | documentation | audit
  industries: automotive,electronics,aerospace,medical,general
---

# Skill Title

## When to use
[One paragraph]

## Prerequisites
[What the agent needs before starting]

## Workflow
[Step-by-step instructions]

## Validation criteria
[How to verify the output is correct]

## Common mistakes
[What to watch for]

## Output format
[What a good output looks like]
```

## Domains open for contribution

| Domain | What's needed |
|--------|---------------|
| `problem-solving` | DMAIC, A3, Shainin, fault tree analysis |
| `risk-analysis` | HACCP, HAZOP, FMECA |
| `planning` | PPAP (all 5 levels), APQP phases, control plan, DVP |
| `measurement` | Gauge R&R, attribute MSA, linearity, bias, Cp/Cpk |
| `audit` | VDA 6.3 (P1–P7), AS9100, ISO 13485, HACCP audit |
| `supplier-quality` | Supplier qualification, SCAR, CAPA tracking |
| `statistics` | SPC (Western Electric rules), sampling plans (AQL) |
| `agents` | Any interactive multi-step agent |

## Industry expansions

- **Aerospace:** AS9100 Rev D, AS13100, RCCA
- **Medical devices:** ISO 13485, FDA 21 CFR Part 820
- **Food safety:** HACCP, ISO 22000, FSSC 22000
- **Chemical/process:** HAZOP, HAZID, Process safety

## Submission checklist

- [ ] `name` field matches the directory name exactly
- [ ] `description` contains relevant methodology keywords
- [ ] Framework mappings are accurate (check the standard before claiming a clause)
- [ ] Content reflects actual methodology — no generic AI text
- [ ] References cite specific standard editions (e.g., "AIAG-VDA FMEA 2019, Step 5")
- [ ] Tested with at least one AI agent before submitting

## Pull request process

1. Fork the repository
2. Create a branch: `feat/skill-name` or `feat/domain-expansion`
3. Add your skill(s)
4. Open a PR with: skill name, standard it implements, domain expertise (your role/industry)

Skills from practitioners are prioritised. Generic content will be rejected.
