'use client';

import { RestaurantProvider } from '@/contexts/RestaurantContext';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({children}: LayoutProps) {
  return (
    <RestaurantProvider>
      {children}
    </RestaurantProvider>
  )
}