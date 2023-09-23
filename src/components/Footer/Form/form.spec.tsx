import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'

import { Form } from '.'

describe('Form', () => {
  it('renders the Form component correctly', () => {
    const { getByText, getByPlaceholderText } = render(<Form />)

    expect(getByText('Entre em contato com a gente!')).toBeInTheDocument()
    expect(getByPlaceholderText('Digite seu nome')).toBeInTheDocument()
    expect(getByPlaceholderText('exemplo@dominio.com')).toBeInTheDocument()
    expect(getByPlaceholderText('(00) 0000-0000')).toBeInTheDocument()
    expect(getByText('Enviar')).toBeInTheDocument()
  })

  it('interacts with input fields', () => {
    render(<Form />)

    const nameInput = screen.getByPlaceholderText('Digite seu nome')
    const emailInput = screen.getByPlaceholderText('exemplo@dominio.com')
    const whatsappInput = screen.getByPlaceholderText('(00) 0000-0000')

    fireEvent.change(nameInput, { target: { value: 'João' } })
    fireEvent.change(emailInput, { target: { value: 'joao@example.com' } })
    fireEvent.change(whatsappInput, { target: { value: '(11) 1234-5678' } })

    expect(nameInput).toHaveValue('João')
    expect(emailInput).toHaveValue('joao@example.com')
    expect(whatsappInput).toHaveValue('(11) 1234-5678')
  })

  it('interact with the submit button', () => {
    render(<Form />)

    const submitButton = screen.getByText('Enviar')
    fireEvent.click(submitButton)
  })
})
