import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  products: [],
  loadingCategories: false,
  loadingProducts: false,
  error,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
