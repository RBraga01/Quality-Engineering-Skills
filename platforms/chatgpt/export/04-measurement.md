# Quality Engineering Skills — measurement

Generated from the canonical skills tree; each document follows in full.

---

## Source: skills/measurement/msa-gauge-rr/SKILL.md

---
name: msa-gauge-rr
description: >-
  Measurement System Analysis (MSA) and Gauge Repeatability & Reproducibility (Gauge R&R) — plan,
  execute, and interpret an MSA study for variable or attribute measurement systems. Use when
  qualifying a gauge for a new part, validating a measurement system before PPAP, interpreting
  Gauge R&R results, or auditing MSA studies for adequacy. Covers AIAG MSA 4th edition.
license: MIT
metadata:
  author: RBraga01
  version: "1.1"
  iso-9001: "7.1.5"
  iatf-16949: "7.1.5.1, 7.1.5.2"
  aiag-reference: "AIAG MSA 4th Edition"
  domain: quality-engineering
  subdomain: measurement
  industries: automotive,electronics,aerospace,medical,general
  status: approved
  created: "2026-06-06"
  last_updated: "2026-06-06"
  updated_by: migmcc
  reviewed_by: RBraga01
  standard_edition: "AIAG MSA 4th Edition (2010)"
---

# Measurement System Analysis (MSA) / Gauge R&R

## When to use

Use this skill when:
- Qualifying a measurement system for a new part or process (PPAP requirement)
- Interpreting Gauge R&R results — is this gauge acceptable?
- Auditing a supplier's MSA study for correctness and adequacy
- Selecting the right study type for a given measurement situation
- Investigating a quality problem where measurement error may be a factor
- Responding to a customer request for MSA data on a specific characteristic

## Prerequisites

- The characteristic to be measured (product or process)
- The gauge or measurement system to be studied
- Production parts spanning the expected process variation (10 parts minimum)
- At least 2 trained appraisers who normally perform the measurement
- The specification (tolerance) for the characteristic

## Workflow

### Step 1 — Select the MSA study type

| Study type | When to use |
|-----------|-------------|
| **Gauge R&R (crossed)** | Variable data, 2–3 appraisers, each measures all parts (most common) |
| **Gauge R&R (nested)** | Variable data, parts are destroyed during measurement (e.g., tensile test) |
| **Attribute MSA** | Pass/fail, go/no-go, visual inspection — data is not a number |
| **Bias study** | Accuracy of a single gauge vs. a reference standard |
| **Linearity study** | Whether gauge accuracy is consistent across its measurement range |
| **Stability study** | Whether gauge accuracy drifts over time |

For PPAP: Crossed Gauge R&R is required for all variable gauges on special characteristics.

---

### Step 2 — Crossed Gauge R&R study procedure

**Setup:**
- Minimum **10 parts** selected to represent the full process variation range (not cherry-picked from centre of tolerance)
- Minimum **2 appraisers** (3 preferred)
- Minimum **2 trials** per appraiser per part (3 preferred)
- Parts randomly numbered and labelled — appraisers must not see each other's measurements
- Measurement conditions must match normal production conditions

**Standard study design:**
- 10 parts × 3 appraisers × 2 trials = 60 measurements
- 10 parts × 2 appraisers × 3 trials = 60 measurements

**Execution:**
1. Appraiser A measures all 10 parts in random order — record results
2. Appraiser B measures all 10 parts in random order — record results
3. Appraiser C measures all 10 parts in random order — record results
4. Repeat the cycle for trial 2 (and trial 3 if applicable)
5. Appraisers must not see their own previous results or other appraisers' results during the study

**Do NOT:**
- Allow appraisers to adjust the gauge between trials
- Use parts that are all near the nominal value (no spread)
- Record only one trial (single measurement per appraiser per part is insufficient)

---

### Step 3 — Interpret the results

#### %GRR (Gauge R&R as % of Total Variation or % of Tolerance)

| %GRR | Interpretation | Decision |
|------|---------------|---------|
| < 10% | Excellent | ✅ Gauge accepted |
| 10% – 30% | Marginal | ⚠️ May be acceptable based on application — requires engineering review and customer approval |
| > 30% | Unacceptable | ❌ Gauge not suitable — investigate and improve before use in production |

**Two calculation methods:**
- **% of Study Variation (% of TV):** GRR / Total Variation × 100 — preferred when process is in control
- **% of Tolerance:** GRR / Tolerance × 100 — use when process capability is unknown or for attribute gauging

For PPAP, %GRR < 30% (tolerance method) is the typical customer acceptance criterion. <10% is the target.

#### Number of Distinct Categories (ndc)

ndc = 1.41 × (Part Variation / GRR)

| ndc | Interpretation |
|-----|---------------|
| ≥ 5 | ✅ Gauge can distinguish adequate number of categories |
| 3 – 4 | ⚠️ Gauge can be used for go/no-go decisions only |
| 1 – 2 | ❌ Gauge cannot distinguish parts — unacceptable |

ndc ≥ 5 is required for measurement systems used on special characteristics.

#### Repeatability vs. Reproducibility

| Component | Description | Common cause |
|-----------|-------------|-------------|
| **EV (Equipment Variation / Repeatability)** | Variation when same appraiser measures same part multiple times | Gauge imprecision, worn parts, environment |
| **AV (Appraiser Variation / Reproducibility)** | Variation between different appraisers measuring the same part | Training inconsistency, measurement technique, gauge setup |

If EV > AV: investigate gauge (calibration, maintenance, resolution)
If AV > EV: investigate training, measurement procedure, gauge fixture/setup

#### When %GRR > 30% — improving the measurement system

A result >30% means the gauge is not suitable for production use. Do not proceed to PPAP — investigate and retest. Common root causes and actions:

| Root cause (high EV) | Action |
|---------------------|--------|
| Gauge resolution too coarse | Replace with a gauge of finer resolution (rule: resolution ≤ 10% of tolerance) |
| Gauge worn or damaged | Inspect, recalibrate, or replace the gauge |
| Environmental interference (vibration, temperature) | Move measurement to a stable environment; add fixture if needed |
| Inconsistent part fixturing | Design a repeatable fixture or measurement aid |

| Root cause (high AV) | Action |
|---------------------|--------|
| Measurement technique varies by appraiser | Develop a standardised measurement instruction (WI with photos/video) |
| Gauge difficult to read or position | Redesign fixture; add a datum locator; use a self-positioning gauge |
| Training gap | Retrain all appraisers using the standardised measurement WI; repeat the study |

