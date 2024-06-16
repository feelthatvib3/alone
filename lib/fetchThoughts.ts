import { sql } from "@vercel/postgres";

interface Thought {
  id: number;
  text: string;
  createdAt: string;
  updatedAt: string;
}

const fetchThoughts = async () => {
  try {
    const { rows, rowCount } = await sql`SELECT * FROM thoughts`;
    if (!rowCount) throw new Error("No thoughts found.");
    return rows as Thought[];
  } catch (err) {
    console.error(err);
  }
};

export { fetchThoughts };
export type { Thought };
