import { createSlice } from "@reduxjs/toolkit";

const toggleCart = createSlice({
  name: "toggle",
  initialState: { cartIsVisible: false },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const toggleAction = toggleCart.actions;

export default toggleCart;
