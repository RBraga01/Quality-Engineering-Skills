# Quality Engineering Skills — audit

Generated from the canonical skills tree; each document follows in full.

---

## Source: skills/audit/iatf-16949-audit/SKILL.md

---
name: iatf-16949-audit
description: >-
  Conduct an IATF audit, check supplemental requirements, or prepare for a manufacturing
  process audit or IATF 16949:2016 third-party assessment. Covers customer-specific
  requirements (CSR), all 16 automotive supplemental clauses, and the three required audit
  types: QMS audit, manufacturing process audit, and product audit. Use for internal IATF
  audits or supplier quality audits at automotive organisations.
license: MIT
metadata:
  author: RBraga01
  version: "1.1"
  iatf-16949: "9.2.2"
  domain: quality-engineering
  subdomain: audit
  industries: automotive,electronics
  status: approved
  created: "2026-06-01"
  last_updated: "2026-06-03"
  updated_by: migmcc
  reviewed_by: RBraga01
  standard_edition: "IATF 16949:2016"
---

# IATF 16949:2016 Internal Audit — Supplemental Requirements

## Goal

Audit the automotive-specific supplemental requirements of IATF 16949:2016, including CSR compliance and the three mandatory internal audit streams. Use in conjunction with [iso-9001-internal-audit](../iso-9001-internal-audit/) for a complete IATF audit.

---

## When to use

This skill covers the **IATF 16949 supplemental requirements** — the automotive additions to ISO 9001.

IATF 16949 requires three types of internal audit (§9.2.2.1). All three must be planned, executed, and recorded within the audit programme cycle:

1. **QMS audit** — covers the entire quality management system (ISO 9001 + IATF supplementals)
2. **Manufacturing process audit** — process-based, covers all manufacturing processes at least annually
3. **Product audit** — product-specific, verifies product conformance to specifications

All manufacturing processes must be audited at least annually, with increased frequency for high-risk or poor-performing areas.

---

## Required IATF Audit Checklist

☐ Verify all three audit streams are planned and executed within the programme cycle
☐ Confirm CSR register is current and that changes trigger QMS document updates
☐ Check contingency plans are documented, reviewed, and tested (not just written)
☐ Verify special characteristics are consistent across all documents (drawing, DFMEA, PFMEA, CP, WI)
☐ Confirm supplier monitoring and escalation are active with defined thresholds
☐ Check Control Plan ↔ PFMEA linkage is current
☐ Verify traceability and suspect material isolation capability (24-hour test)
☐ Review temporary deviations for approval, expiry, and active control
☐ Verify problem-solving methodology is applied with objective evidence of effectiveness
☐ Confirm management review includes all IATF supplemental inputs
☐ Do not accept verbal confirmation — verify by observing the process, interviewing personnel, and reviewing records

---

## Key IATF 16949 supplemental requirements — audit questions

### §4.3.2 — Customer-specific requirements (CSR)

This is the most commonly non-conforming IATF clause.

Questions:

- Is there a register of all applicable customer-specific requirements (CSRs)?
- For each OEM customer: have the latest CSRs been downloaded and reviewed?
- Are CSR requirements addressed in the QMS (procedures, control plans, work instructions)?
- Are personnel who deal with each customer aware of their specific requirements?
- CSR review must be revision-controlled and linked to implementation evidence in affected documents — is this traceable?
- *Evidence:* CSR register, evidence that each CSR has been reviewed and implemented, CSR revision dates vs. QMS document dates

**High-risk CSR areas:** PPAP requirements, problem-solving format requirements, special characteristics symbols, labelling specifications, sub-supplier approval requirements.

---

### §5.1.1.1 — Corporate responsibility

- Is there a documented corporate responsibility policy (ethics, anti-bribery)?
- Is there an escalation process for reporting ethical concerns?
- Are employees aware of how to report ethical concerns confidentially?
- *Evidence:* code of conduct, ethics policy, reporting mechanism (hotline or similar)

---

### §5.3.1 — Organisational roles, responsibilities, and authorities — supplemental

- Is there a person responsible for customer satisfaction?
- Are responsibilities for special characteristics defined?
- Is there a process for communicating customer requirements to all relevant functions?
- *Evidence:* roles matrix with customer satisfaction ownership identified

---

### §6.1.2.1 — Risk analysis (supplemental)

- Does the risk analysis consider lessons learned from similar products?
- Is warranty data, field returns, and customer complaints included as inputs?
- *Evidence:* risk analysis records with warranty/field data inputs

---

### §6.1.2.3 — Contingency plans

IATF requires documented contingency plans for:

- Key equipment failure
- Key supplier failure or disruption
- Labour shortages
- IT/infrastructure failure
- Natural disasters or site incidents affecting delivery

Questions:

- Are contingency plans documented for each of these scenarios?
- Are plans reviewed periodically (at least annually)?
- Are they tested or rehearsed?
- Does top management know who activates contingency plans?
- Do contingency plans include customer communication protocols and recovery priorities?
- *Evidence:* contingency plan document, last review date, test/simulation records

---

### §7.2.3 — Internal auditor competency

- Are internal auditors formally qualified or trained?
- Do auditors have process knowledge for the areas they audit?
- Is there evidence of auditor training (certification, OJT, qualification test)?
- Are auditors independent of the area they audit?
- Is auditor effectiveness periodically reviewed based on audit quality and finding accuracy?
- *Evidence:* auditor qualification records, audit schedule showing independence

---

### §7.2.4 — Second and third-party auditor competency

- For supplier audits: are supplier auditors trained and qualified?
- For customer audits: are there designated contacts?

---

### §8.3.2.1 — Design and development — supplemental

- Are special characteristics (SC) identified and documented in DFMEA and drawings?
- Are customer-specific SC symbols used correctly?
- Are SC characteristics flowed down to PFMEA, Control Plan, and work instructions?
- *Evidence:* drawing with SC marked, DFMEA with SC, PFMEA with SC, Control Plan with SC, WI with SC

---

### §8.3.3.3 — Special characteristics

- Is there a process to identify, document, and control all special characteristics?
- Do all documents (drawing, DFMEA, PFMEA, CP, WI) use consistent SC symbols?
- Are operators aware of which characteristics are special?
- Any inconsistency in SC identification across documents must be treated as a significant audit finding due to control failure — is SC consistency actively verified?
- *Evidence:* SC registry or matrix cross-referencing all documents

---

### §8.4.1.2 — Customer-directed sources (directed buy)

- When the customer directs a specific supplier (directed buy), is this documented?
- Is the directed supplier included in the approved supplier list?
- Is quality monitoring applied even if the customer selected the supplier?

---

### §8.4.2.3 — Supplier monitoring

IATF requires active supplier monitoring with specific actions for non-performing suppliers.

Questions:

- Is there a supplier performance monitoring system (PPM, on-time delivery, quality issues)?
- Is supplier performance reviewed at a defined frequency (minimum quarterly)?
- Are supplier development or escalation actions triggered based on defined performance thresholds?
- For poor performers: is there a documented escalation and improvement process?
- Are suppliers assessed for delivery of conforming product (not just quality level)?
- *Evidence:* supplier scorecards, last 4 quarters of performance data, improvement plans for poor performers

---

### §8.5.1.1 — Control plan

Questions:

- Is there a control plan for each production part?
- Does it cover: pre-launch, production, and reaction plan?
- Are all special characteristics in the control plan with specific control methods?
- Is the control plan linked to the PFMEA (detection controls match)?
- Are reaction plans in the Control Plan understood and applied at the point of use — not only documented?
- Was it updated after the last process or product change?
- *Evidence:* control plan, PFMEA (verify linkage), latest revision date vs. last process change date

---

### §8.5.2.1 — Identification and traceability — supplemental

- Is full traceability from raw material to finished product maintained?
- Can suspect material be isolated within 24 hours?
- Is there a procedure for handling suspect material?
- Are lot sizes defined to limit the scope of recalls?
- *Evidence:* traceability records, suspect material handling procedure, sample traceability exercise (ask for a part and trace it backwards)

---

### §8.5.6.1.1 — Control of changes — supplemental (temporary change)

IATF requires that temporary process changes (deviations) be strictly controlled.

Questions:

- Is there a process for managing temporary deviations (substituting a process step or material)?
- Are deviations approved in writing with defined expiry dates?
- Is there a register of all open temporary deviations?
- Are expired deviations actively closed or extended — not left open silently?
- Is the customer notified when required by their CSR?
- *Evidence:* deviation register, sample open deviation with expiry date and approval

---

### §8.7.1.1 — Customer notification

- Is there a procedure for notifying the customer when suspect material may have been shipped?
- Does it define when notification is required (not just when the customer asks)?
- Does the procedure specify notification timelines (e.g., 24 hours for safety-related escapes per CSR)?
- Has the procedure been triggered recently? Were notifications timely?
- *Evidence:* notification procedure, last notification records (if any)

---

### §9.2.2.1 — Internal audit programme — supplemental

IATF requires **three audit streams** — most organisations fail by only conducting clause-based audits:

1. **QMS audit** — covers clauses; must cover entire QMS within the audit programme cycle
2. **Manufacturing process audit** — process-based, all manufacturing processes annually minimum; uses VDA 6.3 or equivalent scoring
3. **Product audit** — product/shipment audits at defined frequency

Questions:

- Are all three audit types in the programme?
- Is the manufacturing process audit process-based (turtle diagram approach)?
- Are all processes and products covered within the audit cycle?
- Is the audit programme risk-based (higher risk = higher audit frequency)?
- Low process audit scores must trigger corrective action, management review, and re-audit planning — is this in place?
- *Evidence:* annual audit programme, audit reports for all three types, process audit records (not just clause audits)

---

### §9.3.2.1 — Management review — supplemental inputs

IATF management review must include (in addition to ISO 9001 §9.3.2):

- Cost of poor quality (COPQ)
- Warranty performance (if applicable)
- Customer satisfaction and field performance review
- Status of CSR compliance
- Manufacturing feasibility assessments

Questions:

- Are these topics covered in the management review agenda?
- Is there data for each topic?
- Are decisions from these IATF-specific inputs translated into actions with owners and due dates?
- *Evidence:* management review minutes with IATF-required topics explicitly addressed

---

### §10.2.3 — Problem solving

- Is there a documented problem-solving methodology (8D or equivalent)?
- Is the methodology applied consistently across all quality escapes?
- Does the 8D identify root cause of occurrence AND root cause of escape?
- Is effectiveness verified before closure?
- *Evidence:* problem-solving procedure, sample 8D reports, verification of effectiveness records

---

### §10.2.4 — Error proofing

- Is there a documented approach to applying error-proofing (poka-yoke)?
- Are poka-yoke devices tested at defined intervals (IATF requires: minimum at every start of production)?
- Are test records maintained?
- Are failed or bypassed error-proofing checks treated as production stop / reaction plan triggers where applicable?
- Are poka-yoke failures treated as non-conformances requiring CAPA?
- *Evidence:* poka-yoke register, test frequency, test records, last test date vs. interval

