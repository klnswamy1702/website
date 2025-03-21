import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
// import Navbar from "./components/Navbar";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <Navbar />
        <main className="max-w-5xl mx-auto px-6">{children}</main>
      </body>
    </html>
  );
}