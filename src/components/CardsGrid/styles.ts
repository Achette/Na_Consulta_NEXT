import styled from 'styled-components'

export const ServiceCardContainer = styled.section`
  width: 100%;
  padding: 7.75rem 5rem;
  background: ${(props) => props.theme.white};

  display: inline-flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 5rem 2.5rem;
  }

  @media (max-width: 992px) {
    padding: 5rem 2rem;
  }
`

export const ServiceCardHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`
export const ServiceCardSpan = styled.span`
  color: ${(props) => props.theme['green-300']};
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.05rem;
`

export const ServiceCardTitle = styled.h2`
  color: ${(props) => props.theme['green-700']};
  font-size: 2rem;
  font-weight: 700;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 1.5rem;
  }
`

export const ServiceCardContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: auto;
  }
`
