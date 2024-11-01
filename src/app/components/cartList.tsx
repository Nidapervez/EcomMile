"use client";
import React from 'react';
import Image from 'next/image';
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { deleteCart, updateCartQty } from "../store/slices/cart";

interface CartItem {
    name: string;
    category: string;
    qty: number;
    price: number;
    image: string;
}

const CartList = () => {
    const cart = useAppSelector(state => state.cartArray);
    const dispatch = useAppDispatch();

    const totalPrice = cart.reduce((acc, item: CartItem) => acc + item.price * item.qty, 0);

    const handleIncrement = (item: CartItem) => {
        dispatch(updateCartQty({ name: item.name, category: item.category, qty: 1 }));
    };

    const handleDecrement = (item: CartItem) => {
        if (item.qty > 1) {
            dispatch(updateCartQty({ name: item.name, category: item.category, qty: -1 }));
        } else {
            dispatch(deleteCart({ name: item.name, category: item.category }));
        }
    };

    return (
        <div>
            <h1 className="text-2xl font-bold text-center"></h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 p-4">
                {cart.map((val: CartItem) => (
                    <div key={`${val.name}-${val.category}`} className="relative border rounded-md overflow-hidden bg-black transform hover:scale-105 transition duration-300 p-4 text-white">
                        <Image 
                            src={val.image} 
                            alt={val.name} 
                            width={500}
                            height={500}
                            className="w-full h-40 sm:h-64 object-cover mb-2" 
                        />
                        <div className="flex flex-col sm:flex-row justify-between items-center mb-2">
                            <div className="flex items-center space-x-2">
                                <button onClick={() => handleDecrement(val)} className="bg-orange-700 text-white rounded-sm w-8 sm:w-10">-</button>
                                <span>Quantity: {val.qty}</span>
                                <button onClick={() => handleIncrement(val)} className="bg-green-500 text-white rounded-sm w-8 sm:w-10">+</button>
                            </div>
                            <button onClick={() => dispatch(deleteCart({ name: val.name, category: val.category }))} className="bg-orange-700 w-full sm:w-60 mt-2 sm:mt-0 text-white rounded-xl">Delete</button>
                        </div>
                        <h2 className="text-lg font-semibold">{val.name}</h2>
                        <p>{val.category}</p>
                        <p>Price: ${val.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
            <h2 className="mt-6 bg-orange-700 w-full sm:w-96 mx-auto text-white text-lg font-semibold p-4 rounded-md shadow-lg text-center transform hover:scale-105 transition duration-300">
                Total Price: ${totalPrice.toFixed(2)}
            </h2>
        </div>
    );
};

export default CartList;
