import { useState } from "react";
import Tab from "./Tab";
import "./navbarDark.css";

const Navtabs = (props) => {
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

  const [navOpened, setNavOpened] = useState(false);

  const handleOpen = () => {
    setNavOpened(true);
  };
  const handleClose = () => {
    setNavOpened(false);
  };

  return (
    <div className={darkMode ? "tabs dark" : "tabs"}>
      <div className={darkMode ? "nav-tabs dark" : "nav-tabs"}>
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            id={tab.id}
            title={tab.name}
            icon={tab.icon}
            setSelected={props.setSelected}
            active={props.selectedTab === tab.id}
            darkMode={darkMode}
          />
        ))}
      </div>
      <div id={darkMode ? "mobile-icon-dark" : "mobile-icon"}>
        {!navOpened ? (
          <button onClick={handleOpen}>
            <box-icon
              name="menu"
              className="icon"
              color={darkMode ? "#ffffff" : "#000000"}
            ></box-icon>
          </button>
        ) : (
          <button
            onClick={handleClose}
            className={darkMode ? "cancel dark" : "cancel"}
          >
            <box-icon
              className="icon"
              name="x"
              color={darkMode ? "#ffffff" : "#000000"}
            ></box-icon>
          </button>
        )}
      </div>
    </div>
  );
};
export default Navtabs;
