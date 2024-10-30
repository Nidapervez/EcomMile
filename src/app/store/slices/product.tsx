// store/slices/product.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductState {
    name: string;
    category: string;
    qty: number;
    image: string;
    price: number;  // New price property
}

const initialState: ProductState[] = [
    { name: "shoes", category: "bata", qty: 2, image: "https://img.freepik.com/premium-photo/stylish-handsome-boy-portrait_1046319-115661.jpg?semt=ais_hybrid", price: 50 },
    { name: "clothes", category: "silk", qty: 3, image: "https://img.freepik.com/premium-photo/stylish-handsome-boy-portrait_1046319-115661.jpg?semt=ais_hybrid", price: 100 },
    { name: "glasses", category: "gucci", qty: 4, image: "https://img.freepik.com/premium-photo/stylish-handsome-boy-portrait_1046319-115661.jpg?semt=ais_hybrid", price: 150 }
];

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct(state, action: PayloadAction<ProductState>) {
            state.push(action.payload);
        },
        deleteProduct(state, action: PayloadAction<number>) {
            state.splice(action.payload, 1);
        },
    },
});

export const { addProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
