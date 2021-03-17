import React from "react";
import { Link } from "gatsby";

import SEO from "../components/seo";

const HomePage = () => (
  <>
    <SEO title="Home" />
    <div className="homepage-container">
      <div className="links-container">
        <div className="logo-container">
          <div className="logo-content">Kaung Nan Dar Shein</div>
        </div>
        <div className="links">
          <div className="code">
            <img src="https://a.espncdn.com/photo/2020/0903/r740305_1296x729_16-9.jpg" />
          </div>
          <div className="snap">
            <img src="https://a.espncdn.com/photo/2020/0903/r740305_1296x729_16-9.jpg" />
          </div>
          <div className="design">
            <img src="https://a.espncdn.com/photo/2020/0903/r740305_1296x729_16-9.jpg" />
          </div>
          <div className="about">
            <Link to="/about">
              <img src="https://a.espncdn.com/photo/2020/0903/r740305_1296x729_16-9.jpg" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default HomePage;
