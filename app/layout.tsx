import type { Metadata } from "next";
import { GeistSans as geist } from "geist/font/sans";

import "@/app/globals.css";

import { cn } from "@/utils/cn";

export const metadata: Metadata = {
  title: "Alon3",
};

export interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "antialised bg-background text-foreground",
          geist.className,
        )}
      >
        {children}
      </body>
    </html>
  );
}
