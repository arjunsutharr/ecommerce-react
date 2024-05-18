import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  cart: [],
};

export const addToCart = createAsyncThunk("cart/addToCart", async (product) => {
  try {
    const response = await axios.post(
      `https://my-json-server.typicode.com/arjunsutharr/demo/cart`,
      product
    );
    toast.success("Product added to cart.");
    return response.data;
  } catch (error) {
    toast.error("Error while adding product to cart.");
    throw error;
  }
});

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.cart.push(action.payload);
    });
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
export const cartSelector = (state) => state.cartReducer;
