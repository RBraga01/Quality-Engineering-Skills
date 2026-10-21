# Quality Engineering Skills — problem-solving

Generated from the canonical skills tree; each document follows in full.

---

## Source: skills/problem-solving/is-is-not-scoping/references/hypothesis-elimination.md

---
name: hypothesis-elimination
type: reference
parent_skill: is-is-not-scoping
author: RBraga01
version: "1.0"
status: approved
created: "2026-06-06"
last_updated: "2026-06-06"
updated_by: RBraga01
reviewed_by: RBraga01
license: MIT
---

# Hypothesis Elimination — Is/Is-Not Reference

Structured logic for generating, testing, and eliminating hypotheses using the Is/Is-Not matrix.
Use alongside the [is-is-not-scoping](../SKILL.md) skill.

> **Scope:** This document covers the hypothesis tracking table template, elimination logic, a worked end-to-end example, how to write a verified problem statement after elimination, and how to transition from Is/Is-Not into 5-Why or Fishbone. For the Is/Is-Not matrix construction workflow and fact-gathering discipline, see [is-is-not-scoping SKILL.md](../SKILL.md).

---

## Hypothesis Tracking Table Template

Use one row per hypothesis. Complete the Outcome column only after testing against all five Is/Is-Not dimensions.

| # | Hypothesis | What | Which | Where | When | How many | Outcome | Eliminating entry |
|---|---|---|---|---|---|---|---|---|
| H1 | [Hypothesis statement] | Consistent / Contradicts / Unknown | Consistent / Contradicts / Unknown | Consistent / Contradicts / Unknown | Consistent / Contradicts / Unknown | Consistent / Contradicts / Unknown | ELIMINATED / SURVIVES / PARTIAL | [Dimension + specific entry that eliminates, if applicable] |
| H2 | | | | | | | | |
| H3 | | | | | | | | |

**Minimum three hypotheses required.** Fewer than three indicates premature narrowing — generate more before testing any.

**Column guidance:**

- **Consistent** — the hypothesis can explain this IS or IS-NOT observation without modification
- **Contradicts** — the hypothesis cannot explain this observation; it predicts a different result
- **Unknown** — data for this dimension is not yet available; mark the cell, do not leave it blank, and record what investigation is needed

A single "Contradicts" entry is sufficient to eliminate a hypothesis, unless the contradiction can be explained by a modifying condition (e.g., sampling limitation). Document any modifying conditions explicitly — do not use them to avoid elimination.

---

## Elimination Logic

### What a distinction is

A **distinction** is the specific IS/IS-NOT contrast that a hypothesis cannot explain. A valid distinction has two properties:

1. The hypothesis predicts a different result for this dimension than what the IS/IS-NOT matrix records
2. The distinction is based on a documented fact, not an assumption

**Examples of valid distinctions:**

- Hypothesis: "All material from supplier X is non-conforming." Distinction: "IS NOT — Batches from supplier X delivered before 2026-04-15 showed 0 defects in 1,200 parts inspected. If all material from supplier X were non-conforming, we would expect defects in those batches too."
- Hypothesis: "The inspection gauge is out of calibration." Distinction: "IS NOT — Defect was found at the customer's incoming inspection, not at our outgoing inspection. If our gauge were reading incorrectly, we would not have shipped 0 defectives in the previous 3 months of 100% outgoing inspection."
- Hypothesis: "Operator skill is the cause." Distinction: "IS — Defect is present across all three shifts, including automated operations. If this were operator-dependent, we would expect it to be absent during automated shift."

### What does NOT constitute a valid elimination

- "The team believes this cause is unlikely" — opinion without data
- "We have never seen this before" — absence of prior experience is not data
- "This would be expensive to investigate" — cost does not affect logical validity
- A contradiction based on an assumption in the IS column — if the IS entry is itself an assumption, the elimination is invalid

### Partial survival — when a hypothesis is not fully eliminated

A hypothesis **partially survives** when it is consistent with some dimensions but contradicts one or more others. Options:

1. **Modify the hypothesis** — narrow its scope to make it consistent with all dimensions (e.g., change "all supplier X material" to "supplier X material from the revised process introduced 2026-04-16")
2. **Hold for further data** — if the contradicting dimension has an Unknown entry, gather data before deciding
3. **Split the hypothesis** — if the original hypothesis actually contains two distinct claims, separate them and test each independently

---

## Worked Example: Is/Is-Not to Hypothesis Elimination

### Scenario

A Tier 1 automotive electronics supplier receives a customer complaint: bent connector pins on part number ECU-4472 rev C. The customer found 47 defective units in a delivery of 200 pieces.

### Completed Is/Is-Not Matrix (facts only)

| Dimension | IS | IS NOT |
|---|---|---|
| What | Connector pin bent (pin 3 only, lateral deflection 12–18°) | Other pins bent; housing cracked; solder joint failure; any electrical defect |
| Which | Part number ECU-4472 rev C; production batches W18 and W19 2026 | ECU-4472 rev B; ECU-4471 (same connector, different PCB); batches W16 and W17 |
| Where | Found at customer incoming inspection, Germany Plant | Found at our outgoing inspection (0 defectives in 100% inspection); at Plant B customer |
| When | First reported 2026-05-08 for batches shipped 2026-04-28 to 2026-05-02; all shifts | Before W18 production (zero complaints for ECU-4472 in prior 6 months) |
| How many | 47/200 (23.5%) in affected batches; consistent rate across W18 and W19 | Any defects in W16 or W17 (0/600 inspected by customer) |

**Key clue:** Rate is stable at ~23.5% across two batches; confined to pin 3 only; appeared at batch W18 onset; not detected at our 100% outgoing inspection.

### Hypotheses Generated

**H1:** The connector housing supplier changed the pin material or geometry in batch W18, causing pin 3 to be more susceptible to deflection during transit.

**H2:** A new packing configuration was introduced for the W18 shipment that allows pin 3 to contact the tray during vibration in transit.

**H3:** Our outgoing inspection gauge for this feature failed or is insufficiently sensitive to detect the 12–18° deflection.

**H4:** A process change at our assembly station (crimping jig or insertion force) was introduced between W17 and W18 that deforms pin 3 during assembly.

**H5:** The defect occurs at the customer's incoming unpacking process, not in our production or transit.

### Hypothesis Testing

| # | Hypothesis | What | Which | Where | When | How many | Outcome | Eliminating entry |
|---|---|---|---|---|---|---|---|---|
| H1 | Supplier material/geometry change at W18 | Consistent (pin 3 only could relate to positional characteristic) | Consistent (batch boundary matches W18) | Consistent | Consistent (onset at W18) | Consistent (~23.5% stable rate) | **SURVIVES** | — |
| H2 | New packing configuration causing transit damage | Consistent | Consistent (W18 boundary) | Consistent (found at customer) | Consistent | Partially — 23.5% is high for random transit damage | **PARTIAL** | How many: random transit contact would produce lower, variable rate |
| H3 | Outgoing inspection gauge failure | Consistent (defect escaped) | Consistent | **Contradicts** — if gauge failed, we'd expect escapes on other part numbers too; no other complaints received | Partially consistent | Consistent | **ELIMINATED** | Where: "IS NOT — found at our outgoing inspection" combined with 100% inspection means our gauge passed these parts; if gauge failed, rate would not be batch-specific |
| H4 | Assembly process change at W18 (crimping jig) | Consistent (pin 3 specific — jig feature) | Consistent (batch boundary W18) | **Partially** — consistent with escaping outgoing inspection if deformation is at or near limit | Consistent (onset W18) | Consistent (stable ~23.5%) | **SURVIVES** | — |
| H5 | Damage at customer unpacking | Consistent | **Contradicts** — damage would not be batch-specific; W16/W17 same unpacking process | Contradicts (would be found equally at all deliveries) | Contradicts (would not have a batch onset) | Contradicts (rate would vary by unpacking event) | **ELIMINATED** | Which: "IS NOT — W16 and W17 unaffected"; When: no onset pattern |

### Investigation Priority After Elimination

Surviving: H1 (supplier change), H4 (assembly jig change). Partial: H2 (packing — low priority).

**Next actions:**
1. Request supplier change notification log for W18 raw material
2. Review internal ECO log for assembly station changes between W17 and W18
3. Retrieve crimping jig maintenance and calibration records for the period
4. Retain sample parts from W18 for CMM measurement of pin 3 geometry

---

## Writing a Verified Problem Statement After Elimination

After elimination, surviving hypotheses must be distinguished from the problem statement. The problem statement describes what IS known from evidence. Surviving hypotheses are what will be investigated next.

### Formula

> "On [part number + revision], [defect description with measurement] was found [where] affecting [quantity/rate] of [which batches]. The defect first appeared [when]. Investigation has confirmed [any confirmed facts from elimination]. Hypotheses under active investigation: [H1 and H4]. The following have been eliminated with evidence: [H3 — gauge failure eliminated by X; H5 — unpacking damage eliminated by Y]."

### Worked example (from above)

> "On ECU-4472 rev C, connector pin 3 was found laterally deflected 12–18° at customer incoming inspection (Germany Plant), affecting 23.5% (47/200) of units in batches W18 and W19 shipped 2026-04-28 to 2026-05-02. No defects were found in batches W16 or W17 (0/600 units). The defect was not detected at our 100% outgoing inspection. Active hypotheses: (H1) supplier pin material or geometry change at W18; (H4) assembly crimping jig change between W17 and W18. Eliminated: (H3) outgoing gauge failure — contradicted by batch-specific escape pattern and no other part number complaints; (H5) customer unpacking damage — contradicted by batch onset and zero rate in W16/W17 under identical handling."

**Rules for the problem statement:**
- Contains only documented facts — no hypothesis language ("may have been," "probably," "we think")
- Eliminates ambiguity in quantity (specific count and rate, not "several" or "some")
- Names the active hypotheses explicitly so the next investigator knows where to focus
- Names the eliminated hypotheses with their contradiction so they are not re-opened without new evidence

---

## Transition from Is/Is-Not to 5-Why or Fishbone

### When to go to 5-Why directly

Use 5-Why directly when:
- Only one or two hypotheses survive and they are specific and mechanistic (e.g., "crimping jig worn")
- The surviving hypothesis has strong physical or data support (Confirmed in fishbone terms)
- The cause chain is likely short (3–4 levels) and within a single process domain

**5-Why entry point:** The surviving hypothesis becomes Why 1, stated as a confirmed or probable fact.

Example: "Why did pin 3 deflect laterally during assembly? — Because the crimping jig locating pocket for pin 3 shows 0.22 mm wear (limit: 0.05 mm), confirmed by CMM measurement."

### When to go to Fishbone first

