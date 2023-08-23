import { fireEvent, render, screen } from '@testing-library/react'
import { DepositionSection } from '.'

describe('<DepositionSection />', () => {
  it('should render Section Deposition correctly', () => {
    render(<DepositionSection />)

    const heading = screen.getByRole('heading', { name: /depoimentos/i })
    const subtitle = screen.getByRole('heading', {
      name: /opniões de nossos clientes/i,
    })
    const carrosselContainer = screen.getByTestId('carrossel-container')
    const carrosselCards = screen.getAllByTestId('card-container')
    const leftArrow = screen.getByTestId('left-arrow')
    const rightArrow = screen.getByTestId('right-arrow')

    expect(heading).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
    expect(carrosselContainer).toBeInTheDocument()
    expect(leftArrow).toBeInTheDocument()
    expect(rightArrow).toBeInTheDocument()
    expect(carrosselCards.length).toBe(6)
  })

  it('scrolls left when the left arrow is clicked', () => {
    render(<DepositionSection />)
    const leftArrow = screen.getByTestId('left-arrow')
    const carrosselContainer = screen.getByTestId('carrossel-container')

    fireEvent.click(leftArrow)
    expect(carrosselContainer.scrollLeft).toEqual(0) // scrollLeft inicia no 0 e retorna ao zero
  })

  it('scrolls right when the right arrow is clicked', () => {
    render(<DepositionSection />)
    const rightArrow = screen.getByTestId('right-arrow')
    const carrosselContainer = screen.getByTestId('carrossel-container')

    fireEvent.click(rightArrow)
    expect(carrosselContainer.scrollLeft).toEqual(0) // este scrollRight só é atualizado depois do segundo click
  })
})
