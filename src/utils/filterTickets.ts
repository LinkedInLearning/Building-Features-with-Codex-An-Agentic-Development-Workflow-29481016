import type { Ticket, TicketPriority, TicketStatus } from '../data/tickets.ts'

export interface Filters {
  query: string
  status: TicketStatus | 'all'
  priority: TicketPriority | 'all'
}

export const DEFAULT_FILTERS: Filters = {
  query: '',
  status: 'all',
  priority: 'all',
}

export function filterTickets(tickets: Ticket[], filters: Filters): Ticket[] {
  const query = filters.query.trim().toLowerCase()

  return tickets.filter((ticket) => {
    const matchesQuery =
      query === '' ||
      ticket.title.toLowerCase().includes(query) ||
      ticket.requester.toLowerCase().includes(query)
    const matchesStatus = filters.status === 'all' || ticket.status === filters.status
    const matchesPriority = filters.priority === 'all' || ticket.priority === filters.priority

    return matchesQuery && matchesStatus && matchesPriority
  })
}
