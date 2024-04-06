import CV from "../../src/Assets/Documents/Ramazan_Shira_CV.pdf";

const Downloadcv = () => {
  return (
    <div className="download-cv">
      <a className="cv" href={CV} download>
        <i className="fa-solid fa-download"></i> Download CV
      </a>
    </div>
  );
};
export default Downloadcv;
