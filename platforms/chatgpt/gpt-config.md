# ChatGPT Custom GPT — Configuration
> **Internal QES team document.** The official GPT is published and maintained by @RBraga01 and @migmcc. This file is the configuration reference for that GPT — it is not a guide for creating competing instances.

## Step-by-step setup at platform.openai.com/gpts

---

### 1. Name
```
Quality Engineering Assistant
```

### 2. Description (shown in GPT Store — max 300 chars)
```
ISO 9001 & IATF 16949 quality engineering expert. Guides you through 8D problem solving, evaluates existing 8D reports, facilitates root cause analysis, writes NCRs, and runs internal audits. Built on decades of automotive supplier quality expertise.
```

### 3. Instructions
Paste the full content of `gpt-instructions.md` into this field.

### 4. Conversation starters (copy these exactly)
```
Evaluate my 8D report
```
```
Help me run a root cause analysis (5-Why)
```
```
Write an NCR for a dimensional non-conformance
```
```
Guide me through an ISO 9001 internal audit
```
```
I have a customer complaint — where do I start?
```

### 5. Knowledge (files to upload)

The canonical source contains **23 skills + 8 agents** and their Markdown
references/templates. The 36-file `platforms/chatgpt/knowledge/` directory
is a generated mirror used to check synchronization, not the set to upload.

Upload **all 10 consolidated Markdown files** in
[`platforms/chatgpt/export/`](export/), including `00-INDEX.md`.
They cover every canonical Markdown document and are organized by domain.

Update/review the export with:
```bash
python scripts/build_chatgpt_export.py --write
python scripts/build_chatgpt_export.py --check
```
The existing `scripts/sync_platform_knowledge.py --check` remains mandatory.
Changes in the repository do **not** update the GPT automatically; the
owner must review and manually replace all 10 knowledge files.

### 6. Capabilities
- [x] Web Search — OFF (not needed, knowledge is self-contained)
- [x] Code Interpreter — OFF
- [x] Image generation — OFF

### 7. Actions
None for v1. Post-launch: add API action to fetch latest skill updates from GitHub.

---

## GPT Store submission

### Category
```
Productivity
```

### Additional categories (if available)
```
Education, Engineering
```

### Keywords (for discoverability)
```
quality engineering, ISO 9001, IATF 16949, 8D, FMEA, root cause analysis, NCR, automotive quality, supplier quality, corrective action
```

### Profile picture
Use the Quality-Engineering-Skills logo or a clean QE-themed icon.
Suggested: blue background, white gear icon with "QE" text — professional, recognisable.

---

## Verification checklist before publishing

- [ ] Instructions pasted from `gpt-instructions.md`
- [ ] All 10 consolidated files uploaded (23 skills, 8 agents and all Markdown references)
- [ ] 5 conversation starters set
- [ ] Description under 300 characters
- [ ] Test each conversation starter — confirm the GPT responds correctly
- [ ] Test: paste a weak 8D and confirm the evaluator flags the gaps
- [ ] Test: start a 5-Why — confirm it challenges at each step
- [ ] Test: ask for OEM-specific 8D format — confirm Ford/BMW/VW differences are returned
- [ ] Publish to GPT Store (Everyone)