Use Fishbone when:
- Multiple hypotheses survive and they span different 6M categories (Man, Machine, Material)
- The scope is broad and the team needs to ensure no cause category is missed
- The problem is complex and the investigation will involve multiple people across functions

**Fishbone entry point:** Map surviving hypotheses to their 6M category and use them as the starting point for structured brainstorming in those categories. Do not re-brainstorm eliminated categories — the Is/Is-Not work has already scoped them out.

Example handoff:
- H1 (supplier material change) → Material branch, starting cause: "Supplier changed pin geometry or material specification at W18"
- H4 (assembly jig change) → Machine branch, starting cause: "Crimping jig modified or degraded between W17 and W18"

**What Is/Is-Not feeds into the Fishbone:**
- IS NOT entries restrict which causes can survive evaluation — any fishbone cause that contradicts an IS NOT is Unlikely without further evidence
- The IS "When" and "Which" entries point directly to which sub-causes to confirm first (those that match the timing or batch boundary)

### Carrying the Is/Is-Not into NCR and 8D

The Is/Is-Not "What IS" entry is the non-conformance description for the NCR. The eliminated hypotheses belong in the 8D D2 (problem description) section, not the D4 (root cause) section. The surviving hypotheses are D4 inputs.

Auditors will look for consistency between the D2 problem description and the Is/Is-Not matrix. If they do not match, the 8D is internally inconsistent and will be rejected.

---

## Source: skills/problem-solving/pdca-improvement/SKILL.md

---
name: pdca-improvement
description: >-
  Run a PDCA cycle, Plan Do Check Act improvement cycle, or structured improvement project.
  Guides through problem analysis, piloting, verification, and standardisation. Distinguished
  from 8D: PDCA is for proactive improvement initiatives, 8D is for reactive defect response.
  Use for process optimisation, lessons learned implementation, and quality objectives.
license: MIT
metadata:
  author: RBraga01
  version: "1.1"
  iso-9001: "10.3"
  iatf-16949: "10.3.1"
  domain: quality-engineering
  subdomain: problem-solving
  industries: automotive,electronics,aerospace,medical,general
  status: approved
  created: "2026-06-01"
  last_updated: "2026-06-06"
  updated_by: migmcc
  reviewed_by: RBraga01
  standard_edition: "ISO 9001:2015"
---

# PDCA Improvement Cycle

## When to use

Use PDCA for:
- Continuous improvement initiatives (not problem reactions — use 8D for that)
- Implementing a process optimisation with uncertain outcome
- Piloting a change before full deployment
- Structured improvement from lessons learned or audit findings
- Meeting a quality objective that requires a new approach

**Key distinction from 8D:** PDCA is proactive or slow-burn improvement. 8D is reactive to a specific defect or failure. Both use root cause analysis, but PDCA has a broader scope and a pilot step before full deployment.

**When PDCA is used for corrective action** (e.g., responding to an audit finding or recurring NC): a [Corrective Action Request (CAR)](../../documentation/car-corrective-action/) must also be opened to document root cause, actions, and VOE per ISO 9001 §10.2. PDCA is the improvement methodology; the CAR is the governance record.

## Prerequisites

- Improvement goal defined (with target metric)
- Baseline data available (current performance)
- Owner and resources assigned

---

## Workflow

### PLAN — Analyse and define the approach

1. **Define the current situation**
   - What is the problem or improvement opportunity?
   - What is the current measured performance? (baseline)
   - What is the target? (SMART: Specific, Measurable, Achievable, Relevant, Time-bound)

2. **Analyse root cause**
   - Use [Fishbone](../fishbone-analysis/) and [5-Why](../5why-root-cause/) to understand why current performance is below target
   - Use data: Pareto charts, run charts, capability studies

3. **Develop the improvement plan**
   - What specific actions will close the gap?
   - Who is responsible for each action?
   - What is the timeline?
   - What resources are needed?
   - What risks does the change introduce? Review the applicable PFMEA — does this change add or remove a failure mode? Does it affect any existing prevention or detection control?

4. **Define the pilot scope**
   - Which process, line, or area will pilot the change?
   - What volume or duration is needed to validate effectiveness? Define this before starting the pilot — do not decide after seeing results.
   - What will you measure, and how?

**Pilot volume guidance:** as a minimum, the pilot should produce enough output to statistically distinguish signal from noise. Typical references:
- Process capability change: minimum 30 consecutive cycles or units under the new conditions
- Defect rate reduction: minimum volume to yield at least 5 expected events at the old rate (e.g., if baseline defect rate = 2%, minimum pilot = 250 units)
- Time-dependent improvement: minimum 4 weeks of sustained performance data

**Plan gate:** Is the root cause understood? Is the pilot scope defined with explicit volume/duration minimum? Is success measurable against a specific target?

---

### DO — Implement (pilot)

1. Implement the planned changes in the pilot scope only
2. Train affected personnel
3. Execute and collect data during the pilot
4. Document what actually happened vs. what was planned (deviations are data)

**Do not deploy broadly at this stage.** The pilot is to learn, not to commit.

---

### CHECK — Verify results

Compare pilot results against the Plan targets:

| Metric | Baseline | Target | Pilot result | Gap closed? |
|--------|----------|--------|--------------|-------------|
| [KPI 1] | | | | |
| [KPI 2] | | | | |

Ask:
- Did the change produce the expected improvement?
- Were there any unexpected negative effects?
- Is the improvement sustainable (stable over time) or a one-time effect?
- Was the pilot conducted under representative conditions (same operators, same materials, same environment as production)?

**Check gate:**
- If target met → proceed to Act (standardise)
- If partially met → revise Plan, run another Do-Check cycle
- If not met → return to Plan, re-analyse root cause

---

### ACT — Standardise or revise

**If the pilot succeeded:**

1. Update process documents: work instructions, control plan, PFMEA — each must be revised to reflect the new process
2. If the PFMEA includes failure modes related to the improved process step, update affected S/O/D ratings and AP
3. Deploy to all applicable areas (horizontal deployment) — list each area and confirm deployment is complete
4. Train all affected personnel — training records required
5. Set up ongoing monitoring to confirm the improvement holds
6. Share lessons learned — enter in lessons learned register

**If the pilot failed or was inconclusive:**

1. Document what was learned
2. Revise the Plan (new root cause hypothesis or new approach)
3. Repeat the cycle

**Do not standardise an unverified change.** Standardising a failed pilot permanently embeds the problem.

---

### Required PDCA documentation (ISO 9001 §10.3)

For the cycle to be auditable, the following records must exist at closure:

- [ ] Baseline measurement with data source and date
- [ ] Root cause analysis (fishbone or 5-Why output)
- [ ] Pilot plan with explicit volume/duration minimum and success criteria
- [ ] Pilot execution data (before/after comparison)
- [ ] Check gate decision (proceed / revise / restart) with supporting data
- [ ] Updated PFMEA, Control Plan, and Work Instructions (if applicable) with new revision numbers and approval dates
- [ ] Training records for all affected personnel
- [ ] Horizontal deployment log (areas assessed, actions taken)
- [ ] Lessons learned register entry

---

## Gate summary

| Gate | Key question | Pass criterion |
|------|-------------|----------------|
| Plan | Is root cause understood and pilot scoped? | Root cause confirmed, target measurable, pilot volume/duration defined |
| Do | Was the pilot conducted as planned? | Actions implemented, data collected per plan |
| Check | Did the change achieve the target? | Target metric met or exceeded; minimum pilot volume reached |
| Act | Are documents updated and deployment complete? | PFMEA/CP/WI revised, training done, horizontal deployment documented |

---

## Common mistakes

- **Skipping Plan** — jumping straight to Do without understanding root cause
- **Undefined pilot volume** — deciding after the pilot how much data is "enough"; set the minimum before starting
- **Skipping Check** — deploying broadly after pilot without verifying data
- **Treating Act as permanent before Check** — standardising before the pilot result is confirmed
- **One cycle only** — PDCA is a cycle; if the first cycle doesn't solve it, run another
- **Using PDCA for urgent defects** — for customer complaints or safety issues, use 8D instead
- **Not updating PFMEA** — a process change without PFMEA update leaves the risk register inaccurate

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
| 1.1 | 2026-06-04 | @migmcc | Polished PDCA cycle workflow and D6 verification integration |

---

## Source: skills/problem-solving/pdca-improvement/references/pdca-examples.md

---
name: pdca-examples
type: reference
parent_skill: pdca-improvement
author: RBraga01
version: "1.0"
status: approved
created: "2026-06-06"
last_updated: "2026-06-06"
updated_by: migmcc
reviewed_by: RBraga01
license: MIT
---

# PDCA Worked Examples and Gate Criteria Reference

Three complete PDCA worked examples with gate criteria, failure modes, and methodology selection guidance.
Use alongside the [pdca-improvement](../SKILL.md) skill.

> **Scope:** This document covers worked examples, phase gate checklists, a PDCA vs 8D vs DMAIC selection decision table, and common failure patterns by phase. For the PDCA workflow steps, pilot volume guidance, and required documentation list, see [pdca-improvement SKILL.md](../SKILL.md).

---

## Worked Example 1 — Manufacturing Process Improvement

**Context:** An automotive connector assembly line produces a solder joint defect (cold joint) on terminal type T-4 at a rate of 4,800 PPM over the last three months. The process engineer wants to reduce this to below 500 PPM without a full line redesign.

---

### PLAN

**Current situation:**
- Defect: Cold solder joint on T-4 terminals, identified at automated optical inspection (AOI)
- Baseline: 4,800 PPM over 13 weeks of production data (n = 62,000 units)
- Target: ≤ 500 PPM sustained for 8 consecutive weeks
- Owner: Process Engineer — Maria Santos
- Timeline: 12 weeks total cycle

**Root cause analysis:**
- Fishbone identified three Confirmed causes:
  - Machine: Reflow oven zone 3 temperature drifting 8–12°C low during high ambient temperature periods (confirmed by 6-week data log review)
  - Method: Solder paste volume specification not updated after component change in ECO-2025-144 — T-4 pads now require 15% more paste volume; current WI specifies the old volume
  - Method: No incoming solder paste viscosity check — paste at viscosity limits passes IQC but produces voids
- 5-Why on zone 3 drift: Thermocouple calibrated annually; calibration interval too long for this drift rate → root cause: no periodic drift verification between calibrations

**Improvement plan:**
| Action | Owner | Due | Target metric |
|---|---|---|---|
| Update oven zone 3 thermocouple calibration interval from annual to quarterly | Maintenance | Week 2 | Calibration record |
| Add in-shift temperature verification: operator records zone 3 reading at shift start | Quality | Week 2 | Updated WI + control plan |
| Update solder paste volume specification in WI rev 7 per ECO-2025-144 | Engineering | Week 3 | WI rev 7 approved |
| Add incoming paste viscosity check to IQC procedure | Quality | Week 3 | IQC procedure updated |

