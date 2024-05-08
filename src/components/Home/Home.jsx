import React from "react";
import "./Home.css";
import Me from "../../assets/avatar-1.jpg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className="home container" id="Home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Ho Ngoc Hung Thinh</h1>
        <span className="home__education">I like coding</span>

        <HeaderSocials />

        <a href="#Contact" className="btn">
          Contact to Me
        </a>

        <ScrollDown />

        <Shapes />
      </div>
    </section>
  );
};

export default Home;
