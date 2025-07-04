import { SimulationControls } from '@/features/simulation/SimulationControls';
import { StandingsTable } from '@/features/standings/StandingsTable';
import { FixturesList } from '@/features/fixtures/FixturesList';
import { RosterView } from '@/features/roster/RosterView';
import { Finances } from '@/features/finances/Finances';

export default function App() {
  return (
    <div className="p-4 grid gap-6">
      <SimulationControls />
      <StandingsTable />
      <FixturesList />
      <RosterView />
      <Finances />
    </div>
  );
}