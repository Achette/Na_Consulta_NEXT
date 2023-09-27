import styled from 'styled-components'

export const SocialContainer = styled.section`
  max-width: 18.25rem;
  padding: 0;
`
export const SocialHeader = styled.header`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  svg {
    width: 2.5rem;
    height: 2.5rem;
    flex-shrink: 0;
  }
`
export const SocialLogoText = styled.h4`
  color: ${(props) => props.theme['green-700']};
  font-size: 1rem;
  font-weight: 600;

  @media (min-width: 992px) {
    font-size: 2.5rem;
  }
`
export const SocialSloganText = styled.p`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.875rem;
  letter-spacing: -0.01rem;
  text-align: center;

  margin-top: 0.5rem;
`
export const SocailIcons = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  margin-top: 2rem;

  svg {
    color: ${(props) => props.theme['green-300']};
  }
`
