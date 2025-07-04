import { League } from './League';
import type { Fixture } from '@/models/Fixture';
import type { FinanceRecord } from '@/models/FinanceRecord';
import type { StandingsEntry } from '@/models/StandingsEntry';
import type { RosterEntry } from '@/models/RosterEntry';

// Initialize league (pass real teams array when ready)
// import { teams } from '@/data/teams';
// const league = new League(teams);
const league = new League([]);

// —— Update emitter for subscriptions ——
type UpdateListener = () => void;
const updateListeners: UpdateListener[] = [];

/**
 * Subscribe to league updates (returns unsubscribe function).
 */
export function subscribeToUpdates(fn: UpdateListener): () => void {
  updateListeners.push(fn);
  return () => {
    const idx = updateListeners.indexOf(fn);
    if (idx >= 0) updateListeners.splice(idx, 1);
  };
}

/**
 * Emit update to all subscribers.
 */
function emitUpdate() {
  updateListeners.forEach(fn => fn());
}

/**
 * Get all fixtures (scheduled & completed).
 */
export function getFixtures(): Fixture[] {
  return league.fixtures;
}

/**
 * Get financial records for each team.
 */
export function getFinances(): FinanceRecord[] {
  return Object.values(league.finances);
}

/**
 * Get current standings, sorted by points then goal difference.
 */
export function getStandings(): StandingsEntry[] {
  return league.getStandings();
}

/**
 * Get roster entries (team + players) for all teams.
 */
export function getRoster(): RosterEntry[] {
  return league.teams.map(team => ({
    team,
    players: league.rosters[team.id] || []
  }));
}

/**
 * Simulate all remaining fixtures and notify subscribers.
 */
export function simulateAllFixtures(): void {
  league.simulateAll();
  emitUpdate();
}

/**
 * Simulate a single fixture by ID and notify subscribers.
 * Returns the updated Fixture or undefined if not found.
 */
export function simulateFixture(id: string): Fixture | undefined {
  const fx = league.fixtures.find(f => f.id === id);
  const result = fx ? league.simulateGame(fx) : undefined;
  emitUpdate();
  return result;
}
