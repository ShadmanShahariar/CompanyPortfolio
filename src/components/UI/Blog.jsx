import React from "react";
import "../../styles/blog.css";

import videoImg from "../../images/video.png";

const Blog = () => {
  return (
    <section className="our__blogs">
      <div className="container">
        <div className="blog__top-contant">
          <h6 className="subtitle">Our blog</h6>
          <h2>
            Let's have a look from{" "}
            <span className="highlight">recent blog</span>
          </h2>
        </div>
        <div className="blog__wrapper">
          <div className="blog__item">
            <h2>Video</h2>
            <div className="blog__img">
              <img src={videoImg} alt="" />
              <p className="discription">
                To know about work . Warch some video f....
              </p>
              <div>
                <a href="#" className="learn__more">
                  <i class="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
