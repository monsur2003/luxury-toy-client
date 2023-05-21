import React, { useEffect, useState } from "react";

import image1 from "../../../../assets/gallery/gallery (1).jpg";
import image2 from "../../../../assets/gallery/gallery (2).jpg";
import image3 from "../../../../assets/gallery/gallery (3).jpg";
import image4 from "../../../../assets/gallery/gallery (4).jpg";
import image5 from "../../../../assets/gallery/gallery (5).jpg";
import image6 from "../../../../assets/gallery/gallery (6).jpg";
import image7 from "../../../../assets/gallery/gallery (7).jpg";
import image8 from "../../../../assets/gallery/gallery (8).jpg";
import image9 from "../../../../assets/gallery/gallery (9).jpg";
import image10 from "../../../../assets/gallery/gallery (10).jpg";
import image11 from "../../../../assets/gallery/gallery (11).jpg";
import image12 from "../../../../assets/gallery/gallery (12).jpg";
import image13 from "../../../../assets/gallery/gallery (13).jpg";
// import GalleryCard from "./GalleryCard";

const Gallery = () => {
   return (
      <>
         <div className="mt-16 w-[100%] mx-auto">
            <div className="text-center mb-6">
               <h2 className="text-5xl lilita tracking-widest ">
                  Our Cars Gallery
               </h2>

               <p className="py-2 text-white font-semibold">
                  Welcome to our enchanting Teddy Gallery! Explore a delightful
                  collection <br /> of cars that will warm your heart.
               </p>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
               <div class="grid gap-4">
                  <div data-aos="fade-down-right">
                     <img
                        className="h-auto max-w-full rounded-lg"
                        src={image2}
                        alt=""
                     />
                  </div>
                  <div data-aos="flip-left">
                     <img
                        className="h-auto max-w-full rounded-lg"
                        src={image1}
                        alt=""
                     />
                  </div>
                  <div data-aos="flip-down">
                     <img
                        className="h-auto max-w-full rounded-lg"
                        src={image3}
                        alt=""
                     />
                  </div>
               </div>
               <div class="grid gap-4">
                  <div data-aos="flip-right">
                     <img
                        className="h-auto max-w-full rounded-lg"
                        src={image4}
                        alt=""
                     />
                  </div>
                  <div data-aos="zoom-in">
                     <img
                        className="h-auto max-w-full rounded-lg"
                        src={image5}
                        alt=""
                     />
                  </div>
                  <div data-aos="zoom-in-down">
                     <img
                        className="h-auto max-w-full rounded-lg"
                        src={image7}
                        alt=""
                     />
                  </div>
               </div>
               <div class="grid gap-4">
                  <div data-aos="zoom-in-left">
                     <img
                        className="h-auto max-w-full rounded-lg"
                        src={image6}
                        alt=""
                     />
                  </div>
                  <div data-aos="zoom-in-left">
                     <img
                        className="h-auto max-w-full rounded-lg"
                        src={image9}
                        alt=""
                     />
                  </div>
                  <div data-aos="zoom-in-left">
                     <img
                        className="h-auto max-w-full rounded-lg"
                        src={image10}
                        alt=""
                     />
                  </div>
               </div>
               <div class="grid gap-4">
                  <div data-aos="zoom-in-left">
                     <img
                        className="h-auto max-w-full rounded-lg"
                        src={image11}
                        alt=""
                     />
                  </div>
                  <div data-aos="zoom-out-up">
                     <img
                        className="h-auto max-w-full rounded-lg"
                        src={image12}
                        alt=""
                     />
                  </div>
                  <div data-aos="fade-up" data-aos-duration="3000">
                     <img
                        className="h-auto max-w-full rounded-lg"
                        src={image13}
                        alt=""
                     />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Gallery;
