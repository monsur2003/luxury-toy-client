import React from "react";
// import Gallery from "./Gallery/Gallery";
import Banner from "../Banner/Banner";
// import ViewDetails from "../../ViewDetails/ViewDetails";
import Offer from "../Offer/Offer";
import Category from "../../ShopeCategory/Category";
// import AbountUs from "../AboutUs/AbountUs";

const Home = () => {
   return (
      <>
         <Banner></Banner>
         {/* <Gallery></Gallery> */}
         <Offer></Offer>
         <Category></Category>
         {/* <AbountUs></AbountUs>
         <ViewDetails></ViewDetails> */}{" "}
      </>
   );
};

export default Home;
