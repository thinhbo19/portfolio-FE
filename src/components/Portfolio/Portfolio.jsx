import React, { useState } from "react";
import "./Portfolio.css";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updateItems = Menu.filter((curItem) => {
      return curItem.category === categoryItem;
    });
    setItems(updateItems);
  };

  return (
    <section className="work container section" id="Portfolio">
      <h2 className="section_title">Recent Works</h2>

      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>
          Everything
        </span>
        <span className="work__item" onClick={() => filterItem("Creative")}>
          Creative
        </span>
        <span className="work__item" onClick={() => filterItem("Art")}>
          Art
        </span>
        <span className="work__item" onClick={() => filterItem("Design")}>
          Design
        </span>
        <span className="work__item" onClick={() => filterItem("Branding")}>
          Branding
        </span>
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, category, href } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>
              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <Link to={href} className="work__button">
                <i className="icon-link work__button-icon"></i>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
