import type { Metadata } from "next";
import Navbar from "./components/common/navbar";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

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
      <body>
        {/* <body className={inter.className}> */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
