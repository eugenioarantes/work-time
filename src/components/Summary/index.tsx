import { Clock, Container } from "./styles";
import { useTime } from "../../hooks/useTime";

import { addHours, addMinutes, differenceInMinutes, subHours, subMinutes } from 'date-fns';
import Card from "../Card";

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

  let finalHour = '00';
  let finalMinutes = '00';
  let overtimeDone = '00:00';

  const getHoursAndMinutes = (arrival: string, departure: string): QuantityHoursAndMinutes => {
    const [arrivalTime, arrivalMinute] = arrival.split(":");
    const [departureTime, departureMinute] = departure.split(":");

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

  const subtractLunchTime = (lunchTime: number, quantityHours: number, quantityMinutes: number): SubtractLunchTime => {
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

  const addExtraHour = (hoursSubtractedLunchTime: number, minutesSubtractedLunchTime: number): void => {
    let extraHours = 0;

    extraHours = addHours(new Date(2022, 8, 20, Number(hoursSubtractedLunchTime), Number(minutesSubtractedLunchTime)), Number(time?.extraHours)).getHours();

    const extraMinutes = addMinutes(new Date(2022, 8, 20, Number(extraHours), Number(minutesSubtractedLunchTime)), Number(time?.extraMinutes)).getMinutes();

    if (extraMinutes < minutesSubtractedLunchTime) {
      extraHours = addHours(new Date(2022, 8, 20, Number(extraHours), Number(extraMinutes)), 1).getHours();
    }

    finalHour = extraHours.toString();
    finalMinutes = extraMinutes.toString();

  };

  const countExtraHours = (): void => {
    const finalHourConvertedNumber = Number(finalHour);

    if (finalHourConvertedNumber < 8 || (finalHourConvertedNumber === 8 && Number(finalMinutes) === 0)) {
      return;
    }

    overtimeDone = `${(finalHourConvertedNumber - 8)}: ${finalMinutes}`;
    verifyHoursFormat('overtimeDone');
  };

  const verifyHoursFormat = (type: string): void => {
    if (type === 'workedHours') {
      if (Number(finalHour) < 10) {
        finalHour = `0${finalHour}`;
      }

      if (Number(finalMinutes) < 10) {
        finalMinutes = `0${finalMinutes}`;
      }
      return;
    }

    let [extraHours, extraMinutes] = overtimeDone.split(":");

    if (Number(extraHours) < 10) {
      extraHours = `0${extraHours}`;
    }

    if (Number(extraMinutes) < 10) {
      extraMinutes = `0${extraMinutes.trim()}`;
    }

    overtimeDone = `${extraHours}: ${extraMinutes}`;

  };


  if (time?.arrival && time.departure && time.lunch) {
    const { quantityHours, quantityMinutes } = getHoursAndMinutes(time.arrival, time.departure);

    const { hoursSubtractedLunchTime, minutesSubtractedLunchTime } = subtractLunchTime(Number(time.lunch), quantityHours, quantityMinutes);

    addExtraHour(hoursSubtractedLunchTime, minutesSubtractedLunchTime);

    countExtraHours();

    verifyHoursFormat('workedHours');
  }


  return (
    <>
      <Clock />
      <Container>
        <Card
          phrase={"Worked hours: "}
          finalHour={finalHour}
          finalMinutes={finalMinutes}
        />

        <Card
          phrase={"Extra hours: "}
          overtimeDone={overtimeDone}
        />
      </Container>
    </>
  );
}