import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemInCart: ["hello", "its array created by redux"],
  },
  reducers: {
    setItemInCart: (state, action) => {
      state.itemInCart.push(action.payload);
    },
    deleteItemsFromCart: (state, action) => {
      state.itemInCart = state.itemInCart.filter(
        (game) => game.id !== action.payload
      );
    },
  },
});
export const { setItemInCart, deleteItemsFromCart } = cartSlice.actions;
export default cartSlice.reducer;
