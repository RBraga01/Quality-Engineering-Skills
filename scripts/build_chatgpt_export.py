#!/usr/bin/env python3
"""Deterministic complete ten-file QES knowledge export (no API calls)."""
from __future__ import annotations
import argparse
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "skills"
DEST = ROOT / "platforms/chatgpt/export"

def contents() -> dict[str, str]:
    sources = sorted(SOURCE.rglob("*.md"))
    groups: dict[str, list[Path]] = {}
    for path in sources:
        groups.setdefault(path.relative_to(SOURCE).parts[0], []).append(path)
    result: dict[str, str] = {}
    index = "# QES Knowledge Export — complete source index\n\n"
    index += "This is a deterministic export of the canonical Markdown skills, agents, references and templates. The 36-file platform mirrors stay unchanged.\n\n"
    sections = [(group, paths[i:i + 10], k) for group, files in sorted(groups.items())
                for k, i in enumerate(range(0, len(files), 10), 1)
                for paths in [sorted(files)]]
    index += f"Source files: {len(sources)}; skills: 23; agents: 8. Upload all {len(sections) + 1} Markdown files in this folder (including this index).\n\n"
    for n, (domain, paths, part) in enumerate(sections, 1):
        suffix = f"-part-{part}" if len(groups[domain]) > 10 else ""
        name = f"{n:02d}-{domain}{suffix}.md"
        content = f"# Quality Engineering Skills — {domain.replace('-', ' ')}\n\n"
        content += "Generated from the canonical skills tree; each document follows in full.\n\n"
        index += f"## {domain}: {name}\n\n"
        for path in paths:
            source = path.relative_to(ROOT).as_posix()
            index += f"- {source}\n"
            content += f"---\n\n## Source: {source}\n\n{path.read_text(encoding='utf-8').strip()}\n\n"
        index += "\n"
        result[name] = content
    result["00-INDEX.md"] = index
    if len(result) > 20:
        raise SystemExit("GPT knowledge file-count limit exceeded")
    return result

def main() -> int:
    parser = argparse.ArgumentParser()
    action = parser.add_mutually_exclusive_group(required=True)
    action.add_argument("--check", action="store_true")
    action.add_argument("--write", action="store_true")
    options = parser.parse_args()
    expected = contents()
    if options.write:
        DEST.mkdir(parents=True, exist_ok=True)
        for name, content in expected.items():
            (DEST / name).write_text(content, encoding="utf-8")
    actual = {p.name for p in DEST.glob("*.md")} if DEST.exists() else set()
    errors = sorted(actual.symmetric_difference(expected))
    for name, content in expected.items():
        if not (DEST / name).is_file() or (DEST / name).read_text(encoding="utf-8") != content:
            errors.append(name)
    if errors:
        print("Missing, extra or drifted export files:", sorted(set(errors)))
        return 1
    print(f"QES export verified: {len(expected)} files and {len(list(SOURCE.rglob('*.md')))} canonical Markdown documents")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
