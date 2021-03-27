import React from "react";
import { Link } from "gatsby";
import Typist from "react-typist";
import { GrInstagram, GrLinkedinOption, GrMedium } from "react-icons/gr";

import SEO from "../components/seo";

const HomePage = () => {
  var num = [],
    num2 = [],
    i = 0,
    j = 0,
    len = 75,
    len2 = 120;
  while (++i <= len) num.push(i);
  while (++j <= len2) num2.push(i);

  return (
    <>
      <SEO title="Home" />
      <div className="homepage-container">
        <div className="links-container">
          <div className="logo-container">
            <Link to="/" className="logo-content">
              Kaung Nan Dar Shein
            </Link>
          </div>
          <div className="links">
            <div className="code">
              <Link to="/code">
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
              <Link to="/design">
                <div className="link-title">I design.</div>
                <div className="link-hover">
                  {num.map((x, index) => {
                    return <span>DESIGN</span>;
                  })}
                </div>
                <img src="https://a.espncdn.com/photo/2020/0903/r740305_1296x729_16-9.jpg" />
              </Link>
            </div>
            <div className="design">
              <Link to="/snap">
                <div className="link-title">I snap.</div>
                <div className="link-hover">
                  {num.map((x, index) => {
                    return <span>SNAP</span>;
                  })}
                </div>
                <img src="https://a.espncdn.com/photo/2020/0903/r740305_1296x729_16-9.jpg" />
              </Link>
            </div>
            <div className="about">
              <Link to="/about">
                <div className="link-title">I am.</div>
                <div className="link-hover">
                  {num2.map((x, index) => {
                    return <span>AM</span>;
                  })}
                </div>
                <img src="https://a.espncdn.com/photo/2020/0903/r740305_1296x729_16-9.jpg" />
              </Link>
            </div>
          </div>
        </div>
        <div className="social-links">
          <Typist
            avgTypingDelay={40}
            stdTypingDelay={0}
            cursor={{ blink: true, element: "." }}
          >
            <span>Front-End Developer</span>
            <Typist.Backspace count={19} delay={800} />
            <span>Graphic Designer</span>
            <Typist.Backspace count={16} delay={800} />
            <span>Chemist</span>
            <Typist.Backspace count={7} delay={800} />
            <span>Keyboard Enthusiast</span>
            <Typist.Backspace count={19} delay={800} />
            <span>Material Minimalist</span>
            <Typist.Backspace count={19} delay={800} />
            <span>Aesthetic Minimalist</span>
            <Typist.Backspace count={20} delay={800} />
            <span>Front-End Developer</span>
          </Typist>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/kndshein/"
              >
                <GrLinkedinOption />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/durian.puberty/"
              >
                <GrInstagram />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://medium.com/@kndshein"
              >
                <GrMedium />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomePage;
