import { render, screen } from '@testing-library/react'
import { Header } from '.'

describe('<Header />', () => {
  it('should render correctly Header component', () => {
    render(<Header />)

    expect(screen.getByText('NaConsulta')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /inicio/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sobre/i })).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /depoimentos/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /fale conosco/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /agendar consulta/i }),
    ).toBeInTheDocument()
  })
})
