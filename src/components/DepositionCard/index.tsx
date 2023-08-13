import Image from 'next/image'
import {
  AvatarContainer,
  AvatarText,
  CardContainer,
  ImageContainer,
  TextContainer,
} from './styles'

export const DepositionCard = () => {
  return (
    <CardContainer>
      <ImageContainer>
        <Image
          src={'/assets/Aspas.svg'}
          alt="Aspas icon"
          width={45}
          height={31}
        />
      </ImageContainer>
      <TextContainer>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim. Amet minim mollit non deserunt
        ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
        enim.
      </TextContainer>
      <AvatarContainer>
        <Image
          src={'/assets/avatar.png'}
          alt="Avatar image"
          width={42}
          height={42}
        />
        <AvatarText>Wanessa Souza</AvatarText>
      </AvatarContainer>
    </CardContainer>
  )
}
