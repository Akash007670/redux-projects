import { configureStore } from "@reduxjs/toolkit";
import toggleCart from "./toggle-cart";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: { toggle: toggleCart.reducer, cart: cartSlice.reducer },
});

export default store;
