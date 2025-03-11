// react
import { FC, useEffect } from 'react';
//store
import { usePokemonStore } from '../../model/store/pokemonStore';
//ui
import { PokemonItem } from '../PokemonItem/PokemonItem';
import { Loader } from '@/shared/ui/Loader/Loader';

interface PokemonListItemProps {}

export const PokemonListItem: FC<PokemonListItemProps> = ({}) => {
  const { pokemons, loading, currentPage, searchQuery, fetchPokemons } =
    usePokemonStore();

  useEffect(() => {
    fetchPokemons(currentPage, searchQuery);
  }, [fetchPokemons, currentPage]);

  if (loading) return <Loader />;

  return (
    <div className='flex flex-wrap justify-center gap-10'>
      {pokemons?.results.map(({ name, sprites, id, height, weight, types }) => {
        return (
          <PokemonItem
            name={name}
            key={id}
            sprites={sprites}
            height={height}
            weight={weight}
            types={types}
            id={id}
          />
        );
      })}
    </div>
  );
};
