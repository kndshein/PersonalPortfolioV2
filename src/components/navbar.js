import React from "react";
import Link from "gatsby-link";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleMobileNav = () => {
    mobileOpen ? setMobileOpen(false) : setMobileOpen(true);
  };

  return (
    <>
      <div className={`overlay ${mobileOpen ? "open" : ""}`}>
        <div className="overlay-content">
          <li>
            <Link to="/code/" activeClassName="active" partiallyActive={true}>
              I code.
            </Link>
          </li>
          <li>
            <Link to="/design/" activeClassName="active" partiallyActive={true}>
              I design.
            </Link>
          </li>
          <li>
            <Link to="/snap/" activeClassName="active" partiallyActive={true}>
              I snap.
            </Link>
          </li>
          <li>
            <Link to="/about/" activeClassName="active" partiallyActive={true}>
              I am.
            </Link>
          </li>
        </div>
      </div>
      <div className="navbar-container">
        <nav className="navbar">
          <Link to="/" id="logo">
            Kaung Nan Dar Shein
          </Link>
          <div id="mobile-nav">
            <div
              className={`menu-button ${mobileOpen ? "open" : ""}`}
              onClick={() => handleMobileNav()}
            >
              <div className="menu-button-burger"></div>
            </div>
            <div
              className={`overlay-background ${mobileOpen ? "open" : ""}`}
            ></div>
          </div>
          <ul className="navbar-links">
            <li>
              <Link to="/code/" activeClassName="active" partiallyActive={true}>
                I code.
              </Link>
            </li>
            <li>
              <Link
                to="/design/"
                activeClassName="active"
                partiallyActive={true}
              >
                I design.
              </Link>
            </li>
            <li>
              <Link to="/snap/" activeClassName="active" partiallyActive={true}>
                I snap.
              </Link>
            </li>
            <li>
              <Link
                to="/about/"
                activeClassName="active"
                partiallyActive={true}
              >
                I am.
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
