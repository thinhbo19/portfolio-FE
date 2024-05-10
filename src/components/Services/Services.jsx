import React from "react";
import "./Services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Basic UI/UX design",
    description:
      "User interface and user experience design services to create beautiful and easy-to-use web and mobile applications.",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "Services to develop and build on-demand web applications, from static websites to complex dynamic web applications.",
  },
  {
    id: 3,
    image: Image3,
    title: "Tester",
    description:
      "Professional graphic design services, from logo design and brand identity to advertising and marketing materials.",
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
