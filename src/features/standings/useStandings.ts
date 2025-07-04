import { useState, useEffect } from 'react';
import { StandingsEntry } from '@/models/StandingsEntry';
import { getStandings, subscribeToUpdates } from '@/services/league';

/**
 * Hook to fetch and update standings on league changes.
 */
export function useStandings(): StandingsEntry[] {
  const [table, setTable] = useState<StandingsEntry[]>([]);

  const fetch = () => {
    const standings = getStandings();
    setTable(standings);
  };

  useEffect(() => {
    fetch();
    // Re-fetch when league model emits an update
    return subscribeToUpdates(fetch);
  }, []);

  return table;
}