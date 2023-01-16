import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { AiOutlineStar, AiFillStar, AiFillDelete } from "react-icons/ai";
import useMode from "../context/useMode";
import { useState } from "react";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState();

  const {
    state: { carts },
    dispatch,
  } = useMode();

  useEffect(() => {
    setTotalPrice(
      carts.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [carts]);

  return (
    <div className="min-h-[100vh]">
      <Navbar />
      {carts.length > 0 && <div className="lg:pt-28 pt-16"></div>}
      <div className="md:mx-6  pb-16">
        {carts.map((data, index) => (
          <div className="flex flex-wrap">
            <div
              className="product-details-section flex flex-col md:flex-row justify-between mb-10 w-[60%] md:w-[75%] px-4 gap-4 border-[1px] py-3"
              key={index}
            >
              <img src={data.image} alt="" className="w-36 h-24" />
              <p className="font-semibold dark:text-slate-200 text-lg">Bed</p>
              <p className="dark:text-slate-200">$ {data.price}</p>
              <p className="rating mt-2 flex ">
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
              </p>
              <select
                name="itemAmount"
                id="item"
                className="form-select w-32 h-12 dark:bg-slate-300"
                value={data.qty}
                onChange={(e) => {
                  dispatch({
                    type: "CHANGE_CART_ITEM_QTY",
                    payload: {
                      id: data.id,
                      qty: e.target.value,
                    },
                  });
                }}
              >
                {[...Array(data.inStock).keys()].map((nums) => (
                  <option key={nums + 1} value={nums + 1}>
                    {nums + 1}
                  </option>
                ))}
              </select>
              <AiFillDelete
                className="text-xl font-semibold dark:text-slate-200 cursor-pointer"
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: data,
                  });
                }}
              />
            </div>

            <div className="total-price bg-slate-600 dark:bg-slate-200 fixed lg:top-20 top-16 right-0 h-full w-[40%] md:w-[25%] py-4 px-4">
              <h1 className="text-lg  md:text-3xl text-white dark:text-black">
                Subtotal ({carts.length}) items
              </h1>
              <p className="my-6 font-semibold text-base md:text-lg text-white dark:text-black">
                Total: $ {totalPrice}
              </p>
              <div className="flex justify-center  md:mx-4 my-10">
                <button className="bg-sky-500 rounded-md px-3 py-1 md:py-3 w-full text-sm font-semibold">
                  Checkout Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