**Pilot scope:** Line 2, T-4 terminals only. Minimum pilot: 6,000 units (to detect 500 PPM with statistical confidence; at baseline 4,800 PPM, 6,000 units expected 29 defects under old conditions; 500 PPM target = 3 expected — clearly distinguishable). Duration: minimum 4 weeks.

**Plan gate — passed:** Root cause confirmed with data; pilot scope defined with explicit volume and duration minimum; target is SMART.

---

### DO

- WI rev 7 published to line 2 workstations in Week 3
- Zone 3 thermocouple recalibrated in Week 2; reading confirmed 6°C low — adjusted
- In-shift temperature verification log started Week 2
- Incoming paste viscosity check added to IQC from Week 3 receipt
- Pilot started Week 4 after all changes in place
- Deviation noted: solder paste supplier delivery delay — pilot started 4 days late; minimum duration and volume targets unchanged

**Do gate — passed:** All planned changes implemented; pilot started; data collection running per plan; deviation documented.

---

### CHECK

**Results at Week 8 (pilot Week 4 complete):**

| Metric | Baseline | Target | Pilot result | Gap closed? |
|---|---|---|---|---|
| Solder cold joint PPM — T-4 | 4,800 | ≤ 500 | 380 PPM (n = 7,200 units, 2.7 defects) | Yes |
| Zone 3 temperature deviation | ±10°C drift observed | ±2°C | ±1.8°C over pilot period | Yes |
| Paste volume conformance | Not measured (old WI) | 100% within spec | 98.4% in spec | Yes (marginal) |

**Unexpected effect:** AOI false reject rate increased 0.6% due to changed paste volume — solder fillet profile different from programmed reference. AOI programme update required before full deployment.

**Check gate — passed with condition:** Target PPM achieved; improvement is sustained over 4 weeks; unexpected AOI programme effect noted and must be resolved before full deployment.

---

### ACT

- WI rev 7 deployed to lines 1, 3, 4 after AOI programme update confirmed in Week 9
- PFMEA updated: zone 3 temperature drift added as new failure mode; in-shift verification listed as prevention control; S/O/D revised
- Control plan updated: in-shift zone 3 verification added; paste viscosity check added at IQC
- Training records completed for all operators on lines 1–4 and IQC technicians
- Horizontal deployment: T-3 and T-5 terminal variants reviewed — same oven, same paste volume change required; ECO confirmed both affected; WI updated for both
- Result at Week 16 (8 weeks post-deployment): 290 PPM across all lines — target sustained
- Lessons learned: ECO implementation must include a mandatory review of affected WI parameters, not just a document number update

**Act gate — closed:** Target sustained for 8 weeks; all documents updated; horizontal deployment completed and confirmed; lessons learned recorded.

---

## Worked Example 2 — Supplier Quality Issue

**Context:** A supplier (SubCo) for aluminium housings has a repeat non-conformance: surface roughness Ra exceeding 1.6 µm (limit) at the sealing face. Three 8D corrective actions have been issued in 18 months with no sustained improvement. PDCA opened as a proactive improvement with SubCo's quality manager.

---

### PLAN

**Current situation:**
- Defect: Ra > 1.6 µm at sealing face (specification limit); measured at our incoming inspection
- Baseline: 3.2% non-conformance rate over 18 months (n = 8,400 units inspected); three previous 8D actions did not sustain improvement beyond 60 days
- Target: ≤ 0.3% sustained for 12 weeks (to match IATF 16949 zero-defect incoming requirement at this volume)
- Owner: Supplier Quality Engineer — James Okafor (with SubCo QM as co-owner)
- Timeline: 16 weeks

**Root cause analysis — with SubCo team:**
- Previous 8D actions addressed: cutting insert type (replaced twice), coolant flow rate (increased), and operator training. None sustained.
- This PDCA used multi-vari study (positional vs cyclical vs temporal) — identified temporal pattern: Ra non-conformance rate doubles in the first 20 parts after a tool change, then stabilises
- Root cause confirmed: new inserts are not run-in before production; the cutting edge requires 15–20 cuts to reach stable geometry; parts produced during this run-in window exceed Ra limit
- Why was this not caught before: SubCo's SPC chart does not differentiate first-off-after-tool-change from steady-state production; the non-conforming parts blend into the chart and the pattern was invisible

**Improvement plan:**
| Action | Owner | Due |
|---|---|---|
| Implement tool change run-in protocol: first 20 parts after tool change segregated and scrapped | SubCo Process Engineer | Week 3 |
| Update SubCo control plan to flag tool change events and apply 100% inspection for next 25 parts | SubCo Quality Manager | Week 3 |
| Add tool change event marker to SPC chart to enable temporal analysis | SubCo Quality Manager | Week 4 |
| Update PPAP process flow to include run-in protocol | SubCo Engineering | Week 5 |

**Pilot scope:** One CNC machine (machine 3) processing housing variant HX-200. Minimum pilot: 3 complete tool life cycles (each cycle ~400 parts) = 1,200 parts minimum, 6 weeks minimum.

**Plan gate — passed:** Root cause confirmed with multi-vari data; pilot scope defined with explicit cycle and volume minimum; target measurable.

---

### DO

- Run-in protocol implemented on machine 3 Week 3; first tool change conducted under new protocol observed by SQE
- 100% inspection of first 25 parts after tool change started Week 3
- SPC chart updated with tool change markers Week 4
- Run-in parts from three tool changes: 20 parts + 20 parts + 20 parts scrapped (first 20 were Ra > 1.6 µm in all three cases — confirming the cause mechanism)

**Do gate — passed:** Protocol implemented; run-in confirmation data collected; scrap documented and accepted by SubCo as cost of validation.

---

### CHECK

| Metric | Baseline | Target | Pilot result (1,200 parts, 3 tool cycles) |
|---|---|---|---|
| Ra non-conformance rate — steady state | 3.2% | ≤ 0.3% | 0.0% (0/1,140 steady-state parts) |
| Ra non-conformance — run-in parts (scrapped) | Part of 3.2% | Scrapped | 100% of run-in parts exceeded Ra limit — confirms mechanism |
| Scrap increase | Not tracked separately | Quantified | +20 parts per tool change (run-in protocol); tool life = ~400 parts → +5.0% scrap rate on machine 3 |

**Check gate — passed with cost note:** PPM target met for steady-state production. Run-in scrap rate (+5.0%) is a trade-off and was accepted in the Plan — business case confirmed it is preferable to non-conformance at the customer. Financial impact to be reviewed quarterly.

---

### ACT

- Run-in protocol deployed to all 6 CNC machines at SubCo processing this housing variant
- PPAP updated to include run-in protocol and 100% first-25 inspection after tool change
- SubCo PFMEA updated: "tool change without run-in" added as failure mode
- Annual supplier audit checklist updated to verify run-in protocol compliance
- 12-week monitoring period: 0 Ra non-conformances at incoming inspection (n = 6,800 units)
- Lessons learned: SPC charts without event markers mask temporal patterns; SPC chart design must include process event logging for tool changes, material changes, operator changes

**Act gate — closed:** Target sustained 12 weeks; PPAP and PFMEA updated; supplier audit checklist updated; lessons learned recorded.

---

## Worked Example 3 — Internal Audit Finding

**Context:** An internal audit (ISO 9001 §8.4 — external providers) found that 6 of 12 active suppliers do not have current approved supplier agreements (ASAs). Finding classified as Major Non-Conformance. PDCA opened to close the systemic gap.

---

### PLAN

**Current situation:**
- Finding: 50% of active suppliers (6/12) have expired or missing Approved Supplier Agreements
- Baseline: 6 ASAs expired or missing; renewal process is manual and tracked in a spreadsheet that is not monitored for expiry dates
- Target: 100% of active suppliers with current ASAs; automated expiry monitoring in place; sustained for two subsequent internal audit cycles
- Owner: Supplier Quality Manager — Ana Ferreira
- Timeline: 10 weeks

**Root cause analysis (5-Why):**
1. Why are 6 ASAs expired or missing? — No system alerts when an ASA is approaching expiry
2. Why is there no system alert? — ASAs are tracked in a spreadsheet without conditional formatting or calendar integration
3. Why was the spreadsheet not designed with alerts? — When the ASA process was established (2019), the QMS did not have a digital workflow tool; the spreadsheet was a temporary solution that became permanent
4. Why was the temporary solution not replaced? — No one was assigned ownership of the ASA renewal process; document control and supplier quality each assumed the other was responsible
5. Root cause: No defined process owner for ASA renewals; no system-based monitoring of expiry dates

**Improvement plan:**
| Action | Owner | Due |
|---|---|---|
| Assign ASA renewal process owner role (SQE with monthly review obligation) | Supplier Quality Manager | Week 1 |
| Renew all 6 expired ASAs — contact supplier, update terms, obtain signatures | SQE (Ana Ferreira) | Week 6 |
| Migrate ASA tracking to QMS module with automated 90-day and 30-day expiry alerts | IT/Quality Systems | Week 8 |
| Add ASA expiry check to monthly supplier scorecard review agenda | Supplier Quality Manager | Week 2 |
| Update internal audit checklist: ASA coverage is now a mandatory check with count of active vs valid | Quality Manager | Week 3 |

**Pilot scope (not applicable):** This is a compliance and systemic process improvement, not a production process change requiring a pilot. The "pilot" is the implementation itself, validated by the following internal audit. Success criterion: next internal audit (scheduled Week 24) finds 0 expired ASAs.

**Plan gate — passed:** Root cause confirmed (no process owner, no system monitoring); target measurable; timeline defined.

---

### DO

- Process owner assigned in Week 1; responsibility documented in job description
- All 6 expired ASAs contacted in Week 2; 4 renewed by Week 4, 2 outstanding (supplier review cycles)
- QMS module configuration started Week 3; 90-day and 30-day alerts configured and tested Week 7
- ASA expiry added to monthly scorecard review agenda Week 2
- Internal audit checklist updated Week 3

**Do gate — passed:** All planned actions implemented within timeline; 2 renewals pending supplier response (tracked, not blocked).

---

### CHECK

| Metric | Baseline | Target | Result at Week 10 |
|---|---|---|---|
| ASAs current | 6/12 (50%) | 12/12 (100%) | 11/12 (91.7%) — 1 supplier renewal still pending legal review |
| System-based expiry monitoring | None | Automated 90 + 30 day alerts | Active and tested; 2 alerts triggered as expected |
| Process owner assigned | None | Defined and documented | Confirmed |

**Check gate — conditional pass:** 11/12 achieved; 1 pending due to supplier legal process outside our control. QMS alerts functioning. Condition: final ASA to be obtained within 4 weeks; escalation plan in place (supplier on watch status).

---

### ACT

