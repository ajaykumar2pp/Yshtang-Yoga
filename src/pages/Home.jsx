import React from "react";
import LandingPage from "../components/LandingPage";
import OurService from "../components/OurService";
import Event from "../components/Event";
import TeamCard from "../components/TeamCard";
import PriceCard from "../components/PriceCard";
import Contact from "../components/Contact";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
   
      <LandingPage />
      <OurService />
      <Event />
      <TeamCard />
      <PriceCard />
      <Contact />
      <Blog />
    
    </div>
  );
};

export default Home;
