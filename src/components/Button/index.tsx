import { ButtonContainer } from './styles'

type ButtonProps = {
  title: string
  size: 'small' | 'medium' | 'large'
}

export const Button = ({ title, size }: ButtonProps) => {
  return (
    <ButtonContainer variant={size} data-testid="button-container">
      {title}
    </ButtonContainer>
  )
}
