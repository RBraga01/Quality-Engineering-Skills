# Teams App Manifest Reference

When you download the Teams app package from Copilot Studio (Step 7 of `bot-config.md`), it contains a `manifest.json`. Below is the expected structure and field explanations for reference, customisation, or manual package creation.

---

## manifest.json structure

```json
{
  "$schema": "https://developer.microsoft.com/en-us/json-schemas/teams/v1.16/MicrosoftTeams.schema.json",
  "manifestVersion": "1.16",
  "version": "1.0.0",
  "id": "<YOUR-BOT-APP-ID>",
  "packageName": "com.qualityengineering.assistant",
  "developer": {
    "name": "Quality-Engineering-Skills",
    "websiteUrl": "https://github.com/RBraga01/Quality-Engineering-Skills",
    "privacyUrl": "https://github.com/RBraga01/Quality-Engineering-Skills/blob/master/LICENSE",
    "termsOfUseUrl": "https://github.com/RBraga01/Quality-Engineering-Skills/blob/master/LICENSE"
  },
  "name": {
    "short": "QE Assistant",
    "full": "Quality Engineering Assistant"
  },
  "description": {
    "short": "8D, FMEA, NCR, RCA and Internal Audit for quality engineers.",
    "full": "Structured quality engineering methodology for AI agents. Supports 8D coaching, FMEA review, NCR writing, 5-Why root cause analysis, and ISO 9001 / IATF 16949 internal audit. Powered by Quality-Engineering-Skills."
  },
  "icons": {
    "outline": "outline.png",
    "color": "color.png"
  },
  "accentColor": "#0ea5e9",
  "bots": [
    {
      "botId": "<YOUR-BOT-APP-ID>",
      "scopes": ["personal", "team", "groupchat"],
      "supportsFiles": false,
      "isNotificationOnly": false,
      "commandLists": [
        {
          "scopes": ["personal", "team"],
          "commands": [
            {
              "title": "8D Coach",
              "description": "Start an interactive 8D investigation (D0 to D8)"
            },
            {
              "title": "Evaluate 8D",
              "description": "Review and score an existing 8D report"
            },
            {
              "title": "Root Cause Analysis",
              "description": "Run a structured 5-Why session"
            },
            {
              "title": "Write NCR",
              "description": "Generate professional NCR text from bullet inputs"
            },
            {
              "title": "Audit Guide",
              "description": "Start an ISO 9001 or IATF 16949 internal audit"
            }
          ]
        }
      ]
    }
  ],
  "permissions": ["identity", "messageTeamMembers"],
  "validDomains": ["copilotstudio.microsoft.com"]
}
```

---

## Field notes

| Field | Notes |
|-------|-------|
| `id` / `botId` | Replace with the App ID from Copilot Studio → Settings → Advanced |
| `version` | Increment (`1.0.1`, `1.1.0`) each time you publish an update to Teams Admin Center |
| `accentColor` | `#0ea5e9` matches the QES brand (teal) |
| `icons.outline` | 32×32 white PNG with transparent background (required) |
| `icons.color` | 192×192 full-colour PNG (required) |
| `scopes` | `personal` = 1:1 chat; `team` = channel; `groupchat` = group chat. All three enabled by default. |
| `commandLists` | These appear as slash-command hints in Teams when users type `/`. Keep titles short (≤32 chars). |

---

## Icon files

Place two PNG files in the same folder as `manifest.json`:
- `outline.png` — 32×32 px, white icon, transparent background
- `color.png` — 192×192 px, full-colour icon

The QES teal (#0ea5e9) on dark (#060b0f) background matches the landing page and GPT branding.

---

## Packaging for manual upload

```bash
# From the directory containing manifest.json, outline.png, color.png:
zip -j quality-engineering-assistant.zip manifest.json outline.png color.png
```

Upload `quality-engineering-assistant.zip` to Teams Admin Center → Manage apps → Upload new app.
