# Contributing to Quality-Engineering-Skills

Thank you for contributing. Every submission adds real methodology knowledge that quality engineers worldwide will use.

## Governance

| Role | Who | Can do independently |
|------|-----|----------------------|
| Co-creator | @RBraga01, @migmcc | All decisions — structure, platforms, agents, releases, direct push to master |
| Contributor | community | Skill content — new skills, corrections, improvements (via PR) |

**All community contributions go through a PR.**  
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
  status: approved              # approved | draft | deprecated
  created: "YYYY-MM-DD"
  last_updated: "YYYY-MM-DD"
  updated_by: your-github-username
  reviewed_by: RBraga01
  standard_edition: "ISO 9001:2015"   # primary standard edition, e.g. "AIAG-VDA FMEA Handbook 2019"
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

## Output Format requirement

Every skill must include a `## Output Format` section. This lets users choose how they receive output at invocation time and makes skills work across platforms (markdown renderers, Excel paste, Word documents, email).

**Mandatory pattern for skills** (copy verbatim):

```markdown
## Output Format

At the start of each use, ask the user:

> "How would you like to receive the output?
> **A** — Structured Markdown (formatted tables and sections, ready to copy)
> **B** — Plain tables (simplified structure for Excel or Word)
> **C** — Narrative report (flowing text for a formal document or email)
>
> Default: A."

Adapt all output sections to the chosen format. If the platform or session context already defines a format preference, skip this question.
```

**For agents** (interactive, multi-step skills): replace "At the start of each use" with "Ask once at the start of the session" and the last sentence with "Apply the chosen format to all outputs generated during the session."

Skills submitted **without** this section will be returned for revision.

---

## Description engineering

The `description` field is how AI agents discover your skill. Write it to be found, not just to be accurate.

**Rules:**
- **Maximum 1024 characters** for the full description
- **Key trigger phrases must appear in the first 400 characters.** AI agents scan the start of descriptions. Triggers buried past 400 chars reduce discovery significantly.
- Include **at least 3 literal phrases** a user would naturally type — e.g., "write an NCR", "open an 8D", "drill into root cause", "audit clause §4"
- Include methodology terms: standard names, OEM acronyms, clause numbers, tool names

**Good (triggers in first 400 chars):**
```
description: >-
  Write a non-conformance report, NCR, reject a supplier, or document a defect with
  objective-evidence language and correct severity grading (Critical/Major/Minor)...
```

**Avoid (triggers buried after 400 chars):**
```
description: >-
  Non-Conformance Report (NCR) writing module covering the full lifecycle of quality escape
  documentation including all fields defined in ISO 9001 §8.7... Use when you need to write
  an NCR or reject a supplier delivery.
```

---

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

**Frontmatter**
- [ ] `name` field matches the directory name exactly
- [ ] `description` trigger phrases appear within the first 400 characters
- [ ] `description` contains at least 3 literal phrases users would naturally type
- [ ] `description` is ≤ 1024 characters total
- [ ] All document control fields present: `status`, `created`, `last_updated`, `updated_by`, `reviewed_by`, `standard_edition`
- [ ] Framework mappings are accurate (check the standard before claiming a clause)

**Content**
- [ ] Content reflects actual methodology — no generic AI text
- [ ] References cite specific standard editions (e.g., "AIAG-VDA FMEA 2019, Step 5")
- [ ] `## Output Format` section included with the standard ask mechanism (see above)
- [ ] `## Changelog` section included at the end of the file (see format below)
- [ ] If a `references/` or `assets/` file is linked in SKILL.md, the file exists on disk and has frontmatter
- [ ] Tested with at least one AI agent before submitting
- [ ] Tested with `/skill-auditor` — score must be **≥ 9/10** before the PR will be accepted

**Changelog format** (required at end of every SKILL.md):

```markdown
## Changelog

| Version | Date | Author | Change |
|---------|------|--------|--------|
| 1.0 | YYYY-MM-DD | @your-github-username | Initial release |
```

**Reference/asset file frontmatter** (required for every file in `references/` or `assets/`):

```markdown
---
name: filename-without-extension
type: reference        # or "asset" for templates/forms
parent_skill: skill-name
author: your-github-username
version: "1.0"
status: approved
created: "YYYY-MM-DD"
last_updated: "YYYY-MM-DD"
updated_by: your-github-username
reviewed_by: RBraga01
license: MIT
---
```

## Pull request process

1. Clone the repository (requires collaborator access — contact @RBraga01 or @migmcc)
2. Create a branch from master: `feat/skill-name` or `fix/skill-name`
3. Stage only your skill files — **never use `git add .` or `git add -A`**. Add files explicitly by path.
4. Verify with `git status` before committing — the diff must contain only your intended files
5. Open a PR with: skill name, standard it implements, your domain expertise (role/industry)
6. All PRs are reviewed by @RBraga01 or @migmcc before merge

Skills from practitioners are prioritised. Generic content will be rejected.