- 12th ASA obtained Week 13 — 100% achieved
- QMS module live for all ASAs; expiry alerts functioning
- Lessons learned: temporary tracking solutions (spreadsheets) should have a defined review date and replacement plan; QMS module should have been used from process establishment
- Finding closed with documented evidence: all 12 ASAs current, system monitoring active, process owner documented
- Next internal audit (Week 24): 0 expired ASAs found; finding closed

**Act gate — closed:** 100% target achieved and sustained through next audit cycle; systemic controls in place; lessons learned recorded.

---

## Gate Criteria Checklist by Phase

### PLAN Gate

| Criterion | Check |
|---|---|
| Problem statement is specific, measurable, and time-bounded | ☐ |
| Baseline data collected from a reliable source with date range and sample size | ☐ |
| Target is SMART: includes specific value, measurement method, and due date | ☐ |
| Root cause analysis completed using Fishbone and/or 5-Why | ☐ |
| Root cause supported by data — not assumed or based on team opinion | ☐ |
| Improvement actions mapped to specific root causes (not generic) | ☐ |
| Pilot scope defined with explicit minimum volume and/or duration | ☐ |
| Success criteria defined before pilot starts (not after seeing results) | ☐ |
| PFMEA reviewed for impact of proposed change | ☐ |

### DO Gate

| Criterion | Check |
|---|---|
| All planned changes implemented as defined in the Plan | ☐ |
| Training completed for all personnel involved in the pilot | ☐ |
| Data collection running per plan (measurement method, frequency, responsible person) | ☐ |
| Deviations from the plan documented (deviations are data — do not hide them) | ☐ |
| Minimum pilot volume or duration not yet reached (if still in DO) | ☐ |

### CHECK Gate

| Criterion | Check |
|---|---|
| Pilot volume or duration minimum has been met | ☐ |
| Before/after comparison table completed with actual data (not estimated) | ☐ |
| Target metric evaluated: met / partially met / not met | ☐ |
| Unexpected effects (positive or negative) documented | ☐ |
| Improvement is stable over time (not a one-time spike) | ☐ |
| Pilot conditions were representative (same operators, materials, environment as production) | ☐ |
| Decision made: proceed to Act / revise Plan / restart — with supporting rationale | ☐ |

### ACT Gate

| Criterion | Check |
|---|---|
| Work Instructions updated (revision number and approval date confirmed) | ☐ |
| Control Plan updated (new controls, frequencies, reaction plans) | ☐ |
| PFMEA updated (new failure modes, updated S/O/D, new controls) | ☐ |
| Training records completed for all affected personnel | ☐ |
| Horizontal deployment assessed: list of similar processes/products reviewed | ☐ |
| Horizontal deployment actions documented and completed (or N/A with justification) | ☐ |
| Ongoing monitoring established (KPI owner, frequency, review mechanism) | ☐ |
| Lessons learned registered | ☐ |
| If PDCA was triggered by audit finding or CAR: CAR closure evidence attached | ☐ |

---

## PDCA vs 8D vs DMAIC Decision Table

| Factor | PDCA | 8D | DMAIC |
|---|---|---|---|
| **Primary trigger** | Proactive improvement opportunity; audit finding; quality objective | Customer complaint; field escape; specific defect event | Chronic recurring defect; capability gap; statistical investigation needed |
| **Root cause known?** | Partially or not yet | No | No — must be statistically confirmed |
| **Containment required?** | No | Yes (D3 — immediate action to stop escapes) | No — no active escape |
| **Timeline** | Weeks to months | Days to weeks | Weeks to months |
| **Statistical depth** | Data-supported; basic SPC and trend analysis | Data-informed; qualitative tools acceptable | Full hypothesis testing; DOE; capability studies |
| **Output** | Standardised improved process; updated documents | Specific corrective action; PFMEA/CP update; 8D report | Optimised process capability; sustained Cpk improvement |
| **When to use** | Process optimisation; lessons learned; audit NC | Single complaint; escape; containment needed | Cpk improvement needed; repeated 8D or PDCA failures |
| **ISO 9001 reference** | §10.3 | §10.2 | §10.3 |
| **IATF 16949 reference** | §10.3.1 | §10.2.3 | §10.1 |
| **Can convert to another?** | If defect is active → open 8D first; run PDCA in parallel | If root cause proves systemic → escalate to DMAIC | If single event → close DMAIC, open 8D for immediate action |

**Decision guidance:**
- Customer complaint with containment needed → 8D
- Same 8D root cause recurs after three corrective actions → DMAIC
- Proactive improvement with known or suspected root cause → PDCA
- Capability below Cpk 1.33 with unknown cause → DMAIC
- Audit finding with systemic process gap → PDCA (with CAR for ISO 9001 compliance)
- Improvement from lessons learned with agreed approach → PDCA

---

## Common PDCA Failures by Phase

### PLAN failures

| Failure | Consequence | Prevention |
|---|---|---|
| Root cause not confirmed before defining actions | Actions address symptoms; problem recurs | Require data or physical evidence before classifying a cause as Confirmed |
| Pilot scope undefined or left to "whatever we can get" | Inconclusive results; cannot distinguish signal from noise | Define minimum volume and duration in writing before starting |
| Target defined as a direction ("reduce defects") not a value ("reduce from 3.2% to 0.3%") | No objective CHECK gate possible | Require a specific numeric target and measurement method in Plan |
| PFMEA not reviewed | Change introduces new risks not captured in the risk register | Mandatory PFMEA review step before Plan gate sign-off |

### DO failures

| Failure | Consequence | Prevention |
|---|---|---|
| Partial implementation — some changes made, others deferred | Results reflect a mixed state; impossible to attribute improvement to specific changes | Require all Plan changes to be in place before starting data collection |
| Pilot conditions not representative | CHECK results don't transfer to full production | Explicitly verify pilot conditions match production (operators, materials, shifts) |
| Data not collected during pilot | Nothing to CHECK | Assign a data collection owner in the Plan; verify at start of DO |

### CHECK failures

| Failure | Consequence | Prevention |
|---|---|---|
| Declaring success before minimum volume reached | Appears to work based on noise, not signal | Enforce minimum volume/duration as a hard gate |
| Ignoring negative side effects | Improvement in Y causes degradation in X; overall result is neutral or worse | Measure at least two KPIs: the target metric and one downstream process indicator |
| Treating "better than before" as "target met" | Insufficient improvement is standardised | Compare to the specific target, not just to baseline |

### ACT failures

| Failure | Consequence | Prevention |
|---|---|---|
| Documents updated in name only (revision number changed, content unchanged) | Process reverts within months; auditors find inconsistency | Verify document content matches new process during Act gate review |
| Horizontal deployment not assessed | Same root cause exists in adjacent lines/products; recurrence elsewhere | Require a horizontal deployment log listing every similar process and the action taken or N/A justification |
| PDCA closed at implementation, not at sustained performance | Improvement not confirmed as durable | Schedule a follow-up data review 4–8 weeks after Act; close only after sustained result confirmed |
| Lessons learned skipped under time pressure | Same failure recurs on the next project | Lessons learned is a mandatory ACT gate criterion — not optional |

---

## Source: skills/problem-solving/quality-problem-zeroing/SKILL.md

---
name: quality-problem-zeroing
description: >-
  Run quality problem zeroing, perform 双归零 (double-five zeroing), write a
  technical zeroing report, write a management zeroing report, or close an
  aerospace quality problem under GB/T 29076—2021. Covers problem reporting,
  emergency response, team formation, technical zeroing (定位准确、机理清楚、问题复现、
  措施有效、举一反三), management zeroing (过程清楚、责任明确、措施落实、严肃处理、
  完善规章), evidence gates, review, and closure. Use for aerospace or complex
  equipment failures, defects, accidents, repeated problems, human-responsibility
  problems, and issues requiring a formal closed-loop investigation.
license: MIT
metadata:
  author: Crow12138
  version: "1.0"
  iso-9001: "10.2 (supporting)"
  gbt-29076: "2021"
  domain: quality-engineering
  subdomain: problem-solving
  industries: aerospace,defense,aviation,complex-equipment,manufacturing
  status: approved
  created: "2026-07-04"
  last_updated: "2026-07-04"
  updated_by: Crow12138
  reviewed_by: RBraga01
  standard_edition: "GB/T 29076—2021"
---

# Quality Problem Zeroing

## Goal

Close a quality problem with objective evidence that:

1. Locates and explains the technical failure;
2. Removes every confirmed root cause and verifies the result;
3. Identifies and repairs management weaknesses where required;
4. Extends the learning to other exposed products, processes, and organizations; and
5. Leaves no action, evidence, approval, or known residual risk hidden at closure.

GB/T 29076—2021 is the controlling source for scope, sequence, terminology, and closure.
Treat other methods and publications as supporting guidance only. Read the
[standard method guide](references/gbt-29076-2021-method-guide.md) whenever a
formal scope decision, report, or closure review is required.

## When to Use

Use this skill for an aerospace or complex-equipment quality problem that requires formal
technical zeroing, management zeroing, double-five zeroing, an Annex A-aligned report, or a
closure review. It is especially relevant to failures, defects, accidents, batch problems,
repeated problems, field or delivered-product issues, human-responsibility problems, and
problems caused by missing or inadequate rules.

Use a narrower root-cause skill when the user only needs one analysis tool. Use 8D instead
when the customer or sector mandates an 8D response, then cross-check whether the same event
also requires GB/T 29076—2021 zeroing.

## Required Execution Checklist

- [ ] Record the product, problem phenomenon, operating state, time, location, environment, detector, and affected parties.
- [ ] Protect the scene, product state, records, data, and physical evidence when safe to do so.
- [ ] Assess safety, property, mission, delivered-product, and escalation risk immediately.
- [ ] Identify, segregate, stop, recall, or inspect suspect product as required.
- [ ] Form a cross-functional team with a named leader, authority, resources, and stakeholder representation.
- [ ] Decide and document whether technical zeroing, management zeroing, or both apply.
- [ ] Start technical zeroing first when both apply; never substitute it for management zeroing.
- [ ] Build an evidence-backed technical causal chain from the lowest failed unit to the observed effect.
- [ ] Identify all root causes; keep unproven explanations labelled as hypotheses.
- [ ] Reproduce or otherwise verify the problem mechanism using an approved method.
- [ ] Implement correction and root-cause corrective actions with owners and dates.
- [ ] Verify effectiveness, sufficiency, and adverse effects before ending emergency controls.
- [ ] Complete horizontal deployment across relevant products, processes, and organizations.
- [ ] Reconstruct the management process and assign responsibility from duties and evidence.
- [ ] Implement management actions and embed them in controlled rules, standards, or procedures.
- [ ] Complete the required report, evidence list, signatures, and independent review.
- [ ] Close only after all actions are complete, effectiveness is verified, and residual issues are explicit.

