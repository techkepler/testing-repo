import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const Rating = ({ rating, onClick, style }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span
          onClick={() => onClick(i)}
          key={i}
          style={style}
          className="flex lg:gap-2"
        >
          {rating > i ? (
            <AiFillStar className="text-yellow-500 text-sm lg:text-lg" />
          ) : (
            <AiOutlineStar className="text-yellow-500 text-sm  lg:text-lg" />
          )}
        </span>
      ))}
    </>
  );
};

export default Rating;
