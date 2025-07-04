import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch, setFixtures } from '../gameStore';
import './FixtureCalendar.css';

const FixtureCalendar: React.FC = () => {
  const fixtures = useSelector((state: RootState) => state.game.fixtures);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // TODO: replace with real fixture data
    const sampleFixtures = [
      { id: 1, round: 1, home: 'Team A', away: 'Team B', date: '2025-08-01' },
      // ... more fixtures
    ];
    dispatch(setFixtures(sampleFixtures));
  }, [dispatch]);

  return (
    <div className="fixture-calendar">
      {fixtures.map(f => (
        <div key={f.id} className="fixture-item">
          Round {f.round}: {f.home} vs {f.away} on {f.date}
        </div>
      ))}
    </div>
  );
};

export default FixtureCalendar;