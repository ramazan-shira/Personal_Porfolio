import "./skills.css";
import "./skillsDark.css";

const SkillsBar = (props) => {
  const { darkMode } = props;

  return (
    <div className="progress-bar">
      <div className={darkMode ? "bar dark" : "bar"}>
        <div className="bar-title">
          <p className="skill">HTML</p>
          <p className="progress">100%</p>
        </div>
        <div className="bar-progress">
          <input type="range" min="0" max="100" value="100" className="bg-1" />
        </div>
      </div>
      <div className={darkMode ? "bar dark" : "bar"}>
        <div className="bar-title">
          <p className="skill">CSS</p>
          <p className="progress">95%</p>
        </div>
        <div className="bar-progress">
          <input type="range" min="0" max="100" value="85" className="bg-2" />
        </div>
      </div>
      <div className={darkMode ? "bar dark" : "bar"}>
        <div className="bar-title">
          <p className="skill">JavaScript</p>
          <p className="progress">95%</p>
        </div>
        <div className="bar-progress">
          <input type="range" min="0" max="100" value="90" className="bg-3" />
        </div>
      </div>
      <div className={darkMode ? "bar dark" : "bar"}>
        <div className="bar-title">
          <p className="skill">React JS</p>
          <p className="progress">95%</p>
        </div>
        <div className="bar-progress">
          <input type="range" min="0" max="100" value="85" className="bg-4" />
        </div>
      </div>
    </div>
  );
};
export default SkillsBar;
