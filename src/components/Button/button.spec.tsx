import React from 'react'
import { render } from '@testing-library/react'
import { Button } from '.'

describe('Button', () => {
  it('Renders correctly with the given title', () => {
    const { getByTestId } = render(<Button title="Clique aqui" size="medium" />)
    const buttonContainer = getByTestId('button-container')
    expect(buttonContainer).toBeInTheDocument()
    expect(buttonContainer).toHaveTextContent('Clique aqui')
  })

  it('Get the "size" property correctly', () => {
    const { getByTestId } = render(<Button title="Clique aqui" size="small" />)
    const buttonContainer = getByTestId('button-container')
    expect(buttonContainer).toHaveStyle({
      width: 'small',
    })
  })

  it('Gets "size" property with large style', () => {
    const { getByTestId } = render(<Button title="Clique aqui" size="large" />)
    const buttonContainer = getByTestId('button-container')
    expect(buttonContainer).toHaveStyle({
      width: 'large',
    })
  })
})
