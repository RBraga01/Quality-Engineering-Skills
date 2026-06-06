# Quality-Engineering-Skills — Review Brief v3
# For: @migmcc | Reviewer: Claude Code instance

---

## Context

You are assisting **@migmcc**, co-author of the Quality-Engineering-Skills project.
@migmcc is a quality engineering expert (25+ years, claims manager, 8D specialist).

This is the **v3 review** — a new batch of **13 reference files** has been added to the repository.
These are detailed reference documents that extend the skill SKILL.md files.
Your task: audit each reference file for methodological accuracy and apply corrections.

**You are a CONTRIBUTOR, not the lead.** Read the governance rules before doing anything.

---

## Governance rules — same as v2

1. **Never push directly to `master`.** All changes go through a Pull Request.
2. **Never use `git add .` or `git add -A`.** Stage only reviewed files, explicitly by path.
3. **Never modify files outside the scope list below.**
4. **Never modify:** `README.md`, `CONTRIBUTING.md`, `CLAUDE.md`, `.github/`, `platforms/`, `docs/`, `scripts/`, `STATUS.md`.
5. **Do not modify any SKILL.md file in this review** — scope is reference files only.
6. **Branch naming:** `review/v3-reference-files`
7. **PR title:** `review: v3 reference file corrections by @migmcc`
8. If unsure whether a change is in scope — do not make it. Note it in the PR description.

---

## Step 1 — Setup

```bash
git checkout master
git pull origin master
git checkout -b review/v3-reference-files
```

---

## Step 2 — Audit scope

Review **only** the following 13 reference files. No other files.

| File | Purpose |
|------|---------|
| `skills/problem-solving/fishbone-analysis/references/6m-category-guide.md` | 6M category definitions, question prompts, fishbone-to-5why linkage |
| `skills/problem-solving/is-is-not-scoping/references/hypothesis-elimination.md` | Hypothesis tracking, elimination logic, worked example |
| `skills/problem-solving/pdca-improvement/references/pdca-examples.md` | 3 worked PDCA examples, gate checklists, PDCA vs 8D vs DMAIC table |
| `skills/problem-solving/dmaic/references/statistical-tools.md` | Tool reference per DMAIC phase, hypothesis test guide |
| `skills/planning/ppap/references/18-elements-checklist.md` | 18 elements Level 1–5 matrix, acceptance criteria, OEM overrides |
| `skills/planning/apqp/references/phase-deliverables.md` | Deliverables per phase, gate checklists, APQP-to-PPAP cross-ref |
| `skills/planning/control-plan/references/control-plan-template.md` | 13-column template, sample plan guide, PFMEA-to-CP mapping |
| `skills/planning/dvp-test-plan/references/dvp-template.md` | 13-column template, test category library, DFMEA linkage |
| `skills/measurement/msa-gauge-rr/references/gauge-rr-study-guide.md` | Study conductor guide, worked 10×3×2 numeric example |
| `skills/measurement/spc-control-charts/references/chart-selection-guide.md` | Decision tree, constants tables, Western Electric rules, OOC response |
| `skills/audit/vda-6-3-audit/references/p1-p7-questions.md` | 75+ questions P1–P7 with weights, evidence types, common findings |
| `skills/supplier-quality/supplier-scar/references/scar-template.md` | SCAR template, 8D evaluation scorecard, escalation matrix |
| `skills/documentation/car-corrective-action/references/car-template.md` | 11-section CAR template, RC vs CA checklist, CAR vs SCAR distinction |

---

## Step 3 — What to audit in each file

Reference files extend the SKILL.md — they contain detailed tables, templates, question banks,
worked examples, and checklists. They do NOT repeat the workflow steps.

Check for:

### Methodological accuracy (most important)
- Are the tables, formulas, and thresholds correct against the referenced standard?
- Are the worked examples correct? (numbers, logic, conclusions)
- Are the templates complete — do they cover all fields a practitioner would need?
- Are the OEM-specific details (Ford, BMW, VW, Stellantis) accurate?
- Are question banks (VDA 6.3 P1–P7, ISO 9001) realistic and aligned to the standard?
- Are the decision tables (PDCA vs 8D vs DMAIC, chart selection, hypothesis test selection) correct?
- Is there anything that would mislead a practitioner?
- Is there anything important missing that a practitioner would expect to find?

### Specific checks per file type

**Templates (control-plan-template, dvp-template, car-template, scar-template):**
- Are all fields present that a real document requires?
- Are the column/field instructions accurate and non-ambiguous?
- Are the good/bad examples (where present) realistic?

**Checklists (18-elements-checklist, phase-deliverables, gauge-rr-study-guide):**
- Are the Level 1–5 requirements for PPAP elements correct per AIAG Table 4.1?
- Is the APQP phase-to-deliverable mapping correct per AIAG APQP 2nd ed?
- Is the MSA study procedure correct per AIAG MSA 4th ed?

**Reference tables (chart-selection-guide, statistical-tools):**
- Are the SPC constants (A₂, D₃, D₄, A₃, B₃, B₄, d₂) correct for each subgroup size?
- Are the hypothesis test selection rules correct?
- Are the DMAIC tool references accurate?

