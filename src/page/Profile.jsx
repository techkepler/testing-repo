import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutImg from "../assets/image/about-img.jpg";
import Icon1 from "../assets/image/serv-1.svg";
import Icon2 from "../assets/image/serv-2.svg";
import Icon3 from "../assets/image/serv-3.svg";
import useMode from "../context/useMode";

const Profile = () => {
  const { setCurrentLocation } = useMode();
  useEffect(() => {
    setCurrentLocation("About");
  }, [setCurrentLocation]);

  return (
    <div>
      <Navbar />
      <div className="pt-20"></div>
      <div className="categories md:mx-14 lg:mx-24  mt-4 lg:mt-10">
        <h1 className="text-green-900 dark:text-gray-100 font-semibold text-xl md:text-2xl px-4 uppercase">
          About Us
    Some Changes
        </h1>

        <div className="about-us mt-5 flex flex-col md:flex-row gap-5 px-4 lg:gap-10 justify-center">
          <div className="img">
            <img src={AboutImg} alt="About Us" />
          </div>
          <div className="content">
            <h4 className="text-xl text-slate-500 dark:text-slate-200 py-1">
              Welcome To Our Shop
            </h4>
            <h1 className="capitalize text-green-900 dark:text-green-500 pt-1 pb-3 text-2xl font-semibold">
              we make your home more astonishing
            </h1>
            <p className="py-2 text-slate-600 dark:text-slate-200">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
              quo quaerat qui et sit corrupti doloribus repellendus hic maxime,
              reiciendis exercitationem.
            </p>

            <p className="py-2 text-slate-600 dark:text-slate-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              nulla ducimus asperiores blanditiis repudiandae inventore
              necessitatibus iusto tempora. Itaque, eius!
            </p>
          </div>
        </div>

        <div className="our-services mt-10">
          <h1 className="text-green-900 dark:text-slate-200 text-2xl font-semibold px-5">
            Our Services
          </h1>

          <div className="border-[1px] border-green-900 border-opacity-80 dark:border-gray-200 mx-6 my-4"></div>

          <div className="category-grid">
            <div className="border-[1px] group border-green-900 dark:border-gray-200 hover:border-0 hover:bg-[#244d4d] flex items-center flex-col justify-center gap-4 py-4 cursor-pointer">
              <img src={Icon2} alt="icon 1" />
              <p className="group-hover:text-gray-200 dark:text-gray-100 font-semibold  text-green-900">
                Furniture Designing
              </p>
            </div>{" "}
            <div className="border-[1px] group border-green-900 dark:border-gray-200 hover:border-0 hover:bg-[#244d4d] flex items-center flex-col justify-center gap-4 py-4 cursor-pointer">
              <img src={Icon1} alt="icon 1" />
              <p className="group-hover:text-gray-200 dark:text-gray-100 font-semibold  text-green-900">
                Furniture Making
              </p>
            </div>{" "}
            <div className="border-[1px] group border-green-900 dark:border-gray-200 hover:border-0 hover:bg-[#65d9d9] flex items-center flex-col justify-center gap-4 py-4 cursor-pointer">
              <img src={Icon3} alt="icon 1" />
              <p className="group-hover:text-gray-200 dark:text-gray-100 font-semibold  text-green-900">
                Furniture Selling
              </p>
            </div>{" "}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
