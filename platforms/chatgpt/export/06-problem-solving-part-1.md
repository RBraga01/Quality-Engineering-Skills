# Quality Engineering Skills — problem solving

Generated from the canonical skills tree; each document follows in full.

---

## Source: skills/problem-solving/5why-root-cause/SKILL.md

---
name: 5why-root-cause
description: >-
  Drill into root cause with a 5-Why why chain, why analysis, or structured root cause
  investigation. Builds a Why chain from symptom to systemic root cause, validates each
  step with evidence, and detects circular reasoning. Use for 8D D4, CAPA, FMEA cause
  analysis, or any quality investigation requiring confirmed root cause identification.
license: MIT
metadata:
  author: RBraga01
  version: "1.1"
  iso-9001: "10.2"
  iatf-16949: "10.2.3"
  domain: quality-engineering
  subdomain: problem-solving
  industries: automotive,electronics,aerospace,medical,general
  status: approved
  created: "2026-06-01"
  last_updated: "2026-06-03"
  updated_by: RBraga01
  reviewed_by: RBraga01
  standard_edition: "ISO 9001:2015"
---

# 5-Why Root Cause Analysis

## Goal

Identify and validate a systemic root cause through a structured, evidence-based Why chain that can be directly linked to a corrective action.

## Required Execution Checklist

- [ ] Problem defined with measurable data (value vs. specification)
- [ ] Linear Why chain built — one cause path at a time, no branching
- [ ] Each Why supported by objective evidence (not opinion or "probably")
- [ ] Logical consistency verified — reversal check passed
- [ ] Systemic root cause identified (not "human error" or symptom)
- [ ] Root cause validated: reproducibility test + elimination test
- [ ] Output enables definition of corrective action (PCA or CAPA)

---

## When to use

Use 5-Why for any quality problem with a single, linear cause chain. Works best for process failures, equipment failures, and procedural non-compliances. For complex problems with multiple contributing causes, use [Fishbone](../fishbone-analysis/) first to identify candidate root causes, then use 5-Why to drill into each.

If multiple potential cause paths exist — do not combine them into one chain. **Run separate 5-Why chains for each path** and determine which is confirmed by evidence.

## Prerequisites

- Problem is clearly defined (use [Is/Is-Not](../is-is-not-scoping/) to scope if needed)
- The investigation team has access to the process, machine, or system where the defect occurred
- Physical evidence or production records are available

## Use within 8D — Occurrence and Escape

When used for 8D D4, two separate Why chains are required:

| Chain | Starting question | What it finds |
|-------|------------------|---------------|
| **Occurrence chain** | "Why did the defect happen?" | Root Cause of Occurrence (RCO) — the process or design failure that created the defect |
| **Escape chain** | "Why was the defect not detected before reaching the customer?" | Root Cause of Escape (RCE) — the detection system failure |

**Run each chain independently.** Do not mix occurrence and escape causes in the same chain — they have different corrective actions. The occurrence chain addresses prevention; the escape chain addresses detection.

---

## Workflow

### Step 1 — State the symptom precisely

Start with a factual, measurable problem statement. Not "the part was bad" but "dimension X measured 23.5mm; specification is 25.0 ± 0.5mm on part number Y, batch 2026-05-12."

The first Why answers: **"Why did [specific symptom] occur?"**

---

### Step 2 — Build the Why chain

For each Why, follow these rules:

**Rule 1: Each answer must be supported by evidence**
- Acceptable evidence: measurement data, production records, machine logs, direct observation, physical samples
- Not acceptable: "probably," "maybe," "someone said"

**Rule 2: Each answer must logically lead to the next Why**
- Test reversibility: "Because [Why N], therefore [Why N+1]"
- If the sentence doesn't make logical sense, the chain is broken

**Rule 3: Keep the chain focused**
- One Why chain = one cause path
- If you reach a fork (two possible causes), investigate both separately

**Rule 4: Stop at a systemic root cause**
- You have reached root cause when: fixing it would prevent the defect from ever recurring
- Typical systemic root causes: missing procedure, inadequate training system, process design gap, absence of poka-yoke, measurement system failure

---

### Step 3 — Validate the chain

Work backwards through the completed chain:

"Because [Why 5], therefore [Why 4]. Because [Why 4], therefore [Why 3]..."

If any step does not logically follow, revise that step.

---

### Step 4 — Validate the root cause

The root cause is correct if:
- **Reproducibility test:** can you deliberately create the defect by triggering the root cause? Yes → validated
- **Elimination test:** if you fix the root cause, does the defect disappear? (trial run or logical test)

**If neither test is possible, the root cause is not confirmed — it is a hypothesis.** Do not close the investigation on a hypothesis. Either obtain evidence to confirm it, or investigate alternative cause paths.

---

## Example

**Problem:** Connector pin bent at incoming inspection, 12/200 parts (6%).

| # | Why | Evidence | Validated? |
|---|-----|----------|------------|
| 1 | Why are pins bent? | Pins deformed during insertion into housing | Microscopy confirmed deformation pattern |
| 2 | Why during insertion? | Insertion force exceeded pin yield strength | Force measurement: 48N, pin rated to 35N |
| 3 | Why was force 48N? | Operator used incorrect insertion tool (hand press vs. pneumatic jig) | Tool log: jig under maintenance since 05-10 |
| 4 | Why was incorrect tool used? | No instruction specifying which tool to use when jig is unavailable | Work instruction reviewed — no contingency |
| 5 | Why no contingency? | Tool maintenance downtime not considered in work instruction design | Process FMEA missing this scenario |

**Root cause:** Work instruction design does not cover tool substitution contingency; FMEA does not identify tool maintenance as a failure scenario.

**Reversal check:** "Because FMEA doesn't cover tool maintenance → therefore no contingency instruction → therefore wrong tool used → therefore excess force → therefore pins bent." ✓ Logical.

---

## Common mistakes — reject these

**"Human error"** as a final answer
→ Ask: why was the error possible? What in the system allowed it?

**"Operator didn't follow the procedure"**
→ Ask: why didn't they follow it? Was it unclear? Not trained? Impossible to follow?

**"Machine was out of calibration"**
→ Ask: why? What is the calibration interval? Was it missed? Why?

**Circular reasoning**
→ "The part was defective because it didn't meet spec, because it was defective." → reframe the first Why as the physical mechanism.

**Stopping at a symptom, not a cause**
→ "The defect occurred because the part was wrong" — that IS the defect, not a cause.

**Branching the chain prematurely**
→ Each Why step should have one answer. If you have two, run two separate 5-Why chains.

## Output content

A validated 5-Why must include:
1. Problem statement (measured, quantified)
2. Each Why with: the answer, the supporting evidence, and validated (Yes/No)
3. Root cause statement
4. Reversal check (one sentence confirming logical flow)
5. Validation method (how the root cause was confirmed)
6. **Corrective action direction** — what type of action addresses this root cause (used as direct input to 8D D5 or CAPA)

## Output Format

At the start of each use, ask the user:

> "How would you like to receive the output?
> **A** — Structured Markdown (formatted tables and sections, ready to copy)
> **B** — Plain tables (simplified structure for Excel or Word)
> **C** — Narrative report (flowing text for a formal document or email)
>
> Default: A."

Adapt all output sections to the chosen format. If the platform or session context already defines a format preference, skip this question.

## Reference files

- [Chain validation guide](references/chain-validation.md)

## Changelog

| Version | Date | Author | Change |
|---------|------|--------|--------|
| 1.0 | 2026-06-01 | @RBraga01 | Initial release |
| 1.1 | 2026-06-03 | @RBraga01 | Added dual-chain requirement (occurrence + escape), evidence status tracking |

---

## Source: skills/problem-solving/5why-root-cause/references/chain-validation.md

---
name: chain-validation
type: reference
parent_skill: 5why-root-cause
author: RBraga01
version: "1.0"
status: approved
created: "2026-06-01"
last_updated: "2026-06-03"
updated_by: RBraga01
reviewed_by: RBraga01
license: MIT
---

# 5-Why Chain Validation Guide

Reference for building, validating, and rejecting 5-Why chains.
Use alongside the [5why-root-cause](../SKILL.md) skill.

> **Scope:** This guide focuses on **validation logic** — how to test whether a chain is correct.
> For the step-by-step execution workflow, see [5why-root-cause SKILL.md](../SKILL.md).

---

## Required Chain Validation Checklist

Use this checklist before accepting any 5-Why chain as complete.

- [ ] Each Why passes the "therefore" test (read backwards — logical at every step)
- [ ] Each step has objective evidence — no step marked "Validated: Yes" without supporting data
- [ ] No branching — one chain per cause path; separate chains for separate causes
- [ ] Chain ends in a systemic root cause (not "human error" or a symptom)
- [ ] Reversal check passes completely from end to beginning
- [ ] Root cause validated: reproducibility test + elimination test both attempted
- [ ] Separate escape chain completed (if used in 8D D4 context)
- [ ] Validated root cause feeds directly into a corrective action (8D D5 or CAPA)

---

## What Makes a Valid Why Chain

A valid 5-Why chain has three properties:

### 1. Logical continuity (the "therefore" test)

Every step must follow from the previous one. Test by reading backwards:

> "Because [Why N], therefore [Why N-1]."

If the sentence does not make logical sense, the chain is broken at that step.

**Example — valid chain:**

| # | Why | Therefore test |
|---|-----|---------------|
| 1 | Pins bent during insertion | — |
| 2 | Insertion force exceeded pin yield | Because force exceeded yield → pins bent ✓ |
| 3 | Operator used wrong tool | Because wrong tool → excess force ✓ |
| 4 | No instruction for tool substitution | Because no instruction → wrong tool used ✓ |
| 5 | Tool substitution not in FMEA | Because not in FMEA → no instruction written ✓ |

**Example — broken chain:**

| # | Why | Therefore test |
|---|-----|---------------|
| 1 | Part was out of spec | — |
| 2 | Supplier sent bad material | Because supplier sent bad material → part out of spec ✓ |
| 3 | Incoming inspection missed it | **Because incoming missed it → supplier sent bad material?** ✗ |

