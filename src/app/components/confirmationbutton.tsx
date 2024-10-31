import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OrderConfirmationButton = () => {
    const handleOrderConfirmation = () => {
        toast.success("Your order has been confirmed!", {
            position: "top-center", // Use a string instead of toast.POSITION.TOP_CENTER
            autoClose: 3000, // Auto close after 3 seconds
            hideProgressBar: true,
        });
    };

    return (
        <div className="flex justify-center items-center flex-col">
            <button
                onClick={handleOrderConfirmation}
                className="bg-green-500 text-white rounded-lg p-2 mt-5 hover:bg-green-600 transition duration-300 mr-[550px] w-96"
            >
             Press to Confirm Order
            </button>
            <ToastContainer />
        </div>
    );
};

export default OrderConfirmationButton;
