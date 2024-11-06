import React from "react";
import "../../styles/about.css";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about_wrapper">
          <div className="about_contant">
            <h6 className="subtitle">Why choose us</h6>
            <h2>Specialist in advising clients on</h2>
            <h2 className="highlight"> financial challenges</h2>
            <p className="discription about__content-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, soluta, quo cupiditate voluptatibus nostrum earum
              magnam sed voluptatem iste quaerat quasi labore ut culpa amet
              delectus porro incidunt dolor recusandae.
            </p>
          </div>
          <div className="about_img"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
