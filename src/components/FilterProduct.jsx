import React, { useState } from "react";
import Rating from "./Rating";
import useMode from "../context/useMode";

const FilterProduct = () => {
  const {
    productState: {
      sort_by,
      fast_delivery,
      out_of_stock,
      rating,
      search_query,
    },
    productDispatch,
  } = useMode();

  console.log(sort_by, fast_delivery, out_of_stock, rating, search_query);

  return (
    <>
      <h1 className="text-base lg:text-3xl  text-white py-4">
        Filter Products
      </h1>
      <div className="male pb-2">
        <input
          name="group1"
          type="radio"
          id="ascending"
          className="form-radio"
          onChange={() =>
            productDispatch({
              type: "Filter_By_Price",
              payload: "lowToHigh",
            })
          }
          checked={sort_by === "lowToHigh" ? true : false}
        />
        <label className="px-2 text-sm lg:text-lg" htmlFor="ascending">
          Ascending
        </label>
      </div>

      <div className="female">
        <input
          name="group1"
          type="radio"
          id="descending"
          value="descending"
          className="form-radio"
          onChange={() =>
            productDispatch({
              type: "Filter_By_Price",
              payload: "highToLow",
            })
          }
          checked={sort_by === "highToLow" ? true : false}
        />
        <label className="px-2  text-sm lg:text-lg " htmlFor="descending">
          Descending
        </label>
      </div>

      <p className="my-4">
        <input
          type="checkbox"
          name="group1"
          className="mr-2 form-checkbox"
          onChange={() => {
            productDispatch({
              type: "Filter_Fast_Delivery",
            });
          }}
          checked={fast_delivery}
        />
        <span className=" text-sm lg:text-lg">Fast Delivery Only</span>
      </p>
      <p className="my-4">
        <input
          type="checkbox"
          name="group1"
          className="mr-2 form-checkbox"
          onChange={() => {
            productDispatch({
              type: "Filter_Out_Of_Stock",
            });
          }}
          checked={out_of_stock}
        />
        <span className=" text-sm lg:text-lg">Include Out Of Stock</span>
      </p>
      <p className="my-4 flex items-center ">
        <span className="text-sm mr-1 md:mr-3 lg:text-lg">Rating:</span>
        <Rating
          rating={rating}
          onClick={(i) =>
            productDispatch({
              type: "Filter_By_Rating",
              payload: i + 1,
            })
          }
          style={{ cursor: "pointer" }}
        />
      </p>

      <div className="flex justify-center mt-4">
        <button
          className="bg-sky-500 py-1 text-sm md:py-2 md:px-3 rounded-md w-full"
          onClick={() =>
            productDispatch({
              type: "Clear_Filter",
            })
          }
        >
          Clear All Filter
        </button>
      </div>
    </>
  );
};

export default FilterProduct;
