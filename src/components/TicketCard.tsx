import { STATUS_LABELS, type Ticket } from '../data/tickets.ts'

interface TicketCardProps {
  ticket: Ticket
}

export default function TicketCard({ ticket }: TicketCardProps) {
  return (
    <li className={`ticket-card ticket-card--${ticket.priority}`} data-testid="ticket-card">
      <div className="ticket-card__header">
        <h3>{ticket.title}</h3>
        <span className={`badge badge--${ticket.priority}`}>{ticket.priority}</span>
      </div>
      <p className="ticket-card__meta">
        #{ticket.id} | {ticket.requester} | {ticket.ageDays}d old
      </p>
      <span className={`status status--${ticket.status}`}>{STATUS_LABELS[ticket.status]}</span>
    </li>
  )
}
