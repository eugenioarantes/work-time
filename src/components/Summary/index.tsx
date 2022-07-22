import { Card, Container } from "./styles";
import incomeImg from '../../assets/income.svg';
import { useTime } from "../../hooks/useTime";

import { addHours, addMinutes, differenceInMinutes, subHours, subMinutes } from 'date-fns';

interface QuantityHoursAndMinutes {
  quantityHours: number;
  quantityMinutes: number;
}

interface SubtractLunchTime {
  hoursSubtractedLunchTime: number;
  minutesSubtractedLunchTime: number;
}

const SIXTY_MINUTES = 60;
const ONE_HOUR = 1;

export function Summary() {
  const { time } = useTime();

  let finalHour = 0;
  let finalMinutes = 0;

  const getHoursAndMinutes = ( chegada: string, saida: string  ): QuantityHoursAndMinutes => {
    const [arrivalTime, arrivalMinute] = chegada.split(":");
    const [departureTime, departureMinute] = saida.split(":");

   const timeDifferenceInMinutes = differenceInMinutes(
      new Date(2022, 8, 20, Number(departureTime), Number(departureMinute), 0),
      new Date(2022, 8, 20, Number(arrivalTime), Number(arrivalMinute), 0),
    );

    const quantityHours = Math.floor(timeDifferenceInMinutes / 60);

    const quantityMinutes = timeDifferenceInMinutes - (quantityHours * 60);

    return {
      quantityHours,
      quantityMinutes,
    }
  };

  const subtractLunchTime = ( lunchTime: number ,quantityHours: number, quantityMinutes: number ): SubtractLunchTime => {
    let subtractedLunchTime = new Date();

    if (lunchTime === SIXTY_MINUTES) {
      subtractedLunchTime = subHours(new Date(2022, 8, 20, Number(quantityHours), Number(quantityMinutes)), ONE_HOUR);
    }

    else if (lunchTime < SIXTY_MINUTES) {
      subtractedLunchTime = subMinutes(new Date(2022, 8, 20, Number(quantityHours), Number(quantityMinutes)), lunchTime);
    }

    const hoursSubtractedLunchTime = Number(subtractedLunchTime.getHours());
    const minutesSubtractedLunchTime = Number(subtractedLunchTime.getMinutes());

    return {
      hoursSubtractedLunchTime,
      minutesSubtractedLunchTime,
    }
  };

  const addExtraHour = ( hoursSubtractedLunchTime: number, minutesSubtractedLunchTime: number ): void => {
    let extraHours = 0;  

    extraHours = addHours(new Date(2022, 8, 20, Number(hoursSubtractedLunchTime), Number(minutesSubtractedLunchTime)), time?.extraHours).getHours();
  
    const extraMinutes = addMinutes(new Date(2022, 8, 20, Number(extraHours), Number(minutesSubtractedLunchTime)), time?.extraMinutes).getMinutes();

    if ( extraMinutes < minutesSubtractedLunchTime) {
      extraHours = addHours(new Date(2022, 8, 20, Number(extraHours), Number(extraMinutes)), 1).getHours();
    }

    finalHour = extraHours;
    finalMinutes = extraMinutes;

  };


  if (time?.arrival && time.departure && time.lunch) {
    const {quantityHours, quantityMinutes} = getHoursAndMinutes(time.arrival, time.departure);

    const {hoursSubtractedLunchTime, minutesSubtractedLunchTime} = subtractLunchTime( time.lunch ,quantityHours, quantityMinutes );

    addExtraHour(hoursSubtractedLunchTime, minutesSubtractedLunchTime);
  }


  return (
    <Container>
      <Card>
        <header>
          <p>Result: </p>
          <img src={incomeImg} alt="Entries" />
        </header>

        <strong>
          {finalHour}: {finalMinutes}
        </strong>
      </Card>
    </Container>
  );
}