After implementing improvements: re-run the full study. Do not accept a %GRR > 30% result with a customer waiver unless the characteristic is non-critical and the customer explicitly agrees in writing.

---

### Step 4 — Attribute MSA (pass/fail gauges)

For go/no-go gauges, visual inspection, and any pass/fail decision:

**Expanded attribute study (recommended for PPAP):**
- 50 parts spanning the full range (include parts near the accept/reject boundary)
- 3 appraisers × 3 trials per part = 450 measurements
- Calculate % agreement (within appraiser and between appraisers)
- Calculate kappa statistic (Cohen's kappa ≥ 0.9 is acceptable)

**Short method (minimum acceptable):**
- 20 parts × 2 appraisers × 2 trials
- 90% agreement within and between appraisers required
- Include borderline parts near the specification limit

---

### Step 5 — Audit an existing MSA study

When reviewing a supplier's or internal MSA, check:

- [ ] Parts selected represent the full process variation range (not all near nominal)
- [ ] Minimum 10 parts, 2 appraisers, 2 trials confirmed
- [ ] Appraisers did not see each other's or their own previous results
- [ ] %GRR result stated clearly (tolerance method or study variation method — which one?)
- [ ] ndc ≥ 5 for all special characteristics
- [ ] EV vs. AV breakdown analysed and interpreted
- [ ] %GRR < 30% (conditional: <10% preferred)
- [ ] For attribute gauges: kappa statistic calculated
- [ ] Study performed in production conditions (not in metrology lab if production measurement is on the line)
- [ ] Gauge calibration certificate current at time of study

---

## Validation criteria

An MSA study is acceptable for PPAP when:
- %GRR < 30% (tolerance method) — <10% preferred
- ndc ≥ 5
- Study conducted with production appraisers using production gauges in production conditions
- Parts selected from the full process variation range
- Results documented with part numbers, appraiser IDs, gauge ID, and calibration reference

## Common mistakes

- Parts selected near the nominal value only — artificially inflates ndc and understates GRR
- Appraiser A re-measures all parts immediately — not the same as separate trials (must separate in time)
- Using metrology lab gauges for an MSA of a production line gauge — study must use the same gauge in the same conditions
- %GRR > 30% submitted in PPAP without explanation or customer waiver
- Gauge calibration expired at time of MSA study — study is invalid
- ndc < 5 on a special characteristic — automatic PPAP finding in IATF audits
- Attribute MSA with only 2 appraisers and no borderline parts — study has no discriminating power

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
| 1.1 | 2026-06-06 | @migmcc | Added improvement guidance for %GRR > 30% — root cause table for high EV and high AV with corrective actions |

---

## Source: skills/measurement/msa-gauge-rr/references/gauge-rr-study-guide.md

---
name: gauge-rr-study-guide
type: reference
parent_skill: msa-gauge-rr
author: RBraga01
version: "1.0"
status: approved
created: "2026-06-06"
last_updated: "2026-06-06"
updated_by: migmcc
reviewed_by: RBraga01
license: MIT
---

# Gauge R&R Study Conductor Guide

Operational guide for planning, executing, and documenting a crossed Gauge R&R study (10 parts × 3 appraisers × 2 trials).
Use alongside the [msa-gauge-rr](../SKILL.md) skill.

> **Scope:** This document covers how to run the physical study — part selection, randomisation, data collection, method selection, and manual calculations with a worked numeric example. For interpretation thresholds, audit criteria, and study type selection, see [msa-gauge-rr SKILL.md](../SKILL.md).

---

## 1. Pre-Study Preparation Checklist

Before any measurements are taken, confirm the following:

| Item | Requirement | Verified |
|------|-------------|---------|
| Parts selected | 10 parts spanning the full process variation range | [ ] |
| Gauge identified | Single gauge to be studied (ID, calibration cert current) | [ ] |
| Calibration current | Gauge calibration certificate valid at time of study | [ ] |
| Appraisers selected | 3 appraisers who normally perform this measurement in production | [ ] |
| Appraiser briefing | All three briefed: do not share results, do not adjust gauge | [ ] |
| Location | Study performed in production conditions (not metrology lab, unless production is the lab) | [ ] |
| Specification available | USL, LSL, and tolerance value confirmed and recorded | [ ] |
| Data sheet ready | Blank data collection sheet prepared (see Section 4) | [ ] |
| Random order generated | Measurement order randomised per appraiser per trial | [ ] |

---

## 2. Part Selection Criteria

Part selection is the single most common study error. Incorrect part selection invalidates the ndc result.

### Rules for Selecting Parts

1. **Span the full process variation range.** Parts must cover the range of values the process actually produces — from low end to high end. Do NOT select parts near the nominal or tolerance centre.
2. **Include borderline parts.** At least 2 parts should be near (but within) the specification limits.
3. **Do not cherry-pick conforming parts only.** If the process produces parts close to the limit, those must be included.
4. **Avoid selecting based on measurement value if possible.** Ideal selection: take consecutive production parts and measure them independently, then verify spread before proceeding.
5. **Parts must be stable.** Parts must not change dimension during handling between trials. For elastic or deformable parts, use fixturing.
6. **10 parts minimum.** Fewer parts reduce the statistical power of the ndc calculation.

### How to Verify Adequate Spread

After selecting parts and before starting the study, measure all 10 parts once with a reference gauge. Plot values on a number line:

- If all 10 values cluster within 20% of the tolerance range → part selection is inadequate. Select new parts.
- If values span at least 70% of the observed process range → part selection is adequate.

### Label Parts Neutrally

Code parts 1–10 (or use production serial numbers). Do not write the measured value on the part label. Appraisers must not know which parts are "near the limit."

---

## 3. Randomisation Procedure

Each appraiser must measure all 10 parts in a different random order for each trial. This is not optional — it prevents sequence bias and ensures trial-to-trial variation is captured.

### Generating the Random Order

Use a random number generator (calculator, Excel RAND(), or drawn slips):

**Example randomisation for 10 parts, 3 appraisers, 2 trials:**

| Trial | Appraiser A | Appraiser B | Appraiser C |
|-------|------------|------------|------------|
| Trial 1 | 7,2,9,1,5,3,10,6,4,8 | 3,8,1,6,10,4,2,9,5,7 | 5,1,8,3,6,10,4,7,2,9 |
| Trial 2 | 4,10,3,8,2,6,1,5,9,7 | 9,5,2,7,1,8,6,3,10,4 | 2,6,9,4,7,1,8,5,3,10 |

**Rules:**
- Appraiser A completes all 10 parts (Trial 1) before Appraiser B starts.
- Appraiser A does NOT see Appraiser B's or C's results at any time.
- Appraiser A does NOT see their own Trial 1 results before Trial 2.
- Minimum time between trials for the same appraiser: sufficient to prevent memory of previous readings (typically the time for the other appraisers to complete their trial).
- The conductor (study coordinator) records all readings. Appraisers do not self-record.

---

## 4. Data Collection Sheet Template

```
GAUGE R&R STUDY — DATA COLLECTION SHEET
=========================================
Part Number:          ________________    Characteristic:       ________________
Specification (USL):  ________________    Specification (LSL):  ________________
Tolerance (USL-LSL):  ________________    Units:                ________________
Gauge ID:             ________________    Gauge Description:    ________________
Calibration Cert #:   ________________    Calibration Expiry:   ________________
Study Date:           ________________    Location:             ________________
Conducted by:         ________________

APPRAISERS
Appraiser A: ________________    Appraiser B: ________________    Appraiser C: ________________

─────────────────────────────────────────────────────────────────────────────
         APPRAISER A           APPRAISER B           APPRAISER C
Part  T1      T2    Range   T1      T2    Range   T1      T2    Range
─────────────────────────────────────────────────────────────────────────────
 1   ____   ____   ____   ____   ____   ____   ____   ____   ____
 2   ____   ____   ____   ____   ____   ____   ____   ____   ____
 3   ____   ____   ____   ____   ____   ____   ____   ____   ____
 4   ____   ____   ____   ____   ____   ____   ____   ____   ____
 5   ____   ____   ____   ____   ____   ____   ____   ____   ____
 6   ____   ____   ____   ____   ____   ____   ____   ____   ____
 7   ____   ____   ____   ____   ____   ____   ____   ____   ____
 8   ____   ____   ____   ____   ____   ____   ____   ____   ____
 9   ____   ____   ____   ____   ____   ____   ____   ____   ____
10   ____   ____   ____   ____   ____   ____   ____   ____   ____
─────────────────────────────────────────────────────────────────────────────
X̄ᴬ  ____   ____           ____   ____           ____   ____
R̄ᴬ       ____                  ____                  ____
─────────────────────────────────────────────────────────────────────────────

PART AVERAGES (across all appraisers and trials):
Part:   1     2     3     4     5     6     7     8     9    10
Avg:  ____  ____  ____  ____  ____  ____  ____  ____  ____  ____
Rp (max part avg − min part avg): ____

RANGE AVERAGES:
R̄ overall = (R̄ᴬ + R̄ᴮ + R̄ᶜ) / 3 = ____
UCLR = D₄ × R̄ = ____   (D₄ for n=2: 3.267)

APPRAISER AVERAGES:
X̄ᴬ (grand) = ____   X̄ᴮ (grand) = ____   X̄ᶜ (grand) = ____
XDIFF = max(X̄ᴬ, X̄ᴮ, X̄ᶜ) − min(X̄ᴬ, X̄ᴮ, X̄ᶜ) = ____

CALCULATIONS (see Section 6):
EV = ____    AV = ____    GRR = ____
PV = ____    TV = ____
%GRR (of TV) = ____    %GRR (of Tolerance) = ____
ndc = ____

SIGNATURES:
Study conductor: ________________  Date: ________
Quality Engineer: _______________  Date: ________
```

---

## 5. ANOVA vs. Range Method — When to Use Which

Both methods calculate EV, AV, and GRR. Choose based on the following:

| Criteria | Range Method | ANOVA Method |
|---------|-------------|-------------|
| Calculation complexity | Simple — manual calculation feasible | Complex — requires software (Minitab, Excel ANOVA) |
| Interaction term (Appraiser × Part) | Not captured | Captured — shows if appraisers rank parts differently |
| Required by AIAG MSA 4th edition | Listed as acceptable | Preferred for PPAP |
| Use when | Quick field study, training, or no software available | PPAP submission, special characteristics, customer-required |
| Result accuracy | Slightly less accurate (ignores interaction) | More accurate |
| Sample size sensitivity | Works for 2 or 3 trials | Works for 2 or 3 trials |

**Decision rule:**
- For formal PPAP submission or IATF 16949 audit purposes: use ANOVA.
- For internal qualification, quick verification, or training exercises: Range method is acceptable.
- If ANOVA reveals a significant Appraiser × Part interaction (p < 0.05): investigate whether some appraisers are measuring certain parts differently. This points to a training or fixturing issue, not just gauge imprecision.

---

## 6. Calculation Reference — Range Method

### Constants Used

| n (trials per appraiser) | d₂* | K₁ (= 1/d₂*) | D₄ |
|--------------------------|-----|--------------|-----|
| 2 | 1.128 | 0.8862 | 3.267 |
| 3 | 1.693 | 0.5908 | 2.574 |

For appraiser variation (number of appraisers = 3), use K₂ = 0.5231 directly from AIAG MSA 4th ed. Table IV. This corresponds to d₂* ≈ 1.912 (range of 3 values, 1 range calculated). Note: the value 1.693 in the EV table above is d₂* for 3 trials per appraiser — it is not the correct value for the AV calculation.

### Step-by-Step Formulas

**Step 1 — Equipment Variation (EV = Repeatability)**

EV = R̄_overall × K₁

Where:
- R̄_overall = average of all within-appraiser ranges across all parts
- K₁ = 1/d₂* for the number of trials (n = 2 → K₁ = 0.8862; n = 3 → K₁ = 0.5908)

EV is the 5.15σ spread (representing 99% of the gauge variation distribution).

**Step 2 — Appraiser Variation (AV = Reproducibility)**

AV = √[(XDIFF × K₂)² − (EV² / (n × r))]

Where:
- XDIFF = range of appraiser grand averages = max(X̄ᴬ, X̄ᴮ, X̄ᶜ) − min(X̄ᴬ, X̄ᴮ, X̄ᶜ)
- K₂ = 1/d₂* for number of appraisers (3 appraisers → K₂ = 0.5231)
- n = number of trials per appraiser
- r = number of parts

If the expression under the square root is negative, set AV = 0 (this occurs when appraiser variation is negligible relative to EV).

**Step 3 — Gauge R&R (GRR)**

GRR = √(EV² + AV²)

**Step 4 — Part Variation (PV)**

PV = Rp × K₃

Where:
- Rp = range of part averages = max(part avg) − min(part avg)
- K₃ = 1/d₂* for number of parts (10 parts → K₃ = 0.3146)

**Step 5 — Total Variation (TV)**

TV = √(GRR² + PV²)

**Step 6 — %GRR (two versions)**

%GRR (Study Variation) = (GRR / TV) × 100

%GRR (Tolerance) = (GRR / Tolerance) × 100    ← use for PPAP

**Step 7 — Number of Distinct Categories (ndc)**

ndc = 1.41 × (PV / GRR)

Round down to nearest integer.

---

## 7. Worked Numeric Example

**Study parameters:**
- Characteristic: Pin diameter, nominal 10.00 mm, tolerance ±0.15 mm → Tolerance = 0.30 mm
- 10 parts, 3 appraisers (A, B, C), 2 trials each

**Raw data (measurements in mm, deviation from nominal for readability):**

| Part | A-T1 | A-T2 | A-Range | B-T1 | B-T2 | B-Range | C-T1 | C-T2 | C-Range | Part Avg |
|------|------|------|---------|------|------|---------|------|------|---------|----------|
| 1 | 9.92 | 9.91 | 0.01 | 9.93 | 9.91 | 0.02 | 9.92 | 9.93 | 0.01 | 9.920 |
| 2 | 9.95 | 9.96 | 0.01 | 9.95 | 9.97 | 0.02 | 9.96 | 9.95 | 0.01 | 9.958 |
| 3 | 10.03 | 10.04 | 0.01 | 10.02 | 10.03 | 0.01 | 10.03 | 10.04 | 0.01 | 10.030 |
| 4 | 9.98 | 9.97 | 0.01 | 9.99 | 9.98 | 0.01 | 9.97 | 9.98 | 0.01 | 9.980 |
| 5 | 10.08 | 10.07 | 0.01 | 10.08 | 10.09 | 0.01 | 10.07 | 10.08 | 0.01 | 10.080 |
| 6 | 9.87 | 9.88 | 0.01 | 9.86 | 9.88 | 0.02 | 9.88 | 9.87 | 0.01 | 9.873 |
| 7 | 10.11 | 10.12 | 0.01 | 10.10 | 10.11 | 0.01 | 10.12 | 10.11 | 0.01 | 10.113 |
| 8 | 9.94 | 9.93 | 0.01 | 9.94 | 9.93 | 0.01 | 9.93 | 9.94 | 0.01 | 9.935 |
| 9 | 10.06 | 10.05 | 0.01 | 10.05 | 10.06 | 0.01 | 10.06 | 10.07 | 0.01 | 10.058 |
| 10 | 9.90 | 9.89 | 0.01 | 9.90 | 9.91 | 0.01 | 9.89 | 9.90 | 0.01 | 9.898 |

**Appraiser grand averages:**
- X̄ᴬ = (9.92+9.91+9.95+9.96+10.03+10.04+9.98+9.97+10.08+10.07+9.87+9.88+10.11+10.12+9.94+9.93+10.06+10.05+9.90+9.89) / 20 = **9.987**
- X̄ᴮ = **9.987**
- X̄ᶜ = **9.987**

**Average ranges:**
- R̄ᴬ = (0.01+0.01+0.01+0.01+0.01+0.01+0.01+0.01+0.01+0.01) / 10 = **0.010**
- R̄ᴮ = (0.02+0.02+0.01+0.01+0.01+0.02+0.01+0.01+0.01+0.01) / 10 = **0.013**
- R̄ᶜ = **0.010**
- R̄_overall = (0.010 + 0.013 + 0.010) / 3 = **0.011**

**UCLR check:** UCLR = 3.267 × 0.011 = 0.036. All individual ranges are below 0.036 — no outliers.

**Calculations:**

| Metric | Formula | Result |
|--------|---------|--------|
| EV | 0.011 × 0.8862 | **0.00975 mm** |
| XDIFF | max(9.987, 9.987, 9.987) − min = | **0.000 mm** |
| AV | √[(0.000 × 0.5231)² − (0.00975² / (2×10))] → negative → | **0.000 mm** |
| GRR | √(0.00975² + 0²) | **0.00975 mm** |
| Rp (part avg range) | 10.113 − 9.873 | **0.240 mm** |
| PV | 0.240 × 0.3146 | **0.07550 mm** |
| TV | √(0.00975² + 0.07550²) | **0.07612 mm** |
| %GRR (of TV) | (0.00975 / 0.07612) × 100 | **12.8%** |
| %GRR (of Tolerance) | (0.00975 / 0.30) × 100 | **3.25%** |
| ndc | 1.41 × (0.07550 / 0.00975) | **10.9 → 10** |

**Interpretation:**
- %GRR of Tolerance = 3.25% → Excellent (< 10%). Gauge is fully acceptable.
- %GRR of TV = 12.8% → Marginal when compared to study variation, but this is largely because parts are well-spread (good PV). Tolerance method is the primary criterion for PPAP.
- ndc = 10 → Well above the minimum of 5. Gauge can distinguish 10 categories of part variation.
- EV dominates GRR (AV = 0): gauge precision is the limiting factor, not appraiser technique. No training issue.

---

## 8. MSA Study Report — What to Include

The formal MSA study report submitted with PPAP or to a customer must contain:

| Section | Content |
|---------|---------|
| Study identification | Part number, characteristic, specification, tolerance, units |
| Gauge data | Gauge ID, type, resolution, calibration certificate number, expiry date |
| Study parameters | Date, location, appraisers (by ID/code — not always by name), trials, parts |
| Part selection rationale | Statement confirming parts span the full process variation range |
| Raw data table | All readings (all appraisers, all trials, all parts) |
| Range chart | Appraiser range charts with UCLR — confirm no points above UCL |
| Average chart | Part averages by appraiser — part variation must dominate |
| Results summary | EV, AV, GRR (absolute and as %), PV, TV, ndc |
| Method used | ANOVA or Range method — state which |
| Acceptance criteria applied | %GRR < 30% (tolerance method) AND ndc ≥ 5 |
| Decision | Accepted / Marginal (with justification) / Rejected |
| Signatures | Study conductor, Quality Engineer, approval authority |
| Attachments | Calibration certificate, randomisation table used |

**Do not report only %GRR of TV.** Always report both %GRR of TV and %GRR of Tolerance, and state which criterion was used for the acceptance decision.

**Flag any UCLR violations.** If any individual range exceeds UCLR = D₄ × R̄, that measurement was inconsistent. Investigate before closing the study. If the outlier is confirmed to be a special cause (mis-reading, part moved during measurement), it may be excluded and the study recalculated — document the reason.

---

## Source: skills/measurement/spc-control-charts/SKILL.md

---
name: spc-control-charts
description: >-
  Statistical Process Control (SPC) — select the correct control chart, interpret out-of-control
  signals using Western Electric rules, calculate and interpret Cp, Cpk, Pp, Ppk. Use when setting
  up SPC for a new characteristic, interpreting control chart signals, responding to special cause
  variation, or auditing SPC implementation. Covers AIAG SPC 2nd edition and IATF 16949 §8.3.3.
license: MIT
metadata:
  author: RBraga01
  version: "1.1"
  iso-9001: "9.1"
  iatf-16949: "8.3.3, 9.1.1"
  aiag-reference: "AIAG SPC 2nd Edition"
  domain: quality-engineering
  subdomain: measurement
  industries: automotive,electronics,aerospace,medical,general
  status: approved
  created: "2026-06-06"
  last_updated: "2026-06-06"
  updated_by: migmcc
  reviewed_by: RBraga01
  standard_edition: "AIAG SPC 2nd Edition (2005)"
---

# Statistical Process Control (SPC)

## When to use

Use this skill when:
- Selecting the correct control chart type for a process characteristic
- Interpreting control chart signals — is this special cause or common cause?
- Calculating Cp, Cpk, Pp, Ppk and determining if the process is capable
- Responding to an out-of-control signal on a production line
- Setting up SPC for a new special characteristic (PPAP/APQP requirement)
- Auditing an SPC system for correctness and adequacy
- Explaining SPC results to a customer or during an audit

## Prerequisites

- The characteristic to monitor (variable or attribute data)
- Production data (minimum 25 subgroups for control limits, 100+ pieces for capability)
- MSA study completed and %GRR < 30% for variable charts
- Process specification (nominal + tolerance) for capability calculations
- Subgroup size decided based on rational subgrouping principle

## Workflow

### Step 1 — Select the correct control chart

#### Variable data (measured values — length, weight, pressure, temperature)

| Chart | When to use |
|-------|------------|
| **X̄-R (X-bar/Range)** | Subgroup size 2–9; most common in manufacturing |
| **X̄-S (X-bar/Sigma)** | Subgroup size ≥ 10; better sensitivity to spread |
| **I-MR (Individuals/Moving Range)** | Subgroup size = 1; one measurement per inspection (slow processes, destructive tests) |

#### Attribute data (counts, pass/fail, defect rates)

| Chart | When to use |
|-------|------------|
| **p-chart** | Proportion defective; variable subgroup size |
| **np-chart** | Number defective; constant subgroup size |
| **c-chart** | Count of defects per unit; constant inspection area |
| **u-chart** | Defects per unit; variable inspection area |

**Decision rule:** If you can measure it with a number, use a variable chart. Variable charts are more sensitive and require smaller samples to detect process shifts.

---

### Step 2 — Calculate control limits

#### X̄-R chart

From at least 25 subgroups of size n:

- **Centre line (X̄̄):** Grand average of all subgroup means
- **UCL_X̄ = X̄̄ + A₂ × R̄**
- **LCL_X̄ = X̄̄ − A₂ × R̄**
- **Centre line (R̄):** Average of all subgroup ranges
- **UCL_R = D₄ × R̄**
- **LCL_R = D₃ × R̄** (= 0 for n ≤ 6)

Constants for common subgroup sizes:

| n | A₂ | D₃ | D₄ |
|---|----|----|-----|
| 2 | 1.880 | 0 | 3.267 |
| 3 | 1.023 | 0 | 2.574 |
| 4 | 0.729 | 0 | 2.282 |
| 5 | 0.577 | 0 | 2.114 |

**Important:** Control limits are calculated FROM THE DATA — never set them to match the specification limits. Specification limits and control limits are completely separate concepts.

---

### Step 3 — Apply Western Electric Rules (out-of-control signals)

Divide the control chart into zones: Zone A (2–3σ from centre), Zone B (1–2σ), Zone C (0–1σ).

| Rule | Signal | Interpretation |
|------|--------|----------------|
| **Rule 1** | 1 point beyond 3σ (outside control limits) | Large, immediate shift |
| **Rule 2** | 9 consecutive points on same side of centre line | Process mean has shifted |
| **Rule 3** | 6 consecutive points steadily increasing or decreasing | Trend — tool wear, drift |
| **Rule 4** | 14 consecutive points alternating up and down | Systematic variation — two alternating distributions |
| **Rule 5** | 2 of 3 consecutive points in Zone A or beyond (same side) | Large shift signal |
| **Rule 6** | 4 of 5 consecutive points in Zone B or beyond (same side) | Moderate shift |
| **Rule 7** | 15 consecutive points in Zone C (either side of centre line) | Stratification — data from two separate distributions |
| **Rule 8** | 8 consecutive points beyond Zone C (either side) | Mixture — sampling from two processes |

**Action required for ANY rule violation:** Stop and investigate immediately. Do not reset control limits. Do not restart until root cause is identified.

Most commonly applied in automotive: Rules 1, 2, 3 minimum. Rules 1–8 for safety-critical characteristics.

---

### Step 4 — Calculate and interpret process capability

**Capability data requirements:** Process capability is only valid when calculated on a process that is in statistical control (no out-of-control signals) and with a minimum of **100 consecutive parts** from that stable process. Fewer parts produce unreliable Cpk estimates — a Cpk calculated on 30 parts can vary by ±0.3 from the true value. Do not report Cpk based on fewer than 100 parts as a production capability figure; label it "preliminary" and state the sample size.

**Short-term capability (within-subgroup variation):**

- **Cp = (USL − LSL) / (6σ̂)**  — capability — process spread vs. tolerance
- **Cpk = min[(USL − X̄̄) / (3σ̂), (X̄̄ − LSL) / (3σ̂)]** — centred capability — accounts for process mean location

σ̂ = R̄ / d₂ (for X̄-R chart)

**Long-term performance (total variation including between-subgroup):**

- **Pp = (USL − LSL) / (6s)**  — same formula but uses overall standard deviation s
- **Ppk = min[(USL − X̄̄) / (3s), (X̄̄ − LSL) / (3s)]**

#### Acceptance criteria

| Index | Minimum | Target |
|-------|---------|--------|
| Cpk | 1.33 | 1.67 |
| Ppk | 1.33 | 1.67 |

| Cpk | Interpretation | PPAP action |
|-----|---------------|-------------|
| ≥ 1.67 | Excellent | ✅ Accepted |
| 1.33 – 1.67 | Acceptable | ✅ Accepted — monitor |
| 1.00 – 1.33 | Marginal | ⚠️ Customer approval required; add control measures |
| < 1.00 | Not capable | ❌ 100% inspection required; corrective action mandatory |

#### Cp vs. Cpk relationship

- Cp = Cpk: process is perfectly centred
- Cp > Cpk: process is off-centre — improve centering before widening control limits
- Never report only Cp without Cpk — a process can be off-centre and still show a good Cp

---

### Step 5 — Respond to an out-of-control condition

1. **Stop the process** (or place affected output on hold) — do not continue producing to an out-of-control process
2. **Contain** — identify affected output since last in-control point
3. **Investigate** — ask: what changed? (material lot, operator, shift, tooling, environment)
4. **Identify root cause** — use 5-Why or Fishbone (is-is-not to scope the problem first)
5. **Correct** — implement correction and verify the process returns to control
6. **Document** — note the signal, investigation, and action taken on the chart (or in the log)
7. **Update PFMEA and Control Plan** if the root cause reveals a new failure mode

Do NOT simply recalculate control limits after a shift to make the chart "look in control."

---

### Step 6 — Audit an SPC implementation

When reviewing SPC in production or at a supplier:

- [ ] Correct chart type selected for data type (variable vs. attribute)
- [ ] Minimum 25 subgroups used to calculate initial control limits
- [ ] Control limits calculated from process data — NOT set to specification limits
- [ ] Western Electric rules applied (minimum Rule 1, 2, 3)
- [ ] Out-of-control signals are annotated on the chart with the action taken
- [ ] Process capability calculated on stable (in-control) process only
- [ ] Cpk ≥ 1.33 minimum; 1.67 for special characteristics
- [ ] MSA study complete and %GRR < 30% for the gauge being used
- [ ] Control chart is used for decision-making — not filled in retroactively

---

## Validation criteria

An SPC implementation is adequate when:
- Chart type matches data type and subgroup size
- Control limits calculated from minimum 25 subgroups of production data
- Process in statistical control before capability is calculated
- Cpk ≥ 1.33 (minimum) for all monitored characteristics
- Out-of-control signals trigger documented investigation and corrective action

## Common mistakes

- Setting control limits equal to specification limits (a fundamental SPC error — these are different concepts)
- Calculating capability on an out-of-control process (meaningless — must be stable first)
- Reporting Cp but not Cpk — hides off-centre processes
- Using only n=1 individual charts when subgrouping would reveal more
- Filling in control charts retroactively at end of shift — defeats the purpose of real-time monitoring
- Recalculating control limits to eliminate out-of-control points without identifying root cause
- Reporting Cpk = 1.45 based on 30 parts — too few; minimum 100 pieces for reliable capability

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
| 1.1 | 2026-06-06 | @migmcc | Added 100-part minimum requirement for valid capability study in Step 4; clarified in-control prerequisite before capability calculation |

---

## Source: skills/measurement/spc-control-charts/references/chart-selection-guide.md

---
name: chart-selection-guide
type: reference
parent_skill: spc-control-charts
author: RBraga01
version: "1.0"
status: approved
created: "2026-06-06"
last_updated: "2026-06-06"
updated_by: migmcc
reviewed_by: RBraga01
license: MIT
---

# SPC Chart Selection and Reference Guide

Constants tables, Western Electric rules, out-of-control response guidance, capability formulas, and short-run SPC notes for practitioner use.
Use alongside the [spc-control-charts](../SKILL.md) skill.

> **Scope:** This document covers chart selection logic, control limit constants, WE rules with zone diagram, OOC response mapping, capability formula reference, and short-run SPC approaches. For the step-by-step workflow (subgroup sizing, limit calculation procedure, audit checklist, and interpretation), see [spc-control-charts SKILL.md](../SKILL.md).

---

## 1. Chart Selection Decision Tree

```
START: What type of data do you have?
│
├─► VARIABLE (measured number: length, weight, force, temperature, voltage)
│   │
│   └─► What is your subgroup size?
│       │
│       ├─► n = 1 (one measurement per inspection point)
│       │   Reason: slow process, destructive test, batch process, one unit per cycle
│       │   → USE: I-MR Chart (Individuals & Moving Range)
│       │   Note: Normality assumption stronger here. Check for non-normal distribution
│       │         before interpreting. Consider transformations for skewed data.
│       │
│       ├─► n = 2 to 9
│       │   Reason: multiple units sampled per time period, typical manufacturing
│       │   → USE: X̄-R Chart (X-bar / Range)
│       │   Note: Most common chart in automotive. Range captures within-subgroup spread.
│       │
│       └─► n ≥ 10
│           Reason: large subgroup, precise spread estimate needed
│           → USE: X̄-S Chart (X-bar / Sigma)
│           Note: S chart is more efficient than R chart for large n.
│               S chart has higher sensitivity to spread changes.
│
└─► ATTRIBUTE (counted, classified, pass/fail)
    │
    └─► Is your subgroup size CONSTANT or VARIABLE?
        │
        ├─► CONSTANT subgroup size
        │   │
        │   └─► Are you tracking DEFECTIVES (non-conforming units) or DEFECTS (non-conformances per unit)?
        │       │
        │       ├─► DEFECTIVES (a unit is either good or bad)
        │       │   → USE: np-Chart (number of defective units)
        │       │   Formula: np̄ ± 3√(np̄(1−p̄))
        │       │
        │       └─► DEFECTS (multiple defects possible per unit)
        │           → USE: c-Chart (count of defects)
        │           Formula: c̄ ± 3√c̄
        │           Assumes Poisson distribution
        │
        └─► VARIABLE subgroup size
            │
            └─► Defectives or defects per unit?
                │
                ├─► DEFECTIVES
                │   → USE: p-Chart (proportion defective)
                │   Formula: p̄ ± 3√(p̄(1−p̄)/n)    [control limits vary with n]
                │
                └─► DEFECTS per unit
                    → USE: u-Chart (defects per unit)
                    Formula: ū ± 3√(ū/n)    [control limits vary with n]
```

### Quick Reference Table

| Chart | Data type | Subgroup size | Plotted statistic |
|-------|-----------|---------------|-------------------|
| X̄-R | Variable | 2–9 | Subgroup mean and range |
| X̄-S | Variable | ≥ 10 | Subgroup mean and standard deviation |
| I-MR | Variable | 1 | Individual value and moving range (n=2 span) |
| p | Attribute (defectives) | Variable | Proportion defective |
| np | Attribute (defectives) | Constant | Number of defectives |
| c | Attribute (defects) | Constant | Count of defects |
| u | Attribute (defects) | Variable | Defects per unit |

---

## 2. Control Limit Constants Table

### X̄-R Chart Constants

| n | A₂ | D₃ | D₄ | d₂ | d₃ |
|---|----|----|-----|-----|-----|
| 2 | 1.880 | 0 | 3.267 | 1.128 | 0.853 |
| 3 | 1.023 | 0 | 2.574 | 1.693 | 0.888 |
| 4 | 0.729 | 0 | 2.282 | 2.059 | 0.880 |
| 5 | 0.577 | 0 | 2.114 | 2.326 | 0.864 |
| 6 | 0.483 | 0 | 2.004 | 2.534 | 0.848 |
| 7 | 0.419 | 0.076 | 1.924 | 2.704 | 0.833 |
| 8 | 0.373 | 0.136 | 1.864 | 2.847 | 0.820 |
| 9 | 0.337 | 0.184 | 1.816 | 2.970 | 0.808 |
| 10 | 0.308 | 0.223 | 1.777 | 3.078 | 0.797 |

**Formulas:**
- UCL_X̄ = X̄̄ + A₂ × R̄
- LCL_X̄ = X̄̄ − A₂ × R̄
- UCL_R = D₄ × R̄
- LCL_R = D₃ × R̄  (= 0 for n ≤ 6)
- σ̂ = R̄ / d₂  (short-term standard deviation estimate for capability)

### X̄-S Chart Constants

| n | A₃ | B₃ | B₄ | c₄ |
|---|----|----|-----|-----|
| 5 | 1.427 | 0 | 2.089 | 0.9400 |
| 6 | 1.287 | 0.030 | 1.970 | 0.9515 |
| 7 | 1.182 | 0.118 | 1.882 | 0.9594 |
| 8 | 1.099 | 0.185 | 1.815 | 0.9650 |
| 9 | 1.032 | 0.239 | 1.761 | 0.9693 |
| 10 | 0.975 | 0.284 | 1.716 | 0.9727 |

**Formulas:**
- UCL_X̄ = X̄̄ + A₃ × S̄
- LCL_X̄ = X̄̄ − A₃ × S̄
- UCL_S = B₄ × S̄
- LCL_S = B₃ × S̄  (= 0 for n ≤ 5)
- σ̂ = S̄ / c₄

### I-MR Chart Constants (n = 2 for moving range span)

| Chart | Centre line | UCL | LCL |
|-------|------------|-----|-----|
| Individuals | X̄ (grand mean) | X̄ + 2.660 × MR̄ | X̄ − 2.660 × MR̄ |
| Moving Range | MR̄ | 3.267 × MR̄ | 0 |

Note: 2.660 = 3/d₂ for n=2. MR̄ = average of all two-point moving ranges.

---

## 3. Western Electric Rules — Zone Diagram and Reference

### Zone Definition

Control limits are at ±3σ from the centre line (X̄̄). Divide the chart into 6 equal zones:

```
                         ┌─── UCL (+3σ) ─────────────────────────────
                         │
    Zone A (above) ──────┤   +2σ ─────────────────────────────────────
                         │
    Zone B (above) ──────┤   +1σ ─────────────────────────────────────
                         │
    Zone C (above) ──────┤   Centre line (X̄̄) ────────────────────────
                         │
    Zone C (below) ──────┤   −1σ ─────────────────────────────────────
                         │
    Zone B (below) ──────┤   −2σ ─────────────────────────────────────
                         │
                         └─── LCL (−3σ) ─────────────────────────────
```

Zone A = between ±2σ and ±3σ (outer zone)
Zone B = between ±1σ and ±2σ (middle zone)
Zone C = between centre line and ±1σ (inner zone)

### All 8 Western Electric Rules

| Rule | Pattern | Zone / Threshold | Signal meaning |
|------|---------|-----------------|----------------|
| **1** | 1 point beyond control limit | Beyond ±3σ (Zone A or outside) | Acute large shift or special cause |
| **2** | 9 consecutive points same side of centre line | Any zone, same side | Mean has shifted — process level change |
| **3** | 6 consecutive points steadily increasing or decreasing | Any | Trend — tool wear, heating, drift, degradation |
| **4** | 14 consecutive points alternating up and down | Any | Over-adjustment (tampering) or two alternating input streams |
| **5** | 2 of 3 consecutive points in Zone A or beyond, same side | Outer third | Large mean shift signal (less than Rule 1 sensitivity) |
| **6** | 4 of 5 consecutive points in Zone B or beyond, same side | Outer two-thirds | Moderate mean shift, sustained |
| **7** | 15 consecutive points in Zone C (either side) | Inner third only | Stratification — data from two distributions being mixed |
| **8** | 8 consecutive points beyond Zone C (either side, no centre line crossings) | Both outer zones | Mixture — process producing from two populations |

### Implementation Guidance by Application

| Application level | Rules applied | Rationale |
|------------------|--------------|-----------|
| Minimum (IATF 16949 basic compliance) | Rules 1, 2, 3 | Catches major shifts, trends, sustained drift |
| Standard automotive | Rules 1–6 | Adequate for most special characteristics |
| Safety/critical characteristics | Rules 1–8 | Maximum sensitivity required |
| Short-run or low-volume | Rule 1 only | Insufficient data for pattern rules |

---

## 4. Out-of-Control Action Response Guide

When a rule is triggered, the response depends on which rule fired and the direction of deviation.

| Rule triggered | First question to ask | Typical root causes | Containment action |
|---------------|----------------------|--------------------|--------------------|
| Rule 1 — Point beyond UCL or LCL | What changed at or just before this point? | Tool breakage, fixture failure, wrong material lot, gauge error, single operator mistake | Place all output since last in-control point on hold. Verify with reference measurement. |
| Rule 2 — 9 points same side | When did the shift start? (identify the subgroup where the run began) | Material lot change, new operator, shift change, gradual fixture wear, process parameter drift | Screen output from run start point. Investigate the change event at that time. |
| Rule 3 — 6 points trending | What consumable or process input degrades over time? | Tool wear, lubricant depletion, insert wear, temperature rise, electrode erosion | Do not stop immediately — confirm trend continues. Check tool condition. Replace consumable if confirmed. |
| Rule 4 — Alternating | Is the chart mixing two different operators, machines, or material streams? | Two operators with different technique, two heads on same fixture, automatic re-centering after each cycle | Investigate subgrouping strategy. Separate the two streams. |
| Rule 5 — 2 of 3 in Zone A | Is the process mean shifting? | Same as Rule 2 (earlier detection) | Verify process settings. Check last material change or setup. |
| Rule 6 — 4 of 5 in Zone B | Is there a moderate sustained shift? | Gradual drift, consistent setup offset between shifts | Check process settings, fixture, incoming material. |
| Rule 7 — 15 in Zone C | Are measurements suspiciously close to the centre line? | Rounded data (insufficient gauge resolution), over-adjustment causing over-control, data from mixed subgroups | Verify gauge resolution. Check if data is being rounded or re-centred. |
| Rule 8 — 8 beyond Zone C | Do points alternate between upper and lower halves without crossing centreline? | Two material lots mixed in same subgroup, two machines contributing to same chart | Separate by source. Verify subgrouping rational principle. |

**Post-response steps (all rules):**
1. Document the signal and the investigation on the chart or SPC log.
2. Identify root cause using 5-Why or fishbone.
3. Implement correction and verify process returns to in-control state.
4. Do NOT recalculate control limits to accommodate the shift. Limits are recalculated only when a verified, permanent process change has been implemented.
5. Update PFMEA and Control Plan if the root cause reveals a new or uncontrolled failure mode.

---

## 5. Process Capability Formula Reference

### Definitions

| Symbol | Definition |
|--------|-----------|
| USL | Upper specification limit |
| LSL | Lower specification limit |
| X̄̄ | Process grand mean |
| σ̂ | Short-term standard deviation (estimated from within-subgroup variation: R̄/d₂ or S̄/c₄) |
| s | Overall (long-term) standard deviation (calculated from all individual measurements) |

### Short-Term Capability Indices (use σ̂ — within-subgroup)

These reflect the process's best potential capability, using only within-subgroup variation.

| Index | Formula | What it measures |
|-------|---------|-----------------|
| Cp | (USL − LSL) / (6σ̂) | Spread potential — tolerance vs. process spread. Ignores where the mean sits. |
| Cpk | min[(USL − X̄̄) / (3σ̂), (X̄̄ − LSL) / (3σ̂)] | Centred capability — how far the mean is from the nearest limit. |
| Cpm | (USL − LSL) / (6√(σ̂² + (X̄̄ − T)²)) | Taguchi index — penalises deviation from target T. Less common. |

### Long-Term Performance Indices (use s — overall standard deviation)

These include all variation sources (between-subgroup drift, shifts, etc.).

| Index | Formula | What it measures |
|-------|---------|-----------------|
| Pp | (USL − LSL) / (6s) | Overall spread performance over the study period. |
| Ppk | min[(USL − X̄̄) / (3s), (X̄̄ − LSL) / (3s)] | Overall centred performance. This is the realistic long-term prediction. |

### Interpretation Table

| Cpk / Ppk | Sigma level (approx.) | DPPM (approx.) | PPAP / IATF verdict |
|-----------|----------------------|----------------|---------------------|
| ≥ 1.67 | 5σ | < 233 ppm | Excellent — accepted without restriction |
| 1.33 – 1.67 | 4σ | 233 – 6,210 ppm | Acceptable — accepted, increased monitoring recommended for new processes |
| 1.00 – 1.33 | 3σ | 6,210 – 66,807 ppm | Marginal — 100% inspection, corrective action, customer approval required |
| < 1.00 | < 3σ | > 66,807 ppm | Not capable — PPAP blocked, mandatory corrective action |

### Critical Rules for Capability Calculations

1. **Process must be in statistical control before calculating capability.** If the process is not stable (control chart has out-of-control signals), the capability indices are meaningless. Stabilise first, then calculate.
2. **Report Cpk, not just Cp.** Cp measures spread potential regardless of where the mean sits. A process can have Cp = 2.00 but be completely off-centre. Cpk is always ≤ Cp.
3. **Minimum sample size for reliable capability:** 100 individual measurements. Capability calculated from 30 parts has a ±40% confidence interval — not suitable for PPAP submission.
4. **Cp = Cpk:** process is centred. **Cp >> Cpk:** process is significantly off-centre — centering improvement yields immediate Cpk gain.
5. **Ppk < Cpk always** (or equal): if Ppk is significantly lower than Cpk, the process is drifting or shifting between subgroups over time — the short-term capability is not sustained long-term.

---

## 6. Short-Run SPC — Notes for Small Batch Production

Standard X̄-R charts assume enough production to collect 25+ subgroups from a single part/process combination. For short-run, high-mix production, two approaches are used:

### DNOM (Deviation from Nominal) Chart

**Use when:** Multiple part numbers share the same process, same gauge, and similar tolerances. Each part has a different nominal but similar process variation.

**How it works:**
- Plot (X̄ − Nominal) instead of X̄ for each part.
- Control limits are calculated from the deviation data (all parts combined).
- All parts share a common centre line of zero.

**Conditions for validity:**
- Process variation (σ) is similar across all part numbers.
- Same gauge used for all parts.
- Same process and operation for all parts.

**Reject DNOM if:** part variations differ significantly (e.g., machined steel parts vs. rubber gaskets on same chart).

### Standardised (Z-score) Chart

**Use when:** Part families have different nominal values AND different process variations (σ values differ).

**How it works:**
- Plot Z = (X̄ − X̄̄ₚₐᵣₜ) / σ̂_part for each subgroup.
- Control limits are universal: UCL = +3, LCL = −3 (in standard deviation units).
- Each part contributes its own reference mean and standard deviation to normalise the chart.

**Requirements:** Each part number must have a historical mean (X̄̄) and estimated standard deviation (σ̂) from prior production.

### Z-MR Chart for Individuals (Short-Run)

For processes producing one unit per cycle across multiple part numbers:

- Z = (X_i − X̄̄_part) / σ̂_part — plotted as individuals
- MR = |Z_i − Z_{i-1}| — moving range in standardised units
- UCL/LCL = ±3 for Z chart; UCL_MR = 3.267 for MR chart

**When to use:** Low-volume machined parts, tooling qualification, laboratory test results across multiple test types.

### Short-Run SPC — Key Cautions

- Do not use Western Electric pattern rules (Rules 2–8) until at least 20–25 points are plotted for a given part/product. Pattern rules require adequate data.
- Capability indices (Cp, Cpk) cannot be reliably estimated in short-run scenarios from production data alone. Use process qualification data or historical analogous-process data with justified transfer.
- Short-run SPC is a monitoring tool, not a substitute for robust process qualification.

