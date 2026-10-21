# Quality Engineering Skills — planning

Generated from the canonical skills tree; each document follows in full.

---

## Source: skills/planning/apqp/SKILL.md

---
name: apqp
description: >-
  Advanced Product Quality Planning (APQP) — plan and track a new product launch through all 5 phases,
  identify deliverables per phase, run gate reviews, and ensure quality outputs are complete before
  Start of Production (SOP). Use when launching a new part, managing an APQP project, or auditing
  APQP completeness. Covers AIAG APQP 2nd edition and IATF 16949 §8.3.
license: MIT
metadata:
  author: RBraga01
  version: "1.1"
  iso-9001: "8.3"
  iatf-16949: "8.3"
  aiag-reference: "AIAG APQP 2nd Edition"
  domain: quality-engineering
  subdomain: planning
  industries: automotive,electronics,aerospace,medical,general
  status: approved
  created: "2026-06-06"
  last_updated: "2026-06-06"
  updated_by: migmcc
  reviewed_by: RBraga01
  standard_edition: "AIAG APQP 2nd Edition (2008) / IATF 16949:2016 §8.3"
---

# Advanced Product Quality Planning (APQP)

## When to use

Use this skill when:
- A new product or part is being launched and a structured quality plan is needed
- Managing an APQP project and tracking deliverables across phases
- Conducting an APQP gate review to assess launch readiness
- A customer requests an APQP status report or phase completion confirmation
- Auditing whether a supplier's APQP process is adequate

## Prerequisites

- Customer requirements, specifications, and drawings (or RFQ package)
- Programme timing (SOP date, PPAP submission date, prototype gates)
- Nominated APQP team (cross-functional: engineering, quality, purchasing, manufacturing, logistics)
- Customer APQP template if OEM-specific format required

## Workflow

### Overview — The 5 APQP Phases

```
Phase 1          Phase 2          Phase 3          Phase 4          Phase 5
Plan & Define → Product Design → Process Design → Product & Process → Feedback &
                & Development   & Development      Validation         Corrective Action
     ↓               ↓               ↓                ↓                  ↓
  Program         Prototype       Pre-launch         PPAP              SOP +
  approval         build           build           submission          Production
```

All phases run with concurrent engineering — phases overlap and teams work in parallel.

---

### Phase 1 — Plan and Define Program

**Objective:** Understand customer requirements and define what the product must do.

**Key deliverables:**

| Deliverable | Description |
|-------------|-------------|
| Voice of the Customer (VOC) | Customer wants, needs, expectations — translated to measurable requirements |
| Design Goals | Product performance targets derived from VOC |
| Reliability and Quality Goals | Target failure rate, warranty targets, Cpk targets |
| Preliminary Bill of Materials | Draft BOM from design intent |
| Preliminary Process Flow | High-level process sequence |
| Preliminary Special Characteristics | Initial list of critical/significant characteristics |
| Product Assurance Plan | Quality plan for the programme |
| Management Support | Signed-off programme charter with resources and timing |

**Gate 1 pass criteria:**
- Customer requirements documented and agreed
- Feasibility confirmed (technical and commercial)
- Team chartered and timing plan approved
- Special characteristics list preliminary but complete

---

### Phase 2 — Product Design and Development

**Objective:** Translate customer requirements into a product design with verified characteristics.

**Key deliverables:**

| Deliverable | Description |
|-------------|-------------|
| DFMEA | Design FMEA — all failure modes analysed, H-AP items addressed |
| Design Verification Plan (DVP) | Test plan linked to DFMEA failure modes |
| Drawing and Specification Release | Fully released engineering drawings and 3D data |
| Material Specifications | Raw material specs, supplier approval plan |
| Drawing and Specification Changes | Change management process in place |
| New Equipment and Tooling | List of new equipment/tooling required |
| Special Product and Process Characteristics | Updated with design detail |
| Gauge Plan | MSA requirement list — which characteristics need MSA studies |
| Prototype Control Plan | Control plan for prototype builds |
| Prototype Build | Prototype parts manufactured and tested |
| Engineering Drawings | Released and approved |

**Gate 2 pass criteria:**
- DFMEA complete with all H-AP actions closed
- DVP complete and test execution started
- Prototype build results acceptable
- All special characteristics identified and confirmed
- No outstanding major design concerns

---

### Phase 3 — Process Design and Development

**Objective:** Design and verify the manufacturing process.

**Key deliverables:**

| Deliverable | Description |
|-------------|-------------|
| Packaging Standards | Packaging design, labelling, MMOG/LE if required |
| Product/Process Quality System Review | Internal quality system audit against customer requirements |
| Process Flow Chart | Detailed process flow for all operations |
| Floor Plan Layout | Manufacturing floor layout approved |
| Characteristics Matrix | Matrix linking process steps to product characteristics |
| PFMEA | Process FMEA — all failure modes, AP ratings, H-AP actions complete |
| Pre-Launch Control Plan | Control plan for pre-launch production |
| Process Instructions | Work instructions for all operations |
| MSA Plan | Gauge R&R plan for all measurement systems |
| Preliminary Process Capability Study Plan | Plan for capability studies on special characteristics |
| Packaging Specifications | Final packaging specs including OEM labelling |

**Gate 3 pass criteria:**
- PFMEA complete, H-AP actions closed or formally accepted
- Pre-launch Control Plan approved
- Process instructions complete for all operations
- Tooling and equipment installed and qualified
- No unresolved open issues blocking pre-launch build

---

### Phase 4 — Product and Process Validation

**Objective:** Validate the production process and prepare for PPAP submission.

**Key deliverables:**

| Deliverable | Description |
|-------------|-------------|
| Production Trial Run | Significant Production Run (minimum run to PPAP requirements) |
| MSA Studies | Gauge R&R completed for all special characteristics |
| Preliminary Process Capability | Cpk study on special characteristics (target ≥ 1.67) |
| Production Part Approval (PPAP) | All 18 PPAP elements complete and submitted |
| Production Validation Testing | Final validation tests on production parts |
| Packaging Evaluation | Production packaging validated |
| Production Control Plan | Final production control plan approved |
| Quality Planning Sign-Off | Customer approval of PPAP and APQP completion |
| Management Support Sign-Off | Internal management approval for SOP |

**Gate 4 pass criteria (= PPAP approval):**
- Significant production run completed (minimum 300 consecutive parts per AIAG PPAP 4th ed §4.0, unless the customer specifies otherwise in writing)
- Dimensional results 100% conforming
- Cpk ≥ 1.67 on all special characteristics (or customer-approved deviation)
- %GRR < 30% for all MSA studies
- PPAP submitted and customer approval received
- No open concerns from validation testing

---

### Phase 5 — Feedback, Assessment and Corrective Action

**Objective:** Continuous improvement after SOP — close the loop on any issues found in production.

**Key activities:**

| Activity | Description |
|----------|-------------|
| Reduced variation | Monitor process capability, reduce common-cause variation |
| Improved customer satisfaction | Track warranty, field returns, and customer scorecards |
| Improved delivery and service | Monitor OTD (on-time delivery) and logistics performance |
| Lessons learned | Document lessons learned for future programmes |
| Control Plan updates | Update based on production data and any quality escapes |
| PFMEA updates | Update based on field failures and warranty data |

**Phase 5 is ongoing.** There is no defined end gate — it runs for the life of the programme.

---

### APQP timing — rule of thumb

| Milestone | Typical timing before SOP |
|-----------|--------------------------|
| Programme approval / Phase 1 complete | 18–24 months |
| Design release / Phase 2 complete | 12–15 months |
| Process design complete / Phase 3 complete | 8–10 months |
| PPAP submission | 4–6 months |
| PPAP approval (customer) | 3–4 months |
| Pre-production builds | 2–3 months |
| SOP | 0 |

Automotive OEM programmes vary — always confirm with the customer's APQP coordinator.

## Validation criteria

At each gate review, verify:
- All deliverables for the phase are complete (not "in progress")
- No open H-AP items in DFMEA or PFMEA without approved actions
- No outstanding design or process concerns without a documented resolution plan
- Team sign-off obtained from all functions (quality, engineering, manufacturing, purchasing)
- Customer confirmation received before advancing to next phase

Gate reviews are STOP gates — do not advance until all criteria are met.

## Common mistakes

- Starting Phase 2 before customer requirements are fully understood and documented (Phase 1 incomplete)
- PFMEA created after process is already running — it must drive process design, not document it
- Production trial run shorter than 300 consecutive parts without written customer authorisation — the PPAP samples must come from this run; a shorter run requires an explicit customer waiver
- Capability studies run on off-tool or pre-production parts — must be from production tooling
- Prototype Control Plan used for PPAP submission — production control plan must be separate
- MSA studies done after PPAP submission — must be complete before PSW is signed
- Phase 5 never started — APQP is treated as "done" at SOP rather than as a continuous loop
- Lessons learned not captured — same problems recur on next programme

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
| 1.1 | 2026-06-06 | @migmcc | Added 300-part production trial run minimum to Gate 4 criteria and Common Mistakes |

---

## Source: skills/planning/apqp/references/phase-deliverables.md

---
name: phase-deliverables
type: reference
parent_skill: apqp
author: RBraga01
version: "1.0"
status: approved
created: "2026-06-06"
last_updated: "2026-06-06"
updated_by: migmcc
reviewed_by: RBraga01
license: MIT
---

# APQP Phase Deliverables — Complete Reference

Complete deliverables per phase with roles, timing, gate criteria, common gaps, and APQP-to-PPAP cross-reference.
Use alongside the [apqp](../SKILL.md) skill.

> **Scope:** This document covers the exhaustive deliverable list per APQP phase, responsible party, timing relative to SOP, gate review checklists, common deliverable gaps that cause PPAP failure, and the cross-reference mapping each APQP output to its corresponding PPAP element. For the phase-by-phase workflow and gate criteria, see [apqp SKILL.md](../SKILL.md).

---

## 1. Phase 1 — Plan and Define Program

**Timing:** Complete 18–24 months before SOP (programme kickoff to design release kickoff)

| Deliverable | Responsible | Customer / Supplier / Joint | Notes |
|-------------|-------------|----------------------------|-------|
| Voice of the Customer (VOC) | Customer + Supplier | Joint | Translated to measurable technical requirements; must cover QFD inputs if applicable |
| Design Goals | Supplier (design-responsible) / Customer | Joint | Performance targets, tolerance targets, Cpk goals — must be quantified |
| Reliability and Quality Goals | Supplier | Supplier | Warranty targets (e.g., B10 life), PPM goals, field failure rate target |
| Preliminary Bill of Materials (BOM) | Supplier | Supplier | Draft BOM from design intent; identifies sub-suppliers and commodity risks |
| Preliminary Process Flow | Supplier | Supplier | High-level sequence — not a detailed operation-by-operation flow |
| Preliminary Special Characteristics | Joint | Joint | Initial list of SC/CC/KPC — will be refined through Phases 2 and 3 |
| Product Assurance Plan | Supplier | Supplier | Programme quality plan: milestones, resources, risk register, test strategy |
| Programme Timing Plan | Joint | Joint | APQP milestone timeline tied to SOP; must include all PPAP milestones |
| Feasibility Commitment | Supplier | Supplier | Formal sign-off that the design is technically and commercially feasible |
| Management Support / Programme Charter | Joint | Joint | Executive sign-off on resources, budget, and programme scope |

**Gate 1 checklist:** See Section 3.

---

## 2. Phase 2 — Product Design and Development

**Timing:** 12–15 months before SOP (design release to process design kickoff)

| Deliverable | Responsible | Customer / Supplier / Joint | Notes |
|-------------|-------------|----------------------------|-------|
| Design FMEA (DFMEA) | Supplier (design-resp.) / Customer | Supplier or Joint | AIAG-VDA format preferred; all H-AP items addressed before gate |
| Design Verification Plan (DVP&R) | Supplier | Supplier | Linked to DFMEA failure modes; every H-AP must have a test |
| Engineering Drawings — Released | Customer / Supplier | Joint | Formally released drawings with tolerances; 3D model issued |
| Material Specifications | Supplier | Supplier | Raw material specs confirmed; sub-supplier list initiated |
| Prototype Control Plan | Supplier | Supplier | Describes controls for prototype builds — not reused for production |
| New Equipment and Tooling — Identified | Supplier | Supplier | Capital expenditure plan; long-lead items ordered |
| Updated Special Characteristics List | Joint | Joint | SC/CC/KPC confirmed from design detail; drawing symbols applied |
| Gauge Plan (MSA Requirement List) | Supplier | Supplier | Lists every characteristic requiring an MSA study and the gauge type |
| Prototype Build Completion | Supplier | Joint | Prototypes built, tested, results reviewed — DVP tests on prototypes executed |
| Prototype Test Results | Supplier | Joint | Pass/Fail results from prototype-phase DVP tests; failures trigger DFMEA updates |
| Engineering Drawing and Spec Changes | Joint | Joint | Change management process active; ECN/SREA log maintained |

**Gate 2 checklist:** See Section 3.

---

## 3. Phase 3 — Process Design and Development

**Timing:** 8–10 months before SOP (process design through tooling qualification)

| Deliverable | Responsible | Customer / Supplier / Joint | Notes |
|-------------|-------------|----------------------------|-------|
| Detailed Process Flow Chart | Supplier | Supplier | Operation-by-operation; includes inspection steps, rework paths; feeds PFMEA |
| Manufacturing Floor Plan Layout | Supplier | Supplier | Material flow, ergonomics, access confirmed; approved by plant management |
| Characteristics Matrix | Supplier | Supplier | Links each process step to the product characteristics it affects |
| Process FMEA (PFMEA) | Supplier | Supplier | AIAG-VDA format; all H-AP items closed before pre-launch; feeds Control Plan |
| Pre-Launch Control Plan | Supplier | Supplier | Stricter sample sizes than production CP; 100% inspection common at this stage |
| Process Instructions / Work Instructions | Supplier | Supplier | Step-by-step operator instructions for all operations; tied to Control Plan |
| MSA Plan | Supplier | Supplier | Identifies which gauges require GR&R; assigns responsibility and schedule |
| Preliminary Process Capability Study Plan | Supplier | Supplier | Documents how the Cpk study will be run: n, characteristics, method |
| Packaging Standards — Design | Supplier | Joint | Packaging design approved; MMOG/LE materials flow if required |
| Packaging Specifications | Joint | Joint | Final packaging specs including OEM-specific label requirements |
| Product / Process Quality System Review | Customer | Joint | Internal quality system audit against customer IATF/VDA requirements |
| Tooling and Equipment — Qualified | Supplier | Supplier | All production tooling installed and run-off at supplier; acceptance criteria met |

