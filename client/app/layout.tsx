import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/common/navbar";
import State from "@/context/State";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MindMates",
  description: "Come Connect Share",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <State>
          <Navbar />
          {children}
        </State>
      </body>
    </html>
  );
}