---

### §10.3.1 — Continual improvement plan

- Is there a formal, documented continual improvement plan?
- Does it include manufacturing process effectiveness (not just quality KPIs)?
- Is it reviewed at management review?
- *Evidence:* CI plan document, last review, evidence of CI activities

---

## Product audit — §9.2.2.3

A product audit verifies that finished products meet all requirements before shipment. It is one of the three mandatory IATF audit streams.

Focus areas for product audit:

- Product conformity to drawing and specification (dimensional, functional, visual)
- Packaging and labelling compliance (OEM label format, part number, revision, quantity)
- Traceability and release status (is the product formally released and traceable to its records?)
- Audit frequency based on risk, customer issues, and product criticality

Evidence required: product audit reports, measurement records, packaging inspection records, release documentation.

---

## Manufacturing process audit — turtle diagram approach

A manufacturing process audit (required annually for each process) uses a turtle diagram to assess:

| Input | Question |
|-------|---------|
| **Who** (Man) | Qualification requirements, training, availability |
| **With what** (Machine) | Equipment capability, maintenance, calibration |
| **Using what method** | Work instructions, current, at point of use |
| **With what material** | Incoming material control, traceability |
| **With what measurement** | Gauges, MSA, SPC |
| **Environment** | Cleanroom, temperature, ESD, contamination |
| **Process output** | First-pass yield, defect rate, scrap |
| **Customer feedback** | PPM, complaints, warranty |

For each element: is it adequate? Is it controlled? Is there objective evidence?

Each turtle element should be verified by direct observation, interview, and record review — not by document review alone.

A process audit must result in a process audit score (VDA 6.3 uses a percentage score by process element P1-P7). Low scores must trigger corrective action, management review input, and re-audit planning.

---

## Common IATF audit failures

1. **CSR register not updated** when customer publishes new CSR revision
2. **No manufacturing process audits** — only clause-based audits in the programme
3. **Contingency plans exist but were never tested**
4. **Temporary deviations without expiry dates** or expired deviations not closed
5. **SC not consistently marked** across drawing, PFMEA, control plan, and work instruction
6. **Error-proofing not tested** at every start of production (frequency not defined or records not kept)
7. **Problem-solving procedure exists** but CARs in practice skip root cause or VOE

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

- [IATF supplemental requirements checklist](references/supplemental-requirements.md)

## Changelog

| Version | Date | Author | Change |
|---------|------|--------|--------|
| 1.0 | 2026-06-01 | @RBraga01 | Initial release |
| 1.1 | 2026-06-03 | @migmcc | Added supplemental requirements reference and CSR audit coverage |

---

## Source: skills/audit/iatf-16949-audit/references/supplemental-requirements.md

---
name: supplemental-requirements
type: reference
parent_skill: iatf-16949-audit
author: RBraga01
version: "1.0"
status: approved
created: "2026-06-01"
last_updated: "2026-06-03"
updated_by: migmcc
reviewed_by: RBraga01
license: MIT
---

# IATF 16949:2016 — Supplemental Requirements Reference

The 16 IATF-specific supplemental requirements that extend ISO 9001:2015.
Use alongside the [iatf-16949-audit](../SKILL.md) skill.

For each requirement: the IATF clause, what it requires, and the key audit questions.

---

## How to use

Audit the process first, then use these questions to verify compliance. Do not use this as a checklist without process understanding.

Use open questions. Verify by observing the process, interviewing personnel, and reviewing records. Do not accept verbal confirmation — all conclusions must be based on objective evidence.

**Sampling rule:** Verify multiple records, operators, and time periods to ensure systemic conformity. One conforming record is not sufficient.

**Risk prioritisation:** High-risk processes (safety, Special Characteristics, customer complaints) must be prioritised during audit planning and execution.

---

## IATF Supplemental Audit Checklist

☐ CSR register current — changes trigger review and update of affected QMS documents (PFMEA, CP, WI)
☐ Authority to stop production/shipment defined, documented, and demonstrably used
☐ Risk analysis includes field data, warranty, and lessons learned
☐ Special Characteristics consistent across all documents — SC inconsistency = major NC
☐ Supplier monitoring with defined escalation thresholds active
☐ Control Plan linked to PFMEA, current, and updated after last change
☐ Traceability tested and effective (mock recall or equivalent)
☐ Temporary changes controlled, time-limited, and expired deviations escalated
☐ Customer notification process defined and used within CSR-required timelines
☐ SPC and capability monitored with active reaction plans
☐ All three audit streams conducted (QMS, manufacturing process, product)
☐ Problem solving applied with objective evidence and lessons learned
☐ Error-proofing implemented, tested at defined frequency, failures trigger CAPA
☐ All audit conclusions supported by objective evidence — not verbal confirmation

---

## Overview — IATF 16949 Structure

IATF 16949:2016 uses ISO 9001:2015 as its base and adds automotive-specific requirements throughout. The most significant additions are in §§8.3, 8.4, 8.5, 9.2, and 10.2.

Additionally, **Customer-Specific Requirements (CSR)** supplement IATF. Always audit against both IATF 16949 and the applicable CSRs (Ford, GM, VW, BMW, Stellantis, etc.).

---

## §4.3.2 — Customer-Specific Requirements

**What it requires:**
The organisation shall include CSR in the scope of the QMS. CSRs must be documented, communicated, and maintained. Changes in CSRs must trigger a review.

**Audit questions:**

- Which OEM CSRs apply? Are they documented and current?
- How are CSR updates tracked and distributed internally?
- Are all personnel whose work is affected by CSRs trained on the relevant requirements?
- CSR updates must trigger documented review and update of affected QMS documents (PFMEA, CP, WI) — is this traceable?
- *Evidence: CSR register, CSR review log, training records, QMS document revision dates vs. CSR revision dates*

---

## §5.3.1 — Responsibility and Authority for Product and Process Requirements

**What it requires:**
Personnel responsible for ensuring conformity to product and process requirements must have the authority to stop shipment or production when a quality risk is identified.

**Audit questions:**

- Who has authority to stop production? Is this documented?
- Who has authority to stop shipment? Is this documented?
- Have these authorities ever been exercised? Evidence should include at least one real case or escalation record where authority was exercised.
- *Evidence: documented authority matrix, records of production or shipment stops*

---

## §6.1.2.1 — Risk Analysis

**What it requires:**
The organisation shall include in its risk analysis: lessons learned from product recalls, product audits, field returns, complaints, scrap, and rework.

**Audit questions:**

- Is there a risk analysis process that draws on field return data and scrap/rework trends?
- How are lessons learned from previous quality events incorporated into risk analysis?
- Risk analysis must be updated after customer complaints, field failures, or major NCRs — when was this last triggered?
- *Evidence: risk register with references to warranty/field data, lessons learned log, update dates*

---

## §7.2.1 — Competence — Supplemental

**What it requires:**
Documented process for evaluating the effectiveness of training. Persons whose work affects quality must be competent (training alone is not sufficient — competence must be verified).

**Audit questions:**

- How is the effectiveness of training evaluated? (Not just attendance — demonstrated competence)
- Is there a qualification or skill certification for production operators?
- Who defines competence standards? Are they documented?
- Competence must be demonstrated and periodically re-evaluated, not only initially assessed — is there evidence of re-evaluation?
- *Evidence: competence verification records, skills test results, OJT sign-off records*

---

## §7.2.3 — Internal Auditor Competency

**What it requires:**
Internal auditors must be competent to audit the requirements they are assigned. Auditor competence must be documented.

**Audit questions:**

- How are internal auditors qualified?
- What training have auditors completed?
- Are auditors competent to audit process-specific requirements (PFMEA, Control Plan)?
- *Evidence: auditor qualification records, training certificates, audit assignments vs. qualifications*

---

## §7.2.4 — Second-Party Auditor Competency

**What it requires:**
Auditors conducting supplier (second-party) audits must have demonstrated competence.

**Audit questions:**

- Who conducts supplier audits? What are their qualifications?
- Are supplier auditors familiar with the processes they audit?
- *Evidence: supplier auditor qualification matrix, audit reports, training records*

---

## §8.3.3.3 — Special Characteristics

**What it requires:**
The organisation shall document a process for identifying, communicating, and controlling special characteristics. This includes cascading SC from customer drawings to PFMEA, Control Plan, and Work Instructions.

**Audit questions:**

- How are special characteristics identified and documented in the PFMEA?
- Are all SCs from customer drawings transferred to the Control Plan?
- Are SC control methods (100% inspection, SPC, poka-yoke) documented in the Control Plan?
- Are SC symbols consistent across drawing, PFMEA, and Control Plan?
- Inconsistency in SC identification across documents must be treated as a major non-conformance — is SC consistency actively audited?
- *Evidence: SC register, PFMEA with SC column, Control Plan with SC column*

---

## §8.4.1.2 — Customer-Directed Sources (Directed Buy)

**What it requires:**
When the customer directs the organisation to use a specific supplier, the organisation retains responsibility for conformity even though it cannot select or change the supplier. The risks of directed-buy must be managed.

**Audit questions:**

- Are directed-buy suppliers identified?
- How are incoming quality issues with directed-buy suppliers escalated to the customer?
- Is there a documented process for managing directed-buy non-conformances?
- *Evidence: directed-buy supplier list, escalation procedure, non-conformance records*

---

## §8.4.2.4 — Supplier Monitoring

**What it requires:**
Supplier performance must be monitored using defined indicators. Performance data must be used to determine re-evaluation frequency and to drive supplier improvement actions.

**Audit questions:**

- What KPIs are used to monitor supplier performance? (PPM, OTD, audit score, SCAR response)
- How frequently is supplier performance reviewed?
- What triggers a supplier corrective action request (SCAR)?
- Supplier performance thresholds must trigger defined escalation actions (SCAR, controlled shipping, re-audit) — are thresholds documented and applied?
- Are underperforming suppliers placed on controlled shipping or conditional approval?
- *Evidence: supplier scorecard data, SCAR log, supplier re-evaluation records*

---

## §8.5.1.1 — Control Plan

**What it requires:**
A Control Plan is required for each product/process. It must cover all product characteristics (including special characteristics), process parameters, measurement methods, sample sizes, reaction plans, and control method (SPC, 100%, etc.).

**Audit questions:**

- Is there a Control Plan for every active production part?
- Is the Control Plan current (matches the current process)?
- Are all SCs from the PFMEA reflected in the Control Plan?
- Are reaction plans documented for each controlled characteristic?
- What happens when a characteristic goes out of control — are reaction plans understood and applied at the workstation, not only documented?
- *Evidence: Control Plan documents, recent revision history, reaction plan execution records*

---

## §8.5.2.1 — Identification and Traceability — Supplemental

**What it requires:**
Traceability must be maintained throughout the production process. For safety and regulatory requirements, the organisation shall be able to identify and notify customers in the event of a recall.

**Audit questions:**

