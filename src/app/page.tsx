import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Crypto Price Tracker</h1>
      <Link href="/dashboard">Go to Dashboard</Link>
    </div>
  );
}