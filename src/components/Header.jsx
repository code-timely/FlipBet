import React, { useContext } from 'react';
import WalletCard from './WalletCard';
import { WalletContext } from '../context/WalletContext';

const Header = () => {
  const { account } = useContext(WalletContext);

  return (
    <header className="flex justify-between items-center mb-4">
      <h1 className="text-3xl font-bold">FlipBet</h1>
      {account && <WalletCard account={account} />}
    </header>
  );
};

export default Header;
