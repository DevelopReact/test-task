// react
import { FC, useEffect } from 'react';
//store
import { useTrainerStore } from '@/entities/trainer/model/store/trainerStore';
//ui
import { Button } from '@/shared/ui/Button/Button';
//types
import { TrainerType } from '@/entities/trainer/model/types/trainerTypes';

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
  const {
    trainerData,
    setTrainerData,
    setModalState,
    trainerTeam,
    resetTrainerTeam,
    resetTrainerData,
    clearPersistedTrainerData
  } = useTrainerStore();

  useEffect(() => {
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
  }, [setTrainerData]);

  const resetTeamOnClick = () => {
    resetTrainerTeam();
  };

  const resetTrainerOnclick = () => {
    resetTrainerData();
    clearPersistedTrainerData();
  };

  return (
    <div className='w-full h-30 px-20 flex flex-col justify-around'>
      <div className='flex items-center gap-10'>
        <div>
          <Button type='reset' size='sm' onClick={resetTrainerOnclick}>
            Reset
          </Button>
          <span>Trainer:</span>
        </div>
        <span className='text-indigo-600'>
          {trainerData.firstName} {trainerData.sureName}
        </span>
      </div>
      <div className='flex items-center'>
        <Button type='reset' size='sm' onClick={resetTeamOnClick}>
          Reset
        </Button>
        <div>
          <span>Team:</span>
        </div>
        {trainerTeam?.map(({ sprites, id }) => {
          return (
            <div key={id}>
              <img src={sprites.front_default} alt='' />
            </div>
          );
        })}
      </div>
    </div>
  );
};