## Workflow

### 1. Report and preserve the problem

Create the initial problem record before analysis changes the evidence. Capture:

- Product name, identifier, batch, configuration, development or service stage, and responsible organizations;
- Exact phenomenon, expected requirement, actual result, operating state, sequence, time, location, and environment;
- Who detected the problem and how it was detected;
- Available logs, measurements, photographs, samples, remains, test equipment state, and operator records;
- Actual and potential effect on safety, mission, customer, schedule, cost, performance, and delivered product.

Do not dismantle, clean, power-cycle, overwrite logs, swap parts, or repeat a destructive
test until the evidence impact is assessed and the action is authorized.

### 2. Apply emergency response

When harm may continue or worsen:

1. Identify and isolate suspect product;
2. Stop work, delivery, use, or recall product where justified;
3. Check related stock and the potentially affected population;
4. Apply a temporary control against the apparent cause;
5. Assess downstream and delivered-product risk;
6. Confirm severity and notify affected internal and external parties.

Keep emergency response separate from permanent corrective action. Remove it only after a
more effective root-cause action is implemented and verified.

### 3. Form and govern the team

Include functions that own or understand the affected design, process, test, production,
quality, supplier, use, and customer interfaces. Name:

- The team leader and decision authority;
- Each member's responsibility;
- Required resources, constraints, milestones, communication cadence, and escalation route;
- Customer, supplier, or other stakeholder representatives where affected.

The quality function controls the plan, conformity check, review, action tracking, and
retention of evidence. The responsible organization performs the investigation.

### 4. Decide the zeroing route

Apply **technical zeroing** when technical causes or consequences fall within the standard's
scope, including significant design, production, test, field, delivered-product, batch,
repeat, cost, schedule, performance, effectiveness, or system-application issues.

Apply **management zeroing** to:

- Repeated quality problems;
- Human-responsibility problems such as knowingly disregarding a rule or violating an operation;
- Problems caused by missing or inadequate rules;
- Problems designated for management zeroing by the authorized management system.

If both scopes apply, perform both and begin with technical zeroing. Record the route,
severity level, responsible organization, target dates, and rationale. Do not assume every
technical issue automatically requires punishment or management zeroing.

### 5. Perform technical zeroing

#### 5.1 Locate exactly — 定位准确

Determine the exact process, product, assembly, component, part, electronic component,
software element, interface, test equipment, or operation where the problem originates.
Reach the lowest failed unit supported by evidence and state its abnormal condition.

Check whether the source is the product, support equipment, test method, environment, or
operation. Use controlled substitution only when it preserves evidence and its result is
not mistaken for proof of mechanism.

**Gate:** The location and affected boundary are specific, evidence-backed, communicated,
and accepted by relevant parties. “The system failed” or “the supplier part was bad” does
not pass.

#### 5.2 Explain the mechanism — 机理清楚

Build the causal chain from abnormal factor to final phenomenon. Identify all root causes
and explain the physical, chemical, electrical, software, human-system, or process mechanism.
Analyze the problem from three views:

- **Product:** design, material, component, interface, software, equipment, and environment;
- **Process:** requirements, design, procurement, production, inspection, test, change,
  delivery, use, maintenance, and rework;
- **Organization:** responsibility, competence, communication, resources, oversight, and rules.

Use evidence to eliminate alternatives. Suitable tools include engineering analysis, failure
analysis, statistics, FTA, FMEA, Fishbone, 5-Why, process analysis, DOE, and comparison.

**Gate:** Every claimed root cause has objective support, alternative explanations have a
documented disposition, and the causal chain explains all material observations.

#### 5.3 Reproduce or verify — 问题复现

Prepare and approve a verification plan defining:

- Hypothesis and expected phenomenon;
- Test article and controlled configuration;
- Variables, realistic conditions, instrumentation, data to collect, and acceptance criteria;
- Safety limits, stop criteria, responsibilities, and required approvals.

Execute the plan, preserve raw records, analyze results, and obtain stakeholder agreement.
Prefer a controlled, mechanism-driven reproduction over an uncontrolled repeat.

For obvious one-off damage, destructive modes, or conditions that cannot be reproduced,
document why a reproduction test is inappropriate and use theory, analysis, simulation,
inspection, or an equivalent verification method. Do not convert “not reproduced” into
“no problem.”

**Gate:** The result confirms or rejects the location and mechanism. A failed confirmation
returns the investigation to localization or mechanism analysis.

#### 5.4 Prove effective measures — 措施有效

Separate:

- **Correction:** removes the detected problem from affected product;
- **Corrective action:** removes each root cause to prevent recurrence;
- **Preventive or deployment action:** protects similar products not yet affected.

For every root cause, define a specific, measurable, executable, and verifiable action with
an owner, due date, required resources, affected configuration, and verification plan.
Evaluate whether each action may create a new or worse risk.

Implement approved actions in controlled design, process, test, software, training, or
standard documents. Compare post-action results with the original problem evidence.

**Gate:** Evidence proves the actions are effective and sufficiently cover the operating
range without unacceptable adverse effects. If not, return to mechanism analysis.

#### 5.5 Extend the learning — 举一反三

Search for the same or similar mechanism across:

- The affected unit, batch, produced items, work in progress, and not-yet-produced items;
- Related parts, interfaces, software, equipment, processes, suppliers, and product families;
- Other programs, departments, and organizations exposed to the same cause.

State the search population, method, findings, decisions, actions, owners, and evidence.
Issue lessons learned or alerts through the quality function. Embed approved learning in
design rules, process instructions, test requirements, training, databases, and tools.

**Gate:** Horizontal deployment is based on mechanism and exposure, not merely on the same
part number, and every finding has a disposition.

### 6. Perform management zeroing

#### 6.1 Make the process clear — 过程清楚

Reconstruct the complete event timeline and the process that created and detected the
problem. Compare required versus actual activities, records, decisions, controls, and
handoffs. Identify management weaknesses or gaps.

#### 6.2 Make responsibility explicit — 责任明确

Assign organizational and individual responsibility from documented duties, authority,
actions, omissions, and evidence. Distinguish direct and indirect, primary and secondary,
leadership and execution responsibility. Do not use responsibility analysis as a substitute
for systemic root-cause analysis.

#### 6.3 Implement management measures — 措施落实

Address every management weakness with specific, checkable actions. Define the responsible
department and person, completion date, resources, implementation evidence, and effectiveness
check. Plan and fund medium- and long-term actions explicitly.

#### 6.4 Treat the problem seriously — 严肃处理

Use the event to educate personnel and improve management. Apply training, communication,
coaching, or other organizational learning as appropriate. Apply administrative or economic
penalties only under applicable rules for confirmed repeated problems, human-responsibility
problems, falsification, or concealment. Recognize proactive discovery and effective
prevention where organizational policy allows.

#### 6.5 Perfect the rules — 完善规章

Convert management actions into controlled management-system documents, standards,
procedures, work instructions, or governance mechanisms. Define revision content, owner,
approval, effective date, deployment, training, and compliance verification.

**Management gate:** The process, responsibility, actions, treatment, and rules are each
supported by evidence and address the identified management causes.

### 7. Report, review, and close

Use the [zeroing report template](assets/zeroing-report-template.md). For formal work, include
the report sections and evidence described in Annex A of GB/T 29076—2021.

Before closure, an authorized review must verify:

- Route selection and scope were correct;
- Localization and mechanism are evidence-backed;
- Reproduction or alternative verification is adequate;
- Every technical and management cause has an implemented action;
- Effectiveness and adverse effects were evaluated;
- Horizontal deployment and document changes are complete;
- Reports, evidence identifiers, signatures, approvals, residual issues, and recommendations
  are complete.

Close and disband the team only after all actions are implemented and verified, lessons are
deployed, and affected parties are told that zeroing is complete.

If complete zeroing is not feasible for a flight test or in-orbit issue, document the reason,
analyze all plausible root causes, implement comprehensive controls against them, identify
residual risk, and obtain the required approval. Never label an unresolved hypothesis as a
confirmed cause.

## Supporting Methods and Related Skills

Read [engineering methods](references/engineering-methods.md) when choosing troubleshooting,
reproduction, measure-verification, controlled-experimentation, or workflow-control methods.
These methods are advisory and cannot weaken a standard gate.

- Use [NCR writing](../../documentation/ncr-writing/) to document a detected nonconformance
  when the organization's quality system requires an NCR before zeroing.
- Use [Is/Is-Not](../is-is-not-scoping/) to define the observed boundary.
- Use [Fishbone](../fishbone-analysis/) to generate candidate causes.
- Use separate [5-Why](../5why-root-cause/) chains for distinct causal paths.
- Use [PFMEA](../../risk-analysis/pfmea-process/) or
  [DFMEA](../../risk-analysis/dfmea-design/) to evaluate action risk and update prevention
  controls, and update the [Control Plan](../../planning/control-plan/) when process controls
  change.
- Use [CAR](../../documentation/car-corrective-action/) when the organization requires a
  separate corrective-action record for implementation and effectiveness follow-up.
- Use [8D](../8d-problem-solving/) when a customer or sector requires the 8D format; do not
  claim that an 8D automatically satisfies GB/T 29076—2021 without checking every zeroing gate.

Framework handoff:

`Detection / NCR → zeroing route decision → technical and/or management zeroing → corrective
action → FMEA / Control Plan / controlled-document updates → evidence review → closure`

## Validation Criteria

Reject closure if any answer is “no”:

1. Is the exact failure location proven to the lowest practicable unit?
2. Does the mechanism explain the observations and all confirmed root causes?
3. Was the mechanism reproduced or otherwise verified with justified evidence?
4. Does each action map to a confirmed cause and have implementation evidence?
5. Was action effectiveness verified over a relevant range and checked for adverse effects?
6. Was the exposed population searched across product, process, and organization?
7. Where management zeroing applies, are process, responsibility, actions, treatment, and
   rules complete?
8. Are evidence, controlled-document revisions, reviews, approvals, residual risks, and
   stakeholder communications traceable?

## Common Mistakes

- Treating repair, rework, sorting, inspection, or emergency containment as root-cause action;
- Confusing failure location with root cause or a plausible cause with a proven mechanism;
- Repeating a test without new instrumentation, controlled variables, or a stated hypothesis;
- Choosing only one convenient root cause when evidence supports multiple causes;
- Using “operator error” or “supplier problem” as the end of analysis;
- Punishing people by default instead of correcting the management system;
- Declaring “no similar issue found” without defining the searched population and method;
- Closing tasks in a workflow system and assuming the quality problem is therefore zeroed;
- Changing “完善规章” into the weaker phrase “improve the mechanism” without controlled documents;
- Adding a sixth normative technical-zeroing requirement; knowledge extraction belongs within
  horizontal deployment and document institutionalization.

