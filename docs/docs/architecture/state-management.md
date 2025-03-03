# State Management

This document explains the state management approach used in the Crypto Price Tracker.

## Why React Query?

For this project, we chose **React Query** as our primary state management solution for the following reasons:

1. **Server State Focus**: React Query is specifically designed for handling server state (data from APIs), which is the primary state in our application.

2. **Built-in Caching**: It provides intelligent caching that reduces unnecessary network requests.

3. **Loading/Error States**: React Query automatically provides loading, error, and success states without additional code.

4. **Refetch Capabilities**: It offers easy ways to manually trigger refetches, which is perfect for our refresh button.

5. **Minimal Boilerplate**: Compared to Redux, it requires less setup code for API data.

## Implementation Details

Here's how React Query is implemented in our dashboard component:

```typescript
const { data, isLoading, refetch } = useQuery<cryptoData[]>({
  queryKey: ['cryptoPrices'],
  queryFn: fetchCryptoData
});
```

The `useQuery` hook manages:
- Fetching data via the `fetchCryptoData` function
- Caching the results with the 'cryptoPrices' key
- Tracking loading state with `isLoading`
- Providing a `refetch` function for manual updates

## Local State Management

While React Query handles server state, we use React's built-in `useState` for UI state:

```typescript
const [searchTerm, setSearchTerm] = useState('');
```

This approach follows the principle of using the right tool for each type of state:
- React Query for remote/server data
- useState for local UI state

## Alternative Approaches Considered

We considered other state management solutions:

1. **Context API + useReducer**: Would require more boilerplate for caching and refetching.

2. **Redux**: Offers more structure but adds complexity for a simple application.

3. **Zustand**: A good alternative but offers fewer built-in features for API data compared to React Query.

React Query provided the best balance of simplicity and features for our specific needs.
