import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  width: 34rem;
  height: 17rem;
  padding: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.25rem;
  border-radius: 0.25rem;
  background: #f7f9f9;
`
export const ImageContainer = styled.div`
  width: 2.75rem;
  height: 2rem;
`
export const TextContainer = styled.div`
  color: #495057;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`

export const AvatarContainer = styled.div`
  width: 16rem;
  height: 2.265rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const AvatarText = styled.p`
  color: ${(props) => props.theme['green-700']};
  font-family: Poppins;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem;
`
