import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import LeagueTable from './components/LeagueTable';
import FixtureCalendar from './components/FixtureCalendar';
import TeamRoster from './components/TeamRoster';
import MatchSimulation from './components/MatchSimulation';
import TransferMarket from './components/TransferMarket';
import Finances from './components/Finances';
import './App.css';

const App: React.FC = () => (
  <div className="app-container">
    <Navigation />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Navigate to="/standings" replace />} />
        <Route path="/standings" element={<LeagueTable />} />
        <Route path="/fixtures" element={<FixtureCalendar />} />
        <Route path="/roster" element={<TeamRoster />} />
        <Route path="/simulate" element={<MatchSimulation />} />
        <Route path="/transfers" element={<TransferMarket />} />
        <Route path="/finances" element={<Finances />} />
      </Routes>
    </main>
  </div>
);

export default App;