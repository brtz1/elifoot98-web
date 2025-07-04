import React from 'react';
import { useStandings } from './useStandings';
import './Standings.css';

/**
 * Displays the league standings table.
 */
export function StandingsTable() {
  const standings = useStandings();

  return (
    <table className="standings-table">
      <thead>
        <tr>
          <th>Team</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>GF</th>
          <th>GA</th>
          <th>Pts</th>
        </tr>
      </thead>
      <tbody>
        {standings.map(entry => (
          <tr key={entry.team.id}>
            <td>{entry.team.name}</td>
            <td>{entry.wins}</td>
            <td>{entry.draws}</td>
            <td>{entry.losses}</td>
            <td>{entry.goalsFor}</td>
            <td>{entry.goalsAgainst}</td>
            <td>{entry.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}