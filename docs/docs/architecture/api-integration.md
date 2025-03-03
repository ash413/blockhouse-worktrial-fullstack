# API Integration

This document details how the Crypto Price Tracker integrates with cryptocurrency APIs.

## API Selection

We chose the [CoinGecko API](https://www.coingecko.com/en/api/documentation) for this project because:
- It offers free access to cryptocurrency data
- It provides comprehensive information about cryptocurrencies
- It has high reliability and uptime
- It doesn't require authentication for basic usage

## Implementation Details

The API integration is implemented in `app/utils/api.ts`:

```typescript
// define the data type for cryptocurrency
export interface cryptoData {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  image: string;
}

// func to fetch cryptocurrency data
export const fetchCryptoData = async (): Promise<cryptoData[]> => {
  try {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1'
    );
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching crypto data:', error);
    throw error;
  }
};
```

## Data Flow

1. When the dashboard component mounts, it calls `fetchCryptoData` via React Query
2. React Query manages the cache and loading states
3. When the "Refresh" button is clicked, the `refetch` function is called to get fresh data
4. The search filter works locally on the fetched data without making new API calls

## Rate Limiting and Error Handling

The CoinGecko API has rate limits for free tier usage. Our application implements:
- Error handling for failed requests
- Loading states to inform users
- Optimistic UI updates when refreshing data