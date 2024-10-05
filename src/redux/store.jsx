import { configureStore, createReducer } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice'; // Chú ý import đúng
import cartReducer from './slices/cartSlice'; // Import cartReducer

export const store = configureStore({
  reducer: {
    products: productReducer, // Đăng ký productReducer
    cart: cartReducer, // Thêm reducer vào store
   
  },
});
