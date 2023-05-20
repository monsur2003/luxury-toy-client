import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllToy = () => {
   const [toys, setToys] = useState([]);
   const url = "http://localhost:5000/toys";
   useEffect(() => {
      fetch(url)
         .then((res) => res.json())
         .then((data) => setToys(data));
   }, []);

   return (
      <table className="min-w-full bg-[#242933] divide-y divide-gray-200">
         <thead>
            <tr className="bg-pink-800">
               <th className="px-6 py-3 text-left text-xs font-medium text-white lilita tracking-widest uppercase">
                  Serial
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
            {toys.map((toy, index) => (
               <tr className="bg-[#242933] poppin" key={toy._id}>
                  <td className="px-6 py-4 text-gray-200 whitespace-nowrap">
                     {index + 1}
                  </td>
                  <td className="px-6 py-4 text-gray-200 whitespace-nowrap">
                     {toy.sellerName ? toy.sellerName : "-"}
                  </td>
                  <td className="px-6 py-4 text-gray-200 whitespace-nowrap">
                     {toy.name}
                  </td>
                  <td className="px-6 py-4 text-gray-200 whitespace-nowrap">
                     {toy.category}
                  </td>
                  <td className="px-6 py-4 text-gray-200 whitespace-nowrap">
                     {toy.price}
                  </td>
                  <td className="px-6 py-4 text-gray-200 whitespace-nowrap">
                     {toy.quantity}
                  </td>
                  <td className="px-6 py-4 text-gray-200 whitespace-nowrap text-right text-sm font-medium">
                     <Link to={`/view/${toys._id}`}>
                        {" "}
                        <button className="text-indigo-600 hover:text-indigo-900">
                           View
                           <FaEye className="text-[17px]" />
                        </button>
                     </Link>
                  </td>
               </tr>
            ))}
         </tbody>
      </table>
   );
};

export default AllToy;
