import React from "react";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
   const data = useLoaderData();
   const { name, price } = data;
   return (
      <div>
         <h3>This is {name}</h3>
         <p>{price}</p>
      </div>
   );
};

export default ViewDetails;
