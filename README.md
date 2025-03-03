# Crypto Price Tracker

A full-stack application that displays real-time cryptocurrency prices with a dedicated documentation site.

## Project Structure

This repository contains:

- `/web-app` - Next.js application for crypto price tracking
- `/docs` - Docusaurus documentation site explaining the project's implementation
- `/.next` - Next.js build files (auto-generated)

## Web Application Features

The Crypto Price Tracker web application includes:

- Real-time cryptocurrency price tracking
- Search functionality to filter cryptocurrencies 
- Manual refresh button to fetch latest data
- Responsive design for mobile and desktop
- Clean, modern UI with proper loading states

## Technologies Used

- **Frontend**: Next.js with React
- **State Management**: React Query
- **API**: CoinGecko API for cryptocurrency data
- **Styling**: Tailwind CSS
- **Documentation**: Docusaurus

## Setup Instructions

### Web Application

1. Navigate to the web application directory:
```bash
cd web-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the web-app directory with:
```
NEXT_PUBLIC_API_URL=https://api.coingecko.com/api/v3
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. The application will be available at `http://localhost:3000`

### Documentation

1. Navigate to the documentation directory:
```bash
cd docs
```

2. Install dependencies:
```bash
npm install
OR
yarn install
```

3. Start the development server:
```bash
npm start
OR
yarn start
```

4. The documentation site will be available at `http://localhost:3000` (or another port if web-app is already running on 3000)

## API Usage Notes

This project uses the free tier of the CoinGecko API which has rate limitations. If you encounter errors when refreshing frequently, please wait a moment before trying again.

## Documentation Content

The documentation site includes:

- Project setup guide
- API integration details
- State management explanation
- Development challenges and solutions

## Running in Production

### Web Application

```bash
cd web-app
npm run build
npm start
```

### Documentation

```bash
cd docs
npm run build
npm run serve
```
