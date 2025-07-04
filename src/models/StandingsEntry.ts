import type { Team } from './Team';

/**
 * Represents a row in the league standings table.
 */
export interface StandingsEntry {
  team: Team;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
}