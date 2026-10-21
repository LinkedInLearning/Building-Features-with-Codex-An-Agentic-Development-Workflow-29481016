import type { Ticket } from '../data/tickets.ts'
import { computeMetrics } from '../utils/metrics.ts'

interface DashboardMetricsProps {
  tickets: Ticket[]
}

export default function DashboardMetrics({ tickets }: DashboardMetricsProps) {
  const metrics = computeMetrics(tickets)

  const items = [
    { key: 'total', label: 'Total tickets', value: metrics.total },
    { key: 'open', label: 'Open', value: metrics.open },
    { key: 'in-progress', label: 'In progress', value: metrics.inProgress },
    { key: 'resolved', label: 'Resolved', value: metrics.resolved },
    { key: 'high-priority', label: 'High priority, unresolved', value: metrics.highPriorityUnresolved },
    { key: 'avg-age', label: 'Avg. age (days)', value: metrics.avgAgeDays.toFixed(1) },
  ]

  return (
    <section className="metrics" aria-label="Dashboard metrics">
      {items.map((item) => (
        <div className="metric" key={item.key}>
          <span className="metric__label">{item.label}</span>
          <strong className="metric__value" data-testid={`metric-${item.key}`}>
            {item.value}
          </strong>
        </div>
      ))}
    </section>
  )
}
