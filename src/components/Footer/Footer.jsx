import React from "react";
import "./Footer.css";
import {BsFacebook} from 'react-icons/bs'
import {FaLinkedin} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        YS CREATIONS
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#">Sevices</a>
        </li>
        <li>
          <a href="#">Experience</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href=""><BsFacebook/></a>
        <a href=""><FaLinkedin/></a>
        <a href=""><FaInstagramSquare/></a>
        <a href=""><BsTwitter/></a>
      </div>
      <div className="footer_copyright">
        <small>&#169;Yogesh Sahu-YS|All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
