// Caegory Components interfaces
export interface Category {
  id: number;
  name: string;
  image: any;
}

// Featured Components interfaces
export interface FeaturedRowProps {
  title: string;
  description: string;
  restaurants: any[];
}

export interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: any;
}

export interface Restaurant {
  id: number;
  name: string;
  image: any;
  rating: number;
  reviews: number;
  dishes: Dish[];
  category: string;
  address: string;
}
export interface RestaurantCardProps {
  item: Restaurant; // Restaurant interface
}
