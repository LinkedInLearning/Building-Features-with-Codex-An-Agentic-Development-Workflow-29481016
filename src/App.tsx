import StatusRing from './components/StatusRing.tsx'
import TicketList from './components/TicketList.tsx'
import { tickets } from './data/tickets.ts'

export default function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1>SupportFlow</h1>
        <p>Track and triage customer support tickets.</p>
      </header>
      <StatusRing />
      <main>
        {/* Feature #1: add the search and filter controls here. */}
        <TicketList tickets={tickets} />
      </main>
    </div>
  )
}
