import React from "react";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://www.facebook.com/profile.php?id=100054424039953"
        className="home__social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-facebook"></i>{" "}
      </a>

      <a
        href="https://www.instagram.com/_umbooo_/"
        className="home__social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-instagram"></i>{" "}
      </a>

      <a
        href="https://www.linkedin.com/in/th%E1%BB%8Bnh-h%E1%BB%93-013185237/"
        className="home__social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin"></i>{" "}
      </a>

      <a
        href="https://github.com/thinhbo19"
        className="home__social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github"></i>{" "}
      </a>
    </div>
  );
};

export default HeaderSocials;
