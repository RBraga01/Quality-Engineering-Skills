# Slack App Setup Guide

Two deployment tracks for private workspace use:

- **Track A — n8n / Make.com webhook (available now, no coding):** Connect a Slack slash command to an AI provider via a no-code workflow. Works today in under 20 minutes.
- **Track B — Custom Node.js bot (full control):** Build the bot with the Slack Bolt SDK and your LLM of choice.

> **Slack App Directory listing** is managed by the QES team (@RBraga01 / @migmcc) and published from the official repository. If you want to use the bot in your workspace today, use Track A or B below.

---

## Track A — No-code with n8n or Make.com

Best for: teams that want the bot running today without a development environment.

### Using n8n (self-hosted or n8n Cloud)

1. **Create the Slack app:**
   - Go to [api.slack.com/apps](https://api.slack.com/apps) → **Create New App** → **From an app manifest**.
   - Paste the content of `platforms/slack/app-manifest.yaml`.
   - Click **Create**.

2. **Get your credentials:**
   - Go to **OAuth & Permissions** → install the app to your workspace → copy the **Bot User OAuth Token** (`xoxb-...`).
   - Go to **Basic Information** → copy the **Signing Secret**.

3. **Create an n8n workflow:**
   - In n8n, create a new workflow.
   - Add a **Webhook** node as trigger.
   - Set method: `POST`. Copy the webhook URL.
   - Add an **HTTP Request** node pointing to your LLM API (Claude, Gemini, or OpenAI).
   - In the request body, set the system prompt to the content of `platforms/slack/slack-instructions.md`.
   - Set the user message to `{{ $json.body.text }}` (the Slack slash command payload).
   - Add a final **HTTP Request** node to POST the LLM response back to Slack using the `response_url` from the Slack payload.

4. **Wire the slash commands:**
   - In your Slack app settings, go to **Slash Commands** → edit each command.
   - Set the **Request URL** to your n8n webhook URL.
   - Repeat for `/8d`, `/fmea`, `/ncr`, `/rca`, `/audit`, `/qe-help`.

5. **Test:**
   - In Slack, type `/qe-help` — the bot should respond with the help message.
   - Type `/8d a customer returned a batch of parts with incorrect dimensions` — the bot starts D0.

### Using Make.com (formerly Integromat)

Same approach as n8n:
1. Create Slack app from `app-manifest.yaml`.
2. In Make.com, create a scenario with **Webhooks → Custom webhook** as trigger.
3. Add an **HTTP** module calling your LLM API with the system prompt.
4. Add a **Slack → Create a message** module posting the response.
5. Set all slash commands to point to the Make.com webhook URL.

---

## Track B — Custom Node.js Bot (Bolt SDK)

Best for: production deployment, session management, multi-turn conversations.

### Prerequisites

- Node.js 18+
- Slack app created from `app-manifest.yaml` (see Track A, Step 1–2)
- LLM API key (Claude, Gemini, or OpenAI)

### Installation

```bash
npm install @slack/bolt @anthropic-ai/sdk dotenv
```

### Environment variables

Create a `.env` file:
```
SLACK_BOT_TOKEN=xoxb-your-bot-token
SLACK_SIGNING_SECRET=your-signing-secret
SLACK_APP_TOKEN=xapp-your-app-token  # Required for Socket Mode
ANTHROPIC_API_KEY=your-anthropic-key
PORT=3000
```

### app.js

```javascript
const { App } = require('@slack/bolt');
const Anthropic = require('@anthropic-ai/sdk');
const fs = require('fs');
const path = require('path');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
});

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// Load system instructions from the skill file
const SYSTEM_INSTRUCTIONS = fs.readFileSync(
  path.join(__dirname, 'slack-instructions.md'), 'utf8'
);

// Simple in-memory session store (replace with Redis for production)
const sessions = new Map();

async function callAssistant(userId, userMessage) {
  if (!sessions.has(userId)) {
    sessions.set(userId, []);
  }
  const history = sessions.get(userId);
  history.push({ role: 'user', content: userMessage });

  const response = await anthropic.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 2048,
    system: SYSTEM_INSTRUCTIONS,
    messages: history,
  });

  const assistantMessage = response.content[0].text;
  history.push({ role: 'assistant', content: assistantMessage });

  // Keep last 20 turns to avoid context overflow
  if (history.length > 40) sessions.set(userId, history.slice(-40));

  return assistantMessage;
}

// Handle slash commands
async function handleCommand(command, mode, say, respond) {
  const userId = command.user_id;
  const text = command.text.trim();
  const prompt = text ? `${mode}: ${text}` : mode;

  try {
    await respond({ response_type: 'in_channel', text: '_Processing..._' });
    const reply = await callAssistant(userId, prompt);
    await respond({ response_type: 'in_channel', text: reply });
  } catch (err) {
    await respond({ text: `Error: ${err.message}` });
  }
}

app.command('/8d', async ({ command, respond }) => {
  const text = command.text.trim();
  const mode = text.length > 100 ? 'Evaluate this 8D report' : 'Start 8D Coach';
  await handleCommand(command, `${mode}: ${text}`, null, respond);
});

app.command('/fmea', async ({ command, respond }) => {
  await handleCommand(command, 'Start FMEA Reviewer', null, respond);
});

app.command('/ncr', async ({ command, respond }) => {
  await handleCommand(command, 'Start NCR Writer. Observations', null, respond);
});

app.command('/rca', async ({ command, respond }) => {
  await handleCommand(command, 'Start Root Cause Analysis', null, respond);
});

app.command('/audit', async ({ command, respond }) => {
  await handleCommand(command, 'Start Audit Guide', null, respond);
});

app.command('/qe-help', async ({ respond }) => {
  await respond({
    response_type: 'ephemeral',
    text: '*Quality Engineering Assistant* — Available commands:\n\n*/8d* [complaint or 8D text] — Coach or evaluate an 8D\n*/fmea* [FMEA content] — AIAG-VDA 2019 gap review\n*/ncr* [observations] — Write a professional NCR\n*/rca* [problem] — Structured 5-Why session\n*/audit* [iso9001|iatf|both] [scope] — Internal audit\n\nPowered by Quality-Engineering-Skills',
  });
});

// Handle @mentions and direct messages
app.event('app_mention', async ({ event, say }) => {
  const text = event.text.replace(/<@[^>]+>/g, '').trim();
  const reply = await callAssistant(event.user, text);
  await say({ text: reply, thread_ts: event.ts });
});

app.event('message', async ({ event, say }) => {
  if (event.channel_type === 'im' && !event.bot_id) {
    const reply = await callAssistant(event.user, event.text);
    await say(reply);
  }
});

(async () => {
  await app.start();
  console.log('Quality Engineering Assistant is running');
})();
```

### Start the bot

```bash
node app.js
```

---

## Updating the bot

When `slack-instructions.md` is updated:
1. Track A (n8n/Make.com): update the system prompt field in the HTTP request node.
2. Track B (Bolt SDK): the file is read at startup; restart the process to pick up changes.

---

## Support

Issues: [github.com/RBraga01/Quality-Engineering-Skills/issues](https://github.com/RBraga01/Quality-Engineering-Skills/issues)
