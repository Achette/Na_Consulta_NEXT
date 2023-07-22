import { ButtonContainer } from './styles'

type ButtonProps = {
  title: string
  variant: 'small' | 'medium' | 'large'
}

export const Button = ({ title, variant }: ButtonProps) => {
  return <ButtonContainer variant={variant}>{title}</ButtonContainer>
}
