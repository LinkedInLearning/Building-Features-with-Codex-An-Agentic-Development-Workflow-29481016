# SupportFlow sprint prompts

Every Codex prompt used in the course, in the order you'll use it. Copy them, then adapt them to your own project.

Each prompt is built from the same four parts:

| Part | What it does | Look for |
|---|---|---|
| **Scope** | Tells Codex exactly what to look at or work on | "Inspect this project", "Plan Feature 1" |
| **Source of truth** | Points Codex to the requirements instead of letting it guess | `feature-requests/search-filter.md`, `$feature-sprint` |
| **Evidence** | Asks Codex to show its work so you can review it | "map each acceptance criterion to implementation and validation" |
| **Guardrail** | Sets the line Codex can't cross yet | "Do not edit any files", "until I approve the plan" |

> If your Codex interface invokes skills differently than `$feature-sprint`, keep the intent of the prompt and use the supported invocation.

---

## Video 1: Meet Your AI Feature Sprint | Explore an Existing Codebase with Codex

**Map the codebase**

```text
Inspect this project before making any changes. Explain the architecture, dependencies, data flow, tests, and safest extension points for adding features. Identify the files I should understand first. Do not edit any files.
```

- **Scope:** the whole project: architecture, dependencies, data flow, tests
- **Evidence:** "Identify the files I should understand first"
- **Guardrail:** "Do not edit any files"

---

## Video 2: Build a Reusable Feature Sprint Agent with Codex

**Check the skill**

```text
$feature-sprint Explain the workflow you will follow for a feature request in this project. Do not change files.
```

- **Source of truth:** the `feature-sprint` skill in `.agents/skills/feature-sprint/SKILL.md`
- **Evidence:** Codex restates the workflow, so you can confirm it found the skill
- **Guardrail:** "Do not change files"

---

## Video 3: Plan a Feature with Codex Before You Code

**Plan Feature 1: search and filtering**

```text
$feature-sprint Use feature-requests/search-filter.md to plan Feature 1. Inspect the current project and tests. Identify the smallest set of files to change, explain the data flow, and map each acceptance criterion to implementation and validation. Do not edit files until I approve the plan.
```

- **Scope:** Feature 1 only, with the smallest set of files
- **Source of truth:** `feature-requests/search-filter.md` plus the skill
- **Evidence:** each acceptance criterion mapped to code and to a test
- **Guardrail:** "Do not edit files until I approve the plan"

If the plan is missing something, send it back before you approve:

```text
Revise the plan to include combined-filter behavior, the empty state, and tests that prove search is case-insensitive. Keep the change limited to the existing architecture and dependencies.
```

---

## Video 6: Reuse Your Codex Agent for a New Feature

**Plan Feature 2: dashboard metrics**

```text
$feature-sprint Analyze feature-requests/dashboard-metrics.md against the current code after Feature 1. Plan the dashboard metrics feature, identify the existing filtered data that should drive it, and map the acceptance criteria to tests. Do not edit files until I approve the plan.
```

- **Scope:** the codebase as it is now, after Feature 1
- **Source of truth:** `feature-requests/dashboard-metrics.md` plus the skill
- **Evidence:** names the filtered data that drives the metrics and maps criteria to tests
- **Guardrail:** "Do not edit files until I approve the plan"

Before you approve, check the integration point: the six cards must be calculated from the filtered list the app already shows, not the original `tickets` array. The decorative `StatusRing` is the one panel that stays on the full data set.

---

## Write your own

```text
$feature-sprint Use feature-requests/<your-feature>.md to plan <feature>. Inspect the current project and tests. Identify the smallest set of files to change and map each acceptance criterion to implementation and validation. Do not edit files until I approve the plan.
```

Start your feature file from [`feature-requests/TEMPLATE.md`](feature-requests/TEMPLATE.md).
