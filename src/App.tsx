import { useMemo, useState } from 'react'
import DashboardMetrics from './components/DashboardMetrics.tsx'
import StatusRing from './components/StatusRing.tsx'
import TicketFilters from './components/TicketFilters.tsx'
import TicketList from './components/TicketList.tsx'
import { tickets } from './data/tickets.ts'
import { DEFAULT_FILTERS, filterTickets, type Filters } from './utils/filterTickets.ts'

export default function App() {
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS)

  const visibleTickets = useMemo(() => filterTickets(tickets, filters), [filters])

  const handleChange = (changes: Partial<Filters>) =>
    setFilters((current) => ({ ...current, ...changes }))
  const handleClear = () => setFilters(DEFAULT_FILTERS)

  return (
    <div className="app">
      <header className="app__header">
        <h1>SupportFlow</h1>
        <p>Track and triage customer support tickets.</p>
      </header>
      <StatusRing />
      <main>
        <DashboardMetrics tickets={visibleTickets} />
        <TicketFilters filters={filters} onChange={handleChange} onClear={handleClear} />
        <p className="result-count" data-testid="result-count">
          Showing {visibleTickets.length} of {tickets.length} tickets
        </p>
        <TicketList tickets={visibleTickets} />
      </main>
    </div>
  )
}