- Can a specific finished unit be traced back to its raw materials and process records?
- How long are traceability records retained?
- Traceability system must be tested periodically (e.g., mock recall within defined timeframe) — when was this last done?
- *Evidence: traceability records, label samples, recall simulation test results*

---

## §8.5.6.1.1 — Temporary Change of Process Controls

**What it requires:**
When a planned process control (e.g., a specific gauge, tool, or poka-yoke) is temporarily unavailable, the organisation must have an approval process for temporary changes. Temporary changes must be documented and limited in duration.

**Audit questions:**

- Is there a procedure for approving temporary changes to process controls?
- How are temporary changes identified on the Control Plan or Work Instruction?
- Are temporary changes time-limited? Who has authority to approve them?
- Expired temporary changes must be escalated immediately and blocked until resolved — is there evidence this happens?
- *Evidence: temporary change log, deviation records, approval signatures, expiry tracking*

---

## §8.7.1.1 — Customer Notification

**What it requires:**
If non-conforming product has been shipped to the customer, the organisation must promptly notify the customer. This applies regardless of whether the defect was discovered internally or through a customer complaint.

**Audit questions:**

- What is the process for notifying the customer of a shipped non-conformance?
- Has this process been used? If yes, what was the timeline?
- Notification timing must meet CSR-defined deadlines (e.g., within 24 hours for safety-related issues) — is the deadline defined and tracked?
- How is customer notification documented?
- *Evidence: customer notification procedure, notification records, response time logs*

---

## §9.1.1.1 — Monitoring and Measurement of Manufacturing Processes

**What it requires:**
The organisation must demonstrate process capability by monitoring and controlling process parameters and product characteristics. Statistical methods must be used for special characteristics.

**Audit questions:**

- Are process capability studies performed for all SCs?
- What is the minimum Cpk required? (IATF minimum: 1.33; many customers require 1.67 for SCs)
- What happens when Cpk drops below the threshold?
- Low capability must trigger a reaction plan and potential containment actions — is this documented and applied?
- Are control charts updated in real time at the workstation?
- *Evidence: SPC charts, Cpk study results, reaction plan activations*

---

## §9.2.2.2 — Manufacturing Process Audit

**What it requires:**
Internal audit programme must include manufacturing process audits (not just QMS compliance audits). Manufacturing process audits assess the process against the Control Plan, Work Instructions, and PFMEA.

**Audit questions:**

- Are manufacturing process audits scheduled and conducted separately from system audits?
- How frequently are manufacturing processes audited?
- Are process audits conducted against the Control Plan? Are findings recorded?
- Failure to conduct any of the three audit types is a major non-conformance — can evidence be shown for all three?
- *Evidence: manufacturing process audit schedule, audit reports, findings log*

---

## §9.2.2.3 — Product Audit

**What it requires:**
Products must be audited at a defined frequency using customer-approved criteria. Product audits verify that finished goods meet all requirements before shipment.

**Audit questions:**

- Is there a product audit schedule?
- What criteria are used for product audits? (Customer drawing, internal spec?)
- How are product audit findings managed?
- *Evidence: product audit schedule, audit reports, product audit findings and actions*

---

## §10.2.3 — Problem Solving

**What it requires:**
A defined approach to problem solving is required. It must include: root cause identification, corrective action implementation, verification of effectiveness, and knowledge sharing. 8D (or equivalent) is the typical implementation.

**Audit questions:**

- What problem-solving methodology does the organisation use?
- Is the methodology documented and trained?
- All significant non-conformities must trigger structured problem solving (8D or equivalent) — is this consistently applied?
- Are root cause findings updated in the PFMEA?
- Are lessons learned shared across similar products and processes?
- *Evidence: 8D records, corrective action log, PFMEA update records, lessons learned register*

---

## §10.2.4 — Error Proofing

**What it requires:**
The organisation must use error-proofing methods in its process development activities. Error-proofing devices must be tested at defined intervals.

**Audit questions:**

- Are error-proofing (poka-yoke) devices identified in the PFMEA and Control Plan?
- Are poka-yoke devices tested at defined frequencies? What are the test frequencies?
- What happens when a poka-yoke device fails or is bypassed?
- Failure or bypass of error-proofing must trigger immediate reaction and CAPA — is this documented and applied?
- Are test records maintained for poka-yoke devices?
- *Evidence: poka-yoke device list, test schedule, test records, bypass/failure log*

---

## §10.3.1 — Continual Improvement — Supplemental

**What it requires:**
A documented continual improvement process must be maintained. It must address, as a minimum: quality, delivery, and process/product performance.

**Audit questions:**

- What improvement projects are active? What were the results of completed projects?
- How are improvement priorities set?
- Is there evidence of year-on-year improvement in quality (PPM, scrap rate)?
- *Evidence: improvement project log, trend data for quality KPIs, management review outputs*

---

## Source: skills/audit/iso-9001-internal-audit/SKILL.md

---
name: iso-9001-internal-audit
description: >-
  Conduct an internal audit by clause, answer ISO 9001 internal audit questions, or prepare
  evidence for §4 §5 §6 §7 §8 §9 §10. Provides key audit questions by clause, finding
  classification (Major NC / Minor NC / OFI), and audit report writing. Use when planning
  or conducting an ISO 9001:2015 internal audit or preparing for third-party certification.
license: MIT
metadata:
  author: RBraga01
  version: "1.1"
  iso-9001: "9.2"
  iatf-16949: "9.2.2"
  domain: quality-engineering
  subdomain: audit
  industries: automotive,electronics,aerospace,medical,general
  status: approved
  created: "2026-06-01"
  last_updated: "2026-06-03"
  updated_by: migmcc
  reviewed_by: RBraga01
  standard_edition: "ISO 9001:2015"
---

# ISO 9001:2015 Internal Audit

## Goal

Plan, conduct, and document an ISO 9001:2015 internal audit using objective evidence, correct finding classification, and clear audit reporting. Use this skill for planning an audit programme, conducting process-based or clause-based audits, preparing for third-party certification, or training internal auditors.

---

## When to use

- Planning an internal audit programme
- Conducting an internal audit (process-based or clause-based approach)
- Preparing for a third-party surveillance or recertification audit
- Training an internal auditor

---

## Required Internal Audit Checklist

☐ Define audit scope, criteria, and objectives before starting
☐ Verify auditor competence and independence (not auditing own work)
☐ Audit the process flow first — map evidence to ISO clauses afterwards
☐ Use open questions throughout — no leading questions, no yes/no questions
☐ Verify every answer with objective evidence ("show me", "let me see")
☐ Use sampling: interview multiple people, review multiple records, different time periods
☐ Classify findings correctly (Major / Minor / OFI) — do not downgrade under pressure
☐ Record objective evidence clearly and traceably for every finding
☐ Check effectiveness of previous corrective actions from prior audit cycles
☐ Confirm process performance against KPIs
☐ Issue a balanced audit report (findings + strengths)
☐ Track all Major and Minor NCs to closure with owner, due date, and effectiveness verification

---

## Audit approach — process-based first

**Preferred audit method: audit the process flow first, then map evidence to ISO clauses.**

Follow the process: inputs → activities → outputs → performance indicators. Find where requirements are addressed in practice. Only then link findings to specific clauses. This avoids "checklist auditing" and produces more useful, systemic findings.

Use sampling throughout: interview at least 2–3 people, review at least 2–3 records, and cover different time periods. One record is not enough to confirm systemic conformity.

---

## Audit finding classification

| Grade | Definition |
|-------|-----------|
| **Major non-conformance** | Complete absence of a required element; systemic failure of a process; direct failure to achieve the intended result of the QMS |
| **Minor non-conformance** | Isolated or single occurrence of a requirement not being met; partial implementation; one piece of objective evidence missing |
| **OFI (Observation / Opportunity for Improvement)** | Technically conforming, but auditor sees risk or a better approach — no immediate action required |

**Guidance:** A major NC directly threatens the QMS intent; a minor NC is a gap that could become major if not addressed. Downgrading a major to minor to avoid customer concern is an audit integrity failure.

Repeated minor non-conformances in the same process may constitute a major non-conformance due to systemic failure — treat patterns as systemic, not isolated.

**Writing findings:** Each finding must include:

1. Requirement (the ISO clause or procedure that was not met)
2. Objective evidence (what was observed, measured, or reviewed)
3. Statement of non-conformity (what the gap is)

Avoid conclusions without linking evidence to the specific requirement.

---

## Clause-by-clause key questions

### §4 — Context of the Organisation

**§4.1 — Understanding the organisation and its context**

- Is the context of the organisation documented (internal and external issues affecting the QMS)?
- Are strategic direction and relevant interested parties considered?
- Is the analysis reviewed and updated? When was it last updated?
- *Evidence:* SWOT, PEST analysis, or equivalent strategic analysis document

**§4.2 — Understanding needs and expectations of interested parties**

- Is there a list of interested parties (customers, regulators, employees, suppliers)?
- Are their relevant needs and expectations identified?
- Which of these have become QMS requirements?
- *Evidence:* stakeholder register, customer requirements register

**§4.3 — Scope of the QMS**

- Is the scope documented?
- Is it justified (exclusions explained if any)?
- Is it available to interested parties?
- *Evidence:* scope statement in Quality Manual or equivalent

**§4.4 — QMS and its processes**

- Are QMS processes identified with their inputs and outputs?
- Are process sequence and interactions defined (process map)?
- Are resources, responsibilities, and monitoring defined for each process?
- Are process risks, KPIs, and owners defined for each QMS process?
- *Evidence:* process map or turtle diagrams

---

### §5 — Leadership

**§5.1 — Leadership and commitment**

- Can top management demonstrate involvement in the QMS? (not just sign the policy)
- Is customer focus promoted at the leadership level?
- Are quality objectives integrated into business processes?
- Can top management explain current quality objectives, major risks, and customer performance issues without relying on the quality manager?
- *Evidence:* management review records, objective tracking, signed policies

**§5.2 — Policy**

- Is the quality policy documented, signed by top management?
- Does it provide a framework for quality objectives?
- Is it communicated and understood by employees? (test: ask a random employee)
- Is it available to interested parties?
- *Evidence:* quality policy document + evidence of communication (intranet, notice boards, training)

**§5.3 — Roles, responsibilities and authorities**

- Are QMS-relevant roles defined with clear responsibilities?
- Is there a designated management representative (or equivalent)?
- Are responsibilities for customer focus assigned?
- *Evidence:* organisation chart, job descriptions, quality roles matrix

---

### §6 — Planning

**§6.1 — Actions to address risks and opportunities**

- Are risks and opportunities identified from the §4.1 and §4.2 analysis?
- Are actions defined to address significant risks?
- For each significant risk: is there a defined action, owner, due date, and follow-up evidence?
- Are actions integrated into QMS processes?
- *Evidence:* risk register, risk-based thinking documented in process documents

**§6.2 — Quality objectives and planning**

