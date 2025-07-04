import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation: React.FC = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <nav className="navigation">
      <NavLink to="/" className="logo">
        <img
          src={`${base}logo.png`}
          alt="BRTZFoot25 logo"
          width={32}
          height={32}
        />
        <span>BRTZFoot25</span>
      </NavLink>

      <div className="links">
        <NavLink to="/standings">Standings</NavLink>
        <NavLink to="/fixtures">Fixtures</NavLink>
        <NavLink to="/roster">Roster</NavLink>
        <NavLink to="/match">Match</NavLink>
        <NavLink to="/transfers">Transfers</NavLink>
        <NavLink to="/finance">Finances</NavLink>
      </div>
    </nav>
  );
};

export default Navigation;