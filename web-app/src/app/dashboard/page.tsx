'use client';
import Link from "next/link";

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchCryptoData, cryptoData } from '@/app/utils/api';

export default function CryptoDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const { data, isLoading, isError, error, refetch, isRefetching } = useQuery<cryptoData[]>({
    queryKey: ['cryptoPrices'],
    queryFn: fetchCryptoData,
    refetchOnWindowFocus: false,
    staleTime: 60000, //fresh data for 1 minute
    retry: 3, // retry failed requests 3 times
  });

  const filteredData = data?.filter((crypto: cryptoData) =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRefresh = () => {
    refetch();
  };

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
            onClick={handleRefresh}
            disabled={isRefetching}
            className={`${
              isRefetching ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
            } text-white font-medium py-2 px-6 rounded-lg cursor-pointer shadow-md transition duration-300 ease-in-out transform hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed`}
          >
            {isRefetching ? 'Refreshing...' : 'Refresh'}
          </button>
        </div>
        

        {isError && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded">
            <p className="font-bold">Error</p>
            <p>{(error as Error)?.message || 'Failed to fetch cryptocurrency data'}</p>
            <button 
              onClick={() => refetch()} 
              className="mt-2 text-red-700 underline"
            >
              Try again
            </button>
          </div>
        )}

{isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {filteredData && filteredData.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredData.map((crypto: cryptoData) => (
                    <tr key={crypto.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {crypto.image && (
                            <img src={crypto.image} alt={crypto.name} className="h-8 w-8 mr-3 rounded-full" />
                          )}
                          <div>
                            <div className="text-sm font-medium text-gray-900">{crypto.name}</div>
                            <div className="text-sm text-gray-500">{crypto.symbol.toUpperCase()}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        ${crypto.current_price.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-10 px-4">
              <p className="text-lg text-gray-500">No cryptocurrencies found</p>
            </div>
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