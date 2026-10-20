# Feature Request 1: Search and Filtering

## Why

Support agents have too many tickets to scroll through. They need to find the right ticket fast.

## Requirements

1. **Search box.** Label it `Search tickets`. It matches the ticket title or the requester name. Matching ignores upper and lower case. Spaces before and after the text are ignored.
2. **Status filter.** A dropdown labeled `Status` with these options: All, Open, In progress, Resolved. The values are `all`, `open`, `in_progress`, `resolved`.
3. **Priority filter.** A dropdown labeled `Priority` with these options: All, Low, Medium, High. The values are `all`, `low`, `medium`, `high`.
4. **Filters work together.** A ticket shows only if it matches the search, the status, and the priority.
5. **Clear button.** A button named `Clear filters` resets the search box and both dropdowns.
6. **Result count.** Show `Showing X of Y tickets` above the list. Give it `data-testid="result-count"`.
7. **Empty state.** When nothing matches, show `No tickets match your filters.`

## Files to look at

- `src/App.tsx`
- `src/components/TicketFilters.tsx`
- `src/components/TicketList.tsx`
- `src/components/TicketCard.tsx`
- `src/data/tickets.ts`
- `tests/filtering.test.tsx`

## Done when

- `npm test` passes for `tests/filtering.test.tsx`.
- `npm run lint` and `npm run build` finish without errors.
- The app in the browser filters the list as you type and as you change the dropdowns.
