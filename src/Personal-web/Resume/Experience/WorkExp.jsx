import WorkExpCards from "./WorkExpCards";
import "./experience.css";
import work from "../../../Assets/Images/work.png";
import "./experienceDark.css";

const WorkExp = (props) => {
  const { darkMode } = props;
  return (
    <div className="work-exp">
      <div className={darkMode ? "work-title dark" : "work-title"}>
        <img src={work} alt="Work Experience" />
        <h2>Experience</h2>
      </div>
      <WorkExpCards darkMode={darkMode} />
    </div>
  );
};

export default WorkExp;
