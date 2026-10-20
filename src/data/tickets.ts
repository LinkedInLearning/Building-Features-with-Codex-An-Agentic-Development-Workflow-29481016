export type TicketStatus = 'open' | 'in_progress' | 'resolved'
export type TicketPriority = 'low' | 'medium' | 'high'

export interface Ticket {
  id: number
  title: string
  requester: string
  status: TicketStatus
  priority: TicketPriority
  ageDays: number
}

export const STATUS_LABELS: Record<TicketStatus, string> = {
  open: 'Open',
  in_progress: 'In progress',
  resolved: 'Resolved',
}

export const tickets: Ticket[] = [
  { id: 1, title: 'Cannot reset password', requester: 'Maria Lopez', status: 'open', priority: 'high', ageDays: 3 },
  { id: 2, title: 'Invoice shows wrong amount', requester: 'Devon Carter', status: 'in_progress', priority: 'medium', ageDays: 5 },
  { id: 3, title: 'App crashes on login', requester: 'Priya Shah', status: 'open', priority: 'high', ageDays: 1 },
  { id: 4, title: 'Request dark mode', requester: 'Sam Ortiz', status: 'open', priority: 'low', ageDays: 12 },
  { id: 5, title: 'Export to CSV fails', requester: 'Maria Lopez', status: 'resolved', priority: 'medium', ageDays: 8 },
  { id: 6, title: 'Billing address not saving', requester: 'Jordan Lee', status: 'in_progress', priority: 'high', ageDays: 4 },
  { id: 7, title: 'Slow dashboard loading', requester: 'Devon Carter', status: 'resolved', priority: 'low', ageDays: 15 },
  { id: 8, title: 'Password email delayed', requester: 'Alex Kim', status: 'open', priority: 'medium', ageDays: 2 },
  { id: 9, title: 'Add team member limit', requester: 'Priya Shah', status: 'resolved', priority: 'high', ageDays: 9 },
  { id: 10, title: 'Typo on pricing page', requester: 'Sam Ortiz', status: 'open', priority: 'low', ageDays: 6 },
]
