// components/ProductList.tsx

"use client";
import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { addProduct } from '../store/slices/product';
import { addCart } from '../store/slices/cart';
<<<<<<< HEAD
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
=======
>>>>>>> 29ad70cce942727eb8f0464d0b19ae439c116da5

const ProductList = () => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [qty, setQty] = useState(0);
    const [image, setImage] = useState("");
<<<<<<< HEAD
    const [price, setPrice] = useState(0);
=======
    const [price, setPrice] = useState(0);  // New state for price
>>>>>>> 29ad70cce942727eb8f0464d0b19ae439c116da5

    const products = useAppSelector(state => state.productArray);
    const dispatch = useAppDispatch();

<<<<<<< HEAD
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
=======
    return (
        <div>
            <div className='grid grid-cols-5 gap-3 bg-green-300 w-[95%] mx-auto p-4 rounded-md'>
                <input type="text" placeholder="item name" className='bg-green-200 text-lg rounded-md'
                    value={name} onChange={(e) => setName(e.target.value)} />  
                <input type="text" placeholder="category" className='bg-green-200 text-lg rounded-md'
                    value={category} onChange={(e) => setCategory(e.target.value)} />  
                <input type="number" placeholder="qty" className='bg-green-200 text-lg rounded-md'
                    value={qty} onChange={(e) => setQty(Number(e.target.value))} />
                <input type="text" placeholder="image URL" className='bg-green-200 text-lg rounded-md'
                    value={image} onChange={(e) => setImage(e.target.value)} />
                <input type="number" placeholder="price" className='bg-green-200 text-lg rounded-md'
                    value={price} onChange={(e) => setPrice(Number(e.target.value))} />  {/* Input for price */}
                <button onClick={() => dispatch(addProduct({ name, category, qty, image, price }))}
                    className='bg-purple-900 rounded-md'>Add item</button>
            </div>

            <h1>Product List</h1>
            <div className='grid grid-cols-3 gap-4'>
                {products.map((item, i) => (
                    <div className='w-350 border rounded-md bg-purple-400' key={i}>
                        <img src={item.image} alt={item.name} className='w-full h-32 object-cover rounded-t-md' />
                        <h1>{item.name}</h1>
                        <p>{item.category}</p>
                        <p>Qty: {item.qty}</p>
                        <p>Price: ${item.price}</p> {/* Display price */}
                        <button onClick={() => dispatch(addCart(item))} className='bg-black text-white rounded-sm w-32 m-4'>Add to Cart</button>
                    </div>
                ))}
            </div>
>>>>>>> 29ad70cce942727eb8f0464d0b19ae439c116da5
        </div>
    );
};

export default ProductList;
