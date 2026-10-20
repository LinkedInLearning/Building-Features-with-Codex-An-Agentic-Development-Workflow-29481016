# SupportFlow

A small React and TypeScript app for triaging customer support tickets. It's the starter project for the **SupportFlow with Codex** course, where you run a feature sprint with OpenAI Codex: map the code, plan the change, build in small steps, test, and review.

## Run it

You need Node 22.9 or newer.

```bash
npm install
npm run dev
```

## Check it

```bash
npm test        # Vitest and Testing Library
npm run lint    # ESLint
npm run build   # type check, then production build
```

On a fresh copy, `npm test` shows **1 passing and 10 failing**. That's on purpose. The failing tests in `tests/filtering.test.tsx` describe Feature 1, and they pass once search and filtering are built.

## What's in here

| Path | What it's for |
|---|---|
| [`PROMPTS.md`](PROMPTS.md) | Every Codex prompt from the course, ready to copy, with the parts that matter called out |
| [`feature-requests/`](feature-requests/) | The two feature requests for the sprint, plus a template for writing your own |
| [`.agents/skills/feature-sprint/SKILL.md`](.agents/skills/feature-sprint/SKILL.md) | The reusable workflow Codex follows for every feature |
| `src/App.tsx` | Loads the tickets and passes them to `TicketList`, which renders each `TicketCard` |
| `src/components/StatusRing.tsx` | Decorative progress panel. It always shows the full data set |
| `src/components/TicketFilters.tsx` | Empty stub where Feature 1 goes |
| `src/data/tickets.ts` | Ten local tickets and their types. No database or API needed |
| `tests/` | The Feature 1 tests. Run them before you change anything |

## The sprint

1. **Feature 1:** search and filtering ([`search-filter.md`](feature-requests/search-filter.md))
2. **Feature 2:** dashboard metrics that follow the filters ([`dashboard-metrics.md`](feature-requests/dashboard-metrics.md))
