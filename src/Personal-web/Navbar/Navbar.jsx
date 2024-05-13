import { useState } from "react";
import Navtabs from "./Navtabs.jsx";
import "./navbar.css";
import "./navbarDark.css";

const Navbar = (props) => {
  const { darkMode } = props;

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="navbar">
      <Navtabs
        setSelected={props.setSelected}
        selectedTab={props.selectedTab}
        darkMode={darkMode}
      />
    </div>
  );
};
export default Navbar;
