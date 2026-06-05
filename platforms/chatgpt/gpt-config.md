# ChatGPT Custom GPT — Configuration

## Step-by-step setup at platform.openai.com/gpts

---

### 1. Name
```
Quality Engineering Assistant
```

### 2. Description (shown in GPT Store — max 300 chars)
```
ISO 9001 & IATF 16949 quality engineering expert. Guides you through 8D problem solving, evaluates existing 8D reports, facilitates root cause analysis, writes NCRs, and runs internal audits. Built on 15+ years of automotive supplier quality expertise.
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
Upload these files from the repository for retrieval-augmented responses:

**Core skills (13):**
- `skills/problem-solving/8d-problem-solving/SKILL.md`
- `skills/problem-solving/8d-problem-solving/assets/8d-template.md`
- `skills/problem-solving/5why-root-cause/SKILL.md`
- `skills/problem-solving/fishbone-analysis/SKILL.md`
- `skills/problem-solving/is-is-not-scoping/SKILL.md`
- `skills/risk-analysis/pfmea-process/SKILL.md`
- `skills/risk-analysis/pfmea-process/assets/ap-table.md`
- `skills/risk-analysis/action-priority-ap/SKILL.md`
- `skills/documentation/ncr-writing/SKILL.md`
- `skills/documentation/car-corrective-action/SKILL.md`
- `skills/documentation/8d-report-writing/SKILL.md`
- `skills/audit/iso-9001-internal-audit/SKILL.md`
- `skills/audit/iatf-16949-audit/SKILL.md`

**Reference files (3 — high value, add depth for OEM and 8D):**
- `skills/problem-solving/8d-problem-solving/references/d0-d8-guide.md`
- `skills/risk-analysis/action-priority-ap/references/oem-requirements.md`
- `skills/documentation/8d-report-writing/references/oem-formats.md`

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
