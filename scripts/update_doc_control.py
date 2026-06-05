"""
Add OEM-level document control fields + Changelog to all SKILL.md files.
Run once from any directory:  python scripts/update_doc_control.py
"""
import os
import re

BASE = os.path.join(os.path.dirname(__file__), "..", "skills")

DATA = {
    "8d-problem-solving": {
        "version": "1.1", "created": "2026-06-01", "last_updated": "2026-06-03",
        "updated_by": "RBraga01", "standard_edition": "ISO 9001:2015 / IATF 16949:2016",
        "changelog": [
            ("1.0", "2026-06-01", "RBraga01", "Initial release"),
            ("1.1", "2026-06-03", "RBraga01", "Added Required Execution Checklist, D-level validation criteria, OEM gate rules"),
        ]
    },
    "5why-root-cause": {
        "version": "1.1", "created": "2026-06-01", "last_updated": "2026-06-03",
        "updated_by": "RBraga01", "standard_edition": "ISO 9001:2015",
        "changelog": [
            ("1.0", "2026-06-01", "RBraga01", "Initial release"),
            ("1.1", "2026-06-03", "RBraga01", "Added dual-chain requirement (occurrence + escape), evidence status tracking"),
        ]
    },
    "pfmea-process": {
        "version": "1.1", "created": "2026-06-01", "last_updated": "2026-06-03",
        "updated_by": "RBraga01", "standard_edition": "AIAG-VDA FMEA Handbook 2019",
        "changelog": [
            ("1.0", "2026-06-01", "RBraga01", "Initial release"),
            ("1.1", "2026-06-03", "RBraga01", "Expanded 7-step workflow with AP gate requirements and PPAP integration"),
        ]
    },
    "dfmea-design": {
        "version": "1.1", "created": "2026-06-01", "last_updated": "2026-06-03",
        "updated_by": "RBraga01", "standard_edition": "AIAG-VDA FMEA Handbook 2019",
        "changelog": [
            ("1.0", "2026-06-01", "RBraga01", "Initial release"),
            ("1.1", "2026-06-03", "RBraga01", "Added interface matrix integration and DFMEA-to-PFMEA handoff workflow"),
        ]
    },
    "action-priority-ap": {
        "version": "1.1", "created": "2026-06-01", "last_updated": "2026-06-03",
        "updated_by": "migmcc", "standard_edition": "AIAG-VDA FMEA Handbook 2019",
        "changelog": [
            ("1.0", "2026-06-01", "RBraga01", "Initial release"),
            ("1.1", "2026-06-03", "migmcc", "Polished AP classification logic, added OEM CSR requirements table"),
        ]
    },
    "ncr-writing": {
        "version": "1.1", "created": "2026-06-01", "last_updated": "2026-06-03",
        "updated_by": "migmcc", "standard_edition": "ISO 9001:2015",
        "changelog": [
            ("1.0", "2026-06-01", "RBraga01", "Initial release"),
            ("1.1", "2026-06-03", "migmcc", "Expanded severity classification criteria and disposition guidance"),
        ]
    },
    "8d-report-writing": {
        "version": "1.1", "created": "2026-06-01", "last_updated": "2026-06-03",
        "updated_by": "migmcc", "standard_edition": "ISO 9001:2015 / IATF 16949:2016",
        "changelog": [
            ("1.0", "2026-06-01", "RBraga01", "Initial release"),
            ("1.1", "2026-06-03", "migmcc", "Added OEM format requirements and customer submission checklists"),
        ]
    },
    "iso-9001-internal-audit": {
        "version": "1.1", "created": "2026-06-01", "last_updated": "2026-06-03",
        "updated_by": "migmcc", "standard_edition": "ISO 9001:2015",
        "changelog": [
            ("1.0", "2026-06-01", "RBraga01", "Initial release"),
            ("1.1", "2026-06-03", "migmcc", "Expanded clause-by-clause question bank and evidence anchors"),
        ]
    },
    "iatf-16949-audit": {
        "version": "1.1", "created": "2026-06-01", "last_updated": "2026-06-03",
        "updated_by": "migmcc", "standard_edition": "IATF 16949:2016",
        "changelog": [
            ("1.0", "2026-06-01", "RBraga01", "Initial release"),
            ("1.1", "2026-06-03", "migmcc", "Added supplemental requirements reference and CSR audit coverage"),
        ]
    },
    "fishbone-analysis": {
        "version": "1.1", "created": "2026-06-01", "last_updated": "2026-06-04",
        "updated_by": "migmcc", "standard_edition": "ISO 9001:2015",
        "changelog": [
            ("1.0", "2026-06-01", "RBraga01", "Initial release"),
            ("1.1", "2026-06-04", "migmcc", "Polished 6M categories, added validation criteria and 5-Why integration"),
        ]
    },
    "is-is-not-scoping": {
        "version": "1.1", "created": "2026-06-01", "last_updated": "2026-06-04",
        "updated_by": "migmcc", "standard_edition": "ISO 9001:2015",
        "changelog": [
            ("1.0", "2026-06-01", "RBraga01", "Initial release"),
            ("1.1", "2026-06-04", "migmcc", "Expanded Is/Is-Not table criteria and D2 integration guidance"),
        ]
    },
    "pdca-improvement": {
        "version": "1.1", "created": "2026-06-01", "last_updated": "2026-06-04",
        "updated_by": "migmcc", "standard_edition": "ISO 9001:2015",
        "changelog": [
            ("1.0", "2026-06-01", "RBraga01", "Initial release"),
            ("1.1", "2026-06-04", "migmcc", "Polished PDCA cycle workflow and D6 verification integration"),
        ]
    },
    "car-corrective-action": {
        "version": "1.1", "created": "2026-06-01", "last_updated": "2026-06-04",
        "updated_by": "migmcc", "standard_edition": "ISO 9001:2015",
        "changelog": [
            ("1.0", "2026-06-01", "RBraga01", "Initial release"),
            ("1.1", "2026-06-04", "migmcc", "Expanded CAR linkage to D5-D6, added effectiveness verification requirements"),
        ]
    },
    "8d-coach": {
        "version": "1.1", "created": "2026-06-01", "last_updated": "2026-06-04",
        "updated_by": "migmcc", "standard_edition": "ISO 9001:2015 / IATF 16949:2016",
        "changelog": [
            ("1.0", "2026-06-01", "RBraga01", "Initial release"),
            ("1.1", "2026-06-04", "migmcc", "Polished gate validation logic, D3 rejection rules and ICA verification"),
        ]
    },
    "fmea-reviewer": {
        "version": "1.1", "created": "2026-06-01", "last_updated": "2026-06-04",
        "updated_by": "migmcc", "standard_edition": "AIAG-VDA FMEA Handbook 2019",
        "changelog": [
            ("1.0", "2026-06-01", "RBraga01", "Initial release"),
            ("1.1", "2026-06-04", "migmcc", "Polished AP compliance review workflow and OEM CSR binding requirements"),
        ]
    },
    "rca-facilitator": {
        "version": "1.1", "created": "2026-06-01", "last_updated": "2026-06-04",
        "updated_by": "migmcc", "standard_edition": "ISO 9001:2015",
        "changelog": [
            ("1.0", "2026-06-01", "RBraga01", "Initial release"),
            ("1.1", "2026-06-04", "migmcc", "Polished dual-chain requirement and circular-reasoning detection"),
        ]
    },
    "ncr-writer": {
        "version": "1.1", "created": "2026-06-01", "last_updated": "2026-06-04",
        "updated_by": "migmcc", "standard_edition": "ISO 9001:2015",
        "changelog": [
            ("1.0", "2026-06-01", "RBraga01", "Initial release"),
            ("1.1", "2026-06-04", "migmcc", "Polished NCR drafting workflow, objective-evidence language requirements"),
        ]
    },
    "audit-guide": {
        "version": "1.1", "created": "2026-06-01", "last_updated": "2026-06-04",
        "updated_by": "migmcc", "standard_edition": "ISO 9001:2015 / IATF 16949:2016",
        "changelog": [
            ("1.0", "2026-06-01", "RBraga01", "Initial release"),
            ("1.1", "2026-06-04", "migmcc", "Polished clause-by-clause audit workflow, finding classification and report generation"),
        ]
    },
    "skill-auditor": {
        "version": "1.0", "created": "2026-06-05", "last_updated": "2026-06-05",
        "updated_by": "RBraga01", "standard_edition": "Quality-Engineering-Skills Framework 1.0",
        "changelog": [
            ("1.0", "2026-06-05", "RBraga01", "Initial release - scoring model, quality gates, maturity model"),
        ]
    },
}


