import Image from 'next/image'
import {
  AvatarContainer,
  AvatarText,
  CardContainer,
  ImageContainer,
  TextContainer,
} from './styles'

export type CardProps = {
  id?: number
  name: string
  imgURL: string
  deposition: string
}

export const DepositionCard = ({ name, imgURL, deposition }: CardProps) => {
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
      <TextContainer>{deposition}</TextContainer>
      <AvatarContainer>
        <Image src={imgURL} alt="Avatar image" width={42} height={42} />
        <AvatarText>{name}</AvatarText>
      </AvatarContainer>
    </CardContainer>
  )
}
