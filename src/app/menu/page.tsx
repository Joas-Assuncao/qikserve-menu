import { Menu } from '@/screens/menu';
import { getMenuData, getRestaurantData } from '@/services/restaurant';

export default async function Page() {
  const [dataMenu, dataRestaurant] = await Promise.all([
    getMenuData(),
    getRestaurantData(),
  ]);

  return (
    <Menu dataMenu={dataMenu} dataRestaurant={dataRestaurant} />
  );
}
