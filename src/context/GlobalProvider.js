import React, { createContext, useState, useReducer } from "react";
import faker from "faker";
import { cartReducer, productReducer } from "./Reducer";

export const ThemeProvider = createContext();
faker.seed(99);
const GlobalProvider = ({ children }) => {
  const [currentMode, setCurrentMode] = useState({ mode: "Light" });
  const [currentLocation, setCurrentLocation] = useState("");

  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    carts: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    sort_by: "",
    fast_delivery: false,
    out_of_stock: false,
    rating: 0,
    search_query: "",
  });

  return (
    <ThemeProvider.Provider
      value={{
        currentMode,
        setCurrentMode,
        currentLocation,
        setCurrentLocation,
        state,
        dispatch,
        productState,
        productDispatch,
      }}
    >
      {children}
    </ThemeProvider.Provider>
  );
};

export default GlobalProvider;
