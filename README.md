# Building Features with Codex: An Agentic Development Workflow
This is the repository for the LinkedIn Learning course `Building Features with Codex: An Agentic Development Workflow`. The full course is available from [LinkedIn Learning][https://www.linkedin.com/learning/building-features-with-codex-an-agentic-development-workflow/meet-your-ai-feature-sprint?u=104].

![lil-thumbnail-url]

## Course Description

SupportFlow is a small React and TypeScript app for triaging customer support tickets. In this course, you run a feature sprint with OpenAI Codex: map the code, plan the change, build in small steps, test, and review.

## Branches

| Branch | What it holds |
|---|---|
| `main` | Videos 1–5. The starter app. |
| `chapter-6` | Videos 6–8. Search and filtering are done. Dashboard metrics aren't built yet. |
| `chapter-9` | Video 9. The finished app. Both features work, and all tests pass. |

You can use the branch pop-up menu in GitHub to switch branches, or add `/tree/BRANCH_NAME` to the URL.

When switching branches after making changes to the files, you may get a message like this:

    error: Your local changes to the following files would be overwritten by checkout:        [files]
    Please commit your changes or stash them before you switch branches.
    Aborting

To resolve this issue:

    Add changes to git using this command: git add .
    Commit changes using this command: git commit -m "some message"

## Installing

You need Node 22.9 or newer.

1. Clone this repository into your local machine using the terminal (Mac), CMD (Windows), or a GUI tool like SourceTree.
2. Install and run the app:

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

On `main`, `npm test` shows **1 passing and 10 failing**. That's on purpose. The failing tests in `tests/filtering.test.tsx` describe Feature 1, and they pass once search and filtering are built.

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

## Instructor

Instructor name

Instructor description

Check out my other courses on [LinkedIn Learning](https://www.linkedin.com/learning/instructors/).


[0]: # (Replace these placeholder URLs with actual course URLs)

[lil-course-url]: https://www.linkedin.com/learning/building-features-with-codex-an-agentic-development-workflow/meet-your-ai-feature-sprint?u=104
[lil-thumbnail-url]: https://media.licdn.com/dms/image/v2/D560DAQEWMIfCEXYTjg/learning-public-crop_675_1200/B56aF.n56vHcAc-/0/1793125753083?e=2147483647&v=beta&t=GyYbr84UXj2W9Ick0oYAwa0v-pSgnKGv_6W5FF67Tow
