import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Home/Home/Providers/AuthProvider";
import MyToyCard from "./MyToyCard";
import Swal from "sweetalert2";
import useTitle from "../../hook/useTitle";

const MyToy = () => {
   const { user } = useContext(AuthContext);
   const [toys, setToys] = useState([]);
   useTitle("Mytoys");

   useEffect(() => {
      fetch(`https://teddyland-server.vercel.app/toys?email=${user?.email}`)
         .then((res) => res.json())
         .then((data) => setToys(data));
   }, []);

   const handleDelete = (id) => {
      console.log(id, "from delete btn");
      fetch(`https://teddyland-server.vercel.app/toys/${id}`, {
         method: "DELETE",
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
               const remaining = toys.filter((b) => b._id !== id);
               setToys(remaining);
               Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!",
               }).then((result) => {
                  if (result.isConfirmed) {
                     Swal.fire(
                        "Deleted!",
                        "Your file has been deleted.",
                        "success"
                     );
                  }
               });
            }
         });
   };

   const handleUpdate = (id) => {
      console.log("update button clicked", id);
   };

   console.log(toys);
   return (
      <div>
         {/* <h3>My toy {toys.length}</h3> */}
         <div className="bg-[#242933]  py-6">
            {toys.map((toy) => (
               <MyToyCard
                  handleDelete={handleDelete}
                  handleUpdate={handleUpdate}
                  key={toy._id}
                  toy={toy}></MyToyCard>
            ))}
         </div>
      </div>
   );
};

export default MyToy;
