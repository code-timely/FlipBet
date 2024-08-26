import React, { useContext } from 'react';
import { WalletContext } from '../context/WalletContext';
import Header from '../components/Header';
import BetForm from '../components/BetForm';

const Game = () => {
  const { account } = useContext(WalletContext);

  return (
    <div className="p-6">
      <Header />
      <div className="flex justify-center items-center h-screen">
        <BetForm />
      </div>
    </div>
  );
};

export default Game;
