import type { Metadata } from "next";
import "./globals.css";
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: "QikServe Menu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Header bg={`#4f372f`} />
        {children}
      </body>
    </html>
  );
}