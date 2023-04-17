import React from 'react';
import {AiFillGithub, AiOutlineMail} from "react-icons/ai";
import { BsArrowUpSquareFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
        <div className="fooSec">
            <h2>Imran Khan</h2>
        </div>
        <div className="fooSec">
            <a href="mailto:khanimran03466@gmail.com">
                <AiOutlineMail />
                khanimran03466@gmail.com
            </a>
            <a href="https://github.com/khanimran03466" target='blank' >
                <AiFillGithub />
                GitHub
            </a>
        </div>
        <div className="fooSec">
            <a href="#home">
                <BsArrowUpSquareFill />
            </a>
        </div>
    </footer>
  )
}

export default Footer