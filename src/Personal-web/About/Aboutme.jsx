import "./about.css";
import "./aboutDark.css";
const Aboutme = (props) => {
  const { darkMode } = props;

  return (
    <div className={darkMode ? "aboutme dark" : "aboutme"}>
      <h1>About</h1>
      <p>
        I am a Web Developer fueled by a passion for creating captivating online
        experiences. With a keen eye for detail and a love for innovation, I'm
        committed to crafting functional and visually stunning websites. Let's
        connect and explore the endless possibilities of the digital world
        together!
      </p>
    </div>
  );
};

export default Aboutme;
