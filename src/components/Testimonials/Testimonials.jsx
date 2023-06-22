import React,{ useRef, useState }from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
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
    Name:'Yogesh Sahu',
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eaque omnis quidem nulla distinctio praesentium quibusdam in fugiat possimus animi"
  },
  {
    avatar:AVTR2,
    Name:'Yogesh Sahu',
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eaque omnis quidem nulla distinctio praesentium quibusdam in fugiat possimus animi"
  },
  {
    avatar:AVTR3,
    Name:'Yogesh Sahu',
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eaque omnis quidem nulla distinctio praesentium quibusdam in fugiat possimus animi"
  },
  {
    avatar:AVTR4,
    Name:'Yogesh Sahu',
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eaque omnis quidem nulla distinctio praesentium quibusdam in fugiat possimus animi"
  },
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
