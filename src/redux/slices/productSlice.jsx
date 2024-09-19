import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunk để lấy danh sách sản phẩm
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fetch('https://shop.cyberlearn.vn/api/Product');
    const data = await response.json();
    return data.content || []; // Trả về danh sách sản phẩm
});

// Thunk để lấy chi tiết sản phẩm dựa trên ID
export const fetchProductDetail = createAsyncThunk('products/fetchProductDetail', async (id) => {
    const response = await fetch(`https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`);
    const data = await response.json();
    return data.content || {}; // Trả về chi tiết sản phẩm
});

const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: [], // Dữ liệu cho danh sách sản phẩm
        productDetail: {}, // Dữ liệu cho chi tiết sản phẩm
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Xử lý fetchProducts (lấy danh sách sản phẩm)
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload; // Lưu danh sách sản phẩm vào state
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            
            // Xử lý fetchProductDetail (lấy chi tiết sản phẩm)
            .addCase(fetchProductDetail.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProductDetail.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.productDetail = action.payload; // Lưu chi tiết sản phẩm vào state
            })
            .addCase(fetchProductDetail.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default productSlice.reducer;
