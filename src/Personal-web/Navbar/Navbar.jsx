import Navtabs from "./Navtabs.jsx";
import "./navbar.css";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <Navtabs
        setSelected={props.setSelected}
        selectedTab={props.selectedTab}
      />
    </div>
  );
};
export default Navbar;
