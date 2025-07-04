import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => (
  <nav className="sidebar">
    <div className="logo-container">
      <img src="/assets/logo.png" alt="Elifoot98 Logo" className="logo" />
      <h2>Elifoot98</h2>
    </div>
    <ul>
      <li><NavLink to="/standings" className={({ isActive }) => isActive ? "active" : undefined}>Standings</NavLink></li>
      <li><NavLink to="/fixtures" className={({ isActive }) => isActive ? "active" : undefined}>Fixtures</NavLink></li>
      <li><NavLink to="/roster" className={({ isActive }) => isActive ? "active" : undefined}>Roster</NavLink></li>
      <li><NavLink to="/simulate" className={({ isActive }) => isActive ? "active" : undefined}>Simulate</NavLink></li>
      <li><NavLink to="/transfers" className={({ isActive }) => isActive ? "active" : undefined}>Transfers</NavLink></li>
      <li><NavLink to="/finances" className={({ isActive }) => isActive ? "active" : undefined}>Finances</NavLink></li>
    </ul>
  </nav>
);

export default Navigation;