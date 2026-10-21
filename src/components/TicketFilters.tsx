import type { Filters } from '../utils/filterTickets.ts'

interface TicketFiltersProps {
  filters: Filters
  onChange: (changes: Partial<Filters>) => void
  onClear: () => void
}

export default function TicketFilters({ filters, onChange, onClear }: TicketFiltersProps) {
  return (
    <form className="filters" aria-label="Ticket filters" onSubmit={(event) => event.preventDefault()}>
      <label>
        Search tickets
        <input
          type="search"
          placeholder="Search by title or requester"
          value={filters.query}
          onChange={(event) => onChange({ query: event.target.value })}
        />
      </label>

      <label>
        Status
        <select
          value={filters.status}
          onChange={(event) => onChange({ status: event.target.value as Filters['status'] })}
        >
          <option value="all">All</option>
          <option value="open">Open</option>
          <option value="in_progress">In progress</option>
          <option value="resolved">Resolved</option>
        </select>
      </label>

      <label>
        Priority
        <select
          value={filters.priority}
          onChange={(event) => onChange({ priority: event.target.value as Filters['priority'] })}
        >
          <option value="all">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>

      <button type="button" onClick={onClear}>
        Clear filters
      </button>
    </form>
  )
}
