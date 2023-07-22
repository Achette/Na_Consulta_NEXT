import { Logo } from "../Logo";
import { ContainerHeader, LogoHeaderContainer, LogoText } from "./styles";

export const Header = () => {
  return (
    <ContainerHeader>
      <LogoHeaderContainer>
        <Logo />
        <LogoText>NaConsulta</LogoText>
      </LogoHeaderContainer>
    </ContainerHeader>
  );
};
