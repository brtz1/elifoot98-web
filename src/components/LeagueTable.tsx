import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch, setTeams } from '../gameStore';
import './LeagueTable.css';

const LeagueTable: React.FC = () => {
  const teams = useSelector((state: RootState) => state.game.teams);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // TODO: replace with real data fetch
    const sampleTeams = [
      { id: 1, name: 'Team A', played: 0, win: 0, draw: 0, loss: 0, gf: 0, ga: 0, points: 0 },
      // ... more teams
    ];
    dispatch(setTeams(sampleTeams));
  }, [dispatch]);

  return (
    <table className="league-table">
      <thead>
        <tr>
          <th>#</th><th>Team</th><th>P</th><th>W</th><th>D</th><th>L</th><th>GF</th><th>GA</th><th>GD</th><th>Pts</th>
        </tr>
      </thead>
      <tbody>
        {teams.map((t, i) => (
          <tr key={t.id}>
            <td>{i + 1}</td>
            <td>{t.name}</td>
            <td>{t.played}</td>
            <td>{t.win}</td>
            <td>{t.draw}</td>
            <td>{t.loss}</td>
            <td>{t.gf}</td>
            <td>{t.ga}</td>
            <td>{t.gf - t.ga}</td>
            <td>{t.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeagueTable;