import { tickets } from "./data/tickets.js";
import TicketList from "./components/TicketList.jsx";

export default function App() {
  return (
    <main className="app-shell">
      <header><p className="eyebrow">Support operations</p><h1>SupportFlow</h1><p className="subtitle">Review and manage customer support tickets.</p></header>
      <p className="results-line">{tickets.length} tickets</p>
      <TicketList tickets={tickets} />
    </main>
  );
}
