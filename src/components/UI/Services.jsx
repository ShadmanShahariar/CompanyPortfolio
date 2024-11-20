import React from "react";

import "../../styles/services.css";

const serviceData = [
  {
    icon: "ri-apps-line",
    title: "App Development",
    desc: "Lorem, ipsum dolor sit. Architecto, necessitatibus corporis! Voluptates, exercitationem similique. Deleniti. ",
  },
  {
    icon: "ri-code-s-slash-line",
    title: "WEB Design",
    desc: "Lorem, ipsum dolor sit. Architecto, necessitatibus corporis! Voluptates, exercitationem similique. Deleniti. ",
  },
  {
    icon: "ri-landscape-line",
    title: "Graphic Design",
    desc: "Lorem, ipsum dolor sit. Architecto, necessitatibus corporis! Voluptates, exercitationem similique. Deleniti. ",
  },
  {
    icon: "ri-rocket-line",
    title: "Digital Marketing",
    desc: "Lorem, ipsum dolor sit. Architecto, necessitatibus corporis! Voluptates, exercitationem similique. Deleniti. ",
  },
];

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="services__top-contant">
          <h6 className="subtitle">Our Services</h6>
          <h2>Save time managing your business with</h2>
          <h2 className="highlight">our best services</h2>
        </div>
        <div className="service_content-wrapper">
          {serviceData.map((item, index) => (
            <div className="services__item" key={index}>
              <span className="service__icon">
                <i class={item.icon}></i>
              </span>
              <h3 className="services__title">{item.title}</h3>
              <p className="description">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
