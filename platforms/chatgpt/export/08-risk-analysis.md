# Quality Engineering Skills — risk analysis

Generated from the canonical skills tree; each document follows in full.

---

## Source: skills/risk-analysis/action-priority-ap/SKILL.md

---
name: action-priority-ap
description: >-
  Assign AP table ratings (H-AP, M-AP, L-AP) in PFMEA or DFMEA — the RPN replacement from
  AIAG-VDA FMEA Handbook 2019. Explains H/M/L classification logic, mandatory action
  requirements for High Priority items, and OEM-specific thresholds. Use when assigning risk
  levels in PFMEA or DFMEA, or auditing FMEA documents for AP compliance.
license: MIT
metadata:
  author: RBraga01
  version: "1.1"
  iatf-16949: "8.3.3.3"
  aiag-reference: "AIAG-VDA FMEA Handbook 2019, Step 5, Table 5-3"
  domain: quality-engineering
  subdomain: risk-analysis
  industries: automotive,electronics,aerospace,medical,general
  status: approved
  created: "2026-06-01"
  last_updated: "2026-06-03"
  updated_by: migmcc
  reviewed_by: RBraga01
  standard_edition: "AIAG-VDA FMEA Handbook 2019"
---

# Action Priority (AP) — AIAG-VDA 2019

## Goal

Assign and audit Action Priority (AP) ratings correctly using the AIAG-VDA 2019 method, ensuring high-risk items receive justified action or formal risk acceptance. This skill is used when classifying risk levels in PFMEA or DFMEA, reviewing existing ratings, or auditing FMEA documents for AP compliance.

---

## Required AP Review Checklist

☐ Confirm the linked Failure Effect, Failure Mode, and Failure Cause are correct before assigning AP
☐ Confirm S is based on the Failure Effect (severity to the customer or end user)
☐ Confirm O is based on the Failure Cause with current prevention controls in place
☐ Confirm D is based on current detection controls for this Failure Mode
☐ All S, O, and D ratings are supported by data, field history, capability data, or documented engineering judgement — not guesses
☐ Assign AP using the full AP determination rules (see [ap-table.md](../pfmea-process/assets/ap-table.md)) — not only the summary patterns in this skill
☐ For formal PPAP submissions, customer-facing FMEAs, or any disputed rating, confirm against your licensed AIAG-VDA FMEA Handbook — the rating criteria that make an S, O or D value defensible are in the handbook, not in this skill
☐ For every H-AP item: define a corrective action with owner and target date, or document a formal escalation rationale
☐ Reassess AP only after the corrective action is implemented and verified — not when only planned
☐ Verify Special Characteristics are rated S = 9 or 10
☐ Document the evaluation decision for every M-AP item (action taken or rationale for no action)
☐ Document rationale for every L-AP item

---

## Why AP replaces RPN

The legacy **RPN = Severity × Occurrence × Detection** had critical flaws:

**Problem 1 — Same RPN, very different risk**
- S=6, O=6, D=6 → RPN = 216
- S=9, O=8, D=3 → RPN = 216
The second scenario involves a safety-related severity (S=9) and high occurrence — far more dangerous — yet produces the same RPN.

**Problem 2 — Easy to game**
Teams learned to lower RPN cheaply by improving detection (adding an inspection step). D: 8→3 drops RPN by 62.5%. But the defect is still being made — it's just being caught later. Prevention (reducing occurrence) is harder but far more valuable.

**Problem 3 — No mandatory threshold**
RPN had no defined threshold for mandatory action. "High RPN" meant different things to different teams and customers.

**The AP fix:**
- S=9 or S=10 → **always H** (mandatory action), regardless of O and D
- AP looks at S and O together first (risk of harm occurring), then considers D
- Requires documented action or documented rationale for no action

---

## AP Classification

### H — High Priority

**Action required.** Assign a responsible person and a target completion date.

If no improvement is achievable (technically or economically), the team must:
1. Document why no action is possible
2. Escalate to management for acceptance of residual risk
3. Get management sign-off

H-AP items must never be silently ignored.

**Conditions that always produce H:**
- S = 9 or 10 (any O, any D)
- S = 8 + O = 6–10 + D = 6–10

### M — Medium Priority

**Action recommended.** The team should evaluate whether risk reduction is beneficial.

M-AP does not mean "no action needed." It means action is not mandatory, but the team must document its evaluation decision:
- Action taken → describe the action
- No action → document why (risk accepted, cost-prohibitive, technically infeasible)

### L — Low Priority

**No action required.** Document rationale for the record.

---

## AP Assessment Workflow

> This skill explains AP logic and decision patterns. Use the full AP determination rules ([ap-table.md](../pfmea-process/assets/ap-table.md)) for final rating assignment. Do not rely solely on the summary patterns below for disputed cases or formal PPAP submissions — those require the rating criteria in your licensed AIAG-VDA FMEA Handbook.

**Before assigning AP:** Do not assign AP unless S, O, and D are already justified based on the linked failure effect, failure cause, and current controls. AP is only as good as the ratings it is built on.

For each FC (Failure Cause) row in the PFMEA/DFMEA:

```
1. Assign S (for the linked Failure Effect)
2. Is S = 9 or 10?
   → Yes: AP = H. Done.
   → No: continue

3. Assign O (for this Failure Cause with current prevention controls)
4. Assign D (for this Failure Mode with current detection controls)
5. Look up AP in the full table (see ../pfmea-process/assets/ap-table.md)
```

**All S, O, and D ratings must be supported by test data, field history, capability data, or documented engineering judgement.**

---

## Action priority by S bracket

> The patterns below are practical summaries for working use. Final AP assignment must always be confirmed against the full AIAG-VDA AP table. For disputed cases or audits, the full table takes precedence.

### S = 9–10 (Safety / Regulatory)

| O | D | AP |
|---|---|----|
| Any | Any | **H** |

### S = 8 (Loss of primary function)

| O | D | AP |
|---|---|----|
| 6–10 | Any | **H** |
| 4–5 | 6–10 | **H** |
| 4–5 | 1–5 | **M** |
| 1–3 | Any | **M** |

### S = 7 (Reduced primary function)

| O | D | AP |
|---|---|----|
| 6–10 | 7–10 | **H** |
| 6–10 | 4–6 | **M** |
| 6–10 | 1–3 | **M** |
| 4–5 | 7–10 | **M** |
| 4–5 | 4–6 | **M** |
| 4–5 | 1–3 | **L** |
| 1–3 | Any | **L** |

### S = 6 (Loss of comfort/convenience)

| O | D | AP |
|---|---|----|
| 8–10 | 7–10 | **H** |
| 8–10 | 4–6 | **M** |
| 8–10 | 1–3 | **M** |
| 5–7 | 7–10 | **M** |
| 5–7 | 1–6 | **L** |
| 1–4 | Any | **L** |

### S = 1–5

All combinations → **L**

---

## Revised AP — Governance Rule

Do not lower AP based on planned actions. Revised AP may only be assigned after the corrective action is implemented and the implementation is verified with objective evidence. A planned action is not a completed action.

---

## Reviewing an existing FMEA for AP compliance

Audit questions:
1. Are all S=9/10 rows assigned AP=H?
2. Do all H-AP rows have an assigned owner AND target date?
3. Are there any H-AP rows with no action and no documented escalation rationale?
4. For rows where AP was improved (revised AP column): is the action implemented and verified — not just planned?
5. Are Special Characteristics all rated S=9 or S=10?
6. Are S, O, and D justified with data or engineering rationale, or were they guessed?

---

## Customer-specific notes

| OEM | AP requirement |
|-----|---------------|
| Ford | H-AP items require mandatory action or documented engineering justification (EJ) |
| GM | BIQS requires all H-AP items closed before PPAP Level 3 |
| VW/Audi | AP H must be actioned or formally accepted by responsible engineer |
| BMW | AP H items listed on open issues list until closed |
| Stellantis | H-AP items require SQE approval for acceptance without action |

Customer-Specific Requirements (CSR) are revision-controlled and may change. Always verify the latest customer requirement before release, PPAP, or customer submission. See [oem-requirements.md](references/oem-requirements.md) for OEM-specific detail.

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
| 1.1 | 2026-06-03 | @migmcc | Polished AP classification logic, added OEM CSR requirements table |

