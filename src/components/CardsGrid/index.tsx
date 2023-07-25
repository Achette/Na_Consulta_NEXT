import {
  ServiceCardContainer,
  ServiceCardContent,
  ServiceCardHeader,
} from './styles'
import { Card } from '../Card'
import { CalendarCheck, Search, ThumbsUp } from 'lucide-react'

export const ServiceCardSection = () => {
  return (
    <ServiceCardContainer data-testid="service-card-container">
      <ServiceCardHeader data-testid="service-card-header">
        <span>Serviços</span>
        <h2>Nossas soluções para você!</h2>
      </ServiceCardHeader>
      <ServiceCardContent data-testid="service-card-content">
        <Card
          icon={<Search size={24} />}
          title="Encontre especialistas"
          paragraph="Busque por especialistas de saúde em sua região."
        />
        <Card
          icon={<CalendarCheck size={24} />}
          title="Marque Consultas"
          paragraph="Escolha o profissional, dia e horário que desejar."
        />
        <Card
          icon={<ThumbsUp size={24} />}
          title="Avalie o serviço"
          paragraph="Após a consulta você poderá deixar sua opinião sobre o serviço."
        />
      </ServiceCardContent>
      <ServiceCardContent>
        <Card
          icon={<Search size={24} />}
          title="Encontre especialistas"
          paragraph="Busque por especialistas de saúde em sua região."
        />
        <Card
          icon={<CalendarCheck size={24} />}
          title="Marque Consultas"
          paragraph="Escolha o profissional, dia e horário que desejar."
        />
        <Card
          icon={<ThumbsUp size={24} />}
          title="Avalie o serviço"
          paragraph="Após a consulta você poderá deixar sua opinião sobre o serviço."
        />
      </ServiceCardContent>
    </ServiceCardContainer>
  )
}