## Output Content

Produce, as applicable:

1. Problem and impact statement;
2. Emergency response and affected-population record;
3. Team, plan, zeroing-route decision, and milestones;
4. Technical zeroing report with five evidence gates;
5. Management zeroing report with five evidence gates;
6. Cause-to-action-to-evidence traceability matrix;
7. Horizontal-deployment register;
8. Residual-risk and unresolved-item register;
9. Review checklist, approval decision, and closure statement.

## Output Format

At the start of each use, ask the user:

> "How would you like to receive the output?
> **A** — Structured Markdown (formatted tables and sections, ready to copy)
> **B** — Plain tables (simplified structure for Excel or Word)
> **C** — Narrative report (flowing text for a formal document or email)
>
> Default: A."

Adapt all output sections to the chosen format. If the platform or session context already defines a format preference, skip this question.

## Reference Files

- [GB/T 29076—2021 method guide](references/gbt-29076-2021-method-guide.md)
- [Engineering methods and research notes](references/engineering-methods.md)
- [Technical and management zeroing report template](assets/zeroing-report-template.md)

## Changelog

| Version | Date | Author | Change |
|---------|------|--------|--------|
| 1.0 | 2026-07-04 | @Crow12138 | Initial draft based on GB/T 29076—2021 |

---

## Source: skills/problem-solving/quality-problem-zeroing/assets/zeroing-report-template.md

---
name: zeroing-report-template
type: asset
parent_skill: quality-problem-zeroing
author: Crow12138
version: "1.0"
status: approved
created: "2026-07-04"
last_updated: "2026-07-04"
updated_by: Crow12138
reviewed_by: RBraga01
license: MIT
---

# Quality Problem Zeroing Report Template

Use the applicable sections. Mark an item “Not applicable” only with a documented reason.
Keep evidence identifiers traceable to controlled records.

## Document Control

| Field | Entry |
|------|-------|
| Report title | |
| Report number / revision | |
| Product / program | |
| Product identifier / batch / configuration | |
| Development or service stage | |
| Responsible organization | |
| Technical zeroing required? | Yes / No — rationale: |
| Management zeroing required? | Yes / No — rationale: |
| Classification / access restrictions | |
| Prepared by / date | |
| Checked by / date | |
| Required technical or ordering-organization co-signers | |
| Quality and relevant-department co-signers | |
| Reviewed by / date | |
| Approved by / date | |

## 1. Problem Intake and Emergency Response

### 1.1 Problem statement

| Item | Evidence-based description |
|------|----------------------------|
| Requirement / expected state | |
| Actual phenomenon | |
| Time and location | |
| Operating state and sequence | |
| Environment and test conditions | |
| Detection method and detector | |
| Affected product and population | |
| Actual and potential impact | |

### 1.2 Initial evidence preservation

| Evidence | Identifier / location | Condition preserved | Custodian |
|----------|-----------------------|---------------------|-----------|
| | | | |

### 1.3 Emergency response

| Action | Population / boundary | Owner | Implemented date | Effectiveness evidence | Removal condition |
|--------|-----------------------|-------|------------------|------------------------|------------------|
| | | | | | |

### 1.4 Stakeholder communication

| Stakeholder | Impact | Information communicated | Date | Response / agreement |
|-------------|--------|--------------------------|------|----------------------|
| | | | | |

## 2. Team and Plan

| Name | Function / organization | Role and responsibility | Authority / resource |
|------|-------------------------|-------------------------|----------------------|
| | | | |

| Milestone | Owner | Target date | Actual date | Status / evidence |
|-----------|-------|-------------|-------------|-------------------|
| | | | | |

## Part A — Technical Zeroing Report

## A1. Problem Overview

Summarize the product, event, phenomenon, operating state, environment, impact, reporting,
and emergency response. Reference the detailed intake evidence rather than duplicating it.

## A2. Exact Location — 定位准确

### A2.1 Investigation path

| Candidate location / cause | Check or test | Evidence | Result | Retained / eliminated |
|----------------------------|---------------|----------|--------|-----------------------|
| | | | | |

### A2.2 Localization conclusion

- Exact affected process and product level:
- Lowest failed unit:
- Abnormal state:
- Failure mode:
- Basic cause indicated at localization:
- Product, equipment, method, environment, or operation:
- Affected boundary and customer or mission effect:
- Emergency-response effectiveness at this stage:
- Relevant-party agreement:

### A2.3 Localization gate

- [ ] Exact location is supported by facts.
- [ ] Evidence state and configuration are traceable.
- [ ] Alternative locations have documented dispositions.
- [ ] The effect on the customer or mission is described.

## A3. Clear Mechanism — 机理清楚

### A3.1 Observation-to-mechanism chain

Describe the physical, chemical, electrical, software, human-system, or process sequence
from the abnormal factor at the lowest unit to the final phenomenon.

### A3.2 Root-cause register

| ID | Root cause | Cause type | Supporting evidence | Alternative explanation disposition | Confirmed? |
|----|------------|------------|---------------------|-------------------------------------|------------|
| RC-1 | | Technical / contributing / management | | | Yes / No |

### A3.3 Three-view analysis

| View | Finding | Evidence | Required action |
|------|---------|----------|-----------------|
| Product | | | |
| Process | | | |
| Organization | | | |

### A3.4 Mechanism gate

- [ ] All material observations are explained.
- [ ] All root causes are identified; hypotheses remain labelled.
- [ ] The causal chain is scientifically and logically coherent.
- [ ] Objective evidence supports every confirmed link.

## A4. Problem Reproduction or Alternative Verification — 问题复现

| Item | Entry |
|------|-------|
| Hypothesis tested | |
| Test article and configuration | |
| Controlled and changed variables | |
| Actual-condition fidelity | |
| Instrumentation and data | |
| Acceptance / rejection criteria | |
| Safety and stop criteria | |
| Approval record | |
| Result | |
| Raw record / report identifiers | |
| Stakeholder confirmation | |

If no reproduction test was performed:

- Reason:
- Alternative method:
- Evidence:
- Limitation and residual uncertainty:

### A4.1 Verification gate

- [ ] The result tests the claimed mechanism rather than visual similarity alone.
- [ ] Raw data and configuration are traceable.
- [ ] Failed or contradictory results were returned for renewed analysis.

## A5. Measures and Verification — 措施有效

### A5.1 Cause-to-action traceability

| Cause ID | Correction | Corrective action | Owner / due date | Controlled document change | Verification method | Result |
|----------|------------|------------------|------------------|----------------------------|---------------------|--------|
| | | | | | | |

### A5.2 Action risk and sufficiency

| Action | Operating range covered | New or worse risk | Regression / side-effect test | Residual limitation |
|--------|-------------------------|-------------------|-------------------------------|---------------------|
| | | | | |

### A5.3 Measures gate

- [ ] Every confirmed root cause has an action.
- [ ] Corrections and corrective actions are not confused.
- [ ] Actions are implemented, not merely planned.
- [ ] Effectiveness, sufficiency, and adverse effects are evaluated.
- [ ] Emergency controls are retained or removed by documented decision.

## A6. Horizontal Deployment — 举一反三

| Layer / population searched | Exposure logic | Search method | Finding | Action / owner / due date | Evidence / status |
|-----------------------------|----------------|---------------|---------|---------------------------|-------------------|
| Affected batch | | | | | |
| Produced product | | | | | |
| Work in progress | | | | | |
| Not-yet-produced product | | | | | |
| Related designs / processes | | | | | |
| Other programs / organizations | | | | | |

List design rules, process instructions, test requirements, standards, training, databases,
or tools created or revised:

| Document / system | Revision | Change | Effective date | Deployment evidence |
|-------------------|----------|--------|----------------|---------------------|
| | | | | |

## A7. Technical Conclusion

- Technical zeroing completed: Yes / No
- Basis for conclusion:
- Remaining issues:
- Residual risk:
- Follow-up recommendation:

## A8. Technical Evidence List

| Evidence ID | Title / record number | Revision / date | Custodian / location | Supports section |
|-------------|-----------------------|-----------------|----------------------|------------------|
| | | | | |

## Part B — Management Zeroing Report

## B1. Process Overview — 过程清楚

| Time / sequence | Required activity | Actual activity | Record / evidence | Deviation or weakness |
|-----------------|-------------------|-----------------|-------------------|-----------------------|
| | | | | |

Describe how the problem was created, developed, detected, reported, and handled. Identify
the affected management links, positions, controls, and rules.

## B2. Management Cause and Responsibility — 责任明确

### B2.1 Management-cause register

| ID | Management weakness / root cause | Evidence | Related technical cause | Required action |
|----|----------------------------------|----------|-------------------------|-----------------|
| MC-1 | | | | |

### B2.2 Responsibility register

| Organization / person | Documented duty and authority | Action or omission | Evidence | Responsibility type and degree |
|-----------------------|-------------------------------|-------------------|----------|--------------------------------|
| | | | | |

Distinguish direct/indirect, primary/secondary, and leadership/execution responsibility.

## B3. Management Measures — 措施落实

| Cause ID | Action | Department / owner | Resources | Due date | Completion evidence | Effectiveness check |
|----------|--------|--------------------|-----------|----------|---------------------|--------------------|
| | | | | | | |

## B4. Treatment and Learning — 严肃处理

| Target / scope | Treatment, education, recognition, or penalty | Policy basis | Date | Record / result |
|--------------|------------------------------------------------|--------------|------|-----------------|
| | | | | |

Explain how the treatment supports education and management improvement. Do not include
personal-sensitive details beyond authorized reporting requirements.

## B5. Rule Improvement — 完善规章

| Rule / standard / procedure | Gap addressed | New or revised content | Owner | Approval / effective date | Training and implementation evidence |
|-----------------------------|---------------|------------------------|-------|---------------------------|--------------------------------------|
| | | | | | |

## B6. Management Conclusion

- Management zeroing completed: Yes / No
- Basis for conclusion:
- Remaining issues:
- Residual risk:
- Follow-up recommendation:

## B7. Management Evidence List

| Evidence ID | Title / record number | Revision / date | Custodian / location | Supports section |
|-------------|-----------------------|-----------------|----------------------|------------------|
| | | | | |

## Part C — Review and Closure

### C1. Review checklist

- [ ] Zeroing route and level are appropriate.
- [ ] Technical five requirements are complete where applicable.
- [ ] Management five requirements are complete where applicable.
- [ ] All causes map to implemented actions and evidence.
- [ ] Effectiveness and adverse effects are verified.
- [ ] Horizontal deployment and controlled-document changes are complete.
- [ ] Residual issues and risks are explicit and approved.
- [ ] Required signatures, reviews, approvals, and communications are complete.

### C2. Review findings

