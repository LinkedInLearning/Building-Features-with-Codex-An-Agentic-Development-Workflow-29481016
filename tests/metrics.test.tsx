import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from '../src/App.tsx'
import DashboardMetrics from '../src/components/DashboardMetrics.tsx'
import { tickets, type Ticket } from '../src/data/tickets.ts'
import { computeMetrics } from '../src/utils/metrics.ts'

const make = (overrides: Partial<Ticket> = {}): Ticket => ({
  id: 1,
  title: 'Sample',
  requester: 'Test User',
  status: 'open',
  priority: 'low',
  ageDays: 1,
  ...overrides,
})

describe('computeMetrics', () => {
  it('counts every status and unresolved high priority tickets', () => {
    expect(computeMetrics(tickets)).toEqual({
      total: 10,
      open: 5,
      inProgress: 2,
      resolved: 3,
      highPriorityUnresolved: 3,
      avgAgeDays: 4.7,
    })
  })

  it('returns zeros for an empty list', () => {
    expect(computeMetrics([])).toEqual({
      total: 0,
      open: 0,
      inProgress: 0,
      resolved: 0,
      highPriorityUnresolved: 0,
      avgAgeDays: 0,
    })
  })

  it('returns an average age of 0 when every ticket is resolved', () => {
    const resolvedOnly = tickets.filter((ticket) => ticket.status === 'resolved')
    expect(computeMetrics(resolvedOnly).avgAgeDays).toBe(0)
  })

  it('averages unresolved tickets only and rounds to one decimal', () => {
    const sample = [
      make({ ageDays: 1 }),
      make({ ageDays: 2 }),
      make({ ageDays: 2 }),
      make({ status: 'resolved', ageDays: 50 }),
    ]
    expect(computeMetrics(sample).avgAgeDays).toBe(1.7)
  })

  it('does not count resolved tickets as high priority unresolved', () => {
    const sample = [make({ priority: 'high' }), make({ priority: 'high', status: 'resolved' })]
    expect(computeMetrics(sample).highPriorityUnresolved).toBe(1)
  })
})

describe('DashboardMetrics', () => {
  it('renders each metric card', () => {
    render(<DashboardMetrics tickets={tickets} />)
    expect(screen.getByTestId('metric-total')).toHaveTextContent('10')
    expect(screen.getByTestId('metric-open')).toHaveTextContent('5')
    expect(screen.getByTestId('metric-in-progress')).toHaveTextContent('2')
    expect(screen.getByTestId('metric-resolved')).toHaveTextContent('3')
    expect(screen.getByTestId('metric-high-priority')).toHaveTextContent('3')
    expect(screen.getByTestId('metric-avg-age')).toHaveTextContent('4.7')
  })

  it('appears in the app on first load', () => {
    render(<App />)
    expect(screen.getByTestId('metric-total')).toHaveTextContent('10')
  })
})
