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
  stars: number;
  image: any;
}

export interface RestaurantItem {
  id: number;
  name: string;
  image: any;
  stars: number;
  reviews: number;
  dishes: Dish[];
  category: string;
  address: string;
  description: string;
}
export interface RestaurantCardProps {
  item: RestaurantItem; // Restaurant item interface
}
