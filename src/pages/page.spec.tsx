import Home from './index'
import { render, screen } from '@testing-library/react'

describe('first test', () => {
  it('should render first test', () => {
    render(<Home />)

    const heading = screen.getByText('NaConsulta')
    expect(heading).toBeInTheDocument()
  })
})
