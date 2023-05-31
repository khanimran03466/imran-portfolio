import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  console.log(menuOpen);

  return (
    <>
      <header>
        <nav className="desk-nav">
          <NavContent />
          <div className="mob-nav">
          <MobileNav />
        </div>
        </nav>
        
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <AiOutlineMenu />
        </button>
      </header>
    </>
  );
};

export const MobileNav = () => (
  <>
    <div className="mobile-nav">
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
