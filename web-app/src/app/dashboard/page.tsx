'use client';
import Link from "next/link";

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4">
      <main className="w-full max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Crypto Price Tracker</h1>
        
        <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="text"
            placeholder="Search cryptocurrencies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
          <button
            onClick={() => refetch()}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg cursor-pointer shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Refresh
          </button>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center p-8">
            <p className="text-gray-600">Loading...</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6 w-full">
            {filteredData && filteredData.length > 0 ? (
              <ul className="divide-y divide-gray-200">
                {filteredData.map((crypto: cryptoData) => (
                  <li key={crypto.id} className="py-3 flex justify-between items-center">
                    <span className="font-medium">{crypto.name}</span>
                    <span className="text-blue-600 font-bold">${crypto.current_price.toLocaleString()}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 py-4">No cryptocurrencies found</p>
            )}
          </div>
        )}
        
        <div className="mt-6">
          <Link href="/" className="inline-block">
            <button className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-lg cursor-pointer shadow-md transition duration-300 ease-in-out transform hover:scale-105">
              Back to Home
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}