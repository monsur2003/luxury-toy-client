import React, { useContext } from "react";
import { AuthContext } from "../Home/Providers/AuthProvider";
import Swal from "sweetalert2";

const AddToy = () => {
   const { user } = useContext(AuthContext);

   const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const photo = form.photoUrl.value;
      const sellerName = form.sellername.value;
      const email = user?.email;
      const category = form.category.value;
      const price = form.price.value;
      const quantity = form.quantity.value;
      const rating = form.rating.value;
      const discription = form.discription.value;
      const toy = {
         name,
         photo,
         sellerName,
         email,
         category,
         price,
         quantity,
         rating,
         discription,
      };
      console.log(toy);

      fetch("https://teddyland-server.vercel.app/toys", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(toy),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.insertedId) {
               Swal.fire({
                  title: "Product added successfully!",
                  text: "Thanks for add product",
                  icon: "success",
                  confirmButtonText: "Okey",
               });
            }
         });
   };

   return (
      <div className=" py-8 bg-[#242933] mx-auto">
         <h2 className="text-2xl text-center lilita tracking-widest  font-bold mb-4">
            Create a New Toy Listing
         </h2>
         <form
            className="w-[70%] poppin  mx-auto border rounded-lg border-pink-500 p-6 shadow-2xl shadow-pink-600"
            onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-2 grid-cols-1">
               <div className="mb-4">
                  <label className="block text-white mb-1" htmlFor="pictureUrl">
                     Picture URL
                  </label>
                  <input
                     type="text"
                     id="pictureUrl"
                     name="photoUrl"
                     className="w-full border border-gray-300 px-3 py-2 rounded"
                  />
               </div>
               <div className="mb-4">
                  <label className="block text-white mb-1" htmlFor="name">
                     Name:
                  </label>
                  <input
                     type="text"
                     id="name"
                     name="name"
                     className="w-full border border-gray-300 px-3 py-2 rounded"
                  />
               </div>
               <div className="mb-4">
                  <label className="block text-white mb-1" htmlFor="sellerName">
                     Seller Name:
                  </label>
                  <input
                     type="text"
                     id="sellerName"
                     defaultValue={user?.displayName}
                     name="sellername"
                     className="w-full border border-gray-300 px-3 py-2 rounded"
                  />
               </div>
               <div className="mb-4">
                  <label
                     className="block text-white mb-1"
                     htmlFor="sellerEmail">
                     Seller Email:
                  </label>
                  <input
                     type="email"
                     id="sellerEmail"
                     name="email"
                     defaultValue={user?.email}
                     className="w-full border border-gray-300 px-3 py-2 rounded"
                  />
               </div>
               <div className="mb-4">
                  <label
                     className="block text-white mb-1"
                     htmlFor="subCategory">
                     Sub-category:
                  </label>
                  <select name="category" className="input select w-full" id="">
                     <option value="Sports">Sports Car</option>
                     <option value="Racing Car"> Bike</option>
                     <option value="Dump Truck">Dump Truck</option>
                  </select>
               </div>
               <div className="mb-4">
                  <label className="block text-white mb-1" htmlFor="price">
                     Price:
                  </label>
                  <input
                     type="text"
                     id="price"
                     name="price"
                     className="w-full border border-gray-300 px-3 py-2 rounded"
                  />
               </div>
               <div className="mb-4">
                  <label className="block text-white mb-1" htmlFor="rating">
                     Rating:
                  </label>
                  <input
                     type="text"
                     id="rating"
                     name="rating"
                     className="w-full border border-gray-300 px-3 py-2 rounded"
                  />
               </div>
               <div className="mb-4">
                  <label className="block text-white mb-1" htmlFor="quantity">
                     Available quantity:
                  </label>
                  <input
                     type="number"
                     id="quantity"
                     name="quantity"
                     className="w-full border border-gray-300 px-3 py-2 rounded"
                  />
               </div>
            </div>
            <div className="mb-4">
               <label className="block text-white mb-1" htmlFor="description">
                  Detail description:
               </label>
               <textarea
                  id="description"
                  name="discription"
                  className="w-full border border-gray-300 px-3 py-2 rounded"
                  rows="4"></textarea>
            </div>
            <button
               type="submit"
               className="bg-blue-500 btn-block text-white px-4 py-2 rounded hover:bg-blue-600">
               Submit
            </button>
         </form>
      </div>
   );
};

export default AddToy;
