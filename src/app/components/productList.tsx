// components/ProductList.tsx

"use client";
import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { addProduct } from '../store/slices/product';
import { addCart } from '../store/slices/cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductList = () => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [qty, setQty] = useState(0);
    const [image, setImage] = useState("");
    const [price, setPrice] = useState(0);

    const products = useAppSelector(state => state.productArray);
    const dispatch = useAppDispatch();

    const handleAddToCart = (item) => {
        dispatch(addCart(item));
        toast.success('Your item has been added to the cart!');
    };

    return (
        <div>
            <div className='grid grid-cols-3 gap-10 mt-14'>
                {products.map((item, i) => (
                    <div className='relative border rounded-md overflow-hidden bg-black w-350 transform hover:scale-105 transition duration-300' key={i}>
                        <img 
                            src={item.image} 
                            alt={item.name} 
                            className='w-full h-64 object-cover' 
                        />
                        <div className='p-4 bg-black bg-opacity-60 text-white space-y-2'>
                            <h1 className='text-lg font-semibold'>{item.name}</h1>
                            <p className='text-sm'>{item.category}</p>
                            <p className='text-sm'>Qty: {item.qty}</p>
                            <p className='text-lg font-bold'>Price: ${item.price}</p>
                            <button 
                                onClick={() => handleAddToCart(item)} 
                                className='bg-orange-700 text-white rounded-2xl w-full py-2 mt-4'
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
