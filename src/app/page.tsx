export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6 font-sans dark:bg-black">
      <main className="flex w-full max-w-xl flex-col items-center gap-6 rounded-2xl bg-white p-10 text-center shadow-sm dark:bg-zinc-950">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
          BETWEEN • v0.2 • Day 1
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Where the spark between people begins.
        </h1>
        <p className="max-w-md text-base leading-7 text-zinc-600 dark:text-zinc-400">
          Blank deploy is live. M2 (Lidiya): Next.js + TypeScript + Supabase +
          Vercel base is up. Full loop lands Days 8–16.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
          {["Next.js", "TypeScript", "Supabase", "Vercel"].map((s) => (
            <span
              key={s}
              className="rounded-full border border-black/10 px-3 py-1 text-zinc-600 dark:border-white/15 dark:text-zinc-300"
            >
              {s}
            </span>
          ))}
        </div>
        <a
          href="/api/health"
          className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          Check /api/health
        </a>
      </main>
    </div>
  );
}