- Are quality objectives established at relevant functions and levels?
- Are they SMART? (Specific, Measurable, Achievable, Relevant, Time-bound)
- Are there plans to achieve each objective (resource, responsible, timeline)?
- Are they monitored and communicated?
- *Evidence:* quality objectives document with current KPI data

**§6.3 — Planning of changes**

- When changes to the QMS are planned, is there a structured approach?
- Are purpose and potential consequences assessed before the change?
- Is integrity of the QMS maintained through changes?
- *Evidence:* change management records, MOC (Management of Change) procedure

---

### §7 — Support

**§7.1.1 — Resources (general)**

- Does the organisation determine and provide necessary resources?
- Are resource constraints documented and addressed?

**§7.1.2 — People**

- Are sufficient competent people available for QMS processes?

**§7.1.3 — Infrastructure**

- Is infrastructure (buildings, equipment, IT) identified and maintained?
- Is maintenance documented?
- *Evidence:* equipment list, maintenance schedule and records

**§7.1.4 — Environment for the operation of processes**

- Are process environment requirements identified and maintained?
- (Temperature, humidity, cleanliness, noise — as applicable)

**§7.1.5 — Monitoring and measurement resources**

- Is all monitoring and measurement equipment identified?
- Is calibration / verification performed at defined intervals?
- Are calibration records maintained?
- Is equipment identified with calibration status?
- What happens when a gauge is found out-of-calibration? (suspect product assessment)
- *Evidence:* calibration master list, calibration certificates, out-of-cal procedure

**§7.2 — Competence**

- Are competence requirements defined for all quality-affecting roles?
- Are training records maintained for all relevant personnel?
- Is effectiveness of training evaluated?
- Are personnel aware of their contribution to quality objectives?
- Can sampled employees explain what they do if they detect a non-conforming output?
- *Evidence:* competence matrix, training records, evaluation results

**§7.3 — Awareness**

- Are personnel aware of the quality policy?
- Do they know their contribution to achieving quality objectives?
- Do they know the implications of non-conforming output?
- Can sampled employees explain what they do if they detect a non-conformance?
- *Evidence:* induction training records, toolbox talks, awareness campaign evidence

**§7.4 — Communication**

- Is internal and external communication relevant to the QMS defined?
- What is communicated? By whom? To whom? When? How?

**§7.5 — Documented information**

- Is documented information required by the standard available and current?
- Is organisation-specific documented information identified?
- Is document control defined (review, approval, version control, distribution)?
- Is access controlled — only current versions at point of use?
- Is obsolete documentation prevented from unintended use?
- Are records protected from modification and kept for defined periods?
- *Evidence:* document control procedure, master document list, sample controlled documents

---

### §8 — Operation

**§8.1 — Operational planning and control**

- Are operational processes planned and controlled?
- Are process criteria established?
- Are controls implemented to meet criteria?
- Is documented information maintained to confirm processes were carried out as planned?

**§8.2 — Requirements for products and services**

- Are customer requirements determined (including legal/regulatory)?
- Are requirements reviewed before commitment (order review)?
- Are customer communications processes defined?
- *Evidence:* order review records, customer requirement register

**§8.4 — Control of externally provided processes/products/services**

- Is there an approved supplier list?
- Are supplier evaluation criteria defined?
- Are suppliers monitored (performance data, audits)?
- Are purchasing controls appropriate to the risk?
- *Evidence:* approved supplier list, supplier evaluation records, supplier KPIs

**§8.5.1 — Control of production and service provision**

- Are work instructions available at the point of use?
- Are product/service characteristics and acceptance criteria defined?
- Are process controls defined and maintained in alignment with Control Plan / work instructions?
- Is suitable monitoring/measurement equipment available and used?
- Is qualified personnel used? Are qualification records available?
- Are outputs identified and traceable?
- *Evidence:* work instructions at workstations, control plans, batch records

**§8.5.2 — Identification and traceability**

- Can product be traced from raw material to delivery?
- Is traceability documented throughout the process?
- Can suspect material be isolated when needed?

**§8.7 — Control of nonconforming outputs**

- Is there a documented process for controlling non-conforming product?
- Is non-conforming product identified and segregated?
- Are dispositions documented with approval?
- Is corrective action initiated for significant NCs?
- *Evidence:* NCR log, NCR records, quarantine area, disposition approvals

---

### §9 — Performance Evaluation

**§9.1 — Monitoring, measurement, analysis and evaluation**

- Are quality KPIs defined and monitored?
- Is customer satisfaction measured and monitored?
- Is the data analysed and used for decision-making?
- *Evidence:* KPI dashboard, customer satisfaction data, trend analysis

**§9.2 — Internal audit**

- Is there an internal audit programme covering all QMS processes?
- Is the audit programme based on process importance, prior results, and risk?
- Are auditors competent and independent of the area being audited?
- Are audit findings documented and corrective actions followed up?
- Are audit records maintained?
- *Evidence:* audit programme, audit reports, CAPA from audit findings

**§9.3 — Management review**

- Is management review conducted at planned intervals?
- Does the agenda cover all required inputs? (§9.3.2)
- Are outputs documented (decisions and actions)?
- Are action items followed up from previous reviews?
- *Evidence:* management review minutes with all required inputs and action tracking

---

### §10 — Improvement

**§10.1 — General**

- Is there evidence of continual improvement activity?
- Are opportunities for improvement being identified and acted upon?

**§10.2 — Nonconformity and corrective action**

- Is there a documented process for corrective action?
- Are root causes investigated for significant NCs?
- Are corrective actions proportionate to the effect of the non-conformity?
- Are corrective actions reviewed for effectiveness?
- Are actions taken to prevent similar NCs in other areas?
- Are records maintained? (§10.2.2)
- *Evidence:* CAPA register, CAR records, VOE evidence

**§10.3 — Continual improvement**

- Are quality objectives driving improvement?
- Is performance data used to identify improvement opportunities?
- Are improvement tools (8D, PDCA, lean, Six Sigma) used systematically?

---

## Audit report structure

```
INTERNAL AUDIT REPORT
Standard: ISO 9001:2015
Audit criteria: ISO 9001:2015 clauses, internal procedures, customer-specific requirements (if applicable)
Scope: [Process or clause range]
Date: [Audit date]
Auditor: [Name, qualification]
Auditee: [Department/process owner]

FINDINGS SUMMARY:
Major NC: [count]
Minor NC: [count]
OFI: [count]

FINDINGS:

Finding 1 — MAJOR NC
Clause: §9.3 Management Review
Requirement: ISO 9001 §9.3.2 requires management review to include analysis of 
quality objectives performance.
Evidence: Management review minutes dated 2026-03-15 reviewed. Quality objective 
tracking data was not included or referenced. Quality manager confirmed no objectives 
were discussed at the last two management reviews.
Finding: Systemic absence of quality objectives review in management review process.

[Repeat for each finding]

STRENGTHS:
[Positive observations — balanced audit report]

REQUIRED ACTIONS:
[List major and minor findings requiring CAPA with target dates]
```

---

## Corrective action follow-up

All Major and Minor NCs must enter corrective action tracking with:

- Owner (named person)
- Target due date
- Effectiveness verification (evidence that the action worked, not just that it was done)

The audit programme must follow up on all prior CARs — open CARs from previous audits must be reviewed in the next cycle.

---

## Common audit mistakes

- **Leading questions:** "You do have a calibration procedure, right?" → ask open questions: "How do you manage measurement equipment calibration?"
- **Accepting verbal answers:** always ask for objective evidence (show me, let me see)
- **Clause-hunting vs. process approach:** audit the process first, then map to clauses — not the other way round
- **Downgrading findings under pressure:** if the evidence supports a Major NC, write a Major NC
- **Not following up previous findings:** the audit programme must track closure of prior CARs
- **Single-record sampling:** one conforming record does not confirm systemic conformity — always sample multiple records and people

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

- [Clause-by-clause question bank](references/clause-questions.md)

## Changelog

| Version | Date | Author | Change |
|---------|------|--------|--------|
| 1.0 | 2026-06-01 | @RBraga01 | Initial release |
| 1.1 | 2026-06-03 | @migmcc | Expanded clause-by-clause question bank and evidence anchors |

---

## Source: skills/audit/iso-9001-internal-audit/references/clause-questions.md

---
name: clause-questions
type: reference
parent_skill: iso-9001-internal-audit
author: RBraga01
version: "1.0"
status: approved
created: "2026-06-01"
last_updated: "2026-06-03"
updated_by: migmcc
reviewed_by: RBraga01
license: MIT
---

# ISO 9001:2015 Internal Audit Question Bank

Clause-by-clause audit questions with evidence anchors.
Use alongside the [iso-9001-internal-audit](../SKILL.md) skill.

---

## How to use

Do not use this question bank as a checklist. Use it to guide process-based auditing.

Follow the process flow first, then select relevant questions. Ask open questions and follow up with evidence verification. Do not accept verbal answers without objective evidence. Ask for examples and recent records — not only procedures.

**Sampling rule:** One record is not sufficient to confirm conformity. Sample at least 2–3 records, 2–3 employees, and different time periods before drawing a conclusion.

**Finding rule:** If evidence does not match the requirement → raise a finding (Major / Minor / OFI). Document each finding with:

1. Requirement (clause or procedure)
2. Objective evidence (what you saw, read, or measured)
3. Statement of non-conformity

---

## Required Audit Behaviour

☐ Ask open questions — no yes/no, no leading questions
☐ Follow the process flow (inputs → activities → outputs → performance)
☐ Verify every claim with objective evidence ("show me", "let me see")
☐ Use sampling — multiple records, multiple people, different time periods
☐ Trace findings across the process, not just within one workstation
☐ Challenge inconsistencies between documents and practice
☐ Do not rely on one data point to confirm conformity
☐ Prioritise high-risk processes: customer-facing, production, measurement, supplier control

---

## §4 — Context of the Organisation

### §4.1 — Understanding the organisation and its context

- What internal and external issues have been identified that are relevant to the QMS?
- How were these issues determined? What method was used?
- How frequently is this analysis reviewed and updated?
- How does this context influence quality objectives and risks?
- *Evidence: SWOT, PESTLE, risk register, management review records*

### §4.2 — Understanding needs and expectations of interested parties

- Which interested parties have been identified? (Customers, regulators, employees, suppliers, shareholders)
- What are their relevant requirements?
- How does the organisation monitor changes in these requirements?
- *Evidence: stakeholder register, customer requirement documents, regulatory compliance list*

### §4.3 — Determining the scope of the QMS

- What is the documented scope of the QMS?
- Are there any exclusions? If yes, how are they justified?
- Does the scope cover all sites, processes, and products as described?
- *Evidence: QMS scope document, Quality Manual or equivalent*

### §4.4 — QMS and its processes

- Are all QMS processes identified, sequenced, and their interactions documented?
- Are inputs, outputs, risks, and performance indicators defined for each process?
- Are process risks, KPIs, and owners defined for each QMS process?
- How are outsourced processes controlled?
- *Evidence: process map, turtle diagrams, process descriptions, process KPIs*

