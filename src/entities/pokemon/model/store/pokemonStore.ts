//zustand
import { create } from 'zustand';
//api
import { getPokemonList } from '../../api/pokemonApi';
//types
import { PokemonStoreSchema } from '../types/pokemonTypes';

export const usePokemonStore = create<PokemonStoreSchema>((set, get) => ({
  pokemons: null,
  loading: false,
  currentPage: 1,
  totalPages: 0,
  searchQuery: '',

  fetchPokemons: async (page = 1, searchQuery: string) => {
    set({ loading: true });

    const limit = 20;
    const offset = (page - 1) * limit;

    try {
      const data = await getPokemonList(limit, offset);

      const filteredPokemons = data.results.filter(
        (pokemon: { name: string }) =>
          pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      set({
        pokemons: { ...data, results: filteredPokemons },
        loading: false,
        currentPage: page,
        totalPages: Math.ceil(data.count / limit)
      });
    } catch (error) {
      console.error('Error fetching Pokémon list', error);
      set({ loading: false });
    }
  },

  setPage: (page) => {
    set({ currentPage: page });
    get().fetchPokemons(page, get().searchQuery);
  },

  setSearchQuery: (query: string) => {
    set({ searchQuery: query });
    get().fetchPokemons(1, get().searchQuery);
  }
}));
