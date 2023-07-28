import { ReactNode } from 'react'
import { CardStyle, CardHeader, CardTitle, CardText } from './styles'

type CardProps = {
  icon: ReactNode
  title: string
  paragraph: string
}

export const Card = ({ icon, title, paragraph }: CardProps) => {
  return (
    <CardStyle data-testid="card">
      <CardHeader>
        {icon}
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardText>{paragraph}</CardText>
    </CardStyle>
  )
}
