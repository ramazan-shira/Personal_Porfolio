import myphoto from "../../src/Assets/Images/images.png";
import "./personalinfo.css";

const MyPhoto = () => {
  return (
    <div className="photo">
      <img src={myphoto} alt="resume" />
    </div>
  );
};
export default MyPhoto;
