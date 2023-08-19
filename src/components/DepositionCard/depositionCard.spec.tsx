import { render, screen } from '@testing-library/react'
import { DepositionCard } from '.'

describe('<DepositionCard />', () => {
  it('should render DepositionCard correcty', () => {
    const mock = {
      name: 'João Silva',
      imgURL: '/assets/1.jpg',
      deposition: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    }

    render(
      <DepositionCard
        name={mock.name}
        imgURL={mock.imgURL}
        deposition={mock.deposition}
      />,
    )

    const name = screen.getByText('João Silva')
    const deposition = screen.getByText(
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    )

    expect(name).toBeInTheDocument()
    expect(deposition).toBeInTheDocument()
  })
})
