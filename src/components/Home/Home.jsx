import React from "react";
import "./Home.css";
import Me from "../../assets/avatar-1.jpg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Ho Ngoc Hung Thinh</h1>
        <span className="home__education">I'm a Web Developer</span>

        <HeaderSocials />

        <a href="#Contact" className="btn">
          Contact to Me
        </a>

        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
