import React from "react";
import Gallery from "./Gallery/Gallery";
import Banner from "../Banner/Banner";
import Category from "../../ShopeCategory/Category";
// import AbountUs from "../AboutUs/AbountUs";

const Home = () => {
   return (
      <>
         <Banner></Banner>
         <Gallery></Gallery>
         <Category></Category>
         {/* <AbountUs></AbountUs> */}
      </>
   );
};

export default Home;
