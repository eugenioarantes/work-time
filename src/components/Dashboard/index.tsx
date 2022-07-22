import { Summary } from "../Summary";
import { TimesTable } from "../TimesTable";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Summary/>
      <TimesTable/>
    </Container>
  );
}