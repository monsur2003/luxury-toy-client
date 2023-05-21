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
      <div className=" w-[90%] mx-auto my-6 rounded-2xl flex items-center space-x-6 h-[260px]   card-side  bg-base-100 shadow-xl">
         <figure>
            <img className="h-[260px]" src={photo} alt="Movie" />
         </figure>
         <div className=" flex justify-between w-full mr-3">
            <div>
               <h2 className="card-title">{name}</h2>
               <p>{quantity}</p>
               <p>{sellerName}</p>
               <p>{price + "$ "}</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
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
