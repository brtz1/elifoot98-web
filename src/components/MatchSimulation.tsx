import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch, setFixtures } from '../store/Store';
import './MatchSimulation.css';

const MatchSimulation: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const fixtures = useSelector((state: RootState) => state.game.fixtures);
  const [events, setEvents] = useState<string[]>([]);

  const handleSimulate = () => {
    if (fixtures.length === 0) {
      setEvents(['No fixtures available to simulate']);
      return;
    }
    // Simulate the first pending fixture
    const fixture = fixtures[0];
    const homeScore = Math.floor(Math.random() * 5);
    const awayScore = Math.floor(Math.random() * 5);
    const updatedFixture = { ...fixture, result: { home: homeScore, away: awayScore } };

    // Update store with the simulated result
    dispatch(
      setFixtures([
        updatedFixture,
        ...fixtures.slice(1)
      ])
    );

    // Display simulation events
    setEvents([
      `Result: ${fixture.home} ${homeScore} - ${awayScore} ${fixture.away}`,
      'Simulation complete.'
    ]);
  };

  return (
    <div className="match-simulation">
      <button onClick={handleSimulate} className="simulate-btn">
        Simulate Next Match
      </button>
      <div className="result-feed">
        {events.map((evt, idx) => (
          <p key={idx}>{evt}</p>
        ))}
      </div>
    </div>
  );
};

export default MatchSimulation;