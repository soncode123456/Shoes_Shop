import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice'; // Chú ý import đúng

export const store = configureStore({
  reducer: {
    products: productReducer, // Đăng ký productReducer
  },
});
