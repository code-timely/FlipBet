import React, { useState, useContext } from 'react';
import { WalletContext } from '../context/WalletContext';
import { ethers } from 'ethers';
import FlipBetABI from '../contracts/FlipBetABI.json';

const BetForm = () => {
  const [betAmount, setBetAmount] = useState('');
  const [betChoice, setBetChoice] = useState('Heads');
  const [message, setMessage] = useState('');
  const { account } = useContext(WalletContext);

  const contractAddress = '0xf8e81D47203A594245E36C48e151709F0C19fBe8';

  const startGame = async () => {
    if (betAmount) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, FlipBetABI, signer);

        const tx = await contract.placeBet(betChoice === 'Heads' ? 0 : 1, { value: ethers.utils.parseEther(betAmount) });
        await tx.wait();

        const txResolve = await contract.resolveBet();
        await txResolve.wait();

        setMessage('Game completed! Check your wallet for results.');
      } catch (error) {
        setMessage('Transaction failed. Please try again.');
      }
    } else {
      setMessage('Please enter a bet amount.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <input
        type="text"
        value={betAmount}
        onChange={(e) => setBetAmount(e.target.value)}
        placeholder="Enter Bet Amount (ETH)"
        className="border p-2 rounded mb-4 w-full"
      />
      <select
        value={betChoice}
        onChange={(e) => setBetChoice(e.target.value)}
        className="border p-2 rounded mb-4 w-full"
      >
        <option value="Heads">Heads</option>
        <option value="Tails">Tails</option>
      </select>
      <button onClick={startGame} className="bg-green-500 text-white px-4 py-2 rounded w-full">
        Start Game
      </button>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default BetForm;