---

## Source: skills/risk-analysis/action-priority-ap/references/oem-requirements.md

---
name: oem-requirements
type: reference
parent_skill: action-priority-ap
author: RBraga01
version: "1.0"
status: approved
created: "2026-06-01"
last_updated: "2026-06-03"
updated_by: migmcc
reviewed_by: RBraga01
license: MIT
---

# OEM Action Priority Requirements — Reference

OEM-specific requirements for Action Priority (AP) in PFMEA and DFMEA.
Use alongside the [action-priority-ap](../SKILL.md) skill.

---

## Why OEM Requirements Override General AIAG-VDA Guidance

This document complements AIAG-VDA guidelines. In case of conflict, OEM-specific requirements always take precedence.

The AIAG-VDA FMEA Handbook 2019 defines the AP framework as a minimum standard.
Each OEM publishes Customer-Specific Requirements (CSR) that may:
- Set stricter thresholds for mandatory action
- Define deadlines for closing H-AP items before milestones (PPAP, SOP)
- Require specific documentation formats for H-AP closure
- Add OEM-specific escalation paths when actions are not feasible

**CSR requirements are binding contractual obligations, not guidelines.**

Always check the current CSR. CSRs are updated annually or more frequently.

---

## Required OEM AP Compliance Checklist

☐ All H-AP items have an assigned owner and target date
☐ All H-AP items are either closed (action implemented + verified) or formally escalated with OEM approval
☐ All no-action decisions have OEM-required approval (SQE or equivalent) — documented
☐ All H-AP items are addressed (closed or formally approved) before PPAP submission
☐ Revised AP reflects implemented and verified actions — not planned actions
☐ Special Characteristics meet OEM-specific requirements (Cpk thresholds, inspection methods)
☐ FMEA updated after latest quality escape or field failure
☐ All actions, approvals, and escalations are documented and retained as audit evidence
☐ H-AP status reviewed at every project milestone (design review, process review, PPAP)

---

## Ford — AP Requirements

**Source document:** Ford Customer-Specific Requirements for IATF 16949

### H-AP mandatory actions
- Every H-AP item must have a corrective action assigned, with a named responsible engineer and a target date
- If no improvement is technically possible: document an **Engineering Justification (EJ)**
  - EJ must be signed by a qualified engineer
  - EJ must include a risk assessment and monitoring plan (where applicable)
  - EJ must be reviewed and approved by the Ford SQE (Supplier Quality Engineer)
  - Without an approved EJ, the FMEA is considered non-compliant

### PPAP submission requirements
- All H-AP items must be addressed (action completed or EJ approved) before PPAP Level 3 submission
- Unaddressed H-AP items at PPAP result in conditional approval at best, rejection at worst

### Special Characteristics
- Ford uses ◆ (safety characteristics) and ▲ (significant characteristics)
- ◆ characteristics: S must be 9 or 10; AP must be H; 100% inspection or mistake-proofing required
- ▲ characteristics: SPC or equivalent statistical control required

### Annual FMEA review
- Ford CSR requires PFMEA and DFMEA review at minimum annually
- H-AP items from the previous review that remain open must have a documented status update

---

## GM — AP Requirements

**Source document:** GM Supplier Quality Reference Manual (SQRM)

### BIQS integration
- GM's Supplier Quality scoring system (BIQS) tracks open H-AP items as a supplier performance metric
- Suppliers with unaddressed H-AP items at PPAP submission receive BIQS score deduction
- H-AP items open >90 days without documented progress receive escalation flags
- BIQS scoring impact must be monitored as part of supplier performance management

### PPAP requirements (BIQS context)
- All H-AP items must be closed before Level 3 PPAP
- "Closed" means: action implemented AND verified (revised AP documented with evidence)
- Accepted derogation: H-AP items with documented management acceptance + residual risk quantification

### Special Characteristics (GM)
- GM uses ◆ (safety), ● (key product characteristic), and YC/YS (supplier-controlled SCs)
- All ◆ characteristics: AP must be H; automatic rejection/sorting or poka-yoke required
- Level 4 or 5 PPAP required for safety characteristics (◆)

---

## VW / Audi — AP Requirements

**Source document:** FORMEL Q — Konkret (VW Group Supplier Quality Requirements)

### AP = H — mandatory action statement
VW requires that every H-AP item has a formal action statement:
- Description of the action
- Responsible engineer (name, not just function)
- Target date
- Verification criterion

### Formal acceptance when no action is possible
- No-action acceptance requires a formal document signed by:
  - Supplier's responsible engineer
  - Supplier's quality manager
  - VW SQE countersignature
- Without VW SQE countersignature, the H-AP item is considered open
- Time-bound commitments must include interim risk containment measures

### SOP freeze implication
- Production launch (SOP — Start of Production) cannot proceed with open H-AP items
- Exception: written time-bound commitment signed by both supplier management and VW SQE

### Special Characteristics (VW)
- VW uses D (safety), KM (quality feature), and I (product feature) classification
- All D-characteristics: AP must be H; 100% automated inspection or poka-yoke mandatory
- KM characteristics: SPC with Cpk ≥ 1.67 required (not 1.33)

---

## BMW — AP Requirements

**Source document:** BMW Group Standard QM 10005 / BQMS requirements

### Open issues list
- BMW requires all H-AP items to appear on a formal "Open Issues List" maintained by the supplier
- The list must be shared with the BMW SQE at each project gate review
- H-AP items on the open issues list are tracked until formally closed with evidence
- Open Issues List must be version-controlled and traceable across project phases

### Gate review integration
- BMW uses project gate reviews (Concept, Design, Pre-Series, Ramp-Up, SOP)
- At each gate: all H-AP items must be either closed or have a formally accepted action plan
- Unaddressed H-AP items block gate approval

### Residual risk acceptance
- BMW does not routinely accept residual H-AP risk without engineering justification
- Justification must include: quantified residual risk, monitoring plan, and BMW SQE sign-off
- Safety-related H-AP (S=9 or S=10) residual risk acceptance requires BMW engineering approval

### Special Characteristics (BMW)
- BMW uses Merkmal (M) for safety and E for emission-relevant
- M-characteristics: Cpk ≥ 1.67 and 100% automated inspection required
- AP must be H for all M-characteristic failure modes

---

## Stellantis — AP Requirements

**Source document:** MAQMSR (Manufacturing Assurance Quality Management System Requirements)

### H-AP item escalation path
- If no action is feasible: supplier quality manager escalates to Stellantis SQE
- Stellantis SQE reviews and either approves residual risk acceptance or requires alternative action
- No unilateral supplier decision on H-AP "no action" — SQE approval always required
- SQE approval must be documented and retained as audit evidence

### PPAP timing
- All H-AP items must be addressed before PPAP submission
- "Addressed" = action implemented + evidence available, or formal SQE-approved no-action rationale

---

## OEM Comparison Table — H-AP Closure Requirements

| Requirement | Ford | GM | VW | BMW | Stellantis |
|-------------|------|----|----|-----|-----------|
| Named responsible engineer | Yes | Yes | Yes | Yes | Yes |
| Target date mandatory | Yes | Yes | Yes | Yes | Yes |
| H-AP must close before PPAP | Yes (or EJ) | Yes | Yes (or SQE) | Yes (or gate) | Yes (or SQE) |
| No-action requires OEM countersignature | Yes (EJ + SQE) | Case by case | Yes | Yes | Yes |
| H-AP items tracked on formal list | GQTS | BIQS | FORMEL Q | Open Issues List | SQS |
| Annual FMEA review of open H-AP | Yes | Yes | Yes | Yes | Yes |
| Residual risk acceptance allowed | Conditional (EJ) | Conditional | Conditional (SQE) | Rare (SQE) | Conditional (SQE) |

---

## Residual Risk Acceptance — Governance

When no corrective action is achievable, residual risk acceptance must include:
- Written justification explaining why no improvement is technically or economically feasible
- Risk assessment of the residual risk (likelihood × severity estimate)
- Mitigation or monitoring plan (detection controls, containment, periodic review)
- OEM approval (SQE countersignature where required by CSR)
- Document retention: this record must be available for audits and PPAP review

H-AP status must be reviewed at every project milestone (design review, process review, PPAP) to confirm that open items are still tracked and approved.

