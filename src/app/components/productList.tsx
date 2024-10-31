"use client";
import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { addCart } from '../store/slices/cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';

const ProductList = () => {
    const products = useAppSelector(state => state.productArray);
    const dispatch = useAppDispatch();

    const handleAddToCart = (item) => {
        dispatch(addCart(item));
        toast.success('Your item has been added to the cart!');
    };

    return (
        <div className="p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.map((item, i) => (
                    <div 
                        key={i} 
                        className="border border-gray-200 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 bg-white"
                    >
                        <Image 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-5">
                            <h1 className="text-xl font-bold text-gray-800">{item.name}</h1>
                            <p className="text-gray-600">Category: {item.category}</p>
                            <p className="text-gray-600">Qty: {item.qty}</p>
                            <p className="text-lg font-semibold text-orange-700">Price: ${item.price}</p>
                            <button 
                                onClick={() => handleAddToCart(item)} 
                                className="mt-4 bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-lg w-full transition duration-300"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
        </div>
    );
};

export default ProductList;
