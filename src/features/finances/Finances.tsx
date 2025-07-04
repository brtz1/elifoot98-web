import React from 'react';
import { useFinances } from './useFinances';
import './Finances.css';

export function Finances() {
  const records = useFinances();

  return (
    <div className="finances-dashboard">
      {records.map(record => (
        <div className="finance-card" key={record.team.id}>
          <h3>{record.team.name}</h3>
          <p>Budget: ${record.budget.toLocaleString()}</p>
          <p>Income: ${record.income.toLocaleString()}</p>
          <p>Expenses: ${record.expenses.toLocaleString()}</p>
          <table className="finance-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Remaining</td>
                <td>${(record.budget + record.income - record.expenses).toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}