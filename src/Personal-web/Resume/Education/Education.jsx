import EducationCards from "./EducationCards";
import education from "../../../Assets/Images/education.png";

const Education = () => {
  return (
    <div className="education">
      <div className="education-title">
        <img src={education} alt="Education" />
        <h2>Education</h2>
      </div>
      <EducationCards />
    </div>
  );
};
export default Education;