---

## §5 — Leadership

### §5.1 — Leadership and commitment

- How does top management demonstrate commitment to the QMS (not just delegation)?
- Does top management participate in management reviews?
- Are quality policy and quality objectives established and aligned with strategic direction?
- Can top management explain current QMS performance and key risks without preparation?
- *Evidence: management review minutes showing top management participation, signed quality policy*

### §5.2 — Quality Policy

- Is the quality policy documented, communicated, and understood at all levels?
- Does it include a commitment to satisfy requirements and continually improve?
- Is it appropriate to the context and purpose of the organisation?
- Ask an operator: can they explain what the quality policy means for their job?
- *Evidence: quality policy document, posting at workstations, training records on policy*

### §5.3 — Roles, responsibilities and authorities

- Are quality responsibilities clearly assigned and documented?
- Is there a designated management representative or equivalent role?
- Do employees know their quality responsibilities?
- *Evidence: organisation chart, job descriptions, responsibility matrix (RACI)*

---

## §6 — Planning

### §6.1 — Actions to address risks and opportunities

- How are risks and opportunities identified within the QMS?
- Are there documented actions to address significant risks?
- Are risk actions tracked with owner, due date, and status?
- How is the effectiveness of these actions evaluated?
- *Evidence: risk register, risk assessment records, action log with effectiveness evidence*

### §6.2 — Quality objectives and planning

- Are quality objectives established at relevant functions, levels, and processes?
- Are objectives SMART (specific, measurable, achievable, relevant, time-bound)?
- What resources, responsibilities, and timelines are assigned to each objective?
- How is progress tracked?
- *Evidence: quality objectives document, KPI dashboard, performance tracking records*

### §6.3 — Planning of changes

- How are planned changes to the QMS managed?
- Is there a change management process that assesses the impact of changes on QMS integrity?
- *Evidence: change management procedure, change request records, before/after documentation*

---

## §7 — Support

### §7.1.1 — Resources (General)

- Are resources identified as necessary for the QMS available?
- Is there a process to identify and provide resources for QMS maintenance and improvement?
- *Evidence: resource planning records, budget allocation*

### §7.1.2 — People

- Are personnel with necessary competence available for QMS implementation?
- *Evidence: staffing plan, competence matrix, training plan*

### §7.1.3 — Infrastructure

- What infrastructure is needed for the QMS, and how is it maintained?
- Is there a preventive maintenance programme?
- *Evidence: equipment list, PM schedule, maintenance records*

### §7.1.4 — Environment for process operation

- Is the work environment adequate for achieving conformity?
- Are environmental factors monitored (temperature, humidity, cleanliness, ESD)?
- *Evidence: environmental monitoring records, cleanroom certifications, ESD control log*

### §7.1.5 — Monitoring and measuring resources

- Are measuring instruments identified, calibrated, and maintained?
- Is calibration traceable to national or international standards?
- What happens when a gauge is found out of calibration?
- Can operators identify the calibration status of the equipment they use?
- *Evidence: calibration register, calibration certificates, out-of-calibration procedure*

### §7.1.6 — Organisational knowledge

- How does the organisation capture and maintain quality-related knowledge?
- How is knowledge shared when employees change roles or leave?
- *Evidence: lessons learned register, work instructions, knowledge management system*

### §7.2 — Competence

- How is competence for quality-related roles defined?
- How is competence verified? (Training is not the same as demonstrated competence — ask for demonstration, not just records)
- What happens when a gap in competence is found?
- *Evidence: competence matrix, training records, skills assessment records*

### §7.3 — Awareness

- Do employees understand the quality policy, their contribution to QMS objectives, and the implications of not conforming?
- Ask an operator: what is the quality policy? What happens if they find a non-conformance?
- Can sampled employees explain what they do if they detect a non-conforming output?
- *Evidence: onboarding records, quality awareness training, posting of policy*

### §7.4 — Communication

- How are quality-related communications planned (who, what, when, how)?
- How does customer feedback reach the production team?
- *Evidence: communication plan, meeting minutes, quality alert notifications*

### §7.5 — Documented information

- Is documented information controlled (approved, versioned, accessible, protected from unintended alteration)?
- Are obsolete documents removed from points of use?
- Is there a document control procedure?
- *Evidence: document control register, document approval records, obsolescence removal log*

---

## §8 — Operation

### §8.1 — Operational planning and control

- Are criteria for processes and acceptance of products/services documented?
- How is control exercised over externally provided processes, products, and services?
- Are documented procedures available at the point of use?
- *Evidence: control plan, work instructions at workstations, process parameters log*

### §8.2 — Requirements for products and services

- How are customer requirements determined, including statutory and regulatory requirements?
- How are changes to requirements communicated and acknowledged?
- Are product/service requirements reviewed before commitment to supply?
- *Evidence: customer contracts, order review records, specification acceptance records*

### §8.3 — Design and development (if applicable)

- Does the organisation have design responsibility? (If no: exclusion must be justified)
- Are design inputs (functional, performance, regulatory, previous learning) documented?
- Are design reviews, verification, and validation planned and executed?
- *Evidence: design plan, design review records, verification test results, validation records*

### §8.4 — Control of externally provided processes, products and services

- Are approved supplier lists maintained and updated?
- How are suppliers evaluated and re-evaluated?
- How are supplier performance issues escalated and managed?
- *Evidence: approved supplier list, supplier evaluation records, supplier corrective action records*

### §8.5 — Production and service provision

- Are production and service delivery controlled under controlled conditions?
- Are work instructions available and used at the point of use?
- How are Control Plans and work instructions aligned with actual practice?
- Is product identification and traceability maintained throughout production?
- How is customer property identified and protected?
- *Evidence: work instructions at workstations, traceability records, customer property log*

### §8.6 — Release of products and services

- How is it verified that product/service requirements have been met before release?
- Who has authority to release product?
- Is there evidence that release criteria were met?
- *Evidence: inspection records, FAI sign-off, release authority records, certificates of conformance*

### §8.7 — Control of nonconforming outputs

- Is there a procedure for identifying and controlling non-conforming outputs?
- Are non-conforming products segregated and identified?
- Is disposition authority documented?
- How are customers notified when non-conforming product is delivered?
- *Evidence: NCR log, segregated non-conforming area, disposition records, customer notification log*

---

## §9 — Performance Evaluation

### §9.1 — Monitoring, measurement, analysis and evaluation

- What quality KPIs are monitored and how frequently?
- Is customer satisfaction measured? By what method?
- How are quality performance data analysed and used for decisions?
- Are negative trends analysed and acted upon?
- *Evidence: KPI dashboard, customer satisfaction survey records, management review data*

### §9.2 — Internal audit

- Is there a documented internal audit programme?
- Is the audit programme based on process importance, prior results, and risk?
- Are auditors selected to ensure objectivity (not auditing their own work)?
- Are audit findings documented and corrective actions tracked?
- How are audit results reported to management?
- *Evidence: audit schedule, audit reports, corrective action log, management review input*

### §9.3 — Management review

- Is management review conducted at planned intervals?
- Does it cover all required inputs (audit results, customer feedback, KPIs, risks, resource needs)?
- Are outputs (decisions, actions, resources) documented and tracked?
- Are action items from previous reviews followed up?
- *Evidence: management review agenda, management review minutes, action log from reviews*

---

## §10 — Improvement

### §10.1 — General

- Does the organisation select and apply improvement opportunities?
- *Evidence: improvement project log, PDCA records, lessons learned*

### §10.2 — Nonconformity and corrective action

- Is there a procedure for handling nonconformities and corrective actions?
- When a nonconformity occurs, are root causes identified and corrective actions implemented?
- Is the effectiveness of corrective actions verified?
- Are corrective actions proportionate to the effect of the non-conformity?
- Are similar processes reviewed to prevent recurrence in other areas?
- Is the QMS updated as a result of corrective actions?
- *Evidence: NCR log, CAPA records, effectiveness verification records, document update records*

### §10.3 — Continual improvement

- How does the organisation continually improve the suitability, adequacy, and effectiveness of the QMS?
- Are improvement objectives linked to quality policy and strategic direction?
- *Evidence: improvement project log, year-on-year KPI trend data, management review outputs*

---

## Source: skills/audit/vda-6-3-audit/SKILL.md

---
name: vda-6-3-audit
description: >-
  VDA 6.3 Process Audit — conduct or prepare for a process audit using the VDA 6.3 methodology,
  evaluate process elements P1–P7, calculate degree of fulfillment, classify findings, and generate
  an audit report. Use when a customer requests a VDA 6.3 audit, when auditing a supplier's
  manufacturing process, or when preparing for a VDA process audit visit. Covers VDA 6.3 4th edition (2023).
license: MIT
metadata:
  author: RBraga01
  version: "1.1"
  iatf-16949: "9.2.2"
  vda-reference: "VDA 6.3 Process Audit 4th Edition 2023"
  domain: quality-engineering
  subdomain: audit
  industries: automotive,electronics,general
  status: approved
  created: "2026-06-06"
  last_updated: "2026-06-06"
  updated_by: migmcc
  reviewed_by: RBraga01
  standard_edition: "VDA 6.3 Process Audit 4th Edition (2023)"
---

# VDA 6.3 Process Audit

## When to use

Use this skill when:
- Conducting a VDA 6.3 process audit at a supplier or internally
- Preparing for an OEM process audit visit (BMW, VW, Audi, Mercedes, Porsche, Stellantis)
- Auditing a new supplier during qualification
- Responding to a customer concern by conducting a focused process audit
- Evaluating a supplier's manufacturing process capability before SOP

## Prerequisites

- Customer audit scope (which process/product to audit)
- VDA 6.3 question catalogue (the auditor works from the standard questions)
- Process Flow Diagram, PFMEA, Control Plan, and Work Instructions for the audited process
- Access to the production area, equipment records, personnel, and quality records

## Workflow

### Step 1 — VDA 6.3 Structure Overview

VDA 6.3 is organised into 7 process elements (P1–P7):

| Element | Name | Applies to |
|---------|------|-----------|
| P1 | Potential Analysis | New suppliers — evaluates readiness before series production |
| P2 | Project Management | APQP and product/process development process |
| P3 | Planning the Product and Process Development | Design and process planning activities |
| P4 | Supplier Management (Purchasing) | Sub-supplier control and qualification |
| P5 | Process Input / Series | Incoming materials and components |
| P6 | Process Execution / Customer Satisfaction / Service | The manufacturing process itself |
| P7 | Customer Support / Customer Satisfaction / Service | Delivery performance, escalation, field support |

**For a focused series production audit (most common):** P5, P6, P7 are mandatory. P1–P4 are added for new supplier qualification or product launch audits.

---

### Step 2 — Rating system

Every question in VDA 6.3 is scored on a 0–10 scale:

