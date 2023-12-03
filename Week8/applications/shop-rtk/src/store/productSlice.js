import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  products: [],
  loadingProducts: false,
  error: null,
  productDetails: {},
  loadingProductDetails: false,
};

export const fetchProductByCategory = createAsyncThunk(
  'products/fetchProductByCategory',
  async (category) => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${category}`
    );
    return response.data;
  }
);

export const fetchProductDetails = createAsyncThunk(
  'products/fetchProductDetails',
  async (productId) => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );
    return response.data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //categories loading states
    builder
      .addCase(fetchProductByCategory.pending, (state) => {
        state.loadingProducts = true;
      })
      .addCase(fetchProductByCategory.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loadingProducts = false;
      })
      .addCase(fetchProductByCategory.rejected, (state, action) => {
        state.loadingProducts = false;
        state.error = action.error.message;
      })
      .addCase(fetchProductDetails.pending, (state) => {
        state.loadingProductDetails = true;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.productDetails = action.payload;
        state.loadingProductDetails = false;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.error = action.error.message;
        state.loadingProductDetails = false;
      });
  },
});

export default productsSlice.reducer;
