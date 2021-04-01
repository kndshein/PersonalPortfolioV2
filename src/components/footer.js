import React from "react";
import { GrInstagram, GrLinkedinOption, GrMedium } from "react-icons/gr";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
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
      <div className="footer-text">
        All works © 2020 - {new Date().getFullYear()} Kaung Nan Dar Shein. All
        rights reserved, I suppose. Powered by insomnia and unemployed tears.
      </div>
    </footer>
  );
}
