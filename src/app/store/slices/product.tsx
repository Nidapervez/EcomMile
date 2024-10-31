// store/slices/product.ts
<<<<<<< HEAD
import Image1 from '@/app/public/images/5.jpg';
import Image2 from '@/app/public/images/14.jpg';
import Image3 from '@/app/public/images/9.jpg';
import Image4 from '@/app/public/images/16.jpg';
import Image5 from '@/app/public/images/4.jpg';
import Image6 from '@/app/public/images/8.jpg';
import Image7 from '@/app/public/images/13.jpg';
import Image8 from '@/app/public/images/12.jpg';
import Image9 from '@/app/public/images/2.jpg';
=======
>>>>>>> 29ad70cce942727eb8f0464d0b19ae439c116da5

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductState {
    name: string;
    category: string;
    qty: number;
    image: string;
    price: number;  // New price property
}

const initialState: ProductState[] = [
<<<<<<< HEAD
    { name: "LightPink Cake", category: "Creamy", qty: 1, image: Image1.src, price: 250 },
    { name: "Rounded Strawberry Cake", category: "Creamy", qty: 1, image: Image2.src, price: 100 },
    { name: "Chocolate Tower Cake", category: "Chocolate", qty: 1, image: Image3.src, price: 250 },
    { name: "Chocolate Malt Cake", category: "Chocolate", qty: 1, image: Image4.src, price: 350 },
    { name: "The Classical Cake", category: "Creamy Chocolate", qty: 1, image: Image5.src, price: 450 },
    { name: "Plum Cake", category: "Creamy", qty: 1, image: Image6.src, price: 150 },
    { name: "Strawberry Sprinkle Cake", category: "Creamy", qty: 1, image: Image7.src, price: 150 },
    { name: "Slicer Cake", category: "Creamy", qty: 1, image: Image8.src, price: 450 },
    { name: "Customized Cherry Cake", category: "Choclate", qty: 1, image: Image9.src, price: 650 }
=======
    { name: "shoes", category: "bata", qty: 2, image: "https://img.freepik.com/premium-photo/stylish-handsome-boy-portrait_1046319-115661.jpg?semt=ais_hybrid", price: 50 },
    { name: "clothes", category: "silk", qty: 3, image: "https://img.freepik.com/premium-photo/stylish-handsome-boy-portrait_1046319-115661.jpg?semt=ais_hybrid", price: 100 },
    { name: "glasses", category: "gucci", qty: 4, image: "https://img.freepik.com/premium-photo/stylish-handsome-boy-portrait_1046319-115661.jpg?semt=ais_hybrid", price: 150 }
>>>>>>> 29ad70cce942727eb8f0464d0b19ae439c116da5
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
