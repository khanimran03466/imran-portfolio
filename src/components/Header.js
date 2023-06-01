import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [navFixed, setNavFixed] = useState("");

  console.log(menuOpen);

  return (
    <>
      <header>
        <nav>
          <div className="desk-nav">
            <NavContent />
          </div>
          <div className={`mob mob-nav ${menuOpen?"active":""}`}>
            <MobileNav setMenuOpen={setMenuOpen} />
          </div>
        </nav>

        <button onClick={() => setMenuOpen(!menuOpen)} className={ `mob ${menuOpen?"active":""}` }>
          <AiOutlineMenu />
        </button>
      </header>
    </>
  );
};

const MobileNav = ({setMenuOpen}) => (
  <>
    <div className="mobile-nav" onClick={ ()=> setMenuOpen(false) }>
      <NavContent />
    </div>
  </>
);

const NavContent = () => (
  <>
    <h2>IMRAN.</h2>
    <div>
      <a href="#home">Home</a>
      <a href="#work">Work</a>
      <a href="#experience">Experience</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
    </div>
    <a href="mailto:khanimran03466@gamil.com">
      <button>Email</button>
    </a>
  </>
);

export default Header;