| Finding | Required correction | Owner | Due date | Closure evidence |
|---------|---------------------|-------|----------|------------------|
| | | | | |

### C3. Closure decision

- Decision: Approved / Rejected / Conditionally approved
- Decision basis:
- Authorized reviewer / date:
- Affected parties notified / date:
- Team disbanded / date:

## Incomplete Zeroing Addendum

Use only when complete zeroing is genuinely infeasible:

- Reason complete zeroing cannot be achieved:
- Plausible root causes remaining:
- Evidence for and against each:
- Comprehensive controls applied:
- Residual risk and affected parties:
- Monitoring and follow-up plan:
- Required authorization and signatures:

---

## Source: skills/problem-solving/quality-problem-zeroing/references/engineering-methods.md

---
name: engineering-methods
type: reference
parent_skill: quality-problem-zeroing
author: Crow12138
version: "1.0"
status: approved
created: "2026-07-04"
last_updated: "2026-07-04"
updated_by: Crow12138
reviewed_by: RBraga01
license: MIT
---

# Engineering Methods for Quality Problem Zeroing

## Contents

1. [Use and limits](#use-and-limits)
2. [Evidence-centered localization](#evidence-centered-localization)
3. [Troubleshooting methods](#troubleshooting-methods)
4. [Mechanism-driven reproduction](#mechanism-driven-reproduction)
5. [Measure verification](#measure-verification)
6. [Layered horizontal deployment](#layered-horizontal-deployment)
7. [Controlled experimentation](#controlled-experimentation)
8. [Workflow control](#workflow-control)
9. [Method selection checks](#method-selection-checks)
10. [Related skills](#related-skills)
11. [Research sources](#research-sources)

## Use and Limits

This reference converts useful engineering ideas from the supplied research papers into
optional working methods. It is not normative. Apply GB/T 29076—2021 when this reference
differs from the standard.

Do not import broad claims as universal facts. In particular:

- Do not assume every fault has a detectable precursor;
- Do not assign a universal probability to single-point or multi-point failures;
- Do not require physical reproduction when the standard permits justified alternative evidence;
- Do not treat “thought zeroing,” “zeroing-style trial and error,” or a sixth zeroing step as a standard term;
- Do not equate workflow completion with evidence-based closure.

## Evidence-Centered Localization

Preserve and analyze three evidence families:

| Evidence family | Main use | Caution |
|-----------------|----------|---------|
| Phenomena | Establish what changed, when, and under which conditions | Separate causal observations from coincident observations |
| Physical evidence or remains | Locate damage, identify failure mode, and infer direction of propagation | Preserve custody and avoid destructive examination before approval |
| Data | Reconstruct sequence, compare states, quantify thresholds, and test hypotheses | Verify clock alignment, units, calibration, completeness, and data lineage |

Use physical, mathematical, and system-level analysis together:

- **Physical analysis:** determine whether the proposed cause can produce the observed effect;
- **Mathematical analysis:** quantify relationships, distributions, timing, thresholds, or probability;
- **System analysis:** inspect interactions, interfaces, shared resources, environment, and emergent behavior.

FTA can connect the top event to candidate bottom events. Keep each surviving fault mode
visible when more than one remains plausible.

## Troubleshooting Methods

### Elimination

Decompose the system by structure, function, information, environment, support equipment,
and human interaction. Eliminate a candidate only through valid logic or a controlled test.
Record the evidence for each eliminated branch.

### Comparison

Use one of three patterns:

1. **Conditions unchanged:** repeat with added instrumentation to test repeatability and gain new information;
2. **One condition changed:** alter one credible variable while holding the rest stable;
3. **Swap:** exchange comparable items under the same state and environment to narrow location.

A swap can locate a fault efficiently but usually does not prove the mechanism. Avoid
uncontrolled part swapping that destroys the original state.

### Causality

Distinguish:

- Cause from correlation;
- Cause from consequence;
- Trigger from enabling condition;
- Direct cause from root cause;
- Technical cause from management cause.

Write each causal link as a testable statement: under conditions **C**, factor **A** produces
change **B** through mechanism **M**, resulting in observed effect **E**.

### Quantitative threshold analysis

Search for small changes that accumulate or cross a functional threshold. Compare:

- Earlier versus later operation;
- Successful versus failed units;
- Laboratory versus actual field conditions;
- Recorded parameters versus the successful operating envelope.

Choose measurement bandwidth, sampling, time resolution, and physical units that can reveal
the proposed mechanism. “Within the recorded limit” is weak evidence when the instrument
cannot observe the relevant transient.

## Mechanism-Driven Reproduction

Design the reproduction to challenge a named hypothesis. A useful plan states:

- What root-cause hypothesis is being tested;
- Which phenomenon should appear if it is true;
- Which phenomenon should not appear if it is false;
- Which variables are controlled and which are changed;
- How actual operating energy, timing, environment, loading, interfaces, and configuration are represented;
- How fidelity limitations affect confidence.

An uncontrolled recurrence adds value only when it captures new information. A visually
similar failure under materially different conditions may demonstrate a possible failure
mode without proving the actual event mechanism.

Use component-level tests for efficiency when coupling is demonstrably limited. Use
subsystem- or system-level tests when interfaces, environment, timing, or combined loads are
essential to the mechanism. Choose the lowest level that preserves causal fidelity.

## Measure Verification

Test three properties:

1. **Effective:** removes the root cause or prevents its effect;
2. **Sufficient:** covers the required operating range, variation, life, and affected population;
3. **Non-harmful:** does not create unacceptable new risks or degrade other functions.

Verification should include:

- Correct product and test configuration;
- Suitable equipment, method, and realistic environment;
- Before/after comparison against the original evidence;
- Whole-system observation where side effects may occur;
- Defined acceptance criteria and sample or exposure rationale;
- Regression, environmental, interface, boundary, and life testing as risk requires.

Record known limits. “No failure observed” is not automatically proof when exposure was too
small or conditions were not representative.

## Layered Horizontal Deployment

Scale the search by mechanism, severity, and exposure:

1. Affected item and batch;
2. Same product or program;
3. Other products or programs in the department;
4. Organization-wide processes and design families;
5. External suppliers, customers, partner organizations, or industry where the mechanism is shared.

For each layer, record the searched population, selection logic, result, action, and closure
evidence. Convert individual learning into controlled design criteria, process restrictions,
test rules, prohibited practices, training, and searchable knowledge.

Treat “extract guidelines and lessons” as a deepening of horizontal deployment and
institutionalization—not as a sixth normative technical-zeroing requirement.

## Controlled Experimentation

Trial-and-error and zeroing are not substitutes:

- Controlled experimentation is a development strategy for learning under uncertainty;
- Zeroing is the formal closed-loop response to an occurred quality problem.

Permit bounded experimentation only when:

- Safety and legal limits are protected;
- Failure consequences are contained, reversible, and acceptable;
- The test has a learning objective, instrumentation, success/failure criteria, and stop rules;
- Configuration and data are traceable;
- A failed trial will trigger screening for formal zeroing.

Do not use experimentation to excuse a known defect, repeated problem, uncontrolled safety
risk, delivered-product exposure, missing evidence, or avoidance of a required zeroing
review. As consequence, irreversibility, maturity, and customer exposure increase, strengthen
formal zeroing and release gates.

## Workflow Control

Digital workflows can:

- Decompose a zeroing case into reusable and parallel subflows;
- Assign roles and due dates;
- Route technical and management branches dynamically;
- Aggregate parent/child status;
- Preserve forms, evidence identifiers, decisions, and audit trail;
- Prevent missing or delayed tasks.

Do not define “closed” as “all tasks clicked complete.” Use evidence gates and review states:

- Not started;
- In progress;
- Waiting for evidence;
- Ready for review;
- Rejected or returned for rework;
- Verified;
- Closed.

The top-level workflow must include action implementation, effectiveness verification,
horizontal deployment, document change, review, and approval. If these are modeled as
external processes, the zeroing case must remain open until their evidence returns.

## Method Selection Checks

Before accepting a method or result, ask:

1. What hypothesis or decision will this method test?
2. What evidence can confirm it, and what evidence can disprove it?
3. Does the method preserve the original product state and data lineage?
4. Are variables, configuration, environment, timing, and instrumentation controlled?
5. Is the selected test level adequate for the interfaces and coupling involved?
6. Does the result locate the fault, prove the mechanism, or only narrow the search?
7. Could the action create a new failure mode or hide the original one?
8. Is the exposure sufficient to support the claimed effectiveness?
9. Which products, processes, organizations, and documents inherit the learning?
10. Which GB/T 29076—2021 gate does the result support?

Reject a method result that cannot answer the final question. It may be useful engineering
work, but it is not yet zeroing evidence.

## Related Skills

- Use [Is/Is-Not](../../is-is-not-scoping/) for boundary comparisons.
- Use [Fishbone](../../fishbone-analysis/) to structure candidate causes.
- Use [5-Why](../../5why-root-cause/) to deepen one causal path at a time.
- Use [PFMEA](../../../risk-analysis/pfmea-process/) or
  [DFMEA](../../../risk-analysis/dfmea-design/) to evaluate action risk and institutionalize
  prevention.
- Use [Control Plan](../../../planning/control-plan/) when a process control changes.

## Research Sources

- Fan Huitao, Zhang Tonghe, Xu Yanke. “General Method for Fault Return-to-Zero of Equipment System.” *Strategic Study of CAE / 中国工程科学*, 2025, 27(1): 248–257. DOI: 10.15302/J-SSCAE-2024.07.024.
- Lu Jiangong, Zhang Hua, Liu Huan. “Choice Logic between Zeroing and Trial-and-Error Approaches in Aerospace Field.” *Quality and Reliability*, 2025(3), total issue 237.
- Wen Jingqian, Li Qing. “Workflow-based Closed Loop Process Control for Aircraft Quality.” Beijing University of Aeronautics and Astronautics; manuscript received 2008-09-24 and revised 2009-02-19.

---

## Source: skills/problem-solving/quality-problem-zeroing/references/gbt-29076-2021-method-guide.md

---
name: gbt-29076-2021-method-guide
type: reference
parent_skill: quality-problem-zeroing
author: Crow12138
version: "1.0"
status: approved
created: "2026-07-04"
last_updated: "2026-07-04"
updated_by: Crow12138
reviewed_by: RBraga01
license: MIT
---

# GB/T 29076—2021 Method Guide

## Contents

1. [Authority and scope](#authority-and-scope)
2. [Clause traceability](#clause-traceability)
3. [Key terms](#key-terms)
4. [Application decision](#application-decision)
5. [Roles and governance](#roles-and-governance)
6. [Standard sequence](#standard-sequence)
7. [Technical zeroing evidence](#technical-zeroing-evidence)
8. [Management zeroing evidence](#management-zeroing-evidence)
9. [Reports and closure](#reports-and-closure)
10. [Interpretation checks](#interpretation-checks)
11. [Source](#source)

## Authority and Scope

GB/T 29076—2021, *Execution requirements of quality problem closed loop for
aerospace product*, is the normative basis for this skill. It applies to quality
problems occurring during aerospace product design, production, test, and use.

The standard describes quality problem zeroing as an activity that analyzes the
causes and mechanisms of an occurred quality problem from technical and management
perspectives and takes action to eliminate the problem fundamentally and prevent
recurrence.

The standard's five technical and five management requirements are controlling.
Industry papers, enterprise practices, software workflows, 8D, and other root-cause
methods may support execution but do not override scope, terminology, or closure.

## Clause Traceability

| Standard location | Subject | Skill implementation |
|-------------------|---------|----------------------|
| 3.1–3.17 | Terms and definitions | Key terms and terminology controls |
| 4.1 | Principles | Dual-route rule, technical-first sequence, three-view analysis |
| 4.2 | Technical and management scope | Application decision |
| 4.3 | Responsibilities | Roles and governance |
| 4.4 | Plans, resources, review, and major gates | Governance and closure |
| 5.2–5.4 | Report, emergency response, and team | Workflow steps 1–3 |
| 5.5–5.9 | Zeroing, reports, review, and team closure | Workflow steps 4–7 |
| 6.1–6.5 | Five technical requirements | Technical evidence requirements |
| 7.1–7.5 | Five management requirements | Management evidence requirements |
| Annex A | Report contents | Report and evidence structure |
| Annex B | Example report cover | Organization-specific cover control |

## Key Terms

| Term | Working interpretation |
|------|------------------------|
| Quality problem | A failure, defect, accident, or other undesired condition |
| Root cause | A source event, behavior, or condition that produces an actual or potential undesired state; one problem may have multiple root causes |
| Technical zeroing | Evidence-based completion of location, mechanism, reproduction, effective measures, and horizontal deployment |
| Management zeroing | Evidence-based completion of process reconstruction, responsibility, management measures, serious treatment, and rule improvement |
| Repeated quality problem | A problem already experienced by the organization, or notified from another organization, that occurs again as the same class of problem |
| Human-responsibility problem | A problem caused by human factors such as knowingly disregarding rules or violating operations |

Do not reduce “quality problem zeroing” to management zeroing alone. “Double-five
zeroing” refers to the two coordinated five-requirement systems.

## Application Decision

### Technical zeroing scope

Screen for technical zeroing when the problem includes:

- A design issue affecting development schedule, interface design, performance, or production rework;
- A design or production issue causing major economic loss;
- A technically caused batch component or raw-material issue;
- A problem discovered after a lower-level product is delivered to the next level;
- A batch or repeated production problem;
- A technical test problem causing test failure or product damage;
- A problem found at a launch site, range, or other field location;
- A delivered-product problem affecting use;
- A problem designated by the authorized program management system;
- Degradation of cost, schedule, effectiveness, or system application.

### Management zeroing scope

Screen for management zeroing when the problem is:

- Repeated;
- Caused by confirmed human responsibility;
- Caused by absent or inadequate rules;
- Designated by the authorized program management system.

### Dual route

When both scopes apply:

1. Complete both routes;
2. Start technical zeroing first;
3. Do not use technical conclusions to bypass management analysis;
4. Permit coordinated or joint review only if every requirement remains visible and evidenced.

Zeroing may be graded by severity, consequence, product level, and management level,
but grading must not erase required evidence.

## Roles and Governance

| Role | Standard responsibility |
|------|-------------------------|
| Top management | Accountable for the organization's zeroing work |
| Program command or management system | Organizes and checks program zeroing |
| Test team leader | Organizes zeroing for major tests or launch missions |
| Quality function | Plans, checks report conformity, organizes review, tracks actions, and retains evidence |
| Responsible organization | Performs zeroing and prepares the reports |
| Zeroing team | Executes the cross-functional investigation and action plan |

Create a plan and provide adequate resources. Review each completed zeroing activity.
At major transition, acceptance, delivery, transfer, or launch gates, summarize and
classify open and completed zeroing work and conduct checks or reviews where needed.

## Standard Sequence

1. **Problem report:** communicate promptly, protect evidence, and record product and event data.
2. **Emergency response:** isolate, stop, inspect, recall, reduce immediate recurrence, assess risk and severity, and communicate with affected parties.
3. **Team formation:** appoint a leader, include relevant functions and stakeholders, and define authority and responsibilities.
4. **Technical zeroing:** execute the five technical requirements where applicable.
5. **Management zeroing:** execute the five management requirements where applicable.
6. **Reports:** complete technical and/or management reports with evidence and signatures.
7. **Review:** determine whether the work is appropriate, complete, and effective.
8. **Closure:** after all measures are implemented and verified and horizontal deployment is complete, notify relevant parties and disband the team.

## Technical Zeroing Evidence

### Exact location

Required evidence should show:

- The observed phenomenon and exact affected location;
- The lowest failed product or element and its abnormal state;
- Whether the source lies in product, equipment, test method, environment, or operation;
- The investigation plan, checks, measurements, substitutions, analyses, and stakeholder agreement;
- Customer or mission effect.

### Clear mechanism

Required evidence should show:

- All material observations and the principal problem;
- Candidate causes and elimination logic;
- Every confirmed root cause;
- The causal path from the abnormal factor at the lowest unit to the final failure mode;
- Supporting calculations, tests, analyses, statistics, inspections, or specialist findings;
- Communication and agreement with affected parties.

Keep direct cause, contributing condition, root cause, and management cause distinct.

### Problem reproduction

Normally prepare an approved plan, execute it under control, preserve records, analyze
the result, and obtain confirmation. A valid reproduction tests the claimed mechanism,
not just visual similarity.

When reproduction is unsafe, destructive, impossible, or unnecessary for an obvious
one-off damage mechanism, explain the reason and use the strongest feasible theoretical,
simulation, inspection, or analogous evidence. The technical report must disclose the
limitation.

### Effective measures

Show separately:

- Correction of affected product;
- One or more corrective actions covering every root cause;
- Selection rationale and risk of new or worse effects;
- Approved implementation plan, owners, dates, and configuration;
- Verification plan, raw evidence, result, and effectiveness evaluation;
- Controlled technical-document or standard changes;
- Decision to continue or end emergency response.

If effectiveness is inadequate, return to mechanism analysis rather than adding unsupported
layers of inspection.

### Horizontal deployment

Show:

- The lesson or warning extracted from the mechanism;
- The searched population and exposure logic;
- Results for produced, in-process, and not-yet-produced product;
- Actions for similar designs, processes, tests, tools, suppliers, or organizations;
- Technical standards or clauses requiring improvement;
- Updates to design, process, test, training, information systems, and tools;
- Notifications, responses, and evidence from other affected organizations.

## Management Zeroing Evidence

### Clear process

Build a time-ordered record of creation, development, detection, reporting, and response.
Compare process requirements, actual execution, and records. Identify management weaknesses
or missing controls.

### Explicit responsibility

Use process evidence and documented duties to identify responsible organizations and
persons. Distinguish direct/indirect, primary/secondary, and leadership/execution
responsibility. Avoid unsupported blame and retrospective expectations not present at the
time of the event.

### Implemented measures

For each management weakness, show a concrete action, owner, responsible department, due
date, resources, completion evidence, and effectiveness check. Give medium- and long-term
actions an approved plan.

### Serious treatment

The primary purpose is education and management improvement. Show how the organization
learned and communicated the lesson. Apply penalties only under applicable organizational
rules for confirmed repeated problems, human-responsibility problems, falsification, or
concealment. The standard also permits recognition of proactive discovery and prevention.

### Perfected rules

Show controlled revisions or new management-system documents, standards, procedures, or
work instructions. Include content, owner, approval, effective date, distribution, training,
and implementation verification.

## Reports and Closure

### Technical report content

Include:

1. Problem overview and emergency response;
2. Localization process, evidence, result, responsibility, and emergency-response effect;
3. Root causes, failure mode, mechanism, analysis methods, and evidence;
4. Reproduction or alternative-verification process and result;
5. Correction, corrective actions, implementation, verification, and document changes;
6. Horizontal deployment, lessons learned, and document list;
7. Conclusion, residual issues, and recommendations;
8. Identified evidence list.

For trial or formal products after delivery, and for technical zeroing arising from
vehicle/system-level tests, obtain the required next-level designer co-signature. For
purchased or outsourced product, obtain the required co-signatures from the ordering
organization and the organization that issued the task requirements.

### Management report content

Include:

1. Event and process overview;
2. Management cause and responsibility analysis;
3. Measures and implementation;
4. Treatment and organizational learning;
5. Rule improvement and deployment;
6. Conclusion, residual issues, and recommendations;
7. Identified evidence list.

Obtain co-signatures from the quality function and relevant departments and approval from
top management. One management report may cover the same class of management problem across
multiple products only when every affected product is identified in the report.

### Closure test

Zeroing is complete only when:

- The applicable report is complete and properly signed, checked, reviewed, or approved;
- All improvement measures are implemented;
- Effectiveness is verified;
- Horizontal deployment is complete;
- Evidence is retained and traceable.

For a flight-test or in-orbit problem that cannot be completely zeroed, prepare a signed
analysis report explaining why. Analyze all plausible root causes, apply comprehensive
controls, disclose residual risk, and retain the issue for follow-up.

## Interpretation Checks

| Accept | Reject |
|--------|--------|
| Exact failed unit and abnormal state supported by evidence | “The whole system failed” as localization |
| Causal mechanism linking the root cause to every material phenomenon | A likely cause selected by consensus alone |
| Approved reproduction or justified alternative verification | “Could not reproduce, therefore no defect” |
| Implemented action mapped to each confirmed root cause | Sorting or added inspection presented as the permanent fix |
| Mechanism-based search of an explicitly defined exposed population | “Checked similar products” without scope or records |
| Responsibility based on contemporaneous duties and objective evidence | Punishment used as a substitute for management-cause analysis |
| Controlled rule revision with implementation evidence | A meeting notice or training record as the only systemic action |
| Closure after effectiveness, deployment, review, and evidence are complete | Software task status used as proof of zeroing |

Escalate rather than close when safety or mission risk remains uncontrolled, delivered product
may be affected, stakeholders reject the causal conclusion, actions are overdue, evidence is
contradictory, or complete zeroing is infeasible without an approved residual-risk path.

## Source

- GB/T 29076—2021, *航天产品质量问题归零实施要求 / Execution requirements of quality problem closed loop for aerospace product*. Published 2021-08-20; implemented 2022-03-01. This guide paraphrases the standard for operational use and is not a substitute for the official text.

