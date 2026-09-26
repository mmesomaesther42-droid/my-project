import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className="Navbar">
        <div className="logo">My site</div>
        <ul className="child">
          <li>
            <link to="/">Home</link>
          </li>
          <li>
            <link to="/about">About</link>
          </li>
          <li>
            <link to="/services">services</link>
          </li>
          <li>
            <link to="/contact">contact</link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
