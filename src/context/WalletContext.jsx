import React, { createContext, useState } from 'react';

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [account, setAccount] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      } else {
        setErrorMessage('MetaMask is not installed');
      }
    } catch (error) {
      setErrorMessage('Failed to connect wallet');
    }
  };

  return (
    <WalletContext.Provider value={{ account, connectWallet, errorMessage }}>
      {children}
    </WalletContext.Provider>
  );
};
