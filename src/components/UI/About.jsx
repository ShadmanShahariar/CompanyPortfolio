import React from "react";
import "../../styles/about.css";

import aboutImg from "../../images/about-us.jpg";

const chooseData = [
  {
    icon: "ri-wifi-line",
    title: "Fast working process",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porro perspiciatis! Numquam, illo? Placeat vitae,necessitatibus unde voluptatibus nihil in.",
  },
  {
    icon: "ri-team-line",
    title: "Dedicated Team",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porro perspiciatis! Numquam, illo? Placeat vitae,necessitatibus unde voluptatibus nihil in.",
  },
  {
    icon: "ri-customer-service-2-line",
    title: "24/7 Support",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porro perspiciatis! Numquam, illo? Placeat vitae,necessitatibus unde voluptatibus nihil in.",
  },
];

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about_wrapper">
          <div className="about_contant">
            <h6 className="subtitle">Why choose us</h6>
            <h2>Specialist in advising clients on</h2>
            <h2 className="highlight"> financial challenges</h2>
            <p className="description about__content-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, soluta, quo cupiditate voluptatibus nostrum earum
              magnam sed voluptatem iste quaerat quasi labore ut culpa amet
              delectus porro incidunt dolor recusandae.
            </p>
            <div className="choose__item-wrapper">
              {chooseData.map((item, index) => (
                <div className="choose__us-item" key={index}>
                  <span className="choose__us-icon">
                    <i class={item.icon}></i>
                  </span>
                  <div>
                    <h4 className="choose__us-title">{item.title}</h4>
                    <p className="description">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about_img">
            <img src={aboutImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
