import { PokemonFullData } from '@/entities/pokemon/model/types/pokemonTypes';

export type TrainerType = {
  firstName: string;
  sureName: string;
};

export type TrainerStoreSchema = {
  isSuccess: boolean;
  trainerData: TrainerType;
  trainerTeam: PokemonFullData[];
  setModalState: (isOpen: boolean) => void;
  setTrainerData: (trainer: TrainerType) => void;
  setTrainerTeam: (pokemon: PokemonFullData) => void;
  resetTrainerData: () => void;
  resetTrainerTeam: () => void;
  clearPersistedTrainerData: () => void;
};
