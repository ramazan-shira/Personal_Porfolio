import Education from "./Education/Education";
import Experience from "./Experience/WorkExp";
import Skills from "./Skills/Skills";
import Knowledge from "./Knowledge/Knowledges";
import "./resume.css";
import "./resumeDark.css";

const Resume = (props) => {
  const { darkMode } = props;
  return (
    <div className="resume-container" id="resume">
      <h1 className={darkMode ? "resume-title dark" : "resume-title"}>
        Resume
      </h1>
      <div className={darkMode ? "resume dark" : "resume"}>
        <Education darkMode={darkMode} />
        <Experience darkMode={darkMode} />
      </div>
      <div className={darkMode ? "resume-skills dark" : "resume-skills"}>
        <Skills darkMode={darkMode} />
        <Knowledge darkMode={darkMode} />
      </div>
    </div>
  );
};
export default Resume;
