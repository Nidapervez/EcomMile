<<<<<<< HEAD
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

=======
// store/slices/cart.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

>>>>>>> 29ad70cce942727eb8f0464d0b19ae439c116da5
interface CartState {
    name: string;
    category: string;
    qty: number;
<<<<<<< HEAD
    image: string;
    price: number;
=======
    price: number; // New price property
>>>>>>> 29ad70cce942727eb8f0464d0b19ae439c116da5
}

const initialState: CartState[] = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart(state, { payload }: PayloadAction<CartState>) {
<<<<<<< HEAD
            // Find the item in the cart by unique properties like name and category
            const existingItem = state.find(
                val => val.name === payload.name && val.category === payload.category
            );

            if (existingItem) {
                // If the item already exists, increase its quantity
                existingItem.qty += payload.qty;
            } else {
                // If it's a new item, add it to the cart
                state.push(payload);
            }
        },
        updateCartQty(state, action: PayloadAction<{ name: string; category: string; qty: number }>) {
            const item = state.find(
                val => val.name === action.payload.name && val.category === action.payload.category
            );
            if (item) {
                item.qty = Math.max(1, item.qty + action.payload.qty);
            }
        },
        deleteCart(state, action: PayloadAction<{ name: string; category: string }>) {
            return state.filter(
                val => !(val.name === action.payload.name && val.category === action.payload.category)
            );
=======
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
>>>>>>> 29ad70cce942727eb8f0464d0b19ae439c116da5
        },
    },
});

<<<<<<< HEAD
// Exporting the actions to be used in components
export const { addCart, updateCartQty, deleteCart } = cartSlice.actions;
// Default export of the reducer to be used in the store
=======
export const { addCart, deleteCart } = cartSlice.actions;
>>>>>>> 29ad70cce942727eb8f0464d0b19ae439c116da5
export default cartSlice.reducer;
