import React from "react";
import Link from "gatsby-link";

export default function Navbar() {
  return (
    <>
      {/* <div className="overlay">
        <div className="overlay-content">
          <li>
            <Link to="/code">I code</Link>
          </li>
          <li>
            <Link to="/snap">I snap</Link>
          </li>
          <li>
            <Link to="/about">I am</Link>
          </li>
        </div>
      </div> */}
      <div className="navbar-container">
        <nav className="navbar">
          <Link to="/" id="logo">
            Kaung Nan Dar Shein
          </Link>
          <div id="mobile-nav">
            <div className="menu-button">
              <div className="menu-button-burger"></div>
            </div>
            <div className="overlay-background"></div>
          </div>
          <ul className="navbar-links">
            <li>
              <Link to="/code">I code</Link>
            </li>
            <li>
              <Link to="/design">I design</Link>
            </li>
            <li>
              <Link to="/snap">I snap</Link>
            </li>
            <li>
              <Link to="/about">I am</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