| Score | Meaning |
|-------|---------|
| **10** | All requirements fulfilled — systematic, effective, and documented evidence exists |
| **8** | Requirement largely fulfilled — minor gaps, no systematic risk |
| **6** | Requirement partially fulfilled — deviations exist, limited risk |
| **4** | Requirement insufficiently fulfilled — significant gaps, risk to quality |
| **2** | Requirement not fulfilled — systematic failure, high risk |
| **0** | Not applicable OR not fulfilled with no evidence |

A score of **4 or less** on any question is a deficiency and must be documented with a finding and corrective action requirement.

---

### Step 3 — Degree of Fulfillment calculation

For each process element:

**Element score (%) = (Sum of all question scores) / (Maximum possible score) × 100**

**Weighting system (critical):** Each question in the VDA 6.3 question catalogue has a pre-assigned weighting factor of 1, 2, or 3. These weights are fixed in the standard — the auditor cannot change them. Questions covering safety-critical topics (error-proofing, special characteristics control, non-conformance segregation) typically carry weight 2 or 3. The maximum possible score per question = 10 × weighting factor.

To calculate the degree of fulfillment correctly:
- Use the official VDA 6.3 question catalogue, which lists each question with its weight
- Sum (score × weight) for all applicable questions in the element
- Divide by the sum of (10 × weight) for all applicable questions
- Do not average raw scores — applying equal weight to all questions is a calculation error that produces incorrect element ratings

If a question is not applicable (N/A), it is excluded from both the numerator and denominator.

#### VDA 6.3 rating thresholds

| Degree of fulfillment | Rating | Interpretation |
|----------------------|--------|----------------|
| ≥ 90% | A | Process suitable for series production — no significant concerns |
| 75% – < 90% | B | Conditionally suitable — corrective actions required within agreed timeframe |
| < 75% | C | Not suitable — series production release blocked until corrective action complete |

A rating of **C blocks SOP** — the customer will not release the supplier for series production until re-audit achieves at least B.

---

### Step 4 — P6 — Process Execution (the core audit)

P6 is the most extensive element and covers the actual manufacturing process. Key areas:

**P6.1 — Process inputs**
- Are incoming materials and components controlled?
- Are change management procedures in place and effective?
- Are specifications current and accessible at point of use?

**P6.2 — Personnel**
- Are operators qualified and trained for the tasks they perform?
- Are training records current?
- Is a qualification matrix maintained and used?

**P6.3 — Resources (equipment, tools, gauges)**
- Is equipment maintained per a preventive maintenance plan?
- Are calibration records current for all measurement equipment?
- Are work instructions present at every workstation and at the correct revision?

**P6.4 — Failure mode prevention (error-proofing)**
- Are poka-yoke devices in place for all High-AP failure modes?
- Are error-proofing devices checked at the correct frequency?
- Is the check result documented?

**P6.5 — Quality inspections and tests**
- Are incoming inspection, in-process inspection, and final inspection defined and performed?
- Are inspection records maintained and traceable?
- Is SPC in place for all special characteristics?

**P6.6 — Non-conformance management**
- Is non-conforming material identified, segregated, and controlled?
- Is there a defined reaction plan for out-of-control conditions?
- Are non-conformances escalated to quality and documented?

**P6.7 — Continuous improvement**
- Are quality KPIs tracked (reject rate, scrap, rework, OEE)?
- Are improvement actions driven by data?
- Are lessons learned captured and applied?

---

### Step 5 — Conduct the audit

**Pre-audit:**
- Request all relevant documentation: Process Flow, PFMEA, Control Plan, WIs, maintenance records, calibration records, training records
- Review and identify gaps before the site visit
- Confirm auditor qualification: VDA 6.3 audits require a trained, qualified auditor — internal auditors must hold a recognised VDA 6.3 auditor qualification (VDA QMC certification or OEM-equivalent). An unqualified person conducting the audit invalidates the result.
- Confirm auditor independence: the auditor must not have direct responsibility for the process being audited. Self-assessment by the process owner is not a substitute for an independent audit.

**Opening meeting:**
- Confirm scope, timing, and audit plan
- Introduce audit team and request the process owner to accompany

**Process walk (the audit):**
- Follow the process flow physically — start from incoming material, end at shipment
- For each step: observe, ask, verify records
- Ask: "Show me the record for this" — never accept verbal confirmation
- Score each question in real time; document evidence (positive and negative)

**Findings classification:**
- **Score 6:** Partial fulfilment — finding documented, corrective action required; deadline typically 90 days
- **Score 4:** Insufficient fulfilment — significant gap, represents active risk to quality; escalate deadline; customer OEMs often treat score-4 findings on critical questions (P6.4, P6.5, P6.6) as major deficiencies requiring immediate corrective action
- **Score 2:** Not fulfilled — systematic failure, high risk; corrective action with accelerated timeline required before next delivery
- **Score 0:** No evidence / not implemented — blocking; re-audit required before SOP release (if P1 applicable)

**Closing meeting:**
- Present scores and degree of fulfillment per element
- Confirm overall rating (A, B, or C)
- Agree on corrective action deadlines (typically 90 days for B-rating findings; accelerated for score-2 and score-4 findings)
- For B rating: schedule a follow-up audit or evidence review within 3 months to verify corrective actions are implemented — do not close the audit without this commitment in writing
- Confirm re-audit requirements if applicable (mandatory for C rating)

---

### Step 6 — Audit report structure

The VDA 6.3 report must contain:

1. Audit information: date, location, auditor, auditee, scope
2. Degree of fulfillment per element (P1–P7 as applicable)
3. Overall rating (A, B, C)
4. Finding list: for each score ≤ 6 — question, observation, evidence, score, deadline
5. Positive findings: best practices worth noting
6. Corrective action plan (CAP): supplier-signed, with root cause and due date per finding
7. Re-audit requirement if C rating

---

## Validation criteria

A VDA 6.3 audit is complete when:
- All applicable elements (P5, P6, P7 minimum for series) have been scored
- All findings (score ≤ 6) are documented with evidence
- Degree of fulfillment calculated and overall rating stated
- Corrective action plan signed by supplier quality management
- Re-audit scheduled if rating is C

## Common mistakes

- Auditor accepts verbal confirmation as evidence — always request the record
- Skipping the process walk and only reviewing documents — P6 requires observation of the live process
- Not documenting positive evidence — the report must balance findings and strengths
- Calculating degree of fulfillment without applying question weights
- Not confirming error-proofing device checks are being performed at the required frequency
- Closing meeting without confirming the corrective action deadline in writing
- Rating B without scheduling a follow-up to verify corrective actions are implemented

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
| 1.1 | 2026-06-06 | @migmcc | Expanded weighting system explanation in Step 3; added auditor qualification and independence requirements; improved findings classification (score 4 vs 6 distinction); added B-rating follow-up timeline |

---

## Source: skills/audit/vda-6-3-audit/references/p1-p7-questions.md

---
name: p1-p7-questions
type: reference
parent_skill: vda-6-3-audit
author: RBraga01
version: "1.0"
status: approved
created: "2026-06-06"
last_updated: "2026-06-06"
updated_by: RBraga01
reviewed_by: RBraga01
license: MIT
---

# VDA 6.3 P1–P7 Audit Question Bank

Representative audit questions for each VDA 6.3 process element, with weighting indicators, evidence anchors, and common low-score findings.
Use alongside the [vda-6-3-audit](../SKILL.md) skill.

> **Scope:** This document provides the question bank (8–12 questions per process element P1–P7), weighting classifications (W1/W2/W3), expected evidence types per question, and typical findings that result in scores of 4 or below. For scoring methodology, degree of fulfillment calculation, overall rating thresholds (A/B/C), and audit conduct procedure, see [vda-6-3-audit SKILL.md](../SKILL.md).

---

## Weighting Classification

| Weight | Label | Meaning |
|--------|-------|---------|
| W3 | Critical | Failure here blocks SOP or creates immediate safety/quality risk. A score of ≤ 4 on a W3 question typically drives the overall element score below 75% alone. |
| W2 | Important | Significant requirement. Two or three W2 questions at score 4 will pull the element to C grade. |
| W1 | Standard | Foundational requirement. Important but less likely to block SOP alone. |

Evidence type codes: **DOC** = document / procedure, **REC** = filled record / log, **OBS** = direct observation on the shop floor, **INT** = interview with operator or supervisor.

---

## P1 — Potential Analysis

*Applicability: New supplier qualification before series award. Not used in series production audits unless re-qualifying.*

| # | Question | Weight | Evidence type | Common low-score finding |
|---|----------|--------|---------------|--------------------------|
| 1.1 | What evidence do you have that management is committed to meeting the quality and delivery requirements of this project, including resource allocation? | W2 | DOC, INT | Management plan exists only at quotation stage; no resource commitment document for launch phase. Score ≤ 4: verbal commitment only, no documented resource plan. |
| 1.2 | What evidence do you have that the facility, equipment, and tooling capacity are adequate and available for the required volume? | W3 | DOC, OBS | Capacity analysis exists but was performed for a lower volume than the customer requirement. Score ≤ 4: no capacity analysis performed; only a verbal assertion. |
| 1.3 | What evidence do you have that quality management system certification (ISO 9001 / IATF 16949) is current and applicable to this scope? | W2 | DOC | Certificate expired or scope does not cover the manufacturing site or product family. Score ≤ 4: certificate is for a different site or product family. |
| 1.4 | What evidence do you have that the supplier has experience with this product type, material, or manufacturing technology? | W2 | DOC, INT | Reference projects listed but no measurable quality or delivery performance data attached. Score ≤ 4: no documented experience; new technology with no qualification data. |
| 1.5 | What evidence do you have that financial and business continuity risks have been assessed? | W1 | DOC | No risk assessment performed; supplier is single-source with no contingency plan. Score ≤ 4: topic not addressed at all. |
| 1.6 | What evidence do you have that sub-suppliers (tier 2) critical to this project have been identified and are qualified? | W2 | DOC, REC | Sub-supplier list exists but qualification status is unknown or unchecked. Score ≤ 4: no tier-2 sub-supplier identification performed. |
| 1.7 | What evidence do you have that product and process development resources and timelines are realistically planned against the customer's APQP milestones? | W2 | DOC | Project timeline exists but was not compared to customer gate review dates. Score ≤ 4: no project plan exists; development activities are ad hoc. |
| 1.8 | What evidence do you have that the organisation can meet the customer's specific requirements (CSRs) applicable to this product or project? | W1 | DOC, INT | CSRs have not been identified or reviewed. Score ≤ 4: organisation is unaware of which CSRs apply. |

---

## P2 — Project Management

*Applicability: APQP, product/process development, and launch phase.*

