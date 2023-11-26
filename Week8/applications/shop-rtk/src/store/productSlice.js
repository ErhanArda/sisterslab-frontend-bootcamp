import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  categories: [],
  products: [],
  loadingCategories: false,
  loadingProducts: false,
  error: null,
  defaultCategory: 'electronics',
  productDetails: {},
  loadingProductDetails: false,
};

export const fetchCategories = createAsyncThunk(
  'products/fetchCategories',
  async () => {
    const response = await axios.get(
      'https://fakestoreapi.com/products/categories'
    );
    return response.data;
  }
);

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
      .addCase(fetchCategories.pending, (state) => {
        state.loadingCategories = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.loadingCategories = false;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loadingCategories = false;
        state.error = action.error.message;
      })
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
