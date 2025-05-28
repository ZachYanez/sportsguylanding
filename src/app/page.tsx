import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-16">
        <div className="flex flex-col items-center text-center mb-12">
          <Image
            src="/3DCoach.png"
            alt="SportsGuy Logo"
            width={200}
            height={200}
            priority
            className="mb-8"
          />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            <span className="bg-gradient-to-r from-[var(--sports-blue)] to-[var(--sports-green)] bg-clip-text text-transparent">
              SportsGuy
            </span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Your AI-powered sports companion that transforms how you engage with
            sports knowledge and statistics.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center sm:text-left">
            KEY FEATURES:
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gradient-to-br from-[var(--sports-blue)] to-[var(--sports-green)] bg-opacity-10 p-6 rounded-xl shadow-md text-black">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="text-[var(--sports-blue)] mr-2">📱</span>{" "}
                INTELLIGENT CHAT
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• Get instant answers to any sports question</li>
                <li>• Real-time stats, scores, and player information</li>
                <li>• Natural conversation flow with context memory</li>
                <li>• Ask follow-up questions for deeper insights</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[var(--sports-blue)] to-[var(--sports-green)] bg-opacity-10 p-6 rounded-xl shadow-md text-black">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="text-[var(--sports-green)] mr-2">🔍</span>{" "}
                TRUSTED INFORMATION
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• All responses backed by verified sources</li>
                <li>• Clear citations for facts provided</li>
                <li>• Access historical data and statistics</li>
                <li>• Stay informed with accurate, up-to-date information</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[var(--sports-blue)] to-[var(--sports-green)] bg-opacity-10 p-6 rounded-xl shadow-md sm:col-span-2 lg:col-span-1 text-black">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="text-[var(--sports-blue)] mr-2">💾</span> SAVE
                & ORGANIZE
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• Save important conversations for future reference</li>
                <li>• Create a personal archive of sports knowledge</li>
                <li>• Easily access your favorite discussions</li>
                <li>• Perfect for research and fact-checking</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <p className="text-lg mb-6">
            Whether you&apos;re settling debates with friends, researching for
            fantasy sports, or simply expanding your sports knowledge, SportsGuy
            delivers accurate, instant answers through an intuitive chat
            interface.
          </p>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">SportsGuy helps you:</h2>
            <ul className="space-y-2 grid sm:grid-cols-2 gap-x-4">
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-[var(--sports-green)] mr-2"></div>
                Research player statistics and team records
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-[var(--sports-blue)] mr-2"></div>
                Understand game strategies and rules
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-[var(--sports-green)] mr-2"></div>
                Track historical performances
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-[var(--sports-blue)] mr-2"></div>
                Compare players across eras
              </li>
              <li className="flex items-center sm:col-span-2">
                <div className="h-2 w-2 rounded-full bg-[var(--sports-green)] mr-2"></div>
                Stay updated on sports trends
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-[var(--sports-blue)] to-[var(--sports-green)] text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition-transform hover:scale-105">
            Download SportsGuy Now
          </div>
          <p className="mt-4 text-lg">
            Experience the future of sports knowledge at your fingertips!
          </p>
        </div>
      </main>

      <footer className="bg-gray-50 dark:bg-gray-800 py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Link
            href="/privacy"
            className="text-[var(--sports-blue)] hover:underline"
          >
            Privacy Policy
          </Link>
          <p className="mt-2 text-sm text-gray-500">
            © {new Date().getFullYear()} ZY MGMT Co. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
