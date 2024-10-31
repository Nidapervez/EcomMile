// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cart'; // Ensure the path to cart slice is correct

// Configure the Redux store
const store = configureStore({
    reducer: {
        cart: cartReducer, // Add the cart reducer to the store
    },
});

// Define types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Export the store as default
export default store;
