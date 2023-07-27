import styled from 'styled-components'

export const AboutContainer = styled.section`
  width: 100%;
  background: ${(props) => props.theme['green-100']};
  padding: 10rem 10rem;

  display: flex;
  justify-content: center;
  align-items: center;
  align-items: flex-start;
  gap: 5rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding: 2.5rem;
  }

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    padding: 2rem;
  }
`
// solução para deixar o componente Image do Next dentro de uma div responsiva em todos os tipos de telas
export const ImageContainer = styled.div`
  width: 100%;
  position: unset;

  img {
    width: 100%;
    object-fit: contain;
    position: relative !important;
    height: unset !important;

    @media (min-width: 768px) {
      min-width: 30rem;
    }
  }
`

export const AboutContent = styled.div`
  width: 35.8rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    color: ${(props) => props.theme['green-300']};
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
    letter-spacing: 0.05rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`
