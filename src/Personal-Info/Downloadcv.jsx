import CV from "../../src/Assets/Documents/Ramazan_Shira_CV.pdf";

const Downloadcv = (props) => {
  const { darkMode } = props;
  return (
    <div className={darkMode ? "download-cv dark" : "download-cv"}>
      <a className="cv" href={CV} download>
        <i className="fa-solid fa-download"></i> Download CV
      </a>
    </div>
  );
};
export default Downloadcv;
