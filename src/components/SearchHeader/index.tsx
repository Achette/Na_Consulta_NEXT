import Image from 'next/image'
import { Button } from '../Button'
import {
  HeaderSearchContainer,
  HeaderSearchParagraph,
  HeaderSearchTitle,
  HeadingContainer,
  ImageContainer,
  Input,
  InputSearchContainer,
} from './styles'

export const SearchHeader = () => {
  return (
    <HeaderSearchContainer>
      <>
        <HeadingContainer>
          <HeaderSearchTitle>Procure por um especialista</HeaderSearchTitle>
          <HeaderSearchParagraph>
            O jeito fácil de agendar consultas médicas
          </HeaderSearchParagraph>
        </HeadingContainer>

        <InputSearchContainer>
          <Input placeholder="Médico, Serviço, Especialidade" />
          <Input placeholder="Local ex. São Paulo" />
          <Button title="Pesquisar" size="small" />
        </InputSearchContainer>
      </>
      <ImageContainer>
        <Image
          src="/dotors.png"
          alt="Doctors image"
          width={500}
          height={360}
          data-testid="doctor-img"
        />
      </ImageContainer>
    </HeaderSearchContainer>
  )
}
