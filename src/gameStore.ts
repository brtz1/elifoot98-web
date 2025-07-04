import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';

// Define Team, Fixture, Player, and Finance interfaces
interface Team { id: number; name: string; played: number; win: number; draw: number; loss: number; gf: number; ga: number; points: number; }
interface Fixture { id: number; round: number; home: string; away: string; date: string; result?: { home: number; away: number }; }
interface Player { id: number; name: string; position: string; age: number; skill: number; }
interface Finance { balance: number; income: number; expenses: number; }

// Define the slice state
interface GameState {
  teams: Team[];
  fixtures: Fixture[];
  players: Player[];
  finance: Finance;
}

// Initial state
const initialState: GameState = {
  teams: [],
  fixtures: [],
  players: [],
  finance: { balance: 1000000, income: 0, expenses: 0 }
};

// Create slice
const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setTeams(state, action: PayloadAction<Team[]>) { state.teams = action.payload; },
    setFixtures(state, action: PayloadAction<Fixture[]>) { state.fixtures = action.payload; },
    setPlayers(state, action: PayloadAction<Player[]>) { state.players = action.payload; },
    updateFinance(state, action: PayloadAction<Partial<Finance>>) { Object.assign(state.finance, action.payload); }
  }
});

// Export actions
export const { setTeams, setFixtures, setPlayers, updateFinance } = gameSlice.actions;

// Configure store
const store = configureStore({ reducer: { game: gameSlice.reducer } });

// Export store and types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;