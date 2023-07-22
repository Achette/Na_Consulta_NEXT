import styled, { css } from 'styled-components'

export const ContainerHeader = styled.header`
  width: 100%;
  height: 7.5rem;
  background: #3dccb7;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`

export const LogoHeaderContainer = styled.div`
  width: 20.625rem;
  height: 4.5rem;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const LogoText = styled.h1`
color: ${(props) => props.theme.white};
font-size: 40px;
font-style: normal;
font-weight: 600;
line-height: normal;
`
