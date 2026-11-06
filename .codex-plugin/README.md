# Quality Engineering Skills — Codex Plugin

**23 structured quality engineering skills and 8 agents for automotive and manufacturing.**

Covers ISO 9001, IATF 16949, AIAG-VDA FMEA, VDA 6.3, PPAP, APQP, SPC, and MSA.

## Codex plugin pilot

From a clone, add the repository marketplace and install the plugin in Codex:

```bash
codex plugin marketplace add .
codex plugin add quality-engineering-skills@quality-engineering
```

The plugin uses the same `skills/` directory as the open repository. It bundles
instructions and reference assets and requires no project-operated service or
additional credentials. Test skill discovery and the
[behavior scenarios](../tests/skill-scenarios.md) before submitting the package
to the public plugin directory.

## Standalone skills

```bash
npx skills add RBraga01/Quality-Engineering-Skills
```

## What it does

Packages decades of hands-on quality engineering expertise into skills your AI agent can load and apply immediately. Every skill maps to specific standard clauses. Validated methodology, not just format.

## Skills

- **Problem Solving:** 8D (D0–D8), 5-Why, Fishbone, Is/Is-Not, PDCA, DMAIC, Quality Problem Zeroing
- **Risk Analysis:** PFMEA, DFMEA, Action Priority (AP table)
- **Planning:** PPAP (5 levels, 18 elements), APQP, Control Plan, DVP&R
- **Measurement:** MSA / Gauge R&R, SPC / Control Charts
- **Documentation:** NCR, CAR, 8D Customer Report
- **Audit:** ISO 9001 Internal, IATF 16949 Supplemental, VDA 6.3
- **Supplier Quality:** Supplier SCAR

## Agents

`/8d-coach` `/fmea-reviewer` `/rca-facilitator` `/ncr-writer` `/audit-guide` `/ppap-checker` `/control-plan-builder` `/skill-auditor`

## Links

- [Landing page](https://rbraga01.github.io/Quality-Engineering-Skills/)
- [GitHub repository](https://github.com/RBraga01/Quality-Engineering-Skills)
- [Full skill index](https://github.com/RBraga01/Quality-Engineering-Skills#skill-index)
