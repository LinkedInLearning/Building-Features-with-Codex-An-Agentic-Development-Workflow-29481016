import type { Ticket } from '../data/tickets.ts'
import TicketCard from './TicketCard.tsx'

interface TicketListProps {
  tickets: Ticket[]
}

export default function TicketList({ tickets }: TicketListProps) {
  if (tickets.length === 0) {
    return (
      <p className="empty" role="status">
        No tickets match your filters.
      </p>
    )
  }

  return (
    <ul className="ticket-list" aria-label="Tickets">
      {tickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </ul>
  )
}
