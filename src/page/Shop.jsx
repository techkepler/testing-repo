import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import Icon1 from "../assets/image/icon-1.png";
import Icon2 from "../assets/image/icon-2.png";
import Icon3 from "../assets/image/icon-3.png";
import Icon4 from "../assets/image/icon-4.png";
import Icon5 from "../assets/image/icon-5.png";
import Footer from "../components/Footer";
import useMode from "../context/useMode";

const Shop = () => {
  const {
    setCurrentLocation,
    state: { products, carts },
    dispatch,
  } = useMode();

  useEffect(() => {
    setCurrentLocation("Products");
  }, [setCurrentLocation]);

  return (
    <div>
      <Navbar />
      <div className="pt-20"></div>
      <div className="categories md:mx-14 lg:mx-24  mt-4 lg:mt-10">
        <h1 className="text-green-900 dark:text-gray-100 font-semibold text-xl md:text-2xl px-4">
          Our Categories
        </h1>
        <div className="border-[1px] border-green-900 dark:border-gray-200 mt-4 mx-4"></div>
        <div className="category-grid">
          <div className="border-[1px] group border-green-900 dark:border-gray-200 hover:border-0 hover:bg-[#244d4d] flex items-center flex-col justify-center gap-4 py-4 cursor-pointer">
            <img src={Icon1} alt="icon 1" />
            <p className="group-hover:text-gray-200 dark:text-gray-100 font-semibold  text-green-900">
              House Sofa
            </p>
          </div>{" "}
          <div className="border-[1px] group border-green-900 dark:border-gray-200 hover:border-0 hover:bg-[#244d4d] flex items-center flex-col justify-center gap-4 py-4 cursor-pointer">
            <img src={Icon2} alt="icon 1" />
            <p className="group-hover:text-gray-200 dark:text-gray-100 font-semibold  text-green-900">
              Working Table
            </p>
          </div>{" "}
          <div className="border-[1px] group border-green-900 dark:border-gray-200 hover:border-0 hover:bg-[#244d4d] flex items-center flex-col justify-center gap-4 py-4 cursor-pointer">
            <img src={Icon3} alt="icon 1" />
            <p className="group-hover:text-gray-200 dark:text-gray-100 font-semibold  text-green-900">
              Corner Table
            </p>
          </div>{" "}
          <div className="border-[1px] group border-green-900 dark:border-gray-200 hover:border-0 hover:bg-[#244d4d] flex items-center flex-col justify-center gap-4 py-4 cursor-pointer">
            <img src={Icon4} alt="icon 1" />
            <p className="group-hover:text-gray-200 dark:text-gray-100 font-semibold  text-green-900">
              Office Chair
            </p>
          </div>{" "}
          <div className="border-[1px] group border-green-900 dark:border-gray-200 hover:border-0 hover:bg-[#244d4d] flex items-center flex-col justify-center gap-4 py-4 cursor-pointer">
            <img src={Icon5} alt="icon 1" />
            <p className="group-hover:text-gray-200 dark:text-gray-100 font-semibold  text-green-900">
              New Wardrobe
            </p>
          </div>
        </div>
      </div>

      <div className="our-products md:mx-14 lg:mx-24  mt-14">
        <h1 className="text-green-900 dark:text-gray-100 font-semibold text-xl md:text-2xl px-4">
          Our Products
        </h1>
        <div className="border-[1px] border-green-900 border-opacity-70 dark:border-gray-200 mt-4 mx-4"></div>
        <div className="show-items-grid">
          {products.map((data, index) => (
            <div
              className="bg-gray-100 dark:bg-slate-500 group  flex gap-8 flex-col justify-around"
              key={index}
            >
              <div className="">
                <img
                  src={data.image}
                  alt={data.name}
                  className="transition-all w-full h-[270px] duartion-300 scale-90 group-hover:scale-100"
                />
              </div>
              <div className="prd-content pb-4 px-4">
                <p className=" text-gray-500 dark:text-gray-300">
                  $ {data.price}
                </p>
                <p className="text-xl text-slate-700 dark:text-gray-200 font-semibold">
                  {data.name}
                </p>
                <p className="rating mt-2 flex items-center">
                  {data.ratings === 5 && (
                    <>
                      <AiFillStar className="text-yellow-500 text-lg" />
                      <AiFillStar className="text-yellow-500 text-lg" />
                      <AiFillStar className="text-yellow-500 text-lg" />
                      <AiFillStar className="text-yellow-500 text-lg" />
                      <AiFillStar className="text-yellow-500 text-lg" />
                    </>
                  )}
                  {data.ratings === 4 && (
                    <>
                      <AiFillStar className="text-yellow-500 text-lg" />
                      <AiFillStar className="text-yellow-500 text-lg" />
                      <AiFillStar className="text-yellow-500 text-lg" />
                      <AiFillStar className="text-yellow-500 text-lg" />
                      <AiOutlineStar className="text-yellow-500 text-lg" />
                    </>
                  )}
                  {data.ratings === 3 && (
                    <>
                      <AiFillStar className="text-yellow-500 text-lg" />
                      <AiFillStar className="text-yellow-500 text-lg" />
                      <AiFillStar className="text-yellow-500 text-lg" />
                      <AiOutlineStar className="text-yellow-500 text-lg" />
                      <AiOutlineStar className="text-yellow-500 text-lg" />
                    </>
                  )}{" "}
                  {data.ratings === 2 && (
                    <>
                      <AiFillStar className="text-yellow-500 text-lg" />
                      <AiFillStar className="text-yellow-500 text-lg" />
                      <AiOutlineStar className="text-yellow-500 text-lg" />
                      <AiOutlineStar className="text-yellow-500 text-lg" />
                      <AiOutlineStar className="text-yellow-500 text-lg" />
                    </>
                  )}{" "}
                  {data.ratings === 1 && (
                    <>
                      <AiFillStar className="text-yellow-500 text-lg" />
                      <AiOutlineStar className="text-yellow-500 text-lg" />
                      <AiOutlineStar className="text-yellow-500 text-lg" />
                      <AiOutlineStar className="text-yellow-500 text-lg" />
                      <AiOutlineStar className="text-yellow-500 text-lg" />
                    </>
                  )}
                  {data.ratings === 0 && (
                    <>
                      <AiFillStar className="text-yellow-500 text-lg" />
                      <AiFillStar className="text-yellow-500 text-lg" />
                      <AiFillStar className="text-yellow-500 text-lg" />
                      <AiFillStar className="text-yellow-500 text-lg" />
                      <AiFillStar className="text-yellow-500 text-lg" />
                    </>
                  )}
                  <span className="text-gray-500 dark:text-gray-200 ml-1">
                    ({data.ratings})
                  </span>
                </p>

                <p className="py-4">
                  {data.inStock === 0 ? (
                    <button
                      className={`  px-3 py-2 rounded-md bg-green-500`}
                      disabled
                    >
                      Out of Stock
                    </button>
                  ) : (
                    <>
                      {carts.some((item) => item.id === data.id) ? (
                        <button
                          className={`  px-3 py-2 rounded-md bg-red-600`}
                          onClick={() => {
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: data,
                            });
                          }}
                        >
                          Remove From Cart
                        </button>
                      ) : (
                        <button
                          className={`  px-3 py-2 rounded-md bg-sky-500`}
                          onClick={() => {
                            dispatch({
                              type: "ADD_TO_CART",
                              payload: data,
                            });
                          }}
                        >
                          Add To Cart
                        </button>
                      )}
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
