import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewTimeModal: () => void;
}

export function Header({ onOpenNewTimeModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <div/>

        <button type="button" onClick={onOpenNewTimeModal}>
          Calcular
        </button>

      </Content>
    </Container>
  );
}