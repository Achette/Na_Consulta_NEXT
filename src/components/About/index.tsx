import Image from 'next/image'
import {
  AboutContainer,
  AboutContent,
  ImageContainer,
  TextAbout,
  TextAboutSpan,
  TitleAbout,
} from './styles'
import { about } from 'src/mock/about/textAbout'

export const AboutSection = () => {
  return (
    <AboutContainer data-testid="about-container" id="about">
      <ImageContainer>
        <Image
          src="/assets/doctor.png"
          alt="Doutor feliz com pacientes"
          layout="fill"
          priority
          data-testid="image"
        />
      </ImageContainer>
      <AboutContent data-testid="about-content">
        <TextAboutSpan>Sobre Nós</TextAboutSpan>
        <TitleAbout>Quem somos e porque existimos</TitleAbout>
        <TextAbout>{about}</TextAbout>
      </AboutContent>
    </AboutContainer>
  )
}
