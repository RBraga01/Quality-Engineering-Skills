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

All 16 files are pre-renamed and ready to upload from:
**`platforms/chatgpt/knowledge/`**

Download that folder and upload all 16 files directly — no renaming needed.

| File | Source |
|------|--------|
| `8d-problem-solving.md` | Core skill |
| `8d-template.md` | 8D fillable template |
| `5why-root-cause.md` | Core skill |
| `fishbone-analysis.md` | Core skill |
| `is-is-not-scoping.md` | Core skill |
| `pfmea-process.md` | Core skill |
| `ap-table.md` | AP table reference |
| `action-priority-ap.md` | Core skill |
| `ncr-writing.md` | Core skill |
| `car-corrective-action.md` | Core skill |
| `8d-report-writing.md` | Core skill |
| `iso-9001-internal-audit.md` | Core skill |
| `iatf-16949-audit.md` | Core skill |
| `d0-d8-guide.md` | D0–D8 gate criteria reference |
| `oem-requirements.md` | OEM-specific AP requirements |
| `oem-formats.md` | OEM 8D submission formats |

> When skills are updated in `skills/`, re-copy the updated files into `platforms/chatgpt/knowledge/` before re-uploading to the GPT.

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
- [ ] All 16 knowledge files uploaded (13 skills + 3 reference files)
- [ ] 5 conversation starters set
- [ ] Description under 300 characters
- [ ] Test each conversation starter — confirm the GPT responds correctly
- [ ] Test: paste a weak 8D and confirm the evaluator flags the gaps
- [ ] Test: start a 5-Why — confirm it challenges at each step
- [ ] Test: ask for OEM-specific 8D format — confirm Ford/BMW/VW differences are returned
- [ ] Publish to GPT Store (Everyone)
