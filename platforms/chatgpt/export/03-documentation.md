# Quality Engineering Skills — documentation

Generated from the canonical skills tree; each document follows in full.

---

## Source: skills/documentation/8d-report-writing/SKILL.md

---
name: 8d-report-writing
description: >-
  Submit an 8D to a customer, format a Ford 8D report, BMW G8D, VW QMSS, or OEM complaint
  response for formal submission. Covers OEM-specific format requirements, evidence standards,
  and discipline-by-discipline writing rules for D0–D8. Use when preparing an 8D report for
  Ford, BMW, VW/Audi, Stellantis, or any customer requiring formal 8D closure.
license: MIT
metadata:
  author: RBraga01
  version: "1.1"
  iso-9001: "10.2"
  iatf-16949: "10.2.3"
  domain: quality-engineering
  subdomain: documentation
  industries: automotive,electronics
  status: approved
  created: "2026-06-01"
  last_updated: "2026-06-03"
  updated_by: migmcc
  reviewed_by: RBraga01
  standard_edition: "ISO 9001:2015 / IATF 16949:2016"
---

# 8D Customer Report Writing

## When to use

Use when an 8D investigation is complete and a formal report must be submitted to the customer. This skill covers the writing quality and format — the methodology is in [8d-problem-solving](../../problem-solving/8d-problem-solving/).

The 8D report is a legal and commercial document. It is used by the customer to:

- Verify their claim was addressed
- Confirm containment protected their production
- Audit your corrective action quality
- Assess your supplier quality level for BIQS scoring, PPAP status, and future business decisions

A poorly written report — even with good corrective actions — signals low quality maturity.

## OEM format references

| OEM | Format | Submission system |
|-----|--------|------------------|
| Ford | 8D (Ford 8D form) | Covisint / GSDB / portal |
| BMW | G8D (Global 8D) | SupplierPortal (SIM) |
| VW / Audi | QMSS (Lieferantenselbstauskunft) | SupplyOn |
| Stellantis (ex-FCA, PSA) | 8D | CQMS |
| Mercedes-Benz | 8D / ATC | SupplyOn |
| Toyota (TMMNA) | 8D or A3 | SMART |

Always download the **current customer template** from the portal before writing. Templates change. Always align with the specific customer format and mandatory fields — do not modify OEM templates.

---

## Required 8D Report Checklist

☐ Correct OEM template used (latest version — downloaded before writing)
☐ D2 fully quantified and matches the customer claim and NCR exactly
☐ D3 containment implemented with evidence — past tense only
☐ D3 containment active until D6 verification is complete
☐ D4 includes both occurrence and escape root causes, each validated with objective evidence
☐ D5 actions directly address each root cause (RCO and RCE referenced)
☐ D6 includes objective verification data with justified sample size
☐ D7 includes PFMEA, CP, WI updates with revision numbers, plus horizontal deployment
☐ D8 includes champion sign-off and customer notification of closure
☐ All dates are chronological and consistent across D0–D8
☐ All statements are supported by attached or referenced evidence
☐ No speculative, apologetic, or subjective language used
☐ Consistent tense: past for completed actions, present for current state

---

## Writing rules — discipline by discipline

### D0 — Emergency Response

Write a brief statement of whether a safety/regulatory issue was identified and what emergency action was taken.

Always state explicitly whether safety/regulatory risk is present or not — "No safety risk identified" or "Safety risk identified — [action]."

**Good:** "No safety risk identified. Customer notified by email (attached) on 2026-05-14. Ship-hold placed on supplier lot 2026-05-12-A, covering 1,700 units across 2 delivery notes."

**Bad:** "We were notified of the issue and responded quickly."

Evidence required: customer notification email, ship-hold record.

---

### D1 — Team

List names and functions. The customer wants to see cross-functional involvement.

**Good:** Include at least quality engineer, production supervisor, and process/design engineer. Identify the team leader and customer contact point (if applicable) clearly.

**Bad:** "The quality team investigated." (no names, no functions, no evidence of cross-functional approach)

---

### D2 — Problem Description

This is the most read section — if D2 is vague, the customer will reject the report.

D2 must match exactly the NCR and the customer claim description. Any inconsistency between D2, the NCR, and customer claim data is treated as a credibility failure.

**Required content:**

- Exact non-conformance with measured values and specification
- Part number + revision
- Customer's claim reference number
- Quantity: rejected / inspected / population at risk
- Detection point (customer incoming, field, production)
- First detection date

**Good:** "Connector housing flange thickness measured at 1.8 mm (specification: 2.2 ± 0.1 mm, DWG-12345 rev B). Defect detected at customer incoming inspection 2026-05-13. 47 non-conforming units of 200 inspected (23.5%). Customer claim ref: CL-2026-4471."

---

### D3 — Interim Containment Actions

The customer needs to know their production is protected. This is the first thing many SQEs read.

Containment must remain active until D6 verification is complete and effectiveness is confirmed.

**Required content:**

- What was done (sort, 100% inspection, ship-hold)
- When it was implemented (date — must be before D4, D5, D6)
- Who did it
- How effectiveness was verified (zero escapes since ICA, sort results)

**Good:** "100% inspection of all suspect stock at customer (200 units, all checked by 2026-05-14, 47 units rejected, 153 units accepted and released after re-inspection). Ship-hold on remaining 1,500 units in our warehouse, confirmed by logistics on 2026-05-14. Zero additional escapes since ICA implementation."

