import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../../hook/useTitle";

const UpdateToy = () => {
   const toys = useLoaderData();
   useTitle("updateToy");
   //    const { id } = useParams();
   const {
      name,
      photo,
      sellerName,
      _id,
      email,
      category,
      price,
      quantity,
      rating,
      discription,
   } = toys;

   const handleUpdate = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const photo = form.photo.value;
      const price = form.price.value;
      const quantity = form.quantity.value;
      const discription = form.discription.value;

      const updateToy = {
         name,
         photo,
         price,
         quantity,
         discription,
      };
      fetch(`http://localhost:5000/toys/${_id}`, {
         method: "PUT",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(updateToy),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
               Swal.fire({
                  title: "Success",
                  text: "Product updated successfully",
                  icon: "success",
                  confirmButtonText: "Okey",
               });
               form.reset();
            }
         });

      // Close the modal
   };

   return (
      <div className=" flex justify-center items-center bg-[#242933]">
         <form
            onSubmit={handleUpdate}
            className="border my-5 rounded-xl shadow-lg shadow-pink-400 border-pink-400 p-10 w-[60%] ">
            <div className=" grid md:grid-cols-2 gap-2 py-2">
               <div>
                  <label className="block text-white poppin" htmlFor="price">
                     Price
                  </label>{" "}
                  <input
                     type="text"
                     className="input w-full"
                     name="price"
                     defaultValue={price}
                     id=""
                  />
               </div>
               <div>
                  <label htmlFor="quantity" className="block text-white">
                     Quantity
                  </label>
                  <input
                     type="text"
                     className="input w-full"
                     name="quantity"
                     defaultValue={quantity}
                     id=""
                  />
               </div>
               <div>
                  <label htmlFor="quantity" className="block text-white">
                     Quantity
                  </label>
                  <input
                     type="text"
                     className="input w-full"
                     name="name"
                     defaultValue={name}
                     placeholder="toy name"
                     id=""
                  />
               </div>
               <div>
                  <label htmlFor="quantity" className="block text-white">
                     PhotoURL
                  </label>
                  <input
                     type="text"
                     className="input w-full"
                     name="photo"
                     defaultValue={photo}
                     id=""
                  />
               </div>
            </div>
            <textarea
               id="description"
               name="discription"
               defaultValue={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem explicabo, ad officiis aperiam voluptates eligendi fugit! Esse nemo tempore assumenda maiores odio ipsa ea, molestias ducimus eligendi ipsum exercitationem voluptatum."
               }
               className="w-full border border-gray-300 px-3 py-2 rounded"
               rows="4"></textarea>
            <button className="btn btn-primary">submit</button>
         </form>
      </div>
   );
};

export default UpdateToy;

// //
