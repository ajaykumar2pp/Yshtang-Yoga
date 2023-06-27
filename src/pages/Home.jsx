import React from "react";
import Navbar from "../components/Navbar";
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
      <Navbar />
      <LandingPage />
      <OurService />
      <Event />
      <TeamCard />
      <PriceCard />
      <Contact />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
