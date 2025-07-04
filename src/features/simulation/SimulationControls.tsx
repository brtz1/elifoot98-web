import React from 'react';
import { useSimulation } from './useSimulation';
import './Simulation.css';

/**
 * UI controls to trigger league simulations.
 */
export function SimulationControls() {
  const { runAll } = useSimulation();

  return (
    <div className="simulation-controls">
      <button onClick={runAll}>
        Simulate All Fixtures
      </button>
    </div>
  );
}