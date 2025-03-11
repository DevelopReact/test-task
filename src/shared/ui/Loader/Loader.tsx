// react
import { FC } from 'react';
//assets
import pokemonBall from '../../libs/assets/loader/pokemonBall.webp';

interface LoaderProps {}

export const Loader: FC<LoaderProps> = ({}) => {
  return (
    <div className='w-50 flex justify-center items-center'>
      <img className='animate-spin' src={pokemonBall} alt='Loading...' />
    </div>
  );
};
