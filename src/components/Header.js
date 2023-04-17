import React from 'react'

const Header = () => {


  return (
    <>
      <header>
        <nav>
          <NavContent />
        </nav>
      </header>
    </>
  );
}



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
)

export default Header;