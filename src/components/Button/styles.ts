import styled, { css } from 'styled-components'

type ButtonContainerSize = {
  variant: 'small' | 'medium' | 'large'
}

export const ButtonContainer = styled.button<ButtonContainerSize>`
  height: 3.75rem;
  border: 0;
  border-radius: 0.5rem;

  background: ${(props) => props.theme['green-700']};
  color: ${(props) => props.theme.white};
  text-align: center;
  font-weight: 500;
  font-size: 1.25rem;
  cursor: pointer;

  ${(props) =>
    props.variant === 'small' &&
    css`
      width: 9.2rem;
    `}

  ${(props) =>
    props.variant === 'medium' &&
    css`
      width: 28.5rem;
    `}


  ${(props) =>
    props.variant === 'large' &&
    css`
      width: 37.5rem;
    `}
`
