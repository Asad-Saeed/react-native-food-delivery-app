import { RestaurantItem } from "./home";

//  Cart Slice Types
export interface CartItem {
  id: string;
  name: string;
  description: string;
  price: number;
  stars: number;
  image: any;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

// Restaurant Slice Types
export interface RestaurantState {
  restaurant: RestaurantItem | null;
}
