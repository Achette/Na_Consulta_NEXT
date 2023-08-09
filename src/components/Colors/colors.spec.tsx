import React from 'react'
import { render, screen } from '@testing-library/react'
import { ColorsGrid } from '.'
import { defaultTheme } from 'src/styles/theme/default'

describe('ColorsGrid', () => {
  it('should check that each grid element has the elements name and color value', () => {
    render(<ColorsGrid />)

    const colorsGridContainers = screen.queryAllByTestId(
      'colors-grid-container',
    )

    const colorKeys = Object.keys(defaultTheme)
    colorKeys.forEach((key, index) => {
      const colorValue = defaultTheme[key]
      expect(colorsGridContainers[index]).toBeInTheDocument()
      expect(colorsGridContainers[index]).toHaveTextContent(key)
      expect(colorsGridContainers[index]).toHaveTextContent(colorValue)
    })
  })
})
