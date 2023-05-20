import React, { useContext, useState } from "react";
import logo from "../../../../../assets/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import ActiveLink from "../ActiveLink/ActiveLink";
const Navbar = () => {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

   const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
   };

   const { user, logoutUser } = useContext(AuthContext);

   const handleLogout = () => {
      logoutUser();
   };

   // nav link
   const navLink = (
      <>
         {" "}
         <ul className="md:flex md:space-x-4 text-white lilita ">
            <li>
               <ActiveLink
                  to="/"
                  className="text-white hover:text-primary transition delay-200">
                  Home
               </ActiveLink>
            </li>
            <li>
               <ActiveLink
                  to="/alltoy"
                  className="text-white hover:text-primary transition delay-200">
                  All Toys
               </ActiveLink>
            </li>
            {user ? (
               <>
                  <li>
                     <ActiveLink
                        to="/mytoy"
                        className="text-white hover:text-primary transition delay-200">
                        My Toys
                     </ActiveLink>
                  </li>
                  <li>
                     <ActiveLink
                        to="/addtoy"
                        className="text-white hover:text-primary font-thin transition delay-200">
                        Add a Toy
                     </ActiveLink>
                  </li>
               </>
            ) : (
               <li>
                  <ActiveLink
                     to="/blogs"
                     className="text-white hover:text-primary font-thin transition delay-200">
                     Blogs
                  </ActiveLink>
               </li>
            )}
         </ul>
      </>
   );

   return (
      <nav
         className="bg-[#D4D3D1] top-0 right-0 left-0 z-[200]  border-b border-primary"
         style={{ backdropFilter: "blur(50px)" }}>
         <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
               {/* Brand logo */}
               <a href="#" className="text-white text-2xl font-bold">
                  <img
                     className="w-[140px] h-[60px] text-primary"
                     src={logo}
                     alt=""
                  />
               </a>

               {/* Mobile menu toggle button */}
               <div className="block md:hidden">
                  <button
                     type="button"
                     className="text-white hover:text-gray-400 focus:text-gray-400 focus:outline-none"
                     onClick={toggleMobileMenu}>
                     {isMobileMenuOpen ? (
                        <svg
                           className="h-6 w-6 fill-current"
                           viewBox="0 0 24 24">
                           <path
                              d="M6 18L18 6M6 6l12 12"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           />
                        </svg>
                     ) : (
                        <svg
                           className="h-6 w-6 fill-current"
                           viewBox="0 0 24 24">
                           <path
                              d="M4 6h16M4 12h16M4 18h16"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           />
                        </svg>
                     )}
                  </button>
               </div>

               {/* Navigation links */}
               <div
                  className={`hidden md:block ${
                     isMobileMenuOpen ? "hidden" : ""
                  }`}>
                  {navLink}
               </div>

               {/* Login button and author image section */}
               <div className="flex items-center space-x-4">
                  {user ? (
                     <button
                        onClick={handleLogout}
                        className="btn btn-primary rounded-2xl">
                        Log out
                     </button>
                  ) : (
                     <Link to="/login">
                        {" "}
                        <button className="btn btn-primary rounded-2xl">
                           Login
                        </button>
                     </Link>
                  )}
                  {user ? (
                     <img
                        src={user?.photoURL}
                        alt="Author"
                        className="w-[55px] h-[55px] border-4 border-pink-600 rounded-full"
                     />
                  ) : (
                     <FaUserCircle className="text-[50px]"></FaUserCircle>
                  )}
               </div>
            </div>
         </div>

         {/* Mobile menu */}
         <div className={`${isMobileMenuOpen ? "md:hidden " : "hidden"}`}>
            <div className="my-2  relative left-[20%]  ">{navLink}</div>
         </div>
      </nav>
   );
};

