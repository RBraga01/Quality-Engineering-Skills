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
