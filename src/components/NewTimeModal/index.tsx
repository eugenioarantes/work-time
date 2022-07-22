import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import { Container } from './styles';
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
  const [lunch, setLunch] = useState(0);
  const [extraHours, setExtraHours] = useState(0);
  const [extraMinutes, setExtraMinutes] = useState(0);


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
    setLunch(0);
    setExtraHours(0);
    setExtraMinutes(0);

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
     <h2>Cadastrar dia</h2>

     <input 
      placeholder='Horário de chegada'
      value={arrival}
      onChange={event => setArrival(event.target.value)}
     />

     <input 
      placeholder='Horário de saída'
      value={departure}
      onChange={event => setDeparture(event.target.value)}
     />

     <input 
      placeholder='Minutos de almoço'
      value={lunch}
      onChange={event => setLunch(Number(event.target.value))}
     />

     <input 
      placeholder='Horas Extra'
      value={extraHours}
      onChange={event => setExtraHours(Number(event.target.value))}
     />

     <input 
      placeholder='Minutos Extra'
      value={extraMinutes}
      onChange={event => setExtraMinutes(Number(event.target.value))}
     />
{/* 
    <TimeTypeContainer>
      <RadioBox
        type='button'
        onClick={()=> { setType('deposit'); }}
        isActive={type === 'deposit'}
        activeColor="green"
      >
        <img src={incomeImg} alt="Entrada" />
        <span>Entrada</span>
      </RadioBox>

      <RadioBox
        type='button'
        onClick={()=> { setType('withdraw'); }}
        isActive={type === 'withdraw'}
        activeColor="red"
      >
        <img src={outcomeImg} alt="Saída" />
        <span>Saída</span>
      </RadioBox>
    </TimeTypeContainer> */}

    <button type="submit">Calcular</button>

    </Container>
  </Modal>
  );
}