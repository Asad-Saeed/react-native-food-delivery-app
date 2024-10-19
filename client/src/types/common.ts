import { RestaurantItem } from "./home";

export type RootStackParamList = {
  Restaurant: { item: RestaurantItem };
  // Add other screens here
};

export interface NoDataPlaceholderProps {
  message?: string;
  onRetry?: () => void;
  retryText?: string;
}
