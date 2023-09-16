import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  // let btnName = "login";
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
          <Link to="/cart">Cart</Link>
          </li>
          <button
            className="login"
            onClick={() =>
              btnName === "login" ? setBtnName("logout") : setBtnName("login")
            }
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
