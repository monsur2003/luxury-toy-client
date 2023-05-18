import React, { useState } from "react";
import logo from "../../../../../assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

   const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
   };

   const navLink = (
      <>
         {" "}
         <ul className="flex space-x-4 lilita ">
            <li>
               <a
                  href="#"
                  className="text-white hover:text-primary transition delay-200">
                  Teddy
               </a>
            </li>
            <li>
               <a
                  href="#"
                  className="text-white hover:text-primary transition delay-200">
                  Add Toy
               </a>
            </li>
            <li>
               <a
                  href="#"
                  className="text-white hover:text-primary transition delay-200">
                  Blog
               </a>
            </li>
            <li>
               <a
                  href="#"
                  className="text-white hover:text-primary font-thin transition delay-200">
                  About
               </a>
            </li>
         </ul>
      </>
   );

   return (
      <nav
         className="bg-transparent border-b border-primary"
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
                  <Link to="/login">
                     {" "}
                     <button className="bg-primary text-white hover:text-gray-400 py-2 px-4 mr-2 rounded focus:outline-none">
                        Login
                     </button>
                  </Link>
                  <img
                     src="author-image.jpg"
                     alt="Author"
                     className="w-8 h-8 rounded-full"
                  />
               </div>
            </div>
         </div>

         {/* Mobile menu */}
         <div className={`${isMobileMenuOpen ? "md:hidden" : "hidden"}`}>
            {navLink}
         </div>
      </nav>
   );
};

export default Navbar;
