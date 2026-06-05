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
  version: "1.0"
  iso-9001: "10.2"
  iatf-16949: "10.2.3"
  domain: quality-engineering
  subdomain: problem-solving
  industries: automotive,electronics,aerospace,medical,general
---

# Is/Is-Not Problem Scoping

## When to use

Use Is/Is-Not at the start of any quality investigation to precisely define what the problem IS and what it IS NOT. This scoping prevents wasted investigation effort and immediately eliminates hypotheses that cannot explain the observed IS/IS-NOT pattern.

Most effective in 8D D2 (problem description), CAPA scoping, and any situation where the defect is intermittent, batch-specific, or location-specific.

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
| Trend (increasing, stable, decreasing) | |

Example: "IS: 23.5% of parts in affected batches (47/200). IS NOT: Any defects in batches before 2026-05-10 (0/500 inspected)."

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

Any hypothesis that cannot explain ALL items in the IS and IS-NOT columns is eliminated or requires modification.

## Workflow

1. Gather data: inspection records, production records, customer complaint details
2. Fill in the matrix — only include facts, not hypotheses
3. Identify the "clue" — what distinctive pattern appears (specific batch, specific location, specific time)?
4. List candidate hypotheses
5. Test each hypothesis against the full matrix
6. Eliminate those that contradict the data
7. Carry forward surviving hypotheses into Fishbone or 5-Why

## Output format

A complete Is/Is-Not matrix (table format) with:
- All five dimensions completed with specific facts
- Surviving hypotheses listed with explanation of why they fit the matrix
- Eliminated hypotheses listed with the specific contradiction

## Common mistakes

- **Listing assumptions as IS** — only documented, measured facts go in the matrix
- **Leaving cells empty** — if you don't know, mark "unknown — to be investigated"
- **Not using IS NOT** — the IS NOT column is where hypotheses get eliminated; skipping it wastes investigation time
- **Vague IS statements** — "some parts are bad" → must be: "23.5% of batch 2026-05-12 are non-conforming on dimension X"

## Output Format

At the start of each use, ask the user:

> "How would you like to receive the output?
> **A** — Structured Markdown (formatted tables and sections, ready to copy)
> **B** — Plain tables (simplified structure for Excel or Word)
> **C** — Narrative report (flowing text for a formal document or email)
>
> Default: A."

Adapt all output sections to the chosen format. If the platform or session context already defines a format preference, skip this question.
