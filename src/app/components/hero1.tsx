import React from 'react';
// import { Button } from '@/components/ui/button';
// import { AiFillShopping } from 'react-icons/ai';

const Hero = () => {
  return (
    <div className="mb-[100px]">
      <div className="hero min-h-[80vh] custom-img flex items-center justify-center bg-fixed">
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md mx-auto">
            <h1 className="mb-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Nidz <span className="text-orange-600">Apparel</span>
            </h1>
            <p className="mb-5 scroll-m-20 text-xl font-semibold tracking-tight">
              Update your wardrobe with stylish and modern clothing.
            </p>
            {/* <Button className="outline outline-offset-2 outline-1 text-white rounded-2xl group hover:rounded-3xl duration-300 hover:outline-orange-600">
              <AiFillShopping className="mr-2 h-6 w-6 group-hover:text-orange-600 group-hover:animate-bounce" />
              Shop Now
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

