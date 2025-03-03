# Installation Guide

This guide will walk you through setting up and running the Crypto Price Tracker web application.

## Prerequisites

- Node.js 14.x or higher
- npm or yarn

## Setting up the Web Application

1. Clone the repository:

```bash
git clone https://github.com/yourusername/blockhouse-worktrial-fullstack.git
cd blockhouse-worktrial-fullstack
```

2. Install dependencies:

```bash
npm install
OR
yarn install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add:

```
NEXT_PUBLIC_API_URL=https://api.coingecko.com/api/v3
```

4. Start the development server:

```bash
npm run dev
OR
yarn dev
```

5. The application will be available at `http://localhost:3000`

## Production Deployment

To build for production:

```bash
npm run build
OR
yarn build
```

To start the production server:

```bash
npm start
OR
yarn start
```