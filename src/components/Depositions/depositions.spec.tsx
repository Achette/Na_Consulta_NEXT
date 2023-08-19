import { render, screen } from '@testing-library/react'
import { DepositionSection } from '.'

describe('<DepositionSection />', () => {
  it('should render Section Deposition correctly', () => {
    render(<DepositionSection />)

    const heading = screen.getByRole('heading', { name: /depoimentos/i })
    const subtitle = screen.getByRole('heading', {
      name: /opniões de nossos clientes/i,
    })

    expect(heading).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
  })
})
