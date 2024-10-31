"use client";
import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import { useAppSelector } from "../store/hooks";
import image from "@/app/public/images/nidz.jpg";

const Navbar = () => {
  // Ensure you are accessing the correct slice of state
  const cartItemCount = useAppSelector(state =>
    state.cartArray?.reduce((acc, item) => acc + item.qty, 0) || 0 // Change to state.cartArray
  );

  return (
    <header className="text-white bg-black font-mono text-4xl">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image src={image} alt="NidzWEb Logo" height={50} width={50} />
          <span className="ml-3 text-white font-mono text-2xl">NidzWEb</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center space-x-16">
          <Link href="/" className="hover:text-gray-900 transition duration-300 ease-in-out text-2xl">Home</Link>
          <Link href="/product" className="hover:text-gray-900 transition duration-300 ease-in-out text-2xl">Shop</Link>
          <Link href="/about" className="hover:text-gray-900 transition duration-300 ease-in-out text-2xl">About</Link>
          <Link href="/contact" className="hover:text-gray-900 transition duration-300 ease-in-out text-2xl">Contact</Link>
          <Link href="/cart" className="relative hover:text-gray-900 transition duration-300 ease-in-out text-2xl">
            <FaShoppingCart className="text-2xl" />
            {cartItemCount > 0 && (
              <span className="absolute -top-3 -right-3 bg-orange-500 text-white rounded-full text-sm w-6 h-6 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
