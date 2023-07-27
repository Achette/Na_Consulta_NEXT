import Image from 'next/image'
import { AboutContainer, AboutContent, ImageContainer } from './styles'
import { about } from 'src/mock/about/textAbout'

export const AboutSection = () => {
  return (
    <AboutContainer data-testid="about-container">
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
        <span>Sobre Nós</span>
        <h2>Quem somos e porque existimos</h2>
        <p>{about}</p>
      </AboutContent>
    </AboutContainer>
  )
}
