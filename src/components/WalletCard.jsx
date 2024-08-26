import React from 'react';

const WalletCard = ({ account }) => {
  return (
    <div className="bg-gray-200 p-3 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105">
      <p>{account}</p>
    </div>
  );
};

export default WalletCard;
