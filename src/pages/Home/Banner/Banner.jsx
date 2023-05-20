import React, { useEffect, useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import background1 from "../../../assets/banner/banner-4 (1).jpg";
import background2 from "../../../assets/banner/banner-2.jpg";
import background3 from "../../../assets/banner/banner-3.jpg";
import { FaPhone } from "react-icons/fa";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {
   const [activeImageIndex, setActiveImageIndex] = useState(0);
   const backgroundImages = [background1, background2, background3];
   const animationClasses = [
      "animate-fadeIn",
      "animate-slideInLeft",
      "animate-slideInRight",
   ];
   const changeBackgroundImage = () => {
      const newIndex = (activeImageIndex + 1) % backgroundImages.length;
      setActiveImageIndex(newIndex);
   };
   useEffect(() => {
      const timer = setInterval(changeBackgroundImage, 2000);

      return () => {
         clearInterval(timer);
      };
   }, []);

   return (
      <div
         className={`banner bg-cover bg-center ${animationClasses[activeImageIndex]} transition duration-500`}
         style={{
            backgroundImage: `url(${backgroundImages[activeImageIndex]})`,
         }}>
         <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center">
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6">
                  Explore Our Exquisite Toy Cars Collection
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
   );
};

export default Banner;