| # | Question | Weight | Evidence type | Common low-score finding |
|---|----------|--------|---------------|--------------------------|
| 2.1 | What evidence do you have that a structured APQP plan with milestones, owners, and status tracking is in place for this project? | W3 | DOC, REC | APQP plan template exists but is not actively maintained; milestones have passed without recorded sign-off. Score ≤ 4: no APQP plan; activities are tracked informally. |
| 2.2 | What evidence do you have that customer requirements (drawings, specifications, CSRs) have been reviewed, understood, and acknowledged? | W3 | DOC, REC | Drawing review occurred but open questions were not formally recorded and resolved. Score ≤ 4: no formal review; engineers received drawings but no acknowledgement record exists. |
| 2.3 | What evidence do you have that risks to project timing, quality, and supply have been identified and have mitigation actions with owners and due dates? | W2 | DOC, REC | Risk register exists but risks are generic; no product- or process-specific risks captured. Score ≤ 4: no risk register; risks are discussed verbally in project meetings only. |
| 2.4 | What evidence do you have that lessons learned from similar previous projects have been reviewed and applied to this project? | W2 | DOC | Lessons learned database exists but no evidence it was consulted for this project. Score ≤ 4: no lessons learned register or system. |
| 2.5 | What evidence do you have that project status is reported to management at defined intervals with escalation of critical issues? | W2 | REC, INT | Project reviews are held but critical issues are not escalated; management is not aware of gate delays. Score ≤ 4: no formal project review with management. |
| 2.6 | What evidence do you have that changes in requirements from the customer are formally managed, assessed for impact, and communicated internally? | W3 | DOC, REC | Change management process exists but recent engineering changes from the customer were implemented without formal assessment. Score ≤ 4: no change management process; changes are handled by engineers individually. |
| 2.7 | What evidence do you have that PPAP submission planning is on track, with all required elements assigned and due dates confirmed? | W2 | DOC, REC | PPAP checklist exists but several elements have no owner and no planned completion date. Score ≤ 4: no PPAP plan; submission is assumed to happen when production is ready. |
| 2.8 | What evidence do you have that sub-suppliers have been involved in the project plan and are meeting their development milestones? | W2 | DOC, REC | Sub-supplier APQP status is not tracked; only incoming sample approval is planned. Score ≤ 4: sub-supplier development milestones are not tracked. |

---

## P3 — Planning of Product and Process Development

*Applicability: Product and process design, DFMEA, PFMEA, process flow, prototype builds.*

| # | Question | Weight | Evidence type | Common low-score finding |
|---|----------|--------|---------------|--------------------------|
| 3.1 | What evidence do you have that special characteristics (safety, significant, critical) have been identified on drawings and transferred to the PFMEA and Control Plan? | W3 | DOC | SC symbols on drawing not reflected in PFMEA; Control Plan does not flag SCs with special control methods. Score ≤ 4: SCs on drawing, none in PFMEA or Control Plan. |
| 3.2 | What evidence do you have that the PFMEA has been created with cross-functional input, covers all process steps in the Process Flow, and has been reviewed against the DFMEA? | W3 | DOC, INT | PFMEA was created by quality alone; production and engineering were not involved. Score ≤ 4: PFMEA is a copy from a similar part with no adaptation; or PFMEA is missing. |
| 3.3 | What evidence do you have that all high-AP failure modes have detection or prevention controls defined, and the action priority has been agreed with the customer where required? | W3 | DOC | High-AP failure modes exist with no planned action; AP has not been reassessed after actions were defined. Score ≤ 4: high-AP failure modes with no controls assigned. |
| 3.4 | What evidence do you have that error-proofing (poka-yoke) devices have been planned for failure modes where error detection relies on operator attention? | W2 | DOC, OBS | Poka-yoke listed in PFMEA but not yet implemented; no verification that the device detects the failure mode it is designed for. Score ≤ 4: no poka-yoke planned for operator-dependent detection of high-AP failure modes. |
| 3.5 | What evidence do you have that prototype builds were conducted, results were documented, and open issues were tracked to resolution? | W2 | REC | Prototype build records exist but dimensional results are not linked back to PFMEA failure modes. Score ≤ 4: no prototype build documentation; only informal sign-off. |
| 3.6 | What evidence do you have that measurement systems (gauges, fixtures) for all special characteristics have been planned, specified, and will be ready before PPAP? | W2 | DOC, REC | Gauge plan exists but MSA studies have not been scheduled; gauge lead times risk PPAP timing. Score ≤ 4: no gauge plan; MSA not considered at planning stage. |
| 3.7 | What evidence do you have that the process flow, PFMEA, and Control Plan are aligned (each process step in the flow has a corresponding PFMEA entry and a Control Plan line)? | W3 | DOC | Process flow has 12 steps; PFMEA covers 8; Control Plan covers 9. Gaps are not explained. Score ≤ 4: the three core documents are not aligned; each was created independently. |
| 3.8 | What evidence do you have that run-at-rate or trial production was completed and the results support the production rate and quality targets? | W2 | REC | Run-at-rate was not performed before PPAP submission; capacity was modelled on paper only. Score ≤ 4: no run-at-rate; capacity claim is theoretical. |

---

## P4 — Supplier Management (Sub-Supplier Control)

*Applicability: Management of tier-2 and tier-3 suppliers and sub-contractors.*

| # | Question | Weight | Evidence type | Common low-score finding |
|---|----------|--------|---------------|--------------------------|
| 4.1 | What evidence do you have that sub-suppliers providing safety- or quality-critical materials or components are qualified and approved before use? | W3 | DOC, REC | Approved supplier list exists but several sub-suppliers supplying critical materials are not on it and have never been audited. Score ≤ 4: no approved supplier list; sub-suppliers are selected on price and availability only. |
| 4.2 | What evidence do you have that sub-supplier quality performance (PPM, delivery, SCAR response) is monitored and reviewed at defined intervals? | W2 | REC | Sub-supplier quality data is collected but not reviewed with sub-suppliers; no feedback loop. Score ≤ 4: no sub-supplier quality monitoring; data is only reviewed when a problem occurs. |
| 4.3 | What evidence do you have that changes at sub-suppliers (material, process, location, personnel) are communicated to you and assessed before implementation? | W3 | DOC, REC | Sub-supplier change notification procedure exists but recent material sub-supplier change was not notified. Score ≤ 4: no change notification requirement in sub-supplier contracts or purchasing conditions. |
| 4.4 | What evidence do you have that incoming inspection requirements are defined for all purchased materials and components, matched to their risk level? | W2 | DOC, REC | Incoming inspection plan exists for finished components but raw material incoming inspection is not defined. Score ≤ 4: no formal incoming inspection plan; acceptance is based on delivery note only. |
| 4.5 | What evidence do you have that sub-suppliers have been given your customer's applicable requirements and special characteristics? | W2 | DOC | Drawings are shared with sub-suppliers but SC symbols and CSR-specific requirements are not communicated. Score ≤ 4: sub-suppliers receive only the dimensions drawing; no SC or CSR flow-down. |
| 4.6 | What evidence do you have that sub-supplier audits (quality system or process) are planned and conducted at a frequency matched to supplier risk? | W2 | REC | Audit plan exists but has not been executed in 18+ months; overdue audits are not escalated. Score ≤ 4: no sub-supplier audit plan; audits are reactive (only after problems). |
| 4.7 | What evidence do you have that corrective actions issued to sub-suppliers (SCARs) are tracked to closure and verified for effectiveness? | W2 | REC | SCAR register exists but 40% of open SCARs have no due date and no follow-up evidence. Score ≤ 4: no SCAR process; complaints to sub-suppliers are managed via email with no tracking. |
| 4.8 | What evidence do you have that counterfeit parts or material fraud risks are addressed in the supply chain, especially for electronic components or safety-critical materials? | W1 | DOC, INT | Topic not addressed; no procedure for counterfeit detection. Score ≤ 4: no awareness of counterfeit risk; no control in place. |

---

## P5 — Process Input — Series Production

*Applicability: Incoming materials, components, and change management in series production.*

| # | Question | Weight | Evidence type | Common low-score finding |
|---|----------|--------|---------------|--------------------------|
| 5.1 | What evidence do you have that incoming materials and components are inspected per a defined incoming inspection plan before release to production? | W3 | DOC, REC, OBS | Incoming inspection plan exists but records show batches released without inspection results being recorded. Score ≤ 4: materials go directly to production line without any incoming check. |
| 5.2 | What evidence do you have that sub-supplier changes (material, process, location) are reviewed and do not enter production without assessment and approval? | W3 | DOC, REC | Sub-supplier changed a raw material formulation; change notification was received but production continued for 3 weeks before assessment was completed. Score ≤ 4: sub-supplier changes are not communicated or tracked. |
| 5.3 | What evidence do you have that all materials, components, and finished goods are traceable (lot number, material cert, delivery reference) throughout the production process? | W3 | REC, OBS | Lot numbers are recorded at incoming but are not linked to production orders or finished goods travellers. Score ≤ 4: no traceability system; batches are mixed in storage without lot identification. |
| 5.4 | What evidence do you have that incoming non-conforming material is immediately segregated, labelled, and prevented from entering production? | W3 | OBS, REC | Red-tag area exists but non-conforming material was observed on the production line floor without red-tag. Score ≤ 4: no segregation area; non-conforming material is stored next to conforming material. |
| 5.5 | What evidence do you have that FIFO (first-in, first-out) is maintained for all perishable materials and components with shelf-life limitations? | W2 | OBS, REC | FIFO procedure exists but warehouse layout makes FIFO impractical; older stock is observed behind new deliveries. Score ≤ 4: no FIFO; no shelf-life control; expired material found in storage. |
| 5.6 | What evidence do you have that current, approved revisions of customer drawings and specifications are available and used for incoming inspection and production? | W2 | DOC, OBS | Drawing management system is in place but an operator was observed using a superseded drawing at their workstation. Score ≤ 4: no drawing revision control; multiple revisions present on the floor. |
| 5.7 | What evidence do you have that engineering changes from the customer have been formally assessed, implemented across all affected processes, and closed out with documented evidence? | W3 | DOC, REC | ECR register exists but 2 of 7 open ECRs have passed their due dates with no completion record. Score ≤ 4: no formal ECR process; customer changes are implemented informally. |
| 5.8 | What evidence do you have that re-work and re-test processes for incoming materials are defined, controlled, and do not result in uncontrolled mixing with conforming stock? | W2 | DOC, OBS | Re-work is performed but re-worked parts are returned to the standard bin without separate identification. Score ≤ 4: re-work is uncontrolled; re-worked parts are indistinguishable from original parts. |

---

## P6 — Process Execution (Series Production)

*Applicability: The manufacturing process itself — the most extensive and most commonly audited element.*

### P6.1 — Process Inputs

| # | Question | Weight | Evidence type | Common low-score finding |
|---|----------|--------|---------------|--------------------------|
| 6.1.1 | What evidence do you have that process inputs (materials, components, tooling) at each workstation are verified before production starts each shift? | W2 | OBS, REC | Shift start checklist exists but records show it is rarely completed; operators confirm they check but do not record. Score ≤ 4: no shift start verification; operators begin production without checking inputs. |
| 6.1.2 | What evidence do you have that current work instructions, at the correct revision, are accessible at every workstation where the operation is performed? | W3 | OBS | Work instructions are posted but two stations have outdated revisions (superseded by ECR from last month). Score ≤ 4: no work instructions at the point of use; operators work from memory or informal notes. |

