import { useState } from "react";
import "./navbar.css";
import Navtabs from "./Navtabs";
import "./navbarDark.css";

const Navbar = (props) => {
  const { darkMode } = props;

  const tabs = [
    {
      name: "About",
      id: "about",
      icon: "fa-regular fa-user",
    },
    {
      name: "Resume",
      id: "resume",
      icon: "fa-regular fa-file-lines",
    },
    {
      name: "Portfolio",
      id: "portfolio",
      icon: "fa-solid fa-briefcase",
    },
    {
      name: "Services",
      id: "services",
      icon: "fa-solid fa-gear",
    },
    {
      name: "Contact",
      id: "contact",
      icon: "fa-regular fa-address-book",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
      <div
        className={`${isOpen ? "navbar-links active" : "navbar-links"} ${
          darkMode ? "dark" : ""
        }`}
      >
        {tabs.map((tab) => (
          <Navtabs
            key={tab.id}
            id={tab.id}
            title={tab.name}
            icon={tab.icon}
            darkMode={darkMode}
            setIsOpen={setIsOpen}
          />
        ))}
      </div>
      <div
        className={darkMode ? "navbar-toggle dark" : "navbar-toggle"}
        onClick={toggleNavbar}
      >
        <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </div>
  );
};

export default Navbar;
