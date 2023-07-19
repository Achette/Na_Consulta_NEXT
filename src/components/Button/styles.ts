import styled from 'styled-components'

export const ButtonContainer = styled.button`
  height: 3.75rem;
  width: 9.2rem;
  border: 0;
  border-radius: 0.5rem;

  background: ${(props) => props.theme['green-700']};
  color: ${(props) => props.theme.white};
  text-align: center;
  font-weight: 500;
  font-size: 1.25rem;
  cursor: pointer;
`
