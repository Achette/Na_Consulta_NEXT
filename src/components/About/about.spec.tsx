import React from 'react'
import { render, screen } from '@testing-library/react'

import { AboutSection } from '.'

describe('AboutSection', () => {
  it('renders the about container', () => {
    render(<AboutSection />)

    const aboutContainer = screen.getByTestId('about-container')

    expect(aboutContainer).toBeInTheDocument()
  })

  it('renders the image', () => {
    render(<AboutSection />)

    const image = screen.getByTestId('image')

    expect(image).toBeInTheDocument()
  })

  it('renders the about content', () => {
    render(<AboutSection />)

    const aboutContent = screen.getByTestId('about-content')

    expect(aboutContent).toBeInTheDocument()
  })

  it('renders the heading inside the about content', () => {
    render(<AboutSection />)

    const heading = screen.getByRole('heading', {
      level: 2,
      name: /Quem somos e porque existimos/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
