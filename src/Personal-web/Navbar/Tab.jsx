import "./navbar.css";
import "./navbarDark.css";

const Tab = (props) => {
  const { darkMode } = props;
  const handleTabClick = () => {
    props.setSelected(props.id);
  };

  return (
    <button
      className={darkMode ? `tab dark ${props.active && "active"}` : "tab"}
      onClick={handleTabClick}
    >
      <i className={props.icon}></i>
      <span>{props.title}</span>
    </button>
  );
};
export default Tab;
