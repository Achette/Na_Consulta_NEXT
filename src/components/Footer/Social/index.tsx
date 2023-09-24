import { Logo } from '@/components/Footer/Logo'
import {
  SocialLogoText,
  SocialContainer,
  SocialHeader,
  SocialSloganText,
  SocailIcons,
} from './styles'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export const Social = () => {
  return (
    <SocialContainer data-testid="social-container">
      <SocialHeader data-testid="social-header">
        <Logo />
        <SocialLogoText data-testid="social-logo-text">
          NaConsulta
        </SocialLogoText>
      </SocialHeader>
      <SocialSloganText data-testid="social-slogan-text">
        O jeito fácil de agendar consultas médica
      </SocialSloganText>
      <SocailIcons data-testid="social-social-icons">
        <Facebook />
        <Instagram />
        <Twitter />
        <Linkedin />
      </SocailIcons>
    </SocialContainer>
  )
}
