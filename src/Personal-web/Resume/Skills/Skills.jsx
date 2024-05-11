import SkillsBar from "./SkillsBar";
import "./skills.css";
import "./skillsDark.css";

const Skills = (props) => {
  const { darkMode } = props;
  return (
    <div className={darkMode ? "skills dark" : "skills"}>
      <h2>Working Skills</h2>
      <SkillsBar darkMode={darkMode} />
    </div>
  );
};
export default Skills;
