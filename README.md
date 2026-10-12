# BETWEEN — Where the spark between people begins.

Day 1 (M2 — Lidiya) status: DONE.

- Next.js (App Router) + TypeScript + Tailwind base: `src/app/page.tsx`
- Supabase wiring: `src/lib/supabase/client.ts`, `src/lib/supabase/server.ts`
- Cloud project: `between` (ref `bvaunhbfrapshuwmmdff`, ap-south-1) — dashboard: https://supabase.com/dashboard/project/bvaunhbfrapshuwmmdff
- Health check: `GET /api/health`
- GitHub: https://github.com/alwaysalearner1234/between

## Getting Started (Day 1)

```bash
npm install
cp .env.example .env.local  # already filled locally; on a new machine copy keys from Supabase Dashboard > Settings > API
npm run dev
```

Open http://localhost:3000 and http://localhost:3000/api/health.

## Deploy on Vercel (blank deploy)

1. Go to https://vercel.com/new and Import `alwaysalearner1234/between`.
2. Framework preset: Next.js (auto). Add env vars from `.env.local`:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` (server-only)
3. Deploy. Verify `/` and `/api/health` on the Vercel URL.

## Learn More (default Next.js docs)

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
