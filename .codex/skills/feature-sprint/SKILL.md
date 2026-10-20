---
name: feature-sprint
description: Plan, implement, and verify a small feature in an existing application when given a feature request or acceptance criteria.
---

# Feature sprint workflow

1. Read the feature request and restate its acceptance criteria.
2. Inspect the existing code, tests, and project conventions before suggesting changes.
3. Identify the smallest set of files that must change and note dependencies or risks.
4. Present an implementation plan and wait for approval before editing code.
5. After approval, make focused changes that follow existing patterns. Do not change unrelated files or add dependencies without approval.
6. Run the most relevant tests, then the full available test suite.
7. If a test fails, diagnose the cause from evidence before editing again.
8. Finish with a concise summary of changed files, acceptance criteria met, tests run, and remaining risks.
