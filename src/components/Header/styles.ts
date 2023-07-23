import styled from 'styled-components'

export const NavbarContainer = styled.nav<{ $extendNavbar?: boolean }>`
  width: 100%;
  height: ${(props) => (props.$extendNavbar ? '100vh' : '5rem')};
  background: #3dccb7;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    height: 9.125rem;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 1400px) {
    padding: 0 8.125rem;
  }
`

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 1rem;

  @media (min-width: 768px) {
    flex: 20%;
  }
`

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 1rem;

  @media (min-width: 768px) {
    flex: 80%;
  }
`

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`

export const NavbarLinkContainer = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 1200px) {
    width: 52.25rem;
    justify-content: space-between;
  }
`

export const NavbarLink = styled.a`
  color: white;
  font-size: 0.85rem;
  text-decoration: none;
  margin: 0.625rem;

  @media (max-width: 768px) {
    display: none;
  }

  @media (min-width: 992px) {
    font-size: 1rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.5rem;
  }
`

export const NavbarLinkExtended = styled.a`
  color: white;
  font-size: x-large;
  text-decoration: none;
  margin: 0.625rem;
`

export const OpenLinksButton = styled.button`
  width: auto;
  height: auto;
  background: none;
  border: none;
  color: white;
  font-size: 2.75rem;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`
export const LogoContainer = styled.div`
  width: 14rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 992px) {
    width: 20.625rem;
  }
`

export const LogoText = styled.h1`
  color: ${(props) => props.theme.white};
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (min-width: 992px) {
    font-size: 2.5rem;
  }
`
