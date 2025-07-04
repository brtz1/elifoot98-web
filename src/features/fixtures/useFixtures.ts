import { useState, useEffect } from 'react';
import { Fixture } from '@/models/Fixture';
import { getFixtures, subscribeToUpdates } from '@/services/league';

export function useFixtures(): Fixture[] {
  const [fixtures, setFixtures] = useState<Fixture[]>([]);

  const fetch = () => {
    const data = getFixtures().slice().sort((a, b) => 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    setFixtures(data);
  };

  useEffect(() => {
    fetch();
    return subscribeToUpdates(fetch);
  }, []);

  return fixtures;
}