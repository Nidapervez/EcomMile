import Image from "next/image";
import image from "@/app/public/images/nidz.jpg"; 


export default function Footer() {
    return (
      <footer className="text-white body-font bg-black">
        <div className="container px-5 py-16 mx-auto flex flex-col md:flex-row md:items-start">
          <div className="w-full md:w-1/4 flex-shrink-0 mx-auto text-center md:text-left mb-10 md:mb-0">
            <a className="flex title-font font-medium items-center justify-center md:justify-start text-white">
            <Image src={image} alt="Blog Image" height={50} width={50} />
              <span className="ml-3 text-xl">NidzWeb</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">
              Your go-to place for web solutions.
            </p>
          </div>
          
          <div className="flex-grow flex flex-wrap md:pl-20 ">
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 ">
              <h2 className="title-font font-medium text-white tracking-widest  mb-3 text-3xl font-mono">
                LINKS
              </h2>
              <nav className="flex space-x-16 mb-10  text-xl font-mono ">
                <li>
                  <a 
                    href="https://second-mile-stone-96sf.vercel.app/project" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white hover:text-gray-800"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/Nidapervez" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white hover:text-gray-800"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/in/nida-pervez-8468202b6/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white hover:text-gray-800"
                  >
                    LinkedIn
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-200">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-white text-sm text-center sm:text-left">
              Contact: <a href="mailto:nnpervez333@gmail.com" className="text-gray-600 hover:text-gray-800">nnpervez333@gmail.com</a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
  