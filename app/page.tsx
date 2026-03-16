import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Home | My Next.js App',
  description: 'Welcome to my Next.js 16 homepage',
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black transition-colors duration-300">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">
          Home
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Your <span className="font-mono font-semibold text-orange-500">Next.js 16</span> app is running with Turbopack.
        </p>
        
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-zinc-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600"
          >
            Get Started
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-300">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </main>
  );
}