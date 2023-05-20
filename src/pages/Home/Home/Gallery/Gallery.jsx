import React, { useEffect, useState } from "react";

const Gallery = () => {
   const [cars, setCars] = useState([]);
   console.log(cars);
   useEffect(() => {
      fetch("cars.json")
         .then((res) => res.json())
         .then((data) => setCars(data));
   }, []);

   return (
      <div>
         <h2 className="text-center text-5xl lilita tracking-widest ">
            Your toy car gallery{" "}
         </h2>
         <div className="grid grid-cols-3">
            {cars.map((car) => (
               <img src={car.img} />
            ))}
         </div>
      </div>
   );
};

export default Gallery;
