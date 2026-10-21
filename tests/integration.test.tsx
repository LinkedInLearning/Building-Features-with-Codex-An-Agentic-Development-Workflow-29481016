import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from '../src/App.tsx'

const searchBox = () => screen.getByLabelText('Search tickets')
const statusSelect = () => screen.getByLabelText('Status')
const prioritySelect = () => screen.getByLabelText('Priority')
const metric = (name: string) => screen.getByTestId(`metric-${name}`)

describe('Search, filters, and dashboard working together', () => {
  it('updates the metrics when filters change the list', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.selectOptions(statusSelect(), 'open')
    await user.selectOptions(prioritySelect(), 'high')

    expect(metric('total')).toHaveTextContent('2')
    expect(metric('open')).toHaveTextContent('2')
    expect(metric('in-progress')).toHaveTextContent('0')
    expect(metric('resolved')).toHaveTextContent('0')
    expect(metric('high-priority')).toHaveTextContent('2')
    expect(metric('avg-age')).toHaveTextContent('2.0')
  })

  it('shows a zero state instead of NaN when nothing matches', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(searchBox(), 'zzz')

    expect(metric('total')).toHaveTextContent('0')
    expect(metric('avg-age')).toHaveTextContent('0.0')
    expect(document.body).not.toHaveTextContent('NaN')
  })

  it('keeps the search text when a dropdown changes', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(searchBox(), 'password')
    await user.selectOptions(statusSelect(), 'open')

    expect(searchBox()).toHaveValue('password')
    expect(screen.getByTestId('result-count')).toHaveTextContent('Showing 2 of 10 tickets')
    expect(metric('total')).toHaveTextContent('2')
  })

  it('keeps the dropdowns when the search text changes', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.selectOptions(prioritySelect(), 'high')
    await user.type(searchBox(), 'password')

    expect(prioritySelect()).toHaveValue('high')
    expect(metric('total')).toHaveTextContent('1')
  })

  it('restores the full metrics when filters are cleared', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.selectOptions(statusSelect(), 'resolved')
    expect(metric('total')).toHaveTextContent('3')

    await user.click(screen.getByRole('button', { name: 'Clear filters' }))
    expect(metric('total')).toHaveTextContent('10')
    expect(metric('avg-age')).toHaveTextContent('4.7')
  })

  it('keeps the result count and the total metric in agreement', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.selectOptions(prioritySelect(), 'medium')

    expect(screen.getByTestId('result-count')).toHaveTextContent('Showing 3 of 10 tickets')
    expect(metric('total')).toHaveTextContent('3')
  })
})
