import { createSlice, configureStore, type PayloadAction } from '@reduxjs/toolkit';

interface Team {
  id: number;
  name: string;
  played: number;
  win: number;
  draw: number;
  loss: number;
  gf: number;
  ga: number;
  points: number;
}

interface Fixture {
  id: number;
  round: number;
  home: number;
  away: number;
  date: string;
  result?: { home: number; away: number };
}

interface Player {
  id: number;
  name: string;
  position: string;
  age: number;
  skill: number;
}

interface Finance {
  balance: number;
  income: number;
  expenses: number;
}

interface GameState {
  teams: Team[];
  fixtures: Fixture[];
  players: Player[];
  finance: Finance;
}

const initialState: GameState = {
  teams: [],
  fixtures: [],
  players: [],
  finance: { balance: 1000000, income: 0, expenses: 0 }
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setTeams(state: { teams: any; }, action: PayloadAction<Team[]>) {
      state.teams = action.payload;
    },
    setFixtures(state: { fixtures: any; }, action: PayloadAction<Fixture[]>) {
      state.fixtures = action.payload;
    },
    setPlayers(state: { players: any; }, action: PayloadAction<Player[]>) {
      state.players = action.payload;
    },
    updateFinance(state: { finance: any; }, action: PayloadAction<Partial<Finance>>) {
      Object.assign(state.finance, action.payload);
    }
  }
});

export const { setTeams, setFixtures, setPlayers, updateFinance } = gameSlice.actions;

const store = configureStore({
  reducer: { game: gameSlice.reducer }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;