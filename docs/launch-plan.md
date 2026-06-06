# Quality-Engineering-Skills — Launch Plan
# Lead: @RBraga01 | Status: Pre-launch

_Last updated: 2026-06-06_

---

## Current state at start of plan

| Item | State |
|------|-------|
| Skills | 22 / 8 agents — all 🟢, all reviewed by @migmcc |
| Reference files | 23 files — all reviewed, 2 correction PRs merged |
| Tier 1 platforms | ChatGPT LIVE; Claude.ai built (pending user setup) |
| Tier 2 platforms | Teams, M365, Gemini, Slack — all built, pending user activation |
| Repo | PRIVATE — launch requires explicit go-ahead |
| CHANGELOG | Last entry: v1.2.0 (2026-06-05) — v2.0.0 not yet written |

**Blocker:** Repo stays PRIVATE until Phase 3 checkpoint is passed.

---

## Phases overview

```
Phase 0  →  Phase 1  →  Phase 2  →  [GO/NO-GO]  →  Phase 3  →  Phase 4
Cleanup     Platform      Final         Gate          Launch       Post-launch
(me)        activation    prep          (lead)        day          (2 weeks)
1–2 days    2–3 days     1 day         decision      1 day        ongoing
```

---

## Phase 0 — Internal cleanup
**Owner: @RBraga01 (Claude) | Repo: PRIVATE | Duration: 1–2 days**

These run before any external activation. No user action needed — I handle all of it.

