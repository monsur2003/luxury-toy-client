import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import ReviewCard from "./ReviewCard";
const Review = () => {
   const [reviews, setReviews] = useState([]);

   useEffect(() => {
      fetch("review.json")
         .then((res) => res.json())
         .then((data) => setReviews(data));
   }, []);

   return (
      <div className="my-8 mt-5">
         <div className="text-center">
            <h2 className=" text-4xl lilita">Our Client Review</h2>
            <p className="my-2 mb-5 font-semibold text-gray-300">
               Client satisfaction is our main goal Lorem ipsum dolor, sit amet
               consectetur adipisicing elit. Voluptas, at? <br />
               stay with us
            </p>
         </div>
         <div className="mr-2" data-aos="fade-up" data-aos-duration="1000">
            {" "}
            <Marquee className="mr-2" pauseOnHover>
               {reviews.map((review) => (
                  <ReviewCard revie={review} key={review.id}></ReviewCard>
               ))}
            </Marquee>
         </div>
      </div>
   );
};

export default Review;
