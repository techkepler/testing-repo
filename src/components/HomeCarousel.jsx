import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import HomeProduct1 from "../assets/image/home-img-1.png";
import HomeProduct2 from "../assets/image/home-img-2.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomeCarousel = () => {
  let showProducts = [
    {
      id: 0,
      img: HomeProduct1,
    },
    {
      id: 1,
      img: HomeProduct2,
    },
    {
      id: 2,
      img: HomeProduct1,
    },
    {
      id: 3,
      img: HomeProduct2,
    },
  ];

  return (
    <div className="pt-24 md:pt-32 md:pb-20 w-full relative bg-[#f3f7f3] dark:bg-slate-700">
      {/* Medium device carousel */}
      <div className="hidden md:block">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={50}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
        >
          {showProducts.map((data, index) => (
            <>
              <SwiperSlide key={index}>
                <div className="px-4 md:px-10 w-full flex flex-col md:flex-row flex-wrap gap-6 md:justify-center md:items-center">
                  <div className={`furniture-details md:w-[40%]`}>
                    <h2 className="text-lg lg:text-xl text-gray-600 dark:text-gray-300">
                      New Arrivals
                    </h2>
                    <h1 className="text-3xl md:text-4xl lg:text-6xl text-green-900 pb-2 font-semibold dark:text-green-400">
                      Flexible Chair
                    </h1>
                    <p className="text-sm text-opacity-80 text-gray-500 dark:text-gray-300">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Magnam mollitia quam ea similique a ex, consequuntur
                      asperiores repellat quas ad!
                    </p>
                  </div>
                  <div className={`furniture-img md:w-[40%] px-6  lg:px-8 `}>
                    <img src={data.img} alt="Best Chair" />
                  </div>
                </div>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>

      {/* Small device carousel */}
      <div className="md:hidden pb-12">
        <Swiper
          modules={[Pagination, A11y, Autoplay]}
          spaceBetween={50}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
        >
          {showProducts.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="first-slide px-4 md:px-10 w-full flex flex-col md:flex-row flex-wrap gap-6 md:justify-center md:items-center">
                <div className="furniture-details md:w-[40%]">
                  <h2 className="text-lg lg:text-xl text-gray-600 dark:text-gray-300">
                    New Arrivals
                  </h2>
                  <h1 className="text-3xl md:text-4xl lg:text-6xl text-green-900 pb-2 font-semibold dark:text-green-500">
                    Flexible Chair
                  </h1>
                  <p className="text-sm text-opacity-80 text-gray-500 dark:text-gray-300">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam mollitia quam ea similique a ex, consequuntur
                    asperiores repellat quas ad!
                  </p>
                </div>
                <div className="furniture-img md:w-[40%] px-6  lg:px-8">
                  <img src={data.img} alt="Best Chair" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCarousel;