### 0.1 CHANGELOG.md — add v2.0.0 entry
Document everything built since v1.2.0:
- 9 new skills (PPAP, APQP, Control Plan, DVP, MSA, SPC, VDA 6.3, DMAIC, Supplier SCAR)
- 2 new agents (ppap-checker, control-plan-builder)
- 13 new reference files
- Tier 2 platform connectors (Teams, M365, Gemini, Slack)
- v2 SKILL.md corrections by @migmcc (PR #3)
- v3 reference file corrections by @migmcc (PR #4)

**Status: TODO | Blocking: nothing — do first**

### 0.2 Master plan file — sync to current state
`E:\quality-engineering-skills.md` is outdated (still says 13 skills, 5 agents, has em-dash encoding corruption).
Update: skill count, agent count, build status, pitch line.

**Status: TODO | Blocking: nothing**

### 0.3 README — final consistency check
Verify every number and claim in README is accurate:
- [ ] Badge: skills-22, agents-8 ✅ (already done)
- [ ] Install command: `npx skills add RBraga01/Quality-Engineering-Skills` — works only on public repo; add note "(available at launch)"
- [ ] Coverage table: all 7 domains listed ✅
- [ ] All 8 agents have descriptions ✅
- [ ] Skill index complete (22 skills across all domains) ✅
- [ ] Authors section: both @RBraga01 and @migmcc listed ✅
- [ ] Roadmap: update v1/v2/v3 labels to reflect what shipped

**Status: TODO | Blocking: Phase 3 (public launch)**

### 0.4 Security scan — no secrets or private references
Before going public, verify:
- [ ] No API keys or tokens in any file
- [ ] No internal URLs (private corporate systems)
- [ ] No private email addresses
- [ ] Platform files don't reference `rbraga01.github.io` as if it's already live (it isn't until repo goes public)
- [ ] Privacy policy URL in store submission docs noted as "live at launch"

**Status: TODO | Blocking: Phase 3**

### 0.5 CONTRIBUTING.md — verify skill-auditor threshold is documented
Confirm the ≥9/10 skill-auditor gate is written in CONTRIBUTING.md as a submission requirement.

**Status: TODO | Non-blocking**

---

## ✅ CHECKPOINT 0
_All Phase 0 items complete. No secrets. CHANGELOG at v2.0.0. README consistent._

**Gate question:** Is there anything in the repo you don't want the world to see? If yes — do not advance.

---

## Phase 1 — Platform activation
**Owner: mixed (see per item) | Repo: PRIVATE | Duration: 2–3 days**

Platform activations that don't require a public repo can be done now to start review clocks early.

### 1.1 ChatGPT GPT Store — publish publicly
**Owner: User (browser action)**
The GPT is already built and LIVE at the private URL. To appear in the GPT Store:
1. Open ChatGPT → Explore GPTs → My GPTs → Quality Engineering Assistant
2. Settings → "Everyone" (public)
3. Submit to GPT Store (category: Productivity)
4. Review timeline: 1–3 business days

**Status: TODO | Blocking: none (can do now)**

### 1.2 Slack — deploy Cloudflare Worker
**Owner: User (terminal)**
```bash
cd E:\Projectos\Quality-Engineering-Skills\platforms\slack
npx wrangler deploy
```
Then configure in Slack API dashboard:
- Set Request URL for each slash command to the worker URL
- Enable event subscriptions with the same URL
- Install to workspace

**Reference:** `platforms/slack/setup-guide.md`
**Status: TODO | Blocking: none (can do now)**

### 1.3 Gemini — Google Apps Script setup
**Owner: User (browser)**
1. Create Google Cloud project
2. Open Apps Script (script.google.com), create project, paste `platforms/gemini/Code.gs`
3. Set `GEMINI_API_KEY` in Script Properties
4. Deploy as Workspace Add-on (test deployment first)
5. Submit to Google Workspace Marketplace (requires Cloud project + OAuth consent screen)

**Reference:** `platforms/gemini/setup-guide.md` + `platforms/gemini/marketplace-listing.md`
**Status: TODO | Non-blocking — Marketplace review is 3–5 days**

### 1.4 Teams / Copilot Studio — publish to tenant
**Owner: User (browser)**
1. Create agent in Copilot Studio (copilot.microsoft.com)
2. Paste `platforms/teams/copilot-instructions.md` as system prompt
3. Upload SKILL.md files as knowledge sources (the 6 most important ones)
4. Publish → Available to specific people → then to entire org
5. Teams Admin Center → Manage apps → allow the agent org-wide

This makes QES available inside your organisation. For Partner Center (AppSource) submission — needs a public URL and live API first, defer to Phase 4.

**Reference:** `platforms/teams/bot-config.md`
**Status: TODO | Blocking: none for tenant; API needed for AppSource**

### 1.5 Claude.ai Project — personal setup
**Owner: User (browser)**
1. claude.ai → Projects → New Project
2. Paste `platforms/claude-ai/project-instructions.md` as Project Instructions
3. Upload the 6 core SKILL.md files as knowledge documents
4. Test: `/8d-coach`, `/fmea-reviewer`

**Reference:** `platforms/claude-ai/setup-guide.md`
**Status: TODO | Non-blocking**

### 1.6 GitHub Pages — enable (for privacy policy URL)
**Owner: User (GitHub browser)**
Settings → Pages → Source: Deploy from a branch → branch: master → folder: /docs

The privacy policy at `docs/privacy.html` will be live at:
`rbraga01.github.io/Quality-Engineering-Skills/privacy`

**This requires the repo to be PUBLIC first** — configure during Phase 3.
**Status: BLOCKED on Phase 3**

---

## ✅ CHECKPOINT 1
_Platforms that don't need a public repo are activated. ChatGPT published. Slack worker deployed. Gemini Marketplace submission in review._

**Gate question:** Are at least 2 platforms working end-to-end? If no — fix before advancing.

---

## Phase 2 — Final pre-launch prep
**Owner: both | Repo: PRIVATE | Duration: 1 day**

### 2.1 Demos / GIFs for README
**Owner: User (screen recording)**
Record 2–3 short demos (GIF or MP4, <30 seconds each):
- **Demo 1:** `/8d-coach` — D0 to D3 in a real problem (most impactful for first impression)
- **Demo 2:** `/ppap-checker` — PPAP submission gap check (shows new v2 content)
- **Demo 3:** `/fmea-reviewer` or `/skill-auditor` (shows depth)

Tool: Gifox (Mac), ScreenToGif (Windows), or Loom.
Upload to `docs/demos/` or host on GitHub directly (max 10 MB per file).
Add to README with `![demo](docs/demos/8d-coach-demo.gif)`.

**Status: TODO | Blocking: Phase 3 (README must have at least 1 demo before going public)**

### 2.2 agentskills.io — prepare submission
**Owner: User + me (preparation now, submission after repo is public)**

Submission data to prepare:
- Registry name: `quality-engineering-skills`
- GitHub URL: `https://github.com/RBraga01/Quality-Engineering-Skills`
- Install command: `npx skills add RBraga01/Quality-Engineering-Skills`
- Description: 22 quality engineering skills and 8 agents — ISO 9001, IATF 16949, AIAG-VDA FMEA, VDA 6.3, PPAP, APQP, SPC, MSA
- Categories: quality-engineering, automotive, manufacturing, iso-9001
- Author: RBraga01

**Submission at:** agentskills.io (submit during Phase 3, after repo is public)

**Status: TODO — prepare now, submit at Phase 3**

### 2.3 Social announcement — draft
**Owner: @RBraga01**
Draft LinkedIn post and any community posts (GitHub Discussions, Reddit r/QualityEngineering, relevant Slack workspaces).

Key message:
- Free, open source
- 22 skills + 8 agents, ISO 9001 / IATF 16949 / AIAG-VDA
- Works with Claude Code, Cursor, Codex, Gemini CLI, ChatGPT
- MIT license, one command install

**Status: TODO | Non-blocking**

### 2.4 Web app — decision point
**Owner: @RBraga01 (decision)**

Options:
- **A — GitHub Pages landing page (launch day):** Static HTML/CSS page on the repo, links to install + docs + ChatGPT. No functionality, just marketing. I can build this in 2 hours.
- **B — Deferred to Week 6:** Launch without web app, focus on CLI + platform connectors. Add web app post-traction.

Recommendation: **Option A** — even a static landing page looks more professional than a raw GitHub repo. Builds trust before the user clicks "install."

**Status: DECISION NEEDED**

---

## ✅ CHECKPOINT 2 — GO/NO-GO GATE
_This is the last gate before the repo goes public. Once it passes, everything is visible._

**All of the following must be TRUE to advance:**

- [ ] CHANGELOG at v2.0.0 with all changes documented
- [ ] README: numbers accurate, at least 1 demo GIF, install command correct
- [ ] Security scan: no secrets, no broken links pointing to private resources
- [ ] At least 1 platform fully working end-to-end (not just built — tested)
- [ ] agentskills.io submission data prepared
- [ ] Lead sign-off: @RBraga01 confirms ready

**If any box is unchecked — do not advance. Fix first.**

---

## Phase 3 — Launch day
**Owner: User + me | Duration: 1 day**

Do these in order. Each item takes minutes but order matters.

### 3.1 Make repo PUBLIC
GitHub → Settings → General → Danger Zone → Change repository visibility → Public

This immediately:
- Enables `npx skills add RBraga01/Quality-Engineering-Skills`
- Enables GitHub Pages (if configured in Phase 1.6)
- Makes the privacy policy URL live
- Starts the branch protection rules (CODEOWNERS hard gate now enforced)

**Owner: User | 2 minutes**

### 3.2 Enable GitHub Pages
Settings → Pages → Source: master → /docs
Wait 1–2 minutes for `rbraga01.github.io/Quality-Engineering-Skills/privacy` to go live.
Verify the URL returns the privacy policy before submitting to stores.

**Owner: User | 5 minutes**

### 3.3 agentskills.io submission
Submit with the data prepared in Phase 2.2.
**Owner: User | 10 minutes**

### 3.4 Verify install command
```bash
npx skills add RBraga01/Quality-Engineering-Skills
```
Confirm it installs correctly. Test one skill in Claude Code immediately after.

**Owner: User | 5 minutes**

### 3.5 Store submissions — start review clocks
Start these now so reviews run in parallel with post-launch activity:

| Store | Action | Review time | Reference |
|-------|--------|-------------|-----------|
| Google Workspace Marketplace | Submit (if not done in Phase 1.3) | 3–5 days | `platforms/gemini/marketplace-listing.md` |
| Slack App Directory | Submit via api.slack.com/apps | 5–10 days | `platforms/slack/app-directory-listing.md` |
| Teams AppSource (Partner Center) | Register + submit when API is live | 5–7 days | `platforms/teams/appsource-listing.md` |

**Owner: User | 30–60 minutes total**

### 3.6 Social announcement — publish
LinkedIn post + any communities.
Tag @migmcc as co-author.
Link to GitHub repo.

**Owner: User**

### 3.7 GitHub repo housekeeping (post-public)
- Add topics: `quality-engineering`, `iso-9001`, `iatf-16949`, `fmea`, `8d-problem-solving`, `ppap`, `apqp`, `spc`, `msa`, `claude-code`, `ai-agents`
- Set repo description: "22 quality engineering skills and 8 agents for AI — ISO 9001, IATF 16949, AIAG-VDA FMEA, VDA 6.3, PPAP, APQP, SPC, MSA"
- Set website URL: `rbraga01.github.io/Quality-Engineering-Skills` (GitHub Pages URL)
- Enable Issues and Discussions (for community)

**Owner: User | 5 minutes**

---

## ✅ CHECKPOINT 3
_Repo is public. Install command verified. At least 1 store submission in review. Announcement posted._

---

## Phase 4 — Post-launch (weeks 1–2)
**Owner: @RBraga01 | Monitoring**

### 4.1 Watch for (immediate)
- GitHub Issues: installation problems, methodology questions, pull request proposals
- Store review feedback: may require changes before approval
- agentskills.io approval notification

### 4.2 Store approval follow-up
Each store may require changes:
- **Google Workspace:** often requests OAuth policy update or privacy policy URL correction
- **Slack App Directory:** may require additional slash command documentation
- **Teams AppSource:** requires a live API endpoint — defer or build Cloudflare Worker proxy

### 4.3 Public API — Week 6 decision
If Teams AppSource and M365 plugin require a live API:
- Deploy a Cloudflare Worker that proxies to Claude API
- URL: `api.quality-engineering-skills.io` (requires domain)
- Alternatively: adapt the existing Slack worker from `platforms/slack/worker.js`

### 4.4 v3 content roadmap — Week 6 decision
Per the master plan roadmap:
- AS9100 Rev D (aerospace) — @migmcc to scope
- ISO 13485 (medical devices)
- HACCP / ISO 22000 (food safety)

Defer all new content decisions until traction is observed (GitHub stars, install counts).

### 4.5 iPS linkage
Quality-Engineering-Skills is the open-source top of funnel for iPS (commercial SaaS).
Once QES has traction, begin the handoff narrative:
- QES: free, CLI/platform agents, methodology
- iPS: paid, web SaaS, case tracking, team workflows, OEM submissions

---

## Summary — what I do vs what you do

### I handle (no user action needed):
- Phase 0.1 — CHANGELOG v2.0.0
- Phase 0.2 — Master plan sync
- Phase 0.3 — README final check
- Phase 0.4 — Security scan
- Phase 2.4A — GitHub Pages landing page (if Option A chosen)
- GitHub topics + repo description text (you click, I write)

### You handle (browser / terminal):
- 1.1 ChatGPT — publish to GPT Store (browser)
- 1.2 Slack — `wrangler deploy` (terminal)
- 1.3 Gemini — Apps Script setup (browser)
- 1.4 Teams — Copilot Studio publish (browser)
- 2.1 Demos/GIFs — screen recording
- 2.3 Social post draft (or I draft, you publish)
- 3.1 Make repo public (GitHub settings)
- 3.2–3.7 Launch day sequence

---

## Timeline (realistic)

| Phase | Duration | Depends on |
|-------|----------|-----------|
| Phase 0 | 1 day | Just me |
| Phase 1 | 2–3 days | User availability for browser actions |
| Phase 2 | 1 day | Demo recording (user) |
| Phase 3 (launch) | 1 day | Phase 2 complete + GO/NO-GO passes |
| Phase 4 | 2 weeks | Ongoing |

**Minimum time to launch: 4–5 days from now if all phases run in sequence.**
**Parallel execution (Phase 0 and 1 overlap): possible 3 days.**
