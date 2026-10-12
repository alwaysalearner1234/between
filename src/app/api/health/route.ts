import { NextResponse } from "next/server";

export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  return NextResponse.json({
    ok: true,
    app: "between",
    day: 1,
    owner: "M2-lidiya",
    supabaseWired: Boolean(url && anonKey),
    timestamp: new Date().toISOString(),
  });
}
