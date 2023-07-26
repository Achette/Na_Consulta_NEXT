import { ReactNode } from 'react'
import { CardStyle } from './styles'

type CardProps = {
  icon: ReactNode
  title: string
  paragraph: string
}

export const Card = ({ icon, title, paragraph }: CardProps) => {
  return (
    <CardStyle data-testid="card">
      <header>
        {icon}
        <strong>{title}</strong>
      </header>
      <p>{paragraph}</p>
    </CardStyle>
  )
}
