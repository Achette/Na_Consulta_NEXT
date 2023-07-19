import styled from 'styled-components'

type ColorGridProps = {
  variant: '#fff' | '#000' | '#495057' | '#3DCCB7' | '#008F79' | '#004238'
}

export const ColorsGridContainer = styled.div<ColorGridProps>`
  padding: 2rem;
  background: ${(props) => props.variant};
`

export const ColorsGridContent = styled.div`
  display: flex;
  justify-content: space-between;

  strong,
  span {
    color: #fff;
  }
`
