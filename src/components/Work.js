import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import data from "../assets/data.json";

const Work = () => {
  return (
    <section id="work" className="work">
      <div className="work-sec">
        <h2 className="heading">Work</h2>

        <Carousel
          showArrows={false}
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          interval={3000}
          showStatus={false}
        >
          {data.projects.map((item) => (
            <div className="slider-item" key={item.title}>
              <img src={item.imgSrc} alt={item.title} />
              <aside>
                <h3>{item.title}</h3>
                <p>{item.discription}</p>
                <a href={item.url} target="blank">
                  View Demo
                </a>
              </aside>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Work;
