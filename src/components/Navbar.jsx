import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Navbar() {
  const [show, handleShow] = useState(false);
  const [showNav, handleShowNav] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className="fixed w-screen z-50">
      <div
        className={`flex text-[#111] transition-all ease-in duration-150  justify-between items-center p-5 px-10 ${
          show && "bg-slate-100 shadow-md"
        }  sm:px-10`}
      >
        <div className="">
          <a className="text-3xl font-bold font-sfpro">
            Happy <span className="text-orange-600">Belly.</span>{" "}
          </a>
        </div>

        <div className=" list-none text-md gap-14 font-bold font-sfpro hidden lg:flex">
          <a className="transition-all ease-in duration-200 hover:text-orange-600">
            <a href="">Download</a>
          </a>
          <a className="transition-all ease-in duration-200 hover:text-orange-600 ">
            <a href="">Services</a>
          </a>
          <a className="transition-all ease-in duration-200 hover:text-orange-600">
            <a href="">About</a>
          </a>
          <a className="transition-all ease-in duration-200 hover:text-orange-600">
            <a href="">Contact</a>
          </a>
        </div>

        <div className="">
          <button className="mx-5 transition-all ease-in duration-200 font-sfpro text-md border-gray-900 border-2 p-2 px-4 rounded-3xl hidden hover:text-neutral-100 hover:bg-[#111] lg:flex">
            Get Free Trial
          </button>
        </div>

        <svg
          onClick={() => handleShowNav(!showNav)}
          className="w-6 h-6 hover:cursor-pointer hover:text-orange-600 lg:hidden"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </div>

      <div
        className={`${
          showNav ? "block" : "hidden"
        } list-none bg-orange-300 text-center p-2 w-screen text-lg font-sfpro`}
      >
        <li className="py-4 hover:text-neutral-800">
          <a href="">Download</a>
        </li>
        <li className="py-4 hover:text-neutral-800">
          <a href="">Services</a>
        </li>
        <li className="py-4 hover:text-neutral-800">
          <a href="">About</a>
        </li>
        <li className="py-4 hover:text-neutral-800">
          <a href="">Contact</a>
        </li>
      </div>
    </div>
  );
}

export default Navbar;
