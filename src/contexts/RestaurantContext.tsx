import { createContext, useState } from 'react';

interface RestaurantProviderProps {
  children: React.ReactNode;
}

interface RestaurantContextProps {
  
}

export const RestaurantContext = createContext({} as RestaurantContextProps);

export function RestaurantProvider({children}: RestaurantProviderProps) {
  const [orders, setOrders] = useState([]);

  return (
    <RestaurantContext.Provider value={{}}>
      {children}
    </RestaurantContext.Provider>
  );
}