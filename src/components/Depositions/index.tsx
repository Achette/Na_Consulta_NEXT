import React from 'react'
import { DepositionCard } from '../DepositionCard'
import {
  CardsContainer,
  CarrosselSlider,
  DepositionsContainer,
  Header,
  HeadingContainer,
  Title,
} from './styles'

export const DepositionSection = () => {
  const carroselSlider = React.useRef(null)

  const handleLeft = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    carroselSlider.current.scrollLeft -= carroselSlider.current.offsetWidth
  }

  const handleRight = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    carroselSlider.current.scrollLeft += carroselSlider.current.offsetWidth
  }

  return (
    <DepositionsContainer>
      <HeadingContainer>
        <Header>depoimentos</Header>
        <Title>Opniões de nossos clientes</Title>
      </HeadingContainer>
      <CardsContainer>
        <CarrosselSlider ref={carroselSlider}>
          <DepositionCard />
          <DepositionCard />
          <DepositionCard />
          <DepositionCard />
          <DepositionCard />
          <DepositionCard />
          <DepositionCard />
          <DepositionCard />
          <DepositionCard />
          <DepositionCard />
          <DepositionCard />
          <DepositionCard />
        </CarrosselSlider>
      </CardsContainer>
      <button onClick={(e) => handleLeft(e)}> Left </button>
      <button onClick={(e) => handleRight(e)}> Right </button>
    </DepositionsContainer>
  )
}
