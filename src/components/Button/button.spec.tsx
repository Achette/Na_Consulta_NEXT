import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Button } from './index'

test('renders button with correct title and size', () => {
  const title = 'Click Me!'
  const size = 'medium'

  const { getByText, getByTestId } = render(
    <Button title={title} size={size} />,
  )

  expect(getByText(title)).toBeInTheDocument()
  expect(getByTestId('button-container')).toHaveAttribute('variant', size)
})
