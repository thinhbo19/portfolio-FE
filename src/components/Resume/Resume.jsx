import React from "react";
import "./Resume.css";
import Data from "./Data";
import Card from "./Card";

const Resume = () => {
  return (
    <section className="resume container section" id="Resume">
      <h2 className="section_title">Experience</h2>

      <div className="resume__container grid">
        {Data.map((val, index) => (
          <div key={index} className="timeline grid">
            {(val.category === "education" ||
              val.category === "experience") && (
              <Card
                icon={val.icon}
                title={val.title}
                year={val.year}
                desc={val.desc}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resume;
