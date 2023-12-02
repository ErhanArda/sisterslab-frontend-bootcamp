import { createSlice } from '@reduxjs/toolkit';

// const isBrowser = () => typeof window !== undefined;

const saveToLocaleStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const fetchFromLocalStorage = () => {
  const cart = localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(cart);
  }
  return [];
};
// const saveToLocaleStorage = (cart) => {
//     if (isBrowser) {
//       localStorage.setItem('cart', JSON.stringify(cart));
//     }
//   };

// export const fetchFromLocalStorage = () => {
//   if (isBrowser) {
//     const cart = localStorage.getItem('cart');
//     if (cart) {
//       return JSON.parse(cart);
//     }
//   }
//   return [];
// };

const initialState = {
  cart: [],
  itemCount: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, count } = action.payload;
      const product = state.cart.find((item) => item.id === id);
      if (product) {
        product.count += count;
      } else {
        state.cart.push(action.payload);
      }
      state.itemCount += count;
      saveToLocaleStorage(state.cart);
    },
    updateCart: (state, action) => {
      const cartItems = action.payload;
      state.cart = cartItems;
      state.itemCount = cartItems.reduce(
        (total, item) => total + item.count,
        0
      );
    },
  },
});

export const { addToCart, updateCart } = cartSlice.actions;
export default cartSlice.reducer;
