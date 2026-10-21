import type { Ticket } from '../data/tickets.ts'

export interface Metrics {
  total: number
  open: number
  inProgress: number
  resolved: number
  highPriorityUnresolved: number
  avgAgeDays: number
}

export function computeMetrics(tickets: Ticket[]): Metrics {
  const unresolved = tickets.filter((ticket) => ticket.status !== 'resolved')
  const totalAge = unresolved.reduce((sum, ticket) => sum + ticket.ageDays, 0)

  return {
    total: tickets.length,
    open: tickets.filter((ticket) => ticket.status === 'open').length,
    inProgress: tickets.filter((ticket) => ticket.status === 'in_progress').length,
    resolved: tickets.filter((ticket) => ticket.status === 'resolved').length,
    highPriorityUnresolved: unresolved.filter((ticket) => ticket.priority === 'high').length,
    avgAgeDays: unresolved.length === 0 ? 0 : Math.round((totalAge / unresolved.length) * 10) / 10,
  }
}
