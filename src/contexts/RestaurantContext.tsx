import { IRestaurant, IMenu, IModifier, IModifierItem, IItem } from '@/services/interfaces';
import { createContext, useState } from 'react';

interface RestaurantProviderProps {
  children: React.ReactNode;
}

interface RestaurantContextProps {
  menu: IMenu;
  setMenu: (menu: IMenu) => void;
  restaurant: IRestaurant;
  setRestaurant: (restaurant: IRestaurant) => void;
  orders: Order<IModifierItem | IItem>;
  setOrders: (value: (order: Order<IModifierItem | IItem>) => Order<IModifierItem | IItem>) => void;
}

type Order<T> = Record<string, T>;

export const RestaurantContext = createContext({} as RestaurantContextProps);

export function RestaurantProvider({ children }: RestaurantProviderProps) {
  const [orders, setOrders] = useState<Order<IModifierItem | IItem>>({} as Order<IModifierItem | IItem>);
  const [menu, setMenu] = useState<IMenu>({} as IMenu);
  const [restaurant, setRestaurant] = useState<IRestaurant>({} as IRestaurant);

  return (
    <RestaurantContext.Provider value={{
      menu,
      setMenu,
      restaurant,
      setRestaurant,
      orders,
      setOrders,
    }}>
      {children}
    </RestaurantContext.Provider>
  );
}