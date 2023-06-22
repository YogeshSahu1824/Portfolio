import React from "react";
import "./About.css";

import { MdOutlineWorkspacePremium } from "react-icons/md";
import { FiUserPlus } from "react-icons/fi";
import { AiFillFolderOpen } from "react-icons/ai";
import { Link } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import Me1 from "../../assets/about1.jpeg";
import Me2 from "../../assets/about2.jpg";
import Me3 from "../../assets/about3.jpg";
import Me4 from "../../assets/about4.jpg";
import Me5 from "../../assets/about5.jpg";
import Me6 from "../../assets/about6.jpg";
const About = () => {
  
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <Swiper  className="about_me"
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
   
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          
        >
          
          
          <SwiperSlide className="about_meimg">
            <img src={Me1} alt="About Image" />
          </SwiperSlide>
          <SwiperSlide className="about_meimg">
            <img src={Me2} alt="About Image" />
          </SwiperSlide>
          <SwiperSlide className="about_meimg">
            <img src={Me3} alt="About Image" />
          </SwiperSlide>
          <SwiperSlide className="about_meimg">
            <img src={Me4} alt="About Image" />
          </SwiperSlide>
          <SwiperSlide className="about_meimg">
            <img src={Me5} alt="About Image" />
          </SwiperSlide>
          <SwiperSlide className="about_meimg">
            <img src={Me6} alt="About Image" />
          </SwiperSlide>
          
          </Swiper>
         
        {/* </Swiper> */}
        <div className="about_content">
          <div className="about_card1">
            <article className="about_card">
              <MdOutlineWorkspacePremium className="about_icon" />
              <h5>Experience</h5>
              <small>Fresher </small>
            </article>
            <article className="about_card">
              <FiUserPlus className="about_icon" />
              <h5>User</h5>
              <small>10+ </small>
            </article>
            <article className="about_card">
              <AiFillFolderOpen className="about_icon" />
              <h5>Project</h5>
              <small>5+ Completed and Incomplete Project</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            quidem! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Vitae quos voluptatum sit aspernatur voluptates consequatur iste
            necessitatibus, suscipit voluptatem earum?
          </p>
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
      </div>
    </section>
  );
};

export default About;
