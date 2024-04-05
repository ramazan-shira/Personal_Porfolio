import WorkExpCards from "./WorkExpCards";
import "./experience.css";
import work from "../../../Assets/Images/work.png";

const WorkExp = () => {
  return (
    <div className="work-exp">
      <div className="work-title">
        <img src={work} alt="Work Experience" />
        <h2>Experience</h2>
      </div>
      <WorkExpCards />
    </div>
  );
};

export default WorkExp;
