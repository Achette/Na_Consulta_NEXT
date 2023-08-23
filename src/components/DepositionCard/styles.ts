import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  min-width: 18rem;
  height: auto;
  padding: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.25rem;
  border-radius: 0.25rem;
  background: #f7f9f9;

  @media (min-width: 768px) {
    min-width: 24rem;
  }
`
export const ImageContainer = styled.div`
  width: 2.81rem;
  height: 2rem;
`
export const TextContainer = styled.div`
  color: #495057;
  font-size: 0.8rem;
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

  img {
    border-radius: 50%;
  }
`

export const AvatarText = styled.p`
  color: ${(props) => props.theme['green-700']};
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem;
`
