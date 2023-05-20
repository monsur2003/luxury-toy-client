import React from "react";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToyCard = ({ toy, handleDelete }) => {
   const {
      name,
      photo,
      sellerName,
      email,
      category,
      price,
      quantity,
      rating,
      _id,
      discription,
   } = toy;

   return (
      <div className=" w-[60%]  mx-auto bg-base-200 my-3  rounded-2xl flex items-center space-x-6 h-[210px]   card-side border border-pink-400  shadow-xl">
         <figure>
            <img
               className="w-[300px] h-[210px] rounded-2xl"
               src={photo}
               alt="Movie"
            />
         </figure>
         <div className=" flex justify-between w-full mr-3">
            <div>
               <h2 className="card-title">{name}</h2>
               <p>{quantity}</p>
               <p>{sellerName}</p>
               <p>{price + "$ "}</p>
            </div>
            <div className="flex flex-col items-center px-4 space-y-3">
               <button className="btn btn-primary">
                  <FaEye className="text-[17px]" />
               </button>
               <Link to={`/toys/${_id}`}>
                  <button className="btn btn-active">
                     <FaPen className="text-[17px]"></FaPen>
                  </button>
               </Link>
               <button
                  className="btn btn-secondary"
                  onClick={() => {
                     handleDelete(_id);
                  }}>
                  <FaTrash className="text-[17px] text-red-500"></FaTrash>
               </button>
            </div>
         </div>
      </div>
   );
};

export default MyToyCard;
