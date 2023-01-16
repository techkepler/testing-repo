import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import HomeCarousel from "../components/HomeCarousel";
import ShopHome from "../components/ShopHome";
import Map from "../components/Map";
import Footer from "../components/Footer";
import useMode from "../context/useMode";

const Home = () => {
  const { setCurrentLocation } = useMode();
  useEffect(() => {
    setCurrentLocation("Home");
  }, [setCurrentLocation]);
  return (
    <div>
      <Navbar />
      <ShopHome />

      <Footer />
    </div>
  );
};

export default Home;
