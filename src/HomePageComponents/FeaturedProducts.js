import React from "react";
import HeroImage from "./../Images/Hero-Bg.jpg"
import { Link } from "react-router-dom";
const FeaturedProducts = () => {
  return (
    <div>
    <section className="relative bg-cover bg-center h-screen flex items-center justify-center text-white" style={{ backgroundImage: `url(${HeroImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center px-6 md:px-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">24/7 Customer Support at Your Service</h1>
        <p className="text-lg sm:text-xl mb-6">Our experienced agents are here to assist you with your needs anytime, anywhere.</p>
        <Link to={"/contact"}  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">Get Started</Link>
      </div>
    </section>
    </div>
  );
};

export default FeaturedProducts;
