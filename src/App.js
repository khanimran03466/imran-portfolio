import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Timeline from "./components/Timeline";
import Services from "./components/Services.js";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";



function App() {

  return (
    <>
      <Header/>
      <Home />
      <Work />
      <Timeline />
      <Services />
      <Contact />
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
