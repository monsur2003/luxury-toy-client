import React, { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// import Rating from "react-rating";

const Category = () => {
   const [datas, setDatas] = useState([]);
   const [categorys, setCategorys] = useState("Sports");

   console.log(categorys);
   useEffect(() => {
      fetch(
         `https://teddyland-server.vercel.app/category?category=${categorys}`
      )
         .then((res) => res.json())
         .then((data) => setDatas(data));
   }, [categorys]);

   const card = (
      <>
         {" "}
         <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="grid   border-t-2 border-pink-600 md:p-3 p-7 rounded-lg  space-x-2 grid-cols-1 md:grid-cols-3">
            {datas.slice(0, 3).map((data) => (
               <div>
                  <div className="card border-4 rounded-lg border-[#7b055d] w-full my-4 shadow-lg shadow-pink-800 card-compact md:w-96 md:shadow-blue-900 bg-base-300 md:shadow-lg">
                     <figure className="rounded-none">
                        <img
                           data-aos="fade-zoom-in"
                           data-aos-easing="ease-in-back"
                           data-aos-delay="100"
                           data-aos-offset="0"
                           className="w-full rounded-none  h-[230px]"
                           src={data.photo}
                           alt="Shoes"
                        />
                     </figure>
                     <div className="card-body">
                        <h2 className="card-title">
                           <p className="text-2xl  text-gray-800  lilita tracking-widest">
                              {data.name}
                           </p>
                        </h2>
                        <p className="text-[18px] text-black font-semibold">
                           <span>$</span>
                           {data.price}
                        </p>

                        <div className="flex justify-between items-center">
                           <div className="font-semibold flex items-center text-[18px] gap-x-[4px] pt-2">
                              <Rating
                                 readonly
                                 className="text-2xl text-yellow-500  space-x-[6px]"
                                 placeholderRating={data.rating}
                                 emptySymbol={<FaRegStar></FaRegStar>}
                                 placeholderSymbol={<FaStar></FaStar>}
                                 fullSymbol={<FaStar></FaStar>}>
                                 {" "}
                              </Rating>{" "}
                              <p className="text-[22px] ml-2">{data.rating}</p>
                           </div>

                           <div className="card-actions justify-end">
                              <Link to={`/view/${data._id}`}>
                                 <button className="btn btn-primary">
                                    View Details
                                 </button>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </>
   );

   return (
      <div className="mt-8">
         <h2 className="text-center text-4xl lilita text-white tracking-widest my-2">
            Toys By Category
         </h2>

         <div className="flex my-8 justify-center items-center">
            <Tabs>
               <TabList className="flex justify-center space-x-4">
                  <Tab
                     onClick={() => setCategorys("Sports")}
                     className="cursor-pointer btn btn-primary">
                     Sports Car
                  </Tab>
                  <Tab
                     action="activate"
                     onClick={() => setCategorys("Dump Truck")}
                     className="cursor-pointer btn btn-primary">
                     Dump Truck
                  </Tab>
                  <Tab
                     onClick={() => setCategorys("Racing Car")}
                     className="cursor-pointer btn btn-primary">
                     Bike
                  </Tab>
               </TabList>
               {card}
               <TabPanel></TabPanel>
               {/* <TabPanel>{card}</TabPanel>
            <TabPanel>{card}</TabPanel> */}
            </Tabs>
         </div>
      </div>
   );
};

export default Category;
