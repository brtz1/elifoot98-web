import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Corrected import: use '../gameStore' where the store is defined
import { RootState, AppDispatch, setPlayers } from '../gameStore';
import './TeamRoster.css';

const TeamRoster: React.FC = () => {
  const players = useSelector((state: RootState) => state.game.players);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // TODO: replace with real player data
    const samplePlayers = [
      { id: 1, name: 'Player One', position: 'Forward', age: 25, skill: 80 },
      // ... more players
    ];
    dispatch(setPlayers(samplePlayers));
  }, [dispatch]);

  return (
    <ul className="team-roster">
      {players.map(p => (
        <li key={p.id}>{p.name} - {p.position} (Age: {p.age})</li>
      ))}
    </ul>
  );
};

export default TeamRoster;