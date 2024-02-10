import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../assets/logo.svg";

const Sidebar = () => {
  const [isToggle, showMenu] = useState(false);

  return (
    <>
      <aside className={isToggle ? "aside show-menu" : "aside"}>
        <a href="#Home" className="nav__logo">
          <img src={Logo} alt="img" />
        </a>

        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#Home" className="nav__link">
                  <i className="icon-home"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#About" className="nav__link">
                  <i className="icon-user"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#Services" className="nav__link">
                  <i className="icon-briefcase"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#Resume" className="nav__link">
                  <i className="icon-graduation"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#Portfolio" className="nav__link">
                  <i className="icon-layers"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#Blog" className="nav__link">
                  <i className="icon-note"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#Contact" className="nav__link">
                  <i className="icon-bubble"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav__footer">
          <span className="copyright">&copy; 2024 - 2025.</span>
        </div>
      </aside>
      <div
        className={isToggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
        onClick={() => showMenu(!isToggle)}
      >
        <i className={isToggle ? "icon-close" : "icon-menu"}></i>
      </div>
    </>
  );
};

export default Sidebar;
