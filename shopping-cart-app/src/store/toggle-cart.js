import { createSlice } from "@reduxjs/toolkit";

const toggleCart = createSlice({
  name: "toggle",
  initialState: { cartIsVisible: false, notification: null },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.showNotification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const toggleAction = toggleCart.actions;

export default toggleCart;
