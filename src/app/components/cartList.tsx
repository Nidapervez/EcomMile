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

export default CartList;