**Question banks (p1-p7-questions):**
- Do the questions reflect the VDA 6.3 4th edition (2023)?
- Are the weighting indicators (W1/W2/W3) correctly assigned?
- Are the common findings realistic and tied to real audit experience?

**Worked examples (pdca-examples, hypothesis-elimination, gauge-rr-study-guide):**
- Are the numbers in worked examples internally consistent?
- Are the conclusions correct?
- Are the examples realistic for manufacturing/automotive context?

### Format compliance
- Frontmatter has all required fields: `name`, `type`, `parent_skill`, `author`, `version`, `status`, `created`, `last_updated`, `updated_by`, `reviewed_by`, `license`
- Scope statement and link to parent SKILL.md present at the top
- No workflow steps repeated from the parent SKILL.md

### What NOT to change
- Do not rewrite sections that are correct — only correct errors
- Do not change the frontmatter fields other than `last_updated`, `updated_by`, and `reviewed_by`
- Do not add workflow steps (those belong in SKILL.md, not reference files)

---

## Step 4 — Apply corrections

For each file that needs corrections:

1. Read the file first
2. Read the parent SKILL.md to understand what is already covered there
3. Apply corrections using targeted edits — do not rewrite entire sections
4. Update frontmatter for each corrected file:

```yaml
last_updated: "2026-06-XX"
updated_by: migmcc
reviewed_by: RBraga01
```

5. No changelog section is required in reference files — the frontmatter `last_updated` is sufficient.

---

## Step 5 — Stage and commit

```bash
# Stage only the files you corrected — explicitly by path:
git add skills/planning/ppap/references/18-elements-checklist.md
git add skills/measurement/msa-gauge-rr/references/gauge-rr-study-guide.md
# etc.

# Verify:
git status
git diff --staged

# Commit:
git commit -m "review: v3 reference file corrections by @migmcc

- [file]: [what was corrected]
- [file]: [what was corrected]"
```

---

## Step 6 — Run the skill-auditor on the parent skills

After corrections, run the `/skill-auditor` on each parent SKILL.md whose reference file was corrected.
The reference file is loaded by the skill — if it contains errors, the skill score will reflect it.

**Acceptance threshold:** Each skill must score ≥ 9/10. Do not open the PR until all corrected skills pass.

```
/skill-auditor skills/problem-solving/fishbone-analysis/SKILL.md
/skill-auditor skills/problem-solving/is-is-not-scoping/SKILL.md
/skill-auditor skills/problem-solving/pdca-improvement/SKILL.md
/skill-auditor skills/problem-solving/dmaic/SKILL.md
/skill-auditor skills/planning/ppap/SKILL.md
/skill-auditor skills/planning/apqp/SKILL.md
/skill-auditor skills/planning/control-plan/SKILL.md
/skill-auditor skills/planning/dvp-test-plan/SKILL.md
/skill-auditor skills/measurement/msa-gauge-rr/SKILL.md
/skill-auditor skills/measurement/spc-control-charts/SKILL.md
/skill-auditor skills/audit/vda-6-3-audit/SKILL.md
/skill-auditor skills/supplier-quality/supplier-scar/SKILL.md
/skill-auditor skills/documentation/car-corrective-action/SKILL.md
```

Only run the skill-auditor on skills whose reference file was corrected.
If no corrections were made to a reference file, no need to audit the parent skill.

---

## Step 7 — Open the Pull Request

```bash
git push origin review/v3-reference-files
```

Open a PR on GitHub:
- **Base:** `master`
- **Compare:** `review/v3-reference-files`
- **Title:** `review: v3 reference file corrections by @migmcc`
- **Body:**

```
## Summary

Methodology review of 13 new reference files added in commit a72b309.

Reviewed by @migmcc — quality engineering practitioner, 25+ years, claims manager, 8D specialist.

## Files corrected

- [ ] skills/problem-solving/fishbone-analysis/references/6m-category-guide.md — [describe or "no corrections needed"]
- [ ] skills/problem-solving/is-is-not-scoping/references/hypothesis-elimination.md
- [ ] skills/problem-solving/pdca-improvement/references/pdca-examples.md
- [ ] skills/problem-solving/dmaic/references/statistical-tools.md
- [ ] skills/planning/ppap/references/18-elements-checklist.md
- [ ] skills/planning/apqp/references/phase-deliverables.md
- [ ] skills/planning/control-plan/references/control-plan-template.md
- [ ] skills/planning/dvp-test-plan/references/dvp-template.md
- [ ] skills/measurement/msa-gauge-rr/references/gauge-rr-study-guide.md
- [ ] skills/measurement/spc-control-charts/references/chart-selection-guide.md
- [ ] skills/audit/vda-6-3-audit/references/p1-p7-questions.md
- [ ] skills/supplier-quality/supplier-scar/references/scar-template.md
- [ ] skills/documentation/car-corrective-action/references/car-template.md

## Items outside scope (not changed — for @RBraga01 to decide)

[List anything flagged that requires a structural decision]

## Skill-auditor results (only for parent skills of corrected files)

| Skill | Score before | Score after |
|-------|-------------|------------|
| | | |

## Overall assessment

[migmcc's overall quality score and comments on the reference file batch]
```

---

## Questions or blockers

If unsure about methodology — stop and ask @migmcc.
Do not make assumptions. @migmcc is the domain expert.
