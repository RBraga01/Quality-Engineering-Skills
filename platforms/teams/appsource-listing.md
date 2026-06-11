# Microsoft Teams AppSource — Submission Guide

This guide takes you from a working Copilot Studio agent to a public listing in Microsoft AppSource / Teams app store.

---

## Prerequisites

- Copilot Studio agent created and tested (follow `bot-config.md` first)
- Microsoft Partner Center account: [partner.microsoft.com](https://partner.microsoft.com) (free registration)
- A publicly accessible privacy policy URL (GitHub Pages `docs/` works)

---

## Step 1 — Publish the agent in Copilot Studio

1. In Copilot Studio, go to **Publish** → click **Publish** to save the latest version.
2. Go to **Channels** → **Microsoft Teams** → **Turn on Teams**.
3. Click **Submit for admin approval** — this generates the Teams app package.
4. Download the `.zip` app package (you'll need it for Partner Center).

---

## Step 2 — Register on Microsoft Partner Center

1. Go to [partner.microsoft.com](https://partner.microsoft.com) → **Join now** (free).
2. Enroll in **Microsoft 365 and Teams** publisher program.
3. Complete publisher verification (requires a domain or Microsoft account — 1–2 business days).

---

## Step 3 — Create the AppSource offer

1. In Partner Center, go to **Marketplace offers** → **New offer** → **Microsoft 365 and Teams app**.
2. Offer ID: `quality-engineering-assistant`
3. Offer alias: `Quality Engineering Assistant`

### Properties tab

| Field | Value |
|-------|-------|
| Category | Productivity |
| Sub-category | Project management |
| Secondary category | Compliance & legal |
| Industries | Manufacturing; Automotive |
| App version | 1.0.0 |
| App domains | copilotstudio.microsoft.com |

### Listing tab — use this copy

**Short name:** Quality Engineering Assistant

**Short description (80 chars max):**
```
8D, FMEA, NCR and ISO 9001 audit — for quality engineers.
```

**Long description (up to 4000 chars):**
```
Quality Engineering Assistant brings decades of hands-on quality engineering expertise directly into Microsoft Teams.

WHAT IT DOES
Whether you're managing a customer complaint, reviewing an FMEA, writing an NCR, or preparing for an internal audit — this assistant guides you through the methodology step by step.

FIVE MODES

🔧 8D COACH — Interactive D0–D8 investigation with validation gates at every discipline. Challenges weak root causes, rejects promises as containment, ensures your 8D meets OEM submission standards (Ford, BMW, VW, Stellantis).

📋 8D EVALUATOR — Paste any existing 8D and get a structured Pass/Fail report per discipline. Know exactly what to fix before submitting to your customer.

🔍 ROOT CAUSE FACILITATOR — Structured 5-Why session with evidence validation. Detects circular reasoning, requires occurrence AND escape root causes, tests reversibility.

📄 NCR WRITER — Convert bullet-point observations into professional Non-Conformance Report text with objective-evidence language, severity grading (Critical/Major/Minor), and disposition recommendation.

✅ AUDIT GUIDE — Interactive ISO 9001 or IATF 16949 internal audit clause-by-clause. Requires objective evidence at every step. Generates a structured finding report.

WHO IS THIS FOR
Quality engineers, quality managers, supplier quality engineers, and anyone who manages non-conformances, audits, or corrective actions — in automotive, electronics, aerospace, medical devices, and general manufacturing.

STANDARDS COVERED
ISO 9001:2015 · IATF 16949:2016 · AIAG-VDA FMEA 2019

Powered by Quality-Engineering-Skills — the open-source canonical quality engineering methodology for AI agents.
github.com/RBraga01/Quality-Engineering-Skills
```

**Keywords (comma-separated):**
```
quality engineering, 8D, FMEA, NCR, ISO 9001, IATF 16949, root cause analysis, non-conformance, corrective action, internal audit, automotive quality, supplier quality
```

### Screenshots

Take 5 screenshots at 1366×768 px from the Teams client:
1. Home screen showing the 5 mode options
2. 8D Coach mid-session (D3 or D4 discipline)
3. 8D Evaluation report output
4. NCR Writer output
5. Audit Guide with a finding classified as Major NC

### Pricing and availability

| Field | Value |
|-------|-------|
| Markets | All markets |
| Price | Free |
| Free trial | Not applicable |

### Technical configuration

Upload the `.zip` app package downloaded from Copilot Studio in Step 1.

---

## Step 4 — Submit for review

1. Complete all required fields (Partner Center shows a completion checklist).
2. Click **Review and publish**.
3. Select all sections as ready.
4. Click **Submit**.

Microsoft review typically takes **5–7 business days**.

---

## Step 5 — After approval

Once approved, the app appears in:
- **Microsoft AppSource** (appsource.microsoft.com) — publicly searchable
- **Teams app store** (inside Teams → Apps → search "Quality Engineering")
- Any Teams user can install it directly — no IT admin required (unless their org has blocked external apps)

---

## Privacy policy

Use the GitHub Pages URL:
`https://rbraga01.github.io/Quality-Engineering-Skills/privacy`

Or add a `privacy.html` to the `docs/` folder before submission.

---

## Updates

When methodology is updated:
1. Update agent in Copilot Studio → re-publish
2. Download new app package
3. In Partner Center → your offer → **Update** → upload new package → re-submit

Review for updates takes 1–3 business days.
