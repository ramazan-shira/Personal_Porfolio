import "./personal-web.css";
import About from "./About/About";
import Resume from "./Resume/Resume";
import Portfolio from "./Portfolio/Portfolio";
import Services from "./Services/Services";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import { useState } from "react";
import "./personal-webDark.css";
import Navbar from "./Navbar/Navbar";

const Web = (props) => {
  const { darkMode } = props;
  const [selectedTab, setSelected] = useState("about");

  return (
    <div className="personal-web-container">
      <div className="navigation-bar">
        <Navbar
          setSelected={setSelected}
          selectedTab={selectedTab}
          darkMode={darkMode}
        />
        {/* <Navbar
          setSelected={setSelected}
          selectedTab={selectedTab}
          darkMode={darkMode}
        /> */}
      </div>
      <div
        className={
          darkMode ? "personal-web-content dark" : "personal-web-content"
        }
      >
        {selectedTab === "about" && <About darkMode={darkMode} />}
        {selectedTab === "resume" && <Resume darkMode={darkMode} />}
        {selectedTab === "portfolio" && <Portfolio darkMode={darkMode} />}
        {selectedTab === "services" && <Services darkMode={darkMode} />}
        {selectedTab === "contact" && <Contact darkMode={darkMode} />}
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
};
export default Web;
