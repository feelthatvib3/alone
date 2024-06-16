import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

async function GET() {
  try {
    const { rows, rowCount } = await sql`SELECT * FROM thoughts`;
    if (!rowCount)
      return NextResponse.json({ error: "No thoughts found" }, { status: 404 });
    return NextResponse.json({ thoughts: rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export { GET };
