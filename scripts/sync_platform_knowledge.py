#!/usr/bin/env python3
"""Generate the platform knowledge bundles from the canonical skills/ tree.

`skills/**/SKILL.md` is the source of truth. The ChatGPT GPT and the Claude.ai
Project load flattened copies from `platforms/*/knowledge/`. Hand-copying those
is what let them drift to a pre-review v1.0 snapshot while the canonical files
moved to v1.1.

Usage:
    python scripts/sync_platform_knowledge.py --check    # report drift, exit 1 if any
    python scripts/sync_platform_knowledge.py --write    # regenerate the bundles

Run --check in CI so a SKILL.md change that skips the bundles fails the build.
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
SKILLS = REPO / "skills"
TARGETS = [
    REPO / "platforms" / "chatgpt" / "knowledge",
    REPO / "platforms" / "claude-ai" / "knowledge",
]

# Reference and asset files carried into the bundles alongside the SKILL.md
# files. The platforms have no directory structure, so these are the ones judged
# worth the flattening. Add to this list deliberately — every entry is extra
# context the platform has to load on every request.
EXTRA_FILES = [
    "problem-solving/8d-problem-solving/assets/8d-template.md",
    "problem-solving/8d-problem-solving/references/d0-d8-guide.md",
    "risk-analysis/pfmea-process/assets/ap-table.md",
    "risk-analysis/action-priority-ap/references/oem-requirements.md",
    "documentation/8d-report-writing/references/oem-formats.md",
]


def build_manifest() -> dict[str, Path]:
    """Map destination filename -> canonical source path."""
    manifest: dict[str, Path] = {}

    for skill_md in sorted(SKILLS.rglob("SKILL.md")):
        name = skill_md.parent.name
        if name in manifest:
            raise SystemExit(
                f"duplicate skill directory name {name!r} — bundle names would collide:\n"
                f"  {manifest[name].relative_to(REPO)}\n  {skill_md.relative_to(REPO)}"
            )
        manifest[f"{name}.md"] = skill_md

    for rel in EXTRA_FILES:
        src = SKILLS / rel
        if not src.exists():
            raise SystemExit(f"EXTRA_FILES entry does not exist: skills/{rel}")
        dest = src.name
        if dest in manifest:
            raise SystemExit(f"EXTRA_FILES entry {rel!r} collides with a skill name: {dest}")
        manifest[dest] = src

    return manifest


def check(manifest: dict[str, Path]) -> int:
    problems = 0
    for target in TARGETS:
        rel_target = target.relative_to(REPO)
        expected = set(manifest)
        actual = {p.name for p in target.glob("*.md")} if target.exists() else set()

        for filename, src in sorted(manifest.items()):
            dest = target / filename
            if not dest.exists():
                print(f"MISSING  {rel_target}/{filename}  <- skills/{src.relative_to(SKILLS)}")
                problems += 1
            elif dest.read_bytes() != src.read_bytes():
                print(f"DRIFTED  {rel_target}/{filename}  <- skills/{src.relative_to(SKILLS)}")
                problems += 1

        for orphan in sorted(actual - expected):
            print(f"ORPHAN   {rel_target}/{orphan}  (no canonical source — remove it or add to EXTRA_FILES)")
            problems += 1

    return problems


def write(manifest: dict[str, Path]) -> int:
    written = 0
    for target in TARGETS:
        target.mkdir(parents=True, exist_ok=True)
        for filename, src in sorted(manifest.items()):
            dest = target / filename
            data = src.read_bytes()
            if not dest.exists() or dest.read_bytes() != data:
                dest.write_bytes(data)
                print(f"wrote {dest.relative_to(REPO)}")
                written += 1
    return written


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument("--check", action="store_true", help="report drift and exit 1 if any")
    group.add_argument("--write", action="store_true", help="regenerate the bundles from skills/")
    args = parser.parse_args()

    manifest = build_manifest()

    if args.check:
        problems = check(manifest)
        if problems:
            print(
                f"\n{problems} problem(s). The platform bundles are out of sync with skills/.\n"
                "Run: python scripts/sync_platform_knowledge.py --write"
            )
            return 1
        print(f"platform bundles in sync — {len(manifest)} files x {len(TARGETS)} platforms")
        return 0

    written = write(manifest)
    print(f"\n{written} file(s) updated across {len(TARGETS)} platforms.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
