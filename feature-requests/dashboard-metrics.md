# Feature Request 2: Dashboard Metrics

## Why

Team leads want a quick read on workload without counting cards by hand.

## Requirements

1. **Metric cards.** Show six cards above the filters, in this order:
   - Total tickets (`data-testid="metric-total"`)
   - Open (`metric-open`)
   - In progress (`metric-in-progress`)
   - Resolved (`metric-resolved`)
   - High priority, unresolved (`metric-high-priority`)
   - Avg. age (days) (`metric-avg-age`)
2. **Where the testid goes.** Put each `data-testid` on the element that holds the number.
3. **Unresolved means** any ticket that is not `resolved`.
4. **Average age.** Average `ageDays` of unresolved tickets only. Round to one decimal place and always show one decimal, like `4.7` or `0.0`.
5. **No unresolved tickets.** Average age is `0`, never `NaN`.
6. **Follow the filters.** The cards describe the tickets currently shown in the list, not the full data set.
7. **Calculation lives in `src/utils/metrics.ts`.** Export `computeMetrics(tickets)` returning `total`, `open`, `inProgress`, `resolved`, `highPriorityUnresolved`, `avgAgeDays`.
8. **Component lives in `src/components/DashboardMetrics.tsx`.** It takes a `tickets` prop.

## Files to look at

- `src/App.tsx`
- `src/components/DashboardMetrics.tsx`
- `src/utils/metrics.ts`
- `src/utils/filterTickets.ts`
- `tests/metrics.test.tsx`

## Done when

- `npm test` passes for `tests/filtering.test.tsx` and `tests/metrics.test.tsx`.
- `npm run lint` and `npm run build` finish without errors.
- The cards change when you search or filter.