def build_doc_control_block(d):
    return (
        "  status: approved\n"
        f"  created: \"{d['created']}\"\n"
        f"  last_updated: \"{d['last_updated']}\"\n"
        f"  updated_by: {d['updated_by']}\n"
        "  reviewed_by: RBraga01\n"
        f"  standard_edition: \"{d['standard_edition']}\"\n"
    )


def build_changelog_section(d):
    rows = ""
    for ver, date, author, change in d["changelog"]:
        rows += f"| {ver} | {date} | @{author} | {change} |\n"
    return (
        "\n## Changelog\n\n"
        "| Version | Date | Author | Change |\n"
        "|---------|------|--------|--------|\n"
        + rows
    )


updated = 0
errors = []

for root, dirs, files in os.walk(BASE):
    for fname in sorted(files):
        if fname != "SKILL.md":
            continue
        path = os.path.join(root, fname)
        with open(path, "r", encoding="utf-8") as f:
            content = f.read()

        m = re.search(r"^name:\s*(\S+)", content, re.MULTILINE)
        if not m:
            errors.append(f"No name field: {path}")
            continue
        skill_name = m.group(1)

        if skill_name not in DATA:
            errors.append(f"No data for skill '{skill_name}': {path}")
            continue

        d = DATA[skill_name]

        if "status: approved" in content:
            errors.append(f"SKIP (already updated): {skill_name}")
            continue

        # 1. Update version field
        content = re.sub(
            r'(  version:\s*)"[\d\.]+"',
            f'\\1"{d["version"]}"',
            content
        )

        # 2. Insert doc control fields after industries line (before closing ---)
        pattern = r"(  industries: automotive,electronics,aerospace,medical,general\n)(---)"
        replacement = r"\g<1>" + build_doc_control_block(d) + r"\g<2>"
        new_content = re.sub(pattern, replacement, content, count=1)
        if new_content == content:
            errors.append(f"Industries pattern not matched: {skill_name}")
            continue
        content = new_content

        # 3. Append Changelog at end
        content = content.rstrip("\n") + "\n" + build_changelog_section(d)

        with open(path, "w", encoding="utf-8", newline="\n") as f:
            f.write(content)
        print(f"  Updated: {skill_name}")
        updated += 1

print(f"\nTotal SKILL.md updated: {updated}")
if errors:
    print("\nIssues:")
    for e in errors:
        print(f"  {e}")
