import React from "react";
import { Link } from "gatsby";

import SEO from "../components/seo";

const HomePage = () => {
  var num = [],
    i = 0,
    len = 30;
  while (++i <= len) num.push(i);

  return (
    <>
      <SEO title="Home" />
      <div className="homepage-container">
        <div className="links-container">
          <div className="logo-container">
            <div className="logo-content">Kaung Nan Dar Shein</div>
          </div>
          <div className="links">
            <div className="code">
              <Link to="/about">
                <div className="link-title">I code.</div>
                <div className="link-hover">
                  {num.map((x, index) => {
                    return <span>CODE</span>;
                  })}
                </div>
                <img src="https://a.espncdn.com/photo/2020/0903/r740305_1296x729_16-9.jpg" />
              </Link>
            </div>
            <div className="snap">
              <Link to="/about">
                <div className="link-title">I snap.</div>
                <div className="link-hover">
                  {num.map((x, index) => {
                    return <span>CODE</span>;
                  })}
                </div>
                <img src="https://a.espncdn.com/photo/2020/0903/r740305_1296x729_16-9.jpg" />
              </Link>
            </div>
            <div className="design">
              <Link to="/about">
                <div className="link-title">I design.</div>
                <div className="link-hover">
                  {num.map((x, index) => {
                    return <span>CODE</span>;
                  })}
                </div>
                <img src="https://a.espncdn.com/photo/2020/0903/r740305_1296x729_16-9.jpg" />
              </Link>
            </div>
            <div className="about">
              <Link to="/about">
                <div className="link-title">I am.</div>
                <div className="link-hover">
                  {num.map((x, index) => {
                    return <span>CODE</span>;
                  })}
                </div>
                <img src="https://a.espncdn.com/photo/2020/0903/r740305_1296x729_16-9.jpg" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
