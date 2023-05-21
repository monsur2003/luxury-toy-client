import React from "react";
import Gallery from "./Gallery/Gallery";
import Banner from "../Banner/Banner";
// import ViewDetails from "../../ViewDetails/ViewDetails";
import Offer from "../Offer/Offer";
import Category from "../../ShopeCategory/Category";
import Review from "../../Review/Review";
// import AbountUs from "../AboutUs/AbountUs";

const Home = () => {
   return (
      <>
         <Banner></Banner>
         <Category></Category>
         <Gallery></Gallery>
         <Offer></Offer>
         <Review></Review>
      </>
   );
};

export default Home;
