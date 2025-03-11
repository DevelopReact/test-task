export type PokemonFullData = {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
};

export type PokemonState = {
  count: number;
  next: string;
  previous: string;
  results: PokemonFullData[];
};

export type PokemonStoreSchema = {
  pokemons: PokemonState | null;
  loading: boolean;
  currentPage: number;
  totalPages: number;
  searchQuery: string;
  fetchPokemons: (page: number, searchQuery: string) => Promise<void>;
  setPage: (page: number) => void;
  setSearchQuery: (query: string) => void;
};