---

## Practical Guidance — Applying AP in FMEA Reviews

### Before PPAP submission
1. Print or export all H-AP rows from the PFMEA/DFMEA
2. For each row: confirm action is implemented (past tense) with evidence
3. Confirm revised AP is documented (new S/O/D ratings with the actions in place)
4. If any H-AP remain without action: prepare the OEM-specific no-action justification document and obtain OEM SQE signature before submission

### During an audit
If an auditor challenges an AP rating:
1. Walk through the AP table with the auditor using S, O, and D values
2. Show the evidence for O rating (failure rate data or Cpk) and D rating (inspection records, test results)
3. For H-AP items, show the action status (implemented with date and evidence, or formal escalation document)
4. Never argue that an H-AP was "acceptable as-is" without a signed justification — this is an automatic major finding

### After a quality escape
When a field failure or customer complaint traces to a failure mode in the PFMEA:
1. Update the O rating to reflect actual field failure rate (will likely increase)
2. Check the AP — it may change from M to H after the O update
3. If it becomes H: immediately assign an action, even if the PFMEA was previously approved
4. Notify the OEM SQE of the PFMEA update if the escape was an OEM-reported incident

---

## Source: skills/risk-analysis/dfmea-design/SKILL.md

---
name: dfmea-design
description: >-
  Build a design risk analysis, DFMEA worksheet, or interface analysis using the AIAG-VDA
  FMEA Handbook 2019. Covers design intent, interface failures, boundary diagram, and design
  robustness before manufacturing. Use during new product development, design changes, or
  when a field failure reveals a design weakness. Required for IATF 16949 §8.3 scope.
license: MIT
metadata:
  author: RBraga01
  version: "1.1"
  iso-9001: "8.3"
  iatf-16949: "8.3.3.3"
  aiag-reference: "AIAG-VDA FMEA Handbook 2019, DFMEA chapters"
  domain: quality-engineering
  subdomain: risk-analysis
  industries: automotive,electronics,aerospace,medical,general
  status: approved
  created: "2026-06-01"
  last_updated: "2026-06-06"
  updated_by: RBraga01
  reviewed_by: RBraga01
  standard_edition: "AIAG-VDA FMEA Handbook 2019"
---

# Design FMEA (DFMEA) — AIAG-VDA 2019

## Goal

Identify and mitigate design risks by analysing functions, interfaces, and failure modes — so that design weaknesses are resolved before release to manufacturing, and the results feed directly into the DVP, PFMEA, and Control Plan.

## Required Execution Checklist

- [ ] DFMEA scope defined: boundary diagram complete, inside/outside boundary identified
- [ ] Product hierarchy mapped: system → subsystem → component → interface (Step 2)
- [ ] All interfaces identified — internal (component-to-component), external (environment), and user/assembly
- [ ] All functions defined with Verb + Noun + Measurable Standard (Step 3)
- [ ] Each function has a measurable verification method confirmed in the DVP
- [ ] Failure chain complete: Effect → Mode → Cause for each function (Step 4)
- [ ] All Failure Causes validated using engineering analysis (FEA, calculation) or test evidence — not assumptions
- [ ] S/O/D ratings justified using analysis, test data, or design history
- [ ] All H-AP items have a defined action, named owner, and target date
- [ ] DFMEA → DVP, PFMEA, and drawing linkage verified before release to manufacturing

---

## When to use

- New product development (integrate into APQP Phase 2 — Product Design and Development)
- Design change or engineering change request (ECR)
- Field failure investigation revealing a design root cause
- Periodic design review
- Before handoff to manufacturing (DFMEA drives the PFMEA)

**Key difference from PFMEA:** DFMEA analyses the design intent and design robustness. PFMEA analyses the manufacturing process. DFMEA comes first — its failure effects and severity ratings inform the PFMEA.

## Prerequisites

- Product requirements / specification (engineering drawing, customer spec)
- System block diagram or product breakdown structure
- Interface matrix (if system-level analysis)
- Team: design engineer, systems engineer, quality engineer, reliability (if available)

## The 7-Step AIAG-VDA 2019 Approach for DFMEA

---

### Step 1 — Planning and Preparation

Define scope:
- **Analysis object:** component, subsystem, or system
- **Customer:** who is the next-level assembly? Who is the end user?
- **Boundary diagram:** what is inside and outside the DFMEA scope
- **Interface matrix:** what interacts with this component (mechanical, electrical, thermal, chemical)?

---

### Step 2 — Structure Analysis (Design Hierarchy)

Map the product hierarchy:

```
System (e.g., Steering Column)
└── Subsystem (e.g., Tilt Mechanism)
    └── Component (e.g., Pivot Pin)
        └── Interface (e.g., Pin-to-Bracket contact)
```

**Interface matrix:**
For each component, identify:
- Interfaces to other components (internal)
- Interfaces to the environment (external): heat, vibration, corrosion, electromagnetic
- Interfaces to the user or assembly process

Interfaces are where most design failures occur. Each interface must be analysed as a potential failure location in its own right — not just the components that share it. In practice, at least 50% of DFMEA effort should focus on interfaces and interactions; component-only analysis misses the most common field failure modes.

---

### Step 3 — Function Analysis

For each element in the structure, define its design function:

**Format:** Verb + Noun + Measurable Standard

Examples:
- Component function: "Transmit torque of 50 Nm ± 5 Nm without permanent deformation"
- Interface function: "Maintain sealing at pressure 2.5 bar across -40°C to +120°C"
- System function: "Provide steering angle feedback with latency < 50ms"

Identify **Special Characteristics** from the drawing — these get S = 9 or 10 in Step 5.

**Testability rule:** Every function must be measurable and verifiable — a test or analysis method must exist in the DVP. A function with no verification method cannot receive a credible D rating in Step 5.

---

### Step 4 — Failure Analysis

The failure chain for DFMEA: **Failure Effect → Failure Mode → Failure Cause**

**Failure Effect (FE):**
- End-user effect: safety hazard, loss of primary function, reduced performance
- Vehicle/system effect: damage to adjacent components, secondary failures
- Manufacturing effect (if component is not to spec): inability to assemble, rework

**Failure Mode (FM):**
How does this component fail to perform its design function?
- Fracture, wear, corrosion, deformation, signal loss, leakage, dimensional drift, electrical short/open

**Failure Cause (FC):**
What design parameter or design decision causes the failure mode?
- Insufficient material strength (wrong grade, wrong heat treat)
- Inadequate geometry (stress concentration, insufficient wall thickness)
- Thermal expansion mismatch
- Corrosion protection insufficient for environment
- Tolerance stack-up causing interference
- Interface design not accounting for assembly variation

**Failure Cause validation:** Failure Causes must be validated using engineering analysis (FEA, structural calculation, thermal simulation) or test evidence. Unverified assumptions — "probably," "likely," "may be" — are not acceptable as final Failure Causes. Use CAE (FEA, simulation), test data, and field return data to support both the failure modes identified and their causes. For post-field-failure DFMEA updates, the FC must match the validated root cause from the 8D or field investigation.

---

### Step 5 — Risk Analysis

Use the same S/O/D ratings and AP table as PFMEA (see [action-priority-ap](../action-priority-ap/) and [pfmea-process](../pfmea-process/) for the tables).

**Key DFMEA-specific notes:**

**Occurrence (O) in DFMEA** considers:
- Design maturity (new design = higher O)
- Similar design history (similar designs with this failure = higher O)
- Prevention controls: design reviews, CAE / FEA, DVP testing

**Detection (D) in DFMEA** considers:
- Design verification tests (DVP)
- Engineering analysis (FEA, simulation)
- Design reviews with checklists
- Prototype testing

D = 10 means no design verification for this failure mode. This is common for new features — it drives the DVP.

**Ratings justification:** All S/O/D ratings must be justified using analysis, test data, or design history. A rating without documented justification will not withstand OEM audit. Where design history exists from similar components, reference it explicitly. Where data is absent, mark O and D as preliminary and flag the DVP entry that will confirm them.

---

### Step 6 — Optimization

For H-AP items in DFMEA, actions typically fall into:

1. **Design change:** change geometry, material, tolerance, or coating
2. **Add design verification:** add DVP test entry to confirm the design meets the requirement
3. **Add prevention:** design guideline, DFM/DFA rule, standard reference
4. **Improve detection:** add inspection requirement to DVP or design review checklist

