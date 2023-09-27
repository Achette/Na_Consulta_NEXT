import { Mail } from 'lucide-react'
import {
  Button,
  FormBox,
  FormContainer,
  FormHeader,
  FormTitle,
  InputContactBox,
  InputContactContainer,
  InputEmail,
  InputLabel,
  InputName,
  InputNameBox,
  InputWhatsApp,
  TextArea,
  TextAreaBox,
} from './styles'

export const Form = () => {
  return (
    <FormContainer data-testid="form-container">
      <FormHeader>
        <Mail />
        <FormTitle>Entre em contato com a gente!</FormTitle>
      </FormHeader>
      <FormBox>
        <InputNameBox>
          <InputLabel>Nome</InputLabel>
          <InputName placeholder="Digite seu nome" type="text" />
        </InputNameBox>
        <InputContactContainer>
          <InputContactBox>
            <InputLabel>Email</InputLabel>
            <InputEmail placeholder="exemplo@dominio.com" type="email" />
          </InputContactBox>
          <InputContactBox>
            <InputLabel> Seu WhatsApp</InputLabel>
            <InputWhatsApp placeholder="(00) 0000-0000" type="tel" />
          </InputContactBox>
        </InputContactContainer>
        <TextAreaBox>
          <InputLabel>Mensagem</InputLabel>
          <TextArea placeholder="Digite sua mensagem" />
        </TextAreaBox>
        <Button type="submit">Enviar</Button>
      </FormBox>
    </FormContainer>
  )
}
