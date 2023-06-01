import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  // const [navFixed, setNavFixed] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(()=>{

    // window.addEventListener("scroll", e =>{
    //   var doc = document.documentElement;
    //   const top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    //   if(top >= 75) {
    //     setNavFixed(true)
    //   } else {
    //     setNavFixed(false)
    //   }
    // } );

    let headerHgt = document.querySelector("header").clientHeight;
    setHeaderHeight(headerHgt);

  },[])

  

  const handleMenuClick = (e) => {
    e.preventDefault();
    const element = document.getElementById(`${e.target.getAttribute("href").replace("#", "")}`)
    const y = element.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scroll({
      top: y,
      behavior: 'smooth'
    });
  }

  return (
    <>
      <header>
        <nav>
          <div className="desk-nav">
            <NavContent handleMenuClick={handleMenuClick} />
          </div>
          <div className={`mob mob-nav ${menuOpen?"active":""}`}>
            <MobileNav setMenuOpen={setMenuOpen} handleMenuClick={handleMenuClick} />
          </div>
        </nav>

        <button onClick={() => setMenuOpen(!menuOpen)} className={ `mob ${menuOpen?"active":""}` }>
          <AiOutlineMenu />
        </button>
      </header>
    </>
  );
};

const MobileNav = ({setMenuOpen, handleMenuClick}) => (
  <>
    <div className="mobile-nav" onClick={ ()=> setMenuOpen(false) }>
      <NavContent handleMenuClick={handleMenuClick} />
    </div>
  </>
);

const NavContent = ({handleMenuClick}) => (
  <>
    <h2>IMRAN.</h2>
    <div>
      <a href="#home" onClick={handleMenuClick}>Home</a>
      <a href="#work" onClick={handleMenuClick}>Work</a>
      <a href="#experience" onClick={handleMenuClick}>Experience</a>
      <a href="#services" onClick={handleMenuClick}>Services</a>
      <a href="#contact" onClick={handleMenuClick}>Contact</a>
    </div>
    <a href="mailto:khanimran03466@gamil.com">
      <button>Email</button>
    </a>
  </>
);

export default Header;
