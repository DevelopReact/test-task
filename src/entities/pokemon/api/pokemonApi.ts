//api
import { pokemonInstanceApi } from '@/shared/api/pokemonInstanceApi.ts';
//types
import { PokemonFullData, PokemonState } from '../model/types/pokemonTypes';

export const getPokemonList = async (
  limit: number,
  offset: number
): Promise<PokemonState> => {
  try {
    const response = await pokemonInstanceApi.get(
      `pokemon?limit=${limit}&offset=${offset}`
    );

    const pokemonResults = response.data.results;

    const pokemonDetails: PokemonFullData[] = await Promise.all(
      pokemonResults.map(async (pokemon: { url: string }) => {
        const pokemonResponse = await pokemonInstanceApi.get(pokemon.url);
        return pokemonResponse.data;
      })
    );

    return {
      ...response.data,
      results: pokemonDetails
    };
  } catch (error) {
    console.error('Failed to fetch Pokémon list', error);
    throw error;
  }
};
