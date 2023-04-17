import React, { useRef } from 'react';
import {animate, motion} from "framer-motion";
import Typewriter from 'typewriter-effect';
import {BsArrowUpRight} from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";

// import image

import myImg from "../assets/images/my-image2.png";

const Home = () => {

  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationFunc = () =>{
    animate(0,100,{
      duration: 1,
      onUpdate: value => clientCount.current.textContent = value.toFixed()
    })
  }

  const animationFuncForProject = () => {
    animate(0, 500, {
      duration: 1,
      onUpdate: (value) => projectCount.current.textContent = value.toFixed(),
    });
  };

    const motionAnimation = {
      h1: {
        initial: {
          x: "-100%",
          opacity: 0,
        },

        whileInView: {
          x: "0",
          opacity: 1,
        },
      },

      button: {
        initial: {
          y: "-100%",
          opacity: 0,
        },

        whileInView: {
          y: "0",
          opacity: 1,
        },
      },

      rightToLeft: {
        initial: {
          x: "100%",
          opacity: 0,
        },

        whileInView: {
          x: "0",
          opacity: 1,
        },
      },
    };

  return (
    <div id="home">
      <section className="home-left-sec">
        <div>
          <motion.h1 {...motionAnimation.h1}>
            Hi I am, <br /> Imran Khan
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Creator"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div className="hireme-sec">
            <a href="mailto:khanimran03466@gamil.com"> Hire Me </a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          <div className="home-bottom-sec">
            <article>
              <p>
                +
                <motion.span whileInView={animationFunc} ref={clientCount}>
                  100
                </motion.span>
              </p>
              <span>Clients Worldwide</span>
            </article>

            <aside>
              <article>
                <p>
                  +
                  <motion.span
                    whileInView={animationFuncForProject}
                    ref={projectCount}
                  >
                    500
                  </motion.span>
                </p>
                <span>Projects Done</span>
              </article>

              <article data-contact>
                <p>Contact</p>
                <span>khanimran03466@gmail.com</span>
              </article>
            </aside>
          </div>
        </div>
      </section>

      <section>
        <img src={myImg} alt="Imran Image" />
      </section>
      <div className="dow-arrow-icon">
        <a href="#work">
          <FiChevronDown />
        </a>
      </div>
    </div>
  );
}

export default Home