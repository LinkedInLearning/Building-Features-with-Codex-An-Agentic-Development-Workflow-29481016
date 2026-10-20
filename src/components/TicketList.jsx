import TicketCard from "./TicketCard.jsx";

export default function TicketList({ tickets }) {
  if (tickets.length === 0) {
    return <div className="empty-state"><h2>No tickets found</h2><p>Try changing your search or filters.</p></div>;
  }
  return <section className="ticket-grid" aria-label="Support tickets">{tickets.map((ticket) => <TicketCard key={ticket.id} ticket={ticket} />)}</section>;
}
