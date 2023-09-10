import { Menu } from './Menu'
import { Social } from './Social'
import { SectionFooterBox, SectionFooterContainer } from './styles'

export const Footer = () => {
  return (
    <SectionFooterContainer id="talkUs">
      <SectionFooterBox>
        <Social />
        <Menu />
      </SectionFooterBox>
    </SectionFooterContainer>
  )
}
