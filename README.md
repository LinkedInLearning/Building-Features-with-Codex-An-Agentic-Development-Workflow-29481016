# SupportFlow

A small React app for reviewing customer support tickets. It's the starter project for the **SupportFlow with Codex** course, where you run a feature sprint with OpenAI Codex: map the code, plan the change, build in small steps, test, and review.

## Run it

You need Node 20.19 or newer.

```bash
npm install
npm run dev
```

## Test it

```bash
npm test
```

## What's in here

| Path | What it's for |
|---|---|
| [`PROMPTS.md`](PROMPTS.md) | Every Codex prompt from the course, ready to copy |
| [`feature-requests/`](feature-requests/) | The two feature requests for the sprint, plus a template for writing your own |
| [`.codex/skills/feature-sprint/SKILL.md`](.codex/skills/feature-sprint/SKILL.md) | The reusable workflow Codex follows for every feature |
| `src/` | The app: `App.jsx` loads the tickets and passes them to `TicketList`, which renders each `TicketCard` |
| `src/data/tickets.js` | Local ticket data. No database or API needed |
| `tests/` | Baseline tests. Run them before you change anything |

## The sprint

1. **Feature 1:** search and filtering ([`5-1.md`](feature-requests/5-1.md))
2. **Feature 2:** dashboard metrics that update with the filters ([`8-1.md`](feature-requests/8-1.md))
