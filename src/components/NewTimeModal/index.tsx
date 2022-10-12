import React, { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import { Container, Input, Label, Title } from './styles';
import closeImg from '../../assets/close.svg';
import { useTime } from '../../hooks/useTime';

interface NewTimeModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTimeModal({isOpen, onRequestClose}: NewTimeModalProps) {
  const { createTime } = useTime();

  const [arrival, setArrival] = useState('');
  const [departure, setDeparture] = useState('');
  const [lunch, setLunch] = useState('');
  const [extraHours, setExtraHours] = useState('');
  const [extraMinutes, setExtraMinutes] = useState('');


  async function handleCreateNewTime(event: FormEvent) {
    event.preventDefault();

    await createTime({
      arrival,
      departure,
      lunch,
      extraHours,
      extraMinutes,
    })

    setArrival('');
    setDeparture('');
    setLunch('');
    setExtraHours('');
    setExtraMinutes('');

    onRequestClose();
  }

  return (
    <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >

    <button
      type="button"
      onClick={onRequestClose}
      className="react-modal-close"
    >
      <img src={closeImg} alt="Fechar modal"/>
    </button>

    <Container onSubmit={handleCreateNewTime}>
     <Title>Calcular horário</Title>

     <Label htmlFor='horario-chegada'>Horário de chegada</Label>
     <Input
      mask="00:00"
      id='horario-chegada'
      placeholder='Digite o horário de chegada'
      value={arrival}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => setArrival(event.target.value)}
     />

     <Label htmlFor='horario-saida'>Horário de saída</Label>
     <Input 
      mask="00:00"
      id='horario-saida'
      placeholder='Digite o horário de saída'
      value={departure}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDeparture(event.target.value)}
     />

     <Label htmlFor='horario-almoco'>Horário de almoço (minutos)</Label>
     <Input 
      mask="00"
      id='horario-almoco'
      placeholder='Digite os minutos de almoço'
      value={lunch}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLunch((event.target.value))}
     />

     <Label htmlFor='hora-extra'>Horas extra</Label>
     <Input 
      mask="00"
      id='hora-extra'
      placeholder='Digite as horas extra'
      value={extraHours}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => setExtraHours((event.target.value))}
     />

     <Label htmlFor='minuto-extra'>Minutos extra</Label>
     <Input
      mask="00"
      id='minuto-extra'
      placeholder='Digite os minutos extra'
      value={extraMinutes}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => setExtraMinutes((event.target.value))}
     />
    <button type="submit">Calcular</button>

    </Container>
  </Modal>
  );
}