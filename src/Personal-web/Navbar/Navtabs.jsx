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

  return (
    <div className={darkMode ? "tabs dark" : "tabs"}>
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
  );
};
export default Navtabs;
