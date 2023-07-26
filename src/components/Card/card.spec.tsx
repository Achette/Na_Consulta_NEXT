import React from 'react'
import { render, screen } from '@testing-library/react'
import { Card } from '.'

describe('Card component', () => {
  const icon = <span data-testid="test-icon">Icon</span>
  const title = 'Test Title'
  const paragraph = 'Test Paragraph'

  it('should render correctly with provided data', () => {
    render(<Card icon={icon} title={title} paragraph={paragraph} />)

    const cardElement = screen.getByTestId('card')
    const iconElement = screen.getByTestId('test-icon')
    const titleElement = screen.getByText(title)
    const paragraphElement = screen.getByText(paragraph)

    expect(cardElement).toBeInTheDocument()
    expect(iconElement).toBeInTheDocument()
    expect(titleElement).toBeInTheDocument()
    expect(paragraphElement).toBeInTheDocument()
  })

  it('should display the correct icon, title, and paragraph', () => {
    render(<Card icon={icon} title={title} paragraph={paragraph} />)

    const iconElement = screen.getByTestId('test-icon')
    const titleElement = screen.getByText(title)
    const paragraphElement = screen.getByText(paragraph)

    expect(iconElement.textContent).toBe('Icon')
    expect(titleElement.textContent).toBe(title)
    expect(paragraphElement.textContent).toBe(paragraph)
  })

  it('should have the data-testid attribute on the root element', () => {
    render(<Card icon={icon} title={title} paragraph={paragraph} />)

    const cardElement = screen.getByTestId('card')

    expect(cardElement).toHaveAttribute('data-testid', 'card')
  })
})
