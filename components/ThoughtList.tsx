import React from "react";

import { cn } from "@/utils/cn";
import { sql } from "@vercel/postgres";

interface Thought {
  id: number;
  text: string;
  createdAt: string;
  updatedAt: string;
}

interface ThoughtListProps extends React.HTMLAttributes<HTMLUListElement> {}

const ThoughtList = React.forwardRef<HTMLUListElement, ThoughtListProps>(
  async ({ className, ...props }, ref) => {
    const { rows }: { rows: Thought[] } = await sql`SELECT * FROM thoughts`;
    return (
      <ul ref={ref} className={cn("grid gap-y-2", className)} {...props}>
        {rows.map((row) => (
          <p key={row.id}>{row.text}</p>
        ))}
      </ul>
    );
  },
);

ThoughtList.displayName = "ThoughtList";

export { ThoughtList };
