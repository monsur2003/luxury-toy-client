import React from "react";
import { useLoaderData } from "react-router-dom";

import useTitle from "../../hook/useTitle";

const ViewDetails = () => {
   const data = useLoaderData();
   useTitle("Details");

   const {
      name,
      photo,
      sellerName,
      email,
      category,
      price,
      quantity,
      rating,
      discription,
   } = data;
   return (
      <div>
         <div className="">
            <div className=" pt-3 w-full px-4 sm:px-6 lg:px-8">
               <div className="mx-auto w-full">
                  <div className="w-full  bg-[#291b4b9a] rounded-none lg:card-side  shadow-xl">
                     <figure>
                        <img
                           className=" object-cover"
                           src={photo}
                           alt="Album"
                        />
                     </figure>
                     <div className="body-card p-6">
                        <h2 className="text-2xl text-gray-100 font-bold mb-3 text-center">
                           {name}
                        </h2>

                        <p className="text-gray-300 border-t-2 text-[18px] font-semibold border-gray-300 p-2">
                           <span>Seller:</span> {sellerName}
                        </p>
                        <p className="border-b-2 text-gray-300 text-[18px] font-semibold border-gray-300 p-2">
                           <span>Email:</span> {email}
                        </p>
                        <p className=" text-gray-300 text-[18px] font-semibold border-gray-300 p-2">
                           <span>Price:</span> {price}
                        </p>
                        <p className=" text-gray-300 text-[18px] font-semibold border-gray-300 p-2">
                           <span>Rating</span> {rating}
                        </p>
                        <p className="border-b-2 text-gray-300 text-[18px] font-semibold border-gray-300 p-2">
                           <span>Quantity</span> {quantity}
                        </p>
                     </div>
                     <div>
                        <h3 className="text-center lilita tracking-widest font-2xl font-bold py-2 ">
                           About This
                        </h3>
                        <p className=" text-gray-300 font-semibold border-gray-300 p-2">
                           {discription}
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
