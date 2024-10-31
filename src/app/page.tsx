<<<<<<< HEAD
import styles from "./page.module.css";

import Footer from "./components/footer";
import HeroSection from "./components/herosection";
import Navbar from "./components/navbar";
import image from "@/app/public/images/back.jpg"

import Image from "next/image";

=======

import CartList from "./components/cartList";

import ProductList from "./components/productList";
>>>>>>> 29ad70cce942727eb8f0464d0b19ae439c116da5


export default function Home() {

  return (
<<<<<<< HEAD
    <div className="">
       <Navbar/>
 <div className={styles.box}> {/* Use the imported styles */}
        <div className={styles.img}> {/* Correct usage of CSS module */}
          <Image src={image} alt="Blog Image"  />
          <div className={styles.content}><h1></h1><br/>
          <p className="text-5xl font-mono text-center mt-28 ">Cakes bring a slice of happiness to every celebration, layered with flavors and frosted with love</p></div>
        </div>
      </div>
     {/* <Hero/> */}
    
      <HeroSection/>
    
      <Footer/>
    
     
=======
    <div className="p-5">
      
    
      <ProductList/>
      <h1 className="mt-24 text-center font-extrabold bg-pink-700">Cart list</h1>
      <CartList/>
>>>>>>> 29ad70cce942727eb8f0464d0b19ae439c116da5
    </div>
  );
}
