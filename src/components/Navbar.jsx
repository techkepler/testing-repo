import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaLightbulb,
  FaBars,
  FaUser,
  FaTimes,
  FaSun,
  FaMoon,
  FaShoppingCart,
} from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";
import useMode from "../context/useMode";

const Navbar = () => {
  const {
    currentMode,
    setCurrentMode,
    state: { carts },
    dispatch,
    productState: { search_query },
    productDispatch,
  } = useMode();
  const [showNav, setShowNav] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const lightMode = () => {
    setCurrentMode({ mode: "Light" });
    localStorage.setItem("themeMode", "Light");
  };

  const darkMode = () => {
    setCurrentMode({ mode: "Dark" });
    localStorage.setItem("themeMode", "Dark");
  };

  window.onscroll = () => {
    setShowNav(false);
  };

  return (
    <header class="header bg-slate-200 dark:bg-slate-800 flex justify-between items-center gap-10 h-16 md:h-20  fixed w-full px-6 lg:px-12 z-50">
      <div className="logon  h-6 items-center flex gap-4 text-green-900 dark:text-gray-300">
        <FaLightbulb className="text-lg md:text-2xl" />
        <p className="text-xl hidden md:block md:text-2xl font-semibold">
          Furniture
        </p>
      </div>
      <input
        type="search"
        name="search"
        id="search"
        value={search_query}
        className="form-input hidden md:block py-2 px-3 w-96 rounded-md text-black bg-slate-100 dark:bg-slate-400 dark:text-white"
        placeholder="Search a product...."
        onChange={(e) =>
          productDispatch({
            type: "Filter_By_Search_Query",
            payload: e.target.value,
          })
        }
      />

      <nav
        className={`fixed h-full transition-all duration-200 ease-linear top-0 w-72 bg-slate-300 dark:bg-slate-700 px-8 py-16 ${
          showNav ? "right-0" : "-right-72"
        }`}
      >
        <div className="absolute top-3 right-5">
          <FaTimes
            className="text-4xl text-green-900 dark:text-gray-300 font-semibold cursor-pointer"
            onClick={() => setShowNav(!showNav)}
          />
        </div>
        <ul className="flex pt-10 flex-col text-slate-700 dark:text-gray-300 text-lg font-semibold gap-10">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products/">Products</Link>
          </li>

          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/contact/">Contact</Link>
          </li>
        </ul>
      </nav>

      <div class="flex gap-4 md:gap-6 items-center">
        <div className="flex gap-3 items-center bg-green-500 py-2 px-2 rounded-md dark:text-slate-100">
          <Link to="/cart/">
            <FaShoppingCart className="text-xl md:text-2xl cursor-pointer " />
          </Link>
          <p className="font-semibold text-base">{carts.length}</p>
          <IoMdArrowDropdown
            className="font-semibold text-lg cursor-pointer"
            onClick={() => setShowCart(!showCart)}
          />
        </div>
        {currentMode.mode === "Light" ? (
          <FaMoon
            className="cursor-pointer text-xl md:text-2xl dark:text-gray-200"
            onClick={darkMode}
          />
        ) : (
          <FaSun
            className="cursor-pointer text-xl md:text-2xl dark:text-gray-300"
            onClick={lightMode}
          />
        )}

        <FaBars
          onClick={() => setShowNav(!showNav)}
          className="cursor-pointer text-xl md:text-2xl  dark:text-gray-300"
        />
      </div>

      <ProductDropdown
        isShoppingCart={showCart}
        setShowCart={setShowCart}
        carts={carts}
        dispatch={dispatch}
      />
    </header>
  );
};

export default Navbar;

const ProductDropdown = ({ isShoppingCart, carts, dispatch, setShowCart }) => {
  return (
    <div
      className={`bg-slate-400 fixed h-full overflow-y-scroll transition-all duration-200 origin-top top-16 lg:top-20 px-4 pt-6 pb-20 w-full md:w-96 right-0  ${
        isShoppingCart ? "scale-100" : "scale-0"
      }`}
    >
      {carts?.length < 1 ? (
        <p className="text-center text-lg font-semibold">Cart is Empty</p>
      ) : (
        <>
          {carts.map((data, index) => (
            <div
              className=" flex justify-between gap-2
                 mb-6 border-[1px] px-4 py-2"
              key={index}
            >
              <div>
                <div
                  className="h-14 w-14 bg-cover bg-center rounded-full"
                  style={{ backgroundImage: `url(${data.image})` }}
                ></div>
              </div>
              <div>
                <p className="font-semibold">{data.name}</p>
                <p>$ {data.price.split(".")[0]} </p>
              </div>
              <AiFillDelete
                className="text-xl cursor-pointer"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: data,
                  })
                }
              />
            </div>
          ))}
          <div className="flex justify-center">
            <Link
              to="/cart/"
              className="w-full text-center mx-4 py-2 my-6 bg-sky-700 text-white rounded-md font-semibold"
              onClick={(cart) => setShowCart(!cart)}
            >
              Go To Cart
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
