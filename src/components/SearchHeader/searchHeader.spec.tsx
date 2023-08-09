import { SearchHeader } from '.'
import { render, screen } from '@testing-library/react'

describe('<SearchHeader />', () => {
  it('should render search header component correctly', () => {
    render(<SearchHeader />)

    const heading = screen.getByRole('heading', {
      name: /procure por um especialista/i,
    })

    const subtitle = screen.getByText(
      'O jeito fácil de agendar consultas médicas',
    )

    const input1 = screen.getByPlaceholderText('Médico, Serviço, Especialidade')
    const input2 = screen.getByPlaceholderText('Local ex. São Paulo')

    const button = screen.getByRole('button', { name: /pesquisar/i })

    expect(heading).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
    expect(input1).toBeInTheDocument()
    expect(input2).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })
})
