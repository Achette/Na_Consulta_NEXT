import Image from 'next/image'
import {
  ContainerAbout,
  ContentAbout,
  ImageContainer,
  TextAbout,
  TextAboutSpan,
  TitleAbout,
} from './styles'
import { about } from 'src/mock/about/textAbout'

export const SectionAbout = () => {
  return (
    <ContainerAbout data-testid="about-container" id="about">
      <ImageContainer>
        <Image
          src="/assets/doctor.png"
          alt="Doutor feliz com pacientes"
          layout="fill"
          priority
          data-testid="image"
        />
      </ImageContainer>
      <ContentAbout data-testid="about-content">
        <TextAboutSpan data-testid="text-about-span">Sobre Nós</TextAboutSpan>
        <TitleAbout data-testid="title-about">
          Quem somos e porque existimos
        </TitleAbout>
        <TextAbout data-testid="text-about">{about}</TextAbout>
      </ContentAbout>
    </ContainerAbout>
  )
}
