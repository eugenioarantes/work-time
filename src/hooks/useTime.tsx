import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface Time {
  id: number;
  arrival: string,
  departure: string,
  lunch: string,
  extraHours: string,
  extraMinutes: string,
  createdAt: string;
}

interface TimeProviderProps {
  children: ReactNode;
}

interface TimeContextData {
  time: Time;
  createTime: (time: TimeInput) => Promise<void>;
}

type TimeInput = Omit<Time, 'id' | 'createdAt'>;

const TimeContext = createContext<TimeContextData>({} as TimeContextData);

export function TimeProvider({children}: TimeProviderProps) {
  const [time, setTime] = useState<Time>();
  
  useEffect(() => {
    api.get('/time')
      .then(response => setTime(response.data.time))
  }, []);

  async function createTime(timeInput: TimeInput) {
   const response = await api.post('/time', {
      ...timeInput,
      createdAt: new Date(),
   });
   const { time } = response.data;

   setTime( time );
  }

  return (
    <TimeContext.Provider value={{ time, createTime } as TimeContextData}>
      {children}
    </TimeContext.Provider>
  )
}

export function useTime() {
  const context = useContext(TimeContext);

  return context;
}