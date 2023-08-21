import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { depositionsMock } from '@/mock/depositions/mock'
import { CardProps, DepositionCard } from '../DepositionCard'
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

export type DepositionProps = {
  id: number
  name: string
  imgURL: string
  deposition: string
}

export const DepositionSection = () => {
  const carroselSlider = React.useRef(null)
  const [depositions, setDepositions] = React.useState<DepositionProps[]>()

  React.useEffect(() => {
    setDepositions(depositionsMock ?? [])
  }, [])

  const handleLeft = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    carroselSlider.current.scrollLeft -= carroselSlider.current.offsetWidth
  }

  const handleRight = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    carroselSlider.current.scrollLeft += carroselSlider.current.offsetWidth
  }

  return (
    <DepositionsContainer data-testid="depositions-container">
      <HeadingContainer>
        <Header>depoimentos</Header>
        <Title>Opniões de nossos clientes</Title>
      </HeadingContainer>
      <CardsContainer>
        <CarrosselSlider ref={carroselSlider} data-testid="carrossel-container">
          {depositions &&
            depositions.map((item) => (
              <DepositionCard
                data-testid="carrossel-cards"
                key={item.id}
                deposition={item}
              />
            ))}
        </CarrosselSlider>
      </CardsContainer>
      <ArrowContainer data-testid="carrossel-controller">
        <ArrowButton onClick={(e) => handleLeft(e)} data-testid="left-arrow">
          <ChevronLeft />
        </ArrowButton>
        <ArrowButton onClick={(e) => handleRight(e)} data-testid="right-arrow">
          <ChevronRight />
        </ArrowButton>
      </ArrowContainer>
    </DepositionsContainer>
  )
}
