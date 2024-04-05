import Education from "./Education/Education";
import Experience from "./Experience/WorkExp";
import Skills from "./Skills/Skills";
import Knowledge from "./Knowledge/Knowledges";
import "./resume.css";

const Resume = () => {
  return (
    <div className="resume-container" id="resume">
      <h1 className="resume-title">Resume</h1>
      <div className="resume">
        <Education />
        <Experience />
      </div>
      <div className="resume-skills">
        <Skills />
        <Knowledge />
      </div>
    </div>
  );
};
export default Resume;
