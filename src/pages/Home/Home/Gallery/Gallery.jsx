import React, { useEffect, useState } from "react";

import image1 from "../../../../assets/gallery/gallery (1).jpg";
import image2 from "../../../../assets/gallery/gallery (2).jpg";
import image3 from "../../../../assets/gallery/gallery (3).jpg";
import image4 from "../../../../assets/gallery/gallery (4).jpg";
import image5 from "../../../../assets/gallery/gallery (5).jpg";
import image6 from "../../../../assets/gallery/gallery (6).jpg";
import image7 from "../../../../assets/gallery/gallery (7).jpg";
import image8 from "../../../../assets/gallery/gallery (8).jpg";
import image9 from "../../../../assets/gallery/gallery (9).jpg";
import image10 from "../../../../assets/gallery/gallery (10).jpg";
import image11 from "../../../../assets/gallery/gallery (11).jpg";
import image12 from "../../../../assets/gallery/gallery (12).jpg";
import image13 from "../../../../assets/gallery/gallery (13).jpg";

const Gallery = () => {
   const data = [
      {
         id: 1,
         imgage: image1,
      },
      {
         id: 2,
         imgage: image2,
      },
      {
         id: 3,
         imgage: image4,
      },
      {
         id: 4,
         imgage: image6,
      },
      {
         id: 5,
         imgage: image5,
      },
      {
         id: 6,
         imgage: image7,
      },
      {
         id: 7,
         imgage: image10,
      },
      {
         id: 8,
         imgage: image12,
      },
      {
         id: 9,
         imgage: image9,
      },
      {
         id: 10,
         imgage: image13,
      },
   ];

   return (
      <div className="gallery w-[80%] mx-auto">
         {data.map((d) => (
            <img
               className="border-4 space-y-3 border-[#050229f9]"
               key={d.id}
               src={d.imgage}
            />
         ))}
      </div>
   );
};

export default Gallery;
