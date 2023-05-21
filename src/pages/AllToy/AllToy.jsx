import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import useTitle from "../../hook/useTitle";

const AllToy = () => {
   const [toys, setToys] = useState([]);
   const url = "http://localhost:5000/toys";
   useEffect(() => {
      fetch(url)
         .then((res) => res.json())
         .then((data) => setToys(data));
   }, []);

   console.log("toys from server", toys);
   useTitle("Altoy");

   return (
      <>
         <div>
            <h2 className="my-2 text-6xl lilita tracking-widest text-center">
               All Toy List{" "}
            </h2>
         </div>
         <form className=" flex my-6 justify-center items-center ">
            <div>
               <input className="input rounded-r-none" type="text" />
            </div>
            <div>
               <input className="input mx-2 rounded-none" type="text" />
            </div>
            <input
               type="submit"
               className="btn btn-primary rounded-l-none"
               value="Submit"
            />
         </form>

         <table className="min-w-full mb-5 bg-[#242933] divide-y divide-gray-200">
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
                        <Link to={`/view/${toy._id}`}>
                           {" "}
                           <button className="btn btn-primary">
                              <FaEye className="text-2xl" />
                           </button>
                        </Link>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </>
   );
};

export default AllToy;