### P6.2 — Personnel and Qualification

| # | Question | Weight | Evidence type | Common low-score finding |
|---|----------|--------|---------------|--------------------------|
| 6.2.1 | What evidence do you have that all operators and inspectors on special characteristics are trained, qualified, and their qualification is recorded and current? | W3 | REC, OBS | Qualification matrix exists but two operators currently working on SC operations are not listed as qualified; training records are missing. Score ≤ 4: no qualification matrix; operators are assigned to any station without formal qualification. |
| 6.2.2 | What evidence do you have that new or temporary operators are supervised until they achieve qualified status, and do not work unsupervised on SC operations? | W3 | INT, REC | No defined qualification period for temporary operators; a recent temp worker was working solo on a critical assembly station. Score ≤ 4: no process for qualifying temporary workers; they are treated the same as trained operators from day one. |
| 6.2.3 | What evidence do you have that re-qualification is triggered when an operator has not performed a task for a defined period, or after a quality escape? | W2 | DOC, REC | Re-qualification policy is documented but was not triggered after a recent operator-caused escape. Score ≤ 4: no re-qualification policy; once qualified, always qualified. |

### P6.3 — Resources (Equipment, Tools, Gauges)

| # | Question | Weight | Evidence type | Common low-score finding |
|---|----------|--------|---------------|--------------------------|
| 6.3.1 | What evidence do you have that all production equipment has a documented preventive maintenance plan and that maintenance is performed and recorded on schedule? | W2 | DOC, REC | PM plan exists and records are maintained but 3 of 8 machines are overdue by > 30 days with no documented reason. Score ≤ 4: no formal PM plan; maintenance is reactive. |
| 6.3.2 | What evidence do you have that all measurement devices used on special characteristics have current calibration certificates and are traceable to national standards? | W3 | REC, OBS | Calibration schedule exists but one critical gauge was observed on the production line with an expired calibration label (2 weeks overdue). Score ≤ 4: no calibration system; gauges are used without calibration records. |
| 6.3.3 | What evidence do you have that tooling (moulds, dies, inserts, jigs, fixtures) used for special characteristic operations is regularly inspected and its condition is controlled? | W2 | REC, OBS | Tool inspection records exist for moulds but fixture condition is not formally inspected; fixture wear on a critical positioning jig was observed but not recorded. Score ≤ 4: no tool condition monitoring; tools are replaced only when they break. |

### P6.4 — Error-Proofing

| # | Question | Weight | Evidence type | Common low-score finding |
|---|----------|--------|---------------|--------------------------|
| 6.4.1 | What evidence do you have that poka-yoke devices exist for all high-AP failure modes where the consequence of escape is safety or function-critical? | W3 | OBS, DOC | PFMEA identifies 4 high-AP failure modes at assembly; 2 have poka-yoke devices confirmed; 2 rely on operator visual check with no error-proofing. Score ≤ 4: poka-yoke listed in PFMEA but not installed on the line. |
| 6.4.2 | What evidence do you have that error-proofing devices are checked at the defined frequency, results are recorded, and the production line is stopped if a poka-yoke check fails? | W3 | REC, OBS, INT | Poka-yoke check frequency is defined as every 2 hours but records show checks were performed only at start and end of shift. Score ≤ 4: no poka-yoke check records; operators confirm they check "when they remember." |
| 6.4.3 | What evidence do you have that when an error-proofing device fails or is bypassed, a documented reaction plan is followed and production is stopped? | W3 | DOC, INT | Reaction plan exists in theory but operators were unable to describe what to do if the poka-yoke alarm is triggered. Score ≤ 4: no reaction plan; operators work around poka-yoke failures. |

### P6.5 — Quality Inspections and SPC

| # | Question | Weight | Evidence type | Common low-score finding |
|---|----------|--------|---------------|--------------------------|
| 6.5.1 | What evidence do you have that in-process inspections are performed at the frequency defined in the Control Plan, and results are recorded per part or batch? | W3 | REC, OBS | Control Plan specifies hourly inspection of pin depth; records show gaps of 4–5 hours between entries during the current shift. Score ≤ 4: inspection occurs but is not recorded; records are filled in at end of shift from memory. |
| 6.5.2 | What evidence do you have that SPC charts are in place for all special characteristics, are updated in real time, and out-of-control signals are documented and actioned? | W3 | OBS, REC | SPC charts are displayed at the workstation but the last entry is from yesterday; out-of-control signals from 3 days ago have no recorded action. Score ≤ 4: SPC charts are completed retroactively; they are not used for real-time decision-making. |
| 6.5.3 | What evidence do you have that final inspection covers all characteristics defined in the Control Plan before product is released for shipment? | W2 | DOC, REC | Final inspection procedure covers all dimensional and functional characteristics except one electrical parameter which was removed from the inspection plan without documented rationale. Score ≤ 4: final inspection is performed but not against a defined Control Plan; inspectors use their own judgement. |

### P6.6 — Non-Conformance Management

| # | Question | Weight | Evidence type | Common low-score finding |
|---|----------|--------|---------------|--------------------------|
| 6.6.1 | What evidence do you have that non-conforming material is immediately identified with a non-conformance label, physically segregated, and cannot re-enter the production flow without disposition? | W3 | OBS | Non-conforming parts area is designated but unlabelled parts were observed in the area; one non-conforming part was observed on the production line near the good-parts bin. Score ≤ 4: non-conforming material is placed in a shared area without segregation or labelling. |
| 6.6.2 | What evidence do you have that a defined reaction plan (response to out-of-control condition) is accessible at the workstation and operators can describe their actions when quality limits are exceeded? | W3 | OBS, INT, DOC | Reaction plan is posted at the station but operators cannot correctly describe the containment steps when questioned. Score ≤ 4: no reaction plan; operators decide individually what to do when a problem occurs. |
| 6.6.3 | What evidence do you have that all non-conformances are recorded in a system (paper or digital) that enables trend analysis and recurrence detection? | W2 | REC | Non-conformance log exists but entries are incomplete (missing quantities and disposition). Score ≤ 4: non-conformances are tracked only by defect counters on the line; no written records. |

### P6.7 — Continuous Improvement

| # | Question | Weight | Evidence type | Common low-score finding |
|---|----------|--------|---------------|--------------------------|
| 6.7.1 | What evidence do you have that quality KPIs (PPM, scrap rate, rework rate, first-pass yield, OEE) are tracked, reviewed regularly, and trend data is used to drive improvement actions? | W2 | REC | KPIs are tracked and displayed but review meetings are held only quarterly; no corrective actions are linked to negative trends. Score ≤ 4: KPIs are collected but not reviewed with the production team; operators do not know their performance data. |
| 6.7.2 | What evidence do you have that improvement actions are driven by data analysis rather than reactive fire-fighting, and have measurable targets and owners? | W2 | DOC, REC | Improvement plan exists but most actions are reactive and have no before/after measurement data. Score ≤ 4: no improvement plan; activities are triggered by customer complaints only. |
| 6.7.3 | What evidence do you have that lessons learned from quality events (escapes, field returns, audit findings) are captured, shared across similar processes, and used to update PFMEAs and Control Plans? | W2 | DOC, REC | A lesson learned register exists but recent escapes are not in it; PFMEA was not updated after a customer complaint resolved 6 months ago. Score ≤ 4: no lessons learned system; events are resolved and forgotten. |

---

## P7 — Customer Support / Customer Satisfaction / Service

*Applicability: Delivery performance, problem response, field support, and communication after SOP.*

| # | Question | Weight | Evidence type | Common low-score finding |
|---|----------|--------|---------------|--------------------------|
| 7.1 | What evidence do you have that customer delivery performance (on-time delivery rate, delivery accuracy) is monitored and meets the agreed targets? | W2 | REC | Delivery data is tracked internally but customer scorecard data is not reviewed; customer has reported delivery concerns not reflected in internal data. Score ≤ 4: no delivery performance tracking; issues are known only when the customer complains. |
| 7.2 | What evidence do you have that customer complaints and concerns are acknowledged within the agreed response time, escalated internally, and tracked to closure? | W3 | REC | Complaint log exists but 3 of 6 open complaints have missed the agreed 24h acknowledgement deadline with no explanation. Score ≤ 4: no complaint log; complaints are managed individually by the sales team with no quality involvement. |
| 7.3 | What evidence do you have that root cause analysis and corrective actions for customer complaints are formally documented, reviewed with the customer, and verified for effectiveness? | W3 | REC | 8D reports are submitted to the customer but D6 (verification of effectiveness) is routinely left blank or marked "TBD." Score ≤ 4: no formal 8D process; complaints are responded to with action plans that are never verified. |
| 7.4 | What evidence do you have that field failures and warranty returns are analysed, the defect mode is confirmed, and the findings are fed back into the PFMEA and Control Plan? | W3 | REC, DOC | Warranty data is received from the customer but there is no formal process to link warranty failure modes back to the PFMEA. Score ≤ 4: warranty data is not reviewed internally; returns are credited and no root cause analysis is performed. |
| 7.5 | What evidence do you have that production is maintained during and after customer escalations (e.g., controlled shipping, containment actions) without disruption to the customer's production line? | W2 | REC, INT | Controlled shipping procedure exists but was not followed correctly during the last escalation; customer was not notified of containment status. Score ≤ 4: no controlled shipping process; escalations are managed informally. |
| 7.6 | What evidence do you have that packaging, labelling, and shipping specifications are defined and adhered to for all products (including special labelling requirements per customer CSR)? | W2 | DOC, OBS | Packaging specification exists but customer-specific labelling requirements (barcode format, label placement) are not covered. Score ≤ 4: no packaging specification; operators decide packaging individually. |
| 7.7 | What evidence do you have that the organisation proactively communicates risks to supply (potential shortages, process changes, force majeure events) to the customer before they cause disruption? | W2 | INT, REC | No proactive supply risk communication process; customers learn of supply issues when a late delivery occurs. Score ≤ 4: no process for customer communication; all communication is reactive. |
| 7.8 | What evidence do you have that spare parts, service parts, or end-of-life supply commitments to the customer are tracked and will be met? | W1 | DOC | Spare part commitments are contractually defined but no internal tracking or planning exists for long-term spare supply. Score ≤ 4: spare parts obligations are unknown; no process owner. |
| 7.9 | What evidence do you have that the customer satisfaction performance data (scorecards, ratings, feedback) is reviewed with management and drives internal action plans? | W2 | REC, INT | Customer scorecards are received but reviewed only by the sales manager; quality and production teams are not informed of customer ratings. Score ≤ 4: customer scorecard data is not used internally. |
| 7.10 | What evidence do you have that the organisation has a business continuity plan (BCP) covering key risks to supply such as fire, flood, critical machine failure, or key personnel loss? | W1 | DOC | Business continuity plan exists for the office function but does not cover the production facility specifically. Score ≤ 4: no BCP; this topic has never been addressed. |

