import "./personal-web.css";
import About from "./About/About";
import Resume from "./Resume/Resume";
import Portfolio from "./Portfolio/Portfolio";
import Services from "./Services/Services";
import Contact from "./Contact/Contact";
import "./personal-webDark.css";
import Navbar from "./Navbar/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";

const Web = (props) => {
  const { darkMode } = props;

  return (
    <div className="personal-web-container">
      <div className="navigation-bar">
        <Navbar darkMode={darkMode} />
      </div>
      <div
        className={
          darkMode ? "personal-web-content dark" : "personal-web-content"
        }
      >
        <Routes>
          <Route path="/" element={<Navigate to="/about" />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route path="/resume" element={<Resume darkMode={darkMode} />} />
          <Route
            path="/portfolio"
            element={<Portfolio darkMode={darkMode} />}
          />
          <Route path="/services" element={<Services darkMode={darkMode} />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
        </Routes>
      </div>
    </div>
  );
};
export default Web;
