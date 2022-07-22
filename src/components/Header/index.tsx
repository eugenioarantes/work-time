import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewTimeModal: () => void;
}

export function Header({ onOpenNewTimeModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        {/* <img src={logoImg} alt="dt money" /> */}
        <div/>

        <button type="button" onClick={onOpenNewTimeModal}>
          Calcular
        </button>

      </Content>
    </Container>
  );
}