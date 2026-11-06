import unittest
from datetime import date
from pathlib import Path


REPO = Path(__file__).resolve().parents[1]
UPDATED_SKILLS = [
    "skills/measurement/spc-control-charts/SKILL.md",
    "skills/audit/iso-9001-internal-audit/SKILL.md",
    "skills/planning/apqp/SKILL.md",
    "skills/planning/control-plan/SKILL.md",
    "skills/planning/dvp-test-plan/SKILL.md",
    "skills/agents/control-plan-builder/SKILL.md",
]


class StandardEditionRegressionTests(unittest.TestCase):
    def test_export_sources_use_platform_independent_order(self):
        for path in (REPO / "platforms/chatgpt/export").glob("*.md"):
            with self.subTest(export=path.name):
                sources = [
                    line.removeprefix("## Source: ")
                    for line in path.read_text(encoding="utf-8").splitlines()
                    if line.startswith("## Source: ")
                ]
                self.assertEqual(sources, sorted(sources))

    def test_readme_and_plugin_guide_match_the_skill_inventory(self):
        skills = list((REPO / "skills").rglob("SKILL.md"))
        agents = list((REPO / "skills/agents").rglob("SKILL.md"))
        for path in ("README.md", ".codex-plugin/README.md"):
            with self.subTest(path=path):
                text = (REPO / path).read_text(encoding="utf-8")
                self.assertRegex(text, rf"\b{len(skills) - len(agents)} structured quality engineering skills\b")
                self.assertIn(f"and {len(agents)} agents", text)

    def test_iso_2026_is_published_but_legacy_checklist_requires_edition_selection(self):
        register = (REPO / "STANDARDS.md").read_text(encoding="utf-8")
        skill = (REPO / UPDATED_SKILLS[1]).read_text(encoding="utf-8")
        self.assertIn("16 September 2026", register)
        self.assertNotIn("publication expected", register)
        self.assertIn("Confirm the applicable edition", skill)
        self.assertIn("Do not use the 2015 checklist as 2026 audit criteria", skill)

    def test_spc_tables_keep_ppap_and_series_decisions_separate(self):
        skill = (REPO / UPDATED_SKILLS[0]).read_text(encoding="utf-8")
        guide = (REPO / UPDATED_SKILLS[0]).with_name("references") / "chart-selection-guide.md"
        for text in (skill, guide.read_text(encoding="utf-8")):
            with self.subTest(source=text.splitlines()[1]):
                middle = next(line for line in text.splitlines() if line.startswith("| 1.33"))
                self.assertIn("1.33 <= index < 1.67", middle)
                self.assertIn("Below requirement", middle)
                self.assertIn("contact", middle.lower())

    def test_apqp_initial_capability_gate_uses_the_customer_approved_index(self):
        apqp = (REPO / UPDATED_SKILLS[2]).read_text(encoding="utf-8")
        row = next(line for line in apqp.splitlines() if line.startswith("| Preliminary Process Capability |"))
        self.assertIn("customer-approved index", row)
        self.assertNotIn("Cpk study", row)

    def test_ppap_skill_checker_and_checklist_use_the_same_escalation_rule(self):
        for path in (
            "skills/planning/ppap/SKILL.md",
            "skills/agents/ppap-checker/SKILL.md",
            "skills/planning/ppap/references/18-elements-checklist.md",
        ):
            with self.subTest(path=path):
                text = (REPO / path).read_text(encoding="utf-8")
                self.assertIn("Use Ppk when", text)
                self.assertIn("spc-control-charts/SKILL.md#acceptance-criteria", text)
                self.assertIn("before submission", text)

    def test_cpk_is_not_presented_as_an_initial_study_criterion(self):
        text = (REPO / "skills/measurement/spc-control-charts/SKILL.md").read_text(
            encoding="utf-8"
        )
        cpk_row = next(line for line in text.splitlines() if line.startswith("| **Cpk**"))
        self.assertEqual([cell.strip() for cell in cpk_row.split("|")][2], chr(0x2014))

    def test_updated_skills_record_the_standards_revision(self):
        for relative_path in UPDATED_SKILLS:
            with self.subTest(skill=relative_path):
                text = (REPO / relative_path).read_text(encoding="utf-8")
                version = next(line for line in text.splitlines() if line.startswith("  version:"))
                version_parts = tuple(int(part) for part in version.split('"')[1].split("."))
                self.assertGreater(version_parts, (1, 1))
                last_updated = next(
                    line for line in text.splitlines() if line.startswith("  last_updated:")
                )
                self.assertGreaterEqual(date.fromisoformat(last_updated.split('"')[1]), date(2026, 7, 1))
                self.assertIn("updated_by: RBraga01", text)
                self.assertIn("reviewed_by: migmcc", text)

    def test_release_changelog_records_the_standards_update(self):
        changelog = (REPO / "CHANGELOG.md").read_text(encoding="utf-8")
        self.assertIn("standard editions", changelog.lower())


if __name__ == "__main__":
    unittest.main()
