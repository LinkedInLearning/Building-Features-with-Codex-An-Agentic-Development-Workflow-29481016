---
name: feature-sprint
description: Plan, build, test, and verify one small feature in the SupportFlow app. Use when asked to implement a request from the feature-requests folder. Do not use for questions, refactors, or work with no matching request file.
---

# Feature Sprint

Use this skill to ship one feature at a time. Keep every change small and checkable.

## Steps

1. **Read the request.** Open the file in `feature-requests/` that matches the task. List the requirements and acceptance criteria in your own words.
2. **Inspect the code.** Read the files named in the request and the tests in `tests/`. Note what already works so you do not break it.
3. **Write a short plan.** List the files you will change, any new files, risks, and the test command. Share the plan before you edit anything.
4. **Build the smallest working version.** Follow the patterns already in the project. Keep components small. Do not rename or move existing files.
5. **Cover each acceptance criterion with a test.** Add or update tests in `tests/`.
6. **Run the tests.** Use `npm test`. Fix failures one at a time and run again.
7. **Check types and lint.** Run `npm run lint` and `npm run build`. Fix anything they report.
8. **Report back.** Say what changed, which files you touched, the test result, and anything left unfinished.

## Rules

- Do not change a test just to make it pass. Fix the code unless the test is wrong, and say so if it is.
- Do not add libraries unless the request asks for one.
- If a requirement is unclear, state your assumption in the plan.
- Stop and ask when a change would touch files outside the feature.
