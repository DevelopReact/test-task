// react
import { FC, useEffect, useState } from 'react';
//store
import { usePokemonStore } from '../../model/store/pokemonStore';
//hooks
import { useDebounce } from '@/shared/libs/hooks/useDebounce';
//ui
import { Input } from '@/shared/ui/Input/Input';

interface PokemonSearchProps {}

export const PokemonSearch: FC<PokemonSearchProps> = ({}) => {
  const [onChangeInput, setOnChangeInput] = useState('');
  const { setSearchQuery } = usePokemonStore();

  const debouncedSearchQuery = useDebounce(onChangeInput, 1000);

  useEffect(() => {
    setSearchQuery(debouncedSearchQuery);
  }, [debouncedSearchQuery, setSearchQuery]);

  return (
    <div>
      <Input
        size='large'
        backgroundColor='white'
        type='text'
        borderColor='blackOpacity'
        placeholder='pokemon name...'
        onChange={(e) => setOnChangeInput(e.target.value)}
      />
    </div>
  );
};
