import "./navbar.css";

const Tab = (props) => {
  const handleTabClick = () => {
    props.setSelected(props.id);
  };

  return (
    <button
      className={`tab ${props.active && "active"}`}
      onClick={handleTabClick}
    >
      <i className={props.icon}></i>
      <span>{props.title}</span>
    </button>
  );
};
export default Tab;
