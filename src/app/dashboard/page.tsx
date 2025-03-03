'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchCryptoData, cryptoData } from '@/app/utils/api';

export default function CryptoDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const { data, isLoading, refetch } = useQuery<cryptoData[]>({
    queryKey: ['cryptoPrices'],
    queryFn: fetchCryptoData
  });

  const filteredData = data?.filter((crypto: cryptoData) =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Crypto Price Tracker</h1>
      <input
        type="text"
        placeholder="Search cryptocurrencies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border rounded mb-4"
      />
      <button
        onClick={() => refetch()}
        className="bg-blue-500 text-white p-2 rounded mb-4"
      >
        Refresh
      </button>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {filteredData?.map((crypto: cryptoData) => (
            <li key={crypto.id} className="mb-2">
              {crypto.name}: ${crypto.current_price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}