import React from 'react'
import { DepositionCard } from '../DepositionCard'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { depositionsMock } from '@/mock/depositions/mock'
import {
  ArrowButton,
  ArrowContainer,
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
          {depositionsMock &&
            depositionsMock.map((item) => (
              <DepositionCard
                key={item.id}
                name={item.name}
                imgURL={item.imgURL}
                deposition={item.deposition}
              />
            ))}
        </CarrosselSlider>
      </CardsContainer>
      <ArrowContainer>
        <ArrowButton onClick={(e) => handleLeft(e)}>
          <ChevronLeft />
        </ArrowButton>
        <ArrowButton onClick={(e) => handleRight(e)}>
          <ChevronRight />
        </ArrowButton>
      </ArrowContainer>
    </DepositionsContainer>
  )
}
