import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Another Hélio Software",
  description: "Generated by Hélio Sal with <3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <h1>How to get to the sun</h1>
        </nav>
        {children}
      </body>
    </html>
  );
}
