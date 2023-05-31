import React, { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import vg from "./../assets/images/vg.png";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";






const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [disableBtn, setDisableBtn] = useState(false);
  

  const formHandler = async (e) => {
    e.preventDefault();
    setDisableBtn(true);
    

    try{
      await addDoc(collection(db, "collection"), {
        name,
        email,
        message,
      });
      toast.success("Your message is sent");
      setDisableBtn(false);
      setEmail("");
      setMessage("");
      setName("");
    }

    catch(error){
      toast.error("Erorr");
      setDisableBtn(false);
    }

    
  };

  // Animation

  const animations = {
    form: {
      initial: {
        x: "100",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },

    button: {
      initial: {
        y: "-100",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
      transition: {
        delay: " 0.5",
      },
    },
  };

  return (
    <section id="contact" className="contact">
      <div className="form">
        <motion.form onSubmit={formHandler} {...animations.form}>
          <h2 className="heading">Contact Me</h2>

          <input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            type="textarea"
            placeholder="Your Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <motion.button 
            type="submit" 
            disabled={disableBtn}
            {...animations.button}>

            Send

          </motion.button>

        </motion.form>
      </div>
      <div className="right-hello-img">
        <img src={vg} alt="hello" />
      </div>
    </section>
  );
};

export default Contact;
