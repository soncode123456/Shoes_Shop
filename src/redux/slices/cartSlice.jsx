import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const existingItem = state.items.find((item) => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...product, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem) {
                existingItem.quantity = quantity;
            }
        },
    },
});

// Thêm selector để tính tổng số lượng sản phẩm trong giỏ hàng
export const selectTotalItems = (state) => {
    // Kiểm tra nếu state.cart hoặc state.cart.items không tồn tại
    if (!state.cart || !state.cart.items) {
        return 0;
    }
    return state.cart.items.reduce((total, item) => total + item.quantity, 0);
};
export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
