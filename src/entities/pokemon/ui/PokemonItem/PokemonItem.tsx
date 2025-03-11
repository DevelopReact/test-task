// react
import { useTrainerStore } from '@/entities/trainer/model/store/trainerStore';
import { FC } from 'react';

interface PokemonItemProps {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  height: number;
  weight: number;
  types: {
    type: {
      name: string;
    };
  }[];
}

export const PokemonItem: FC<PokemonItemProps> = ({
  id,
  name,
  sprites,
  height,
  weight,
  types
}) => {
  const { setTrainerTeam, trainerTeam } = useTrainerStore();

  const addPokemonToTeamOnclick = () => {
    setTrainerTeam({
      id,
      name,
      sprites,
      height,
      weight,
      types
    });
  };

  return (
    <div
      className='border-1 border-gray-600 rounded-lg bg-white w-50 h-50 flex flex-col justify-center items-center hover:border-indigo-600 hover:border-2 hover: cursor-pointer'
      onClick={addPokemonToTeamOnclick}
    >
      <p>
        name: <span className='text-indigo-600'>{name}</span>
      </p>
      <p>
        weight: <span className='text-indigo-600'>{weight}</span>
      </p>
      <p>
        height: <span className='text-indigo-600'>{height}</span>
      </p>
      <p>
        types:{' '}
        <span className='text-indigo-600'>
          {types.map(({ type }) => type.name).join(', ')}
        </span>
      </p>
      <img className='w-25' src={`${sprites.front_default}`} alt='sprites' />
    </div>
  );
};