**DFMEA → DVP linkage:**
Every detection control (D rating improvement) must have a corresponding entry in the Design Verification Plan (DVP). If you improve D because "we will test it," the test must exist in the DVP.

**Action tracking:** All actions must be tracked to closure with objective evidence — test results, simulation output, or updated analysis. Actions marked "complete" without verification evidence are not acceptable. Open H-AP items past their target date must be escalated to the design review owner or programme manager, with a revised date and documented reason for delay.

---

### Step 7 — Results Documentation

DFMEA outputs that feed other APQP documents:
- **Special Characteristics** identified in DFMEA → transferred to Control Plan and PFMEA
- **Detection controls** → DVP entries
- **Interface failure modes** → PFMEA structure analysis inputs
- **Material / geometry requirements confirmed** → released drawing

## DFMEA → PFMEA handoff

The DFMEA and PFMEA are linked:

| DFMEA | → | PFMEA |
|-------|---|-------|
| Design Failure Effects (end-user impact) | → | Severity ratings in PFMEA |
| Special Characteristics | → | SC flagging in PFMEA process steps |
| Interface failure modes | → | PFMEA failure modes for assembly steps |
| Design intent (function) | → | Process step function requirements |

## Mandatory DFMEA review events (APQP / IATF 16949 §8.3)

| Trigger | Required action |
|---------|----------------|
| New product development | Start DFMEA at APQP Phase 2 — before design freeze. DFMEA initiated after freeze has no corrective value. |
| Engineering change request (ECR) | Review and update the DFMEA for all functions, failure modes, and interfaces affected by the change — before the change is released. |
| Design milestone / design review | Present DFMEA status: open H-AP items, actions, and revised ratings. DFMEA must be current at each gate. |
| Field failure with confirmed design root cause | Update FC, ratings, and actions to match validated root cause from 8D/field investigation. Update DVP to include the failure mode. |

A DFMEA that is not updated through the programme lifecycle is a design quality assurance gap — not a living document.

## Common mistakes

- **Starting DFMEA after design is frozen** — DFMEA has no value if no changes can be made
- **Only analysing the component, not the interfaces** — most design failures are interface failures
- **Improving D without adding DVP tests** — detection credit without actual testing
- **DFMEA and PFMEA teams working in silos** — they must share severity ratings and special characteristics

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

- [Interface matrix construction guide](references/interface-matrix.md)

## Changelog

| Version | Date | Author | Change |
|---------|------|--------|--------|
| 1.0 | 2026-06-01 | @RBraga01 | Initial release |
| 1.1 | 2026-06-03 | @RBraga01 | Added interface matrix integration and DFMEA-to-PFMEA handoff workflow |

---

## Source: skills/risk-analysis/dfmea-design/references/interface-matrix.md

---
name: interface-matrix
type: reference
parent_skill: dfmea-design
author: RBraga01
version: "1.0"
status: approved
created: "2026-06-01"
last_updated: "2026-06-03"
updated_by: RBraga01
reviewed_by: RBraga01
license: MIT
---

# Interface Matrix — DFMEA Reference

Guide for constructing an interface matrix and boundary diagram for Design FMEA.
Use alongside the [dfmea-design](../SKILL.md) skill.

> **Scope:** This document covers interface analysis reference logic — boundary diagrams, matrix construction, failure patterns, tolerance stack-up, and validation methods.
> For the step-by-step DFMEA execution workflow, see [dfmea-design SKILL.md](../SKILL.md).

---

## Required Execution Checklist

☐ Define system boundary (inside vs outside scope)
☐ Identify all external elements (components, environment, user, process, maintenance)
☐ Build interface matrix — assign interaction type for every element pair
☐ Identify at least one failure mode for every interface cell with an interaction type
☐ All interfaces have at least one validated failure mode (no silent/empty interactions)
☐ Assign system-level effects for each interface failure
☐ Include misuse and abuse scenarios in user interface analysis
☐ Analyse tolerance stack-up for all critical mechanical interfaces
☐ Validate critical interfaces using analysis (FEA, simulation) or testing (DVP)
☐ Prioritise interfaces by severity and likelihood — focus resources on high-risk interactions
☐ Transfer interface failure modes to DFMEA Step 4
☐ Confirm DVP includes validation tests for all critical interfaces

---

## Why Interfaces Matter

Most design failures occur at **interfaces**, not within a single component.

A component may perform its individual function perfectly, but fail when it interacts with:
- Adjacent components (mechanical contact, electrical connection)
- The environment (temperature, vibration, humidity, corrosion)
- The assembly process (handling forces, fixture contact, torque application)
- The user (loading, misuse scenarios, maintenance access)

An interface matrix maps all these interactions systematically so no failure path is overlooked.

---

## Boundary Diagram

The boundary diagram defines what is **inside** and **outside** the DFMEA scope,
and shows the interfaces at the boundary.

### Elements

**System under analysis (inside scope)**
The component, subsystem, or system being designed.

**External elements (outside scope)**
- Other components in the assembly (customer-supplied or other design teams)
- Environment: thermal, vibration, humidity, electromagnetic, chemical
- User / operator (including misuse and abuse scenarios — over-torque, incorrect installation, off-label use)
- Assembly process (fixtures, torques, handling)
- Maintenance / service (access, tools, replacement cycles)

**Interface arrows**
Draw an arrow for each interaction across the boundary. Label each arrow with:
- The type of interaction (force, signal, thermal, fluid, chemical)
- The direction: input to system, output from system, or bidirectional
- The nominal condition and operating range (if known)

All interface arrows must include direction (input/output) and operating range.

### Example — ECU boundary diagram

```
Environment (Temp -40°C to +125°C, vibration 10-2000 Hz) → input
        ↕
Wiring harness ←→ [ECU] ←→ CAN bus (bidirectional, 500 kbit/s)
                    ↕
              Mounting bracket (vibration load transfer → input)
                    ↕
           Vehicle ground (electrical reference → input)
```

---

## Interface Matrix — Construction

### Step 1: List all elements

Column and row headers: the component under analysis + all external elements.

### Step 2: Identify interaction type at each intersection

For each pair of elements, identify whether they interact and how.

| Interaction type | Symbol | Examples |
|----------------|--------|---------|
| Force / mechanical | F | Clamping, contact, vibration, thermal expansion |
| Electrical / signal | E | Voltage, current, ground reference, signal |
| Thermal | T | Heat conduction, thermal resistance, temperature delta |
| Fluid / chemical | C | Hydraulic pressure, corrosion medium, lubrication |
| Optical / radiation | O | EMC, light, UV |
| No interaction | — | |

When multiple interaction types exist at the same interface, list all of them explicitly (e.g., F + T + C). Do not collapse multiple types into a single symbol.

### Example — Connector interface matrix

|  | PCB | Backshell | Wire | Environment | User |
|--|-----|-----------|------|-------------|------|
| **Connector body** | F, E | F | E | T, C | F |
| **Contacts (pins)** | E | — | E | C | — |
| **Sealing** | — | F | F | C | — |

### Step 3: For each interaction, identify failure mode candidates

For each "F", "E", "T", or "C" cell, ask:
- What can go wrong at this interface?
- What is the consequence to the system function?

**Example — Connector body × Environment (T, C):**
- Thermal failure mode: housing deforms under sustained high temperature, contact force lost → intermittent connection
- Chemical failure mode: connector body corrodes in salt spray environment → housing fracture under vibration

These become Failure Modes in Step 4 of the DFMEA.

### Step 4: Prioritise interfaces

Not all interfaces carry equal risk. Prioritise based on:
- **Severity** of the worst system effect if the interface fails
- **Likelihood** of failure given the operating environment
- **Detectability** — interfaces that fail silently are highest priority

Focus DFMEA depth and DVP effort on high-severity, hard-to-detect interfaces first.

---

## Interface Failure Mode Patterns

### Mechanical interfaces
| Failure mode | Typical cause |
|-------------|--------------|
| Fretting / wear | Micro-motion under vibration, insufficient clamping force |
| Stress concentration | Geometry (notch, sharp radius), improper tolerance stack-up |
| Thermal expansion mismatch | Dissimilar materials with different CTE |
| Loosening under vibration | Insufficient preload, no locking feature |
| Assembly damage | Handling force exceeds component strength |

