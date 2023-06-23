import React from "react";
import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        YS CREATIONS
      </a>
      <ul className="permalinks">
        <li>
          <Link
            to="header"
            // spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
        <Link
            to="about"
            // spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            About
          </Link>
          
        </li>
        <li>
        <Link
            to="services"
            // spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Services
          </Link>
        </li>
        <li>
        <Link
            to="experience"
            // spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Experience
          </Link>
        </li>
        <li>
        <Link
            to="Portfolio"
            // spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Portfolio
          </Link>
        </li>
      </ul>
      <div className="footer_socials">
        <a
          href="https://www.facebook.com/profile.php?id=100026386613903&mibextid=ZbWKwL"
          target="_blank"
        >
          <BsFacebook />
        </a>
        <a href="https://www.linkedin.com/in/yogesh-sahu-SE" target="_blank">
          <FaLinkedin />
        </a>
        <a
          href="https://instagram.com/i._am_yogesh?igshid=ZDc4ODBmNjlmNQ=="
          target="_blank"
        >
          <FaInstagramSquare />
        </a>
        <a
          href="https://twitter.com/I__am__Yogesh?t=ggxwYrDgYRuXqXjCszsX8g&s=08"
          target="_blank"
        >
          <BsTwitter />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&#169;Yogesh Sahu-YS|All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
