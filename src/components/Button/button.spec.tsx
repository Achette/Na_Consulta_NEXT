import React from 'react'
import { render, screen } from '@testing-library/react'

import { Button } from '.'

describe('Button', () => {
  it('Renders correctly with the given title', () => {
    render(<Button title="Clique aqui" size="medium" />)

    const buttonContainer = screen.getByTestId('button-container')

    expect(buttonContainer).toBeInTheDocument()
    expect(buttonContainer).toHaveTextContent('Clique aqui')
  })

  it('Get the "size" property correctly', () => {
    render(<Button title="Clique aqui" size="small" />)

    const buttonContainer = screen.getByTestId('button-container')

    expect(buttonContainer).toHaveStyle({
      width: 'small',
    })
  })

  it('Gets "size" property with large style', () => {
    render(<Button title="Clique aqui" size="large" />)

    const buttonContainer = screen.getByTestId('button-container')

    expect(buttonContainer).toHaveStyle({
      width: 'large',
    })
  })
})