**Gate 3 checklist:** See Section 3.

---

## 4. Phase 4 — Product and Process Validation

**Timing:** 3–6 months before SOP (significant production run through PPAP approval)

| Deliverable | Responsible | Customer / Supplier / Joint | Notes |
|-------------|-------------|----------------------------|-------|
| Significant Production Run (Trial Run) | Supplier | Supplier | Minimum run size as agreed with customer; typically ≥ 300 pieces or customer-defined |
| MSA Studies (Gauge R&R) | Supplier | Supplier | GR&R completed for all SC/CC/KPC gauges; must meet %GRR < 30% |
| Process Capability Studies (Cpk) | Supplier | Supplier | From significant production run; Cpk ≥ 1.67 target for all SC/CC |
| Production Control Plan | Supplier | Joint | Final production CP; supersedes Pre-Launch CP; submitted as PPAP Element 7 |
| PPAP Package (all 18 elements) | Supplier | Supplier | Complete submission; see ppap SKILL.md for element details |
| Production Validation Testing (PVT) | Supplier / Customer | Joint | Final DVP tests on production parts; all tests must show Pass |
| Packaging Evaluation | Supplier | Supplier | Production packaging validated (drop test, transit test, OEM label verification) |
| Quality Planning Sign-Off | Joint | Joint | Customer PPAP approval; APQP completion confirmed |
| Management Support Sign-Off | Supplier | Supplier | Internal executive approval to begin SOP shipments |

**Gate 4 checklist (= PPAP approval criteria):** See Section 3.

---

## 5. Phase 5 — Feedback, Assessment and Corrective Action

**Timing:** SOP onward — no end gate; runs for the life of the programme

| Activity | Responsible | Frequency |
|----------|-------------|-----------|
| Process capability monitoring (SPC) | Supplier quality | Ongoing — per Control Plan frequency |
| Control Plan updates (post-SOP issues) | Supplier quality | After any quality escape, corrective action, or PFMEA update |
| PFMEA updates (warranty / field data) | Supplier engineering + quality | Quarterly review minimum; after any warranty claim |
| Customer scorecard review | Supplier quality | Monthly or per customer rhythm |
| Lessons learned capture | APQP team | At SOP and at programme end |
| Warranty and field return analysis | Supplier engineering | Per warranty cycle (monthly / quarterly) |
| OTD and logistics performance review | Supplier logistics | Monthly |

---

## 6. Gate Review Checklists

### Gate 1 — End of Phase 1

| Check | Pass Condition |
|-------|---------------|
| Customer requirements documented | VOC captured in measurable technical targets; signed off by both parties |
| Feasibility confirmed | Formal feasibility commitment signed by supplier; no open technical blockers |
| Preliminary BOM issued | All major components identified; sub-supplier strategy confirmed |
| Special characteristics — preliminary list | At least a draft list exists; all high-risk characteristics flagged |
| Programme timing plan | APQP milestone plan issued; PPAP submission date confirmed with customer |
| Management resources committed | People, equipment budget, and capital approved |
| No open feasibility blockers | No unresolved "cannot meet" items — all risks have mitigation plans |

### Gate 2 — End of Phase 2

| Check | Pass Condition |
|-------|---------------|
| DFMEA complete | All failure modes analysed; H-AP items have completed actions with evidence |
| DVP issued and execution started | All H-AP failure modes have at least one test; prototype-phase tests underway |
| Drawings released | Formal release; all referenced specs issued; revision-controlled |
| Special characteristics finalised | SC/CC/KPC confirmed and applied to drawing with correct symbols |
| Prototype build results acceptable | No unresolved failures from prototype DVP tests |
| Gauge plan complete | All characteristics requiring MSA identified; gauge procurement started |
| No blocking design concerns | No open DRB (Design Review Board) action items without an owner and due date |

### Gate 3 — End of Phase 3

| Check | Pass Condition |
|-------|---------------|
| Process Flow Chart complete | All operations documented; numbering matches PFMEA and CP |
| PFMEA complete | All operations covered; H-AP actions closed; reviewed and signed off |
| Pre-launch Control Plan approved | All SC/CC present; sample plan defined; reaction plans complete |
| Process instructions complete | Work instructions for every operation; linked to CP rows |
| MSA plan confirmed | Gauge R&R schedule locked; gauges procured or on order |
| Tooling and equipment qualified | All production tooling installed; first-off-tool parts approved |
| Packaging approved | Packaging design signed off; OEM label format confirmed |
| No open blocking issues | All action items from process FMEA review closed or formally accepted |

### Gate 4 — PPAP Approval (End of Phase 4)

| Check | Pass Condition |
|-------|---------------|
| Significant production run complete | Minimum agreed quantity produced from production tooling at production conditions |
| Dimensional results 100% conforming | Zero out-of-tolerance results across all ballooned dimensions, all sampled parts |
| Cpk ≥ 1.67 for all SC/CC | Or customer-approved formal deviation with agreed containment |
| MSA %GRR < 30% for all SC/CC gauges | Preferably < 10%; 10–30% requires customer concurrence |
| All DVP tests passed | Zero open failures; any failures resolved with DFMEA update and re-test |
| PPAP package complete | All 18 elements present, accepted, and documented |
| Customer PPAP approval received | Written approval (email, portal status, PSW stamp) — not verbal confirmation |
| No open customer concerns | No outstanding 8D, deviation, or corrective action from Phase 4 |

---

## 7. Common Deliverable Gaps That Cause PPAP Failure

| Gap | Phase where it originates | Effect at PPAP |
|-----|--------------------------|----------------|
| Special characteristics not identified in Phase 1/2 | Phase 1–2 | SC/CC missing from Control Plan and PFMEA — PPAP Elements 6 and 7 incomplete |
| DVP not aligned to DFMEA | Phase 2 | H-AP failure modes have no test coverage — PPAP Element 10 fails audit |
| PFMEA created after process is running | Phase 3 | PFMEA is documenting the process, not driving controls — detection controls in PFMEA do not match actual Control Plan |
| Pre-launch CP used as Production CP | Phase 4 | Control Plan submitted to PPAP is not the production-level document — rejected |
| MSA studies not completed before PPAP run | Phase 4 | Capability data (Cpk) is from an unvalidated measurement system — invalid |
| Capability study run on pre-production parts | Phase 3–4 | Cpk calculated from parts not produced at production tooling conditions — not valid for PPAP Element 11 |
| Lessons learned not captured (Phase 5 skipped) | Phase 5 | Same PPAP gaps repeat on subsequent programmes; no institutional memory |
| Prototype CP not replaced by Production CP | Phase 3–4 | PPAP Element 7 shows prototype-level controls only — missing production-specific controls and frequencies |
| Gauge plan not executed — MSA missing for some characteristics | Phase 2–3 | Some SC/CC have no MSA — PPAP Element 8 incomplete |
| Packaging specs not finalised before PPAP run | Phase 3–4 | Production parts shipped in uncertified packaging — PPAP package incomplete |

---

## 8. APQP Deliverable to PPAP Element Cross-Reference

| APQP Deliverable | APQP Phase | PPAP Element |
|------------------|-----------|-------------|
| Engineering Drawings — Released | 2 | Element 1 — Design Records |
| Engineering Change Documents | 2–3 | Element 2 — Engineering Change Documents |
| Customer Engineering Approval (design sign-off) | 2 | Element 3 — Customer Engineering Approval |
| DFMEA | 2 | Element 4 — DFMEA |
| Detailed Process Flow Chart | 3 | Element 5 — Process Flow Diagram |
| PFMEA | 3 | Element 6 — PFMEA |
| Production Control Plan | 4 | Element 7 — Control Plan |
| MSA Studies (Gauge R&R) | 4 | Element 8 — Measurement System Analysis |
| Dimensional Results (from PPAP run) | 4 | Element 9 — Dimensional Results |
| Production Validation Testing (DVP&R results) | 4 | Element 10 — Material / Performance Test Results |
| Process Capability Studies (Cpk from PPAP run) | 4 | Element 11 — Initial Process Studies |
| Lab Documentation (ISO/IEC 17025 certs) | 4 | Element 12 — Qualified Laboratory Documentation |
| Appearance Approval (customer AAR sign-off) | 2–4 | Element 13 — Appearance Approval Report |
| Significant Production Run — sample parts | 4 | Element 14 — Sample Production Parts |
| Master Sample retention | 4 | Element 15 — Master Sample |
| Gauge Plan → gauges procured and calibrated | 3–4 | Element 16 — Checking Aids |
| CSR Compliance / OEM-specific requirements | 1–4 | Element 17 — Customer-Specific Requirements |
| Quality Planning Sign-Off + Management Support Sign-Off | 4 | Element 18 — Part Submission Warrant (PSW) |

**Note:** Element 18 (PSW) is the culmination of the entire APQP programme — it can only be signed when all prior deliverables are complete and accepted. The PSW signature is the quality manager's attestation that the APQP process was followed.

---

## Source: skills/planning/control-plan/SKILL.md

---
name: control-plan
description: >-
  Control Plan — build, review, or audit a Prototype, Pre-launch, or Production Control Plan linked
  to PFMEA failure modes and controls. Use when creating a new control plan, updating after a process
  change or corrective action, or auditing an existing CP for completeness and PFMEA alignment.
  Covers AIAG Control Plan reference manual and IATF 16949 §8.5.1.
license: MIT
metadata:
  author: RBraga01
  version: "1.1"
  iso-9001: "8.5.1"
  iatf-16949: "8.5.1"
  aiag-reference: "AIAG Control Plan Reference Manual"
  domain: quality-engineering
  subdomain: planning
  industries: automotive,electronics,aerospace,medical,general
  status: approved
  created: "2026-06-06"
  last_updated: "2026-06-06"
  updated_by: migmcc
  reviewed_by: RBraga01
  standard_edition: "AIAG Control Plan Reference Manual (1995) / IATF 16949:2016 §8.5.1"
---

# Control Plan

## When to use

Use this skill when:
- Creating a new Control Plan for prototype, pre-launch, or production
- Reviewing an existing Control Plan for completeness and accuracy
- Updating the CP after a process change, corrective action (D7), or PFMEA update
- Auditing a supplier's Control Plan during qualification or an IATF audit
- Linking PFMEA controls to the Control Plan after FMEA review

## Prerequisites

- Process Flow Diagram (required — CP must mirror the process flow sequence)
- PFMEA (required — CP controls derive from PFMEA recommended actions)
- Drawing with ballooned characteristics and tolerance data
- List of special and significant characteristics (SC, CC, KPC, KCC)
- MSA results for measurement systems referenced in the CP (for production CP)

## Workflow

### Step 1 — Determine the CP type

| Type | When | Purpose |
|------|------|---------|
| **Prototype** | During prototype builds | Describes dimensional, material, and functional tests in prototype phase |
| **Pre-launch** | After prototype, before PPAP | Describes controls in place during pilot/pre-production runs |
| **Production** | After PPAP approval, at SOP | The living document — updated throughout product life |

All three types may coexist during APQP phases. The Production CP is the one submitted as PPAP Element 7.

### Step 2 — Build the Control Plan structure

The CP is a table with one row per characteristic per process step. Each row contains:

**Header section (document-level):**
- Control Plan number and revision
- Part number and revision
- Part name / description
- Supplier / plant
- Supplier code (OEM code)
- Key contact / phone
- Core team (multi-functional)
- Date (original) and date (revised)
- Customer engineering approval (name/date) — if required
- Customer quality approval (name/date) — if required
- Supplier approval (name/date)

**Detail columns (one row per characteristic):**

| Column | What to enter |
|--------|--------------|
| Part/process number | Reference number from Process Flow |
| Process name / operation description | Name of the process step |
| Machine, device, jig, or tool | Equipment used at this step |
| Number | Characteristic number (links to balloon drawing) |
| Product characteristic | Product feature being controlled (dimension, material property, appearance) |
| Process characteristic | Process parameter being controlled (temperature, pressure, speed, torque) |
| Special characteristic classification | SC, CC, KPC, KCC, *, ▲ per customer symbology |
| Product/process specification / tolerance | Nominal value and tolerance band |
| Evaluation / measurement technique | Gauge type, method, or test used |
| Sample size | Number of parts per sample |
| Frequency | How often samples are taken (every hour, every lot, 100%) |
| Control method | How the process is controlled (SPC chart, go/no-go gauge, visual, 100% inspection) |
| Reaction plan | What to do if out-of-control or out-of-specification (who, what action, containment) |

### Step 3 — Populate from PFMEA

For each high-severity failure mode in the PFMEA:
1. Identify the current prevention and detection controls from the PFMEA
2. Transfer these controls into the corresponding CP row
3. The reaction plan must address what happens if the control detects a non-conformance

Every special characteristic (SC, CC, ★, ◆) in the PFMEA must appear in the CP.
Every recommended action completed in the PFMEA must be reflected in the updated CP controls.

### Step 4 — Special characteristics — mandatory coverage

| Classification | OEM symbol | CP requirement |
|----------------|-----------|----------------|
| Safety / Regulatory | ★ SC / ⬟ | 100% inspection OR demonstrated Cpk ≥ 1.67 + statistical monitoring |
| Critical Characteristic | CC / ◆ | Same as above — automatic stop if out of spec |
| Significant Characteristic | SC (Ford) / KPC | Process monitoring with defined sample plan and reaction |
| Key Control Characteristic | KCC | Process parameter monitoring (not product) — SPC or other control |

