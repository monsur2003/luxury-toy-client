import React, { useEffect, useState } from "react";

import "react-awesome-slider/dist/styles.css";
import banner from "../../../assets/banner/banner.jpg";

const Banner = () => {
   return (
      <div
         className={`banner  md:h-[90vh]  bg-cover bg-center`}
         data-aos="zoom-in"
         style={{
            backgroundImage: `url(${banner})`,
         }}>
         <div className=" bg-gradient-to-tr from-[#090834ec] to-[#00000055] w-full h-full">
            {" "}
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
               <div className="flex flex-col items-center md:pt-28 justify-center">
                  <h1 className="text-4xl lilita tracking-widest text-gray-200  md:text-5xl lg:text-6xl font-bold text-center mb-6">
                     Explore Our Exquisite <br /> Toy Cars Collection
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl text-white text-center mb-10">
                     Discover the Finest Selection of High-End Toy Cars
                  </p>
                  <a href="#" className="btn btn-primary animate-bounce">
                     Shop Now
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;
