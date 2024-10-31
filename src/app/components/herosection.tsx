import Image from "next/image";
import Link from "next/link";
import pic from "@/app/public/images/1.jpg"
import pic1 from "@/app/public/images/00.jpg"
import pic2 from "@/app/public/images/15.jpg"
import pic3 from "@/app/public/images/10.jpg"
// import "@/app/global.css"

export default function HeroSection() {
  return (
    <section className="hero-section-bg bg-gradient-to-r from-navy to-cyan-500 py-16 px-4 mb-4">
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="text-5xl font-extrabold text-white  mb-4">
        Explore our top-selling cakes
        </h1>
        <p className="text-lg text-white mb-8">
          
Uncover our most popular cakes
        </p>

        <div className="flex justify-center flex-row space-x-8 ">
          <div className="bg-transparent shadow-lg  rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <Image
              src={pic}
              alt="Cake1"
              width={280}
              height={380}
              className="h-60 object-cover"
            />
          </div>

          <div className="hidden sm:block bg-transparent shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <Image
              src={pic1}
              alt="Cake 2"
              width={400}
              height={380}
              className="h-60 w-full object-cover "
            />
          </div>

          <div className="hidden sm:block bg-transparent shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <Image
              src={pic2}
              alt="Cake 3"
              width={400}
              height={380}
              className="h-60 w-96 object-cover "
            />
          </div>

          
          <div className="hidden sm:block bg-transparent shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <Image
              src={pic3}
              alt="Cake 4"
              width={280}
              height={380}
              className="h-60 object-cover mix-blend-hard-light"
            />
          </div>
        </div>

        <div className="mt-12">
          <Link href={"/product"} className="bg-purple-800 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-amber-600 transition duration-300">
            Available Cakes
          </Link>
        </div>
      </div>
    </section>
  );
}
