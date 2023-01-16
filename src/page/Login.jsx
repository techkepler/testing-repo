import React, { useState, useEffect } from "react";
import BgImg from "../assets/image/table1.jpeg";
import useMode from "../context/useMode";

const Login = () => {
  const { setCurrentLocation } = useMode();
  useEffect(() => {
    setCurrentLocation("Login");
  }, [setCurrentLocation]);

  const [data, setData] = useState({
    usr_name: "",
    pass: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({
      usr_name: "",
      pass: "",
    });
  };

  return (
    <div
      className="bg-cover bg-repeat h-[100vh] px-6 flex items-center justify-center"
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      <form className="bg-white md:w-96 px-4 w-full py-6 md:h-80 rounded-md">
        <h1 className="text-green-900 mb-6 text-center text-2xl font-semibold ">
          Login
        </h1>
        <div className="usr-name my-4">
          <label htmlFor="username" className="block">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) => setData({ usr_name: e.target.value })}
            value={data.usr_name}
            className="py-3 px-3 rounded-md w-full form-input"
          />
        </div>
        <div className="usr-pass">
          <label htmlFor="pass" className="block">
            Password
          </label>
          <input
            type="password"
            name="pass"
            id="pass"
            onChange={(e) => setData({ pass: e.target.value })}
            value={data.pass}
            className="py-3 px-3 rounded-md w-full form-input"
          />
        </div>

        <div className="submi-btn mt-5 flex justify-center">
          <button
            onClick={handleSubmit}
            className="bg-green-500 px-3 py-2 rounded-md"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