**OEM symbol conventions vary.** Always use the exact symbol specified in the customer's CSR:
- Ford: CC (Critical Characteristic) and SC (Significant Characteristic) — do not use ★ or ◆
- GM: ★ for safety-critical; Δ for significant
- VW / Audi: D (design feature, = CC), E (significant characteristic), I (functional dimension) per FORMEL Q
- BMW: G-SC (significant characteristic), G-CC (critical characteristic) per BMW standard
- Stellantis: CC and SC per MAQMSR — requires AIAG-VDA FMEA format alignment

Using the wrong symbol for the customer's OEM is an immediate finding at PPAP and IATF audit.

For all special characteristics: the reaction plan must specify who is notified, containment action, and when the process can restart.

### Step 5 — Reaction plan requirements

Every row in the CP must have a reaction plan. Minimum requirements:

- **Who** is responsible for taking action
- **What** immediate containment is applied (tag, sort, hold, stop production)
- **Who** is notified (supervisor, quality, engineering)
- **When** production may restart (after what verification)
- Reference to relevant Work Instruction or SOP for the reaction

A reaction plan that says only "notify supervisor" or "quarantine parts" is insufficient — it must specify the next step after notification.

### Step 6 — Audit an existing Control Plan

When reviewing a supplier's or internal CP, check:

**Structure:**
- [ ] All process steps from the Process Flow are represented
- [ ] Each special characteristic has its own dedicated row
- [ ] Revision level matches the current PFMEA and drawing revision

**Characteristics:**
- [ ] All SC/CC/KPC/KCC are listed with correct classification symbols
- [ ] Product AND process characteristics are both covered (not just product)
- [ ] Tolerances match the current released drawing

**Controls:**
- [ ] Measurement technique is specific (gauge type, not just "measure")
- [ ] Sample size and frequency are defined (not "as required" or "as needed")
- [ ] 100% inspection is specified where Cpk < 1.33
- [ ] SPC control charts are specified for characteristics where they are required

**Reaction plan:**
- [ ] Every row has a reaction plan
- [ ] Reaction plans specify concrete actions (not just "notify supervisor")
- [ ] Reaction plans are consistent with PFMEA failure mode severity

**Alignment:**
- [ ] CP controls match PFMEA current controls column for each failure mode
- [ ] Completed PFMEA recommended actions are reflected in updated controls
- [ ] CP revision date is more recent than most recent PFMEA update date

## Validation criteria

A complete Production Control Plan for PPAP submission must:
- Cover every operation in the Process Flow
- Include every special and significant characteristic with correct classification
- Have a MSA-validated measurement system for every variable characteristic on SC/CC
- Have a reaction plan for every row
- Be signed by the APQP team (multi-functional) and have customer approval if required
- Match the PFMEA revision level

## Common mistakes

- Control Plan created without reference to PFMEA — controls are generic, not linked to actual failure modes
- Reaction plan says "notify supervisor" only — not a reaction plan, just escalation
- Missing process characteristics — CP only controls product dimensions, not process parameters like temperature or torque
- Sample plan says "as required" — must specify a number and frequency
- SC/CC characteristics not identified with correct customer symbol — auditor will flag this immediately
- CP not updated after D7 of an 8D — the most common disconnect in corrective action systems
- Gauge type not specified — "visual inspection" or "measure" is not sufficient; must name the tool

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
| 1.1 | 2026-06-06 | @migmcc | Added OEM-specific special characteristic symbol conventions (Ford, GM, VW, BMW, Stellantis) in Step 4 |

---

## Source: skills/planning/control-plan/references/control-plan-template.md

---
name: control-plan-template
type: reference
parent_skill: control-plan
author: RBraga01
version: "1.0"
status: approved
created: "2026-06-06"
last_updated: "2026-06-06"
updated_by: RBraga01
reviewed_by: RBraga01
license: MIT
---

# Control Plan — Template and Column Reference

Blank Control Plan template with column-by-column guidance, sampling selection criteria, reaction plan matrix, and PFMEA-to-CP column mapping.
Use alongside the [control-plan](../SKILL.md) skill.

> **Scope:** This document covers the blank CP template structure, detailed column instructions with common mistakes, a sample plan selection guide, the reaction plan severity matrix, and the PFMEA column-to-CP column mapping. For the workflow (how to build, populate, and audit a CP), see [control-plan SKILL.md](../SKILL.md).

---

## 1. Control Plan Header — Blank Template

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│  CONTROL PLAN                                    □ Prototype  □ Pre-Launch  □ Production          │
├──────────────────────────┬───────────────────────┬──────────────────────────────────────────────┤
│  Control Plan Number:    │                       │  Date (original):                             │
│  Part Number / Latest    │                       │  Date (revised):                              │
│  Change Level:           │                       │                                               │
├──────────────────────────┼───────────────────────┼──────────────────────────────────────────────┤
│  Part Name / Description:│                       │  Core Team:                                   │
├──────────────────────────┼───────────────────────┼──────────────────────────────────────────────┤
│  Supplier / Plant:       │                       │  Supplier Code:                               │
├──────────────────────────┼───────────────────────┼──────────────────────────────────────────────┤
│  Supplier / Plant        │                       │  Key Contact / Phone:                         │
│  Approval / Date:        │                       │                                               │
├──────────────────────────┼───────────────────────┼──────────────────────────────────────────────┤
│  Customer Engineering    │                       │  Customer Quality                             │
│  Approval / Date:        │                       │  Approval / Date:                             │
│  (if required)           │                       │  (if required)                                │
└──────────────────────────┴───────────────────────┴──────────────────────────────────────────────┘
```

---

## 2. Control Plan Detail — 13-Column Row Structure

Each row in the Control Plan body represents one controlled characteristic at one process step. The 13 standard columns are:

```
Col 1        Col 2                   Col 3                    Col 4    Col 5              Col 6
Part /    |  Process Name /       |  Machine / Device /    |  No.  |  Product          |  Process
Process   |  Operation            |  Jig / Tools for       |       |  Characteristic   |  Characteristic
Number    |  Description          |  Mfg.                  |       |                   |

