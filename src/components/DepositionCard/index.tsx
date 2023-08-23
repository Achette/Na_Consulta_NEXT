import Image from 'next/image'
import { Quote } from 'lucide-react'
import { DepositionProps } from '../Depositions'
import {
  AvatarContainer,
  AvatarText,
  CardContainer,
  ImageContainer,
  TextContainer,
} from './styles'

export type CardProps = {
  deposition: Partial<Omit<DepositionProps, 'id'>>
}

export const DepositionCard = ({ deposition }: CardProps) => {
  return (
    <CardContainer data-testid="card-container">
      <ImageContainer>
        <Quote width={46} height={32} />
      </ImageContainer>
      <TextContainer>{deposition.deposition}</TextContainer>
      <AvatarContainer>
        <Image
          src={deposition.imgURL}
          alt="Avatar image"
          width={42}
          height={42}
        />
        <AvatarText>{deposition.name}</AvatarText>
      </AvatarContainer>
    </CardContainer>
  )
}
