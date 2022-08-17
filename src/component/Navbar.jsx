import "./Navbar.css";
import React, { useState } from "react";
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaInstagram,
  FaHamburger
} from "react-icons/fa";

function Navbar() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <nav className="main-nav">
      {/*   First parts       */}
      <div className="logo">
        <h2>
          <span>M</span>uha
          <span>mm</span>ad
          <span>F</span>aisal
        </h2>
      </div>

      {/*   Second parts       */}
      <div
        className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}
      >
        <ul>
          <li>
            <a href="#">Grade Book</a>
          </li>
          <li>
            <a href="#">Good Hobby</a>
          </li>
          <li>
            <a href="#">Activities</a>
          </li>
          <li>
            <a href="#">Programmer</a>
          </li>
        </ul>
      </div>
      {/*   Social media link      */}
      <div className="social-media">
        <ul className="social-media-desktop">
          <li>
            <a herf="https://www.linkedin.com/notifications/">
              {" "}
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a herf="https://www.facebook.com/mohammad.faisal.775823">
              <FaFacebookSquare />
            </a>
          </li>

          <li>
            <a herf="https://www.instagram.com/mfaisal902/">
              <FaInstagram />
            </a>
          </li>
        </ul>
        <div className="hamburger-menu">
          <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <FaHamburger />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
