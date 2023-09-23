import styled from 'styled-components'

type InputLabelChildren = {
  children: string
}

export const FormContainer = styled.div`
  min-width: 21rem;
  height: 60vh;
  padding: 1.5rem;
  border-radius: 0.625rem;
  background: ${(props) => props.theme.light};
`
export const FormHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) and (max-width: 992px) {
    svg {
      display: none;
    }
  }
`
export const FormTitle = styled.h3`
  color: ${(props) => props.theme['green-700']};
  font-size: 1.25rem;
  font-weight: 700;

  @media (max-width: 768px) and (max-width: 992px) {
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
  }
`
// seção de formulário com inputs

export const FormBox = styled.form`
  width: 100%;
  height: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const InputLabel = styled.label<InputLabelChildren>`
  color: ${(props) => props.theme['green-700']};
  font-size: 0.7rem;
  font-weight: 400;
  line-height: 150%;
`
// seção name
export const InputNameBox = styled.div`
  width: 100%;
`
export const InputName = styled.input`
  width: 100%;
  padding: 0.5rem;
  background: #dce9e2;
  border: 0.605px solid ${(props) => props.theme['green-500']};
  border-radius: 0.5rem;

  &::placeholder {
    color: rgba(73, 80, 87, 0.5);
    font-size: 0.7rem;
    font-weight: 400;
    line-height: 150%;
  }
`
// seção email e whatsapp
export const InputContactContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1rem;
`
export const InputContactBox = styled.div`
  width: 100%;
`
export const InputEmail = styled.input`
  width: 100%;
  padding: 0.5rem;
  background: #dce9e2;
  border: 0.605px solid ${(props) => props.theme['green-500']};
  border-radius: 0.5rem;

  &::placeholder {
    color: rgba(73, 80, 87, 0.5);
    font-size: 0.7rem;
    font-weight: 400;
    line-height: 150%;
  }
`
export const InputWhatsApp = styled.input`
  width: 100%;
  padding: 0.5rem;
  background: #dce9e2;
  border: 0.605px solid ${(props) => props.theme['green-500']};
  border-radius: 0.5rem;

  &::placeholder {
    color: rgba(73, 80, 87, 0.5);
    font-size: 0.7rem;
    font-weight: 400;
    line-height: 150%;
  }
`
// seção textarea
export const TextAreaBox = styled.div`
  width: 100%;
`
export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  background: #dce9e2;
  border: 0.605px solid ${(props) => props.theme['green-500']};
  border-radius: 0.5rem;

  &::placeholder {
    color: rgba(73, 80, 87, 0.5);
    font-size: 0.7rem;
    font-weight: 400;
    line-height: 150%;
  }
`
export const Button = styled.button`
  width: 4.75rem;
  height: 2rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;

  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['green-300']};
`
