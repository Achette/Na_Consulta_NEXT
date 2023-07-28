import styled from 'styled-components'

export const HeaderSearchContainer = styled.div`
  width: 100%;
  height: 30rem;
  background-color: ${(props) => props.theme['green-300']};
  margin-top: 5rem;
  padding: 5rem 0.25rem;
  border: 1px solid tomato;
  color: ${(props) => props.theme.white};

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 1400px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 1400px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
export const HeadingContainer = styled.div`
  width: 80%;
  text-align: start;
  border: 1px solid purple;

  @media (min-width: 768px) {
    margin-top: 3rem;
  }

  @media (min-width: 992px) {
    width: 60rem;
    margin-top: 5rem;
  }

  @media (min-width: 1400px) {
    margin-left: -20rem;
  }
`

export const HeaderSearchTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: normal;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`

export const HeaderSearchParagraph = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: normal;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`

export const InputSearchContainer = styled.div`
  border: 1px solid gold;
  width: 80%;
  border-radius: 0.5rem;
  background: #47c4ab;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  margin-top: 2rem;

  @media (min-width: 992px) {
    width: min-content;
    flex-direction: row;
  }

  @media (min-width: 1400px) {
    margin-left: -20rem;
    justify-content: center;
  }
`

export const Input = styled.input`
  width: 80%;
  height: 3.75rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.white};
  border: none;
  padding-left: 1rem;

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
    font-size: 0.875rem;
    font-weight: 500;
    line-height: normal;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    width: 23.625rem;
  }
`

export const ImageContainer = styled.div`
  width: min-content;
  border: 1px solid orange;
  position: relative;
  margin-top: -25rem;
  z-index: 0;

  img {
    position: relative;
    z-index: -1;
  }

  @media (max-width: 1400px) {
    display: none;
  }
`
