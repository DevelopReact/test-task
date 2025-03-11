import { create } from 'zustand';
import { persist } from 'zustand/middleware';
//types
import { TrainerStoreSchema, TrainerType } from '../types/trainerTypes';
import { PokemonFullData } from '@/entities/pokemon/model/types/pokemonTypes';

export const useTrainerStore = create<TrainerStoreSchema>()(
  persist(
    (set) => ({
      isSuccess: true,
      trainerData: {
        firstName: '',
        sureName: ''
      },
      trainerTeam: [],

      setModalState: (isOpen: boolean) => {
        set({ isSuccess: isOpen });
      },

      setTrainerData: (trainer: TrainerType) => {
        set({ trainerData: trainer, isSuccess: true });
      },

      setTrainerTeam: (pokemon: PokemonFullData) => {
        set((state) => {
          if (state.trainerTeam.length >= 4) return state;
          return {
            trainerTeam: [...state.trainerTeam, pokemon]
          };
        });
      },

      resetTrainerData: () => {
        localStorage.removeItem('trainerData');
        set({ trainerData: { firstName: '', sureName: '' } });
      },

      resetTrainerTeam: () => {
        set({ trainerTeam: [] });
      },

      clearPersistedTrainerData: () => {
        localStorage.removeItem('trainer-storage');
        useTrainerStore.persist.clearStorage();
        window.location.reload();
      }
    }),
    {
      name: 'trainer-storage'
    }
  )
);
