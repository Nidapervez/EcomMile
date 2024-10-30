// store/slices/cart.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
    name: string;
    category: string;
    qty: number;
    price: number; // New price property
}

const initialState: CartState[] = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart(state, { payload }: PayloadAction<CartState>) {
            const obj = state.find(val => val.name === payload.name);
            if (obj) {
                obj.qty += 1;
                const newState = state.filter(val => val.name !== obj.name);
                state.splice(0, state.length, ...newState, obj);
            } else {
                state.push(payload);
            }
        },
        deleteCart(state, action: PayloadAction<string>) {
            return state.filter(val => val.name !== action.payload);
        },
    },
});

export const { addCart, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
