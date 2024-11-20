import React from "react";
import "../../styles/testimonial.css";

import Slider from "react-slick";

import ava01 from "../../images/ava-1.jpg";
import ava02 from "../../images/ava-2.jpg";
// import ava03 from "../../images/ava-3.jpg";
// import ava04 from "../../images/ava-4.jpg";
// import ava05 from "../../images/ava-5.jpg";

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  return (
    <section>
      <div className="container">
        <div className="slider__content-top">
          <h6 className="subtitle">Testimonial</h6>
          <h2>
            Trusted by more than{" "}
            <span className="highlight">5,000 customer</span>
          </h2>
        </div>
        <div className="slider__wrapper">
          <Slider {...settings}>
            <div className="slider__item">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                placeat laudantium porro mollitia repellat natus tempora aliquam
                aperiam molestiae neque velit voluptas. Numquam mollitia quae
                debitis quod incidunt fugit, placeat distinctio assumenda
                excepturi fuga possimus nihil repellendus veritatis atque!
                Ullam.
                <div className="customer__details">
                  <div className="customer__img">
                    <img src={ava01} alt="" />
                  </div>
                  <div>
                    <h5 className="customer__name">Jhon Doe</h5>
                    <p className="description">CEO, Workcreation</p>
                  </div>
                </div>
              </p>
            </div>
            <div className="slider__item">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                placeat laudantium porro mollitia repellat natus tempora aliquam
                aperiam molestiae neque velit voluptas. Numquam mollitia quae
                debitis quod incidunt fugit, placeat distinctio assumenda
                excepturi fuga possimus nihil repellendus veritatis atque!
                Ullam.
                <div className="customer__details">
                  <div className="customer__img">
                    <img src={ava02} alt="" />
                  </div>
                  <div>
                    <h5 className="customer__name">Jhon Wick</h5>
                    <p className="description">CEO, Jotil kaj</p>
                  </div>
                </div>
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
