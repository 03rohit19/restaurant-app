import React, { useState } from "react";
import { LOGO_URL } from "../Utils.js/importantfiles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-purple-200 shadow-lg sm:bg-purple-200 md:bg-purple-00 rounded-md">
      <title />
      <div className="Header-container">
        <img className="h-28 p-2 bg-purple-200" alt="Logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">
              <button className="p-2 mr-2 font-bold border-none bg-purple-100 rounded-lg cursor-pointer font-serif">
                Home
              </button>
            </Link>
          </li>
          <li className="px-2">
            <Link to="/about">
              <button className="p-2 mr-2 font-bold border-none bg-purple-100 rounded-lg cursor-pointer font-serif">
                About
              </button>
            </Link>
          </li>
          <li className="px-2">
            <Link to="/contact">
              <button className="p-2 mr-2 font-bold border-none bg-purple-100 rounded-lg cursor-pointer font-serif">
                Contact
              </button>
            </Link>
          </li>
          <li className="px-2">
            <Link to="/cart">
              <button className="p-2 mr-2 font-bold border-none bg-purple-100 rounded-lg cursor-pointer font-serif">
                Cart - {cartItems.length}
              </button>
            </Link>
          </li>
          <li className="px-2">
            <Link to="/grocery">
              <button className="p-2 mr-2 font-bold border-none bg-purple-100 rounded-lg cursor-pointer font-serif">
                Grocery
              </button>
            </Link>
          </li>

          <div className="p-2 mr-2 font-bold border-none bg-purple-100 rounded-lg cursor-pointer font-serif">
            <button
              className="btn"
              onClick={() =>
                btn === "Login" ? setBtn("Logout") : setBtn("Login")
              }
            >
              {btn}
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
