import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
    name: string;
    category: string;
    qty: number;
    image: string;
    price: number;
}

const initialState: CartState[] = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart(state, { payload }: PayloadAction<CartState>) {
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
        },
    },
});

// Exporting the actions to be used in components
export const { addCart, updateCartQty, deleteCart } = cartSlice.actions;
// Default export of the reducer to be used in the store
export default cartSlice.reducer;
