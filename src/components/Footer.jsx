import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaArrowRight, FaHome, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="mt-10 pt-10 ">
      <a
        href="https://portfolio.techkepler.com"
        target="_blank"
        rel="noreferrer"
      >
        <small className="text-sm block underline pr-1 text-blue-900 dark:text-slate-300 font-semibold text-end">
          Developed By Bishal Rayamajhi
        </small>
      </a>
      <div className="bg-slate-200 dark:bg-slate-900 ">
        <div className="footer-grid py-10">
          <div className="quick-links px-4">
            <h1 className="text-[#244d4d] dark:text-[#3cabab] text-lg font-semibold pb-2">
              Quick Links
            </h1>
            <ul>
              <li className="flex items-center gap-2 py-1">
                <FaArrowRight className="inline text-green-900 dark:text-green-500 text-sm " />
                <Link
                  to="/"
                  className="text-slate-600 text-sm font-semibold dark:text-slate-300"
                >
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-2 py-1">
                <FaArrowRight className="inline text-green-900 dark:text-green-500 text-sm " />
                <Link
                  to="/products/"
                  className="text-slate-600 text-sm font-semibold dark:text-slate-300"
                >
                  Products
                </Link>
              </li>
              <li className="flex items-center gap-2 py-1">
                <FaArrowRight className="inline text-green-900 dark:text-green-500 text-sm " />
                <Link
                  to="/about/"
                  className="text-slate-600 text-sm font-semibold dark:text-slate-300"
                >
                  About
                </Link>
              </li>
              <li className="flex items-center gap-2 py-1">
                <FaArrowRight className="inline text-green-900 dark:text-green-500 text-sm " />
                <Link
                  to="/contact/"
                  className="text-slate-600 text-sm font-semibold dark:text-slate-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="media-links px-4">
            <h1 className="text-[#244d4d] dark:text-[#3cabab] text-lg font-semibold pb-2">
              Social Media Links
            </h1>
            <ul>
              <li className="flex items-center gap-3  py-1 md:py-2">
                <BsFacebook className="inline text-blue-700 dark:text-blue-500 text-lg " />
                <Link
                  to="/"
                  className="text-slate-600 text-sm font-semibold dark:text-slate-300"
                >
                  Facebook
                </Link>
              </li>
              <li className="flex items-center gap-3 py-1 md:py-2">
                <BsInstagram className="inline text-pink-600  text-lg " />
                <Link
                  to="/"
                  className="text-slate-600 text-sm font-semibold dark:text-slate-300"
                >
                  Instagram
                </Link>
              </li>
              <li className="flex items-center gap-3 py-1 md:py-2">
                <BsWhatsapp className="inline text-green-600 text-lg " />
                <Link
                  to="/"
                  className="text-slate-600 text-sm font-semibold dark:text-slate-300"
                >
                  Whatsapp
                </Link>
              </li>
            </ul>
          </div>

          <div className="contact-details px-4">
            <h1 className="text-[#244d4d] dark:text-[#3cabab] text-lg font-semibold pb-2">
              Contact
            </h1>
            <ul>
              <li className="flex items-center gap-3 py-1 md:py-2">
                <FaHome className="inline text-blue-700 dark:text-blue-500 text-lg " />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Ghorahi-10, Narayanpur, Dang
                </span>
              </li>
              <li className="flex items-center gap-3 py-1 md:py-2">
                <MdEmail className="inline text-sky-800 dark:text-sky-500 text-lg " />
                <a
                  href="mailto:rayamajhibishal441@gmail.com"
                  className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  rayamajhibishal556@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 py-1 md:py-2">
                <FaPhone className="inline text-green-600 text-lg " />
                <a
                  href="tel:9868090374"
                  className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  +977 98000001545
                </a>
              </li>
            </ul>
          </div>
        </div>

        <small className="text-center block text-slate-700 dark:text-slate-400 py-2 mt-4">
          &copy; Copyright 2022. All Rights Reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
