import api from './api';
import { IRestaurant, IMenu } from './interfaces';

export const getRestaurantData = async () => {
  const response = await api().get<IRestaurant>('/venue/9');
  return response.data;
}

export const getMenuData = async () => {
  const response = await api().get<IMenu>('/menu');
  return response.data;
}