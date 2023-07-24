import React from 'react'
import { Logo } from '../Logo'
import {
  LeftContainer,
  LogoContainer,
  LogoText,
  NavbarContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLink,
  NavbarLinkContainer,
  NavbarLinkExtended,
  OpenLinksButton,
  RightContainer,
} from './styles'
import { OutlineButton } from '../OutlineButton'

export const Header = () => {
  const [extendNavbar, setExtendNavbar] = React.useState<boolean>(false)

  return (
    <NavbarContainer
      $extendNavbar={extendNavbar}
      data-test-id="header-container"
    >
      <NavbarInnerContainer>
        <LeftContainer>
          <LogoContainer>
            <Logo data-testid="logo" />
            <LogoText>NaConsulta</LogoText>
          </LogoContainer>
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink href="#home">Inicio</NavbarLink>
            <NavbarLink href="#about">Sobre</NavbarLink>
            <NavbarLink href="#depositions">Depoimentos</NavbarLink>
            <NavbarLink href="#talkUs">Fale Conosco</NavbarLink>
            <OutlineButton />
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((prev) => !prev)
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended href="#home">Inicio</NavbarLinkExtended>
          <NavbarLinkExtended href="#about">Sobre</NavbarLinkExtended>
          <NavbarLinkExtended href="#depositions">
            Depoimentos
          </NavbarLinkExtended>
          <NavbarLinkExtended href="#talkUs">Fale Conosco</NavbarLinkExtended>
          <NavbarLinkExtended href="#">AGENDAR CONSULTA</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  )
}
