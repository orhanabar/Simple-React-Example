import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

import "./style.css";

function Slide() {
  const magazaFoto = [
    {
      src: require("../assets/images/Magaza/magaza.jpg"),
      header: ""
    },
    {
      src: require("../assets/images/Magaza/magaza2.jpg"),
      header: ""
    },
    {
      src: require("../assets/images/Magaza/magaza3.jpg"),
      header: ""
    },
    {
      src: require("../assets/images/Magaza/magaza4.jpg"),
      header: ""
    },
    {
      src: require("../assets/images/Magaza/magaza5.jpg"),
      header: ""
    },
    {
      src: require("../assets/images/Magaza/magaza6.jpg"),
      header: ""
    }
  ];

  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {magazaFoto.map((image) => {
          return (
            <SwiperSlide>
              <img src={image.src} alt="slide_image" />
            </SwiperSlide>
          );
        })}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Slide;
