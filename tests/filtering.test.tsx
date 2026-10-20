import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from '../src/App.tsx'

const cards = () => screen.queryAllByTestId('ticket-card')
const titles = () => cards().map((card) => card.querySelector('h3')?.textContent)
const searchBox = () => screen.getByLabelText('Search tickets')
const statusSelect = () => screen.getByLabelText('Status')
const prioritySelect = () => screen.getByLabelText('Priority')

describe('SupportFlow search and filtering', () => {
  it('shows all tickets on first load', () => {
    render(<App />)
    expect(cards()).toHaveLength(10)
  })

  it('shows how many tickets are visible', () => {
    render(<App />)
    expect(screen.getByTestId('result-count')).toHaveTextContent('Showing 10 of 10 tickets')
  })

  it('searches by ticket title', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(searchBox(), 'invoice')
    expect(titles()).toEqual(['Invoice shows wrong amount'])
  })

  it('ignores upper and lower case when searching', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(searchBox(), 'PASSWORD')
    expect(titles()).toEqual(['Cannot reset password', 'Password email delayed'])
  })

  it('searches by requester name', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(searchBox(), 'maria')
    expect(titles()).toEqual(['Cannot reset password', 'Export to CSV fails'])
  })

  it('ignores spaces before and after the search text', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(searchBox(), '  password  ')
    expect(titles()).toEqual(['Cannot reset password', 'Password email delayed'])
  })

  it('filters by status', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.selectOptions(statusSelect(), 'resolved')
    expect(cards()).toHaveLength(3)
    expect(screen.getByTestId('result-count')).toHaveTextContent('Showing 3 of 10 tickets')
  })

  it('filters by priority', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.selectOptions(prioritySelect(), 'high')
    expect(cards()).toHaveLength(4)
  })

  it('combines search, status, and priority', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.selectOptions(prioritySelect(), 'high')
    await user.type(searchBox(), 'password')
    expect(titles()).toEqual(['Cannot reset password'])
    await user.selectOptions(statusSelect(), 'open')
    expect(titles()).toEqual(['Cannot reset password'])
  })

  it('shows an empty message when nothing matches', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(searchBox(), 'zzz')
    expect(cards()).toHaveLength(0)
    expect(screen.getByText('No tickets match your filters.')).toBeInTheDocument()
    expect(screen.getByTestId('result-count')).toHaveTextContent('Showing 0 of 10 tickets')
  })

  it('clears the search box and both dropdowns', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(searchBox(), 'password')
    await user.selectOptions(statusSelect(), 'open')
    await user.selectOptions(prioritySelect(), 'high')
    await user.click(screen.getByRole('button', { name: 'Clear filters' }))
    expect(cards()).toHaveLength(10)
    expect(searchBox()).toHaveValue('')
    expect(statusSelect()).toHaveValue('all')
    expect(prioritySelect()).toHaveValue('all')
  })
})
