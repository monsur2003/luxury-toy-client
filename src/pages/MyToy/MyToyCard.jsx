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

   console.log(_id);

   return (
      <>
         <div>
            <table className="min-w-full mb-5 bg-[#242933] divide-y divide-gray-200">
               <thead>
                  <tr className="bg-pink-800">
                     <th className="px-6 py-3 text-left text-xs font-medium text-white lilita tracking-widest uppercase">
                        Photo
                     </th>
                     <th className="px-6 py-3 text-left text-xs font-medium text-white lilita tracking-widest uppercase">
                        Seller
                     </th>
                     <th className="px-6 py-3 text-left text-xs font-medium text-white lilita tracking-widest uppercase">
                        Toy Name
                     </th>
                     <th className="px-6 py-3 text-left text-xs font-medium text-white lilita tracking-widest uppercase">
                        Sub-category
                     </th>
                     <th className="px-6 py-3 text-left text-xs font-medium text-white lilita tracking-widest uppercase">
                        Price
                     </th>
                     <th className="px-6 py-3 text-left text-xs font-medium text-white lilita tracking-widest uppercase">
                        Available Quantity
                     </th>
                     <th className="px-6 py-3 text-white lilita tracking-widest uppercase font-medium text-xs">
                        Action
                     </th>
                  </tr>
               </thead>
               <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="bg-[#242933] poppin" key={toy._id}>
                     <td className="px-6 py-4 text-gray-200 whitespace-nowrap">
                        <img
                           src={photo}
                           className="w-[200px] h-[120px] rounded-md"
                           alt=""
                        />
                     </td>
                     <td className="px-6 py-4 text-gray-200 whitespace-nowrap">
                        {sellerName}
                     </td>
                     <td className="px-6 py-4 text-gray-200 whitespace-nowrap">
                        {name}
                     </td>
                     <td className="px-6 py-4 text-gray-200 whitespace-nowrap">
                        {category}
                     </td>
                     <td className="px-6 py-4 text-gray-200 whitespace-nowrap">
                        {price}
                     </td>
                     <td className="px-6 py-4 text-gray-200 whitespace-nowrap">
                        {quantity}
                     </td>
                     <td className="px-6 py-4 text-gray-200 whitespace-nowrap text-right text-sm font-medium">
                        <div className="space-x-2">
                           <button
                              className="btn btn-warning"
                              onClick={() => {
                                 handleDelete(_id);
                              }}>
                              <FaTrash className="text-[17px] text-red-500"></FaTrash>
                           </button>

                           <Link to={`/toys/${_id}`}>
                              <button className="btn btn-success">
                                 <FaPen className="text-[17px]"></FaPen>
                              </button>
                           </Link>
                        </div>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </>
   );
};

export default MyToyCard;

{
   /* <div className="flex flex-col items-center space-y-3 p-3">
   <button className="btn btn-primary">
      <FaEye className="text-[17px]" />
      //{" "}
   </button>
   //{" "}
   <Link to={`/toys/${_id}`}>
      //{" "}
      <button className="btn btn-active">
         // <FaPen className="text-[17px]"></FaPen>
         //{" "}
      </button>
      //{" "}
   </Link>
   //{" "}
</div>; */
}