### Electrical interfaces
| Failure mode | Typical cause |
|-------------|--------------|
| High contact resistance | Contamination, oxidation, insufficient contact force |
| Signal crosstalk | Insufficient isolation, grounding design |
| Short circuit | Creepage distance insufficient for operating voltage + contamination |
| EMC susceptibility | Shielding gap, ground loop |
| Ground reference drift | High-resistance ground path, shared ground with power |

### Thermal interfaces
| Failure mode | Typical cause |
|-------------|--------------|
| Thermal resistance too high | Poor thermal interface material, insufficient contact area |
| Thermal runaway | Positive feedback loop between power dissipation and junction temperature |
| Condensation | Temperature gradient causes dew point at interface |

### Chemical / environmental interfaces
| Failure mode | Typical cause |
|-------------|--------------|
| Galvanic corrosion | Dissimilar metals in electrolytic environment |
| Seal degradation | Material incompatibility with fluid media |
| Surface finish attack | Wrong coating for environment (salt, humidity, UV) |

---

## Tolerance Stack-Up at Interfaces

When two components interface mechanically, their dimensional tolerances combine.
The worst-case gap or interference is:

```
Worst-case gap     = nominal gap + sum of all tolerance contributions (+ direction)
Worst-case overlap = nominal gap − sum of all tolerance contributions (− direction)
```

**Check for:**
- Minimum clearance at worst-case (prevents binding / assembly interference)
- Maximum clearance at worst-case (prevents slop / rattling / loss of function)
- Special Characteristics on dimensions that directly control an interface

When process capability data is available, use statistical tolerance stack-up (RSS method) instead of worst-case arithmetic. Statistical analysis reflects real production variation and avoids over-constraining tolerances.

Document the tolerance stack-up analysis in Step 1 (Planning) and reference it in Step 4
when assigning failure modes to interface dimensions.

---

## Interface Validation

Critical interface failure modes must be validated — documentation alone is not sufficient.

| Validation method | When to use |
|-------------------|-------------|
| FEA / simulation | Mechanical stress, thermal, fluid — early in design phase |
| Bench test | Single interface, controlled conditions — pre-prototype |
| DVP system test | Full interface under production-representative conditions |
| HALT / HASS | Accelerated stress to find hidden interface weaknesses |

Link each critical interface failure mode to a DVP test entry. If no test exists, this is an open risk that must be documented with a management acceptance or an action to add the test.

---

## Interface Matrix → DFMEA Connection

| Interface matrix output | DFMEA field |
|------------------------|------------|
| Element pair with interaction type | Structure Analysis — component and interface level |
| Interface function statement | Function Analysis (Step 3) |
| Failure mode at interface | Failure Mode (Step 4) |
| System consequence of interface failure | Failure Effect (Step 4) |
| Design control that ensures interface performance | Detection control (Step 5) |
| DVP test for interface behaviour | Detection control → DVP entry (Step 6) |

---

## Checklist — Interface Matrix Complete?

- [ ] Boundary diagram drawn — inside and outside scope are clear
- [ ] All external elements identified (adjacent components, environment, user, process, maintenance)
- [ ] Interface type identified for every element pair that interacts
- [ ] Multiple interaction types listed explicitly where applicable (not collapsed)
- [ ] All interface arrows include direction and operating range
- [ ] Misuse and abuse scenarios included in user interface analysis
- [ ] At least one failure mode candidate for every interface cell with an interaction type
- [ ] All interfaces have at least one validated failure mode (no silent/empty interactions)
- [ ] Interfaces prioritised by severity and likelihood
- [ ] Tolerance stack-up analysed for all critical mechanical interfaces (statistical method if Cpk data available)
- [ ] Critical interfaces validated by analysis or test (DVP entry exists)
- [ ] Interface failure modes transferred to DFMEA Step 4
- [ ] DVP entries exist for all Detection controls at interfaces

---

## Source: skills/risk-analysis/pfmea-process/SKILL.md

---
name: pfmea-process
description: >-
  Build a PFMEA worksheet, process risk analysis, or AP table using the AIAG-VDA FMEA
  Handbook 2019 7-step approach. Covers Structure Analysis, Function Analysis, Failure
  Analysis, Risk Analysis (Action Priority H/M/L), Optimization, and Documentation.
  Required by IATF 16949 and OEM customer-specific requirements for new processes,
  process changes, and post-escape PFMEA updates.
license: MIT
metadata:
  author: RBraga01
  version: "1.1"
  iso-9001: "8.1"
  iatf-16949: "8.3.3.3"
  aiag-reference: "AIAG-VDA FMEA Handbook 2019, Steps 1–7"
  domain: quality-engineering
  subdomain: risk-analysis
  industries: automotive,electronics,aerospace,medical,general
  status: approved
  created: "2026-06-01"
  last_updated: "2026-06-03"
  updated_by: RBraga01
  reviewed_by: RBraga01
  standard_edition: "AIAG-VDA FMEA Handbook 2019"
---

# Process FMEA (PFMEA) — AIAG-VDA 2019

## Goal

Identify and prioritise process risk before production — using the AIAG-VDA 2019 7-step approach — so that high-priority failure modes are eliminated or controlled before they reach the customer, and the result feeds directly into the Control Plan and Work Instructions.

## Required Execution Checklist

- [ ] Scope defined: process step boundaries, model year, team assembled with cross-functional representation
- [ ] Process Flow Diagram (PFD) available and used as Step 2 input
- [ ] All process steps in the PFD have a corresponding entry in Structure Analysis (Step 2)
- [ ] Every process step has at least one Function defined in Step 3
- [ ] Failure chain complete for each function: Effect → Mode → Cause (in this direction — not reversed)
- [ ] All Failure Causes are evidence-based — no unverified assumptions used as final causes
- [ ] S/O/D ratings agreed by the cross-functional team and documented
- [ ] All Special Characteristics have S=9 or S=10
- [ ] Every H-AP item has a named owner, target date, and is tracked to closure
- [ ] PFMEA detection controls match the Control Plan; prevention controls match Work Instructions

---

## When to use

- New process development (pre-production)
- Existing process change or transfer
- After a quality escape (update to reflect failure mode)
- Periodic review (IATF requires annual review or at change)
- Customer-specific requirement (Ford, GM, Stellantis, BMW, VW all require PFMEA)

## Prerequisites

- Process flow diagram (PFD) — required for Step 2
- Product drawings with special characteristics identified
- DFMEA (if applicable) for effect severity reference
- Team: process engineer, quality engineer, production supervisor, maintenance

## The 7-Step AIAG-VDA 2019 Approach

---

### Step 1 — Planning and Preparation

Define the scope:
- **FMEA header:** part number, part name, model year, process step scope, revision, date, team
- **Analysis boundary:** which process steps are in scope (start point and end point)
- **Timeline:** new PFMEA or revision of existing?

Prepare:
- Process Flow Diagram (PFD) — this drives Steps 2 and 3
- List of Special Characteristics (SC) from the drawing (symbols: ◆ ★ ⬟ vary by customer)

---

### Step 2 — Structure Analysis

Map the process hierarchy:
```
Process Item (e.g., Steering Column Assembly Line)
└── Process Step (e.g., Station 3 — Torque tightening)
    └── Work Element (e.g., Pneumatic driver, torque wrench)
```

For each process step, identify the **4M inputs**: Man, Machine, Method, Material.

This structure becomes the "what can go wrong" framework in Step 4.

**Consistency check:** Every Process Step defined here must have at least one Function defined in Step 3. A process step with no function is incomplete — it cannot be analysed for failure in Step 4.

---

### Step 3 — Function Analysis

For each process step and work element, define:
- **Process function:** what should happen? (verb + noun + measurable characteristic)
  - Example: "Tighten bolt M8 to 22 ± 2 Nm"
- **Product characteristic:** what product feature results from this step?
  - Flag all Special Characteristics (SC) — these get highest attention in D/O/D ratings

**Functional chain:**
```
Work Element function → Process Step function → Product Characteristic
(tool applies torque) → (bolt is tightened to spec) → (joint meets strength requirement)
```

---

