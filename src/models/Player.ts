/**
 * Represents a player belonging to a team.
 */
export interface Player {
  id: string;       // Unique player ID
  name: string;     // Player's full name
  teamId: string;   // ID of the team they belong to
  position: string; // e.g. "Forward", "Midfielder", etc.
}