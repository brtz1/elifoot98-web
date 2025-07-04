import type { Team } from './Team';
import type { Player } from './Player';

/**
 * Associates a team with its list of players.
 */
export interface RosterEntry {
  team: Team;
  players: Player[];
}