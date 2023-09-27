import React from 'react'
import { render, screen } from '@testing-library/react'

import { Social } from '.'

describe('Social', () => {
  it('Renders the Social component correctly', () => {
    render(<Social />)

    const socialContainer = screen.getByTestId('social-container')
    expect(socialContainer).toBeInTheDocument()

    const socialHeader = screen.getByTestId('social-header')
    expect(socialHeader).toBeInTheDocument()

    const socialLogoText = screen.getByTestId('social-logo-text')
    expect(socialLogoText).toHaveTextContent('NaConsulta')

    const socialSloganText = screen.getByTestId('social-slogan-text')
    expect(socialSloganText).toHaveTextContent(
      'O jeito fácil de agendar consultas médicas',
    )

    const socialSocialIcons = screen.getByTestId('social-social-icons')
    expect(socialSocialIcons).toBeInTheDocument()
  })
})
