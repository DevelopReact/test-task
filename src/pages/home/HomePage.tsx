// react
import { FC } from 'react';
//ui
import { PokemonListItem } from '@/entities/pokemon/ui/PokemonListItem/PokemonListItem';
import { PokemonSearch } from '@/entities/pokemon/ui/PocemonSearch/PokemonSearch';
import { PokemonPaginate } from '@/entities/pokemon/ui/PokemonPaginate/PokemonPaginate';
import { Modal } from '@/widgets/modal/ui/Modal/Modal';

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <div className=' text-black flex flex-col gap-10 justify-center items-center'>
      <Modal />
      <PokemonSearch />
      <PokemonPaginate />
      <PokemonListItem />
    </div>
  );
};
