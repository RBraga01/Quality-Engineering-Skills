# Third-Party Content

Quality-Engineering-Skills teaches methodologies defined in standards published by
ISO, IATF, AIAG and VDA. Those standards are **separately licensed works owned by
their publishers**. This project does not include them, does not reproduce them,
and cannot grant anyone rights to them.

This file records, for every skill that rests on a third-party standard, what the
project actually contains and on what basis.

## The rule this project follows

**Methods are described. Documents are not reproduced.**

Copyright protects the particular expression a publisher wrote — its tables as
compiled and laid out, its prose, its examples, its rating criteria. It does not
protect the underlying method, procedure or system. This project therefore:

- describes how a method works, in its own words and its own structure
- states which clause or step of which standard a method corresponds to, so a
  practitioner can find the authoritative text
- **does not** copy rating criteria tables, question banks, checklists, forms or
  worksheets out of a manual
- **does not** position itself as a substitute for owning the manual

Where a skill needs a value that only the authoritative document defines, the
skill instructs the agent to consult the user's licensed copy rather than guess.

## Trademarks

ISO, IATF, AIAG, VDA, and the OEM names appearing in these skills (Ford, BMW,
Volkswagen, Stellantis, General Motors and others) are trademarks of their
respective owners. They are used here descriptively, to identify which standard
or customer requirement a skill addresses.

**This project is not affiliated with, endorsed by, certified by, or accredited
by any of these organisations.** Using these skills does not make an
organisation, a document or a process compliant with any standard, and does not
substitute for certification or audit by an accredited body.

## Scope of the MIT licence

The MIT licence in [LICENSE](LICENSE) covers **the original content of this
repository** — the skill instructions, structure, decision logic as expressed
here, agent definitions, templates authored for this project, and tooling.

It does **not** and cannot extend to any third-party standard referenced below.
Obtaining the rights to use a standard is the user's responsibility.

## Content basis by standard

| Standard | Publisher | What this project contains | Basis |
|---|---|---|---|
| ISO 9001 | ISO | Clause-referenced audit guidance and internally authored question prompts | Method described; clause numbers cited for lookup. No text from the standard. |
| IATF 16949 | IATF | Supplemental requirement guidance, CSR and contingency-planning prompts | Method described; clause numbers cited. No text from the standard. |
| AIAG-VDA FMEA Handbook (2019) | AIAG / VDA | 7-step process guidance; Action Priority decision logic restated as banded rules in `skills/risk-analysis/pfmea-process/assets/ap-table.md` | Independent restatement of the AP method. The handbook's enumerated AP table and its S/O/D rating criteria are **not** included — skills direct the user to their licensed copy for those. |
| AIAG APQP / Control Plan | AIAG | Phase and gate structure, deliverable checklists authored for this project | Method described. No manual text, forms or worksheets. |
| AIAG PPAP | AIAG | Level and element structure, submission guidance | Method described. No forms. |
| AIAG / AIAG-VDA SPC | AIAG / VDA | Chart selection logic, Western Electric rules, capability index formulas | Formulas and control-chart rules are mathematics and long-standing published practice, not the publisher's expression. |
| AIAG MSA | AIAG | Study types, %GRR and ndc interpretation guidance | Method described; acceptance thresholds are widely published industry practice. |
| VDA 6.3 | VDA | Process audit element structure P1–P7 and rating scale description | Structure described. The VDA question catalogue is **not** included. |
| VDA Volume 4 / 8D | VDA | D0–D8 discipline structure and evidence gates authored for this project | Method described. No VDA forms or templates. |
| GB/T 29076—2021 | SAC (China) | Zeroing workflow structure and evidence gates | Method described; clause traceability cited. No standard text. |

## Reporting a concern

If you are a rights holder and believe something in this repository exceeds the
basis described above, open a GitHub Issue labelled `security` or contact the
maintainer, and it will be reviewed and removed or rewritten promptly. We would
rather rewrite something than argue about it.

## Note

This document records the project's approach to third-party material. It is not
legal advice and has not been reviewed by counsel.
