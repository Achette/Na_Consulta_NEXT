import { MenuBox, MenuContainer, MenuLink, MenuTitle } from './styles'

export const Menu = () => {
  return (
    <MenuContainer>
      <MenuBox>
        <MenuTitle>Links</MenuTitle>
        <MenuLink href="#appointment">Consultas</MenuLink>
        <MenuLink href="#service">Serviços</MenuLink>
        <MenuLink href="#about">Sobre Nós</MenuLink>
        <MenuLink href="#depositions">Depoimentos</MenuLink>
      </MenuBox>
      <MenuBox>
        <MenuTitle>Serviços</MenuTitle>
        <MenuLink>Agendamentos</MenuLink>
        <MenuLink>Lembretes</MenuLink>
      </MenuBox>
    </MenuContainer>
  )
}
