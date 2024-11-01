import React from "react";
import "../../styles/hero.css";

import heroDarkImg from "../../images/hero-img.png";

const Hero = () => {
  return (
    <section className="hero__section">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <div>
              <h2>We'r Creating Perfect</h2>
              <h2>Morden Solutions to</h2>
              <h2 className="highlight">Scale Your Business</h2>
            </div>
            <p className="discription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, officiis aliquam dignissimos perspiciatis repellendus
              quo.
            </p>
            <div className="hero__btns">
              <button className="primary__btn">Get Started Now</button>
              <button className="secondery__btn">Descover More</button>
            </div>
          </div>
          <div className="hero__image">
            <img src={heroDarkImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
