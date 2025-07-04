import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

import React from 'react';

const base = import.meta.env.BASE_URL;

const Navigation: React.FC = () => (
  <nav className="sidebar">
    <div className="logo-container">
      <img src={`${base}assets/logo.png`} alt="Elifoot98 Logo" className="logo" />
      <h2>Elifoot98</h2>
    </div>
    <ul>
      <li><NavLink to="/standings" activeClassName="active">Standings</NavLink></li>
      <li><NavLink to="/fixtures" activeClassName="active">Fixtures</NavLink></li>
      <li><NavLink to="/roster" activeClassName="active">Roster</NavLink></li>
      <li><NavLink to="/simulate" activeClassName="active">Simulate</NavLink></li>
      <li><NavLink to="/transfers" activeClassName="active">Transfers</NavLink></li>
      <li><NavLink to="/finances" activeClassName="active">Finances</NavLink></li>
    </ul>
  </nav>
);

export default Navigation;