import React from "react";

function Navbar() {
  return (
    <nav className="w-[100vw] flex justify-around fixed z-10 top-0 bg-white">
      {/* Navbar left logo and kfc section   */}
      <div className="m-auto mt-[-3px] ml-40 w-auto ">
        <div className="flex">
          <span className="inline-block bg-red-600 w-[6px] h-4 mx-0.5"></span>
          <span className="inline-block bg-red-600 w-[6px] h-4 mx-0.5 "></span>
          <span className="inline-block bg-red-600 w-[6px] h-4 mx-0.5 "></span>
        </div>
        <img
          className="w-32 my-5"
          src="assets\images\kfc-text-logo.svg"
          alt=""
        />
      </div>

      {/* Navbar centre menu section */}
      <ul className="flex gap-7 text-xs font-semibold m-6 items-center mt-10">
        <li>
          <a className="hover:underline" href="">
            Menu
          </a>
        </li>
        <li>
          <a className="hover:underline " href="">
            Rewards
          </a>
        </li>
        <li>
          <a className="hover:underline whitespace-nowrap" href="">
            Gift Cards
          </a>
        </li>
        <li>
          <a className="hover:underline" href="">
            Merch
          </a>
        </li>
        <li className="flex">
          <a className="hover:underline whitespace-nowrap" href="">
            Find A KFC
          </a>
          <img
            className="w-2 mx-1"
            src="src\assets\images\box-arrow-up-right.svg"
            alt=""
          />
        </li>
      </ul>

      {/* Navbar right login and order cart section */}
      <div className="flex items-center px-4 m-auto">
        <img
          className="w-5 hover:cursor-pointer"
          src="assets\images\kfc-user-sign-icon.svg"
          alt=""
        />
        <span className="text-[1vw] mx-2 opacity-20">|</span>
        <img
          className="w-5 hover:cursor-pointer"
          src="assets\images\kfc-kart-icon.svg"
          alt=""
        />
        &nbsp;
        <button className="bg-red-600 text-white px-12 py-2 rounded-3xl text-[1vw] mx-4 hover:bg-red-700 font-bold">
          Start Order
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
