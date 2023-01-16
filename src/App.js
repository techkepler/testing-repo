import React, { useEffect } from "react";
import Home from "./page/Home";
import Shop from "./page/Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import useMode from "./context/useMode";
import About from "./page/About";
import Contact from "./page/Contact";
import ScrollToTop from "./context/ScrollToTop";
import Login from "./page/Login";
import Cart from "./page/Cart";

const App = () => {
  const { currentMode, setCurrentMode, currentLocation } = useMode();
  useEffect(() => {
    const ThemeMode = localStorage.getItem("themeMode");
    if (ThemeMode) {
      setCurrentMode({ mode: ThemeMode });
    }
  }, [setCurrentMode]);

  document.title = `${
    currentLocation ? currentLocation : ""
  } - Asgard Furniture`;

  return (
    <div
      className={`${
        currentMode.mode === "Dark" ? "dark bg-slate-600 h-full" : ""
      }`}
    >
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/products/" element={<Shop />} />
            <Route exact path="/about/" element={<About />} />
            <Route exact path="/contact/" element={<Contact />} />
            <Route exact path="/cart/" element={<Cart />} />
            <Route exact path="/login/" element={<Login />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default App;
