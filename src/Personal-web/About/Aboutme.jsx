import "./about.css";
import "./aboutDark.css";
const Aboutme = (props) => {
  const { darkMode } = props;

  return (
    <div className={darkMode ? "aboutme dark" : "aboutme"}>
      <h1>About</h1>
      <p>
        I am a Full Stack Developer driven by a passion for building immersive
        online experiences. With an eye for detail and a dedication to
        innovation, I specialize in crafting seamless and dynamic web
        applications. Let's collaborate and unlock the boundless potential of
        the digital realm together!
      </p>
    </div>
  );
};

export default Aboutme;
