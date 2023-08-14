import styled from 'styled-components'

export const DepositionsContainer = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 7.75rem 0 7.75rem 8.5rem;
  overflow-x: hidden;
`

export const HeadingContainer = styled.div`
  width: 30rem;
  height: 10rem;
`

export const Header = styled.h2`
  color: #00c3a5;
  font-size: 1rem;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  text-align: center;
`
export const Title = styled.h3`
  color: ${(props) => props.theme['green-700']};
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  line-height: normal;
`

export const CardsContainer = styled.div`
  max-width: 95vw;
  height: auto;
  display: flex;
  align-items: center;
`
export const CarrosselSlider = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 2rem;
  flex-direction: row;
  overflow-x: hidden;
  scroll-behavior: smooth;
`
