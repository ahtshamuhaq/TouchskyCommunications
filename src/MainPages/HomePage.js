import React from "react";
import Header from "../HomePageComponents/Header";
import FeaturedProducts from "../HomePageComponents/FeaturedProducts";
import BestSelling from "../HomePageComponents/BestSelling";
import Footer from "../HomePageComponents/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div>
        
      <FeaturedProducts />
      </div>
      <div>
      <BestSelling />

      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
