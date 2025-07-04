import { useState, useEffect } from 'react';
import { FinanceRecord } from '@/models/FinanceRecord';
import { getFinances, subscribeToUpdates } from '@/services/league';

export function useFinances(): FinanceRecord[] {
  const [records, setRecords] = useState<FinanceRecord[]>([]);

  const fetch = () => setRecords(getFinances());

  useEffect(() => {
    fetch();
    return subscribeToUpdates(fetch);
  }, []);

  return records;
}