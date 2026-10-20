import type { CSSProperties } from 'react'
import { tickets, type TicketStatus } from '../data/tickets.ts'

const RADIUS = 40
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

const SEGMENTS: { key: TicketStatus; label: string }[] = [
  { key: 'resolved', label: 'Resolved' },
  { key: 'in_progress', label: 'In progress' },
  { key: 'open', label: 'Open' },
]

// Decorative progress panel: ring plus a segmented bar for all tickets.
// It always uses the full data set, so it is separate from the dashboard metrics.
export default function StatusRing() {
  const total = tickets.length
  const segments = SEGMENTS.map((segment) => ({
    ...segment,
    count: tickets.filter((ticket) => ticket.status === segment.key).length,
  }))
  const resolved = segments[0].count
  const percent = Math.round((resolved / total) * 100)
  const offset = CIRCUMFERENCE * (1 - percent / 100)

  const ringStyle = {
    '--ring-circ': CIRCUMFERENCE,
    '--ring-offset': offset,
  } as CSSProperties

  return (
    <section className="progress" aria-label="Overall ticket progress">
      <div className="ring" role="img" aria-label={`${percent} percent of all tickets resolved`}>
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <defs>
            <linearGradient id="ring-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7c83ff" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
          <circle className="ring__track" cx="50" cy="50" r={RADIUS} />
          <circle
            className="ring__value"
            cx="50"
            cy="50"
            r={RADIUS}
            transform="rotate(-90 50 50)"
            style={ringStyle}
          />
        </svg>
        <div className="ring__label" aria-hidden="true">
          <strong>{percent}%</strong>
          <span>done</span>
        </div>
      </div>

      <div className="progress__body">
        <div className="progress__head">
          <h2>Overall progress</h2>
          <p>
            {resolved} of {total} tickets resolved
          </p>
        </div>

        <div className="progress__bar" aria-hidden="true">
          {segments.map((segment, index) => (
            <span
              key={segment.key}
              className={`progress__seg progress__seg--${segment.key}`}
              style={{
                width: `${(segment.count / total) * 100}%`,
                animationDelay: `${0.3 + index * 0.2}s`,
              }}
            />
          ))}
        </div>

        <ul className="progress__legend">
          {segments.map((segment) => (
            <li key={segment.key}>
              <span className={`dot dot--${segment.key}`} />
              {segment.label}
              <strong>{segment.count}</strong>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
