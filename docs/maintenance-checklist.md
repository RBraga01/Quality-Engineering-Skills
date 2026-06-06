# Maintenance Checklist — Quality-Engineering-Skills

> **Purpose:** This document is the definitive reference for what must be updated whenever any change is made to this repository.
> It exists because files like STATUS.md, CHANGELOG.md, and README.md were repeatedly missed during updates.
>
> **How to use:** Find the trigger that matches your change. Work through every row in that table. Tick each box before committing.

---

## Table of Contents

1. [Adding a new skill](#1-adding-a-new-skill)
2. [Adding a new agent](#2-adding-a-new-agent)
3. [Adding a reference file or asset](#3-adding-a-reference-file-or-asset)
4. [Correcting or updating an existing skill or agent](#4-correcting-or-updating-an-existing-skill-or-agent)
5. [Adding a new platform connector](#5-adding-a-new-platform-connector)
6. [Version bump inside a SKILL.md](#6-version-bump-inside-a-skillmd)
7. [New release — batch update](#7-new-release--batch-update)
8. [Before you commit](#8-before-you-commit)

---

## File reference

| File | What it tracks |
|------|----------------|
| `README.md` | Badge counts (skills-N, agents-N), skill index tables, agents section, coverage table, roadmap line |
| `CHANGELOG.md` | Version history entries |
| `STATUS.md` | Metrics table, per-skill table rows with 🟡/🟢 flags, agents table rows, Pending section |
| `E:\quality-engineering-skills.md` | Master plan (outside git) — skill inventory, build status, current status notes |
| `docs/index.html` | Landing page — skill count, agent count, domain sections, agent cards |
| `SKILL.md` (the file itself) | `last_updated`, `updated_by`, `reviewed_by`, `version` frontmatter fields; internal changelog section |

---

## 1. Adding a new skill

Triggered when a new `SKILL.md` is created in `skills/<domain>/<skill-name>/`.

| # | File | What to change | Example |
|---|------|----------------|---------|
| 1 | `README.md` | Badge: increment `skills-N` by 1 | `skills-22` → `skills-23` |
| 2 | `README.md` | Coverage table: add the domain row if domain is new, or update the Standards column if domain exists | Add `\| Supplier Quality \| 2 \| ISO 9001 §8.4 \|` |
| 3 | `README.md` | Skill index: add a new row inside the correct `<details>` block | `\| [new-skill](skills/domain/new-skill/) \| Description \|` |
| 4 | `README.md` | Roadmap line (current version): update skill count | `22 skills` → `23 skills` |
| 5 | `CHANGELOG.md` | Add an entry to the current version block under `### Added` listing the skill, domain, and standard | `\| [new-skill](skills/domain/new-skill/) \| domain \| ISO 9001 §X.X \|` |
| 6 | `STATUS.md` | Metrics table: increment `Total skills` | `22` → `23` |
| 7 | `STATUS.md` | Metrics table: update `Skills with reference files` if reference file also added | `22 / 22` → `23 / 23` (or `22 / 23` if reference pending) |
| 8 | `STATUS.md` | Skills table: add a new row in the correct domain section with the skill name, domain, paired agent, primary reference, Output Format ✅/pending, and 🟡/🟢/🔴 flag | See existing rows for format |
| 9 | `docs/index.html` | Skill count in the hero/stats section | `22 skills` → `23 skills` |
| 10 | `docs/index.html` | Domain section: add a card or row for the new skill | Add inside the correct domain block |
| 11 | `E:\quality-engineering-skills.md` | Skill inventory list: add the skill name and status | Add line under the relevant domain |
| 12 | New `SKILL.md` itself | Fill frontmatter: `version`, `last_updated`, `updated_by`, `reviewed_by` | `version: "1.0"`, `last_updated: "2026-06-06"` |

**Flag rule for STATUS.md:**
- 🔴 = SKILL.md exists, no Output Format section, no reference file
- 🟡 = Output Format section present, reference file missing
- 🟢 = Output Format section present AND at least one reference file present

---

## 2. Adding a new agent

Triggered when a new `SKILL.md` is created in `skills/agents/<agent-name>/`.

| # | File | What to change | Example |
|---|------|----------------|---------|
| 1 | `README.md` | Badge: increment `agents-N` by 1 | `agents-8` → `agents-9` |
| 2 | `README.md` | Agents section: add a `###` block with the agent slash name, description, and sample interaction | `### /new-agent` with description |
| 3 | `README.md` | Agents index table inside `<details>`: add a row | `\| [new-agent](skills/agents/new-agent/) \| Description \|` |
| 4 | `README.md` | Roadmap line (current version): update agent count | `8 agents` → `9 agents` |
| 5 | `CHANGELOG.md` | Add entry under `### Added` — agents sub-table | `\| [new-agent](skills/agents/new-agent/) \| Purpose description \|` |
| 6 | `STATUS.md` | Metrics table: increment `Total agents` | `8` → `9` |
| 7 | `STATUS.md` | Agents table: add a new row with agent name, skills served, Output Format ✅/pending, and 🟡/🟢 flag | See existing rows for format |
| 8 | `docs/index.html` | Agent count in the hero/stats section | `8 agents` → `9 agents` |
| 9 | `docs/index.html` | Agent cards/section: add a card for the new agent | Add inside the agents block |
| 10 | `E:\quality-engineering-skills.md` | Build status / current status notes | Note the new agent |
| 11 | New `SKILL.md` itself | Fill frontmatter: `version`, `last_updated`, `updated_by`, `reviewed_by` | `version: "1.0"`, `last_updated: "2026-06-06"` |

---

## 3. Adding a reference file or asset

Triggered when a new file is added to `skills/<domain>/<skill-name>/references/` or `skills/<domain>/<skill-name>/assets/`.

| # | File | What to change | Example |
|---|------|----------------|---------|
| 1 | `STATUS.md` | Metrics table: increment `Reference files created` | `23` → `24` |
| 2 | `STATUS.md` | Metrics table: update `Skills with reference files` if this is the first reference for the skill | `22 / 23` → `23 / 23` |
| 3 | `STATUS.md` | Skills table row for the parent skill: update the `Primary Reference` column if this is the first or primary file | Update the linked file name and path |
| 4 | `STATUS.md` | Skills table row for the parent skill: change 🟡 flag to 🟢 if Output Format was already present | `🟡` → `🟢` |
| 5 | `CHANGELOG.md` | Add entry under `### Added` — reference files sub-table | `\| \`skill-name/references/filename.md\` \| Brief purpose \|` |
| 6 | Parent `SKILL.md` | Update `last_updated` frontmatter field | `"2026-06-04"` → `"2026-06-06"` |
| 7 | `E:\quality-engineering-skills.md` | Build status notes if the reference file completes a skill | Note completion |

**Note:** `README.md`, `docs/index.html`, and badge counts do NOT need updating for reference file additions alone.

---

## 4. Correcting or updating an existing skill or agent

Triggered when content is changed in an existing `SKILL.md` file (either directly or merged via PR).

| # | File | What to change | Example |
|---|------|----------------|---------|
| 1 | The `SKILL.md` itself | `last_updated` frontmatter | `"2026-06-04"` → `"2026-06-06"` |
| 2 | The `SKILL.md` itself | `updated_by` frontmatter | `"@RBraga01"` |
| 3 | The `SKILL.md` itself | `reviewed_by` frontmatter (if correction came from a reviewer) | `"@migmcc"` |
| 4 | The `SKILL.md` itself | `version` frontmatter — increment patch version | `"1.0"` → `"1.1"` |
| 5 | The `SKILL.md` itself | Internal changelog section: add an entry with date, author, and summary of change | `- 2026-06-06 (@migmcc): Corrected Cpk threshold table` |
| 6 | `CHANGELOG.md` | Add entry under `### Changed` in the current version block, or open a new version block if needed | Describe what was corrected and why |
| 7 | `STATUS.md` | Pending section: if this change closes an open item, mark it done or remove the row | `⏳ pending` → `✅ done` |

**Note:** Badge counts in `README.md` and `docs/index.html` do NOT need updating for content corrections to existing skills.

---

## 5. Adding a new platform connector

Triggered when a new folder is created in `platforms/` (e.g., `platforms/new-platform/`).

| # | File | What to change | Example |
|---|------|----------------|---------|
| 1 | `CHANGELOG.md` | Add entry under `### Added` — platform connectors sub-table | `\| Platform Name \| platforms/new-platform/ — brief description \|` |
| 2 | `README.md` | Install / compatibility section (if one exists listing supported platforms): add the platform | Add to the "Works with" list |
| 3 | `README.md` | Header description line (if it enumerates platforms): update the count or list | `20+ AI coding platforms` (may not need changing if phrasing is general) |
| 4 | `E:\quality-engineering-skills.md` | Build status / platform notes | Note the new connector |

**Note:** Platform connectors are independent. `STATUS.md` metrics and `docs/index.html` skill/agent counts do NOT change for platform additions.

---

## 6. Version bump inside a SKILL.md

Triggered when only the `version` field in a `SKILL.md` frontmatter is changed (no content change).

| # | File | What to change | Example |
|---|------|----------------|---------|
| 1 | The `SKILL.md` itself | `version` field | `"1.0"` → `"1.1"` |
| 2 | The `SKILL.md` itself | `last_updated` field | `"2026-06-04"` → `"2026-06-06"` |
| 3 | The `SKILL.md` itself | Internal changelog section: add a line | `- 2026-06-06: Version bump to 1.1` |
| 4 | `CHANGELOG.md` | Add a brief note under `### Changed` if the bump reflects a significant milestone | Only when meaningful; skip for routine bumps |

**Note:** Badge counts, STATUS.md metrics, and docs/index.html do NOT need updating for version-only bumps.

---

## 7. New release — batch update

Triggered when multiple changes are grouped into a versioned release (e.g., v2.0.0, v2.1.0).

| # | File | What to change | Example |
|---|------|----------------|---------|
| 1 | `CHANGELOG.md` | Open a new top-level version block with date | `## [v2.1.0] — 2026-07-01` |
| 2 | `CHANGELOG.md` | List all added skills, agents, reference files, platform connectors under `### Added` | Use sub-tables per category |
| 3 | `CHANGELOG.md` | List all corrections and content changes under `### Changed` | Describe each change and attribution |
| 4 | `README.md` | Badge: update `skills-N` to final count | `skills-22` → `skills-30` |
| 5 | `README.md` | Badge: update `agents-N` to final count | `agents-8` → `agents-10` |
| 6 | `README.md` | Coverage table: add or update domain rows | New domain rows, updated Standards columns |
| 7 | `README.md` | Skill index: add rows for all new skills in correct `<details>` blocks | One row per new skill |
| 8 | `README.md` | Agents section: add `###` blocks for all new agents | One block per new agent |
| 9 | `README.md` | Agents index table: add rows for all new agents | One row per new agent |
| 10 | `README.md` | Roadmap: update current version line with new counts | `22 skills, 8 agents` → `30 skills, 10 agents` |
| 11 | `STATUS.md` | `_Last updated_` date at top of file | `2026-06-06` → `2026-07-01` |
| 12 | `STATUS.md` | Metrics table: update all four metric rows | Total skills, total agents, reference files, coverage ratio |
| 13 | `STATUS.md` | Skills table: add rows for all new skills, update existing rows if flags changed | Use correct 🟡/🟢/🔴 flags |
| 14 | `STATUS.md` | Agents table: add rows for all new agents | One row per new agent |
| 15 | `STATUS.md` | Pending section: close completed items, add new ones | Move `⏳` items to `✅` or remove |
| 16 | `docs/index.html` | Skill count in stats section | `22 skills` → `30 skills` |
| 17 | `docs/index.html` | Agent count in stats section | `8 agents` → `10 agents` |
| 18 | `docs/index.html` | Domain sections: add cards for new skills | One card per new skill |
| 19 | `docs/index.html` | Agent section: add cards for new agents | One card per new agent |
| 20 | `E:\quality-engineering-skills.md` | Skill inventory: add all new skills | One entry per skill with status |
| 21 | `E:\quality-engineering-skills.md` | Build status / current status notes | Reflect the new version |
| 22 | All new and modified `SKILL.md` files | Frontmatter: `version`, `last_updated`, `updated_by`, `reviewed_by` | Accurate per file |

---

## 8. Before you commit

Run through this checklist before every `git commit` to master.

| # | Check | How to verify |
|---|-------|---------------|
| 1 | Badge counts in `README.md` match reality | Count folders in `skills/` (excluding `agents/`) and `skills/agents/`; compare to badge values |
| 2 | `STATUS.md` metrics table matches reality | Count skill rows per domain section; verify `Total skills`, `Total agents`, `Reference files created` match actual file counts |
| 3 | Every new `SKILL.md` has `last_updated`, `updated_by`, `version` filled | Open each new file and check frontmatter |
| 4 | `CHANGELOG.md` has an entry for every file added or changed | Diff against previous commit; confirm each change has a CHANGELOG line |
| 5 | `STATUS.md` 🟡/🟢/🔴 flags are correct for every modified skill | For each touched skill: 🟢 = Output Format ✅ + reference file present; 🟡 = Output Format only; 🔴 = neither |
| 6 | `E:\quality-engineering-skills.md` reflects the current state | Open and verify skill inventory and build status notes match what was committed |

---

_This file is maintained by @RBraga01. Update it whenever a new file type or update trigger is added to the repository._
