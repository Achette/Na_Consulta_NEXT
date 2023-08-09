import styled from 'styled-components'

export const CardStyle = styled.div`
  border-radius: 0.625rem;
  padding: 1.5rem;
  background: ${(props) => props.theme.light};
`
export const CardHeader = styled.header`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1rem;

  svg {
    color: ${(props) => props.theme['green-300']};
  }
`
export const CardTitle = styled.strong`
  color: ${(props) => props.theme['green-700']};
  font-size: 1.5rem;
`
export const CardText = styled.p`
  color: ${(props) => props.theme['green-700']};
  font-size: 1rem;
  display: block;
  margin-top: 1rem;
`
