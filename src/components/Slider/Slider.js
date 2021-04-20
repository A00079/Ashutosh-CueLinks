import React from "react";
import "./slider.css";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination, Autoplay]);
const Slider = (props) => {
  return (
    <div>
      <Swiper
        style={{ width: props.width }}
        spaceBetween={20}
        slidesPerView={1}
        loop={props.loop}
        pagination={props.pagination}
        autoplay={{
          delay: props.delay,
          disableOnInteraction: false,
        }}
        breakpoints={{
          "@0.50": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@2.00": {
            slidesPerView: props.spv2,
            spaceBetween: 10,
          },
        }}
      >
        {props.images && props.images.map((el, index) => (
          <SwiperSlide key={index}>
            <div>
              <img key={index} src={el} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Slider;
