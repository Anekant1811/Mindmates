// import { Inter } from "next/font/google";
import "./globals.css";
import State from "../../context/State";
// import Navbar from "../app/components/common/navbar";
import Navbar from "../(website)/components/common/navbar";
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <State>
          <Navbar />
          {children}
        </State>
      </body>
    </html>
  );
}
