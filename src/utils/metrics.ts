import type { Ticket } from '../data/tickets.ts'

export interface Metrics {
  total: number
  open: number
  inProgress: number
  resolved: number
  highPriorityUnresolved: number
  avgAgeDays: number
}

// Feature #2: compute the dashboard numbers here.
// Read feature-requests/dashboard-metrics.md for the full requirements.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function computeMetrics(_tickets: Ticket[]): Metrics {
  return {
    total: 0,
    open: 0,
    inProgress: 0,
    resolved: 0,
    highPriorityUnresolved: 0,
    avgAgeDays: 0,
  }
}
