import type { Metadata } from "next";

import { Header } from '@/components/Header';
import { getRestaurantData } from '@/services/restaurant';
import "./globals.css";
import { Layout } from '@/screens/layout';

export const metadata: Metadata = {
  title: "QikServe Menu",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dataRestaurant = await getRestaurantData();

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Header bg={dataRestaurant.webSettings.navBackgroundColour} />
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}