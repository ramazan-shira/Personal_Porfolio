import EducationCards from "./EducationCards";
import education from "../../../Assets/Images/education.png";
import "./educationDark.css";

const Education = (props) => {
  const { darkMode } = props;

  return (
    <div className="education">
      <div className={darkMode ? "education-title dark" : "education-title"}>
        <img src={education} alt="Education" />
        <h2>Education</h2>
      </div>
      <EducationCards darkMode={darkMode} />
    </div>
  );
};
export default Education;
