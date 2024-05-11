import "./about.css";
import Aboutme from "./Aboutme";
import WhatIDo from "./WhatIDo/WhatIDo";

const About = (props) => {
  const { darkMode } = props;
  return (
    <div className="about" id="about">
      <Aboutme darkMode={darkMode} />
      <WhatIDo darkMode={darkMode} />
    </div>
  );
};
export default About;
