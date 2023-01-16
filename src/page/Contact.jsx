import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useMode from "../context/useMode";

const Contact = () => {
  const { setCurrentLocation } = useMode();
  useEffect(() => {
    setCurrentLocation("Contact");
  }, [setCurrentLocation]);

  const initalValue = {
    name: "",
    email: "",
    phone: "",
    msg: "",
  };

  const [data, setData] = useState(initalValue);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setData(initalValue);
  };
  return (
    <div>
      <Navbar />
      <div className="pt-20"></div>

      <div className="flex justify-center flex-col md:items-center px-4">
        <h1 className="text-green-900 text-center my-6 text-3xl font-semibold dark:text-slate-200">
          Contact Us
        </h1>
        <form
          action=""
          className="w-full md:w-[60%] lg:w-[50%] dark:bg-slate-900 px-6 py-8 rounded-md md:px-8"
        >
          <div className="name">
            <label htmlFor="name" className="mb-1 block dark:text-slate-200">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              value={data.name}
              className="form-input rounded-md py-3 px-3 w-full dark:bg-slate-500"
            />
          </div>
          <div className="email my-4">
            <label htmlFor="email" className="mb-1 block dark:text-slate-200">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              value={data.email}
              className="form-input rounded-md py-3 px-3 w-full dark:bg-slate-500"
            />
          </div>
          <div className="phone my-4">
            <label htmlFor="phone" className="mb-1 block dark:text-slate-200">
              Contact No.
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              onChange={handleChange}
              value={data.phone}
              className="form-input rounded-md py-3 px-3 w-full dark:bg-slate-500"
            />
          </div>
          <div className="msg my-4">
            <label htmlFor="msg" className="mb-1 block dark:text-slate-200">
              Write Your Message.
            </label>

            <textarea
              name="msg"
              id="msg"
              cols="30"
              rows="5"
              onChange={handleChange}
              value={data.msg}
              className="form-textarea rounded-md py-3 px-3 w-full dark:bg-slate-500"
            ></textarea>
          </div>

          <div className="pt-4">
            <button
              onClick={handleFormSubmit}
              className="bg-green-500 rounded-md px-2 py-2 mx-3"
            >
              Submit
            </button>
            <button
              type="cancel"
              className="bg-red-500 rounded-md px-2 py-2 mx-3"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
