import { useCallback } from 'react';
import {
  simulateAllFixtures,
  simulateFixture
} from '@/services/league';

/**
 * Hook exposing simulation actions.
 */
export function useSimulation() {
  const runAll = useCallback(() => {
    simulateAllFixtures();
  }, []);

  const runOne = useCallback((id: string) => {
    simulateFixture(id);
  }, []);

  return { runAll, runOne };
}