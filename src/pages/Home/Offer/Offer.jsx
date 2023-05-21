import React from "react";
import img1 from "../../../assets/banner/befunky_2023-4-0_0-18-21.jpg";
import img2 from "../../../assets/banner/befunky_2023-4-0_0-20-53.jpg";

const Offer = () => {
   return (
      <div className=" justify-center items-center my-10 md:] md:space-x-24 md:items-center  flex-col md:flex-row p-5 py-10   mx-auto flex md:justify-between">
         <div className="grid grid-cols-2 md:w-2/3 gap-4">
            <img
               src={img2}
               data-aos="fade-right"
               data-aos-duration="1000"
               className="md:w-[500px] w-full  md:rounded-tl-[30%]   rounded-md "
               alt=""
            />
            <img
               src={img2}
               data-aos="fade-left"
               data-aos-duration="1000"
               className="md:w-[500px] w-full rounded-md  "
               alt=""
            />
            <img
               src={img2}
               data-aos="fade-right"
               data-aos-duration="1000"
               className="md:w-[500px] w-full  rounded-md "
               alt=""
            />
            <img
               src={img2}
               data-aos="fade-left"
               data-aos-duration="1000"
               className="md:w-[500px] w-full md:rounded-br-[30%] rounded-md  "
               alt=""
            />
         </div>
         <div
            data-aos-duration="1000"
            data-aos="zoom-out-up"
            className="text-center md:text-start">
            <h2 className="text-6xl my-8 font-bold">
               <span className="lilita text-7xl animate-pulse text-red-500">
                  {" "}
                  30%{" "}
               </span>
               <span className="text-white font-mono">OFF</span>
            </h2>
            <p className="font-semibold font-sans text-gray-400">
               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               Inventore ratione nemo maxime rem soluta. <br /> Lorem ipsum
               dolor sit amet, consectetur adipisicing elit. <br /> Quia,
               adipisci enim? Nisi non veritatis praesentium earum aperiam
               expedita unde cumque!
            </p>
            <button className="btn w-56 btn-primary  text-center mt-6 md:mb-11">
               Shop Now
            </button>
         </div>
      </div>

      //   <div className="hero min-h-screen bg-base-200 mt-5">
      //      <div className="hero-content flex-col items-center flex lg:flex-row">
      //         <div className=" md:relative md:w-1/2">
      //            <img src={img2} className="rounded-lg shadow-2xl" />
      //            <div className="md:absolute  md:w-[60%] rounded-lg right-[-100px] top-[84%] mt-2 md:mt-0  md:border-8 border-white ">
      //               <img src={img1} className=" shadow-md" />
      //            </div>
      //         </div>
      //         <div className="text">
      //            //{" "}
      //            <h2 className="text-4xl font-bold">
      //               // <span className="lilita  text-red-500"> 30% </span>
      //               // <span className="text-black">OFF</span>
      //               //{" "}
      //            </h2>
      //            //{" "}
      //            <p className="font-semibold poppin">
      //               // Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      //               // Inventore ratione nemo maxime rem soluta. //{" "}
      //            </p>
      //            //{" "}
      //         </div>
      //      </div>
      //   </div>
   );
};

export default Offer;
