import type { Team } from './Team';

/**
 * Represents a scheduled or completed match between two teams.
 */
export interface Fixture {
  id: string;           // e.g. "R1M1"
  homeTeam: Team;
  awayTeam: Team;
  date: Date;           // JS Date object
  homeScore?: number;   // Populated when status === 'completed'
  awayScore?: number;
  status: 'scheduled' | 'completed';
}