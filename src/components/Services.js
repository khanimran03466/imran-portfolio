import { motion } from "framer-motion";
import React from "react";

import { AiFillIeCircle } from "react-icons/ai";
import { IoDesktop, IoLogoReact } from "react-icons/io5";

const Services = () => {
  const animations = {
    whileInView: {
      opacity: 1,
      x: 0,
      y: 0,
    },

    one: {
      x: "-100%",
      opacity: 0,
    },
    twoThree: {
      y: "-100%",
      opacity: 0,
    },
    four: {
      y: "100%",
      opacity: 0,
    },
  };
  return (
    <section id="services" className="services">
      <div className="services-sec">
        <h2 className="heading">Services</h2>

        <div className="services-box">
          <motion.div
            className="services-box1"
            whileInView={animations.whileInView}
            initial={animations.one}
          >
            <h3>5+</h3>
            <p> Years Of Experience </p>
          </motion.div>

          <motion.div
            className="services-box2"
            whileInView={animations.whileInView}
            initial={animations.twoThree}
          >
            <AiFillIeCircle />
            <span>Web Development</span>
          </motion.div>

          <motion.div
            className="services-box3"
            whileInView={animations.whileInView}
            initial={animations.twoThree}
            transition={{ delay: 0.3 }}
          >
            <IoLogoReact className="react-icon" />
            <span>React JS Development</span>
          </motion.div>

          <motion.div
            className="services-box4"
            whileInView={animations.whileInView}
            initial={animations.four}
          >
            <IoDesktop />
            <span>Desktop Development (Electron JS) </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