Col 7              Col 8                          Col 9           Col 10     Col 11      Col 12        Col 13
Special        |  Product / Process            |  Evaluation / |  Sample |  Sample  |  Control    |  Reaction
Characteristic |  Specification /             |  Measurement  |  Size   |  Freq.   |  Method     |  Plan
Classification |  Tolerance                   |  Technique    |         |          |             |
```

---

## 3. Column-by-Column Guidance

### Column 1 — Part / Process Number

**What to enter:** The operation number from the Process Flow Diagram. Use the same numbering system as the Process Flow and PFMEA (e.g., OP-010, OP-020, or 10, 20, 30).

**Common mistakes:**
- Using free-form descriptions instead of a consistent operation number — breaks the PFMEA-CP traceability link
- Skipping operations present in the Process Flow — every operation must appear
- Using a different numbering convention than the PFMEA

---

### Column 2 — Process Name / Operation Description

**What to enter:** Short descriptive name of the operation (e.g., "Injection Moulding", "Heat Treatment 180°C", "Torque Tightening M8 Bolts", "Final Inspection"). Must match the operation name in the Process Flow.

**Common mistakes:**
- Overly generic names ("Operation 1", "Process Step") — not auditable
- Name does not match the Process Flow — auditor cannot trace the row back to the flow

---

### Column 3 — Machine / Device / Jig / Tools for Manufacturing

**What to enter:** Specific equipment identifier. For machinery: machine name + asset number (e.g., "Injection Moulding Press P-12"). For inspection steps: the gauge or fixture name and ID. For assembly: jig or torque tool ID.

**Common mistakes:**
- Listing the equipment type only ("injection press") without an identifier — impossible to verify calibration
- Leaving blank for manual operations — manual operations still require a tool or method description
- Not updating when equipment is changed (new machine installed post-PPAP)

---

### Column 4 — No. (Characteristic Number)

**What to enter:** The balloon number from the dimensioned drawing, or an internal reference number linking this CP row to a specific PFMEA failure mode or drawing characteristic. Each row has a unique number.

**Common mistakes:**
- Numbering does not match the ballooned drawing — auditor cannot verify the tolerance is correct
- Process characteristics (temperature, torque, speed) have no balloon number but still need an internal reference — use "P-001" convention or similar

---

### Column 5 — Product Characteristic

**What to enter:** The physical or functional attribute of the product being measured at this step (e.g., "Outer Diameter", "Tensile Strength", "Surface Roughness Ra", "Weld Penetration Depth"). This is a product measurement — what the part looks like or does.

Leave blank if this row controls a process parameter only (Column 6 carries the characteristic).

**Common mistakes:**
- Mixing product and process characteristics in the same column — use Column 5 for product and Column 6 for process; some rows will have both
- Writing a vague characteristic like "appearance" — must name the specific attribute (e.g., "surface gloss level 60°")

---

### Column 6 — Process Characteristic

**What to enter:** The process parameter being controlled at this step, where controlling the process parameter ensures the product characteristic. Examples: "Mould Temperature (°C)", "Injection Pressure (bar)", "Torque Setting (N·m)", "Cure Time (min)".

Leave blank if this row controls a product output only (Column 5 carries the characteristic).

**Common mistakes:**
- Control Plan covers only product characteristics and omits process parameters — this is one of the most common audit findings
- Process characteristic specified without a tolerance (Column 8 must have the process setpoint and control limits)

---

### Column 7 — Special Characteristic Classification

**What to enter:** The OEM classification symbol for safety-critical, significant, or key characteristics. Leave blank for standard (non-classified) characteristics.

| Symbol | Classification | Used by |
|--------|---------------|---------|
| SC | Safety Characteristic | Ford, GM |
| CC | Critical Characteristic | Ford |
| ★ | Safety / Critical | AIAG generic |
| ◆ | Safety / Critical | VDA / BMW |
| KPC | Key Product Characteristic | Ford, GM, Stellantis |
| KCC | Key Control Characteristic | Ford, GM |
| ▲ | Significant Characteristic | GM |
| (none) | Standard characteristic | All |

**Common mistakes:**
- Incorrect symbol for the OEM — Ford uses SC/CC/KPC; BMW uses ◆; using the wrong symbol is a direct audit nonconformance
- SC/CC rows missing entirely — auditor cross-checks against the PFMEA and drawing
- Standard characteristic rows incorrectly flagged as SC — creates unnecessary inspection burden

---

### Column 8 — Product / Process Specification / Tolerance

**What to enter:** The nominal value and tolerance (e.g., "25.00 ± 0.05 mm", "180°C ± 5°C", "Torque 22 N·m min / 28 N·m max"). For attribute characteristics: the acceptance criterion (e.g., "No visible porosity").

**Common mistakes:**
- Copying the drawing tolerance without updating when the drawing is revised
- Writing "per drawing" or "per spec" without stating the actual value — the CP must be self-sufficient for an operator on the floor
- Tolerance range wider than the drawing tolerance — the CP tolerance must be equal to or tighter than the drawing

---

### Column 9 — Evaluation / Measurement Technique

**What to enter:** The specific gauge or measurement method (e.g., "Vernier calliper 0.02 mm resolution", "CMM – Zeiss Contura", "Torque wrench TW-04", "Attribute go/no-go gauge G-021", "Visual per WI-057").

**Common mistakes:**
- Entering "measure" or "check" without specifying the tool — not a valid inspection method
- Specifying a gauge type without an asset ID — cannot verify calibration status
- "Visual inspection" on an SC/CC characteristic — visual is not adequate for a classified characteristic unless backed by a verified visual standard with a defined accept/reject limit

---

### Column 10 — Sample Size

**What to enter:** A specific number (e.g., 5, 10, 1 per pallet). For 100% inspection, enter "100%". Do not write "as required", "as needed", or "n/a".

**Common mistakes:**
- "As required" — not a sample plan; customer will reject
- Sample size of 1 for a critical characteristic — statistically meaningless for detecting process shifts
- No differentiation between sample size for setup verification vs. running production (if both are done, document separately)

---

### Column 11 — Frequency

**What to enter:** Specific interval or trigger (e.g., "Every 2 hours", "First-off and last-off per shift", "Every 50 pcs", "Every lot", "100% — all pieces"). For event-triggered checks, specify the trigger (e.g., "After each tool change").

**Common mistakes:**
- "As required" or "as needed" — rejected; must be a defined interval
- Frequency not tied to the process control strategy (e.g., high-Cpk process with 100% inspection — wasteful; low-Cpk process with once-per-shift — dangerous)
- No mention of startup checks — many defects occur at shift start or after a tool change

---

### Column 12 — Control Method

**What to enter:** How the process is controlled to maintain the characteristic within specification. Specify the control type:
- **SPC:** "X-bar R chart, 5 pcs every 2h, action rules: 1 point beyond UCL/LCL, 8 consecutive points one side of mean"
- **100% inspection:** "100% visual per WI-057 / 100% dimensional with go/no-go gauge G-021"
- **Poka-yoke / error-proofing:** "Torque controller with pass/fail signal; part does not release if out of range"
- **Setup check:** "First-off approval by QC before production run starts"
- **Lot testing:** "AQL 0.65 per MIL-STD-1916 table"

**Common mistakes:**
- "SPC" written without specifying which chart, sample size, frequency, or action rules
- "Inspect per WI" without naming which WI
- Control method not commensurate with the severity of the characteristic (e.g., visual-only on an SC)

---

### Column 13 — Reaction Plan

**What to enter:** Specific actions to take when the characteristic is out of control or out of specification. Must answer:
1. **What** — immediate containment action (stop production, segregate parts, 100% sort)
2. **Who** — responsible person or role (not "contact supervisor" — name the role explicitly)
3. **What next** — disposition of suspect parts (scrap, rework per WI-XXX, customer notification)
4. **When to restart** — condition that must be met before production resumes (corrective action verified, re-measurement confirms conformance)
5. **Escalation** — if the issue is not resolved within a defined time, who is notified next

**Common mistakes:**
- "Notify supervisor" — this is not a reaction plan; it is step zero of one
- No disposition instruction for non-conforming parts
- No restart condition — production can restart without verification
- Reaction plan is identical for every row regardless of severity — demonstrates it was not tailored

---

## 4. Sample Plan Selection Guide

### When to Use Each Approach

| Method | When to use | Typical application |
|--------|------------|---------------------|
| **100% Inspection** | Cpk < 1.33; Safety/regulatory characteristics (SC, CC); poka-yoke not available; new process with unstable history | All safety welds, safety-critical fastener torques, regulatory functional tests |
| **Statistical Process Control (SPC)** | Cpk ≥ 1.33 and process is stable; variable characteristics where trends are detectable; high-volume repetitive processes | Dimensional characteristics on injection moulded or stamped parts; process parameters (temperature, pressure) |
| **AQL-based lot sampling** | Lot sizes well-defined; inspection cost prohibitive at 100%; characteristic is not SC/CC; traceability exists to separate lots | Incoming inspection of purchased components; final inspection of low-volume machined parts |
| **First-off + Last-off per shift** | Characteristics affected by tool wear, thermal expansion, or setup variation; medium volume; Cpk ≥ 1.67 | Machining operations where tool wear drifts dimensions within the shift |
| **Fixed frequency (time-based)** | Continuous process (extrusion, casting, plating); Cpk ≥ 1.33; no discrete lot structure | Plating thickness, coating weight, extrusion diameter |
| **Event-triggered (setup/changeover)** | Characteristic affected primarily by setup, not by in-run variation; Cpk ≥ 1.67 between setups | Tooling changeover in stamping; first-off after mould cleaning |

### AQL Selection Reference

| AQL Level | Use when | Risk |
|-----------|----------|------|
| 0.065 | Safety or regulatory; SC/CC on non-100% process | Highest detection sensitivity |
| 0.10 | Fit/form/function characteristics with high severity | Very high detection |
| 0.25 | Functional characteristics; customer-visible | High detection |
| 0.65 | Standard dimensional or cosmetic | Standard |
| 1.0 | Cosmetic only; low customer impact | Lower detection |
| 2.5 | Internal characteristics; fully contained failure modes | Lowest practical detection |

**Never use AQL sampling for SC/CC characteristics unless the customer has formally approved the AQL plan and the characteristic has Cpk ≥ 1.67.**

---

## 5. Reaction Plan Requirement Matrix

Required stringency of the reaction plan based on characteristic severity and control method.

| Characteristic | Cpk / Process State | Minimum Control Method | Reaction Plan Required Elements |
|----------------|--------------------|-----------------------|--------------------------------|
| SC / CC (Safety, Regulatory) | Any | 100% inspection OR Cpk ≥ 1.67 + SPC | Stop production immediately; segregate and contain all parts since last confirmed good; do not release any parts until 100% verification; escalate to customer within 24h; PFMEA and CP update required before restart |
| SC / CC (Safety, Regulatory) | Cpk < 1.33 | 100% inspection mandatory | As above — plus formal customer deviation required; do not ship any parts without customer approval |
| KPC / KCC (Significant) | Cpk ≥ 1.33 | SPC or fixed-frequency | Stop line on OOC signal; hold parts produced since last conforming sample; 100% sort of suspect lot; notify quality lead; record on SPC chart and investigate assignable cause; restart after assignable cause confirmed resolved |
| Standard (non-classified) | Cpk ≥ 1.33 | Periodic sampling or SPC | Hold suspect parts; notify operator and shift supervisor; sort per defined AQL or 100%; identify and tag conforming lot; document in quality log; restart after confirmation |
| Standard (non-classified) | Cpk < 1.33 | 100% inspection | Same as above + open corrective action (8D or equivalent); notify quality manager; escalate to engineering for root cause if recurrent within 5 days |
| Process characteristic (KCC) | Process parameter OOC | Poka-yoke preferred; SPC acceptable | Stop process; adjust process to setpoint; verify product produced during OOC condition; do not advance to next operation until process confirmed stable; document deviation |

---

## 6. PFMEA-to-Control Plan Column Mapping

How each PFMEA column informs the corresponding Control Plan column.

| PFMEA Column | PFMEA Content | Maps to CP Column | CP Usage |
|--------------|--------------|-------------------|----------|
| Function (PFMEA Step 2) | What the process step is supposed to do | Col 2 — Process Name / Operation Description | Confirms the CP row exists for this process step |
| Failure Mode (PFMEA Step 3) | What goes wrong | Col 5 or Col 6 — Product or Process Characteristic | The characteristic being controlled is the feature that, if not controlled, leads to the failure mode |
| Failure Effect (PFMEA Step 3) | What the customer experiences | Informs Col 7 classification | High-severity effects (S ≥ 8) drive SC/CC classification in the CP |
| Severity (S) rating | How bad is the effect | Col 7 — Classification; Col 13 — Reaction Plan stringency | S ≥ 9: SC/CC required in Col 7; stringent reaction plan in Col 13 |
| Current Prevention Control | How we prevent the failure mode from occurring | Col 6 — Process Characteristic; Col 12 — Control Method (prevention side) | Process parameters being controlled (process characteristic) and the control method used to maintain them |
| Current Detection Control | How we detect the failure mode if it occurs | Col 9 — Measurement Technique; Col 12 — Control Method (detection side) | The gauge or inspection method; detection frequency drives Col 10 and Col 11 |
| Detection (D) rating | How well we detect the failure if it occurs | Col 10/11 — Sample size and frequency | High D rating (poor detection) → increase sample size or move to 100%; low D rating (good detection) may allow frequency reduction |
| Action Priority (AP) / RPN | Overall risk level | Col 7, Col 12, Col 13 | H-AP or high-RPN → SC/CC in Col 7; highest-stringency control in Col 12; most explicit reaction plan in Col 13 |
| Recommended Action (completed) | Improvement action taken | Col 12 — Control Method (updated) | Completed actions that improved controls must be reflected in the CP; CP revision date ≥ PFMEA recommended action completion date |
| Responsibility / Target Date | Owner of the corrective action | Not directly on CP | Confirms the CP is updated after PFMEA actions close — if PFMEA action date is more recent than CP revision, CP is out of date |

### Key Alignment Rules

1. Every PFMEA row with Severity ≥ 8 must have a corresponding CP row — no exceptions.
2. Every PFMEA "Current Detection Control" must appear in CP Column 9 (Measurement Technique) or Column 12 (Control Method).
3. Every completed PFMEA "Recommended Action" that changes a control must be reflected in the CP before the CP is submitted for PPAP.
4. The CP revision date must be ≥ the PFMEA date of last update. If the PFMEA was updated (e.g., after a corrective action or process change) and the CP was not, the CP is out of revision.
5. Process characteristics (KCC) in the PFMEA "Current Prevention Controls" must appear in CP Column 6 — if the PFMEA says "controlled mould temperature" but the CP has no row for mould temperature, there is a gap.

---

## Source: skills/planning/dvp-test-plan/SKILL.md

---
name: dvp-test-plan
description: >-
  Design Verification Plan and Report (DVP&R) — build or review a test plan that links each DFMEA
  failure mode to a specific test, pass/fail criterion, sample size, and timing. Use when creating
  a DVP for a new design, reviewing a supplier's DVP for completeness, or auditing whether all
  design risks are covered by validation testing. Covers IATF 16949 §8.3.4.3 and AIAG APQP Phase 2.
license: MIT
metadata:
  author: RBraga01
  version: "1.1"
  iso-9001: "8.3.4"
  iatf-16949: "8.3.4.3"
  domain: quality-engineering
  subdomain: planning
  industries: automotive,electronics,aerospace,medical,general
  status: approved
  created: "2026-06-06"
  last_updated: "2026-06-06"
  updated_by: migmcc
  reviewed_by: RBraga01
  standard_edition: "IATF 16949:2016 §8.3.4.3 / AIAG APQP 2nd Edition"
---

# Design Verification Plan and Report (DVP&R)

## When to use

Use this skill when:
- Creating a DVP for a new part design during APQP Phase 2
- Reviewing a supplier's DVP for completeness and DFMEA alignment
- Determining which tests are required for a specific failure mode or design characteristic
- Tracking test completion and recording results (the "R" in DVP&R)
- Assessing whether a design change requires additional validation testing

## Prerequisites

- DFMEA with all failure modes identified and AP ratings assigned
- Engineering drawing with all characteristics defined
- Customer design specifications and performance requirements
- List of applicable standards and test methods (customer spec, ISO, SAE, etc.)

## Workflow

### Step 1 — Understand the DVP structure

The DVP&R is a table with one row per test. Each test must address at least one failure mode or design characteristic from the DFMEA.

**The linkage rule:** Every H-AP (High Action Priority) failure mode in the DFMEA must have at least one corresponding test in the DVP. If a failure mode has no test, document why (e.g., analysis-only justification with sign-off).

### Step 2 — Build each DVP row

| Column | What to enter |
|--------|--------------|
| Test number | Sequential reference (e.g., DVP-001) |
| DFMEA reference | Failure mode number(s) this test addresses |
| Test name / description | Specific name of the test (not "durability test" — use "salt spray 240h per ASTM B117") |
| Test specification | Standard or specification number with version (e.g., ASTM B117-19, SAE J2530, customer spec DS-XYZ) |
| Pass/fail criteria | Exact acceptance criteria (e.g., "no rust after 240h", "burst pressure > 150 bar", "dimension within ±0.05 mm") |
| Sample size | Number of parts to test |
| Who performs | Internal lab, external accredited lab, customer lab |
| Phase | P = Prototype, PL = Pre-launch, PR = Production |
| Planned date | Date test is scheduled to complete |
| Actual date | Date test was completed |
| Result | Pass / Fail / In progress |
| Report reference | Lab report number or document reference |
| Comments | Failures, deviations, re-test requirements |

### Step 3 — Determine required tests

For each DFMEA failure mode, identify the test category:

**Functional / performance tests:**
- Tests that verify the product performs its intended function
- Examples: burst pressure, tensile strength, electrical resistance, flow rate
- Must demonstrate the product meets its design intent specifications

**Environmental / durability tests:**
- Tests that simulate the product's operating environment over its design life
- Examples: thermal cycling, salt spray, vibration, UV exposure, humidity
- Duration and cycles must represent the design life or accelerated equivalent

**Safety / regulatory tests:**
- Tests required by law, regulation, or homologation
- Examples: ECE R10 (EMC), FMVSS standards, ECE R94/R95 (crash), REACH, RoHS
- Must be performed by accredited lab; results must accompany PPAP

**Dimensional / material tests:**
- Verification that design dimensions and material properties are achieved
- Examples: 3D scan, CMM, tensile test, hardness test, chemical composition
- Must reference the specific drawing characteristic or material specification

**Reliability / life tests:**
- Tests that verify the product meets its reliability target (e.g., B10 life)
- Examples: fatigue testing, accelerated aging, wear testing
- Test plan must include correlation between accelerated test and field life

### Step 4 — Populate timing per APQP phase

| Phase | Tests due |
|-------|-----------|
| Prototype (P) | Tests on design concept — functional, dimensional, preliminary environmental |
| Pre-launch (PL) | Tests on tooled parts — full environmental, durability, all safety/regulatory |
| Production (PR) | Confirmation tests on production parts — dimensional, safety, any tests with production-specific requirements |

Not all tests need to run in all phases. Focus safety and regulatory tests on Pre-launch or Production parts.

### Step 5 — Track completion (the "R" in DVP&R)

Update the DVP after each test:
- Record actual completion date
- Record Pass/Fail result
- For any Fail: log a DFMEA action (or open an 8D if failure escapes to customer)
- Re-test after corrective action — reference the re-test as a new row with the original DVP number + suffix (e.g., DVP-012-R1)

At PPAP submission: all DVP tests must show "Pass" or have a documented customer-approved deviation. If a test is still in progress at PPAP submission (e.g., a long-duration life test), a formal customer deviation request must be submitted with: the test in progress, the expected completion date, the interim risk assessment, and the customer's written acceptance. The PPAP approval will be conditional until the test completes with a Pass result.

**Engineering changes:** If the DFMEA is updated during the design phase and adds new H-AP failure modes, the DVP must be updated to cover them before the next gate review. A DVP revision that is behind the current DFMEA revision is a gap — the DVP&R revision must match or exceed the DFMEA revision at PPAP submission.

### Step 6 — Audit an existing DVP

When reviewing a supplier's or internal DVP, check:

- [ ] Every H-AP DFMEA failure mode has at least one corresponding test
- [ ] Test specifications reference a specific standard or document (not "internal test")
- [ ] Pass/fail criteria are objective and measurable (not "acceptable appearance")
- [ ] Sample sizes are adequate (not "1 sample" for durability/life tests)
- [ ] Safety and regulatory tests are assigned to an accredited external lab
- [ ] All results show "Pass" (or documented deviations with customer approval)
- [ ] Failed tests have a corresponding DFMEA update or corrective action reference
- [ ] DVP revision is aligned with the current DFMEA revision

## Validation criteria

A complete DVP&R for PPAP submission must:
- Reference every H-AP failure mode from the DFMEA
- Have specific, standard-referenced test methods (not "per engineering judgement")
- Show Pass results for all tests (or customer-approved deviations)
- Have accredited lab reports for all safety/regulatory tests
- Be signed off by design engineering and quality

## Common mistakes

- DVP created with generic tests not linked to specific DFMEA failure modes
- Pass/fail criteria defined as "meets spec" without stating what the spec is
- All tests assigned to internal lab when regulatory tests require external accreditation
- DVP not updated when DFMEA adds new H-AP failure modes during design reviews
- Re-tests after failures not documented — original Fail result erased
- Sample size of 1 for durability or life tests (statistically meaningless)
- DVP not updated to "Report" status at PPAP — submitted as plan, not results

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
| 1.1 | 2026-06-06 | @migmcc | Added guidance for tests in-progress at PPAP submission (customer deviation process); added DVP revision synchronisation with DFMEA requirement |

---

## Source: skills/planning/dvp-test-plan/references/dvp-template.md

---
name: dvp-template
type: reference
parent_skill: dvp-test-plan
author: RBraga01
version: "1.0"
status: approved
created: "2026-06-06"
last_updated: "2026-06-06"
updated_by: migmcc
reviewed_by: RBraga01
license: MIT
---

# DVP&R — Template and Test Reference

Blank DVP&R template with column instructions, test category reference, sample size guidance, pass/fail documentation requirements, and DFMEA linkage table.
Use alongside the [dvp-test-plan](../SKILL.md) skill.

> **Scope:** This document covers the blank DVP&R template structure, column-by-column instructions, a reference library of test categories and example standards, sample size requirements per category, pass/fail criteria documentation standards, and the DFMEA-to-DVP linkage methodology. For the step-by-step DVP build and audit workflow, see [dvp-test-plan SKILL.md](../SKILL.md).

---

## 1. DVP&R Template — Blank Structure

**Document header fields (above the table):**

```
Part Number:                          Rev:
Part Name / Description:
Programme / Vehicle / Platform:
Customer:
Design Engineer:                      Phone / Email:
Quality Engineer:                     Phone / Email:
DVP&R Number:                         Rev:
Date Issued:                          Date Updated:
DFMEA Reference:                      DFMEA Rev:
Approved by (Engineering):            Date:
Approved by (Quality):                Date:
```

**Column structure — one row per test:**

| Col # | Column Name | Brief instruction |
|-------|------------|-------------------|
| 1 | Test Number | Sequential ID (DVP-001, DVP-002, ...) |
| 2 | DFMEA Reference | Failure mode number(s) this test validates |
| 3 | Test Name / Description | Full, specific test name with standard and duration |
| 4 | Test Specification / Method | Standard number + revision (e.g., ASTM B117-19) |
| 5 | Pass / Fail Criteria | Specific, measurable acceptance threshold |
| 6 | Sample Size | Number of parts to be tested |
| 7 | Who Performs | Internal / External lab name |
| 8 | Phase | P = Prototype / PL = Pre-launch / PR = Production |
| 9 | Planned Date | Scheduled completion date |
| 10 | Actual Date | Date test was completed (filled during execution) |
| 11 | Result | Pass / Fail / In Progress / Waived |
| 12 | Report Reference | Lab report number or document reference |
| 13 | Comments / Notes | Failures, deviations, re-test references |

---

## 2. Column-by-Column Instructions

### Column 1 — Test Number

Sequential reference number, unique within the DVP. Format: `DVP-001`, `DVP-002`, etc. Re-tests after failure add a suffix: `DVP-012-R1` (first re-test), `DVP-012-R2` (second re-test). Never delete a failed test row — failure history is a design record.

**Common mistakes:**
- Renumbering after adding rows mid-programme — creates gaps in the audit trail
- Deleting rows where tests failed and re-tests passed — conceals design history; the original Fail result must remain visible

---

### Column 2 — DFMEA Reference

The failure mode ID(s) from the DFMEA that this test is designed to validate. Enter the exact DFMEA row reference (e.g., "FM-014", "Function: Seal Housing / Failure Mode: Crack under thermal cycling"). If one test covers multiple failure modes, list all references.

**Common mistakes:**
- "See DFMEA" without a specific row reference — traceability cannot be confirmed
- A test row with no DFMEA reference — every test must validate something; if there is no DFMEA failure mode, the test may be redundant or the DFMEA is incomplete
- DFMEA updated after DVP was issued — DVP not updated to capture new H-AP failure modes

---

### Column 3 — Test Name / Description

The full, specific name of the test. Be precise: not "durability test" but "Thermal Shock Test -40°C to +125°C, 500 cycles, 30 min dwell per IEC 60068-2-14". Not "salt spray" but "Salt Spray Corrosion Test — 240 hours per ASTM B117".

The name must be specific enough that a different engineer unfamiliar with the programme could identify and procure the test without calling anyone.

**Common mistakes:**
- Generic names ("environmental test", "performance test") that require interpretation
- Test name that omits duration, number of cycles, or key parameters
- Name inconsistent with the test standard listed in Column 4

---

### Column 4 — Test Specification / Method

The specific standard, revision, and any applicable test profile. Format: `[Standard body] [Number]-[Year], [Clause if specific]`.

Examples:
- `ASTM B117-19` (Salt Spray)
- `IEC 60068-2-1:2007, Test Ab (Cold Storage)` (Cold)
- `ISO 16750-3:2023, Table 2 (Road Surface Load)` (Vibration)
- `SAE J2530:2013` (Road Wheel Fatigue)
- Customer spec: `Ford ES-XW7T-1A278-AC, Rev 3` (OEM spec)

If using an internal test method without an external standard: reference the internal test specification number, revision, and the validation data that established the method. Internal-only tests on safety/regulatory characteristics are not acceptable.

**Common mistakes:**
- Omitting the revision year — standards change; the revision must be the version in effect at the time of testing
- Using a superseded standard version — check IHS, ASTM, ISO websites for current edition
- Referencing a customer spec number without revision — the spec may have changed between programme launch and test execution

---

### Column 5 — Pass / Fail Criteria

The specific, measurable acceptance threshold. Every criterion must be unambiguous — a different engineer should be able to make the same Pass/Fail call from the lab report without consulting the DVP author.

**Good examples:**
- "No corrosion (red rust) on functional surfaces after 240h; white corrosion on non-functional surfaces acceptable"
- "Burst pressure ≥ 180 bar; no leakage at 120 bar steady-state for 5 minutes"
- "Maximum deformation ≤ 2.0 mm measured at load point A after 10,000 cycles"
- "All dimensions within ±0.05 mm of nominal per drawing revision C, all 12 critical dims"

**Common mistakes:**
- "Meets specification" without stating what the specification says — not auditable
- "No failure" without defining what constitutes a failure
- "Acceptable appearance" without a reference standard or measurable limit
- Criteria that reference a document not included in the PPAP package

---

### Column 6 — Sample Size

The number of parts to be tested. Must be a specific number, not "TBD" or "as available". See Section 4 for sample size requirements by test category.

**Common mistakes:**
- n = 1 for destructive, durability, or reliability tests — single sample cannot establish statistical confidence
- Sample size selected for convenience ("we only have 3 parts") without evaluating whether 3 is sufficient
- No differentiation between samples for concurrent tests vs. sequential tests on the same parts

---

### Column 7 — Who Performs

Identify the performing laboratory by name and type:
- **Internal:** "[Company name] Internal Lab — [facility location]"
- **External:** "[Lab name], [City, Country], ISO/IEC 17025 cert # [number]"
- **Customer lab:** "Customer lab — [OEM facility]"

For regulatory / safety tests: must be an external accredited laboratory. ISO/IEC 17025 accreditation with scope covering the specific test method is required.

**Common mistakes:**
- "Internal / External TBD" — the performer must be committed in the DVP, not decided later
- Internal lab assigned to safety or regulatory tests that require external accreditation
- Lab name recorded but no accreditation reference — cannot verify the lab's competence

---

### Column 8 — Phase

| Code | Phase | When |
|------|-------|------|
| P | Prototype | Tests on design concept or prototype tooled parts — typically pre-production handmade or soft-tool parts |
| PL | Pre-launch | Tests on hard-tooled production-intent parts; all safety/regulatory must be PL or PR |
| PR | Production | Tests requiring production parts (OEM specs often mandate PR for certification) |

A test may appear in multiple phases (e.g., dimensional verification at P, PL, and PR). Each phase gets its own row or sub-row with its own result.

---

### Column 9 — Planned Date

The target completion date for the test, consistent with the programme timing plan. Must be before the PPAP submission date. For multi-phase tests, enter the planned date for this phase's execution.

---

### Column 10 — Actual Date

Filled during or after test execution. If a test is still "In Progress" at PPAP submission, it is an open item and the PPAP cannot be approved unless the customer grants a deviation with a committed completion date.

---

### Column 11 — Result

| Status | Meaning |
|--------|---------|
| Pass | Test completed; all pass/fail criteria met; lab report available |
| Fail | Test completed; one or more criteria not met; DFMEA action opened |
| In Progress | Test started but not complete |
| Not Started | Test not yet begun (should not exist at PPAP submission) |
| Waived | Customer has formally waived this test with written approval referencing the DVP row |
| Re-test — Pass | Re-test after corrective action; original Fail row retained |

---

### Column 12 — Report Reference

The lab report number, document number, or unique identifier that allows the test result to be retrieved and verified. For external labs: the lab's own report number. For internal tests: the internal document number per the supplier's quality records system.

**Common mistakes:**
- "See attached" without a document number — the DVP must be self-sufficient; attachments are supporting evidence, not the reference
- No report issued for internal tests — even internal tests must generate a traceable record

---

### Column 13 — Comments / Notes

Used for: failure descriptions, deviation references, re-test cross-references, notes on partial passes, and any conditions that affect the validity of the result (e.g., "sample 3 damaged in transit — result based on samples 1, 2, 4, 5"). If a Waiver was granted, reference the waiver document number here.

---

## 3. Test Category Reference

### Category A — Functional / Performance Tests

Verifies the product performs its intended design function under normal operating conditions.

| Test Type | Example Standards | Typical Parameter |
|-----------|-------------------|-------------------|
| Tensile / Pull strength | ISO 6892-1, ASTM E8/E8M | Maximum load, elongation at break |
| Compressive strength | ISO 604, ASTM D695 | Load at yield / at failure |
| Burst / proof pressure | SAE J1019, OEM specs | Pressure at burst; no leakage at proof pressure |
| Torque / breakaway torque | AIAG MSA reference, OEM specs | Minimum breakaway, installation torque |
| Electrical resistance / continuity | IEC 60512, OEM CSR | Resistance limits (mΩ or Ω range) |
| Flow rate / pressure drop | ISO 4021, OEM specs | Flow at specified pressure delta |
| Sealing / leak test | SAE J771, ISO 10110 | Maximum leak rate (mbar·l/s, cc/min) |
| Insertion / extraction force | IEC 60512-13, OEM specs | Min/max force within defined stroke |
| Load-deflection / spring rate | ASTM D1895, OEM specs | Deflection at specified load |

**Sample size guidance:** n ≥ 3 for destructive tests; n ≥ 5 for non-destructive functional tests where variability exists.

---

### Category B — Environmental Tests

Simulates the operating environment over the product's design life. Duration and severity levels must represent the design life or a validated accelerated equivalent.

| Test Type | Example Standards | Key Parameters |
|-----------|-------------------|----------------|
| Salt spray / corrosion | ASTM B117-19, ISO 9227 | Duration (hours); neutral salt spray (NSS) vs. acetic acid (AASS) |
| Thermal shock | IEC 60068-2-14, SAE J2236 | Temperature range; number of cycles; dwell time per extreme |
| Thermal cycling (slow ramp) | IEC 60068-2-14 Test Na; JEDEC JESD22-A104 | Ramp rate (°C/min); cycles; temperature extremes |
| Temperature soak (high) | IEC 60068-2-2, MIL-STD-810H Method 501 | Temperature; duration; loaded or unloaded |
| Temperature soak (low) | IEC 60068-2-1, MIL-STD-810H Method 502 | Temperature; duration |
| Humidity / Damp heat | IEC 60068-2-78, ISO 16750-4 | Temperature + RH %; duration (h) |
| Humidity cycling / condensation | IEC 60068-2-30; ASTM D2247 | Cycles; temperature/humidity profile |
| UV / xenon weathering | SAE J2527, ISO 4892-2 | Irradiance (W/m²); duration (kJ/m²); acceptance (ΔE colour shift, crack rating) |
| Fluid immersion / resistance | SAE J1717, OEM specs | Fluid types; concentration; immersion duration; visual + functional post-check |
| Pressure / altitude | IEC 60068-2-13, MIL-STD-810H Method 500 | Altitude (m); duration |

**Sample size guidance:** n ≥ 3 minimum; n ≥ 5 preferred for qualification. For multi-condition matrices (multiple fluid types or multiple temperature levels), n = 3 per condition.

---

### Category C — Safety / Regulatory Tests

Mandated by law, homologation, or OEM CSR. Must be performed by an externally accredited lab. Results must accompany the PPAP package. Failure in this category prevents PPAP approval without a customer and regulatory authority deviation.

| Regulation / Standard | Scope | Typical Parts |
|-----------------------|-------|---------------|
| ECE R10 (UN Regulation 10) | Electromagnetic Compatibility — vehicles | All electrical / electronic components |
| FMVSS 302 | Flammability of interior materials | Interior plastic, foam, fabric |
| FMVSS 205 | Glazing materials | Window glass |
| ECE R94 / R95 | Frontal / lateral crash | Structural and passive safety components |
| ISO 26262 | Functional safety — road vehicles (ASIL level) | Safety-critical electronics / SW |
| REACH (EC No 1907/2006) | Chemical substance restrictions | All parts (substance declaration) |
| RoHS (2011/65/EU) | Restriction of hazardous substances | Electrical and electronic equipment |
| ELV Directive (2000/53/EC) | End-of-life vehicle — prohibited materials | All automotive parts |
| IATF 16949 §8.3.3.3 | Special characteristics — safety validation | All SC-classified characteristics |
| ISO 11452 / CISPR 25 | EMC — radiated / conducted (component level) | Electronics, sensors, actuators |

**Sample size guidance:** Per the specific regulation or standard — typically n = 3 per test configuration; some regulations define minimum sample quantities explicitly. Never waive regulatory tests without written authority from the relevant regulatory body in addition to customer sign-off.

---

### Category D — Dimensional / Material Tests

Verification that design dimensions and material properties are realised in the production part.

| Test Type | Example Standards | Key Parameters |
|-----------|-------------------|----------------|
| CMM dimensional measurement | ASME Y14.5-2018; ISO 1101 | All drawing characteristics; GD&T datums |
| 3D scanning (full-field) | VDI/VDE 2634 | Point cloud vs. nominal CAD |
| Surface roughness (Ra/Rz) | ISO 4287, ASME B46.1 | Ra or Rz value; measurement direction |
| Hardness (HRC/HRB/HV/HB) | ASTM E18, ISO 6507 | Target hardness grade; number of test points |
| Tensile strength / yield strength | ISO 6892-1, ASTM E8 | UTS (MPa), Yield (MPa), Elongation (%) |
| Chemical composition (spectrometry) | ASTM E415, ISO 14284 | Alloy grade per material specification |
| Coating thickness | ISO 2178 (magnetic), ISO 1463 (cross-section) | Min/max coating thickness (µm) |
| Weld quality (visual + macro) | ISO 5817, AWS D1.1 | Defect class per standard; macro section for penetration |
| Porosity / void content | ASTM E2375, ASTM B276 | Acceptable porosity level per specification |

**Sample size guidance:** For dimensional results supporting PPAP Element 9: minimum 5 parts per cavity/spindle. For material tests: minimum 3 specimens per material lot.

---

### Category E — Durability / Reliability Tests

Establishes that the product meets its reliability target (e.g., B10 life, design life in cycles or hours) under representative or accelerated conditions.

| Test Type | Example Standards | Key Parameters |
|-----------|-------------------|----------------|
| Fatigue / cyclic load | SAE J1099, ASTM E466 | Number of cycles; load amplitude; R-ratio; S-N curve |
| Vibration — random | ISO 16750-3, IEC 60068-2-64, MIL-STD-810H Method 514 | PSD profile (g²/Hz); duration per axis; resonance dwell |
| Vibration — sine sweep | IEC 60068-2-6, ISO 16750-3 | Frequency range; amplitude; sweep rate; resonance dwell |
| Mechanical shock | IEC 60068-2-27, MIL-STD-810H Method 516 | Peak acceleration (g); pulse duration (ms); number of shocks; waveform |
| Wear / abrasion | ASTM G65, ISO 4649, Taber abraser | Abrasion cycles; material loss (mg or mm) |
| Contact fatigue / fretting | ASTM E1012, OEM specs | Cycles; contact pressure; slip amplitude |
| Seal / gasket compression set | ISO 815, ASTM D395 | Compression set % after defined temp/time |
| Actuator / switch endurance | IEC 60512-9, OEM CSR | Number of actuations; contact resistance before/after |
| Accelerated life test (ALT) | MIL-HDBK-217, Arrhenius model | Acceleration factor; field life correlation; B10 / MTTF claim |

**Accelerated test — field life correlation requirement:** When a test uses acceleration (elevated temperature, increased load amplitude, compressed cycles), the DVP must state the acceleration model used (Arrhenius, Coffin-Manson, Miner's rule, etc.), the acceleration factor (AF), and the field life equivalent. Example: "500 thermal shock cycles at ΔT = 165°C (Coffin-Manson β = 2.0) represents 15 years / 150,000 km equivalent."

**Sample size guidance:** See Section 4.

---

## 4. Sample Size Requirements by Test Category

| Category | Test Type | Minimum n | Rationale |
|----------|-----------|-----------|-----------|
| A — Functional | Non-destructive (measured, then parts are reusable) | 5 | Captures part-to-part variability |
| A — Functional | Destructive (part consumed by the test) | 3 minimum; 5 preferred | Cost-constrained minimum; 3 establishes a range |
| B — Environmental | Non-destructive (parts measured pre/post) | 3 minimum; 5 preferred | Pre/post comparison; detects variability in degradation |
| B — Environmental | Destructive (dissected, cross-sectioned post-test) | 3 | Minimum for qualification |
| B — Environmental | Multi-condition matrix (e.g., 3 temperatures × 3 fluids) | 3 per cell | Each condition independently validated |
| C — Regulatory | Per regulation | As required by regulation | Refer to the specific standard — cannot be reduced without regulatory authority approval |
| D — Dimensional | CMM / hand measurement (PPAP Element 9) | 5 per cavity / spindle | AIAG PPAP 4th ed requirement |
| D — Dimensional | Material properties (tensile, hardness, composition) | 3 specimens per lot | Lot-based — traceability must link specimens to the part lot |
| E — Durability | Fatigue / vibration / endurance | 3 minimum; 5 preferred for life claim | 3 establishes a distribution; B10 claim requires ≥ 5 for statistical confidence with Weibull analysis |
| E — Reliability | ALT (accelerated life test) with field life claim | 5 minimum (Weibull r = 2); 10 preferred | B10 life claim at 90% confidence level requires adequate n — use Weibull calculator to confirm |
| C — Regulatory / Safety | EMC, crash, homologation | Per regulation; typically 3 | Cannot deviate without regulatory authority; some regulations specify exact quantities |

**Statistical guidance for reliability claims:**
- B10 life at 90% confidence with Weibull shape parameter β = 2: minimum n = 5 — but only if the test duration is extended to ≈ 2.1× the B10 design life. Testing exactly to the B10 life with n = 5 does not achieve 90% confidence.
- B10 life at 90% confidence with β = 1 (exponential): minimum n = 12 — requires test duration ≈ 1.8× the B10 design life.
- For testing exactly to the B10 design life (no time extension): n ≥ 22 is required regardless of β, to achieve 90% confidence of ≥ 90% reliability. Use the formula n = ln(1−C) / ln(R) where C = 0.90 and R = 0.90.
- Use the AMSAA / Crow reliability growth tool or Weibull analysis software to calculate the exact test duration multiplier for your β and n combination before committing to a test plan.

---

## 5. Pass / Fail Criteria Documentation Requirements

The following elements must be present in every DVP pass/fail criterion. Absence of any element makes the criterion non-auditable and creates a PPAP risk.

| Requirement | Description | Example |
|-------------|-------------|---------|
| Measurable threshold | Numeric limit or defined attribute standard | "≥ 150 bar", "≤ 2.0 mm deflection", "Grade A per ISO 5817" |
| Reference | Standard, drawing, or spec that defines the criterion | "per ASTM B117-19", "per drawing rev C dim 14", "per Ford ES-spec DS-123 Rev 2" |
| Measurement point / location | Where on the part the measurement is taken | "at load point A (per test fixture drawing TF-002)", "on functional bore surface only" |
| Condition at measurement | When / how the measurement is taken relative to the test | "immediately after test end, within 1h", "at room temperature after 24h conditioning" |
| Disposition of acceptable boundary | How the boundary case is handled | "values equal to the limit are Pass", or "limit is exclusive — values equal to limit require engineering review" |

**Attribute criteria (visual / functional) additional requirements:**
- Reference to a visual standard (golden sample, limit sample, photograph with annotations, or published standard table)
- Defined viewing conditions if appearance is part of the criterion (lighting level, viewing distance, viewing angle)
- Training record for inspectors using the attribute standard (if an internal standard)

---

## 6. DVP to DFMEA Linkage Table

How to establish and verify the bi-directional link between each DVP test row and the DFMEA failure mode(s) it validates.

### Linkage Construction Rules

1. **Every H-AP failure mode must have at least one DVP test.** If a failure mode cannot be tested (analysis-only justification), document this in the DVP with the analytical method used and the engineer's sign-off — this is a conscious decision, not an omission.

2. **One test may cover multiple failure modes.** A thermal shock test validates failure modes related to thermal expansion, solder joint fatigue, material embrittlement, and seal degradation simultaneously — list all referenced DFMEA failure mode IDs in Column 2.

3. **Multiple tests may cover one failure mode.** A high-severity failure mode should be validated by more than one test approach (functional test + durability test) — belt and suspenders for high-AP items.

4. **The DFMEA detection control must match the DVP test method.** If the DFMEA says "validated by design analysis only" but the DVP has no test for that failure mode, the DFMEA detection rating (D) is unjustified.

### DFMEA Column to DVP Column Mapping

| DFMEA Column | DFMEA Content | Maps to DVP Column | DVP Usage |
|--------------|--------------|-------------------|-----------|
| Function | What the design element is supposed to do | Col 3 (partially) | Test name context — what the test is verifying the function against |
| Failure Mode | How the function fails | Col 2 — DFMEA Reference | The failure mode ID drives the DVP row existence |
| Failure Effect | What the customer/user experiences | Col 5 — Pass/Fail Criteria (indirectly) | The effect's severity determines the stringency of the criterion |
| Failure Cause | Root cause of the failure mode | Col 3, Col 4 — Test type and method | Test method is chosen to recreate or stress the failure cause mechanism |
| Severity (S) rating | S ≥ 9 | Col 7 — Who Performs | Safety effects (S ≥ 9) must use accredited external lab |
| Action Priority (AP) | H-AP, M-AP, L-AP | Col 6, Col 8 | H-AP: larger sample size; Phase PL or PR required (not P-only) |
| Current Detection Control | "DVP test [reference]" | Confirms test exists in DVP | If DFMEA says "validated by DVP" and the DVP row does not exist, DFMEA detection rating is unjustified |
| Recommended Action (completed) | New test added; test criteria tightened | New DVP row or updated Col 5 | Completed DFMEA actions that add or modify tests must be reflected in the DVP |

### Audit Cross-Reference Matrix (how to perform the linkage audit)

**Step 1:** Extract all H-AP failure modes from the DFMEA. List their IDs.

**Step 2:** For each H-AP failure mode ID, verify there is at least one DVP row with that ID in Column 2 and a non-blank result in Column 11.

**Step 3:** For each DVP row, verify the DFMEA failure mode ID in Column 2 exists in the DFMEA and is still current (not superseded by a DFMEA revision).

**Step 4:** Verify that DVP test specifications (Column 4) use the same standard revision referenced in the DFMEA notes or engineering specification.

**Step 5:** Verify that all DVP rows show "Pass" or "Waived (with reference)" — no "In Progress", "Not Started", or bare "Fail" rows at PPAP submission.

**Step 6:** Check DVP revision date against DFMEA revision date. If the DFMEA was updated after the DVP was issued, the DVP must reflect any new or modified failure modes — especially any new H-AP items added during a design review.

---

## Source: skills/planning/ppap/SKILL.md

---
name: ppap
description: >-
  Production Part Approval Process (PPAP) — verify PPAP submission level, audit all 18 elements,
  check completeness for customer approval, prepare PSW. Use when a supplier needs to submit parts
  for approval, when reviewing a PPAP package, or when determining which PPAP level is required.
  Covers AIAG PPAP 4th edition with Ford, BMW, VW, and Stellantis OEM-specific requirements.
license: MIT
metadata:
  author: RBraga01
  version: "1.1"
  iso-9001: "8.4"
  iatf-16949: "8.3.4, 8.4.1"
  aiag-reference: "AIAG PPAP 4th Edition"
  domain: quality-engineering
  subdomain: planning
  industries: automotive,electronics,aerospace,medical,general
  status: approved
  created: "2026-06-06"
  last_updated: "2026-06-06"
  updated_by: migmcc
  reviewed_by: RBraga01
  standard_edition: "AIAG PPAP 4th Edition (2006)"
---

# Production Part Approval Process (PPAP)

## When to use

Use this skill when:
- A supplier must submit parts for customer approval before Start of Production (SOP)
- A design change, process change, or engineering change requires re-submission
- An OEM or Tier 1 customer requests a PPAP at a specific level
- Reviewing or auditing an incoming PPAP package from a supplier
- Determining what PPAP level is required for a given change

## Prerequisites

- Part number, revision level, and customer drawing
- Bill of Materials (BOM) if applicable
- Production process flow and manufacturing location confirmed
- Customer's PPAP level requirement (Level 1–5) or change category known

## Workflow

### Step 1 — Determine the PPAP Level

| Level | What must be submitted |
|-------|----------------------|
| 1 | Part Submission Warrant (PSW) only — no supporting documents unless requested |
| 2 | PSW + designated samples + limited supporting data |
| 3 | PSW + product samples + complete supporting data (default for new parts) |
| 4 | PSW + other requirements as defined by the customer |
| 5 | PSW + parts and complete supporting data — reviewed at the supplier's manufacturing location |

**Default:** Level 3 for new parts or significant changes. Always confirm with the customer before submitting.

### Step 2 — Identify the change category

PPAP re-submission is required for:
- New part or product
- Engineering change (design revision)
- Change of supplier (sub-supplier, raw material)
- Change of manufacturing location, process, or tooling
- Change that affects fit, form, or function
- Corrective action following a field failure or customer complaint
- Production interruption >12 months

### Step 3 — Prepare all 18 PPAP elements

**Production trial run minimum:** Unless otherwise specified in writing by the authorised customer representative, the production trial run must consist of a **minimum of 300 consecutive parts** produced at the production rate, using production tooling, production process, production operators, and production tooling (AIAG PPAP 4th ed §4.0). This run generates the PPAP samples (Element 14), dimensional results (Element 9), and capability data (Element 11). A run shorter than 300 consecutive parts requires explicit written customer authorisation before PSW can be signed.

Verify each element against the level requirement. For Level 3 (default):

**Element 1 — Design Records**
- Customer drawing (latest revision, stamped/approved)
- Math data if applicable (3D model)
- All referenced specifications

**Element 2 — Engineering Change Documents**
- Approved change documentation (ECN, SREA, or equivalent)
- Required only if an authorized engineering change is in process

**Element 3 — Customer Engineering Approval**
- Written approval from customer engineering (if design is customer-owned)
- Engineering sign-off or deviation/waiver reference number

**Element 4 — DFMEA**
- Customer-approved Design FMEA (if design is supplier-responsible)
- Review all H-AP items for completion before submission

**Element 5 — Process Flow Diagram**
- Sequence of all operations from incoming material to shipment
- Includes: incoming inspection, all process steps, sub-supplier operations, final inspection, packaging

**Element 6 — PFMEA**
- Process FMEA aligned to the Process Flow
- All H-AP items must have completed actions before PPAP
- Reviewed and signed off by responsible engineer

**Element 7 — Control Plan**
- Covers all phases: Prototype, Pre-launch, and Production
- Linked to PFMEA failure modes and controls
- Includes: characteristics, measurement method, sample size/frequency, reaction plan

**Element 8 — Measurement System Analysis (MSA)**
- Gauge R&R study for each measurement system used on special and significant characteristics
- Acceptance criteria: %GRR < 10% preferred, <30% conditional
- Number of distinct categories (ndc) ≥ 5

**Element 9 — Dimensional Results**
- Balloon drawing with all dimensions/tolerances numbered
- Measurement results for each ballooned characteristic
- Minimum 5 parts per cavity/spindle; identify each part
- All results must be within specification (100% conforming for PPAP)

**Element 10 — Material Performance Test Results**
- Functional and durability test results per customer/engineering specification
- Test reports from customer-approved laboratories
- All tests passed with certificate of conformance

**Element 11 — Initial Process Studies (Statistical)**
- Capability studies for all special characteristics (Sc, CC, SC)
- Minimum Cpk ≥ 1.67 preferred; ≥ 1.33 minimum acceptable
- If Cpk < 1.33: customer-approved control plan with 100% inspection required

**Element 12 — Qualified Laboratory Documentation**
- Test reports must be from accredited laboratories (ISO/IEC 17025 preferred)
- In-house labs: scope of accreditation must cover the tests performed

**Element 13 — Appearance Approval Report (AAR)**
- Required only for appearance-critical parts
- Customer sign-off on colour, grain, gloss, and appearance attributes

**Element 14 — Sample Production Parts**
- Minimum 1 sample part per cavity/spindle/die
- From the submission run (not prototype or off-tool samples unless Level 1 or 2)
- Labelled with part number, revision, and date

**Element 15 — Master Sample**
- One signed-off sample retained at the supplier as a reference standard
- Signed by supplier and customer (if required)

**Element 16 — Checking Aids**
- Gauges, fixtures, and check tools used for dimensional verification
- Calibration records for all checking aids
- MSA results for all variable gauges on special characteristics

**Element 17 — Customer-Specific Requirements**
- OEM-specific PPAP requirements (see OEM section below)
- CSR compliance checklist if required

**Element 18 — Part Submission Warrant (PSW)**
- One PSW per part number per submission
- Must be signed by the authorised quality manager
- Submission reason, specification level, and change description completed

### Step 4 — OEM-specific requirements

**Ford:**
- Ford-specific PSW form (not generic AIAG form)
- SREA (Supplier Request for Engineering Approval) for design changes
- ISIR (Initial Sample Inspection Report) may be required
- Ford CSR compliance statement on PSW

**BMW:**
- Form 1410 (Erstmusterprüfbericht / Initial Sample Inspection Report)
- VDA 6.3 process audit may be required before PPAP
- G8D report if PPAP follows a concern

**Volkswagen / Audi:**
- PPF (Produktionsprozess und Produktfreigabe) — VW's PPAP equivalent
- QMSS portal submission required
- Audit of production process mandatory for new parts

**Stellantis:**
- STELLANTIS PPAP requirements per CSR (Customer Specific Requirements)
- Supplier Quality Assurance (SQA) portal submission
- PFMEA must follow AIAG-VDA 2019 format

### Step 5 — PSW Completion and Submission

Complete the PSW accurately:
- Submission reason must match the change category
- Specification level (Level 1–5) confirmed with customer
- All 18 elements checked as complete (or N/A with justification)
- Signed by Quality Manager (not just coordinator)
- Submit through the customer's designated portal or APQP contact

## Validation criteria

Before submitting PPAP:
- All dimensional results 100% within specification
- Cpk ≥ 1.67 for all special characteristics (or documented deviation with customer approval)
- %GRR < 30% for all measurement systems on special characteristics
- All H-AP items in PFMEA have completed actions
- Control Plan covers all special and significant characteristics
- Test reports from accredited labs with pass status
- PSW signed by Quality Manager

## Common mistakes

- Submitting with any out-of-specification dimensional result (automatic rejection)
- Using prototype or pre-production samples for PPAP (must be from production tooling)
- Production trial run shorter than 300 consecutive parts without written customer authorisation — automatic rejection at many OEMs
- Cpk calculated on insufficient data (minimum 100 pieces for capability study)
- MSA not performed for all gauges used on special characteristics
- PFMEA not updated after process changes made during PPAP run
- PSW signed by someone without authority (Quality Manager signature required)
- Submitting Level 3 without retaining a master sample
- Generic AIAG PSW form submitted to Ford (requires Ford-specific form)

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
| 1.1 | 2026-06-06 | @migmcc | Added 300-part production trial run minimum (AIAG PPAP 4th ed §4.0); added to Common Mistakes |

---

## Source: skills/planning/ppap/references/18-elements-checklist.md

---
name: 18-elements-checklist
type: reference
parent_skill: ppap
author: RBraga01
version: "1.0"
status: approved
created: "2026-06-06"
last_updated: "2026-06-06"
updated_by: RBraga01
reviewed_by: RBraga01
license: MIT
---

# PPAP 18 Elements — Detailed Reference Checklist

Acceptance criteria, level requirements, rejection causes, and OEM overrides for all 18 PPAP elements per AIAG PPAP 4th Edition.
Use alongside the [ppap](../SKILL.md) skill.

> **Scope:** This document covers element-by-element acceptance criteria, the Level 1–5 submission matrix, common rejection reasons, OEM-specific deviations, and the expected evidence per element. For the step-by-step submission workflow, see [ppap SKILL.md](../SKILL.md).

---

## 1. Level Requirement Matrix

AIAG PPAP 4th Edition Table 4.1 — `R` = Retain at supplier, `S` = Submit to customer, `*` = Submit on request only, `-` = Not required.

| # | Element | Level 1 | Level 2 | Level 3 | Level 4 | Level 5 |
|---|---------|---------|---------|---------|---------|---------|
| 1 | Design Records | R | S | S | * | R |
| 2 | Engineering Change Documents | R | S | S | * | R |
| 3 | Customer Engineering Approval | R | S | S | * | R |
| 4 | DFMEA | R | R | S | * | R |
| 5 | Process Flow Diagram | R | R | S | * | R |
| 6 | PFMEA | R | R | S | * | R |
| 7 | Control Plan | R | R | S | * | R |
| 8 | Measurement System Analysis | R | R | S | * | R |
| 9 | Dimensional Results | R | S | S | * | R |
| 10 | Material / Performance Test Results | R | S | S | * | R |
| 11 | Initial Process Studies (Capability) | R | R | S | * | R |
| 12 | Qualified Laboratory Documentation | R | S | S | * | R |
| 13 | Appearance Approval Report (AAR) | R | S | S | * | R |
| 14 | Sample Production Parts | R | S | S | * | R |
| 15 | Master Sample | R | R | R | * | R |
| 16 | Checking Aids | R | R | R | * | R |
| 17 | Customer-Specific Requirements | R | R | S | * | R |
| 18 | Part Submission Warrant (PSW) | S | S | S | S | S |

**Legend:** Level 4 requirements are defined entirely by the customer — the `*` column means the customer's Level 4 letter or purchase order specifies which elements to submit or retain. PSW is always submitted regardless of level.

---

## 2. Element Acceptance Criteria and Expected Evidence

### Element 1 — Design Records

**Expected evidence:**
- Controlled copy of the customer drawing at the revision level stated on the PSW
- 3D math data (CATIA, UG/NX, STEP) if referenced on the drawing
- All referenced child drawings and specifications (tolerances, surface finish standards, material specs)
- Stamp or electronic confirmation that the revision is the latest approved issue

**Acceptance criteria:**
- Drawing revision on the PPAP package matches the revision on the PSW
- All referenced specifications are attached or traceable by document number and revision
- No superseded or draft revisions — only formally released documents accepted

**Common rejection reasons:**
- Drawing is a photocopy without an identifiable revision level or release date
- Referenced child specs (e.g., coating spec, heat-treat spec) not included
- Math data version does not match the drawing revision (3D model is newer or older than 2D drawing)
- Customer drawing was revised during PPAP — package not updated to the new revision

---

### Element 2 — Engineering Change Documents

**Expected evidence:**
- Approved Engineering Change Notice (ECN), SREA (Ford), deviation/waiver, or equivalent
- Change description, affected part numbers, and authorisation signatures
- Effectivity date or revision level at which the change is implemented

**Acceptance criteria:**
- Change document is formally approved by customer engineering (not a supplier-initiated change without sign-off)
- All parts affected by the change are listed
- PPAP submission level matches the change impact (design change → Level 3 minimum unless customer specifies otherwise)

**Common rejection reasons:**
- Change document is supplier-internal only — no customer sign-off
- PPAP submitted against a change not yet formally approved by customer
- Multiple open changes on the same part submitted without clear traceability of which changes are covered by this PPAP
- Element submitted as N/A when an active ECN is in progress

---

### Element 3 — Customer Engineering Approval

**Expected evidence:**
- Written sign-off from the customer engineering function (email with name/date, stamped drawing, or approval system record)
- Deviation or waiver number if design does not fully comply with the drawing
- Engineering approval is distinct from quality approval — both may be required

**Acceptance criteria:**
- Approval is from an authorised customer engineering contact (not purchasing or logistics)
- Approval explicitly references the part number, revision, and PPAP submission

**Common rejection reasons:**
- Approval is from the wrong function (purchasing approved, not engineering)
- Approval date predates the current drawing revision — approval is for an older design
- Element marked N/A when the customer design is supplier-owned but the customer requires sign-off on the design
- Verbal approval only — no written record

---

### Element 4 — Design FMEA (DFMEA)

**Expected evidence:**
- Complete DFMEA following AIAG-VDA 2019 format (AP-based) or AIAG 4th edition (RPN-based), as required by the customer
- All failure modes linked to design functions
- Action Priority (AP) ratings completed; all H-AP items have completed actions with effectiveness evidence
- Sign-off by the responsible design engineer and quality

**Acceptance criteria:**
- Required only when the supplier is responsible for the design (design-responsible supplier)
- If design is customer-owned, this element is N/A with a clear statement that the design is customer-owned
- All H-AP or RPN-flagged items (severity ≥ 9 or RPN above threshold) have a completed corrective action
- DFMEA revision matches or is more recent than the drawing revision

**Common rejection reasons:**
- DFMEA submitted for a design-responsible supplier but contains only process failure modes (PFMEA submitted in error)
- H-AP or high-RPN items listed as "planned" or "in process" — not completed before submission
- DFMEA uses old RPN format when customer requires AIAG-VDA AP format
- DFMEA revision level does not match the current drawing revision

---

### Element 5 — Process Flow Diagram

**Expected evidence:**
- Flowchart covering every operation from incoming material receipt through final shipment
- Includes: receiving inspection, sub-supplier operations (if applicable), all manufacturing steps, in-process inspection, final inspection, packaging, and shipping
- Each step labeled with an operation number that maps to PFMEA and Control Plan rows
- Rework and scrap paths shown

**Acceptance criteria:**
- Process Flow is specific to this part — not a generic flow for the product family
- Operation sequence matches the physical layout (floor plan consistent)
- Every step in the Process Flow has a corresponding PFMEA row and Control Plan row

**Common rejection reasons:**
- Generic process flow not specific to the part (copy of another part's flow)
- Sub-supplier or outsourced operations omitted
- Rework loops not shown — customer cannot assess rework controls
- Operation numbering does not match the PFMEA and Control Plan — misalignment causes traceability failure

---

### Element 6 — Process FMEA (PFMEA)

**Expected evidence:**
- PFMEA following AIAG-VDA 2019 format (AP-based) or AIAG 4th edition (RPN-based) as required by the customer
- One row per failure mode per process step
- All H-AP items (or high-RPN items) have completed actions with evidence and updated AP/RPN rating after action
- Sign-off by responsible process engineer and quality; customer review signature if required

**Acceptance criteria:**
- Covers every operation in the Process Flow — no steps omitted
- Detection controls in the PFMEA match the controls listed in the Control Plan
- All recommended actions completed before PSW is signed — no open H-AP items at submission

**Common rejection reasons:**
- PFMEA updated after PPAP run without re-running the capability study — misalignment between PFMEA controls and demonstrated process
- H-AP items marked "completed" but effectiveness verification not documented
- Detection controls in PFMEA say "SPC chart" but Control Plan shows "visual inspection" — inconsistency
- PFMEA covers only production process but omits incoming material inspection step

---

### Element 7 — Control Plan

**Expected evidence:**
- Production Control Plan (the version for submission — not Prototype or Pre-launch CP)
- All columns populated per AIAG Control Plan Reference Manual: operation, machine/device, characteristic, specification, measurement method, sample size, frequency, control method, reaction plan
- All special characteristics (SC, CC, KPC) present with correct customer symbol
- Signed by the multifunctional team; customer approval signature if required by the customer

**Acceptance criteria:**
- Every row has a complete reaction plan (not just "notify supervisor")
- 100% inspection or Cpk ≥ 1.67 + SPC specified for all SC/CC characteristics
- Sample size and frequency are specific numbers — "as required" or "as needed" is not accepted
- CP revision is more recent than the PFMEA (cannot submit an older CP against a newer PFMEA)

**Common rejection reasons:**
- Prototype or Pre-launch CP submitted instead of Production CP
- Missing SC/CC characteristics — auditor compares CP to drawing and PFMEA, any gap is a rejection
- Reaction plan column blank or says only "quarantine" without specifying next steps
- Control method for an SC characteristic is "visual inspection" — requires SPC or 100% with confirmed Cpk

---

### Element 8 — Measurement System Analysis (MSA)

**Expected evidence:**
- Gauge R&R study (variable) or attribute agreement analysis (attribute) for each gauge used to measure special or significant characteristics
- GR&R study report: %GRR, %Study Variation, number of distinct categories (ndc)
- Bias and linearity studies if required by the customer
- Calibration certificate for all gauges used in the MSA

**Acceptance criteria:**
- %GRR < 10%: acceptable for all uses
- %GRR 10–30%: conditional — may be acceptable based on importance of characteristic and cost of gauge improvement (requires customer concurrence)
- %GRR > 30%: not acceptable — gauge must be improved or replaced before PPAP
- ndc ≥ 5 for all variable gauges on special characteristics

**Common rejection reasons:**
- MSA performed with 2 appraisers and 5 parts — AIAG requires minimum 2–3 appraisers and 10 parts (minimum 30 study points)
- %GRR between 10–30% submitted without customer concurrence
- MSA done with a gauge different from the one used in production (lab gauge, not the production fixture gauge)
- Attribute gauge MSA not performed — attribute agreement analysis required for go/no-go gauges on SC/CC

---

### Element 9 — Dimensional Results

**Expected evidence:**
- Ballooned drawing with every dimension and tolerance numbered
- Dimensional results spreadsheet listing: balloon number, nominal, tolerance, measured value per part
- Minimum 5 parts per cavity / spindle / die / head — each part identified by cavity/position
- CMM reports, hand-measurement records, or 3D scan data as applicable

**Acceptance criteria:**
- 100% of all ballooned dimensions within specification — no out-of-tolerance results at submission
- All cavities and spindles measured separately — not averaged
- All GD&T callouts (flatness, true position, parallelism) measured and reported

**Common rejection reasons:**
- Any single dimension out of specification — automatic rejection regardless of significance
- Only 1 part measured when 5 per cavity are required
- Balloon numbers on the drawing do not match the results spreadsheet
- GD&T datums used incorrectly — part restrained or fixtured differently from the drawing datum scheme
- "Target" or "nominal" entered as the result instead of the actual measured value

---

### Element 10 — Material and Performance Test Results

**Expected evidence:**
- Test reports for all tests specified on the drawing or in referenced material/performance specifications
- Laboratory identification and accreditation scope (ISO/IEC 17025 preferred)
- Pass/fail status explicitly stated on each test report
- Certificate of Conformance (CoC) from the raw material supplier

**Acceptance criteria:**
- All tests show "Pass" against the specified acceptance criteria
- Test specimens are from production material — not prototype, pre-production, or off-specification material
- Test standard and revision referenced in the report matches the drawing specification

**Common rejection reasons:**
- Test report says "results attached" without a clear pass/fail conclusion
- Tests performed on specimens machined from a billet rather than the actual production part
- Incomplete test matrix — not all tests required by the specification are covered
- Material CoC shows a different alloy or heat number than the material used in the PPAP run

---

### Element 11 — Initial Process Studies (Capability)

**Expected evidence:**
- Cpk and Pp/Ppk study for each special characteristic (SC, CC, KPC, KCC)
- Minimum 100 consecutive pieces from the PPAP significant production run (not from multiple runs combined)
- Control chart (X-bar R or Individuals & Moving Range) showing process stability before calculating Cpk
- Distribution analysis (normality check) — if non-normal, state the distribution used and justify

**Acceptance criteria:**
- Cpk ≥ 1.67: preferred — no additional conditions
- Cpk 1.33–1.67: acceptable — customer may require an improvement plan
- Cpk < 1.33: not acceptable unless customer grants a formal deviation; requires 100% inspection if deviation granted
- Process must be stable before Cpk is calculated — if control chart shows special causes, the data is not valid

**Common rejection reasons:**
- Cpk calculated on fewer than 30 pieces — some customers require a minimum of 100
- Process shows out-of-control signals on the control chart but Cpk is still reported — process is not stable
- Cpk calculated using specification-based sigma instead of actual process sigma
- Capability study run on prototype parts or pre-production pilot, not the PPAP significant production run
- Multiple small sub-groups combined to inflate n — all 100+ pieces must be consecutive from one continuous run

---

### Element 12 — Qualified Laboratory Documentation

**Expected evidence:**
- Copy of the laboratory's ISO/IEC 17025 accreditation certificate with scope of accreditation
- The accreditation scope must explicitly cover the test methods performed (e.g., ASTM B117 salt spray listed in scope)
- For in-house labs: internal calibration system documentation and scope statement
- For customer labs: customer lab identification

**Acceptance criteria:**
- Accreditation is current (not expired) as of the test date
- Scope of accreditation covers the specific test standard used (not just a general category)

**Common rejection reasons:**
- Lab is accredited but the specific test method is not within the accredited scope
- Accreditation certificate expired before the test was performed
- In-house lab used for regulatory tests that require external accreditation (e.g., EMC, crash, chemical)
- Lab certificate submitted for a different lab location than where the test was performed

---

### Element 13 — Appearance Approval Report (AAR)

**Expected evidence:**
- Completed AAR form (AIAG standard or OEM-specific form)
- Customer sign-off on: colour (spectrophotometer data), gloss level, grain/texture, clarity, and visual appearance attributes
- Colour measurement data (Lab* values) for the approved colour against the master standard
- Customer representative signature and date

**Acceptance criteria:**
- Required only for parts with appearance requirements (exterior trim, interior panels, painted/plated surfaces)
- Not required for structural components with no appearance specification
- Customer signature must be from the authorised styling/colour approval function — not quality or purchasing

**Common rejection reasons:**
- AAR not submitted for a part with an appearance specification (omission)
- AAR submitted for a non-appearance part — wastes review time and implies misunderstanding
- Colour data shows Delta E > 1.0 against the master standard but AAR is signed — inconsistency raises a concern
- AAR signed by a purchasing or quality contact rather than the styling/appearance engineer

---

### Element 14 — Sample Production Parts

**Expected evidence:**
- Physical sample parts from the significant production run
- Labelled with: part number, revision, date of manufacture, cavity/spindle number, PPAP submission reference
- Quantity as specified by the customer (Level 2: typically 2–5 per cavity; Level 3: as specified in customer's PPAP requirements, commonly 3–10)

**Acceptance criteria:**
- Parts must be from production tooling run at production speed and conditions — not hand-made, off-tool, or prototypes
- Each cavity/spindle must be represented
- Parts must not be cosmetically selected — random from the PPAP run

**Common rejection reasons:**
- Prototype or first-off-tool samples submitted when production-run samples are required
- Parts not labelled — traceability to the PPAP run cannot be confirmed
- Only one cavity represented when the tool has multiple cavities
- Parts selected for best appearance rather than being random production samples

---

### Element 15 — Master Sample

**Expected evidence:**
- One boundary sample retained at the supplier's manufacturing location
- Signed by the supplier quality manager; customer signature if required
- Stored in a controlled location — protected from damage, corrosion, or contamination
- Labelled with: part number, revision, approval date, and reference to the PPAP submission

**Acceptance criteria:**
- Must remain at the supplier for the life of the PPAP approval or until superseded by a new PPAP
- If a customer-signed master sample is required, a copy of the signed sample record must be in the PPAP package

**Common rejection reasons:**
- No master sample retained — supplier cannot demonstrate what the approved condition looks like
- Master sample stored incorrectly (rusted, damaged, or contaminated)
- Master sample is from a different run than the PPAP significant production run
- Sample not signed or labelled — cannot be traced to the PPAP approval

---

### Element 16 — Checking Aids

**Expected evidence:**
- List of all checking fixtures, gauges, and inspection devices used for dimensional verification
- Calibration certificate for each device (current, with next calibration due date)
- MSA study referenced for each variable gauge used on special characteristics
- Functional check procedure if checking aids are used as go/no-go devices

**Acceptance criteria:**
- All calibration certificates current as of the PPAP submission date
- Any checking fixture designed for this part must have a traceable design (fixture drawing or reference)
- MSA results for variable gauges on SC/CC must be in Element 8 — Element 16 cross-references them

**Common rejection reasons:**
- Calibration expired on one or more gauges used during the PPAP dimensional check
- Checking aid list incomplete — dimensions were measured with a gauge not listed
- Gauge used in production differs from the gauge used in the PPAP study
- Functional checking fixture without a qualified calibration method — "functionally checks" is not adequate

---

### Element 17 — Customer-Specific Requirements

**Expected evidence:**
- Completed CSR compliance checklist (if the customer provides one)
- OEM-specific supplemental forms (see OEM overrides table below)
- Reference to customer portal submission (Ford WERS, GM Covisint, BMW form 1410, VW QMSS, Stellantis SQA)
- VDA 6.3 process audit report (if required by BMW or VW)

**Acceptance criteria:**
- All customer-specific requirements are either met or documented as N/A with justification
- OEM-specific forms are current revision (outdated forms are rejected)

**Common rejection reasons:**
- Generic AIAG submission without addressing CSR requirements
- CSR checklist not completed or not attached
- OEM-specific form missing (e.g., BMW 1410 or Ford-specific PSW)
- Submitted via email when OEM requires portal submission

---

### Element 18 — Part Submission Warrant (PSW)

**Expected evidence:**
- One PSW per part number per submission (not one PSW covering multiple part numbers)
- Completed fields: supplier name, supplier code, customer name, part number, revision, submission reason, specification level, weight (actual and drawing), whether samples are enclosed
- Explanation of any deviations from PPAP requirements
- Signature: authorised supplier quality manager (not a coordinator or technician)

**Acceptance criteria:**
- All fields completed — no blank fields without justification
- Submission reason matches the change category that triggered the PPAP
- "Have all elements been satisfied?" — customer is looking for honest disclosure; flagging outstanding deviations is expected and preferable to submitting a false statement
- PSW signed at the quality manager level or higher

**Common rejection reasons:**
- PSW signed by a coordinator without authority
- Submission reason does not match the actual change (e.g., "new part" selected when this is a re-submission after a corrective action)
- Weight field blank or showing drawing weight rather than actual measured weight
- PSW states "all elements complete" when the package is missing elements — misrepresentation
- Generic AIAG PSW submitted to Ford (Ford requires their own PSW form)

---

## 3. OEM-Specific Overrides Table

Deviations from the AIAG PPAP 4th Edition baseline.

| Topic | AIAG Baseline | Ford | BMW | Volkswagen / Audi | Stellantis |
|-------|--------------|------|-----|-------------------|------------|
| PSW form | AIAG generic PSW | Ford-specific PSW (WERS-linked) — AIAG form rejected | BMW 1410 form (Erstmusterprüfbericht) required | PPF form — VW's PPAP equivalent; AIAG PSW not used | Stellantis-specific PSW via SQA portal |
| FMEA format | AIAG 4th ed RPN or AIAG-VDA 2019 | AIAG-VDA 2019 AP format required | AIAG-VDA 2019 AP format required | AIAG-VDA 2019 AP format required | AIAG-VDA 2019 AP format required |
| Submission portal | No portal defined | WERS / PPAP Manager portal | e.g., LIDS / BMW PPAP system | QMSS portal; document upload mandatory | Stellantis SQA portal |
| Design change documentation | ECN or equivalent | SREA (Supplier Request for Engineering Approval) — separate from ECN | Änderungsantrag through BMW system | VDA 2 deviation process | GPIRS (Global PPAP Initiating Request System) |
| Process audit | Not explicitly required | Q1 process audit may be required at new suppliers | VDA 6.3 process audit required before PPAP for new suppliers | VDA 6.3 process audit — P5/P6/P7 elements must score ≥ 4.0 | Stellantis supplier assessment required |
| ISIR | Not defined | ISIR (Initial Sample Inspection Report) may be required in addition to dimensional results | Dimensional results submitted within the 1410 form (integrated) | DFU dimensional results per QMSS format | Standard dimensional results accepted |
| Capability minimum | Cpk ≥ 1.67 preferred; ≥ 1.33 minimum | Cpk ≥ 1.67 for all SC; Cpk < 1.67 requires Ford engineering approval | Cpk ≥ 1.67 for CC; Cpk ≥ 1.33 for SC | Cpk ≥ 1.67 for CC; Cpk ≥ 1.33 for SC | Cpk ≥ 1.67 for SC/CC; Cpk < 1.33 rejected |
| Sample quantity | As specified per level | Typically 5 parts minimum per cavity for Level 3 | 5 parts minimum per cavity | 5 parts minimum | 5–10 parts per cavity depending on CSR |
| AAR | Required for appearance parts | Ford-specific AAR form; colour measurement mandatory | BMW AAR process with styling centre sign-off | VW colour release process | Stellantis AAR through SQA portal |
| Lab accreditation | ISO/IEC 17025 preferred | ISO/IEC 17025 required for safety/regulatory; A2LA or equivalent | ISO/IEC 17025 required; DAkkS (German accreditation) recognised | ISO/IEC 17025 required | ISO/IEC 17025 required for regulated tests |
| Appearance approval | AAR per AIAG | Master part retained at Ford facility; Ford CQAAS system | Master sample at BMW styling; mirror sample at supplier | VW musterbauteil process | Stellantis appearance approval via SQA |
| Re-submission after failure | Not explicitly defined | PPAP re-submission with 8D reference required after corrective action | G8D required before re-PPAP for quality escapes | QMSS concern linked before re-submission | GPIRS re-initiation through SQA portal |

---

## 4. Element Submission Checklist — What Document or Evidence Is Expected

Use this as the physical package checklist before sealing the PPAP submission.

| # | Element | Document / Evidence | Format |
|---|---------|--------------------|----|
| 1 | Design Records | Latest released drawing (all sheets); 3D model if applicable; all referenced specs | PDF + native CAD or STEP |
| 2 | Engineering Change Documents | ECN / SREA / deviation signed by customer engineering | PDF (signed) |
| 3 | Customer Engineering Approval | Approval email, stamped drawing, or system record | PDF or portal record |
| 4 | DFMEA | DFMEA in AIAG-VDA or AIAG 4th ed format, signed off | Excel / AIAG spreadsheet or PDF |
| 5 | Process Flow Diagram | Flowchart covering all operations, rework paths, inspection points | Visio / PowerPoint / PDF |
| 6 | PFMEA | PFMEA aligned to Process Flow, all H-AP complete, signed off | Excel / AIAG-VDA spreadsheet or PDF |
| 7 | Control Plan | Production CP, all 13 columns populated, signed | Excel / AIAG template or PDF |
| 8 | MSA Studies | GR&R reports (one per gauge per characteristic); attribute agreement analysis if applicable | Minitab report / Excel / PDF |
| 9 | Dimensional Results | Ballooned drawing + results spreadsheet, 5 parts per cavity | PDF (ballooned) + Excel (results) |
| 10 | Material / Performance Tests | Lab test reports for all specification tests; material CoC | PDF (lab-stamped) |
| 11 | Process Capability | Cpk study with control chart; ≥ 100 consecutive parts from PPAP run | Minitab / Excel / PDF |
| 12 | Lab Documentation | ISO/IEC 17025 certificate with scope covering the tests performed | PDF (current, not expired) |
| 13 | AAR | Completed AAR form; colour measurement data; customer signature | PDF (signed) |
| 14 | Sample Parts | Physical parts labelled with PN, rev, date, cavity — shipped or available on request | Physical |
| 15 | Master Sample | Physical sample retained at supplier; signed label; storage record | Physical + signed label record |
| 16 | Checking Aids | List of all gauges/fixtures; calibration certs; MSA cross-reference | Excel or PDF |
| 17 | CSR Requirements | CSR compliance checklist; OEM-specific supplemental forms; portal submission record | PDF + portal acknowledgement |
| 18 | PSW | Completed and signed PSW (OEM-specific form if required) | PDF (wet or electronic signature) |

