import { IBurgerRestaurant } from './interfaces';

const baseÙRL = 'https://cdn-dev.preoday.com/challenge';

export default function api() {
  return {
    get: async <T>(url: string) => {
      const response: { json: () => Promise<T> } = await fetch(`${baseÙRL}/${url}`);

      const data = await response.json();

      return { data };
    },
  };
}
