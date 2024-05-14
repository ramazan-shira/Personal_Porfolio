import "./navbar.css";
import "./navbarDark.css";

const Navtabs = (props) => {
  const { darkMode, setIsOpen } = props;
  const handleTabClick = () => {
    props.setSelected(props.id);
    setIsOpen(false);
  };

  return (
    <button
      className={`${props.active && "active"} ${darkMode ? "tab dark" : "tab"}`}
      onClick={handleTabClick}
    >
      <i className={props.icon}></i>
      <span>{props.title}</span>
    </button>
  );
};

export default Navtabs;
