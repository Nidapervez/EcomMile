<<<<<<< HEAD
"use client";
import React from 'react';
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { deleteCart, updateCartQty } from "../store/slices/cart";

const CartList = () => {
    // Make sure you are using the correct state name
    const cart = useAppSelector(state => state.cartArray); // Ensure this matches your state slice
    const dispatch = useAppDispatch();

    // Calculate total price
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

    const handleIncrement = (item) => {
        dispatch(updateCartQty({ name: item.name, category: item.category, qty: 1 }));
    };

    const handleDecrement = (item) => {
        if (item.qty > 1) {
            dispatch(updateCartQty({ name: item.name, category: item.category, qty: -1 }));
        } else {
            dispatch(deleteCart({ name: item.name, category: item.category }));
        }
    };

    return (
        <div>
            <h1>Cart</h1>
            <div className='grid grid-cols-3 gap-10 mt-14 p-11'>
                {cart.map((val) => (
                    <div key={`${val.name}-${val.category}`} className='relative border rounded-md overflow-hidden bg-black transform hover:scale-105 transition duration-300 p-4 text-white'>
                        <img 
                            src={val.image} 
                            alt={val.name} 
                            className='w-full h-64 object-cover mb-2' 
                        />
                        <div className='flex justify-between items-center mb-2'>
                            <div>
                                <button onClick={() => handleDecrement(val)} className="bg-orange-700 text-white rounded-sm mx-1 w-10">-</button>
                                Qty: {val.qty}
                                <button onClick={() => handleIncrement(val)} className="bg-green-500 text-white rounded-sm mx-1 w-10">+</button>
                            </div>
                            <button onClick={() => dispatch(deleteCart({ name: val.name, category: val.category }))} className='bg-orange-700 w-60 text-white rounded-xl'>Delete</button>
                        </div>
                        <h2 className='text-lg font-semibold'>{val.name}</h2>
                        <p>{val.category}</p>
                        <p>Price: ${val.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
            <h2 className="mt-4 bg-orange-700 w-96 ml-96 text-white text-xl font-semibold p-4 rounded-md shadow-lg text-center transform hover:scale-105 transition duration-300">
                Total Price: ${totalPrice.toFixed(2)}
            </h2>
        </div>
    );
};

=======
// components/CartList.tsx

"use client";
import React from 'react';
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { deleteCart } from "../store/slices/cart";

const CartList = () => {
    const cart = useAppSelector(state => state.cartArray);
    const dispatch = useAppDispatch();

    // Calculate total price
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

    return (
        <div>
            <h1>Cart</h1>
            {cart.map((val, i) => (
                <div key={i} className="grid grid-cols-4 gap-4">
                    <div>{val.name}</div>
                    <div>{val.category}</div>
                    <div>Qty: {val.qty}</div>
                    <div>Price: ${val.price}</div>
                    <div>
                        <button onClick={() => dispatch(deleteCart(val.name))}
                            className='bg-black text-white rounded-sm w-32 m-4'>Delete from Cart</button>
                    </div>
                </div>
            ))}

            <h2 className="mt-4">Total Price: ${totalPrice.toFixed(2)}</h2> {/* Display total price */}
        </div>
    );
};

>>>>>>> 29ad70cce942727eb8f0464d0b19ae439c116da5
export default CartList;
