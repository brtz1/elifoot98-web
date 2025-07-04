import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LeagueTable from './components/LeagueTable';
import FixtureCalendar from './components/FixtureCalendar';
import TeamRoster from './components/TeamRoster';
import MatchSimulation from './components/MatchSimulation';
import TransferMarket from './components/TransferMarket';
import Finances from './components/Finances';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  return (
    <div className="app">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/standings" replace />} />
          <Route path="/standings" element={<LeagueTable />} />
          <Route path="/fixtures" element={<FixtureCalendar />} />
          <Route path="/roster" element={<TeamRoster />} />
          <Route path="/match" element={<MatchSimulation />} />
          <Route path="/transfers" element={<TransferMarket />} />
          <Route path="/finance" element={<Finances />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;