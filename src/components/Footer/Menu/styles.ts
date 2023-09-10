import styled from 'styled-components'

type MenuChildren = {
  children: string
}

export const MenuContainer = styled.div`
  max-width: 18rem;
  display: flex;
  gap: 3.5rem;
`
export const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const MenuTitle = styled.strong<MenuChildren>`
  color: ${(props) => props.theme['green-300']};
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.05rem;
`
export const MenuLink = styled.a<MenuChildren>`
  color: ${(props) => props.theme['green-700']};
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: -0.01rem;
  text-decoration: none;
`
