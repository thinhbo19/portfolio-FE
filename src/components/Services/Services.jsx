import React from "react";
import "./Services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "UI/UX design",
    description:
      "I am Ho Ngoc Hung Thinh, a 3rd grade male student from Ho Chi Minh City University of Education",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "I am Ho Ngoc Hung Thinh, a 3rd grade male student from Ho Chi Minh City University of Education",
  },
  {
    id: 3,
    image: Image3,
    title: "Photography",
    description:
      "I am Ho Ngoc Hung Thinh, a 3rd grade male student from Ho Chi Minh City University of Education",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="Services">
      <h2 className="section_title">Sevices</h2>{" "}
      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />

              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
