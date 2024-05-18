import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  products: [],
  productDetailsForUpdate: {},
  loading: false,
  singleProduct: undefined,
  error: undefined,
  sortedProducts: [],
};

export const getAllProducts = createAsyncThunk(
  "product/getAllProducts",
  async () => {
    const reponse = await axios.get(
      "https://my-json-server.typicode.com/arjunsutharr/demo/products"
    );

    return reponse.data;
  }
);

export const getOneProduct = createAsyncThunk(
  "product/getOneProduct",
  async (productId) => {
    const reponse = await axios.get(
      `https://my-json-server.typicode.com/arjunsutharr/demo/products/${productId}`
    );

    return reponse.data;
  }
);

export const removeProduct = createAsyncThunk(
  "product/removeProduct",
  async (productId) => {
    await axios.delete(
      `https://my-json-server.typicode.com/arjunsutharr/demo/products/${productId}`
    );

    toast.success("Product removed successfully.");

    return productId;
  }
);

export const updateProductDetails = createAsyncThunk(
  "product/editProductDetails",
  async (updatedProduct) => {
    try {
      await axios.put(
        `https://my-json-server.typicode.com/arjunsutharr/demo/products/${updatedProduct.id}`,
        updatedProduct
      );

      toast.success("Product details got updated.");

      return updatedProduct;
    } catch (error) {
      toast.error(
        "We are using fake api in backend so newly added product data will not be presistent. operations such update, delete will not be performed on that"
      );
      throw error;
    }
  }
);

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (newProduct) => {
    try {
      const response = await axios.post(
        `https://my-json-server.typicode.com/arjunsutharr/demo/products`,
        newProduct
      );
      toast.success("New product added.");
      return response.data;
    } catch (error) {
      toast.error("Product not found.");
      throw error;
    }
  }
);

const sortProductsByPrice = (selectedValue, products) => {
  if (selectedValue === "priceAccending") {
    return products.slice().sort((a, b) => a.price - b.price);
  } else {
    return products.slice().sort((a, b) => b.price - a.price);
  }
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUpdatingProductDetails: (state, action) => {
      state.productDetailsForUpdate = action.payload;
    },
    updateTitile: (state, action) => {
      state.productDetailsForUpdate.title = action.payload;
    },
    updateDescription: (state, action) => {
      state.productDetailsForUpdate.description = action.payload;
    },
    updatePrice: (state, action) => {
      state.productDetailsForUpdate.price = action.payload;
    },
    updateRating: (state, action) => {
      state.productDetailsForUpdate.rating = action.payload;
    },
    updateImageUrl: (state, action) => {
      state.productDetailsForUpdate.img = action.payload;
    },
    sortProducts: (state, action) => {
      if (action.payload === "reset") {
        state.sortedProducts = [];
      } else {
        state.sortedProducts = sortProductsByPrice(
          action.payload,
          state.products
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.products = [...action.payload];
        state.loading = false;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(removeProduct.fulfilled, (state, action) => {
        const productId = action.payload;
        state.products = state.products.filter(
          (product) => product.id !== productId
        );
      })
      .addCase(updateProductDetails.fulfilled, (state, action) => {
        const updatedProduct = action.payload;
        state.products = state.products.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        );
        state.productDetailsForUpdate = {};
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
        state.productDetailsForUpdate = {};
      })
      .addCase(getOneProduct.fulfilled, (state, action) => {
        state.error = undefined;
        state.singleProduct = action.payload;
        state.loading = false;
      })
      .addCase(getOneProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const productReducer = productSlice.reducer;
export const productActions = productSlice.actions;
export const productSelector = (state) => state.productReducer;