### Step 4 — Failure Analysis

For each function, identify the failure chain: **Failure Effect → Failure Mode → Failure Cause**

Work in this direction (Effect first, then Mode, then Cause):

**Failure Effect (FE):** what is the impact on the customer (internal or end user)?
- End-user effect (most severe): safety, regulatory non-compliance, loss of function
- Manufacturing effect: rework, scrap, line stoppage, warranty

**Failure Mode (FM):** how does this process step fail to perform its function?
- Example: "Bolt torqued too low", "Part installed backwards", "Incorrect material loaded"

**Failure Cause (FC):** what causes the failure mode?
- Machine: "Torque wrench not calibrated", "Air pressure drop"
- Man: "Work instruction not followed", "Untrained operator"
- Method: "Incorrect torque value in WI", "No torque verification step"
- Material: "Wrong bolt grade loaded", "Lubrication not applied"

**Multiple causes per failure mode are normal** — each FC gets its own row.

**Failure Cause validation:** Failure Causes must be supported by objective evidence or structured root cause analysis (e.g., [5-Why](../../problem-solving/5why-root-cause/)). Unverified assumptions — "probably," "may be," "could be" — must not be entered as final Failure Causes. For post-escape PFMEA updates, the FC must match the validated root cause from the 8D or CAPA, not a revised opinion.

---

### Step 5 — Risk Analysis (Action Priority)

For each FC row, assign three ratings:

#### Severity (S) — impact of the Failure Effect on the customer

| S | Effect |
|---|--------|
| 10 | Safety — affects operator safety without warning |
| 9 | Regulatory non-compliance |
| 8 | Loss of primary function (end user) |
| 7 | Reduced primary function |
| 6 | Loss of comfort / convenience function |
| 5 | Reduced comfort / convenience function |
| 4 | Appearance issue — noticed by most |
| 3 | Appearance issue — noticed by some |
| 2 | Appearance issue — noticed by discriminating |
| 1 | No effect |

**Severity rates the EFFECT, not the mode or cause.** S=10 or S=9 means you must act regardless of O and D.

#### Occurrence (O) — likelihood the Failure Cause leads to the Failure Mode

| O | Failure Rate |
|---|-------------|
| 10 | ≥ 1 in 2 |
| 9 | 1 in 8 |
| 8 | 1 in 20 |
| 7 | 1 in 80 |
| 6 | 1 in 400 |
| 5 | 1 in 2,000 |
| 4 | 1 in 15,000 |
| 3 | 1 in 150,000 |
| 2 | 1 in 1,500,000 |
| 1 | Failure eliminated by prevention control |

O considers **prevention controls** already in place (poka-yoke, SPC, incoming inspection of material).

#### Detection (D) — effectiveness of detection controls before product reaches next customer

| D | Detection |
|---|-----------|
| 10 | No detection control |
| 9 | Control unlikely to detect |
| 8 | Control may detect |
| 7 | Control has low chance of detection |
| 6 | Control may detect — moderate |
| 5 | Control likely to detect |
| 4 | Control has good chance of detection |
| 3 | Control almost certain to detect |
| 2 | Control certain to detect — automatic rejection |
| 1 | Failure mode cannot occur (prevented) |

D considers **detection controls** already in place (gauging, inspection, poka-yoke).

#### Action Priority (AP) — replaces legacy RPN

Use the AP table (see [action-priority-ap](../action-priority-ap/) skill for full table):

| AP | Meaning | Required action |
|----|---------|-----------------|
| **H** (High) | Action required | Assign responsible owner + target date. Escalate if no improvement possible. |
| **M** (Medium) | Action recommended | Team should evaluate — reduction may be beneficial |
| **L** (Low) | No action required | Document rationale for no action |

**Critical rule:** S = 9 or 10 → AP is always H regardless of O and D.

**Ratings discipline:** All S/O/D ratings must be agreed by the cross-functional team — not assigned unilaterally by one engineer. Where team members disagree, document the rationale for the rating chosen. Ratings without team consensus are not acceptable for PPAP submission or customer OEM review.

---

### Step 6 — Optimization

For every H-AP item: define a corrective action.

For each action:
- Description of the action
- Responsible person (name, not function)
- Target completion date
- Re-assess S/O/D after action: new AP (revised)