**Bad:** "We will perform 100% inspection going forward." (future tense is not containment — it's a promise)

---

### D4 — Root Cause Analysis

The most technically evaluated section. Customer SQEs specifically look for:

1. Is there a root cause of occurrence AND a root cause of escape?
2. Is the root cause specific enough (not generic "human error" or "supplier issue")?
3. Is it validated with objective evidence — not just logical reasoning?

Root cause must be supported by evidence (test, data, or experiment), not logical reasoning alone.

**Required content:**

- Root cause of occurrence (why did the defect happen?) — with the 5-Why chain
- Root cause of escape (why was it not detected?) — with the 5-Why chain
- Validation method (how was the root cause confirmed — test, data, reproduction experiment?)

**Good — root cause of occurrence:**
> D4 Why chain (occurrence):
> 1. Why flange thickness OOS? → Insufficient material removed at milling step
> 2. Why insufficient material removed? → Feed rate was 0.05 mm/rev instead of 0.03 mm/rev
> 3. Why wrong feed rate? → CNC programme parameter changed during tool changeover on 2026-05-10
> 4. Why was change not detected? → No parameter verification step after tool changeover
> Root cause: CNC programme parameter verification is not required by the work instruction after tool changeover.
> Validated by: Reproduction test confirmed defect at 0.05 mm/rev; zero defects at 0.03 mm/rev.

**Bad:** "Root cause: operator error. The operator changed the wrong setting."

---

### D5 — Corrective Actions

Each corrective action must directly address the root cause from D4 — reference whether it addresses the occurrence root cause (RCO) or escape root cause (RCE).

**Required content:**

- Description of the corrective action
- Which root cause it addresses (RCO or RCE)
- Implementation date
- Responsible person

**Good:** "Added mandatory CNC parameter verification step to WI-Milling-Station-2 (rev C, attached): operator must verify feed rate = 0.03 mm/rev by reading the CNC display before and after any tool changeover, and record in the batch log. [Addresses RCO]"

**Bad:** "We will retrain operators and improve our process."

---

### D6 — Implementation and Verification

The customer needs objective proof that the actions worked, not just that they were implemented.

Verification sample size must be justified based on defect rate and risk — not chosen arbitrarily.

**Required content:**

- Implementation date for each PCA
- Verification data (production run results, before/after comparison)
- Justified sample size
- ICA removal date and confirmation

**Good:** "PCA implemented 2026-06-04. Verification run: 500 units produced with revised WI (sample size justified by 0.235 defect rate, 95% confidence), 100% measurement of flange thickness — all within specification (mean 2.19 mm, ±0.04 mm, within ±0.1 mm tolerance). Zero defects detected. ICA (100% inspection) removed 2026-06-10 based on verified zero-defect production run."

**Bad:** "The corrective action has been implemented. No defects were found."

---

### D7 — Prevention (Systemic)

This shows the customer you manage your quality system properly, not just firefight.

All document updates must be implemented and active in production — not only documented in the 8D.

**Required content:**

- PFMEA revision (document number, revision letter, date)
- Control Plan revision (document number, revision letter, date)
- Work Instruction revision (document number, revision letter, date)
- Horizontal deployment (other lines, products, suppliers assessed and addressed)
- Lessons learned

**Good:** "PFMEA-Milling-St2 updated to rev D (attached): failure mode 'incorrect feed rate after changeover' added, O=4, D=3, AP=L. CP-Milling-St2 updated to rev G (attached): parameter check added post-changeover. WI-Milling-St2 updated to rev C (attached). Horizontal deployment: 3 similar CNC lines assessed — same parameter verification added to WI-CNC-01, WI-CNC-02, WI-CNC-03."

---

### D8 — Team Recognition

Brief close statement. Professional and factual.

Customer must be formally notified of closure with the final 8D report.

**Good:** "8D closed on 2026-06-15 with champion approval. Customer notified of closure with final 8D on 2026-06-15 (ref: email attached). Team formally recognised at department meeting 2026-06-15. 8D report filed in quality record system under QR-2026-0047."

---

## Tone and language

| Avoid | Use instead |
|-------|-------------|
| "We are sorry for the inconvenience" | Factual description of what happened and what was done |
| "Probably caused by..." | "Root cause confirmed by [test]: ..." |
| "We will try to prevent..." | "Prevention implemented on [date]: ..." |
| "The operator made a mistake" | "The work instruction did not specify the required parameter" |
| "Going forward, we will..." | Specific action with date implemented |

Use consistent tense: past for completed actions, present for current state.

An 8D report is a technical document. Apologetic or vague language reduces credibility with customer SQEs.

All statements in the 8D must be supported by attached or referenced evidence. Attach all supporting evidence: photos, measurement data, WI revisions, PFMEA updates, and test results.

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

- [OEM-specific requirements](references/oem-formats.md)

## Changelog

| Version | Date | Author | Change |
|---------|------|--------|--------|
| 1.0 | 2026-06-01 | @RBraga01 | Initial release |
| 1.1 | 2026-06-03 | @migmcc | Added OEM format requirements and customer submission checklists |

---

## Source: skills/documentation/8d-report-writing/references/oem-formats.md

---
name: oem-formats
type: reference
parent_skill: 8d-report-writing
author: RBraga01
version: "1.0"
status: approved
created: "2026-06-01"
last_updated: "2026-06-03"
updated_by: migmcc
reviewed_by: RBraga01
license: MIT
---

# OEM 8D Report Formats — Reference

Differences between OEM-specific 8D submission formats.
Use alongside the [8d-report-writing](../SKILL.md) skill.

---

## Format Comparison Overview

> This table is a summary. Always confirm requirements in the latest OEM template and CSR before submission.

| Element | Ford TOPS-8D | BMW G8D | VW QMSS | GM Global 8D | Stellantis |
|---------|-------------|---------|---------|-------------|-----------|
| D0 field | Yes — ERA | Yes | Yes | Optional | Recommended |
| Is/Is-Not | Mandatory | Optional | Mandatory | Recommended | Recommended |
| Two root causes (occ + escape) | Mandatory | Mandatory | Mandatory | Mandatory | Mandatory |
| D7 horizontal deployment | Mandatory | Mandatory | Mandatory | Recommended | Recommended |
| Champion sign-off (D8) | Mandatory | Mandatory | Mandatory | Mandatory | Mandatory |
| Submission system | GQTS / SupplierPortal | SRM / BQMS | FORMEL Q / SQMS | Covisint / Supplier Portal | SQS Portal |
| Typical response time (D3 ICA) | 24 h (critical) / 5 days | 24 h (critical) / 8 days | 24 h (safety) / 5 days | 24 h / 5 days | 24 h / 5 days |
| PPM tracking integration | Yes | Yes | Yes | Yes | Yes |

---

## Ford — TOPS-8D

**Full name:** Team Oriented Problem Solving — 8 Disciplines

### Key requirements

**D0 — Emergency Response Actions (ERA)**

- Mandatory field in TOPS-8D form
- ERA must include: immediate action taken, date, responsible person, confirmation that suspect stock is identified
- ERA is evaluated before the 8D response timer starts for D3
- Missing or weak ERA may result in immediate rejection before technical review

**D2 — Problem Description**

- Is/Is-Not is a mandatory structured field in the Ford form (not free text)
- Problem description must reference the customer symptom as reported (verbatim from the concern)
- Ford Concern ID must be referenced

**D4 — Root Cause**

- Must explicitly separate root cause of occurrence and root cause of non-detection
- "Verification method" is a mandatory sub-field — what test confirmed this is the root cause

**D6 — Verification**

- Ford specifies minimum run quantity for different product types
- Include SPC data or inspection records showing before/after comparison

**D7 — Systemisation**

- Must reference specific PFMEA revision number after update
- Must reference specific Control Plan revision number after update
- "Lessons learned shared with" is a mandatory field — names or product families listed

**Submission timing**

- Safety defects: D3 within 24 hours of acknowledgement
- Non-safety defects: Initial response within 5 business days, full 8D within 30 days
- Delays must be proactively communicated to the Ford SQE with justification
- Always check the current Ford CSR (Customer-Specific Requirements) for updates

---

## BMW — G8D

**Full name:** Global 8D (BMW Group)

### Key differences from standard 8D

**Structured problem statement in D2**

BMW's G8D form has structured fields for:

- "Problem as described by customer" (verbatim)
- "Problem as found at supplier" (your own investigation)
- "Defect rate at customer" (PPM or %)
- "Defect rate in your process" (internal data)

**D4 — Separate cause fields**

BMW explicitly separates:

- "Why did the defect occur?" (occurrence root cause)
- "Why was the defect not detected?" (escape root cause)
- Each has its own 5-Why section in the form

**D5 / D6 — Action effectiveness**

- BMW requires a "lessons learned" connection in D5: which existing failure mode / FMEA entry was this related to?
- D6 requires evidence that the FMEA and Control Plan were actually updated (revision numbers)

**D7 — Similar products**

BMW requires explicit documentation of:

- Which similar BMW part numbers were assessed for the same root cause
- What was found / what actions were taken for each

**8D presentation**

For premium defects (safety, significant warranty cost), BMW may require a live 8D presentation at the supplier quality engineer's request. The written 8D is the basis — prepare for verbal Q&A. Reports must be consistent with any presented data — discrepancies between written and verbal responses are treated as non-compliance.

**Submission system:** SRM (Supplier Relationship Management) or BQMS depending on BMW division

---

## VW / Audi — QMSS / FORMEL Q

**Full name:** Quality Management Supplier System (VW Group)

### Key requirements

**Immediate notification (D0)**

VW requires notification within 24 hours for safety-related defects, and within 5 days for non-safety defects. Notification must include: part number, quantity affected, initial containment status.

**D2 — Is/Is-Not**

FORMEL Q form has a mandatory Is/Is-Not structured section. Each dimension (what, where, when, how many) must be completed. Leaving fields empty is not accepted.

**D4 — Causal chain**

VW uses a "causal chain" format:

- Level 1: Direct cause (the immediate failure mechanism)
- Level 2: Systemic cause (why the direct cause was possible)
- Level 3: Escape cause (why the detection system failed)

All three must be answered.

**D7 — Process / product audit**

After a major defect, VW may require a formal process audit of the affected production line. The audit result and the resulting actions are referenced in D7.

**Secured quantity (FORMEL Q field)**

A unique VW requirement: in D3, document the "secured quantity" — the number of confirmed-good parts available to ship while the non-conforming stock is being managed. Missing secured quantity may result in rejection of D3 containment.

**Submission timing:** initial response 24 hours; full 8D within 25 working days (check current CSR)

---

## GM — Global 8D

### Key requirements

**BIQS integration**

GM's Supplier Quality system (BIQS — Become Involved in Quality Systems) links 8D status to the supplier's BIQS score. Open 8Ds and late 8Ds directly reduce the supplier score. Late 8D submissions impact supplier performance score and escalation status.

**D7 — Lessons learned register**

GM requires lessons learned to be entered into the supplier's own lessons learned register, and a reference to that register entry in D7.

**Verification requirements (D6)**

GM specifies minimum quantities for different defect types. Always check the current GM Supplier Quality Reference Manual (SQRM) for the applicable threshold.

**Submission timing:** D3 acknowledgement within 24 hours; full 8D within 30 days

---

## Stellantis — MAQMSR 8D

### Key requirements

**MAQMSR framework**

Stellantis follows the MAQMSR (Manufacturing Assurance Quality Management System Requirements). 8D is the mandatory problem-solving format for customer-reported concerns.

**SQE approval for H-AP with no action**

If a PFMEA H-AP item has no corrective action (documented management acceptance of residual risk), Stellantis SQE must approve the acceptance document before D8 can close. Closure without SQE approval for H-AP acceptance is not valid.

**Submission timing:** 24 hours for D0/D3 notification; 30 days for full 8D; extensions require SQE approval

---

## Timing Requirements — Cross-OEM

| Event | Ford | BMW | VW | GM | Stellantis |
|-------|------|-----|----|----|-----------|
| D3 ICA (safety) | 24 h | 24 h | 24 h | 24 h | 24 h |
| D3 ICA (non-safety) | 5 days | 8 days | 5 days | 5 days | 5 days |
| Full 8D | 30 days | Check CSR | 25 WD | 30 days | 30 days |

Delays in D3 or final 8D submission must be proactively communicated to the OEM SQE with justification before the deadline passes — do not wait to be chased.

---

## Common OEM Submission Mistakes

| Mistake | Impact | Fix |
|---------|--------|-----|
| Submitting in future tense ("will be implemented") | 8D rejected — D3 and D6 must be past tense with evidence | Verify implementation before submission |
| Missing D0 / ERA field | 8D returned for revision | Always complete D0 even if brief |
| "Human error" as root cause | D4 rejected by SQE | Always go systemic — what in the system allowed the error |
| D7 without PFMEA/CP revision numbers | Audit finding | Include revision numbers and dates in D7 |
| Sending own template instead of OEM form | Submission rejected | Always use the current OEM form — download before each submission |
| Missing champion signature (D8) | 8D not formally closed | Obtain sign-off before submitting closure |
| Mismatch between NCR, 8D, and customer claim data | Credibility failure / rejection risk | Verify D2 matches NCR and claim exactly |

Incomplete or non-compliant 8Ds are typically returned by OEMs and may negatively affect supplier performance ratings.

---

## Version and Submission Governance

- Maintain a controlled copy of each submitted 8D with version number and submission date
- Ensure consistency between NCR, customer complaint, and 8D report data before submission
- Always confirm template version before submission — check the template revision/date field

---

## Requesting Current OEM Templates

OEM forms update regularly. Always download the current version from:

- **Ford**: Ford Supplier Portal → Quality → TOPS-8D template
- **BMW**: SRM → Supplier Quality → G8D template
- **VW**: FORMEL Q portal → QMSS → Document download
- **GM**: GM Supplier Portal → Supplier Quality → Global 8D
- **Stellantis**: SQS Portal → Quality Documents → 8D template

Do not use a template downloaded more than 12 months ago without checking for updates. Always confirm the template revision/date before submission.

---

## 8D Submission Checklist (OEM)

☐ Correct OEM template used (latest version confirmed)
☐ D0 / ERA completed (if required by OEM)
☐ D2 matches customer claim exactly (verbatim where required)
☐ D3 containment implemented with evidence (past tense)
☐ Secured quantity documented (VW/Audi requirement)
☐ D4 includes both occurrence and escape root causes — each validated with objective evidence
☐ D5 actions directly linked to root causes (RCO and RCE)
☐ D6 includes objective verification data with justified sample size
☐ D7 includes PFMEA, CP, WI updates with revision numbers — all active in production
☐ D7 includes lessons learned register entry and horizontal deployment to similar products
☐ D8 includes champion sign-off
☐ All OEM-specific mandatory fields completed (Is/Is-Not, secured quantity, lessons learned, etc.)
☐ All supporting evidence attached (photos, data, revised documents)
☐ Dates are chronological and consistent across all disciplines
☐ Controlled copy retained with version and submission date

---

## Source: skills/documentation/car-corrective-action/SKILL.md

---
name: car-corrective-action
description: >-
  Write a corrective action report, CAPA, respond to an NCR or audit finding, or document
  an 8D D5 root cause action. Covers the full CAR structure: root cause analysis, corrective
  actions, implementation evidence, and verification of effectiveness (VOE) per ISO 9001
  §10.2. Use for any quality escape requiring documented systemic corrective action.
license: MIT
metadata:
  author: RBraga01
  version: "1.1"
  iso-9001: "10.2"
  iatf-16949: "10.2.3"
  domain: quality-engineering
  subdomain: documentation
  industries: automotive,electronics,aerospace,medical,general
  status: approved
  created: "2026-06-01"
  last_updated: "2026-06-04"
  updated_by: migmcc
  reviewed_by: RBraga01
  standard_edition: "ISO 9001:2015"
---

# Corrective Action Request (CAR) Writing

## When to use

A CAR is written in response to:
- An NCR requiring permanent corrective action
- A customer complaint
- An internal or external audit finding (Major or Minor non-conformance)
- A recurring non-conformance requiring systemic correction

The CAR is the documented evidence that the problem was analysed, corrected, and prevented from recurring. ISO 9001 §10.2.1 requires documented information of the actions taken and their results. For IATF 16949 audit Major NCs, CARs must typically be closed within 90 days; check the applicable CSR for customer-specific closure deadlines.

## Key distinction from NCR

| NCR | CAR |
|-----|-----|
| What is wrong (objective facts) | Why it is wrong + what is being done about it |
| Detection point and evidence | Root cause analysis + actions |
| Severity and disposition | Verification of effectiveness |
| Written immediately | Written after investigation |

A CAR references the NCR but extends it into corrective action territory.

---

## CAR structure

### 1. Header

| Field | Content |
|-------|---------|
| CAR number | Traceable to NCR or audit finding |
| NCR / finding reference | Links this CAR to the trigger event |
| Date opened | |
| Owner | Responsible person (name, not function) |
| Target closure date | |
| Closure authority | Named person with authority to close this CAR (quality manager or equivalent) |
| Actual closure date | (filled on closure) |

### 2. Problem summary

One or two sentences summarising the NCR or finding. Objective, factual. Must match the NCR description exactly — no new interpretation.

Example:
> "47 of 200 connector units in lot 2026-05-12-A had pin insertion depth 0.6–1.5 mm below lower specification limit (5.0 ± 0.3 mm). Detected at incoming inspection (NCR-2026-0047)."

### 3. Immediate containment (if not already in NCR)

Confirm containment is in place. If documented in the NCR, reference it. If not yet done, define it here.

### 4. Root cause analysis

This is the core of the CAR. Use structured methodology:

**Recommended tools:**
- [5-Why](../../problem-solving/5why-root-cause/) for linear cause chains
- [Fishbone](../../problem-solving/fishbone-analysis/) for complex or multi-factor problems

**Identify two root causes:**
1. **Root cause of occurrence** — why did the non-conformance happen?
2. **Root cause of escape** — why was it not detected before it reached the next customer?

**Document the chain, not just the conclusion:**

```
Root cause of occurrence:
Why: Connector pin depth OOS → Why: insertion force insufficient → 
Why: pneumatic jig set to wrong pressure → Why: pressure setpoint not in work instruction →
Root cause: Work instruction for Station 3 does not specify jig pressure setpoint.

Root cause of escape:
Why: Not detected at our outgoing inspection → Why: no depth measurement in outgoing
inspection plan → Root cause: Control Plan does not include pin depth at outgoing.
```

**Validation:** state how the root cause was confirmed. Acceptable validation methods:
- Reproduction test (demonstrated that removing/restoring the root cause produces/prevents the defect)
- Data correlation (statistical relationship between root cause variable and defect occurrence)
- Physical evidence (inspection of the failed part or process reveals the causal mechanism)
- Direct record review (confirms the absence of the required control)

A root cause supported only by team opinion (not validated by evidence) cannot be used as the basis for CAR closure.

### 5. Corrective actions

One corrective action for each root cause. The action must directly address the root cause — not a symptom.

| # | Root cause addressed | Corrective action | Owner | Target date |
|---|---------------------|-------------------|-------|-------------|
| 1 | WI missing jig pressure | Update WI-Station-3 to specify jig pressure 4.5 ± 0.2 bar | [Name] | 2026-06-05 |
| 2 | CP no depth check at outgoing | Add pin depth measurement to Control Plan at outgoing, 10% sample, n=5 per batch | [Name] | 2026-06-05 |

**Action quality check:**
- Does this action, if implemented, prevent the root cause from occurring again?
- Is it specific (who does what, by when)?
- Can its implementation be verified?

### 6. Implementation evidence

For each corrective action, document that it was actually implemented:

| Action | Evidence of implementation | Date verified |
|--------|---------------------------|---------------|
| WI updated | WI-Station-3 rev C, approved 2026-06-04, attached | 2026-06-04 |
| Training conducted | Training attendance record attached (4 operators) | 2026-06-04 |
| Control Plan updated | CP rev F, approved 2026-06-04, attached | 2026-06-04 |

Documents must be revised with a new revision number and approval date. Verbal implementation is not evidence.

### 7. Verification of effectiveness (VOE)

This is where most CARs fail. The action is implemented, but nobody checks whether it actually prevents the defect.

**VOE requirements (ISO 9001 §10.2.1.e):**

1. **Method:** how will you check if the corrective action worked? (data collection, monitoring period)
2. **Metric:** what will you measure? (defect rate, inspection results)
3. **Volume/duration:** what sample size or time period constitutes sufficient evidence?
4. **Target:** what result confirms the action was effective?

**VOE minimum volume guidance:**
- For a defect with known base rate: the VOE sample must be large enough to observe at least one recurrence if the action had failed. Example: if baseline defect rate was 5%, a zero-defect sample of 60 units gives 95% confidence the rate is now below 5%.
- For process parameter changes: minimum 30 consecutive production cycles under the new conditions, or as defined by the Control Plan sampling frequency × 3 periods.
- For detection control improvements: minimum one full inspection cycle of the affected product family with zero escapes.
- Minimum in all cases: state the volume used and the basis for choosing it. "Zero defects in 10 units" is not a valid VOE for a high-volume process.

**VOE result:**
- Record the actual results after the monitoring period
- State: Effective / Not effective
- If not effective: return to root cause analysis and repeat

### 8. AP revision (AIAG-VDA, if applicable)

If the non-conformance relates to a PFMEA failure mode with an Action Priority (AP) rating:

- After verified implementation of the corrective action, the PFMEA must be updated with a revised S, O, and/or D rating
- The revised AP (AP-revised) must reflect the improvement — it must be lower than the original AP or documented with justification if unchanged
- Revised AP is recorded only after VOE is complete, not at the time of action planning

### 9. Systemic prevention and horizontal deployment

Ask: could this same root cause exist in similar parts, processes, or product families?

If yes:
- List the similar areas
- Document the actions taken to extend the corrective action
- Evidence that horizontal deployment is complete

### 10. Lessons learned

One or two sentences capturing the key learning for future reference:

> "Work instruction templates for assembly stations must include all process parameter setpoints. Control Plans must cover outgoing inspection of all safety-relevant characteristics."

File in the lessons learned register and reference in PFMEA update.

---

## Closure criteria

A CAR may only be closed when ALL of the following are true, and the closure authority (named in the header) has signed off:

- [ ] Root causes of occurrence and escape are documented with validation evidence
- [ ] Corrective actions are implemented and documented with revision numbers and approval dates
- [ ] VOE is complete with documented sample volume and confirms effectiveness
- [ ] PFMEA is updated (revised failure mode entry, revised AP if applicable)
- [ ] Control Plan is updated (if detection control changed)
- [ ] Work Instructions are updated (if process control changed)
- [ ] Horizontal deployment is documented
- [ ] Customer notified of closure (if CAR was triggered by customer complaint or CSR-required notification)
- [ ] Closure authority sign-off obtained

---

## Common mistakes

- **"Retrain operators"** as a corrective action for human error — this is never sufficient alone; the system that allowed the error must be changed
- **Closing without VOE** — the most common reason for recurring non-conformances
- **VOE on insufficient sample** — "zero defects in 5 units" is not effectiveness verification; define the minimum volume before collecting data
- **Implementing actions without updating PFMEA and Control Plan** — next audit will find the gap
- **Generic actions** — "review procedures" → not specific; must state which procedure, revised to say what, by whom, by when
- **Closing without named authority sign-off** — any team member closing a CAR without defined authority is a governance gap
- **Missing AP revision** — when PCA addresses a PFMEA failure mode, the revised AP must be recorded after VOE

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
| 1.1 | 2026-06-04 | @migmcc | Expanded CAR linkage to D5-D6, added effectiveness verification requirements |

---

## Source: skills/documentation/car-corrective-action/references/car-template.md

---
name: car-template
type: reference
parent_skill: car-corrective-action
author: RBraga01
version: "1.0"
status: approved
created: "2026-06-06"
last_updated: "2026-06-06"
updated_by: RBraga01
reviewed_by: RBraga01
license: MIT
---

# CAR Document Template and Verification Reference

Complete Corrective Action Report template with field instructions, root cause / corrective action quality checklist, effectiveness verification methods, and CAR vs SCAR distinction.
Use alongside the [car-corrective-action](../SKILL.md) skill.

> **Scope:** This document provides the fill-in template with field-by-field instructions for each CAR section, a quality checklist for verifying that the corrective action genuinely addresses the root cause, effectiveness verification methods matched to characteristic type, and a clear distinction between an internal CAR and a supplier-directed SCAR. For the full CAR structure rationale, PFMEA AP revision guidance, closure criteria, and common writing failures, see [car-corrective-action SKILL.md](../SKILL.md).

---

## 1. CAR Document Template

Fields marked **(R)** must be completed before opening the CAR. Fields marked **(I)** are completed during investigation. Fields marked **(C)** are completed at or after closure.

---

### SECTION 1 — HEADER (R)

```
CORRECTIVE ACTION REPORT (CAR)
================================
CAR Number:              _______________    (Format: CAR-YYYY-NNN, unique, sequential)
                                            Tip: link to site NCR prefix where applicable, e.g. CAR-2026-047
NCR / Finding Reference: _______________    (NCR number, audit finding reference, or customer concern #)
Trigger type:            [ ] NCR — internal    [ ] NCR — customer    [ ] Audit finding (Major)
                         [ ] Audit finding (Minor)    [ ] Customer complaint    [ ] Field return
Date Opened:             _______________
Owner (name, not function): _______________
Owner's department:      _______________
Target Closure Date:     _______________    (ISO 9001 Major NC: typically ≤ 90 days; check CSR)
Closure Authority:       _______________    Title: _______________
Actual Closure Date:     _______________    (C)
```

**Field instructions:**
- **CAR Number:** Never share a number between two issues. If a CAR is withdrawn (e.g., duplicate issue identified), mark it VOID and record the reason.
- **Owner:** Must be a named person with the authority and access to implement actions. "Quality department" is not acceptable. If ownership will transition, update the field and log the change.
- **Closure Authority:** Must be a named quality manager or equivalent with authority to confirm that all closure criteria are met. The owner and the closure authority must be different people.
- **Target closure date:** Check the customer-specific requirement (CSR) if the trigger is a customer complaint or an external audit finding from an OEM. IATF 16949 audit major NCs typically have a 90-day deadline imposed by the certification body; the customer may impose a shorter one.

---

### SECTION 2 — PROBLEM SUMMARY (R)

```
PROBLEM SUMMARY
================
State the non-conformance in objective, factual terms. Match the NCR or audit finding verbatim.
Do not re-interpret or soften the finding at this stage.

One to two sentences maximum. Include: what failed, where it was detected, measured values vs.
specification where applicable, and the reference document (NCR number, finding number).

Problem statement:
___________________________________________________________________________
___________________________________________________________________________

Example (NCR-triggered):
"47 of 200 connector housings in lot 2026-05-12-A had pin insertion depth 0.6–1.5 mm below
the lower specification limit (5.0 ± 0.3 mm). Detected at incoming inspection (NCR-2026-0047)."

Example (audit finding-triggered):
"Audit finding F-06 (VDA 6.3 process audit, 2026-05-28, auditor: J.Smith): Work instructions
for assembly station AS-04 do not specify the torque setpoint for M6 fasteners identified as a
special characteristic in the Control Plan (Score 4, P6.2)."
```

**Field instructions:**
- Copy the defect description from the NCR or audit finding report exactly. Do not paraphrase. If there is an error in the original finding, note it but use the exact wording.
- For customer complaints: quote the customer's complaint text and attach the customer communication.
- The problem summary must not pre-judge root cause. Write what was observed, not what caused it.

---

### SECTION 3 — IMMEDIATE CONTAINMENT (R if not already documented in NCR)

```
IMMEDIATE CONTAINMENT
======================
If containment was already documented and executed at NCR stage, reference it here:
NCR reference for containment:  _______________
Containment confirmed complete: [ ] Yes    Date confirmed: _______________

If containment has NOT been documented elsewhere, define it here:
Containment action:          _______________
Responsible person:          _______________
Completion date:             _______________
Scope (what is affected):    _______________    (e.g., Lot 2026-05-12-A, WIP at station AS-04, all output since date X)
Verification of containment: _______________    (who verified, what was checked, result)
```

**Field instructions:**
- Containment is not a corrective action. It is a firefighting step — stop the bleeding. Do not confuse "sort and replace" with "prevent recurrence."
- If the CAR is triggered by an audit finding rather than a physical defect, containment may take the form of an interim control (e.g., 100% inspection until the permanent corrective action is implemented). Define and document it here.
- For safety-related NCRs: containment must also cover any product already in the customer's supply chain. If customer field stock may be affected, this must be noted and the customer notified.

---

### SECTION 4 — ROOT CAUSE ANALYSIS (I)

```
ROOT CAUSE ANALYSIS
====================
Method used:  [ ] 5-Why    [ ] Fishbone (Ishikawa)    [ ] Both    [ ] Other: _______________
Cross-functional team involved: [ ] Yes    [ ] No    Team members: _______________

ROOT CAUSE 1 — OCCURRENCE (Why was the non-conformance produced?)
─────────────────────────────────────────────────────────────────
5-Why chain or Fishbone summary:

Why 1: _______________
Why 2: _______________
Why 3: _______________
Why 4: _______________
ROOT CAUSE (occurrence): _______________

Confirmation / validation method:
[ ] Reproduction test (removed/restored RC → defect disappeared/reappeared)
[ ] Data correlation (statistical relationship confirmed)
[ ] Physical evidence (mechanism visible on failed part or process)
[ ] Record review (confirms absence of required control)
[ ] Other: _______________
Validation evidence reference: _______________

ROOT CAUSE 2 — ESCAPE (Why was the non-conformance not detected before reaching the next customer?)
────────────────────────────────────────────────────────────────────────────────────────────────────
5-Why chain:

Why 1: _______________
Why 2: _______________
Why 3: _______________
ROOT CAUSE (escape): _______________

Validation method: _______________
Validation evidence reference: _______________
```

**Field instructions:**
- **Two root causes are required.** A CAR with only an occurrence root cause is incomplete. An escape root cause explains the gap in the quality system — this is what auditors and customers look for.
- **The "Why 1" should be the immediate cause (the defect mechanism), not a re-statement of the problem.** Example: if the problem is "pin depth out of spec," Why 1 is not "pin depth was too shallow" — it is "insertion force was insufficient."
- **Stop the 5-Why at the actionable level.** You do not need to continue to "because humans make mistakes" — stop when you reach a specific, controllable factor in your process.
- **Validation is mandatory.** A root cause that has not been validated is a hypothesis. The CAR may only proceed to corrective action when the root cause is confirmed. If validation requires a production test, schedule it and record the result.
- **If you cannot validate the root cause:** state explicitly that the root cause is the most probable cause based on [specific evidence], and describe what additional data would confirm or refute it. Do not state an unvalidated root cause as confirmed fact.
- **Audit finding CARs:** the occurrence root cause explains why the system gap exists (e.g., "the WI template does not include a field for process parameter setpoints"); the escape root cause explains why it was not caught internally (e.g., "WI review checklist does not verify that all SC parameters are included").

---

### SECTION 5 — CORRECTIVE ACTIONS (I)

```
CORRECTIVE ACTIONS
===================
One corrective action must directly address each root cause. Enter one row per action.

───────────────────────────────────────────────────────────────────────────────────────────────────
# | Root cause addressed      | Corrective action (specific)  | Owner  | Target date | Status
───────────────────────────────────────────────────────────────────────────────────────────────────
1 | RC — Occurrence:          |                               |        |             |
  | [paste RC text]           | [specific action]             | [Name] | [Date]      | [ ] Open
  |                           |                               |        |             | [ ] Complete
──|───────────────────────────|───────────────────────────────|────────|─────────────|─────────────
2 | RC — Escape:              |                               |        |             |
  | [paste RC text]           | [specific action]             | [Name] | [Date]      | [ ] Open
  |                           |                               |        |             | [ ] Complete
───────────────────────────────────────────────────────────────────────────────────────────────────

Additional actions (if RC requires more than one action, or for systemic prevention):
───────────────────────────────────────────────────────────────────────────────────────────────────
3 |                           |                               |        |             | [ ] Open
4 |                           |                               |        |             | [ ] Open
───────────────────────────────────────────────────────────────────────────────────────────────────
```

**Field instructions:**
- **Specificity test:** Could someone who did not attend the CAR investigation meetings implement this action correctly from the text alone? If not, it is not specific enough.
- **Operator training alone:** Never acceptable as the sole corrective action. Training addresses knowledge gaps but does not prevent a person from forgetting, being replaced, or being under pressure. The system must change. If training is appropriate, it must accompany a systemic change (e.g., WI update, visual aid installed, poka-yoke added).
- **Document update actions:** Must specify: which document, what change, what new revision number it will receive, who approves it, and by when. "Update the WI" is not acceptable. "Update WI-AS-04 to include torque setpoint 12 ± 1 Nm for M6 fasteners (item 3.4), rev D, to be approved by [Name] by [Date]" is acceptable.
- **Poka-yoke actions:** Specify the device type, what failure it detects/prevents, where it will be installed, and who will verify its effectiveness before use in production.

---

### SECTION 6 — IMPLEMENTATION EVIDENCE (C)

```
IMPLEMENTATION EVIDENCE
========================
For each corrective action, record the evidence that it was implemented.
Verbal implementation is not evidence. Documents must have new revision numbers.

───────────────────────────────────────────────────────────────────────────────────────────────
Action # | Evidence description                  | Evidence reference    | Date verified
───────────────────────────────────────────────────────────────────────────────────────────────
1        |                                       |                       |
2        |                                       |                       |
3        |                                       |                       |
───────────────────────────────────────────────────────────────────────────────────────────────

Documents revised as part of this CAR:
Document name / number   | Old revision | New revision | Approval date | Approved by
─────────────────────────|──────────────|──────────────|───────────────|────────────
                         |              |              |               |
                         |              |              |               |
```

**Field instructions:**
- **Each action needs its own evidence entry.** Do not combine evidence for multiple actions.
- **Acceptable evidence types:** revised document with new revision number and approval date; signed training attendance records naming operators trained; photograph of installed poka-yoke device with label showing installation date; equipment calibration record showing updated setpoint; process parameter record showing new setting is active.
- **Not acceptable:** "action completed per verbal confirmation from [Name]"; undated photos; training records without operator names.

---

### SECTION 7 — VERIFICATION OF EFFECTIVENESS (VOE) (C)

```
VERIFICATION OF EFFECTIVENESS (VOE)
=====================================
VOE method:      [ ] Monitoring period — zero recurrence    [ ] SPC / capability data
                 [ ] Audit / process observation            [ ] Inspection results
                 [ ] Customer scorecard data                [ ] Other: _______________

VOE metric:      _______________    (e.g., defect rate for characteristic X at station Y; Cpk of pin depth)
VOE volume:      _______________    (e.g., 3 consecutive deliveries; 100 production cycles; 30 subgroups)
VOE target:      _______________    (e.g., zero recurrence of defect type A; Cpk ≥ 1.33 sustained)
VOE basis:       _______________    (Why is this volume/duration sufficient? State the rationale)
VOE start date:  _______________    (date corrective actions were implemented in production)
VOE end date:    _______________    (date monitoring period completed)

VOE RESULTS
────────────
Monitoring data reference:   _______________
Result summary:              _______________
Recurrence observed:         [ ] Yes — CAR cannot close; return to Section 4    [ ] No
Cpk / capability result:     _______________    (if applicable)

VOE verdict:    [ ] EFFECTIVE — proceed to closure    [ ] NOT EFFECTIVE — return to root cause analysis
VOE assessed by: _______________    Date: _______________
```

**Field instructions:**
- **Define the VOE before collecting data.** Do not determine what "counts as effective" after you have seen the results. The method, metric, volume, and target must be defined and approved before the monitoring period starts.
- **Volume rationale:** You must justify the chosen monitoring volume. The minimum basis is: if the baseline defect rate was X%, what sample size gives ≥ 95% confidence that the new rate is below X%? For a process-change CAR where the mechanism has been eliminated rather than detected, the reasoning is different (confirm the new process condition is sustained) — state that explicitly.
- **For customer complaint CARs:** the VOE period typically cannot start until the first production lot under the new conditions is delivered to the customer and accepted. State this explicitly.
- **For audit finding CARs:** the VOE is typically a follow-up audit observation confirming the finding has been corrected and is sustained. Schedule a follow-up audit walkthrough for the specific process element and document the result.

---

### SECTION 8 — SYSTEMIC PREVENTION AND HORIZONTAL DEPLOYMENT (C)

```
SYSTEMIC PREVENTION
====================
Could this root cause exist in other parts, products, processes, or plants?
[ ] Yes    [ ] No    [ ] Unknown — investigation required

If Yes — affected areas identified:
───────────────────────────────────────────────────────────────────────────────────────────
Area / part / process         | Root cause present? | Action taken        | Completion date
──────────────────────────────|─────────────────────|─────────────────────|────────────────
                              |                     |                     |
                              |                     |                     |
───────────────────────────────────────────────────────────────────────────────────────────

Horizontal deployment complete: [ ] Yes    [ ] Not applicable — rationale: _______________
```

---

### SECTION 9 — DOCUMENT UPDATES (C)

```
DOCUMENT UPDATES
=================
[ ] PFMEA updated    Reference failure mode: _______________    New AP: _______________
                     PFMEA revision: ___    Approval date: _______________
[ ] Control Plan updated    CP revision: ___    Approval date: _______________
[ ] Work Instruction(s) updated    WI number(s): _______________    Rev(s): _______________
[ ] No document updates required — rationale: _______________

Documents not applicable to this CAR: _______________
```

---

### SECTION 10 — LESSONS LEARNED (C)

```
LESSONS LEARNED
================
What is the key learning from this CAR that should be applied to future designs or processes?
Maximum 3 sentences. Focus on what the system should do differently, not just what happened.

Lessons learned statement:
___________________________________________________________________________
___________________________________________________________________________

Lessons learned register entry number: _______________    Date filed: _______________
Shared with (teams / projects / sites): _______________
```

---

### SECTION 11 — CLOSURE (C)

```
CLOSURE SIGN-OFF
=================
All closure criteria verified:
[ ] Root cause of occurrence validated and documented
[ ] Root cause of escape validated and documented
[ ] Corrective actions implemented with revision numbers and approval dates
[ ] VOE complete: monitoring volume reached, zero recurrence confirmed (or effectiveness data reviewed)
[ ] PFMEA updated (or explicitly documented as not applicable with rationale)
[ ] Control Plan updated (or not applicable with rationale)
[ ] Work Instructions updated (or not applicable with rationale)
[ ] Horizontal deployment documented
[ ] Customer notified of closure (if required by trigger type or CSR)
[ ] Lessons learned filed

Outstanding items at closure (if any):  [ ] None    [ ] See notes: _______________

Closed by (closure authority):  _______________    Date: _______________
Signature:                       _______________
```

---

## 2. Root Cause vs. Corrective Action Quality Checklist

Use this checklist to verify that the corrective action genuinely addresses the root cause, before submitting the CAR for approval or sending to a customer.

### Part A — Root Cause Quality

| Check | Pass criteria | Red flag |
|-------|--------------|----------|
| Specificity | Root cause names a specific condition, parameter, or gap — not a category. | "Human error," "lack of training," "process variability," "insufficient quality." |
| Causality | Removing the root cause would prevent the defect from occurring. Test: "If we fix this, can the defect still happen?" — answer must be "No." | Root cause and defect are correlated but removing RC does not guarantee the defect is prevented. |
| Actionability | The root cause can be addressed by a specific, permanent action. | Root cause is a fundamental uncertainty or an external factor outside the organisation's control. |
| Validation | Root cause is confirmed by evidence (reproduction, data, record review). | Root cause is stated as confirmed but supported only by team consensus. |
| Two causes present | Both occurrence RC and escape RC are documented and distinct. | Only one RC provided. OR escape RC is "operator did not notice" without going deeper. |

### Part B — Corrective Action Quality

| Check | Pass criteria | Red flag |
|-------|--------------|----------|
| Direct linkage | There is a clear logical chain from RC → corrective action → prevention of RC recurring. | Action addresses a symptom or intermediate cause, not the confirmed root cause. |
| Specificity | Action states: what will change, how, to what standard, by whom, by when. | "Improve process," "review procedure," "increase awareness," "retrain staff." |
| Permanence | Action changes the system — a document, a device, a process parameter, a verification step. | Action relies entirely on operator behaviour, memory, or attention. |
| Feasibility | Action has an owner with the authority and access to implement it. | Owner is a function or department rather than a named individual. |
| Verifiability | It is possible to confirm whether the action was implemented or not. | Action is inherently subjective or unverifiable (e.g., "ensure operators are more careful"). |
| Proportionality | The depth and scope of the action matches the severity of the non-conformance. | Trivial action for a safety NC; excessive corrective actions for a paperwork minor finding. |

### The Training Test

Apply this test whenever "operator training" appears as a corrective action:

> "If this operator is replaced by a new hire next month, will the new hire, following the existing procedures, also produce this defect?"

- If **Yes**: training is addressing a people problem but not a system problem. Training may be part of the action but cannot be the whole action. The system (WI, procedure, poka-yoke) must change.
- If **No**: training is appropriate because the root cause was genuinely a knowledge gap and the system (updated WI, clear standard) will prevent recurrence even with personnel turnover.

---

## 3. Effectiveness Verification Methods by Characteristic Type

Choose the VOE method based on the type of characteristic being corrected. The table below provides the standard method, minimum sample basis, and what "effective" looks like.

| Characteristic type | Primary VOE method | Minimum volume | "Effective" definition |
|---------------------|-------------------|----------------|------------------------|
| **Variable — SC (special characteristic)** | SPC data review (Cpk on corrected characteristic) | 25 subgroups minimum under new conditions; 100 individual measurements for Cpk calculation | Cpk ≥ 1.33 sustained; no out-of-control signals on the relevant chart |
| **Variable — non-SC dimensional** | Inspection results — zero recurrence over monitoring period | 3 consecutive delivery lots or 60 production units (whichever greater) | Zero non-conforming measurements on the corrected characteristic across the monitoring volume |
| **Functional / electrical / performance parameter** | End-of-line test pass rate | 50 consecutive production units at final test | Zero failures on the corrected parameter; no degraded test margins on related parameters |
| **Attribute — visual or assembly** | In-process inspection + outgoing audit | 5 production runs or 200 units (whichever greater) | Zero defects of the corrected type detected at in-process inspection or outgoing |
| **Audit finding — procedure or documentation gap** | Follow-up audit observation at the specific process element | Single follow-up visit, minimum 30 days after implementation | Auditor confirms the finding is resolved (process observed; documents verified at current revision) |
| **Audit finding — systemic gap (multiple departments or sites)** | Follow-up audit at each affected site or process | One follow-up audit per site; sample two sites if more than three are affected | All sampled sites confirm the corrective action is implemented and sustained |
| **Process parameter drift (SPC Rule 3 — trend)** | SPC monitoring with extended control period | 15 subgroups after the trend-correcting action | No re-occurrence of the trend signal for 15 subgroups; range chart stable |
| **Customer complaint — field return** | Customer feedback and warranty data | 90 days of field data after corrected production begins shipping | Zero warranty returns or complaints of the same type from production lots made after implementation date |
| **Supplier sub-component** | Incoming inspection results on receiving dock | 5 consecutive deliveries under the new incoming inspection plan | Zero non-conforming units on the corrected characteristic across all monitored deliveries |

---

## 4. CAR vs. SCAR Distinction

Understanding when to use a CAR vs. a SCAR prevents duplication, confusion in routing, and ensures the correct authority is managing the issue.

| Dimension | CAR (Corrective Action Report) | SCAR (Supplier Corrective Action Request) |
|-----------|-------------------------------|-------------------------------------------|
| **Direction** | Internal — issued by quality to an internal process owner OR received by the organisation from a customer / auditor | External — issued by the organisation TO a supplier; or received by the organisation FROM a customer and caused by a supplier |
| **Trigger** | Internal NCR, internal audit finding, customer complaint (where internal root cause), recurring internal defect | Supplier NCR, supplier-caused customer complaint, supplier audit finding, supplier delivery failure |
| **Owner** | Internal quality engineer / process owner | Supplier Quality Engineer (internally); assigned supplier contact (externally) |
| **Response authority** | Internal quality management | Supplier's quality management |
| **Follow-up mechanism** | Internal VOE per Section 7 | SCAR effectiveness verification including supplier document updates and potential on-site verification |
| **Escalation path** | Internal: escalate to site quality manager → VP Quality | External: escalate to supplier management → controlled shipping → disqualification |
| **Document control** | Filed in the organisation's quality management system | Filed in the supplier quality record AND the organisation's QMS |
| **PFMEA update responsibility** | Organisation's process PFMEA owner | Supplier's PFMEA (organisation verifies receipt and content) |

### When a customer-issued concern becomes both a CAR and a SCAR

If a customer complaint is received and investigation reveals the root cause is at a sub-supplier:

1. **Open a CAR internally** — to manage the organisation's response to the customer, document the investigation, and track the systemic prevention (including supplier oversight gap).
2. **Issue a SCAR to the sub-supplier** — to direct the sub-supplier's corrective action, obtain their 8D, and verify effectiveness.
3. **Link both documents** — the CAR references the SCAR number; the SCAR references the CAR and the customer concern.
4. **The CAR cannot close until the SCAR is closed and effective** — the organisation's corrective action is incomplete until the supplier has demonstrated permanent resolution.

The internal CAR in this scenario must also address the systemic question: "Why did our incoming inspection / sub-supplier monitoring system allow this non-conformance to reach our customer?" — this is the escape root cause at the organisation level, separate from the supplier's escape root cause.

---

## Source: skills/documentation/ncr-writing/SKILL.md

---
name: ncr-writing
description: >-
  Write a non-conformance report, NCR, reject a supplier, or document a defect with
  objective-evidence language and correct severity grading (Critical/Major/Minor). Covers
  disposition recommendations and segregation requirements for incoming inspection failures,
  in-process defects, customer returns, and audit findings.
license: MIT
metadata:
  author: RBraga01
  version: "1.1"
  iso-9001: "8.7"
  iatf-16949: "8.7.1"
  domain: quality-engineering
  subdomain: documentation
  industries: automotive,electronics,aerospace,medical,general
  status: approved
  created: "2026-06-01"
  last_updated: "2026-06-03"
  updated_by: migmcc
  reviewed_by: RBraga01
  standard_edition: "ISO 9001:2015"
---

# Non-Conformance Report (NCR) Writing

## When to use

Write an NCR whenever a product, material, or service does not conform to a specified requirement:

- Incoming inspection failure
- In-process defect found at any production step
- Final inspection rejection
- Customer return or field complaint
- Audit finding on a product characteristic

## The non-negotiable rule

**An NCR describes WHAT is wrong, not WHY.**

Root cause belongs in the CAPA / 8D. The NCR is the factual record of the non-conformance itself. Mixing root cause speculation into the NCR contaminates the record.

An NCR is a controlled quality record and may be used in audits, customer reviews, and legal contexts. All content must be objective and defensible.

## Required NCR Checklist

☐ Requirement clearly referenced (drawing/specification number and revision)
☐ Actual value or observed defect recorded with quantified measurement
☐ Gap between required and actual explicitly defined
☐ Evidence attached or referenced and traceable to this NCR
☐ Severity correctly classified — grade higher when in doubt
☐ Affected quantity and population at risk identified
☐ Material physically segregated and identified before NCR is closed
☐ Detection point reflects where the defect was found, not where it originated
☐ Disposition defined and approved by authorised personnel
☐ Containment actions documented with timestamps (if applicable)
☐ Language is objective — no subjective terms, no root cause, no opinion
☐ NCR traceable to production records, batch records, and inspection logs

---

## NCR structure

### 1. Header

| Field | Content |
|-------|---------|
| NCR number | Sequential, traceable |
| Date | Date of detection |
| Part number | Exact part number + revision |
| Part description | Name |
| Supplier / source | Supplier name + supplier code (for incoming) or line/station (for in-process) |
| Batch / lot | Traceability reference |
| Quantity affected | Non-conforming qty / total inspected |
| Detected by | Name + function |
| Detection point | Incoming / in-process station / outgoing / customer |

### 2. Non-conformance description

**Write like a measurement report, not a complaint.**

Required elements:

- What is the specified requirement? (drawing dimension, specification, standard)
- What was actually observed or measured? (actual value, description)
- What is the gap? (difference between required and actual)

Every NCR description must be independently understandable without additional explanation. Do not rely on attachments to complete the description.

**Good NCR description:**
> "Connector housing flange thickness measured at 1.8 mm ± 0.05 mm on 3 of 5 sampled units. Drawing specification: 2.2 mm ± 0.1 mm (ref. DWG-12345 rev B, detail B-3). Non-conformance: measured values 0.35–0.42 mm below lower specification limit."

**Bad NCR description (do not write):**
> "Parts are out of spec. The housing looks too thin and won't fit properly."

**Rules for the description:**

- Use numbers: actual value, specification value, tolerance, quantity
- Reference the requirement: drawing number + revision, specification number, purchase order
- Describe the physical observation: measured value, visual characteristic (location, extent, appearance)
- Avoid subjective language ("poor quality", "bad parts", "looks wrong") — use measurable and observable facts only
- Do NOT include hypotheses ("probably because…"), root cause, or blame

### 3. Objective evidence

List what evidence exists:

- Measurement records (gauge reading, CMM report, test result) — all evidence must be traceable to this NCR by ID or reference
- Photos (reference photo numbers or attach)
- Sample availability (samples retained: Yes/No, location)
- Batch / lot traceability (delivery note, batch record)

### 4. Severity classification

| Grade | Definition | Examples |
|-------|-----------|---------|
| **Critical** | Affects safety, regulatory compliance, or potential field failure that cannot be contained internally | Safety-related dimension OOS, regulatory label missing, electrical isolation failure, risk of harm to end user |
| **Major** | Affects form, fit, or function — customer will likely detect | Dimension preventing assembly, performance parameter below specification, missing required feature |
| **Minor** | Does not affect form, fit, or function — cosmetic or documentation | Surface scratch within defined limits, label position deviation, minor visual blemish |
| **OFI** | Observation for improvement — technically conforming but below best practice | (Used in audit context only, not for product NCRs) |

**When in doubt, grade higher.** It is easier to downgrade after review than to explain why a major issue was graded minor.

### 5. Affected quantity and segregation status

- How many units are affected? (inspected quantity, non-conforming quantity, population at risk)
- Where is the suspect material now? (on-hold location: shelf, bin, quarantine area)
- Has it been segregated? (Yes / No / In progress)
- Has it been identified? (red tag, quarantine label, system flag)

**Segregation must occur immediately upon detection, before NCR documentation is completed.**

**Any non-conforming material must be physically identified and segregated before the NCR is closed.**

### 6. Disposition

| Disposition | When to use |
|------------|-------------|
| **Use As Is (UAI)** | Non-conformance does not affect form, fit, function or safety — requires engineering approval with documented rationale |
| **Rework** | Non-conformance can be corrected to bring part into specification — specify rework method and re-inspection required |
| **Repair** | Non-conformance can be corrected, but result will not meet original specification — requires customer deviation approval if shipping to customer |
| **Return to Supplier (RTS)** | Incoming material non-conformance — returned with copy of NCR |
| **Scrap** | Cannot be reworked or repaired — irreversible disposal |

UAI requires documented approval with technical justification. Never approve UAI verbally.

Disposition must be approved by authorised personnel per the defined approval matrix.

### 7. Immediate containment (if applicable)

If suspect material may have already passed to a downstream process or customer:

- List containment actions taken (sort, inspection, ship-hold) — all actions must be time-stamped and traceable
- Reference the 8D / CAPA initiated (if applicable)

---

## Output format — example NCR

```
NCR-2026-0047
Date: 2026-05-28 | Part: 12345-B | Lot: 2026-05-12-A | Qty: 47/200 = 23.5%
Detection: Incoming inspection | Supplier: ABC Electronics

NON-CONFORMANCE:
Connector pin insertion depth measured at 3.8–4.1 mm on 47 of 200 sampled units.
Specification: 5.0 ± 0.3 mm (DWG-12345 rev B, detail C-1).
Non-conformance: 0.6–1.5 mm below lower limit on 23.5% of sampled parts.

EVIDENCE:
Measurement records: Sheet INS-2026-0047 (caliper, calibration cert. 2026-03-01)
Photos: NCR-2026-0047-Photo-01 to 05
Samples retained: 5 units, quarantine bin QA-07

SEVERITY: Major — connector will not achieve full mating depth, risking intermittent
electrical contact failure at the assembly stage.

SEGREGATION: 200 sampled units on hold, quarantine bin QA-07.
Remaining units in delivery note 55512 (1,500 units) on ship-hold pending 100% sort.

DISPOSITION: Return to Supplier pending investigation.
Immediate containment: 100% incoming inspection of remaining 1,500 units.
```

## Common mistakes

- **"Parts are bad"** — too vague; always give measured values vs. specification
- **Root cause in the description** — "caused by incorrect tooling setting" → remove from NCR, goes in 8D D4
- **Missing traceability** — no batch or lot number makes containment impossible
- **Incorrect severity grade** — failing to grade Critical when safety is at risk
- **UAI without engineering approval** — verbal approval is not acceptable
- **Not segregating before writing the NCR** — segregation must happen immediately, before the paperwork
- **Subjective language** — "poor quality", "bad supplier", "looks wrong" — use objective, measurable facts

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

- [NCR template](assets/ncr-template.md)

## Changelog

| Version | Date | Author | Change |
|---------|------|--------|--------|
| 1.0 | 2026-06-01 | @RBraga01 | Initial release |
| 1.1 | 2026-06-03 | @migmcc | Expanded severity classification criteria and disposition guidance |

---

## Source: skills/documentation/ncr-writing/assets/ncr-template.md

---
name: ncr-template
type: asset
parent_skill: ncr-writing
author: RBraga01
version: "1.0"
status: approved
created: "2026-06-01"
last_updated: "2026-06-03"
updated_by: migmcc
reviewed_by: RBraga01
license: MIT
---

# NCR Template — Non-Conformance Report

**Instructions:** Fill every mandatory field. Leave no field blank — write "N/A" with a reason
if a field genuinely does not apply. NCR language must be objective: what is measured, what the
specification requires, and what the deviation is. Do not include root cause, opinion, or hypothesis.

This document is a controlled quality record and must be completed with accurate, traceable, and auditable information. It may be reviewed by customers, auditors, or in legal proceedings.

**Template version:** v1.1

---

## NCR Completion Checklist

☐ All header fields completed (no blanks)
☐ Requirement, actual value, and deviation clearly defined in the description
☐ Description is independently understandable without relying on attachments
☐ Evidence attached and traceable to this NCR
☐ Severity selected and justified with one sentence
☐ All affected material identified and physically segregated before continuing
☐ Stock status fully defined — including shipped and in-transit quantities
☐ Disposition defined and approved by authorised personnel
☐ CAPA/8D triggered if severity = Critical or Major
☐ NCR reviewed and approved before closure
☐ All entries traceable to production, inspection, and logistics records

---

## HEADER

| Field | Value |
|-------|-------|
| **NCR Number** | (assigned by quality system) |
| **Date issued** | YYYY-MM-DD |
| **Issued by** | Name, function |
| **Part number** | — |
| **Part name / description** | — |
| **Revision / drawing number** | — |
| **Supplier / source** | (supplier name and code, or internal department) |
| **Customer (if applicable)** | — |
| **Plant / site** | — |
| **Purchase order / job number** | — |
| **Batch / lot number** | — |
| **Serial numbers** | (if serialised — list or range) |
| **Delivery date** | YYYY-MM-DD |
| **Detection point** | ☐ Incoming inspection ☐ In-process ☐ Final inspection ☐ Customer |
| **Quantity received** | — |
| **Quantity inspected** | — |
| **Quantity non-conforming** | — |
| **Non-conformance rate** | — % |

---

## NON-CONFORMANCE DESCRIPTION

**State WHAT is wrong. Use measured values and specification references. No root cause, no opinion.**

The description must be understandable without reviewing attachments. Include all critical data inline.

### Defect description

_Template:_
> "[Feature / characteristic] measured [measured value] [unit] on [sample reference].
> Specification requires [specification value ± tolerance] [unit] per [drawing / standard reference].
> Deviation: [deviation amount] [unit] [over/under] the [upper/lower] limit."

_Example:_
> "Pin insertion force measured at 48 N (sample 12 of 50). Work instruction WI-047 Rev C requires
> insertion force of 22–30 N. Deviation: 18 N over the upper limit."

**Description:**

[Write here]

---

### Photographic evidence

| Reference | Description |
|-----------|------------|
| Photo 1 | |
| Photo 2 | |
| Measurement record | |
| Other | |

---

### Specification reference

| Document | Revision | Clause / dimension |
|----------|----------|-------------------|
| Drawing | | |
| Work instruction | | |
| Customer specification | | |
| Standard | | |

---

### Measurement equipment

| Equipment | Calibration status | Calibration certificate ref |
|-----------|-------------------|-----------------------------|
| | | |

---

## SEVERITY CLASSIFICATION

Select one:

| Severity | Criteria | Selected |
|----------|---------|---------|
| **Critical** | Safety hazard, regulatory non-compliance, or potential field failure that cannot be contained internally | ☐ |
| **Major** | Customer (external or internal) will detect — functional failure, dimensional out of spec | ☐ |
| **Minor** | Customer may detect — cosmetic, workmanship, not affecting function | ☐ |
| **OFI** | Observation for improvement — no non-conformance, audit finding only | ☐ |

**Severity justification:**
[One sentence explaining why this severity level was chosen]

**If Critical is selected:** Immediately escalate to quality management. Do not wait for NCR completion before escalating.

---

## IMMEDIATE SEGREGATION

**Mandatory before continuing.**

| Action | Completed | Date | Time (HH:MM) | By whom |
|--------|-----------|------|--------------|---------|
| Non-conforming stock physically segregated | ☐ | | | |
| Red tag / hold label applied | ☐ | | | |
| System hold placed (ERP / WMS) | ☐ | | | |
| Shipment blocked (if applicable) | ☐ | | | |
| Customer notified (if escaped) | ☐ | | | |

**Location of segregated stock:**
[Building / area / rack / bin / system hold reference]

---

## STOCK STATUS

| Category | Quantity | Location |
|----------|----------|---------|
| Confirmed non-conforming | | |
| Under investigation (suspect) | | |
| Confirmed conforming | | |
| Already shipped to customer | | |
| In transit | | |
| **Total population at risk** | | |

---

## PROPOSED DISPOSITION

Select and complete the applicable disposition. Each requires specific approvals.

**Disposition approval authority:** [Reference to approval matrix or name the authorised function]

### Use As Is

- Requires: written technical justification + quality manager approval + customer approval (if SC affected)
- Justification: [why the non-conformance does not affect form, fit, or function]

### Rework

- Requires: rework method documented, re-inspection criteria defined
- Rework method: [specific steps — not "fix it"]
- Re-inspection method: [what, how many, acceptance criteria]
- Responsible: [name + function]
- Target completion: YYYY-MM-DD

### Repair

- Requires: customer deviation / concession approved before repair begins
- Deviation reference: [customer approval number / date]
- Repair method: [specific steps]

### Return to Supplier

- Requires: supplier notification, RMA number
- RMA reference: [number]
- Return shipping date: YYYY-MM-DD

### Scrap

- Requires: quality manager approval; confirmation of destruction
- Scrapping method: [shredding / crushing / marked and binned]
- Destruction confirmed by: [name + date]

**Selected disposition:** [Use As Is / Rework / Repair / Return / Scrap]

---

## CUSTOMER IMPACT

| Field | Value |
|-------|-------|
| Customer impact known | ☐ Yes ☐ No ☐ Under investigation |
| Customer impact description | |
| Customer notified | ☐ Yes ☐ No ☐ N/A |
| Notification date / reference | |

---

## APPROVALS

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Quality engineer (issuer) | | | |
| Quality manager | | | |
| Production manager (if applicable) | | | |
| Customer representative (if applicable) | | | |

Electronic approval allowed: ☐ Yes ☐ No (system reference: _____________)

---

## ESCALATION TO CAPA / 8D

**If severity = Critical or Major, a Corrective Action (CAPA) or 8D is required.**

| Field | Value |
|-------|-------|
| CAPA / 8D required | ☐ Yes ☐ No |
| If No — reason why not required | |
| CAPA / 8D reference number | |
| Assigned to | |
| Target closure date | YYYY-MM-DD |

---

## CLOSURE

| Field | Value |
|-------|-------|
| Disposition completed | ☐ Yes |
| Re-inspection passed | ☐ Yes ☐ N/A |
| Re-inspection record reference | |
| Verification of effectiveness | ☐ Yes ☐ N/A (reference: _____________) |
| NCR closed by | |
| Closure date | YYYY-MM-DD |

---

## LANGUAGE GUIDE — DO / DO NOT

| Write this | Not this |
|-----------|---------|
| "Dimension X measured 23.5 mm; specification 25.0 ± 0.5 mm" | "Part is out of spec" |
| "47 of 200 parts inspected were non-conforming (23.5%)" | "Several parts were rejected" |
| "Non-conformance detected at incoming inspection on 2026-05-14" | "Quality is bad" |
| "Connector pin 3 bent 15° from nominal" | "Part looks wrong" |
| "Batch 2026-05-10 to 2026-05-15 suspect" | "Some batches" |
| **DO NOT include:** root cause, hypothesis, opinion, who is to blame | |
| **DO NOT include:** future actions (those go in CAPA/8D) | |
| **DO NOT use:** "poor quality", "bad supplier", "unacceptable" — use measured facts | |

