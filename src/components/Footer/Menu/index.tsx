import { MenuBox, MenuContainer, MenuLink, MenuTitle } from './styles'

export const Menu = () => {
  return (
    <MenuContainer data-testid="menu-container">
      <MenuBox data-testid="menu-link">
        <MenuTitle>Links</MenuTitle>
        <MenuLink href="#appointment">Consultas</MenuLink>
        <MenuLink href="#service">Serviços</MenuLink>
        <MenuLink href="#about">Sobre Nós</MenuLink>
        <MenuLink href="#depositions">Depoimentos</MenuLink>
      </MenuBox>
      <MenuBox data-testid="menu-title">
        <MenuTitle>Serviços</MenuTitle>
        <MenuLink>Agendamentos</MenuLink>
        <MenuLink>Lembretes</MenuLink>
      </MenuBox>
    </MenuContainer>
  )
}
