import styled from 'styled-components'

export const SectionFooterContainer = styled.footer`
  width: 100%;
  padding: 3.5rem 3.5rem;
  background: ${(props) => props.theme['green-100']};
`
export const SectionFooterBox = styled.div`
  /* width: 81rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`
