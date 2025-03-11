// react
import { FC, useEffect } from 'react';
import { createPortal } from 'react-dom';
//store
import { useTrainerStore } from '@/entities/trainer/model/store/trainerStore';
//ui
import { TrainerForm } from '@/entities/trainer/ui/TrainerForm/TrainerForm';
import { Overlay } from '../Overlay/Overlay';

interface ModalProps {}

const modalElement = document.getElementById('modal');

export const Modal: FC<ModalProps> = ({}) => {
  const { isSuccess, setModalState } = useTrainerStore();

  useEffect(() => {
    const trainerData = localStorage.getItem('trainerData');
    if (trainerData) {
      setModalState(false);
    }
  }, []);

  if (!isSuccess || !modalElement) {
    return null;
  }

  return createPortal(
    <>
      <Overlay />
      <TrainerForm />
    </>,
    modalElement
  );
};
