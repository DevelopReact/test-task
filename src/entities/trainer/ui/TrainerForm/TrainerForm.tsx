// react
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
//store
import { useTrainerStore } from '../../model/store/trainerStore';
//ui
import { Input } from '@/shared/ui/Input/Input';
import { Button } from '@/shared/ui/Button/Button';
//validationSchemas
import { trainerFormSchema } from '../../libs/validationSchemas/trainerformSchema';
//types
import { TrainerType } from '../../model/types/trainerTypes';

interface TrainerFormProps {}

export const TrainerForm: FC<TrainerFormProps> = ({}) => {
  const { setModalState, setTrainerData } = useTrainerStore();

  const {
    formState: { isValid, errors },
    register,
    handleSubmit,
    reset
  } = useForm<TrainerType>({
    mode: 'onChange',
    resolver: yupResolver(trainerFormSchema),
    defaultValues: {
      firstName: '',
      sureName: ''
    }
  });

  const onSubmitFormClick = (data: TrainerType) => {
    localStorage.setItem('trainerData', JSON.stringify(data));

    const trainerLocalData = localStorage.getItem('trainerData');

    if (trainerLocalData) {
      try {
        const parsedData: TrainerType = JSON.parse(trainerLocalData);
        setTrainerData(parsedData);

        setModalState(false);
      } catch (error) {
        console.error('Error parsing trainerData:', error);
      }
    }

    reset();
  };

  return (
    <div className='absolute z-20  px-20 py-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-indigo-600 border-2 bg-gray-200'>
      <form
        className='flex flex-col gap-10 items-center'
        onSubmit={handleSubmit(onSubmitFormClick)}
      >
        <Input
          label='First name'
          type='text'
          placeholder='first name'
          size='medium'
          backgroundColor='white'
          register={register('firstName')}
          error={errors.firstName}
        />
        <Input
          label='Sure name'
          type='text'
          placeholder='sure name'
          size='medium'
          backgroundColor='white'
          register={register('sureName')}
          error={errors.sureName}
        />
        <Button size='base' type='submit' disabled={!isValid}>
          Sign In
        </Button>
      </form>
    </div>
  );
};