Step 3 is a separate why chain (why didn't we catch it?), not a continuation of steps 1–2.
This is where the **two root causes** pattern applies: occurrence and escape.

---

### 2. Evidence at every step

Each "Why" answer must be supported by:

| Acceptable evidence | Not acceptable |
|--------------------|----------------|
| Measurement data (force measurement, dimensional data) | "Probably" / "maybe" |
| Production records (machine logs, work order data) | "Someone said" |
| Direct observation (photographed condition, witnessed event) | Unverified assumptions |
| Physical samples (failed part, tool condition) | Team consensus without data |
| Documents (work instruction, calibration records, FMEA) | "It must have been" |

If evidence is unavailable, mark the step as "hypothesis — to be verified" and treat the chain
as unvalidated until evidence is obtained.

**No step may be marked "Validated: Yes" without objective evidence.** A chain with unconfirmed steps is a hypothesis chain — useful for investigation direction, but not acceptable for D4 closure or CAPA submission.

---

### 3. Systemic root cause at the end

A valid chain ends at a **systemic** root cause: something in the system that allowed the failure.

**Systemic root causes (accept these):**
- Missing or inadequate procedure / work instruction
- Gap in the FMEA (failure mode not identified)
- Training system failure (no qualification standard, no competence check)
- Absence of a poka-yoke where one should exist
- Process design gap (no step to prevent this failure mode)
- Measurement system inadequacy (gauge incapable, no MSA performed)
- Maintenance programme gap (no PM step for this failure mode)

**Non-systemic answers (reject these):**
- "Human error" — not systemic; ask why the error was possible
- "Operator carelessness" — not systemic; ask what in the system allowed carelessness
- "Supplier problem" — only half the chain; add why it was not caught
- "Machine failure" — only half the chain; add why it was not maintained/detected

---

## The Reversal Check (Mandatory)

After completing the chain, verify it by reading it forwards:

> "Because [Why 5], therefore [Why 4].
> Because [Why 4], therefore [Why 3].
> Because [Why 3], therefore [Why 2].
> Because [Why 2], therefore [Why 1] — which caused [the symptom]."

Every "therefore" transition must be logically sound. If any step fails the reversal check:
- Revise the why answer at that step
- Or split into two separate chains (one for occurrence, one for escape)

---

## Common Chain Failures

### Circular reasoning

The answer to a Why restates the previous Why in different words.

**Example:**
- Why are the parts out of spec? — Because they don't meet the specification.
- Why don't they meet the specification? — Because they are out of spec.

Fix: reframe the first Why as the physical mechanism that caused the non-conformance.

### Jumping to conclusion

The chain skips from symptom directly to root cause without establishing the path.

**Example:**
- Why was the defect not detected? — Because we don't have enough inspectors.

This may be true but skips: What detection method existed? Why did it fail to catch this?
What is the capability of the detection method? Fix: answer each step explicitly.

### Premature branching

Trying to put two separate cause paths into one chain.

**Example:**
- Why 3: "Either the gauge was wrong or the operator made an error"

Fix: run two separate 5-Why chains, one for each candidate cause. Validate each independently.

### Stopping at a symptom

The chain stops at something that is still a consequence of a deeper cause.

**Example:**
- Why was the wrong torque applied? — Because the torque wrench was set incorrectly.

This is still a symptom. Continue: Why was it set incorrectly? What in the system allowed it?

### Single-point-of-failure assumption

Assuming the chain has only one cause when multiple independent causes contributed.

Use [Fishbone](../../fishbone-analysis/) to map all candidate causes first, then run a
5-Why chain for each confirmed or probable cause.

---

## Output Format for a Validated Chain

A complete, documented 5-Why must include:

```
Problem statement: [measured, quantified — what, which part, how many]

Why Chain:
  Why 1: [answer] | Evidence: [source] | Validated: Yes/No
  Why 2: [answer] | Evidence: [source] | Validated: Yes/No
  Why 3: [answer] | Evidence: [source] | Validated: Yes/No
  Why 4: [answer] | Evidence: [source] | Validated: Yes/No
  Why 5: [answer] | Evidence: [source] | Validated: Yes/No

Root cause: [systemic statement]

Reversal check: "Because [Why 5], therefore [Why 4]. Because [Why 4]..." [result: passes/fails at step N]

Validation method: [reproducibility test result / elimination test result]
```

---

## Escape Chain (Root Cause of Non-Detection)

Always run a **separate** 5-Why chain for why the defect was not caught:

```
Why was the defect not detected before reaching [next process / customer]?

Why 1: [Which detection control existed and how it failed]
Why 2: [Why did the control fail?]
Why 3: [What in the system caused the control to be inadequate?]
...
Root cause of escape: [systemic detection system gap]
```

Both chains must be validated independently.
Both root causes must appear in D4 of the 8D report.
Both root causes must have corresponding PCAs in D5.

---

## From Validated Root Cause to Corrective Action

A validated root cause is only useful if it drives an action. The chain is not complete until the corrective action direction is defined.

| Root cause type | Corrective action direction |
|-----------------|----------------------------|
| Missing procedure / work instruction | Write or update the procedure to close the gap |
| FMEA gap (failure mode not identified) | Update PFMEA: add failure mode, assign AP, define prevention/detection control |
| Training system failure | Define competence standard; add OJT verification; update competence matrix |
| Absent poka-yoke | Design and implement an error-proofing device for this failure mode |
| Process design gap | Revise process to add the missing prevention step |
| Measurement system inadequacy | Upgrade gauge; perform MSA; add calibration step |

**Validated root causes feed directly into:**
- **8D D5** — Permanent Corrective Actions (one PCA per root cause)
- **CAPA** — Corrective Action Request linked to this chain
- **PFMEA update** — new or revised failure mode entry with updated O/D ratings

---

## Source: skills/problem-solving/8d-problem-solving/SKILL.md

---
name: 8d-problem-solving
description: >-
  Open an 8D, run a G8D or TOPS-8D investigation, respond to a warranty complaint, or handle
  a customer quality escape with the 8 Disciplines methodology. Covers D0 emergency response
  through D8 team recognition with gate validation. Required for automotive OEM complaints —
  Ford, BMW, VW, Stellantis — and any quality escape needing documented root cause and PCA.
license: MIT
metadata:
  author: RBraga01
  version: "1.1"
  iso-9001: "10.2"
  iatf-16949: "10.2.3"
  domain: quality-engineering
  subdomain: problem-solving
  industries: automotive,electronics,aerospace,medical,general
  status: approved
  created: "2026-06-01"
  last_updated: "2026-06-03"
  updated_by: RBraga01
  reviewed_by: RBraga01
  standard_edition: "ISO 9001:2015 / IATF 16949:2016"
---

# 8D Problem Solving

## Goal

Produce a validated, audit-ready 8D report with proven root causes and effective corrective actions that prevent recurrence — accepted by the customer and filed in the quality system.

## Required Execution Checklist

Quick-reference for agents and practitioners. All items must be complete before D8 closure.

- [ ] D0: Safety and regulatory risk assessed and documented
- [ ] D0: Suspect material identified and physically segregated
- [ ] D1: Cross-functional team assembled with champion identified
- [ ] D2: Problem described with measured values, part number, quantity, and Is/Is-Not
- [ ] D3: Containment implemented (past tense) with date and effectiveness evidence
- [ ] D4: Root cause of **occurrence** identified and validated with data or experiment
- [ ] D4: Root cause of **escape** identified and validated with data or experiment
- [ ] D5: One PCA per root cause selected, with verification plan
- [ ] D6: PCA implemented; verification data confirms zero recurrence; ICA formally removed
- [ ] D7: PFMEA, Control Plan, and Work Instructions updated (revision numbers documented)
- [ ] D7: Horizontal deployment assessed and actioned
- [ ] D8: Champion sign-off obtained; customer notified of closure

---

## When to use

Use 8D for customer-reported defects, internal escapes reaching downstream processes, field failures, or any non-conformance requiring documented root cause analysis. Mandatory for most automotive OEM customer complaints (Ford 8D, BMW G8D, VW QMSS, Stellantis).

## Prerequisites

- Defect or failure clearly identified and quantified
- Access to affected parts, process records, and measurement data
- Cross-functional team availability (quality, production, engineering minimum)

## Workflow

### D0 — Emergency Response (before the team is assembled)

Ask these questions first:
1. Is this a safety or regulatory issue? If yes → escalate immediately, notify customer
2. **Is there any potential for a product recall or regulatory event (safety, emissions, homologation compliance)?**
   - If yes → **STOP the standard 8D timeline. Escalate immediately to management and regulatory owner.** Do not proceed without documented management awareness. The 8D continues only with their authorisation.
3. Are suspect parts already at the customer or in the field? If yes → launch containment now (D3) before completing D1-D2
4. Capture initial evidence: photos, batch numbers, lot traceability, measurement data

D0 is complete when: safety is assessed, regulatory escalation decision documented, suspect material is identified and flagged.

---

### D1 — Team Formation

Build a cross-functional team. Required functions:
- **Champion** (sponsor, authority to release resources)
- **Team leader** (owns the 8D, drives completion)
- **Quality engineer** (methodology, documentation)
- **Production / process owner** (process knowledge)
- **Engineering** (design or process engineering)

Optional: supplier quality, logistics, customer representative.

Document: names, functions, team leader, start date, target closure date.

**Validation:** Is every affected process step represented? Does someone have authority to change the process?

---

### D2 — Problem Description

Define the problem precisely using Is/Is-Not and 5W2H. A weak D2 produces a weak D4.

**Is/Is-Not scoping (see [is-is-not-scoping](../is-is-not-scoping/) skill):**

| Question | IS | IS NOT |
|----------|----|--------|
| What is the problem? | e.g., dimensional out-of-spec | cosmetic scratch |
| What object/part? | Part number X, revision B | Part number Y |
| Where is it found? | Station 3, incoming inspection | Final test |
| When did it start? | Batch from 2026-05-12 | Earlier batches |
| How many? | 47 of 200 inspected (23.5%) | — |
| Trend? | Consistent since batch date | No spike |

**5W2H:**
- Who detected it? When? Where?
- What is the exact non-conformance (measured value vs. specification)?
- Why is it a problem (customer impact)?
- How was it detected? How many are affected?

D2 is complete when: a stranger could read it and know exactly what is wrong, on what, when, how many, and where in the supply chain.

---

### D3 — Interim Containment Actions (ICA)

ICA must **stop the non-conforming product from reaching the customer** while D4-D5 are in progress.

Typical ICAs:
- Sort / 100% inspection of suspect stock (in-process + field + customer)
- Ship-hold on all batches in the date range
- Add a specific inspection step at outgoing QC
- Customer notification and stock recovery (if product escaped)

**ICA validation — ask:**
- Does this ICA physically prevent the defect from escaping? (Yes/No — not "we will try")
- What is the evidence it is working? (inspection records, zero escapes since ICA date)
- Is it documented with an implementation date and responsible person?
- Is it temporary? (an ICA is not a permanent fix)

D3 is complete when: suspect product is contained with objective evidence, customer notified if applicable.

---

### D4 — Root Cause Analysis

Find TWO root causes:
1. **Root cause of occurrence** — why did the defect happen?
2. **Root cause of escape (detection failure)** — why was it not detected before reaching the customer/next process?

Use these tools (see referenced skills):
- [5-Why](../5why-root-cause/) for each root cause
- [Fishbone / Ishikawa](../fishbone-analysis/) for brainstorming categories
- [Is/Is-Not](../is-is-not-scoping/) to scope the problem boundaries

**Root cause validation:**
- Can you reproduce the defect by deliberately creating the root cause?
- Does removing the root cause prevent the defect in a trial run?
- Is it backed by data, not opinion?

**Reject these as final root causes:**
- "Human error" (not systemic — ask WHY the error was possible)
- "Operator didn't follow instructions" (ask WHY they didn't, or couldn't)
- "Supplier delivered bad parts" (ask WHY your incoming inspection did not catch it)

**Evidence rule:** A root cause must be proven by data or physical experiment — not by logical reasoning alone. If you can only argue it is plausible, it is a hypothesis. Reproduce the defect by triggering the root cause; eliminate the defect by removing it. Both tests required.

D4 is complete when: both root causes are validated with objective evidence, not opinion.

---

### D5 — Choose Permanent Corrective Actions (PCA)

For each root cause from D4, select a permanent corrective action that:
- Directly addresses that specific root cause (not a symptom)
- Can be verified as effective
- Is feasible within the available time and resources

**Evaluation matrix (for each candidate PCA):**
- Does it address the root cause? (Yes/No)
- Can effectiveness be measured? (metric + target)
- Is it risk-free to implement? (FMEA check)
- Timeline: realistic?

Document: PCA description, responsible owner, target implementation date, verification method.

D5 is complete when: one PCA per root cause is selected and documented with verification plan.

---

### D6 — Implement and Verify Effectiveness

Implement the PCAs. After implementation:

**Verification requirements:**
- Run sufficient production volume to achieve statistical confidence — **define sample size based on the observed defect rate and risk level** (higher defect rate or safety-related defect → larger sample required). Do not use fixed generic numbers; align the sample with the detection probability needed.
  - Guidance: if pre-PCA defect rate was p, the verification sample should be large enough that the probability of observing zero defects if p is still present is below 5%. Formula: n ≥ log(0.05) / log(1 − p).
- Measure the original defect metric before and after
- Confirm zero recurrence of the exact defect mode

**Verification evidence to capture:**
- Process control charts or inspection data after PCA
- Before/after comparison (defect rate or measurement data)
- Signed-off by quality and production

ICA (D3) can only be removed **after** D6 verification is complete with objective evidence.

D6 is complete when: data confirms the defect is eliminated, ICA formally removed.

---

### D7 — Prevent Recurrence (Systemisation)

The most valuable — and most skipped — discipline. Prevents the same root cause from appearing elsewhere.

**Required updates:**
- [ ] PFMEA updated: add/revise failure mode, update occurrence and detection ratings
- [ ] Control Plan updated: add control for root cause and escape
- [ ] Work Instructions / SOPs updated and re-issued
- [ ] Incoming inspection updated (if supplier or material related)
- [ ] Lessons learned documented and shared with similar product lines
- [ ] Training conducted for affected operators / inspectors

**Horizontal deployment:**
- Are there similar part numbers, processes, or product families that could have the same root cause?
- If yes → extend PCAs to those areas and document

D7 is complete when: all process documents are updated and changes are live in production.

---

### D8 — Team Recognition

Formally close the 8D:
- Team leader presents the completed 8D to the champion
- Champion validates all disciplines are complete with evidence
- Team is formally recognised (acknowledgement — not necessarily financial)
- 8D report is filed in the quality records system
- Closure communicated to the customer (if customer-initiated complaint)

D8 is complete when: champion signs off, customer notified of closure.

---

## Validation — is the 8D complete?

Before closing, verify:
- [ ] D2 problem description is objective and quantified
- [ ] D3 ICA has implementation date and verification evidence
- [ ] D4 has two root causes (occurrence + escape), both validated with evidence
- [ ] D5 PCAs directly address D4 root causes
- [ ] D6 verification data shows zero recurrence after PCA
- [ ] D7: FMEA, control plan, and work instructions are all updated
- [ ] D8: champion sign-off and customer notification (if applicable)

## Common mistakes

- **Skipping D0:** jumping to D2 before confirming the customer has no more suspect stock
- **Weak D2:** vague problem description leads to wrong root cause
- **D3 as D6:** treating containment as the permanent fix ("we added 100% inspection" is not a PCA)
- **Symptom as root cause:** "machine was miscalibrated" — why? "supplier sent wrong material" — why wasn't it caught?
- **Not updating D7 documents:** the most common audit finding

## Output Format

At the start of each use, ask the user:

> "How would you like to receive the output?
> **A** — Structured Markdown (formatted tables and sections, ready to copy)
> **B** — Plain tables (simplified structure for Excel or Word)
> **C** — Narrative report (flowing text for a formal document or email)
>
> Default: A."

Adapt all output sections to the chosen format. If the platform or session context already defines a format preference, skip this question.

## Reference files

- [D0–D8 detailed guide](references/d0-d8-guide.md)
- [8D report template](assets/8d-template.md)

## Changelog

| Version | Date | Author | Change |
|---------|------|--------|--------|
| 1.0 | 2026-06-01 | @RBraga01 | Initial release |
| 1.1 | 2026-06-03 | @RBraga01 | Added Required Execution Checklist, D-level validation criteria, OEM gate rules |

---

## Source: skills/problem-solving/8d-problem-solving/assets/8d-template.md

---
name: 8d-template
type: asset
parent_skill: 8d-problem-solving
author: RBraga01
version: "1.0"
status: approved
created: "2026-06-01"
last_updated: "2026-06-03"
updated_by: RBraga01
reviewed_by: RBraga01
license: MIT
---

# 8D Report Template

**8D Number:** ___________
**Date opened:** ___________
**Part number / Description:** ___________
**Customer / Source:** ___________
**Team leader:** ___________

---

## D0 — Emergency Response

- Safety / regulatory issue: [ ] Yes [ ] No
- Customer notified: [ ] Yes [ ] No [ ] N/A — Date: ___________
- Suspect material in field: [ ] Yes [ ] No
- Initial evidence captured: ___________

---

## D1 — Team

| Name | Function | Role |
|------|----------|------|
| | | Champion |
| | | Team Leader |
| | | Quality |
| | | Production |
| | | Engineering |

---

## D2 — Problem Description

**Is/Is-Not:**

| | IS | IS NOT |
|--|-----|--------|
| What | | |
| Which part | | |
| Where found | | |
| When | | |
| How many | | |

**Concise problem statement (one sentence):**
_____________________________________________

**Quantity affected:** _____ / _____ inspected = _____% defective

---

## D3 — Interim Containment Actions

| Action | Owner | Date implemented | Verification evidence |
|--------|-------|------------------|-----------------------|
| | | | |
| | | | |

ICA verified effective: [ ] Yes — Date: ___________

---

## D4 — Root Cause Analysis

**Root cause of occurrence:**
> Why did the defect happen?

1. Why: ___________
2. Why: ___________
3. Why: ___________
4. Why: ___________
5. Root cause: ___________

Validated by: ___________

**Root cause of escape:**
> Why was it not detected?

1. Why: ___________
2. Why: ___________
3. Why: ___________
Root cause: ___________

Validated by: ___________

---

## D5 — Permanent Corrective Actions

| Root cause | PCA | Owner | Target date | Verification method |
|------------|-----|-------|-------------|---------------------|
| Occurrence | | | | |
| Escape | | | | |

---

## D6 — Implementation & Verification

| PCA | Implementation date | Verification data | Result |
|-----|--------------------|--------------------|--------|
| | | | |
| | | | |

ICA removed: [ ] Yes — Date: ___________ [ ] No — Reason: ___________

Defect rate after PCA: ___________

---

## D7 — Prevention

- [ ] PFMEA updated — revision: ___________ date: ___________
- [ ] Control Plan updated — revision: ___________ date: ___________
- [ ] Work Instructions updated — doc number: ___________ date: ___________
- [ ] Operators / inspectors trained — date: ___________
- [ ] Horizontal deployment: ___________
- [ ] Lessons learned filed: ___________

---

## D8 — Team Recognition

Champion sign-off: ___________ Date: ___________
Customer closure notification: [ ] Yes — Date: ___________ [ ] N/A

---

## Source: skills/problem-solving/8d-problem-solving/references/d0-d8-guide.md

---
name: d0-d8-guide
type: reference
parent_skill: 8d-problem-solving
author: RBraga01
version: "1.0"
status: approved
created: "2026-06-01"
last_updated: "2026-06-03"
updated_by: RBraga01
reviewed_by: RBraga01
license: MIT
---

# D0–D8 Reference Guide

Complete reference for the Eight Disciplines (8D) problem-solving methodology.
Covers all disciplines from D0 (pre-work) through D8 (closure), with gate criteria,
evidence requirements, OEM-specific notes, and common rejection reasons.

---

## D0 — Emergency Response (Pre-Team)

D0 is not a numbered discipline in all OEM variants, but it is mandatory in practice.
Execute D0 **before** assembling the team whenever the defect poses an immediate risk.

### Purpose
Prevent further harm while the team is being assembled. D0 answers: "Is anyone already affected?"

### Required actions

1. **Safety assessment** — Is this a safety or regulatory issue?
   - If yes: escalate immediately to management, notify customer, do not ship
   - Document the safety decision regardless of outcome (even "not a safety issue" needs evidence)
   - **If safety or regulatory risk is confirmed: STOP the standard 8D timeline. Do not proceed to D1–D3 without documented management authorisation. The 8D resumes only after escalation is handled and management has acknowledged the risk in writing.**

2. **Suspect material identification** — What is already in the field, at the customer, or in transit?
   - Map all batches, serial numbers, or shipment dates in the suspect window
   - Flag all suspect stock: physically segregate (red tag, hold label, system block)

3. **Initial evidence capture** — Before anything is disturbed
   - Photos of the defect, batch labels, traceability markings
   - Measurement data if available
   - Production records for the suspect period

### D0 gate — complete when
- [ ] Safety and regulatory impact assessed and documented
- [ ] All suspect material identified by batch/lot/serial number
- [ ] Suspect stock physically segregated or blocked in the system
- [ ] Initial evidence captured and secured

### OEM notes
- **Ford TOPS-8D**: D0 called "Emergency Response Actions (ERA)" — mandatory field in submission
- **BMW G8D**: D0 captures initial problem statement and emergency actions before D1
- **VW QMSS**: Emergency containment must be documented with implementation timestamp

---

## D1 — Team Formation

### Purpose
Build the cross-functional team that has the knowledge and authority to solve the problem.

### Required members

| Role | Why mandatory |
|------|--------------|
| Champion (sponsor) | Has authority to release resources, approve actions, sign off D8 |
| Team leader | Owns the 8D, drives discipline completion, single point of contact |
| Quality engineer | Methodology, documentation, FMEA and Control Plan ownership |
| Production / process owner | Knows the process, can implement changes |
| Engineering | Design or process engineering authority |

Optional: supplier quality engineer, logistics, customer representative, maintenance.

### Validation questions
- Does someone on the team have authority to change the process (not just recommend)?
- Is every affected process step represented?
- Is the champion available to sign off at D8?

### D1 gate — complete when
- [ ] Team members listed with names, functions, and contact information
- [ ] Team leader identified
- [ ] Champion (sponsor) identified with sign-off authority
- [ ] Start date and target closure date documented

---

## D2 — Problem Description

### Purpose
Define what is wrong with precision so that anyone reading D2 can understand the problem
without asking questions. A strong D2 is the foundation of D4.

### Mandatory elements

**Quantification** — numbers, not adjectives

**Is/Is-Not scoping:**

| Dimension | IS | IS NOT |
|-----------|----|----|
| What (defect) | Specific defect with measurement | Similar defects not present |
| Which (part) | Part number, revision, batch | Other part numbers/batches |
| Where (found) | Location in process, customer, geography | Locations not affected |
| When (time) | Period when defect starts/ends | Before/after periods |
| How many | Rate, count, trend | |

### D2 gate — complete when
- [ ] Defect described with measured value and specification
- [ ] Part number, revision, and batch/lot identified
- [ ] Quantity affected stated as count and percentage
- [ ] Is/Is-Not matrix completed

---

## D3 — Interim Containment Actions (ICA)

### Purpose
Stop the non-conforming product from reaching the customer while D4–D5 are in progress.

### ICA requirements
- Must be past tense with evidence (not "we will sort" — "sorting completed on date, N parts rejected")
- Must physically prevent escape
- Must have an implementation date and responsible person
- **Containment is temporary — it must never be accepted as a permanent corrective action.** "We added 100% inspection" is a D3 ICA. The D5 PCA must eliminate or reduce the root cause, not just improve detection.

### D3 gate — complete when
- [ ] ICA implemented (past tense) with implementation date
- [ ] Evidence of ICA effectiveness documented
- [ ] Customer notified if product has reached them

---

## D4 — Root Cause Analysis

### The two root causes — mandatory
1. **Root Cause of Occurrence (RCO)** — why did the defect happen?
2. **Root Cause of Escape (RCE)** — why was it not detected?

### Root cause validation — both tests required
- **Reproducibility test**: can you deliberately create the defect by triggering the root cause?
- **Elimination test**: does removing the root cause prevent the defect in a trial?

### Reject these as root causes
- "Human error" — ask: why was the error possible?
- "Operator didn't follow procedure" — ask: why could they deviate?
- "Supplier sent bad parts" — ask: why wasn't it caught at incoming?

### D4 gate — complete when
- [ ] Two root causes identified (occurrence + escape), both validated with evidence
- [ ] Both root causes are systemic, backed by data

---

## D5 — Choose Permanent Corrective Actions

### PCA types (best to worst)
1. Eliminate the cause (poka-yoke, design change)
2. Reduce occurrence (prevention control)
3. Improve detection (detection control)

**Detection-only actions are not acceptable as the sole PCA if elimination or occurrence reduction is technically feasible.** Improving detection catches defects after they are made — it does not prevent them. A detection PCA alone must be justified in writing with evidence that prevention is not achievable.

### D5 gate — complete when
- [ ] One PCA per root cause selected
- [ ] Verification plan: what metric, what target, what method
- [ ] If detection-only PCA: documented justification that prevention was evaluated and ruled out

---

## D6 — Implement and Verify PCA Effectiveness

### Verification requirements
- **Sufficient production volume based on statistical confidence** — define sample size from the observed defect rate and risk level, not from a fixed number. Higher defect rate or safety-related failure mode requires a larger verification sample.
  - Reference formula: n ≥ log(α) / log(1 − p), where p = pre-PCA defect rate and α = acceptable probability of missing recurrence (typically 0.05).
  - Example: defect rate 2% (p = 0.02), α = 0.05 → n ≥ 148 units minimum.
- Before/after comparison with same metric as D2
- Zero recurrence of the exact defect mode
- ICA removed only after D6 verification is complete with data

### D6 gate — complete when
- [ ] PCAs implemented with date
- [ ] Verification data confirms zero recurrence
- [ ] ICA formally removed

---

## D7 — Prevent Recurrence

### Required updates — all mandatory
- [ ] PFMEA updated (revised occurrence and detection ratings, action plan updated)
- [ ] Control Plan updated
- [ ] Work Instructions / SOPs updated and re-issued
- [ ] Training conducted with records
- [ ] Lessons learned documented in quality system
- [ ] Horizontal deployment assessed (similar parts, processes, product families)

---

## D8 — Team Recognition and Closure

### Closure requirements
- [ ] Champion reviewed and signed off the complete 8D
- [ ] Customer notified of closure (if customer-initiated)
- [ ] Team recognition documented
- [ ] 8D report filed in quality records
- [ ] All D0–D7 objective evidence archived and traceable (photos, measurement records, updated documents with revision numbers, training records, verification data)

---

## OEM Submission Formats

| OEM | Format | D0 required | System |
|-----|--------|------------|--------|
| Ford | TOPS-8D | Yes (ERA) | GQTS |
| BMW | G8D | Yes | SRM/BQMS |
| VW/Audi | QMSS | Yes | FORMEL Q |
| Stellantis | 8D (MAQMSR) | Recommended | SQS Portal |
| GM | Global 8D | Recommended | Covisint |

See [oem-formats](../../../documentation/8d-report-writing/references/oem-formats.md) for full detail.

---

## Global 8D Validation Checklist

Use at closure review (D8) to confirm the full 8D is audit-ready. All items must be checked before the champion signs off.

| # | Item | Complete? |
|---|------|-----------|
| 1 | D0: Safety and regulatory risk assessed and documented (even if "not a risk") | ☐ |
| 2 | D0: Suspect material identified by batch/lot and physically segregated | ☐ |
| 3 | D1: Cross-functional team with champion and team leader named | ☐ |
| 4 | D2: Problem described with measured values vs. specification (not adjectives) | ☐ |
| 5 | D2: Is/Is-Not matrix completed with specific facts | ☐ |
| 6 | D3: Containment implemented (past tense) with date, responsible person, and effectiveness evidence | ☐ |
| 7 | D4: Root Cause of Occurrence identified, validated with data or experiment | ☐ |
| 8 | D4: Root Cause of Escape identified, validated with data or experiment | ☐ |
| 9 | D4: Both root causes are systemic (not "human error" or "operator mistake") | ☐ |
| 10 | D5: One PCA per root cause, addressing the root cause directly (not the symptom) | ☐ |
| 11 | D5: If detection-only PCA: justification documented that prevention was evaluated | ☐ |
| 12 | D6: Verification data shows zero recurrence over a statistically sufficient sample | ☐ |
| 13 | D6: ICA formally removed after verification is complete | ☐ |
| 14 | D7: PFMEA updated — revision number and date recorded | ☐ |
| 15 | D7: Control Plan updated — revision number and date recorded | ☐ |
| 16 | D7: Work Instructions updated and re-issued — revision number and date recorded | ☐ |
| 17 | D7: Horizontal deployment assessed; actions documented for similar parts/processes | ☐ |
| 18 | D8: All D0–D7 evidence archived and traceable | ☐ |
| 19 | D8: Champion sign-off obtained | ☐ |
| 20 | D8: Customer notified of closure (if customer-initiated complaint) | ☐ |

---

## Source: skills/problem-solving/dmaic/SKILL.md

---
name: dmaic
description: >-
  DMAIC (Define-Measure-Analyze-Improve-Control) — Six Sigma structured problem-solving for
  chronic, data-driven quality improvement projects. Use when a problem recurs despite corrective
  actions, when a process needs systematic capability improvement, or when a customer requests
  a Six Sigma approach. Use 8D for reactive single-incident problems; use DMAIC for recurring
  systemic issues requiring statistical analysis. Covers IATF 16949 §10.1 and ISO 9001 §10.3.
license: MIT
metadata:
  author: RBraga01
  version: "1.1"
  iso-9001: "10.3"
  iatf-16949: "10.1"
  domain: quality-engineering
  subdomain: problem-solving
  industries: automotive,electronics,aerospace,medical,general
  status: approved
  created: "2026-06-06"
  last_updated: "2026-06-06"
  updated_by: migmcc
  reviewed_by: RBraga01
  standard_edition: "Six Sigma DMAIC / ISO 9001:2015 §10.3 / IATF 16949:2016 §10.1"
---

# DMAIC (Six Sigma Problem Solving)

## When to use

Use DMAIC when:
- A problem has recurred multiple times despite previous corrective actions
- The process needs measurable, data-driven capability improvement (Cpk improvement target)
- The root cause is unknown and requires statistical analysis to identify
- A customer requires a Six Sigma approach or asks for a DMAIC report
- The improvement opportunity involves eliminating chronic waste (rework, scrap, test failures)

**Use 8D instead when:** The problem is a single customer complaint, an escape to the field, or requires immediate containment. 8D is reactive and fast. DMAIC is proactive and thorough — it takes weeks to months.

**Use PDCA instead when:** The improvement is incremental and the root cause is already known or assumed.

## Prerequisites

- A defined problem with measurable impact (reject rate, Cpk, scrap cost, defect count)
- Baseline data available or collectable
- Process owner and cross-functional team assigned
- Management support and a time budget (minimum 4–12 weeks depending on project scope)

## Workflow

### Phase 1 — DEFINE

**Objective:** Define the problem, the scope, the team, and the goal in measurable terms.

**Key tools and deliverables:**

**Project Charter** — The DMAIC starts and ends here. Contains:
- Problem statement: what is happening, where, since when, how much (measured impact)
- Goal statement: specific, measurable target (e.g., "Reduce connector reject rate from 3.2% to 0.5% by Q3")
- Scope: what is IN and OUT of scope (use Is/Is-Not to define boundaries)
- Business case: financial or customer impact ($, PPM, warranty cost)
- Team: Champion, Black Belt/Green Belt, process owner, operators, engineering

**SIPOC diagram:**
- Suppliers → Inputs → Process → Outputs → Customers
- Defines the process at a high level before diving into detail
- Identifies all inputs that could affect the output (Y)

**Voice of the Customer (VOC) → CTQ:**
- What does the customer care about? (VOC)
- Translate to a measurable Critical to Quality (CTQ) characteristic
- The CTQ becomes the Y (output) the project will improve

**Gate criteria to exit Define:**
- Problem is specific and measurable
- Goal is agreed with the Champion
- Scope is bounded
- Team is assigned and available

---

### Phase 2 — MEASURE

**Objective:** Establish the current baseline and validate the measurement system.

**Key tools and deliverables:**

**Process map (detailed):**
- Map every step of the process as it IS (not as it should be)
- Identify where defects are created or detected
- Mark each step: Value-Added (VA), Non-Value-Added (NVA), or Required Non-Value-Added

**Data collection plan:**
- What will be measured? (the Y and key process inputs Xs)
- How will it be measured? (gauge, method)
- How many samples? (for capability: minimum 100 pieces)
- Who will collect data? When? Where?

**MSA (Gauge R&R):**
- Validate the measurement system for the CTQ before collecting data
- %GRR < 30% required; <10% preferred
- If measurement system is inadequate: fix it before proceeding

**Baseline capability:**
- Calculate current Cpk/Ppk for the CTQ
- Establish current defect rate (PPM or %)
- This baseline is the MEASURE gate deliverable — do not proceed without it

**Gate criteria to exit Measure:**
- Baseline Cpk/PPM established with statistical confidence
- MSA complete and measurement system adequate
- Data collection plan executed with sufficient data

---

### Phase 3 — ANALYZE

**Objective:** Identify and confirm the root cause(s) of the problem using data.

**Key tools and deliverables:**

**Fishbone / Cause & Effect diagram:**
- Brainstorm potential causes using 6M (Man, Machine, Method, Material, Measurement, Mother Nature)
- All potential causes are hypotheses at this stage — none are confirmed

**Is/Is-Not analysis:**
- Scope the problem precisely — what IS affected vs. what IS NOT
- Narrows the hypothesis list before investing in analysis

**Multi-Vari study:**
- Understand whether variation is: positional (within-part), cyclical (part-to-part), or temporal (time-based)
- Identifies the dominant family of variation — directs the investigation

**Hypothesis testing:**
Confirm or reject hypotheses statistically. Selection guide:

| Situation | Tool |
|-----------|------|
| Compare means of 2 groups (continuous Y, e.g., Shift A vs. B) | t-test (paired if same parts measured twice) |
| Compare means of 3+ groups (e.g., 3 machines, 4 operators) | One-way ANOVA |
| Categorical Y (pass/fail) vs. categorical X (supplier, shift) | Chi-square test |
| Continuous Y vs. continuous X (does temperature predict dimension?) | Pearson correlation; then regression to quantify |
| Multiple Xs affecting one Y | Multiple regression; confirm no multicollinearity |

Use p < 0.05 as the significance threshold unless a different risk level is warranted. Always check the test's assumptions (normality for t-test/ANOVA; independence for chi-square).

**Root cause confirmation:**
- A root cause is NOT confirmed until data proves it
- Reject "human error" as a root cause — it is a symptom; ask why the error was possible
- Confirmed root causes: demonstrate that when the Xs change, the Y changes predictably

**Gate criteria to exit Analyze:**
- Root cause(s) confirmed with data (not assumed)
- Cause-and-effect quantified (Y = f(X) relationship established)
- Team agrees on which Xs to improve

---

### Phase 4 — IMPROVE

**Objective:** Develop, test, and implement solutions that address the confirmed root causes.

**Key tools and deliverables:**

**Solution generation:**
- Brainstorm solutions for each confirmed root cause
- Evaluate solutions: impact vs. effort vs. risk
- Do NOT select solutions based on opinion — test them

**Pilot / Design of Experiment (DOE):**
- Test the proposed solution on a small scale before full implementation
- DOE: systematically vary multiple factors to find the optimal process settings
- Simple experiments: OFAT (One Factor At A Time) for straightforward improvements

**Solution validation:**
- Run a production pilot with the solution in place
- Collect data: does the Y improve as predicted?
- Calculate new Cpk/PPM — compare to baseline and goal

**Implementation plan:**
- Who does what, by when, to implement the solution at full scale
- Change management: update Process Flow, PFMEA, Control Plan, Work Instructions, training

**Gate criteria to exit Improve:**
- Solution tested and statistically validated (not just "it seems better")
- Cpk/PPM improvement demonstrated in pilot data
- Implementation plan complete and approved

---

### Phase 5 — CONTROL

**Objective:** Sustain the gains — prevent the process from reverting to the old state.

**Key tools and deliverables:**

**Updated Control Plan:**
- Add new controls for the Xs identified in Analyze
- Define monitoring frequency and reaction plan for out-of-control conditions

**SPC / Statistical monitoring:**
- Install control charts on the critical Xs and the Y
- Set control limits from the improved process data
- Define who monitors and how often

**Updated PFMEA:**
- New failure modes identified during the project must be added
- Controls added in Improve must be reflected in the PFMEA current controls column

**Updated Work Instructions:**
- Document the new process steps, settings, or behaviours required
- Train operators and verify understanding

**Mistake-proofing (Poka-yoke):**
- For any root cause that was behavioural or procedural: add error-proofing to prevent recurrence
- Error-proofing is the highest-reliability control — prefer it over inspection or SPC alone

**Project handover:**
- Transfer ownership from the project team to the process owner
- Establish a 3–6 month monitoring period with defined Cpk targets; specify the minimum Cpk that constitutes "sustained improvement" (e.g., Cpk ≥ 1.33 for a minimum of 3 consecutive months of production data — not 3 months of calendar time)
- Close the project only when the monitoring criterion is met with actual production data — not lab data or pilot data

**Final project report:**
- Before and after: Cpk, PPM, financial savings
- Lessons learned for future projects

**Gate criteria to close the project:**
- Cpk/PPM goal achieved and sustained for minimum 3 months post-implementation
- All documents updated (PFMEA, CP, WIs)
- Process ownership transferred to process owner
- Financial benefits validated by Finance (if business case required it)

---

### DMAIC vs. 8D — quick reference

| Dimension | 8D | DMAIC |
|-----------|-----|-------|
| Trigger | Customer complaint, single escape | Recurring problem, capability gap |
| Timeline | Days to weeks | Weeks to months |
| Root cause method | 5-Why, Fishbone | Hypothesis testing, statistical analysis |
| Output | Corrective action to prevent recurrence | Optimised process with sustained capability |
| Standards | ISO 9001 §10.2, IATF 16949 §10.2.3 | ISO 9001 §10.3, IATF 16949 §10.1 |

## Validation criteria

A DMAIC project is complete when:
- Baseline and improved Cpk/PPM both quantified with data
- Root causes confirmed statistically (not assumed)
- Solution validated in a pilot before full implementation
- PFMEA, Control Plan, and Work Instructions updated
- Improved Cpk sustained for minimum 3 months post-implementation
- Financial or quality benefit measured and reported

## Common mistakes

- Jumping to Improve before confirming root cause (the most common DMAIC failure)
- Not performing MSA before collecting baseline data — baseline may be measurement noise
- Selecting the solution in Define before data analysis — biases the entire project
- Closing the project at Implementation without monitoring for sustainability
- Not updating PFMEA and Control Plan — process reverts within months
- Using DMAIC for a single-event problem that needs 8D containment first

## Output Format

At the start of each use, ask the user:

> "How would you like to receive the output?
> **A** — Structured Markdown (formatted tables and sections, ready to copy)
> **B** — Plain tables (simplified structure for Excel or Word)
> **C** — Narrative report (flowing text for a formal document or email)
>
> Default: A."

Adapt all output sections to the chosen format. If the platform or session context already defines a format preference, skip this question.

## Changelog

| Version | Date | Author | Change |
|---------|------|--------|--------|
| 1.0 | 2026-06-06 | @RBraga01 | Initial release |
| 1.1 | 2026-06-06 | @migmcc | Added hypothesis test selection guide in Phase 3; added monitoring period closure criteria in Phase 5 (Cpk sustained on production data, not pilot) |

---

## Source: skills/problem-solving/dmaic/references/statistical-tools.md

---
name: statistical-tools
type: reference
parent_skill: dmaic
author: RBraga01
version: "1.0"
status: approved
created: "2026-06-06"
last_updated: "2026-06-06"
updated_by: migmcc
reviewed_by: RBraga01
license: MIT
---

# Statistical Tools Reference — DMAIC

Tool selection, assumptions, sample size requirements, and software equivalents for DMAIC statistical analysis.
Use alongside the [dmaic](../SKILL.md) skill.

> **Scope:** This document covers the statistical tool reference by DMAIC phase, hypothesis testing assumptions and sample size requirements, MSA requirements before capability studies, Minitab and Excel equivalents for key tests, and the distinction between statistical and practical significance. For the DMAIC phase workflow, gate criteria, and project charter structure, see [dmaic SKILL.md](../SKILL.md).

---

## Tool Reference by DMAIC Phase

### Define Phase Tools

| Tool | Purpose | When to use | Key output |
|---|---|---|---|
| SIPOC | Map Suppliers-Inputs-Process-Outputs-Customers at high level | Always in Define; scopes the process before detailed mapping | Bounded process scope; identified input variables (Xs) and output (Y) |
| Project charter | Document problem, goal, scope, team, business case | Always; the project anchor document | Agreed measurable goal; Champion approval |
| Is/Is-Not | Scope the problem precisely; eliminate hypotheses | When defect is intermittent, batch-specific, or location-specific | Bounded problem scope; eliminated hypotheses |
| VOC → CTQ | Translate customer requirement to measurable characteristic | Always; links project Y to customer value | CTQ definition with specification limits |
| Pareto chart | Identify the vital few defect types or sources | When multiple defect types exist and resource is limited | Ranked contribution of defect categories; identifies where to focus |

### Measure Phase Tools

| Tool | Purpose | When to use | Key output |
|---|---|---|---|
| Gauge R&R (crossed) | Quantify measurement system variation (repeatability + reproducibility) | Before collecting baseline data on any continuous CTQ | %GRR, %Part variation, ndc; accept/reject/improve decision |
| Attribute Agreement Analysis | Assess consistency of attribute (pass/fail, visual) judgements | When CTQ is an attribute characteristic | Kappa statistic; agreement % within and between appraisers |
| Process capability (Cpk, Ppk) | Quantify how well the process meets specification | After MSA passes; with minimum 100 consecutive parts | Cpk, Ppk, PPM estimate; confirmed baseline |
| Control chart (I-MR or Xbar-R) | Assess process stability before capability | Before calculating Cpk — capability is only meaningful for a stable process | Control limits; evidence of statistical control or special causes |
| Multi-Vari chart | Categorise dominant family of variation: positional, cyclical, or temporal | When variation source is unknown; efficient first investigation | Identifies whether to look for positional, part-to-part, or time effects |
| Data collection plan | Define what, how, when, how many to measure | Always before collecting data | Measurement plan with sampling strategy and sample sizes |

### Analyze Phase Tools

| Tool | Purpose | When to use | Key output |
|---|---|---|---|
| Fishbone / Ishikawa | Brainstorm all potential causes across 6M | Always; prevents tunnel vision | Categorised cause list for hypothesis testing |
| 5-Why | Trace a confirmed cause to its systemic root cause | After hypothesis confirmed by data | Systemic root cause with evidence chain |
| Hypothesis test — 2-sample t-test | Compare means of two independent groups | Comparing Shift A vs Shift B; Machine 1 vs Machine 2 | p-value; confidence interval for difference in means |
| Hypothesis test — Paired t-test | Compare two measurements on same sample (before/after, two methods) | Before/after comparison on same parts; gauge comparison | p-value; confidence interval for mean difference |
| Hypothesis test — ANOVA (one-way) | Compare means of three or more groups | Comparing 3+ machines, operators, suppliers, or shifts | p-value; identification of which groups differ (Tukey post-hoc) |
| Hypothesis test — Chi-square | Test association between two categorical variables | Defect type vs. shift; defect vs. supplier; pass/fail vs. line | p-value; observed vs. expected frequency table |
| Correlation (Pearson) | Quantify linear relationship between two continuous variables | When you suspect X and Y move together | Correlation coefficient r; p-value |
| Simple linear regression | Quantify and model the relationship between one X and one Y | When correlation is confirmed and you need the equation Y = f(X) | Regression equation; R²; prediction capability |
| Multiple regression | Model Y as a function of multiple Xs simultaneously | When several Xs are suspected and you need relative contribution | Regression coefficients; R²; residual analysis |
| Box plot | Visualise distribution differences between groups | Comparing groups visually before or alongside hypothesis testing | Visual identification of median, spread, and outliers by group |
| Scatter plot | Explore relationship between two continuous variables | Before correlation or regression | Visual pattern; outlier identification |
| Normal probability plot | Test whether data follows normal distribution (required for many tests) | Before using t-test, ANOVA, or Cpk (which assume normality) | p-value for normality test (Anderson-Darling); visual fit |

### Improve Phase Tools

| Tool | Purpose | When to use | Key output |
|---|---|---|---|
| Solution matrix (impact/effort/risk) | Evaluate and prioritise candidate solutions | When multiple solutions exist; avoids opinion-driven selection | Ranked solution list with scoring rationale |
| Full factorial DOE | Test all combinations of factor levels to find optimal settings | When 2–5 factors, each at 2 levels; effects and interactions needed | Main effects; interaction plots; optimal factor settings |
| Fractional factorial DOE | Screen many factors to identify vital few | When 5+ factors; screening phase before optimisation | Main effects; fractional resolution; directions for full factorial |
| OFAT (One Factor At A Time) | Vary one factor at a time; simple improvement | When only one suspected factor; confirmatory test | Before/after comparison for that factor |
| Pilot confirmation test | Validate solution under production conditions | After DOE identifies optimal settings; before full deployment | Cpk at optimal settings; production-representative validation |
| Mistake-proofing (Poka-yoke) | Eliminate error through physical or design prevention | When root cause is human error or process ambiguity | Error-proofing device, fixture, or system |

### Control Phase Tools

| Tool | Purpose | When to use | Key output |
|---|---|---|---|
| Control chart — I-MR | Monitor individual measurements over time; detect special causes | Low-volume production; destructive testing; one measurement per sample | Control limits; out-of-control signals (Western Electric rules) |
| Control chart — Xbar-R | Monitor subgroup averages and ranges | Moderate volume; can form rational subgroups of 2–5 | Control limits for average and range; process stability |
| Control chart — Xbar-S | Monitor subgroup averages and standard deviations | Subgroup size > 8; better estimate of within-subgroup variation | Control limits; more efficient than R for large subgroups |
| Control chart — p-chart | Monitor proportion defective per subgroup | Attribute data; variable subgroup size | Control limits for proportion defective |
| Control chart — c-chart | Monitor count of defects per unit | Count of defects on a fixed-area or fixed-unit basis | Control limits for defect count |
| Control plan update | Document new controls: what to measure, frequency, reaction plan | Always; every DMAIC project must close with an updated Control Plan | Revised Control Plan with new Xs and Y controls |
| PFMEA update | Reflect new failure modes and controls discovered in project | Always; new controls from Improve must appear in PFMEA | Updated S/O/D ratings; new current controls column entries |

---

## Hypothesis Testing — Assumptions and Sample Size Requirements

### Choosing the right test

```
Data type of Y?
├── Continuous
│   ├── Comparing to a reference value → 1-sample t-test
│   ├── Comparing 2 groups (independent) → 2-sample t-test
│   ├── Comparing 2 measurements on same sample → Paired t-test
│   └── Comparing 3+ groups → One-way ANOVA
│       └── If data is non-normal and n < 30 per group → Kruskal-Wallis
└── Attribute (counts / categories)
    ├── Association between two categorical variables → Chi-square
    ├── Comparing 2 proportions → 2-proportion z-test
    └── Comparing 3+ proportions → Chi-square or logistic regression
```

### Assumptions and what to do when violated

| Test | Assumptions | Check how | If violated |
|---|---|---|---|
| 2-sample t-test | Normality (or n ≥ 30); independence of samples | Anderson-Darling test; Normal probability plot | n < 30 and non-normal → Mann-Whitney U (non-parametric) |
| Paired t-test | Normality of differences; pairs are independent | Histogram and Normal probability plot of differences | Non-normal differences → Wilcoxon signed-rank test |
| One-way ANOVA | Normality within groups; equal variances; independence | Bartlett's test (equal variances); AD test per group | Unequal variances → Welch's ANOVA; non-normal small n → Kruskal-Wallis |
| Chi-square | Expected frequency ≥ 5 in each cell | Inspect contingency table | Low expected counts → Fisher's exact test |
| Pearson correlation | Both variables continuous; linear relationship; no outliers | Scatter plot; normality check | Non-linear → Spearman rank correlation |
| Regression | Linearity; independence of residuals; normality of residuals; homoscedasticity | Residual plots (4-in-1) | Non-linearity → transform Y or X; heteroscedasticity → weighted regression |

### Sample size requirements

| Test | Minimum practical sample | Notes |
|---|---|---|
| 2-sample t-test | 30 per group (60 total) | For detecting a medium effect (d = 0.5) at α = 0.05, power = 0.80 — use power calculator for specific effect size |
| Paired t-test | 30 pairs | Pairs reduce required n vs. 2-sample; use power calculator with expected difference and σ of differences |
| One-way ANOVA | 30 per group | Increases with number of groups; power drops if groups are unequal size |
| Chi-square | All cells expected count ≥ 5 | Total n depends on proportion differences; minimum ~50–100 for 2×2 table |
| Process capability (Cpk) | 100 consecutive units minimum | 30 is the textbook minimum; 100 recommended for confidence interval on Cpk to be narrow enough for decision-making |
| Gauge R&R (crossed) | 10 parts × 3 operators × 2 replicates = 60 measurements minimum | Parts must represent the full range of production variation — not just "good" parts |
| Attribute Agreement Analysis | 50 samples per appraiser × minimum 2 appraisers | Samples must include a representative mix of clear passes, clear fails, and marginal cases |

**General rule for power calculation:**
Before starting data collection, define: expected effect size (what difference matters practically?), acceptable α (typically 0.05), and desired power (typically 0.80). Run a power calculation in Minitab (Stat > Power and Sample Size) or use an online power calculator. Do not collect data and then ask "did we have enough?"

---

## MSA Requirements Before Capability Study

Running a capability study on a poor measurement system produces false Cpk values. MSA is a prerequisite, not optional.

### Gauge R&R acceptance criteria

| %GRR | Decision |
|---|---|
| < 10% | Acceptable — proceed to capability study |
| 10% – 30% | Conditionally acceptable — document risk; marginal parts near the specification limit may be misclassified; improve if feasible |
| > 30% | Not acceptable — fix the measurement system before collecting capability data; Cpk calculated on this data is unreliable |

**Number of distinct categories (ndc):**
- ndc = 1.41 × (Part-to-Part variation / Gauge R&R)
- Minimum ndc = 5 for a measurement system used for process capability
- ndc < 5 means the gauge cannot distinguish between parts well enough for a meaningful Cpk

### What to fix when GRR fails

| Root cause of high %GRR | Corrective action |
|---|---|
| High reproducibility (operator-to-operator) | Standardise measurement method; add fixture; provide training with verification |
| High repeatability (within operator) | Check gauge calibration and condition; reduce environmental influence on measurement; change measurement method |
| Inadequate parts (all similar, not full production range) | Select 10 parts that span from well below to well above the specification — include marginal parts |
| Sample contains measurement outliers | Investigate and exclude documented special cause; re-run study |

### Capability indices — definitions and decision thresholds

| Index | Formula | What it measures | IATF 16949 minimum |
|---|---|---|---|
| Cp | (USL - LSL) / (6σ) | Potential capability — spread relative to tolerance; ignores centering | 1.67 (new processes); 1.33 (established) |
| Cpk | min[(USL - x̄)/3σ, (x̄ - LSL)/3σ] | Actual capability — accounts for both spread and centering | 1.67 (new); 1.33 (established) |
| Pp | (USL - LSL) / (6s) | Performance index — uses overall standard deviation (includes all sources of variation) | 1.67 (new); 1.33 (established) |
| Ppk | min[(USL - x̄)/3s, (x̄ - LSL)/3s] | Actual performance — overall standard deviation; used with short-term data or unstable processes | Same as Cpk thresholds |

**Cpk vs Ppk:** Cpk uses within-subgroup variation (σ from control chart); Ppk uses overall variation (s from all data). If Cpk >> Ppk, the process has significant between-subgroup variation (shifts, drifts). In DMAIC Measure, report both. In DMAIC Control, Cpk from a stable process is the sustained performance indicator.

**Confidence intervals:** A Cpk of 1.33 calculated from 30 parts has a 95% CI of approximately [1.05, 1.61] — potentially below 1.33 at the lower bound. With 100 parts, the CI narrows to approximately [1.18, 1.48]. This is why 100 parts is the recommended minimum for decision-making.

---

## Minitab and Excel Equivalents

### Measure Phase

| Analysis | Minitab path | Excel equivalent | Notes |
|---|---|---|---|
| Gauge R&R (crossed) | Stat > Quality Tools > Gauge Study > Gauge R&R Study (Crossed) | Not available natively — use ANOVA table manually | Excel cannot compute %GRR components reliably; use Minitab or R |
| Process capability (normal) | Stat > Quality Tools > Capability Analysis > Normal | NORM.DIST function for PPM estimate; no built-in Cpk function | Excel: the formula MIN((USL-AVERAGE(data))/(3*STDEV(data)), (AVERAGE(data)-LSL)/(3*STDEV(data))) uses STDEV() — the overall standard deviation — and therefore computes **Ppk**, not Cpk. For true Cpk, σ̂ must be estimated from within-subgroup variation (R̄/d₂ or S̄/c₄); this requires manual calculation or Minitab. |
| Control chart I-MR | Stat > Control Charts > Variables Charts for Individuals > I-MR | No built-in control chart; manual calculation of UCL/LCL possible | Excel: UCL = x̄ + 2.66 × MR̄; LCL = x̄ - 2.66 × MR̄ |
| Control chart Xbar-R | Stat > Control Charts > Variables Charts for Subgroups > Xbar-R | Manual calculation; A2, D3, D4 constants from table | Minitab preferred for automatic rule detection |
| Normal probability plot | Stat > Basic Statistics > Normality Test (Anderson-Darling) | Insert > Chart > Normal probability plot (limited) | Use Minitab; Excel normal plot requires manual quantile calculation |

### Analyze Phase

| Analysis | Minitab path | Excel equivalent | Notes |
|---|---|---|---|
| 2-sample t-test | Stat > Basic Statistics > 2-Sample t | Data > Data Analysis > t-Test: Two-Sample Assuming Unequal Variances | Check "equal variances" assumption first; Minitab tests it automatically |
| Paired t-test | Stat > Basic Statistics > Paired t | Data > Data Analysis > t-Test: Paired Two Sample for Means | Excel requires manual setup of differences column |
| One-way ANOVA | Stat > ANOVA > One-Way | Data > Data Analysis > ANOVA: Single Factor | Minitab adds Tukey post-hoc automatically; Excel does not |
| Chi-square | Stat > Tables > Chi-Square Test for Association | CHISQ.TEST(actual, expected) with manually constructed table | Excel requires manual contingency table; Minitab builds it from raw data |
| Pearson correlation | Stat > Basic Statistics > Correlation | CORREL(array1, array2); PEARSON(array1, array2) | Same result; Excel does not provide p-value directly — use T.DIST.2T(r*SQRT(n-2)/SQRT(1-r^2), n-2) |
| Simple regression | Stat > Regression > Regression > Fit Regression Model | Data > Data Analysis > Regression | Both provide equation and R²; Minitab provides superior residual diagnostics |
| Multi-Vari chart | Stat > Quality Tools > Multi-Vari Chart | Manual pivot chart construction | No Excel equivalent; use Minitab or R |

### Improve Phase

| Analysis | Minitab path | Excel equivalent | Notes |
|---|---|---|---|
| Full factorial DOE | Stat > DOE > Factorial > Create Factorial Design; then Analyze Factorial Design | Not practical in Excel | Minitab required for DOE; R (FrF2 package) is an alternative |
| Fractional factorial DOE | Same as above; select appropriate resolution | Not practical in Excel | Same recommendation |
| Power and sample size | Stat > Power and Sample Size > [test type] | Not built in; use online calculators | G*Power (free) is an Excel-independent alternative |

---

## Statistical Significance vs Practical Significance

This distinction is critical in DMAIC. Statistical significance answers "Is this effect real (not random noise)?". Practical significance answers "Does this effect matter for the process?".

### The problem

With large sample sizes, even trivial differences become statistically significant. With small sample sizes, practically meaningful differences may not reach significance. The p-value alone is not sufficient for a DMAIC decision.

### Framework for evaluating both

| Question | Tool | What it tells you |
|---|---|---|
| Is the effect statistically real? | p-value from hypothesis test (p < 0.05) | The effect is unlikely to be due to random sampling variation |
| How large is the effect? | Effect size (Cohen's d, η², R²) | The magnitude of the difference or relationship |
| Is the effect large enough to matter? | Compare effect size to CTQ specification or business threshold | Whether the finding will produce a meaningful process or cost improvement |
| What is the range of plausible values? | Confidence interval | The precision of the estimate; narrow CI = higher data quality |

### Effect size interpretation (Cohen's conventions)

| Metric | Small | Medium | Large |
|---|---|---|---|
| Cohen's d (t-test) | 0.2 | 0.5 | 0.8 |
| η² (ANOVA) | 0.01 | 0.06 | 0.14 |
| R² (regression) | 0.01 | 0.09 | 0.25 |

These thresholds are conventions, not rules. In manufacturing, a "small" effect may be practically significant if the CTQ tolerance is tight. Define your practical significance threshold before data collection.

### Worked example

A DMAIC project tests whether a new coolant formulation reduces surface roughness (Ra) on a CNC milled part. Specification: Ra ≤ 1.6 µm.

- Current process: Ra mean = 1.42 µm, σ = 0.18 µm
- New coolant: Ra mean = 1.38 µm, σ = 0.17 µm
- 2-sample t-test: n = 200 per group; p = 0.003 — **statistically significant**
- Practical significance: Δ mean = 0.04 µm. The process is already well within specification at 1.42 µm. A 0.04 µm reduction does not meaningfully change Cpk or PPM.
- Cohen's d = 0.04 / 0.175 ≈ 0.23 — small effect
- Decision: Statistically significant but NOT practically significant. Do not implement new coolant for this metric alone — cost and change risk are not justified by a 0.04 µm improvement that does not change conformance rate.

### Decision rules for DMAIC

| Result | Action |
|---|---|
| p < 0.05 AND practical effect size exceeds threshold | Confirmed: this X is a key driver; include in solution |
| p < 0.05 AND practical effect size below threshold | Statistically real but not worth acting on; document and move on |
| p ≥ 0.05 AND practical effect size large | Likely underpowered; collect more data; do not dismiss the X |
| p ≥ 0.05 AND practical effect size small | Confirmed non-significant; eliminate this X from the model |

**Never present a p-value in a DMAIC tollgate without also presenting the effect size and confidence interval.** A p-value without context misleads stakeholders and sponsors.

---

## Source: skills/problem-solving/fishbone-analysis/SKILL.md

---
name: fishbone-analysis
description: >-
  Build an Ishikawa diagram, cause and effect analysis, or 6M fishbone to brainstorm and
  categorise all possible causes before narrowing to root cause with 5-Why. Covers Man,
  Machine, Method, Material, Measurement, and Environment (Mother Nature). Essential for
  8D D4 brainstorming sessions and CAPA root cause investigations.
license: MIT
metadata:
  author: RBraga01
  version: "1.1"
  iso-9001: "10.2"
  iatf-16949: "10.2.3"
  domain: quality-engineering
  subdomain: problem-solving
  industries: automotive,electronics,aerospace,medical,general
  status: approved
  created: "2026-06-01"
  last_updated: "2026-06-04"
  updated_by: migmcc
  reviewed_by: RBraga01
  standard_edition: "ISO 9001:2015"
---

# Fishbone (Ishikawa) Analysis

## When to use

Use fishbone analysis to brainstorm all possible causes of a quality problem **before** running 5-Why. It prevents tunnel vision and ensures no cause category is overlooked. Particularly valuable for complex defects with multiple potential contributing factors.

Typical use: 8D D4 brainstorming session, CAPA root cause investigation, initial problem analysis.

## Prerequisites

- Problem clearly defined with Is/Is-Not or 5W2H
- Cross-functional team (quality, production, engineering at minimum)
- Access to the process, machine, or product where defect occurred

## Required Fishbone Checklist

☐ Problem statement defined and agreed before starting — no cause language in the problem statement
☐ All 6M categories addressed — at least one entry per M, or documented justification if a category is not applicable
☐ Brainstorming completed before any evaluation or elimination — do not evaluate while generating
☐ Every cause classified as Confirmed, Probable, or Unlikely using objective evidence — not opinion alone
☐ Confirmed = supported by data or physical evidence; Probable = logical, consistent with Is/Is-Not, not yet confirmed; Unlikely = contradicted by data
☐ Confirmed and Probable causes cross-checked against existing PFMEA failure cause entries before proceeding to 5-Why
☐ Each Confirmed or Probable cause carries forward to its own 5-Why chain
☐ After root cause confirmed: horizontal deployment check — could the same cause exist in similar parts, processes, or product families?

---

## The 6M Framework

The six main "bones" of the fish. **All six must be addressed.** If a category genuinely does not apply, document: "No causes identified in this category after structured team review — not applicable because [reason]."

### 1. Man (Human Factors)

Questions to ask:
- Was the task performed by a trained, qualified operator?
- Is competence documented and current?
- Was the operator following the correct work instruction?
- Could fatigue, shift change, or distraction contribute?
- Is the task ergonomically difficult or error-prone?
- Is the same defect found on all shifts or only one? (single-shift → operator-specific)

### 2. Machine (Equipment)

Questions to ask:
- Is the machine calibrated? When was it last calibrated? Is it within interval?
- Has preventive maintenance been performed on schedule?
- Are there any known deviations (vibration, wear, temperature drift)?
- What is the machine capability (Cp, Cpk)? Is it capable for this feature?
- Is tooling worn or damaged?
- Is the jig or fixture functioning correctly?

### 3. Method (Process)

Questions to ask:
- Is there a documented work instruction for this operation?
- Is the work instruction current and at the workstation?
- Are process parameters (temperature, pressure, speed, torque) specified and controlled?
- Is there a control plan entry for this process step?
- Is the process sequence correct?
- Is the method different between shifts or operators?

### 4. Material (Input Material)

Questions to ask:
- Does the defect correlate with a specific incoming batch or supplier lot?
- Has the material specification been met (certificate of conformance, incoming inspection)?
- Has the material been stored correctly (temperature, humidity, FIFO)?
- Is the material traceable to its origin?
- Has the supplier changed anything recently (sub-supplier, process, location)?

### 5. Measurement (Measurement System)

Questions to ask:
- Is the measurement system capable (MSA / Gauge R&R performed)?
- Is the gauge calibrated and within its calibration interval?
- Is the measurement method standardised (same fixture, same operator technique)?
- Could measurement error mask the defect (false acceptable)?
- Are measurement results repeatable between operators?

### 6. Mother Nature / Environment

Questions to ask:
- Does the defect correlate with ambient temperature or humidity?
- Are there vibration or contamination sources nearby?
- Is lighting adequate for visual inspection?
- Are there seasonal patterns?
- Does the cleanroom or ESD environment meet requirements?

---

## Workflow

### Step 1 — Draw the diagram

Write the problem (effect) at the head (right side). Draw the spine. Add six main bones labelled with the 6M categories.

### Step 2 — Brainstorm with the team

For each M category: "What in [M] could cause [the problem]?"

Capture all ideas without judgment — quantity first, evaluation second. **Do not evaluate or discard during brainstorming.** Allocate 30–60 minutes minimum. Time pressure is the most common reason causes are missed.

Add each cause as a sub-bone to the relevant M category. Sub-bones can branch further (cause of a cause).

### Step 3 — Evaluate and prioritise

Mark each cause as:
- **Confirmed** (supported by data or direct physical evidence — not opinion)
- **Probable** (logical, consistent with the Is/Is-Not pattern, but not yet confirmed by data)
- **Unlikely** (contradicted by data or the Is/Is-Not pattern)

Discard Unlikely causes. Investigate Confirmed and Probable causes. A cause cannot be classified as Confirmed without objective evidence (measurement data, physical demonstration, reproduction test, or direct record review).

### Step 4 — PFMEA cross-check

Before proceeding to 5-Why, cross-check Confirmed and Probable causes against the existing PFMEA:

- Is this failure cause already documented in the PFMEA? If yes, was its detection or prevention control supposed to prevent this defect?
- If the PFMEA did not capture this cause, flag it — the PFMEA must be updated after the root cause is confirmed.

### Step 5 — Connect to 5-Why

For each Confirmed or Probable cause, run a [5-Why chain](../5why-root-cause/) to reach the systemic root cause.

The fishbone identifies candidate causes. The 5-Why validates and deepens them.

After root cause is confirmed: assess whether the same cause could exist in similar parts, processes, or product families. Document horizontal deployment actions if applicable.

---

## Output format

Document the fishbone as a table (easier to include in reports than a diagram):

| M Category | Possible Cause | Evidence / Status | Proceed to 5-Why? |
|------------|----------------|-------------------|-------------------|
| Man | Untrained operator | Training record missing for operator 12 | Yes |
| Machine | Jig worn | Measured wear 0.3mm — limit 0.1mm | Yes |
| Method | No contingency instruction | Work instruction reviewed — confirmed absent | Yes |
| Material | Batch variation | No batch correlation found | No |
| Measurement | Gauge repeatability | GR&R = 8% — acceptable | No |
| Environment | Temperature | Controlled at 22°C ± 2°C — stable | No |

All 6M categories must appear in the table. If a category has no entries after structured brainstorming, document: "No causes identified in this category after structured team review."

---

## Common mistakes

- **Brainstorming under time pressure** — causes are missed; allocate 30–60 minutes minimum
- **Stopping at first-level causes** — "machine not calibrated" is a cause, but add sub-bone: why was it not calibrated?
- **Not using data to confirm/discard** — every cause must be validated against objective evidence, not just listed
- **Using fishbone as the root cause** — fishbone finds candidate causes; 5-Why finds root cause
- **Skipping categories** — if a category is left blank without justification, the analysis is incomplete and may miss the real cause
- **Classifying causes as Confirmed based on team opinion** — Confirmed requires evidence; without it, classify as Probable and plan verification

---

## Output Format

At the start of each use, ask the user:

> "How would you like to receive the output?
> **A** — Structured Markdown (formatted tables and sections, ready to copy)
> **B** — Plain tables (simplified structure for Excel or Word)
> **C** — Narrative report (flowing text for a formal document or email)
>
> Default: A."

Adapt all output sections to the chosen format. If the platform or session context already defines a format preference, skip this question.

## Changelog

| Version | Date | Author | Change |
|---------|------|--------|--------|
| 1.0 | 2026-06-01 | @RBraga01 | Initial release |
| 1.1 | 2026-06-04 | @migmcc | Polished 6M categories, added validation criteria and 5-Why integration |

---

## Source: skills/problem-solving/fishbone-analysis/references/6m-category-guide.md

---
name: 6m-category-guide
type: reference
parent_skill: fishbone-analysis
author: RBraga01
version: "1.0"
status: approved
created: "2026-06-06"
last_updated: "2026-06-06"
updated_by: RBraga01
reviewed_by: RBraga01
license: MIT
---

# 6M Category Guide — Fishbone Analysis Reference

Deep reference for populating and validating each 6M branch of an Ishikawa diagram.
Use alongside the [fishbone-analysis](../SKILL.md) skill.

> **Scope:** This document covers category definitions, manufacturing examples, question banks, common mistakes per category, and how to link confirmed branches to 5-Why chains. For the step-by-step brainstorming and evaluation workflow, see [fishbone-analysis SKILL.md](../SKILL.md).

---

## Category Definitions and Manufacturing Examples

### 1. Man — Human Factors

**Definition:** Any cause attributable to a person's action, omission, decision, or physical capability. Includes skill, knowledge, attention, and physical condition. Does NOT include the process or procedure itself (that is Method).

| Sub-category | Manufacturing examples |
|---|---|
| Training / competency gap | Operator qualified for station A performs station B without cross-training; certification expired; OJT not completed |
| Work instruction deviation | Operator applies torque by feel instead of using torque wrench; skips visual check step |
| Distraction / fatigue | End-of-shift production rush; multi-tasking on rework and new production simultaneously |
| Shift handover failure | Outgoing operator does not communicate in-process issue; setup parameters not verified by incoming operator |
| Ergonomic constraint | Part orientation forces operator into awkward grip, causing inconsistent force application |
| New / unfamiliar operator | First week on the job; returned from leave with process changes made in the interim |
| Deliberate workaround | Operator bypasses safety interlock or skip-step to maintain throughput |

**Question bank — Man branch:**

- Who performed this operation when the defect occurred? Same operator every time or different?
- Is the operator trained and qualified for this specific task, with current documentation?
- Is this defect concentrated in one shift, one line, or one operator group? (If yes → strong Man indicator)
- How long has the operator been performing this task? Was a change made recently?
- Is there a documented work instruction, and was it at the workstation and in use?
- Is the task cognitively complex or physically difficult to perform consistently?
- What does the operator say happened? Have you observed the task being performed?
- Does the defect correlate with any change in headcount, overtime, or temporary labour?

**Common mistakes on this branch:**

- Stopping at "operator error" without asking what made the error possible or likely — this is a symptom, not a root cause
- Confusing Man with Method: if the error occurs because there is no procedure, the root cause is in Method, not Man
- Ignoring shift and time-of-day correlation data — this is often the fastest clue for Man causes
- Classifying as Man without interviewing the operator or observing the task

---

### 2. Machine — Equipment and Tooling

**Definition:** Any cause attributable to equipment, tooling, fixtures, jigs, or automated systems. Includes condition, calibration, capability, and maintenance status.

| Sub-category | Manufacturing examples |
|---|---|
| Calibration out of interval | Torque wrench last calibrated 14 months ago against a 12-month interval |
| Worn tooling | Drill bit at end of life producing oversized holes; punch worn beyond replacement limit |
| Fixture / jig degradation | Locating pin worn 0.15 mm — part sits proud of nominal, affecting downstream press-fit |
| Maintenance overdue | Preventive maintenance skipped during production crunch; lubrication interval exceeded |
| Machine drift | Press force decreasing over a shift due to hydraulic fluid temperature rise |
| Equipment capability | Cpk = 0.82 for the critical feature — machine not inherently capable for this tolerance |
| Setup error | Die not fully seated; incorrect programme loaded for variant; offset not reset after tool change |
| Ancillary equipment | Conveyor belt worn causing part misalignment at station entry; sensor drift on reject chute |

**Question bank — Machine branch:**

- What is the last calibration date of all measurement equipment used on this process? Are all within interval?
- What is the Cpk of the machine for this feature? Has it been measured recently?
- When was preventive maintenance last performed? Is there a PM record for the period of the defect?
- Is there evidence of wear, play, vibration, or thermal drift in the relevant equipment?
- Has any tooling been changed near the time of defect onset? Confirm change records.
- Is the defect intermittent (suggesting drift or wear) or constant (suggesting setup or capability)?
- Have other parts run on this machine without issue? (If yes → machine is not the sole cause; something changed)
- Is the same defect found on parts from other machines? (If no → machine-specific)

**Common mistakes on this branch:**

- Checking calibration status without checking whether calibration interval is appropriate for the drift rate
- Confirming "machine is calibrated" and closing the branch — calibration confirmation is not a capability confirmation
- Ignoring tooling life tracking; verifying the spindle but not the insert or punch
- Not checking whether the defect correlates with tool change cycles or PM intervals

---

### 3. Method — Process and Procedure

**Definition:** Any cause attributable to how the work is defined, documented, or controlled. Includes process parameters, work instructions, control plan entries, and process sequence.

| Sub-category | Manufacturing examples |
|---|---|
| Missing work instruction | No documented method for this operation; verbal-only instruction |
| Outdated work instruction | WI shows rev 3; engineering change was implemented at rev 4; rev 4 never published to floor |
| Process parameter out of spec | Cure temperature set at 140°C; specification requires 155°C ± 5°C |
| No parameter verification | Oven temperature set by operator without post-setup verification reading |
| Incorrect process sequence | Primer applied after adhesive — instruction requires primer first |
| Control plan gap | This operation has no control plan entry; no frequency, method, or reaction plan defined |
| No operator self-check | Process step has no built-in self-verification; defect passes to next operation unchecked |
| Ambiguous instruction | WI says "tighten to specification" without specifying the torque value |

**Question bank — Method branch:**

- Is there a documented work instruction for this specific operation? Is it at revision level with the current engineering standard?
- Are process parameters (temperature, pressure, speed, torque, time) written down and controlled?
- Is there a control plan entry for this step? What is the required monitoring frequency and reaction plan?
- Is the method consistent across all operators and shifts? Ask each shift how they perform the task.
- Has the process sequence changed recently? Verify against the approved process flow diagram.
- Is the work instruction specific enough to be performed without interpretation?
- Is there a self-check or in-process inspection built into the method?
- If the method is followed exactly, can the defect still occur? (If yes → the method is the problem, not the operator)

**Common mistakes on this branch:**

- Treating work instruction absence as a Man problem (the operator "should have known") — if there is no WI, the system failed, not the operator
- Confirming the WI exists without verifying it is current, correct, and accessible at the workstation
- Ignoring process parameter drift: the parameter may be in spec at setup but drift during the shift
- Not examining the control plan — a missing control plan entry means there is no system to detect deviation

---

### 4. Material — Input Material and Components

**Definition:** Any cause attributable to the physical characteristics of incoming material, components, or sub-assemblies. Includes raw material, purchased components, packaging, and storage conditions.

| Sub-category | Manufacturing examples |
|---|---|
| Incoming material OOS | Substrate hardness out of spec; connector pin plating thickness below minimum |
| Batch / lot variation | Problem confined to a single supplier lot; correlates with lot change date |
| Supplier process change | Supplier changed sub-supplier for raw material without notification; changed plating chemistry |
| Storage / handling damage | Moisture-sensitive components exposed beyond floor life; ESD-sensitive parts stored without protection |
| FIFO not maintained | Oldest stock not consumed first; material stored beyond shelf life used in production |
| Incorrect material used | Similar-looking part from adjacent bin used; labelling error at incoming |
| Traceability gap | Cannot identify which lot was used for the defective production; traceability link broken |

**Question bank — Material branch:**

- Does the defect onset correlate with a specific material lot, batch, or delivery?
- What do incoming inspection records show for the affected batches? Were any marginal results accepted under concession?
- Has the supplier notified any process or sub-supplier changes in the relevant period?
- Are storage conditions controlled and recorded (temperature, humidity, ESD, shelf life)?
- Is FIFO enforced and verifiable? Check the actual stock rotation against records.
- Can you trace every defective part back to its material lot? If not, why not?
- Does the defect appear across multiple material lots or only one? (Single lot → material cause; multiple lots → look elsewhere)
- Has incoming inspection sampling frequency been adequate to detect this type of variation?

**Common mistakes on this branch:**

- Assuming incoming inspection passed = material is not the cause; incoming inspection has sampling limitations and does not test every characteristic
- Not requesting the supplier's Certificate of Conformance and comparing against actual measurement data
- Overlooking storage and handling — moisture absorption, ESD damage, and exceeded shelf life are invisible at incoming inspection
- Failing to check supplier change notifications — many material causes trace to undisclosed supplier changes

---

### 5. Measurement — Measurement System

**Definition:** Any cause attributable to how the product is measured or inspected, including gauge capability, calibration, method standardisation, and interpretation.

| Sub-category | Manufacturing examples |
|---|---|
| Gauge R&R inadequate | %GRR = 42% — more than 30% of observed variation is measurement noise |
| Gauge out of calibration | Micrometer calibrated 18 months ago; interval is 12 months |
| Non-standardised method | Three operators measure the same feature with different fixture orientations; results differ by 0.12 mm |
| Measurement location inconsistency | Dimension measured at different positions along the feature by different operators |
| False acceptance | Gauge resolution too coarse to detect out-of-spec condition; defects pass undetected |
| Attribute gauge ambiguity | Go/No-Go gauge worn — marginal parts pass that should not |
| Environmental influence on measurement | Dimensional measurement performed immediately after part comes out of 180°C oven; thermally expanded |

**Question bank — Measurement branch:**

- Has a Gauge R&R been performed for the CTQ / measurement in question? What was the result (%GRR)?
- Is the gauge calibrated and within its calibration interval?
- Is the measurement method fully standardised: same fixture, same contact points, same operator technique, same temperature conditions?
- Could parts that are actually non-conforming be passing measurement? (False acceptance)
- Could parts that are actually conforming be failing measurement? (False rejection causing artificial scrap)
- Are measurement results consistent between operators and between shifts?
- Is there evidence that the defect rate changes when a different gauge or operator measures?

**Common mistakes on this branch:**

- Confirming calibration and assuming the measurement system is acceptable — calibration confirms the gauge reads correctly at known reference values; it does not confirm repeatability and reproducibility in production conditions
- Not performing MSA before drawing capability conclusions — Cpk calculated on a poor measurement system is meaningless
- Ignoring attribute gauges in the MSA requirement — Go/No-Go gauges wear and can drift
- Assuming measurement error cannot be the "root cause" — if the problem is false escapes due to measurement noise, measurement IS the root cause

---

### 6. Mother Nature — Environment

**Definition:** Any cause attributable to the physical environment in which the process operates. Includes temperature, humidity, contamination, lighting, vibration, and seasonal effects.

| Sub-category | Manufacturing examples |
|---|---|
| Temperature variation | Adhesive cure profile affected by ambient temperature drop in winter months |
| Humidity | Moisture-sensitive components absorbing humidity during high-humidity season; condensation on cold parts |
| Contamination | Cutting fluid mist contaminating adhesive bonding area; particulates on optical surfaces |
| Vibration / noise | Nearby press causing micro-vibrations affecting a precision measurement station |
| Lighting | Insufficient lux for visual inspection station; glare causing false pass at outgoing |
| ESD environment | Ioniser not functioning; ESD-sensitive components damaged at assembly station |
| Cleanroom class deviation | ISO Class 7 requirement; actual class drifted to Class 8 due to gowning non-compliance |
| Seasonal / time-of-day pattern | Defect rate increases in afternoon when building temperature peaks; correlates with HVAC cycle |

**Question bank — Mother Nature branch:**

- Does the defect rate correlate with time of year, time of day, or weather conditions?
- Are ambient temperature and humidity monitored and recorded in the process area? Is the data reviewed?
- Are ESD controls (wrist straps, ionisers, flooring) verified regularly? What does the log show?
- Is the area free from contamination sources (oils, dust, cutting fluid, particulates) relevant to this defect?
- Is lighting at the inspection station adequate and consistent? Has lux been measured?
- Is the cleanroom or controlled environment in compliance? Review particle count records.
- Are parts or materials exposed to environment changes (e.g., thermal cycling, moisture cycles) between process steps?

**Common mistakes on this branch:**

- Dismissing this category as irrelevant without reviewing environmental data — many intermittent defects have environmental drivers
- Not reviewing environmental monitoring logs for the defect period — verbal confirmation that "conditions are fine" is not evidence
- Overlooking micro-environments: the main area may be controlled but a specific station or storage rack may not be
- Treating ESD and cleanroom compliance as administrative rather than technical — contamination and ESD damage are physical causes

---

## Linking Fishbone Branches to 5-Why Chains

The fishbone produces **candidate causes** classified as Confirmed or Probable. Each one becomes the starting point (Why 1) of an independent 5-Why chain.

**How to connect:**

| Fishbone output | 5-Why input |
|---|---|
| Confirmed: "Jig locating pin worn — measured 0.15 mm beyond limit" | Why 1: The jig locating pin was worn beyond its replacement limit |
| Probable: "Operator not following current work instruction rev 4" | Why 1: The operator was following work instruction rev 3, not the current rev 4 |
| Confirmed: "Material lot 2026-05-12 had incoming hardness at lower specification limit" | Why 1: Material in lot 2026-05-12 was at the lower specification limit for hardness |

**Rules for the handoff:**

1. The 5-Why starting statement must be factual and specific — match the evidence from the fishbone evaluation, not the general category label.
2. One Confirmed/Probable cause = one 5-Why chain. Do not merge causes into a single chain.
3. If a 5-Why chain on a Probable cause reaches a Why that cannot be answered with data, stop and gather evidence before continuing. Do not invent Whys.
4. If two separate 5-Why chains converge on the same systemic root cause (e.g., both trace back to "no preventive maintenance schedule for tooling"), this convergence is significant — it reveals a systemic gap.

---

## Prioritising Branches for Investigation

Not all confirmed or probable causes can be investigated simultaneously. Use this prioritisation logic:

### Priority tier 1 — Investigate immediately

Causes where:
- Physical evidence already exists (e.g., wear measurement, calibration record gap, lot correlation)
- Investigation can be completed in hours (records review, quick measurement)
- The cause directly explains the full IS pattern (quantity, location, timing all fit)

### Priority tier 2 — Investigate in parallel

Causes where:
- Investigation requires production time (reproduction test, extended data collection)
- Cause is Probable but not yet Confirmed — needs a verification test
- The cause explains part of the IS pattern but not all dimensions

### Priority tier 3 — Hold pending tier 1 and 2 results

Causes where:
- Investigation is resource-intensive (full MSA, DOE, supplier audit)
- The cause is inconsistent with at least one IS/IS-NOT dimension — marginal
- The same systemic fix (if found in tier 1 or 2) would likely also address this cause

### Decision criteria table

| Factor | Weight toward higher priority |
|---|---|
| Physical evidence already available | High |
| Cause consistent with ALL IS/IS-NOT dimensions | High |
| Single operator, shift, or batch affected | Medium (concentrate investigation there) |
| Reversible to test (e.g., swap jig and rerun) | High |
| Investigation disrupts production | Lower (schedule, do not skip) |
| No physical evidence yet — theory only | Lower (gather data first) |

**Rule:** Never eliminate a branch from investigation based on team opinion alone. A branch is eliminated only when data contradicts it. If data is not available, the branch stays open until data is obtained.

---

## Source: skills/problem-solving/is-is-not-scoping/SKILL.md

---
name: is-is-not-scoping
description: >-
  Problem scoping with Is/Is-Not for 8D D2 problem description, CAPA investigation, or
  hypothesis elimination. Defines the precise boundary by contrasting what IS observed vs
  what IS NOT — eliminating hypotheses that don't fit the pattern. A Ford-originated
  automotive technique used in every structured quality investigation.
license: MIT
metadata:
  author: RBraga01
  version: "1.1"
  iso-9001: "10.2"
  iatf-16949: "10.2.3"
  domain: quality-engineering
  subdomain: problem-solving
  industries: automotive,electronics,aerospace,medical,general
  status: approved
  created: "2026-06-01"
  last_updated: "2026-06-04"
  updated_by: migmcc
  reviewed_by: RBraga01
  standard_edition: "ISO 9001:2015"
---

# Is/Is-Not Problem Scoping

## When to use

Use Is/Is-Not at the start of any quality investigation to precisely define what the problem IS and what it IS NOT. This scoping prevents wasted investigation effort and immediately eliminates hypotheses that cannot explain the observed IS/IS-NOT pattern.

Most effective in 8D D2 (problem description), CAPA scoping, and any situation where the defect is intermittent, batch-specific, or location-specific.

## Critical rule — facts only

**The IS column contains only documented, measured facts.** Hypotheses, assumptions, and opinions belong in the hypothesis list, not in the matrix. If a cell contains an assumption rather than a fact, the entire analysis is compromised.

If data is not yet available: mark the cell as "Unknown — to be investigated" and identify what investigation is needed before proceeding.

## Required Is/Is-Not Checklist

☐ All five dimensions completed — What, Which, Where, When, How many — or marked "Unknown — to be investigated"
☐ IS column contains only documented facts and measured values — no assumptions, no hypotheses
☐ IS NOT column completed for each dimension — this is where hypotheses get eliminated; do not leave blank
☐ Vague IS statements converted to specific facts with numbers (batch, quantity, percentage)
☐ At least three hypotheses generated and tested against the full matrix
☐ Eliminated hypotheses documented with the specific IS/IS-NOT entry that contradicts them
☐ Is/Is-Not output referenced in the NCR problem description and carried forward to Fishbone or 5-Why

---

## The Is/Is-Not Matrix

Work through each dimension. For each: what DO you observe? What do you specifically NOT observe?

### What

| IS | IS NOT |
|----|--------|
| The specific defect observed (with measurement if applicable) | Similar defects that are NOT present |
| The affected feature, characteristic, or function | Features that are fine |

Example: "IS: Connector pin bent at 15° (pin 3 only). IS NOT: Other pins bent, housing cracked, electrical failure."

### Which object / part

| IS | IS NOT |
|----|--------|
| Specific part number, revision, configuration | Other part numbers not affected |
| Production batch / lot numbers affected | Batches not affected |

Example: "IS: Part number 12345 rev B, batches 2026-05-10 to 2026-05-15. IS NOT: Rev A, batches before 2026-05-10."

### Where (location found)

| IS | IS NOT |
|----|--------|
| Where in the process, plant, or geography is defect found? | Where it is NOT found |
| Customer location, inspection station, production line | Other lines, plants, or customers not affected |

Example: "IS: Found at customer incoming inspection, Plant A. IS NOT: Found at our outgoing inspection or at Plant B customer."

### When

| IS | IS NOT |
|----|--------|
| Time period when defect occurs | Before/after periods where it does not |
| Shift, time of day, after what event | Other shifts or times not affected |

Example: "IS: First observed 2026-05-12, all shifts. IS NOT: Before 2026-05-10."

### How many / How much (extent)

| IS | IS NOT |
|----|--------|
| Defect rate (parts per million, percentage) | What rate is NOT observed |
| Quantity affected | Quantity not affected |
| Trend (increasing, stable, decreasing) | No trend in unaffected population |

Example: "IS: 23.5% of parts in affected batches (47/200). IS NOT: Any defects in batches before 2026-05-10 (0/500 inspected)."

---

## Using the matrix to eliminate hypotheses

Once the matrix is complete, generate hypotheses and test each against the IS/IS-NOT pattern:

**Hypothesis: "The entire supplier lot is non-conforming."**
- IS: Only batches from 2026-05-10 to 2026-05-15 → supports
- IS NOT: Batches before 2026-05-10 unaffected → supports
- IS NOT: Rev A unaffected → **contradicts** (if the lot included rev A parts)
→ Hypothesis partially consistent — investigate further

**Hypothesis: "Gauge miscalibration."**
- IS NOT: Not found at our outgoing inspection → **contradicts** (if we measure 100%, our gauge would catch it)
→ Hypothesis eliminated

Any hypothesis that cannot explain ALL items in the IS and IS-NOT columns is eliminated or requires modification. Document the specific contradiction for each eliminated hypothesis.

---

## Workflow

1. Gather data: inspection records, production records, customer complaint details
2. Fill in the matrix — only include facts, not hypotheses; mark gaps as "Unknown — to be investigated"
3. Identify the "clue" — what distinctive pattern appears (specific batch, specific location, specific time)?
4. List candidate hypotheses (minimum three)
5. Test each hypothesis against the full matrix
6. Eliminate those that contradict the data — document the contradiction
7. Carry forward surviving hypotheses into Fishbone or 5-Why
8. Reference the Is/Is-Not matrix in the NCR problem description — the IS "What" entry is the basis for the NCR non-conformance description

---

## Output format

A complete Is/Is-Not matrix (table format) with:
- All five dimensions completed with specific facts (or "Unknown — to be investigated")
- Surviving hypotheses listed with explanation of why they fit the full matrix
- Eliminated hypotheses listed with the specific contradiction that rules each one out

---

## Common mistakes

- **Listing assumptions as IS** — only documented, measured facts go in the matrix; assumptions generate false hypotheses
- **Leaving cells empty** — if you don't know, mark "Unknown — to be investigated"; empty cells mean the analysis is incomplete
- **Not using IS NOT** — the IS NOT column is where hypotheses get eliminated; skipping it wastes investigation time
- **Vague IS statements** — "some parts are bad" → must be: "23.5% of batch 2026-05-12 are non-conforming on dimension X (47/200 units measured)"
- **Testing only one or two hypotheses** — generate at least three before starting elimination; premature narrowing misses the real cause
- **Not linking output to NCR** — the Is/Is-Not "What IS" entry must match the NCR problem description exactly

---

## Output Format

At the start of each use, ask the user:

> "How would you like to receive the output?
> **A** — Structured Markdown (formatted tables and sections, ready to copy)
> **B** — Plain tables (simplified structure for Excel or Word)
> **C** — Narrative report (flowing text for a formal document or email)
>
> Default: A."

Adapt all output sections to the chosen format. If the platform or session context already defines a format preference, skip this question.

## Changelog

| Version | Date | Author | Change |
|---------|------|--------|--------|
| 1.0 | 2026-06-01 | @RBraga01 | Initial release |
| 1.1 | 2026-06-04 | @migmcc | Expanded Is/Is-Not table criteria and D2 integration guidance |

