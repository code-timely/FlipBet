import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { WalletContext } from '../context/WalletContext';

const Home = () => {
  const { connectWallet, errorMessage } = useContext(WalletContext);
  const navigate = useNavigate();

  const handleConnect = async () => {
    const success = await connectWallet();
    if (success) navigate('/game');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">FlipBet</h1>
        <button onClick={handleConnect} className="bg-blue-500 text-white px-4 py-2 rounded">
          Connect Wallet
        </button>
        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Home;
