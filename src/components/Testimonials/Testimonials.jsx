import React,{ useRef, useState }from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/neeraj.jpg";
import AVTR2 from "../../assets/Shivam.jpg";

// import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const data=[
  {
    avatar:AVTR1,
    Name:'Neeraj Jain',
    review:"Working alongside Yogesh has been a pleasure. Their mastery of CSS and HTML has been vital in creating visually stunning and responsive websites. They have an eye for design and an understanding of user experience that greatly enhances the quality of our projects. I highly recommend [Your Name] for any web development needs."
  },
  {
    avatar:AVTR2,
    Name:'Shivam Yadav',
    review:"Working with [Your Name] has been a game-changer in Logic building. Their proficiency in C and C++ is exceptional, enabling us to build robust and efficient software solutions. Their attention to detail and problem-solving abilities have consistently exceeded our expectations"
  },
  // {
  //   avatar:AVTR3,
  //   Name:'Yogesh Sahu',
  //   review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eaque omnis quidem nulla distinctio praesentium quibusdam in fugiat possimus animi"
  // },
  // {
  //   avatar:AVTR4,
  //   Name:'Yogesh Sahu',
  //   review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eaque omnis quidem nulla distinctio praesentium quibusdam in fugiat possimus animi"
  // },
]
const Testimonials = () => {
  return (
    <section id="Testimonials">
      <h5>Review From Client</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials_container mySwiper"
      pagination={{
        type: "fraction",
      }}
      navigation={true}
      modules={[Pagination, Navigation]}>

        {
          data.map(({avatar,Name,review},index)=>{
            return(
              <SwiperSlide key={index} className="testimonials">
                <div className="client_avtar">
                  <img src={avatar} alt="" />
                </div>
                <div className="client_name">{Name}</div>
                <small className="client_review">{review}</small>
              </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  );
};

export default Testimonials;
