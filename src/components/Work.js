import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import img from "../assets/images/json-img-url/tatasteel.png";

import data from "../assets/data.json";

const Work = () => {
  return (
    <section id="work" className="work">
      <h2 className="heading">Work</h2>

      <Carousel showArrows={true} showThumbs={false} autoPlay={true} infiniteLoop={true} interval={3000} showStatus={false}  >
        {data.map((item) => (
          <div className="slider-item" key={item.title}>
            <img src={img} alt={item.title} />
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

    </section>
  );
};

export default Work;
