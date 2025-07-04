import { useState, useEffect } from 'react';
import { RosterEntry } from '@/models/RosterEntry';
import { getRoster, subscribeToUpdates } from '@/services/league';

export function useRoster(): RosterEntry[] {
  const [rosters, setRosters] = useState<RosterEntry[]>([]);

  const fetch = () => setRosters(getRoster());

  useEffect(() => {
    fetch();
    return subscribeToUpdates(fetch);
  }, []);

  return rosters;
}