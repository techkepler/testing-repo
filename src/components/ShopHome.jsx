import React, { useState } from "react";
import Rating from "./Rating";
import useMode from "../context/useMode";
import FilterProduct from "./FilterProduct";
const ShopHome = () => {
  const {
    state: { products, carts },
    dispatch,
    productState: {
      sort_by,
      fast_delivery,
      out_of_stock,
      rating,
      search_query,
    },
  } = useMode();

  const filterProducts = () => {
    let sortedProducts = products;

    if (sort_by) {
      sortedProducts = products.sort((a, b) =>
        sort_by === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!out_of_stock) {
      sortedProducts = products.filter((data) => data.inStock);
    }

    if (fast_delivery) {
      sortedProducts = products.filter((data) => data.fastDelivery);
    }

    if (rating) {
      sortedProducts = products.filter((data) => data.ratings >= rating);
    }

    if (search_query) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(search_query.toLowerCase())
      );
    }

    return sortedProducts;
  };

  return (
    <div className="pt-16 lg:pt-20 ">
      <section className="shop-now flex gap-2">
        <div className="bg-slate-600 h-[100vh] w-[40%] md:w-[20%] px-4 text-white">
          <FilterProduct />
        </div>

        <div className="flex dark:bg-slate-700 flex-wrap justify-around gap-4 w-[60%]  md:w-[80%] md:pt-6 mx-2">
          {filterProducts().map((data, index) => (
            <div
              className="hover:box-shadow hover:shadow-2xl group flex gap-8 flex-col border-[1px] h-[420px]"
              key={index}
            >
              <div className="">
                <img src={data.image} alt={data.name} className="w-72" />
              </div>
              <div className="prd-content pb-4 px-4">
                <p className=" text-gray-500 dark:text-gray-300">
                  $ {data.price}
                </p>
                <p className="text-xl text-slate-700 dark:text-gray-200 font-semibold">
                  {data.name}
                </p>
                <p className=" text-slate-700 dark:text-gray-200 ">
                  {data.fastDelivery ? "Fast Delivery" : "4 Days Delivery"}
                </p>
                <p className="rating mt-2 flex items-center lg:gap-2">
                  <Rating rating={data.ratings} />
                </p>

                <p className="py-4">
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
                        className={`  px-3 py-2 rounded-md bg-sky-500 ${
                          data.inStock ? "bg-sky-500" : "bg-sky-300"
                        }`}
                        onClick={() => {
                          dispatch({
                            type: "ADD_TO_CART",
                            payload: data,
                          });
                        }}
                        disabled={!data.inStock}
                      >
                        {!data.inStock ? "Out Of Stock" : "Add To Cart"}
                      </button>
                    )}
                  </>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ShopHome;
