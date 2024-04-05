import Navbar from "./Navbar/Navbar";
import "./personal-web.css";
import About from "./About/About";
import Resume from "./Resume/Resume";
import Portfolio from "./Portfolio/Portfolio";
import Services from "./Services/Services";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import { useState } from "react";

const Web = () => {
  const [selectedTab, setSelected] = useState("about");

  return (
    <div className="personal-web-container">
      <Navbar setSelected={setSelected} selectedTab={selectedTab} />
      <div className="personal-web-content">
        {selectedTab === "about" && <About />}
        {selectedTab === "resume" && <Resume />}
        {selectedTab === "portfolio" && <Portfolio />}
        {selectedTab === "services" && <Services />}
        {selectedTab === "contact" && <Contact />}
        <Footer />
      </div>
    </div>
  );
};
export default Web;
