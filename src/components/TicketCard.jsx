export default function TicketCard({ ticket }) {
  return (
    <article className="ticket-card">
      <div className="ticket-card__topline">
        <span className="ticket-id">#{ticket.id}</span>
        <span className={`badge badge--${ticket.priority.toLowerCase()}`}>{ticket.priority}</span>
      </div>
      <h3>{ticket.title}</h3>
      <p className="customer">{ticket.customer}</p>
      <dl>
        <div><dt>Status</dt><dd>{ticket.status}</dd></div>
        <div><dt>Category</dt><dd>{ticket.category}</dd></div>
        <div><dt>Assignee</dt><dd>{ticket.assignee || "Unassigned"}</dd></div>
      </dl>
    </article>
  );
}
