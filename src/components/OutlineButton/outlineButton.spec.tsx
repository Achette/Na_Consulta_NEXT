import { render } from '@testing-library/react'
import { OutlineButton } from '.'

describe('<OutlineButton />', () => {
  it('should render correctly Outline Button', () => {
    const { getByText, getByTestId } = render(<OutlineButton />)

    expect(getByText('agendar consulta')).toBeInTheDocument()

    expect(getByTestId('outline-button')).toBeInTheDocument()
  })
})
