import { useGameStore } from './store/gameStore';

export default function App() {
  const season = useGameStore(state => state.season);

  return (
    <div className="app-container">
      <h1>Elifoot98 Reimagined</h1>
      <p>Current season: {season}</p>
    </div>
  );
}