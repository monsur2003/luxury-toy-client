import React from "react";
// import { useLoaderData } from "react-router-dom";
import video from "../../assets/banner/banner-4 (1).jpg";
import image from "../../assets/banner/banner-3.jpg";

const ViewDetails = () => {
   // const data = useLoaderData();
   // console.log();
   // const { name, price } = data;
   return (
      <div>
         <div className="relative">
            {/* Video */}
            <img
               className=" w-[100%] h-[100vh]  object-cover"
               src={video}
               autoPlay
               muted
               loop></img>
            {/* Overlay */}
            <div className=" absolute inset-0 bg-[#000000cc]"></div>
            {/* Text */}
            <div className=" pt-6 absolute w-full flex justify-center flex-col items-center  top-[35%] left-[50%] transform -translate-x-1/2 -translate-y-1/2   z-10 max-w-7xl  px-4 sm:px-6 lg:px-8">
               <div className="pt-[80px] mx-auto w-full">
                  <div className="w-full flex bg-[#291b4b9a] rounded-none lg:card-side  shadow-xl">
                     <figure>
                        <img
                           className=" object-cover"
                           src={image}
                           alt="Album"
                        />
                     </figure>
                     <div className="body-card p-6">
                        <h2 className="text-2xl text-gray-100 font-bold mb-3 text-center">
                           Toy car
                        </h2>

                        <p className="border-b-2 text-gray-300 border-t-2 text-[18px] font-semibold border-gray-300 p-2">
                           Lorem ipsum dolor, sit amet consectetur adipisicing
                           elit. Saepe voluptatibus reiciendis quia!
                        </p>

                        <p className="text-[18px] text-gray-200 font-semibold">
                           Recipes: <span className="text-[16px] ml-2">34</span>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ViewDetails;
