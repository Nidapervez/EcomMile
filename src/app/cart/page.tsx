"use client";

// src/app/components/Cartc.tsx
import React from 'react';
import CartList from '../components/cartList';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import OrderConfirmationButton from '@/app/components/confirmationbutton'; // Import the OrderConfirmationButton

const Cartc = () => {
  return (
    <div>
      <Navbar />
      
      <CartList />
      <OrderConfirmationButton /> {/* Render the button here */}
      
      <Footer />
    </div>
  );
};

export default Cartc;
