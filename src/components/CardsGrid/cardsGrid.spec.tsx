import React from 'react'
import { render, screen } from '@testing-library/react'
import { ServiceCardSection } from '.'

describe('ServiceCardSection component', () => {
  it('should render correctly', () => {
    render(<ServiceCardSection />)

    const containerElement = screen.getByTestId('service-card-container')
    const headerElement = screen.getByTestId('service-card-header')
    const contentElement = screen.getByTestId('service-card-content')

    expect(containerElement).toBeInTheDocument()
    expect(headerElement).toBeInTheDocument()
    expect(contentElement).toBeInTheDocument()
  })

  it('should render three Card components', () => {
    render(<ServiceCardSection />)

    const cardElements = screen.getAllByTestId('card')

    expect(cardElements.length).toBe(6)
  })

  it('should have the data-testid attribute on the root elements', () => {
    render(<ServiceCardSection />)

    const containerElement = screen.getByTestId('service-card-container')
    const headerElement = screen.getByTestId('service-card-header')
    const contentElement = screen.getByTestId('service-card-content')

    expect(containerElement).toHaveAttribute(
      'data-testid',
      'service-card-container',
    )
    expect(headerElement).toHaveAttribute('data-testid', 'service-card-header')
    expect(contentElement).toHaveAttribute(
      'data-testid',
      'service-card-content',
    )
  })

  it('should display the correct titles and paragraphs in the Card components', () => {
    render(<ServiceCardSection />)

    const titles = [
      'Encontre especialistas',
      'Marque Consultas',
      'Avalie o serviço',
      'Encontre especialistas',
      'Marque Consultas',
      'Avalie o serviço',
    ]
    const paragraphs = [
      'Busque por especialistas de saúde em sua região.',
      'Escolha o profissional, dia e horário que desejar.',
      'Após a consulta você poderá deixar sua opinião sobre o serviço.',
      'Busque por especialistas de saúde em sua região.',
      'Escolha o profissional, dia e horário que desejar.',
      'Após a consulta você poderá deixar sua opinião sobre o serviço.',
    ]
    titles.forEach((title) => {
      const titleElements = screen.getAllByText(title)
      expect(titleElements.length).toBeGreaterThan(0)
      expect(titleElements).toEqual(
        expect.arrayContaining([expect.any(HTMLElement)]),
      )
    })

    paragraphs.forEach((paragraph) => {
      const paragraphElement = screen.getAllByText(paragraph)
      expect(paragraphElement.length).toBeGreaterThan(0)
      expect(paragraphElement).toEqual(
        expect.arrayContaining([expect.any(HTMLElement)]),
      )
    })
  })
})
