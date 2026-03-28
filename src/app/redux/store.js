
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import favReducer from "./features/favSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    fav: favReducer,
  }
});