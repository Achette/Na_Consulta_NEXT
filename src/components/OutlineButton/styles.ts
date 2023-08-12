import styled from 'styled-components'

export const ButtonContainer = styled.button`
  border-radius: 2.5rem;
  border: 1px solid ${(props) => props.theme.white};
  color: ${(props) => props.theme.white};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  background-color: transparent;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }

  @media (min-width: 992px) {
    font-size: 0.7rem;
    padding: 0.5rem;
  }

  @media (min-width: 1200px) {
    font-size: 0.875rem;
    padding: 0.625rem 1.5rem;
  }
`