export default Navbar;
// <div className="w-full mx-auto relative bg-white ">
//      <AutoplaySlider
//         organicIcon={false}
//         play={true}
//         cancelOnInteraction={false}
//         interval={5000}
//         style={{
//            width: "100%",
//            height: "vh",
//         }}
//         bullets={false}>
//         <div
//            className="md:w-[60%] md:h-[100vh] w-[50%] h-auto bg-no-repeat bg-center bg-cover"
//            data-src={banner1}
//            style={{
//               backgroundImage: `url(${banner1})`,
//               // width: "100%",
//               // height: "vh",
//            }}>
//            <div className=" absolute inset-0 bg-[#000000cc]"></div>
//            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
//               <h2 className="md:text-5xl text-3xl font-bold md:w-[80%] mx-auto">
//                  {" "}
//                  <span className="text-6xl text-blue-700">
//                     Explore
//                  </span>{" "}
//                  Special Taste & The Best Quality
//               </h2>

//               <p className="text-gray-400 w-full md:text-[18px] md:p-3 border-l-4 border-r-4 mt-3 border-blue-700">
//                  <span className="text-2xl text-blue-700">Foodie</span>,
//                  along with his team, offers culinary and management
//                  services. We have the experience to provide concept
//                  development strategies and best practice principles in
//                  order to achieve maximum sales performance.
//               </p>
//               <div className="flex justify-center items-center mt-7">
//                  <button className="flex gap-1 rounded-none w-[30%] items-center btn  btn-primary text-gray-200 font-bold">
//                     {" "}
//                     Contact us<FaPhone></FaPhone>
//                  </button>
//               </div>
//            </div>
//         </div>
//         {/* banner2 */}
//         <div
//            className=" md:w-[100%] md:h-[100vh] w-[50%] h-auto bg-no-repeat bg-center bg-cover"
//            data-src={banner2}
//            style={{
//               backgroundImage: `url(${banner2})`,
//               // width: "100%",
//               // height: "vh",
//            }}>
//            <div className=" absolute inset-0 bg-[#000000cc]"></div>
//            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
//               <h2 className="md:text-5xl text-3xl font-bold md:w-[80%] mx-auto">
//                  {" "}
//                  <span className="text-6xl text-blue-700">Welcome</span> to
//                  world class chefs{" "}
//               </h2>

//               <p className="text-gray-400 md:text-[18px] md:p-3 border-l-4 border-r-4 mt-3 border-blue-700">
//                  <span className="text-2xl text-blue-700">Foodie </span>
//                  restaurant is not just about food, it is an experience.
//                  Saying that it always helps if the food is bloody good.
//                  Constructio interrete. Miserum hominem! Si dolor summum
//                  malum est, dici aliter non potest.
//               </p>
//               <div className="flex justify-center items-center mt-7">
//                  <button className="flex gap-1 rounded-none w-[30%] items-center btn  btn-primary text-gray-200 font-bold">
//                     {" "}
//                     Contact us<FaPhone></FaPhone>
//                  </button>
//               </div>
//            </div>
//         </div>
//         <div
//            className="md:w-[100%] md:h-[100vh] w-[50%] h-auto bg-no-repeat bg-center bg-cover"
//            data-src={banner3}
//            style={{
//               backgroundImage: `url(${banner3})`,
//               // width: "100%",
//               // height: "vh",
//            }}>
//            <div className=" absolute inset-0 bg-[#000000cc]"></div>
//            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
//               <h2 className="md:text-5xl text-3xl font-bold  md:w-[85%] mx-auto">
//                  {" "}
//                  <span className="text-6xl text-blue-700">Know </span>Know
//                  More About The Ticrou Article
//               </h2>

//               <p className="text-gray-400 md:text-[18px] border-l-4 md:p-3 border-r-4 mt-3 border-blue-700">
//                  <span className="text-2xl text-blue-700">Foodie </span>
//                  team of talented chefs is dedicated to creating
//                  unforgettable culinary experiences that showcase the very
//                  best in flavors, textures, and ingredients. From fine
//                  dining to casual cuisine
//               </p>
//               <div className="flex justify-center items-center mt-7">
//                  <button className="flex gap-1 rounded-none w-[30%] items-center btn  btn-primary text-gray-200 font-bold">
//                     {" "}
//                     Contact us<FaPhone></FaPhone>
//                  </button>
//               </div>
//            </div>
//         </div>
//      </AutoplaySlider>
//   </div>

// <>
