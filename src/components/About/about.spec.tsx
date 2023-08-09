import React from 'react'
import { render, screen } from '@testing-library/react'

import { SectionAbout } from '.'

describe('SectionAbout', () => {
  it('renders the about container', () => {
    render(<SectionAbout />)

    const aboutContainer = screen.getByTestId('about-container')

    expect(aboutContainer).toBeInTheDocument()
  })

  it('renders the image', () => {
    render(<SectionAbout />)

    const image = screen.getByTestId('image')

    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('alt', 'Doutor feliz com pacientes')
  })

  it('renders the about content', () => {
    render(<SectionAbout />)

    const aboutContent = screen.getByTestId('about-content')
    const textAboutSpan = screen.getByTestId('text-about-span')
    const titleAbout = screen.getByTestId('title-about')
    const textAbout = screen.getByTestId('text-about')

    expect(aboutContent).toBeInTheDocument()
    expect(textAboutSpan).toBeInTheDocument()
    expect(titleAbout).toBeInTheDocument()
    expect(textAbout).toBeInTheDocument()
  })

  it('renders the heading inside the about content', () => {
    render(<SectionAbout />)

    const heading = screen.getByRole('heading', {
      level: 2,
      name: /Quem somos e porque existimos/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
