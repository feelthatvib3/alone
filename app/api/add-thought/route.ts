import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const text = searchParams.get("text");

  try {
    if (!text) throw new Error("Text is required.");
    await sql`INSERT INTO thoughts (text) VALUES (${text})`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const thoughts = await sql`SELECT * FROM thoughts`;
  return NextResponse.json({ thoughts }, { status: 200 });
}

export { GET };
