import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dreamly",
  description: "Personalized Bedtime Stories, Delivered Daily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>{children}</body>
    </html>
  );
}
