import { create } from 'zustand';

interface Player {
  id: string;
  name: string;
  skill: number;
  age: number;
  value: number;
  goals: number;
  injured: boolean;
}

interface Team {
  id: string;
  name: string;
  players: Player[];
  budget: number;
  points: number;
}

interface GameState {
  season: number;
  teams: Team[];
  currentTeamId: string | null;
  advanceSeason: () => void;
}

export const useGameStore = create<GameState>((set) => ({
  season: 1,
  teams: [],
  currentTeamId: null,
  advanceSeason: () => set(state => ({ season: state.season + 1 }))
}));