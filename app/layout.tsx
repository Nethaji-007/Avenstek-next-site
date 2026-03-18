import "./globals.css";
import  Navbar from "./components/navbar"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Professional Construction Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
    <Navbar />
        {children}
      </body>
    </html>
  );
}