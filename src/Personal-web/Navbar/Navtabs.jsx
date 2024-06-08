import { useLocation, useNavigate } from "react-router-dom";
import "./navbar.css";
import "./navbarDark.css";

const Navtabs = (props) => {
  const tab = useLocation();

  const navigate = useNavigate();

  const activeTab = tab.pathname.includes(props.id);

  const { darkMode, setIsOpen } = props;
  const handleTabClick = () => {
    setIsOpen(false);
    navigate(`/${props.id}`);
  };

  return (
    <button
      className={`${activeTab && "active"} ${darkMode ? "tab dark" : "tab"}`}
      onClick={handleTabClick}
    >
      <i className={props.icon}></i>
      <span>{props.title}</span>
    </button>
  );
};

export default Navtabs;
