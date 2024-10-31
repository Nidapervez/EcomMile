import styles from "./page.module.css";

import Footer from "./components/footer";
import HeroSection from "./components/herosection";
import Navbar from "./components/navbar";
import image from "@/app/public/images/back.jpg"

import Image from "next/image";



export default function Home() {

  return (
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
    
     
    </div>
  );
}
