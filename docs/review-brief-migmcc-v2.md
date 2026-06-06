# Quality-Engineering-Skills — Review Brief v2
# For: @migmcc | Reviewer: Claude Code instance

---

## Context

You are assisting **@migmcc**, a contributor to the Quality-Engineering-Skills project.
@migmcc is a quality engineering expert (25+ years, claims manager, 8D specialist) reviewing
new skill files for methodological accuracy before they are published.

Your role: help @migmcc audit the listed files, apply his corrections, and open a Pull Request.

**You are a CONTRIBUTOR, not the lead.** Read the governance rules below before doing anything.

---

## Governance rules — read before touching any file

1. **Never push directly to `master`.** All changes go through a Pull Request.
2. **Never use `git add .` or `git add -A`.** Stage only the files you have reviewed and corrected, explicitly by path.
3. **Never modify files outside the scope list below.** If you think another file needs changing, note it in the PR description — do not change it.
4. **Never create new skills, new agents, new domains, or new platform files.** Scope = corrections to existing files only.
5. **Never modify:** `README.md`, `CONTRIBUTING.md`, `CLAUDE.md`, `.github/`, `platforms/`, `docs/`, `scripts/`.
6. **Branch naming:** `review/v2-new-skills`
7. **PR title:** `review: v2 skill corrections by @migmcc`
8. If you are unsure whether a change is in scope — do not make it. Note it in the PR description instead.

---

## Step 1 — Setup

```bash
# Clone (if first time) or pull (if already cloned)
git clone https://github.com/RBraga01/Quality-Engineering-Skills.git
cd Quality-Engineering-Skills

# Or if already cloned:
git checkout master
git pull origin master

# Create the review branch
git checkout -b review/v2-new-skills
```

---

## Step 2 — Audit scope

Review **only** the following 11 files. No other files.

### New skills to audit

| File | Standard to verify against |
|------|---------------------------|
| `skills/planning/ppap/SKILL.md` | AIAG PPAP 4th Edition (2006) |
| `skills/planning/apqp/SKILL.md` | AIAG APQP 2nd Edition (2008) |
| `skills/planning/control-plan/SKILL.md` | AIAG Control Plan Reference Manual |
| `skills/planning/dvp-test-plan/SKILL.md` | IATF 16949:2016 §8.3.4.3 |
| `skills/measurement/msa-gauge-rr/SKILL.md` | AIAG MSA 4th Edition (2010) |
| `skills/measurement/spc-control-charts/SKILL.md` | AIAG SPC 2nd Edition (2005) |
| `skills/audit/vda-6-3-audit/SKILL.md` | VDA 6.3 4th Edition (2023) |
| `skills/problem-solving/dmaic/SKILL.md` | Six Sigma DMAIC / ISO 9001:2015 §10.3 |
| `skills/supplier-quality/supplier-scar/SKILL.md` | ISO 9001:2015 §8.4 / IATF 16949:2016 §8.4.1 |

### New agents to audit

| File | What it does |
|------|-------------|
| `skills/agents/ppap-checker/SKILL.md` | Interactive PPAP 18-element completeness checker |
| `skills/agents/control-plan-builder/SKILL.md` | Row-by-row Control Plan builder from PFMEA data |

---

## Step 3 — What to audit in each file

For each file, @migmcc will review and you will apply his corrections. Check:

### Methodology accuracy (most important)
- Are the process steps in the correct sequence?
- Are the standard references accurate (edition, year, clause number)?
- Are the acceptance criteria correct (e.g., Cpk thresholds, %GRR limits, AP rating rules)?
- Are the OEM-specific requirements (Ford, BMW, VW, Stellantis) correct?
- Is there anything that would mislead a practitioner?
- Is there anything missing that a quality engineer would expect to find?

### Validation criteria
- Do the validation gates match actual practice?
- Are the blocking conditions (things that would stop a submission or close a finding) correct?

### Common mistakes section
- Are these real mistakes practitioners make?
- Are there important mistakes missing?

### Format compliance (check against `CONTRIBUTING.md`)
- `## Output Format` section present with the standard ask mechanism
- `## Changelog` section at the end of the file
- Frontmatter has all required fields: `status`, `created`, `last_updated`, `updated_by`, `reviewed_by`, `standard_edition`

### What NOT to change
- Do not rewrite sections that are methodologically correct — only correct errors
- Do not change the `## Output Format` section wording (it is standardised)
- Do not change document control fields other than `last_updated`, `updated_by`, and `reviewed_by`
- Do not change the `## Changelog` format — only add a new row

---

## Step 4 — Apply corrections

For each file that needs corrections:

1. Read the file first (always read before editing)
2. Apply @migmcc's corrections using targeted edits — do not rewrite entire sections
3. Update the frontmatter fields for each corrected file:

```yaml
last_updated: "2026-06-XX"   # today's date
updated_by: migmcc
reviewed_by: RBraga01        # leave as RBraga01 — he will confirm on merge
```

4. Add a changelog row at the end of the file:

```markdown
| 1.1 | 2026-06-XX | @migmcc | [brief description of corrections made] |
```

---

## Step 5 — Stage and commit

Stage **only the files you corrected** — explicitly by path:

```bash
# Example — only stage the files that were actually changed:
git add skills/planning/ppap/SKILL.md
git add skills/measurement/msa-gauge-rr/SKILL.md
# etc. — one line per file, only the corrected ones

# Verify before committing — the diff must contain ONLY your intended changes:
git status
git diff --staged
```

Commit:

```bash
git commit -m "review: v2 skill corrections by @migmcc

[List what was corrected and in which files — one bullet per file]"
```

---

## Step 6 — Open the Pull Request

```bash
git push origin review/v2-new-skills
```

Then open a PR on GitHub:
- **Base:** `master`
- **Compare:** `review/v2-new-skills`
- **Title:** `review: v2 skill corrections by @migmcc`
- **Body:** Use this template:

```
## Summary

Methodology review of 11 new SKILL.md files (9 skills + 2 agents) added in commit 312ab74.

Reviewed by @migmcc — quality engineering practitioner, 25+ years, claims manager.

## Files corrected

- [ ] skills/planning/ppap/SKILL.md — [describe what was corrected, or "no corrections needed"]
- [ ] skills/planning/apqp/SKILL.md — [describe or "no corrections needed"]
- [ ] skills/planning/control-plan/SKILL.md
- [ ] skills/planning/dvp-test-plan/SKILL.md
- [ ] skills/measurement/msa-gauge-rr/SKILL.md
- [ ] skills/measurement/spc-control-charts/SKILL.md
- [ ] skills/audit/vda-6-3-audit/SKILL.md
- [ ] skills/problem-solving/dmaic/SKILL.md
- [ ] skills/supplier-quality/supplier-scar/SKILL.md
- [ ] skills/agents/ppap-checker/SKILL.md
- [ ] skills/agents/control-plan-builder/SKILL.md

## Items outside scope (not changed — for @RBraga01 to decide)

[List anything migmcc flagged that requires a structural decision]

## Overall assessment

[migmcc's overall quality score and comments]
```

---

## What happens after the PR

@RBraga01 (the lead) reviews and merges. No action needed from @migmcc after the PR is open.

---

## Questions or blockers

If you are unsure about anything during the review — stop and ask @migmcc.
Do not make assumptions about methodology. @migmcc is the domain expert.
