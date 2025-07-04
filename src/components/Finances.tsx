import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../gameStore';
import '../index.css';

const Finances: React.FC = () => {
  const finances = useSelector((state: RootState) => state.game.finance);

  return (
    <div>
      <h2>Finances</h2>
      <p>Balance: ${finances.balance}</p>
      <p>Income: ${finances.income}</p>
      <p>Expenses: ${finances.expenses}</p>
    </div>
  );
};

export default Finances;