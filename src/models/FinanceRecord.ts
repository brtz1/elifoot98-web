import type { Team } from './Team';

/**
 * Tracks financials (budget, income, expenses) for a team.
 */
export interface FinanceRecord {
  team: Team;
  budget: number;
  income: number;
  expenses: number;
}