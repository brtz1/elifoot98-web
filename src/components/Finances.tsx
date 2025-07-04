import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/Store';
import './Finances.css';

const Finances: React.FC = () => {
  const { balance, income, expenses } = useSelector((state: RootState) => state.game.finance);
  return (
    <div className="finances">
      <p>Balance: ${balance}</p>
      <p>Income: ${income}</p>
      <p>Expenses: ${expenses}</p>
    </div>
  );
};

export default Finances;