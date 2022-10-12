import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewTimeModal: () => void;
}

export function Header({ onOpenNewTimeModal }: HeaderProps) {
  return (
    <Container>
      <h1>Work time</h1>
      <Content>
        <div />

        <button type="button" onClick={onOpenNewTimeModal}>
          Calcular
        </button>

      </Content>
    </Container>
  );
}