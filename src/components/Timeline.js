import React from "react";
import data from "../assets/data.json";

const Timeline = () => {
  return (
    <section className="experience" id="experience">
      <div className="timeLineBox">
        {data.experiance.map((item, index) => (
          <TimeLineItem
            heading={item.title}
            text={item.date}
            index={index}
            key={item.title} 
          />
        ))}
      </div>
    </section>
  );
};

const TimeLineItem = ({ heading, text, index }) => {
  return (
    <div
      className={`timeline ${
        index % 2 === 0 ? "leftTimeLine" : "rightTimeLine"
      }`}
    >
      <div>
        <h2>{heading}</h2> 
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Timeline;
