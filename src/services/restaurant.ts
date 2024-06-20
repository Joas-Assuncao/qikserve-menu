import api from './api';
import { IBurgerRestaurant, IMenu } from './interfaces';

export const getRestaurantData = async () => {
  const response = await api().get<IBurgerRestaurant>('/venue/9');
  return response.data;
}

export const getMenuData = async () => {
  const response = await api().get<IMenu>('/menu');
  return response.data;
}