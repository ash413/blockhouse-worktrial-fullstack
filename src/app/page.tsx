import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4">
      <main className="text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          Welcome to the Crypto Price Tracker
        </h1>
        <Link href="/dashboard" className="inline-block">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg cursor-pointer shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            Go to Dashboard
          </button>
        </Link>
      </main>
    </div>
  );
}