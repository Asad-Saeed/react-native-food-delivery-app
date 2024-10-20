import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cart";
import restaurantReducer from "./slices/restaurant";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    restaurant: restaurantReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
