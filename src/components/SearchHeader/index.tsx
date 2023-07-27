import { Button } from '../Button'
import {
  HeaderSearchContainer,
  HeaderSearchParagraph,
  HeaderSearchTitle,
  HeadingContainer,
  Input,
  InputSearchContainer,
} from './styles'

export const SearchHeader = () => {
  return (
    <HeaderSearchContainer>
      <HeadingContainer>
        <HeaderSearchTitle>Procure por um especialista</HeaderSearchTitle>
        <HeaderSearchParagraph>
          O jeito fácil de agendar consultas médicas
        </HeaderSearchParagraph>
      </HeadingContainer>

      <InputSearchContainer>
        <Input placeholder="Médico, Serviço, Especialidade" />
        <Input placeholder="Local ex. São Paulo" />
        <Button title="Pesquisar" size="small" />
      </InputSearchContainer>
    </HeaderSearchContainer>
  )
}
