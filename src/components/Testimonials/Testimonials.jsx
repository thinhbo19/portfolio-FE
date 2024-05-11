import React, { useEffect, useState } from "react";
import "./Testimonials.css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";
import ReviewForm from "./ReviewForm";

const Testimonials = () => {
  const [open, setOpen] = useState(false);
  const [Data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/comment");
      setData(response.data.comlist.reverse());
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section className="testimonials container section" id="Testimonials">
      <h2 className="section_title">
        Clients & Reviews{" "}
        <button className="btn" onClick={handleOpen}>
          Write your thoughts
        </button>{" "}
      </h2>
      <Swiper
        className="testimonials__container grid"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {Data.map(({ id, image, title, subtitle, comment }) => {
          return (
            <SwiperSlide className="testimonial__item" key={id}>
              <div className="thumb">
                <img
                  src={image}
                  alt=""
                  style={{ width: "80px", height: "90px", borderRadius: "50%" }}
                />
              </div>
              <h3 className="testimonials__title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <ReviewForm open={open} handleClose={handleClose} fetchData={fetchData} />
    </section>
  );
};

export default Testimonials;
