import React from "react";
import CV from "../../assets/cv.pdf";
import "./Header.css";
import { Link } from "react-scroll";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Dowlaod CV
      </a>
      {/* <a href="#Contant" className='btn btn-primary'>Let's Talk</a> */}
      <Link
        to="contant"
        // spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className="btn btn-primary"
      >
        Let's Talk
      </Link>
    </div>
  );
};

export default CTA;
