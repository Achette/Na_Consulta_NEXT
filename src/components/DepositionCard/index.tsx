import Image from 'next/image'
import {
  AvatarContainer,
  AvatarText,
  CardContainer,
  ImageContainer,
  TextContainer,
} from './styles'
import { DepositionProps } from '../Depositions'

export type CardProps = {
  deposition: Partial<Omit<DepositionProps, 'id'>>
}

export const DepositionCard = ({ deposition }: CardProps) => {
  return (
    <CardContainer data-testid="card-container">
      <ImageContainer>
        <Image
          src={'/assets/Aspas.svg'}
          alt="Aspas icon"
          width={45}
          height={31}
        />
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
