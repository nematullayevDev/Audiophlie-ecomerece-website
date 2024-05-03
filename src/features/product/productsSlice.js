import { createSlice } from "@reduxjs/toolkit";
import allProducts from "../../../data/db.json";

const initialState = {
  products: allProducts,
};

export const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    increment: (state, { payload }) => {
      const item = state.products.find((product) => {
        return product.id == payload;
      });
      if (item) {
        item.amount += 1;
      }
    },
    decrement: (state, { payload }) => {
      const item = state.products.find((product) => {
        return product.id == payload;
      });
      if (item) {
        item.amount -= 1;
      }
    },
  },
});

export const { increment, decrement } = productsSlice.actions;
export default productsSlice.reducer;
