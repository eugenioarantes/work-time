import clockImg from '../../assets/clock.svg';
import { Container } from './styles';

interface CardProps {
  phrase: string;
  finalHour?: string;
  finalMinutes?: string;
  overtimeDone?: string;
}

const Card: React.FC<CardProps> = ({
  phrase,
  finalHour = '',
  finalMinutes = '',
  overtimeDone = ''
}) => {

  return (
    <Container>
      <header>
        <p>{phrase}</p>
        <img src={clockImg} alt="Entries" />
      </header>

      <strong>
        {finalHour !== '' && `${finalHour}:${finalMinutes}`}
        {overtimeDone !== '' && overtimeDone}
      </strong>
    </Container>
  );
};

export default Card;