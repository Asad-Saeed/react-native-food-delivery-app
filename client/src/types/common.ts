import { ReactNode } from "react";
import { RestaurantItem } from "./home";

export type RootStackParamList = {
  Home: undefined;
  Restaurant: { item: RestaurantItem };
  Cart: undefined;
  // Add other screens here
};

export interface NoDataPlaceholderProps {
  message?: string;
  onRetry?: () => void;
  retryText?: string;
}

export interface LayoutWrapperProps {
  children: ReactNode;
}
