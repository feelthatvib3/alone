import type { Metadata } from "next";
import { GeistSans as geist } from "geist/font/sans";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Alone",
};

export interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className={geist.className}>{children}</body>
    </html>
  );
}