**Priority for action type:**
1. **Prevent the cause** (best): eliminate the cause by design or poka-yoke
2. **Reduce occurrence**: add process control that makes the cause less likely
3. **Improve detection**: add or improve detection control (least preferred — doesn't prevent defect, only catches it)

Avoid the common trap of only improving detection (lowering D) — this catches defects but doesn't prevent them.

**Tracking discipline:** All actions must be logged in the PFMEA and tracked to closure with objective evidence (completed action description + implementation date + revised S/O/D ratings). Open H-AP items past their target date must be escalated to management with a documented reason for delay and a revised target date. A PFMEA with overdue open H-AP items is not acceptable for PPAP submission or OEM audit.

---

### Step 7 — Results Documentation

Final PFMEA deliverables:
- Completed PFMEA form with all 7 steps documented
- Summary of H-AP items and their actions (status: open/closed)
- Link to updated Control Plan (detection controls in PFMEA → control methods in CP)
- Link to updated Work Instructions (prevention controls → WI procedures)
- PFMEA revision history

**PFMEA → Control Plan linkage:**
Every detection control in the PFMEA must have a corresponding entry in the Control Plan. Every prevention control must be reflected in the Work Instruction.

## Validation checklist

Before releasing the PFMEA:
- [ ] All process steps from the PFD are in the Structure Analysis
- [ ] All Special Characteristics are identified and have S=9 or S=10
- [ ] Every H-AP item has an owner and a target date
- [ ] No H-AP items remain open without documented escalation reason
- [ ] Detection controls in PFMEA match the Control Plan
- [ ] Prevention controls in PFMEA match Work Instructions
- [ ] All Failure Causes are evidence-based (no unverified assumptions used as final causes)
- [ ] PFMEA review triggered by one of the mandatory events: process change, quality escape (post-8D update), or annual review (IATF 16949 §8.3.3.3)

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

- [AIAG-VDA 2019 step-by-step guide](references/aiag-vda-2019.md)
- [Action Priority table](assets/ap-table.md)

## Changelog

| Version | Date | Author | Change |
|---------|------|--------|--------|
| 1.0 | 2026-06-01 | @RBraga01 | Initial release |
| 1.1 | 2026-06-03 | @RBraga01 | Expanded 7-step workflow with AP gate requirements and PPAP integration |

---

## Source: skills/risk-analysis/pfmea-process/assets/ap-table.md

---
name: ap-table
type: asset
parent_skill: pfmea-process
author: RBraga01
version: "1.0"
status: approved
created: "2026-06-01"
last_updated: "2026-06-03"
updated_by: RBraga01
reviewed_by: RBraga01
license: MIT
license-note: >-
  MIT covers the original expression in this file. It does not extend to the
  AIAG-VDA FMEA Handbook, which is a separately licensed third-party work.
  See THIRD_PARTY_CONTENT.md.
---

# Action Priority (AP) Determination Rules

**What this file is.** An independent restatement of the Action Priority decision
logic used in the AIAG-VDA FMEA methodology (2019 joint edition), expressed as
banded rules. It is **not** a reproduction of the handbook's Action Priority
table, and it does not replace it.

**What this file is not.** The authoritative AP table enumerates every S/O/D
combination and comes with the rating criteria tables that define what each S, O
and D value means. Those criteria are what make a rating defensible in an audit,
and they are not in this file. For formal PPAP submissions, customer-facing FMEA
work, or any disputed rating, use your own licensed copy of the handbook.

AIAG and VDA are trademarks of their respective owners. This project is not
affiliated with, endorsed by, or certified by either organisation.

## How to apply the rules

1. Find the Severity (S) row
2. Find the Occurrence (O) band
3. Find the Detection (D) band
4. Read the Action Priority: **H** (High), **M** (Medium), **L** (Low)

## Absolute rules (override the table)

| Condition | AP |
|-----------|-----|
| S = 9 or 10 | Always **H** — regardless of O and D |
| S = 8, O = 4–10 | **H** if D ≥ 5; **M** if D ≤ 4 |

## AP decision rules (banded)

| S | O | D | AP |
|---|---|---|----|
| 10 | Any | Any | **H** |
| 9 | Any | Any | **H** |
| 8 | 6–10 | Any | **H** |
| 8 | 4–5 | 6–10 | **H** |
| 8 | 4–5 | 1–5 | **M** |
| 8 | 1–3 | Any | **M** |
| 7 | 6–10 | 7–10 | **H** |
| 7 | 6–10 | 4–6 | **M** |
| 7 | 6–10 | 1–3 | **M** |
| 7 | 4–5 | 7–10 | **M** |
| 7 | 4–5 | 4–6 | **M** |
| 7 | 4–5 | 1–3 | **L** |
| 7 | 1–3 | Any | **L** |
| 6 | 8–10 | 7–10 | **H** |
| 6 | 8–10 | 4–6 | **M** |
| 6 | 8–10 | 1–3 | **M** |
| 6 | 5–7 | 7–10 | **M** |
| 6 | 5–7 | 1–6 | **L** |
| 6 | 1–4 | Any | **L** |
| 1–5 | Any | Any | **L** |

## Action requirements by AP

| AP | Required Action |
|----|----------------|
| **H** | Must assign a responsible person and a target date. If no action is possible, document why and escalate to management. |
| **M** | Team should evaluate whether a reduction is beneficial. Recommended to act. Document decision. |
| **L** | No action required. Document rationale. |

## Why AP replaces RPN

The legacy Risk Priority Number (RPN = S × O × D) was unreliable because:
- Same RPN could represent very different risk profiles: S=6, O=6, D=6 (RPN=216) vs S=9, O=8, D=3 (RPN=216) — the second is far more dangerous
- Teams "gamed" RPN by improving detection (cheapest change) without addressing safety risk
- No mandatory action threshold for high-severity items

The AP table ensures:
- S=9/10 always gets action regardless of O and D
- Actions address severity + occurrence priority, not just the cheapest detection improvement

---

## Source: skills/risk-analysis/pfmea-process/references/aiag-vda-2019.md

---
name: aiag-vda-2019
type: reference
parent_skill: pfmea-process
author: RBraga01
version: "1.0"
status: approved
created: "2026-06-01"
last_updated: "2026-06-03"
updated_by: RBraga01
reviewed_by: RBraga01
license: MIT
---

# PFMEA — AIAG-VDA 2019 Reference

Reference for Process FMEA per the AIAG-VDA FMEA Handbook (2019 joint edition).
Use alongside the [pfmea-process](../SKILL.md) skill and the [ap-table](../assets/ap-table.md).

> **Scope:** This document covers reference logic — rating tables, failure chain rules, audit findings, and governance.
> For the step-by-step execution workflow, see [pfmea-process SKILL.md](../SKILL.md).

---

## The 7-Step Approach — Summary

| Step | Name | Key output |
|------|------|-----------|
| 1 | Planning and Preparation | FMEA header, scope, team, timeline |
| 2 | Structure Analysis | Process hierarchy: Item → Process Step → Work Element |
| 3 | Function Analysis | Function of each process step and work element |
| 4 | Failure Analysis | Failure Effect → Failure Mode → Failure Cause chains |
| 5 | Risk Analysis | S / O / D ratings → Action Priority (H / M / L) |
| 6 | Optimization | Actions for H-AP items, revised ratings |
| 7 | Results Documentation | Final PFMEA, Control Plan linkage, revision history |

---

## Step 2 — Structure Analysis

### Process hierarchy

```
Process Item          (e.g., Steering Column Assembly Line)
└── Process Step      (e.g., Station 3 — Torque tightening of bolt M8)
    └── Work Element  (e.g., Pneumatic driver, 4M inputs)
```

**4M work elements** for each process step:

| M | Examples |
|---|---------|
| Man | Operator, setter, maintenance technician |
| Machine | Press, robot, torque wrench, conveyor, fixture |
| Method | Work instruction, sequence, parameter settings |
| Material | Component, raw material, lubricant, consumable |

Every work element that can cause a failure mode should appear in the structure.

**Traceability rule:** Every Work Element listed here must map to at least one Failure Cause in Step 4. A work element with no associated failure cause indicates an incomplete analysis — missing failure paths are the most common source of undetected risk.

### Structure Analysis tips
- One row in the PFMEA per failure cause, not per failure mode
- If a process step has 3 failure modes and each has 2 causes → 6 rows minimum
- All process steps from the Process Flow Diagram (PFD) must appear

---

## Step 3 — Function Analysis

### Function statement format

> **Verb + Noun + Measurable Standard**

| Bad (incomplete) | Good (complete) |
|-----------------|----------------|
| "Tighten bolt" | "Tighten bolt M8 to 22 ± 2 Nm" |
| "Inspect parts" | "100% inspect dimension A to 25.0 ± 0.5 mm" |
| "Apply adhesive" | "Apply adhesive bead, width 4–6 mm, length 120 ± 5 mm" |

**Special Characteristics flag:**
All Special Characteristics (SC) from the drawing must be identified at this step.
Use the customer-specific symbol (◆ for Ford, ★ for GM, shield for VW, etc.).
SC failure modes always carry S = 9 or S = 10.

**Testability rule:** Every Function must be measurable — a verification method must exist. "Tighten correctly" is not acceptable; "Tighten to 22 ± 2 Nm, verified by torque wrench calibrated to ±5%" is. A function with no measurable standard cannot be rated for Occurrence or Detection in Step 5.

---

## Step 4 — Failure Analysis

### Failure chain direction

Work from Effect → Mode → Cause (not the other way around):

```
Failure Effect (FE): what the customer experiences
      ↑
Failure Mode (FM): how the process step fails its function
      ↑
Failure Cause (FC): why the failure mode occurs
```

### Failure Effect levels

**End-user effect** (most severe — S = 7–10):
The impact on the vehicle operator or end-user if the failure reaches the field.

**Manufacturing effect** (S = 1–6):
The impact on the next operation, the assembly line, or internal quality.

Both must be documented. Severity is rated based on the **end-user effect**.

### Failure Mode examples by process type

| Process type | Example failure modes |
|-------------|----------------------|
| Torquing / fastening | Under-torque, over-torque, cross-thread, wrong fastener |
| Welding / joining | Cold joint, missing weld, wrong position, insufficient penetration |
| Assembly | Missing component, wrong component, backwards installation, damaged during assembly |
| Inspection | False accept (bad part passes), false reject (good part fails) |
| Material handling | Wrong material loaded, contamination, incorrect FIFO |
| Machining | Out of tolerance (too big, too small), wrong surface finish, wrong geometry |

### Multiple causes per failure mode

Each failure cause gets its own row. For one failure mode, typical causes include:

**Machine:** tool worn, fixture misaligned, parameter drift, calibration expired
**Man:** procedure not followed, untrained operator, workstation ergonomics
**Method:** incorrect parameter in work instruction, ambiguous instruction
**Material:** incoming non-conformance, incorrect grade, contamination

**Failure Cause validation:** Failure Causes must be validated using structured root cause analysis (e.g., [5-Why](../../../problem-solving/5why-root-cause/)). Unverified assumptions — "probably," "may be," "could be" — are not acceptable as final Failure Causes. For post-escape PFMEA updates, the FC must match the validated root cause from the 8D or CAPA closure, not a revised team opinion.

This closes the system loop: **8D escape → 5-Why → validated FC → PFMEA update → Control Plan update → Work Instruction update.**

---

## Step 5 — Severity Rating Table

Severity rates the **impact of the Failure Effect on the customer** (end-user or next operation).
Severity is a property of the Failure Effect, not the Failure Mode or Cause.
**Severity does not change unless the design changes.**

| S | Criteria |
|---|---------|
| 10 | Failure affects safe vehicle operation or involves non-compliance with government regulation — without warning |
| 9 | Failure affects safe vehicle operation or involves non-compliance with government regulation — with warning |
| 8 | Loss of primary function (vehicle operable, primary function lost) |
| 7 | Degraded primary function (vehicle operable, primary function reduced) |
| 6 | Loss of comfort/convenience function |
| 5 | Degraded comfort/convenience function |
| 4 | Appearance or audible noise, vehicle operable, item does not conform — noticed by most customers (>75%) |
| 3 | Appearance or audible noise, vehicle operable, item does not conform — noticed by some customers (25–75%) |
| 2 | Appearance or audible noise, vehicle operable, item does not conform — noticed by discriminating customers (<25%) |
| 1 | No discernible effect |

**Critical rule:** S = 9 or S = 10 → AP = H regardless of O and D. No exceptions.

---

## Step 5 — Occurrence Rating Table

Occurrence rates the **likelihood that the Failure Cause leads to the Failure Mode**,
given current prevention controls.

| O | Failure rate | Criteria |
|---|-------------|---------|
| 10 | ≥ 1 in 2 | Certain — failure is almost inevitable |
| 9 | 1 in 8 | Very high |
| 8 | 1 in 20 | High |
| 7 | 1 in 80 | Moderately high |
| 6 | 1 in 400 | Moderate |
| 5 | 1 in 2,000 | Low |
| 4 | 1 in 15,000 | Low — isolated failures |
| 3 | 1 in 150,000 | Very low |
| 2 | 1 in 1,500,000 | Remote |
| 1 | < 1 in 1,500,000 | Failure eliminated by prevention control |

**Notes:**
- O = 1 requires a poka-yoke or elimination control that makes the cause physically impossible
- Use process capability data (Cp, Cpk) to set O where statistical data exists
- In the absence of data, use historical failure rates from similar processes

---

## Step 5 — Detection Rating Table

Detection rates the **effectiveness of current detection controls** at catching the failure mode
before product reaches the next customer (internal or external).

| D | Criteria |
|---|---------|
| 10 | No detection control — failure not detectable |
| 9 | Control unlikely to detect — indirect or random check |
| 8 | Control may detect — visual, non-systematic |
| 7 | Low chance of detection — manual inspection, sampling |
| 6 | May detect — systematic visual or manual, moderate capability |
| 5 | Control likely to detect — variable gauging, attribute gauging |
| 4 | Good chance of detection — systematic gauging, moderate automation |
| 3 | Almost certain to detect — automated control, high reliability |
| 2 | Control certain to detect — 100% automated inspection, auto-reject |
| 1 | Prevention control makes failure impossible — poka-yoke, design change |

**Notes:**
- D = 1 and D = 2 require automated detection (not human-dependent)
- 100% manual inspection by an operator ≈ D = 6 (accounting for human fatigue and error)
- Automated vision systems with calibrated sensitivity ≈ D = 2 or D = 3

**Ratings justification rule:** All S / O / D ratings must include a documented justification — process capability data (Cpk), historical failure rates, field return data, or engineering rationale. A rating without justification is an unverified estimate and will be challenged in OEM audits. Where available, use real process data (SPC, Cpk, field returns) in preference to estimated ratings.

---

## Step 6 — Optimization

### Action priority for H-AP items

**Rule:** every H-AP row must have either an action (owner + date) or a documented escalation.

**Preferred action types** (in order of preference):

1. **Error prevention (poka-yoke)** — physical impossibility of the failure (O reduced to 1)
2. **Process redesign** — eliminate the root cause by changing the process
3. **Reduce occurrence** — add or improve a prevention control
4. **Improve detection** — add or improve a detection control (last resort — does not prevent defects)

Avoid closing H-AP items by only improving D (detection). Auditors and customers look for this pattern
as a sign that the team is not addressing root causes.

### Revised ratings

After actions are implemented, re-rate S / O / D and compute the revised AP.
Document:
- Revised S (usually unchanged unless design changed)
- Revised O (should decrease if prevention control added)
- Revised D (should decrease if detection control added)
- Revised AP (should be M or L after H-AP actions)

### Action tracking and governance

All actions must be tracked to completion with objective evidence: implementation date, responsible person's confirmation, and revised S/O/D recorded in the PFMEA. Evidence of action completion (photo, calibration record, updated WI revision) must be archived.

**Escalation rule:** Open H-AP items past their target date must be escalated to management. Document: the reason for delay, the revised target date, and management acknowledgement. A PFMEA with overdue open H-AP items is not acceptable for PPAP submission or OEM audit.

---

## Step 7 — PFMEA to Control Plan Linkage

Every **detection control** in the PFMEA must have a corresponding entry in the Control Plan.
Every **prevention control** must be reflected in the Work Instruction.

| PFMEA field | → | Control Plan / WI field |
|------------|---|------------------------|
| Detection control | → | Control method (CP) |
| Control frequency | → | Sample size and frequency (CP) |
| Special Characteristic | → | SC symbol on CP and drawing |
| Prevention control | → | Process parameter / instruction step (WI) |

Failure to maintain this linkage is one of the most common IATF 16949 audit findings.

### Mandatory PFMEA review events (IATF 16949 §8.3.3.3)

The PFMEA must be reviewed and updated at each of the following events:

| Trigger | Required action | Timing |
|---------|----------------|--------|
| Quality escape confirmed (8D closed) | Update FC, ratings, and actions to match validated root cause | Within 30 days of 8D closure |
| Process change (equipment, method, material, layout) | Update structure, function, and failure analysis for changed elements | Before the change is released to production |
| Annual review (IATF minimum) | Review all H-AP items; confirm ratings are still current; check CP and WI alignment | At least once per calendar year |
| New customer-specific requirement | Review severity ratings and SC designations | Before next PPAP or submission |

A PFMEA that has never been updated since initial release is a red flag in any IATF or OEM audit.

---

## Common PFMEA Audit Findings

| Finding | Root cause | Fix |
|---------|-----------|-----|
| S = 9/10 with AP = M | AP table not applied correctly | Check AP table; S ≥ 9 always produces H |
| H-AP items with no owner or date | Optimization step skipped | Assign owner (name) and date to every H-AP row |
| Special Characteristics with S < 9 | Severity rated at manufacturing level, not end-user | Re-rate at end-user impact |
| Detection controls in PFMEA not in Control Plan | Steps 5 and 7 done in silos | Cross-check PFMEA and CP for every control |
| Prevention controls not in Work Instructions | WI not updated after PFMEA | Update WI revision, reissue, retain evidence |
| Occurrence rated without data justification | Guessing | Add reference to historical rate or Cpk data |
| PFMEA not updated after quality escape | Reactive updates missed | PFMEA must be revised within 30 days of a confirmed escape |
| Failure Causes are assumptions, not validated | 5-Why or RCA not performed | Validate each FC with structured analysis; post-escape FC must match 8D root cause |
| Ratings with no data justification | Team estimated without evidence | Add Cpk reference, historical rate, or engineering rationale to each rating |

---

## Global PFMEA Validation Checklist

Use at PFMEA release, PPAP submission, or audit preparation. All items must be confirmed before the PFMEA is considered complete.

| # | Item | Complete? |
|---|------|-----------|
| 1 | All process steps from the Process Flow Diagram are included in Structure Analysis | ☐ |
| 2 | Every Work Element maps to at least one Failure Cause in Step 4 | ☐ |
| 3 | All Functions are defined with Verb + Noun + Measurable Standard | ☐ |
| 4 | Every Function has a measurable verification method | ☐ |
| 5 | Failure chain direction is Effect → Mode → Cause for every row | ☐ |
| 6 | All Failure Causes are evidence-based — no unverified assumptions used as final causes | ☐ |
| 7 | For post-escape updates: FCs match the validated 8D/CAPA root cause | ☐ |
| 8 | All Special Characteristics identified and carry S = 9 or S = 10 | ☐ |
| 9 | S/O/D ratings include data justification (Cpk, historical rate, or engineering rationale) | ☐ |
| 10 | S/O/D ratings agreed by the cross-functional team and documented | ☐ |
| 11 | AP table applied correctly — S = 9 or 10 produces H regardless of O and D | ☐ |
| 12 | Every H-AP item has a named owner and target date | ☐ |
| 13 | No H-AP item is closed with detection improvement only (without written justification) | ☐ |
| 14 | All actions implemented and verified — revised S/O/D recorded with evidence | ☐ |
| 15 | No H-AP item is overdue without documented escalation to management | ☐ |
| 16 | Detection controls in PFMEA match corresponding entries in the Control Plan | ☐ |
| 17 | Prevention controls in PFMEA reflected in Work Instructions (current revision) | ☐ |
| 18 | PFMEA review triggered by one of: quality escape, process change, or annual review | ☐ |

