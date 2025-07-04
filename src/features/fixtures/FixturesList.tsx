import { useFixtures } from './useFixtures';
import './Fixture.css';

/**
 * Renders a list of upcoming and completed fixtures.
 * Shows home vs away, date, and score if completed.
 */
export function FixturesList() {
  const fixtures = useFixtures();

  return (
    <div className="fixtures-list">
      {fixtures.map(fx => (
        <div className="fixture-item" key={fx.id}>
          <span className="fixture-date">
            {new Date(fx.date).toLocaleDateString()}
          </span>
          <span className="fixture-teams">
            {fx.homeTeam.name} vs {fx.awayTeam.name}
          </span>
          {fx.status === 'completed' ? (
            <span className="fixture-score">
              {fx.homeScore} - {fx.awayScore}
            </span>
          ) : (
            <span className="fixture-pending">Scheduled</span>
          )}
        </div>
      ))}
    </div>
  );
}