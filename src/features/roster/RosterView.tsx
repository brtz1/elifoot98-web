import React from 'react';
import { useRoster } from './useRoster';
import './Roster.css';

/**
 * Displays each team's roster as a collapsible list.
 */
export function RosterView() {
  const rosters = useRoster();

  return (
    <div className="roster-container">
      {rosters.map(({ team, players }) => (
        <div className="roster-card" key={team.id}>
          <h3>{team.name}</h3>
          <ul className="player-list">
            {players.map(player => (
              <li key={player.id}>
                {player.name} — {player.position}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}