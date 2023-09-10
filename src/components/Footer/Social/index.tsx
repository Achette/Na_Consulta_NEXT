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
    <SocialContainer>
      <SocialHeader>
        <Logo />
        <SocialLogoText>NaConsulta</SocialLogoText>
      </SocialHeader>
      <SocialSloganText>
        O jeito fácil de agendar consultas médica
      </SocialSloganText>
      <SocailIcons>
        <Facebook />
        <Instagram />
        <Twitter />
        <Linkedin />
      </SocailIcons>
    </SocialContainer>
  )
}
