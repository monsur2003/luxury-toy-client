import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const ReviewCard = ({ revie }) => {
   const { rating, photo, review } = revie;
   return (
      <div>
         <div className="card mr-2 text-gray-200 w-96 bg-[#1616d68a] shadow-xl">
            <figure>
               <img
                  effect="blur"
                  className="w-[300px] rounded-full h-[300px]"
                  src={photo}
                  alt=""
               />
            </figure>
            <div className="card-body">
               <div className="flex items-center justify-center gap-x-2 ">
                  <Rating
                     className="text-2xl text-yellow-400 "
                     readonly
                     placeholderRating={rating}
                     emptySymbol={<FaRegStar></FaRegStar>}
                     placeholderSymbol={<FaStar></FaStar>}
                     fullSymbol={<FaStar></FaStar>}></Rating>
                  <p className="text-[20px] font-semibold">{rating}</p>
               </div>
               <p className="pt-3">
                  {review.length < 120 ? review : review.slice(0, 120)}
               </p>
               <div className="card-actions justify-end"></div>
            </div>
         </div>
      </div>
   );
};

export default ReviewCard;
