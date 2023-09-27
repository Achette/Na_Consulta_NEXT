import React from 'react'
import { render, screen } from '@testing-library/react'

import { Menu } from '.'

describe('Menu', () => {
  it('Menu component renders correctly', () => {
    render(<Menu />)

    const menuContainer = screen.getByTestId('menu-container')
    const menuLink1 = screen.getByTestId('menu-link')
    const menuTitle1 = screen.getByTestId('menu-title')

    expect(menuContainer).toBeInTheDocument()
    expect(menuLink1).toBeInTheDocument()
    expect(menuTitle1).toBeInTheDocument()
  })
})
