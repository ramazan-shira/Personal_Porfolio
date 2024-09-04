import "./personalInfoDark.css";

const Name = (props) => {
  const { darkMode } = props;

  return (
    <div className="personal-details">
      <p className={darkMode ? "name dark" : "name"}>Ramazan Shira</p>
      <p className={darkMode ? "job dark" : "job"}>Full Stack Developer</p>
    </div>
  );
};
export default Name;
