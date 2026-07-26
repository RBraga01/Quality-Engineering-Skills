# Standard Editions Register

Which edition of which standard each skill is written against, and what is coming.

**Why this file exists.** QES is free, so a user has no support contract and no account
manager to catch a wrong answer. A skill citing a superseded edition produces a
confident, domain-shaped error — which is worse than a generic answer, because it
disarms scepticism. Edition currency is therefore the top maintenance priority for
this project, not a compliance checkbox.

**Review cadence:** check this register every quarter, and whenever a Core Tool or
management system standard is reported revised.

_Last reviewed: 2026-07-26._

## Current editions

| Standard | Edition in force | Published | Skills written against it |
|---|---|---|---|
| ISO 9001 | 2015, incl. **Amd 1:2024** (climate action) | Amd Feb 2024 | `iso-9001-internal-audit`, and the ISO 9001 clause mappings throughout |
| IATF 16949 | 2016 (1st Edition) | Oct 2016 | `iatf-16949-audit` |
| AIAG-VDA FMEA | 2019 joint edition | Jun 2019 | `pfmea-process`, `dfmea-design`, `action-priority-ap`, `fmea-reviewer` |
| AIAG APQP | **3rd Edition** | Mar 2024 | `apqp`, `dvp-test-plan` |
| AIAG Control Plan | **1st Edition** (standalone) | Mar 2024 | `control-plan`, `control-plan-builder` |
| AIAG & VDA SPC | **1st Edition** (harmonised) | Feb 2026, available Jul 2026 | `spc-control-charts` |
| AIAG PPAP | 4th Edition | 2006 | `ppap`, `ppap-checker` |
| AIAG MSA | 4th Edition | 2010 | `msa-gauge-rr` |
| VDA 6.3 | 4th Edition | 2023 | `vda-6-3-audit` |
| VDA Volume 4 / 8D | current | — | `8d-problem-solving`, `8d-report-writing`, `8d-coach` |
| GB/T 29076 | 2021 | 2021 | `quality-problem-zeroing` |

## Watch list — revisions in progress

| Standard | Status | Action |
|---|---|---|
| **ISO 9001:2026** | FDIS approved 15 Jul 2026; publication expected **Sep 2026** | Update `iso-9001-internal-audit` on publication. Expect a three-year transition (to ~Sep 2029), so both editions stay auditable during that window. Reported additions: quality culture and ethical behaviour under leadership; climate change and sustainability explicit in context. Confirm against the published text — do not pre-write requirements from press summaries. |
| **AIAG & VDA SPC 1st Ed** | Published, in live transition | Customer-specific requirements decide which manual applies per part. `spc-control-charts` covers both and says so. Revisit once OEM implementation dates are announced. |
| AIAG PPAP | Long-standing 4th Edition (2006). A harmonised AIAG-VDA PPAP has been widely anticipated following FMEA and SPC | No action. Watch for announcement. |
| AIAG MSA | 4th Edition dates from 2010 | No action. Watch for announcement. |

## OEM implementation dates already passed

These are customer requirements, not just recommendations — a supplier still working
to the superseded edition is behind a contractual obligation:

| Manual | GM / Stellantis | Ford |
|---|---|---|
| APQP 3rd Ed + Control Plan 1st Ed | 1 Sep 2024 | 31 Dec 2024 |

## How to update a skill for a new edition

1. Update `standard_edition` in the frontmatter, and add `supersedes_edition`.
2. Update the skill's **Standard edition and currency** section: what changed
   structurally, what it means in practice, and the OEM implementation dates.
3. Correct any content the new edition genuinely changes — renamed indices, new
   phases, new required sections. These are facts about the method and are safe to
   state.
4. **Do not** invent detail. If the new edition's criteria tables, checklists or
   forms are needed, say the skill does not reproduce them and direct the user to
   their licensed copy. See [THIRD_PARTY_CONTENT.md](THIRD_PARTY_CONTENT.md).
5. Update cross-references: README coverage table and skill index, related skills,
   and any agent that shares the same `aiag-reference`.
6. Update this register and its `Last reviewed` date.

Do not rewrite CHANGELOG entries for past releases — they record what shipped at the
time and are meant to stay historical.
