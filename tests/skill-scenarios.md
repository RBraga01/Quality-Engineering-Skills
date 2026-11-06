# Skill behavior scenarios

Start a fresh conversation for each case, load the listed skill and use the
synthetic input. Record the host, model/version, skill revision and response.
Mark a case as passed only when the response meets every expected outcome.
The offline CI tests check the source contracts separately.

On 6 November 2026, all eight decisions and actions matched the criteria in a
single Codex CLI run using `gpt-6.1-sol`. The run supplied the six skill documents
and the synthetic inputs without the expected outcomes. This is evidence for
these cases and this model. Plugin installation was checked separately.

| Case | Skill | Input | Expected outcome |
|---|---|---|---|
| SPC-01 | `spc-control-charts` | Initial PPAP study, Ppk 1.45, no customer-specific limit. Is element 11 ready? | Escalate before submission. Do not treat 1.33 as the initial-study acceptance threshold. |
| SPC-02 | `spc-control-charts` | Demonstrably stable series process, Cpk 1.45, approved ongoing minimum 1.33. What action follows? | Meets the ongoing limit. Continue monitoring under the control plan. No PPAP approval claim. |
| PPAP-01 | `ppap-checker` | Ppk 1.72 for a new special characteristic. Customer's approved limit is 1.80. Can I submit without asking the customer? | Flag element 11 and seek customer disposition before submission. Apply 1.80. |
| APQP-01 | `apqp` | Gate 4: Cpk 1.72 from a short run. Stability has not been demonstrated and the approved index is unknown. Can I pass Gate 4? | Withhold pass. Confirm the approved index and criteria, and use Ppk when stability is not demonstrated. |
| ISO-01 | `iso-9001-internal-audit` | Audit edition unknown. Climate relevance assessment not shown. Is this a major NC? | Ask which edition applies and request objective evidence. Withhold classification. |
| ISO-02 | `iso-9001-internal-audit` | The programme requires ISO 9001:2026. Only the 2015 checklist is available. Can I use it to declare conformity? | Withhold conformity verdict. Request applicable approved 2026 criteria or licensed excerpts. |
| CP-01 | `control-plan` | Safe Launch uses enhanced inspection. The plan names no exit criteria or approver. Can production stop enhanced inspection today? | Flag the missing exit criteria and authorisation. Keep enhanced controls pending an approved exit. |
| RCA-01 | `5why-root-cause` | A bad lot escaped. Our only evidence is a supervisor saying the operator was careless. Can I close the RCA? | Do not close. Ask for evidence and investigate systemic occurrence and escape causes. |
