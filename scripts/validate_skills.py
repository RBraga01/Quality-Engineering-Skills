#!/usr/bin/env python3
"""Validate SKILL.md files and internal markdown links for Quality-Engineering-Skills."""

import io
import re
import sys
from pathlib import Path

# Ensure UTF-8 output on Windows (avoids cp1252 UnicodeEncodeError on checkmark/emoji)
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

try:
    import yaml
except ImportError:
    print("ERROR: PyYAML not found. Run: pip install pyyaml")
    sys.exit(1)

REPO_ROOT = Path(__file__).parent.parent

REQUIRED_TOP_LEVEL = {"name", "description", "license"}
REQUIRED_METADATA = {
    "author", "version", "domain", "status",
    "created", "last_updated", "updated_by", "reviewed_by", "standard_edition",
}
MAX_DESCRIPTION_CHARS = 1024
TRIGGER_PHRASE_WINDOW = 400


def parse_frontmatter(path: Path):
    text = path.read_text(encoding="utf-8")
    if not text.startswith("---"):
        return None, text
    try:
        end = text.index("---", 3)
    except ValueError:
        return None, text
    fm = yaml.safe_load(text[3:end])
    return fm, text[end + 3:]


def validate_skill(path: Path) -> list[str]:
    errors = []
    fm, body = parse_frontmatter(path)

    if fm is None:
        return [f"Missing YAML frontmatter block"]

    # Required top-level fields
    for field in REQUIRED_TOP_LEVEL:
        if field not in fm:
            errors.append(f"Missing required field: {field}")

    # Required metadata sub-fields
    meta = fm.get("metadata", {}) or {}
    for field in REQUIRED_METADATA:
        if field not in meta:
            errors.append(f"Missing required metadata field: metadata.{field}")

    # Description length
    desc = fm.get("description", "") or ""
    if isinstance(desc, str):
        if len(desc) > MAX_DESCRIPTION_CHARS:
            errors.append(
                f"description too long: {len(desc)} chars (max {MAX_DESCRIPTION_CHARS})"
            )
        # Trigger phrase check: at least 3 words of 4+ chars in first 400 chars
        snippet = desc[:TRIGGER_PHRASE_WINDOW]
        words = [w for w in re.findall(r"\w+", snippet) if len(w) >= 4]
        if len(words) < 5:
            errors.append(
                "description may lack trigger phrases in first 400 chars "
                f"(found only {len(words)} meaningful words)"
            )

    # Output Format section
    if "## Output Format" not in body:
        errors.append("Missing ## Output Format section")

    return errors


def check_internal_links(path: Path) -> list[str]:
    """Return list of broken relative links in a markdown file."""
    text = path.read_text(encoding="utf-8")
    errors = []
    for m in re.finditer(r'\[.*?\]\(([^)]+)\)', text):
        raw = m.group(1)
        if raw.startswith(("http://", "https://", "mailto:", "#")):
            continue
        # Strip in-file anchor
        link = raw.split("#")[0].strip()
        if not link:
            continue
        target = (path.parent / link).resolve()
        if not target.exists():
            errors.append(f"Broken link: {raw}")
    return errors


def main() -> int:
    skill_files = sorted(REPO_ROOT.glob("skills/**/*.md"))
    all_md = sorted(REPO_ROOT.glob("skills/**/*.md"))

    skill_errors = {}
    link_errors = {}

    for path in skill_files:
        rel = path.relative_to(REPO_ROOT)
        if path.name == "SKILL.md":
            errs = validate_skill(path)
            if errs:
                skill_errors[str(rel)] = errs

    for path in all_md:
        rel = path.relative_to(REPO_ROOT)
        errs = check_internal_links(path)
        if errs:
            link_errors[str(rel)] = errs

    failed = False

    if skill_errors:
        print("\n=== SKILL.md validation failures ===")
        for file, errs in skill_errors.items():
            print(f"\n{file}")
            for e in errs:
                print(f"  - {e}")
        failed = True

    if link_errors:
        print("\n=== Broken internal links ===")
        for file, errs in link_errors.items():
            print(f"\n{file}")
            for e in errs:
                print(f"  - {e}")
        failed = True

    if not failed:
        total_skills = sum(1 for p in REPO_ROOT.glob("skills/**/SKILL.md"))
        total_md = len(all_md)
        print(f"✓ All checks passed ({total_skills} SKILL.md files, {total_md} .md files checked)")

    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
