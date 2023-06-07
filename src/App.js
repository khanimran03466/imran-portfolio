import Header, { MobileNav } from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Timeline from "./components/Timeline";
import Services from "./components/Services.js";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";



function App() {

  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect( () => {
    
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
      <Header handleMenuClick={ handleMenuClick } />
      <Home handleMenuClick={ handleMenuClick } />
      <Work />
      <Timeline />
      <Services />
      <Contact />
      <Footer handleMenuClick={ handleMenuClick } />
      <Toaster />
    </>
  );
}

export default App;
