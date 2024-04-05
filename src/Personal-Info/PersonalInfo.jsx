import Downloadcv from "./Downloadcv";
import Info from "./Info";
import MyPhoto from "./MyPhoto";
import Name from "./Name";
import SocialMedia from "./SocialMedia";
import "./personalinfo.css";

const PersonalInfo = () => {
  return (
    <div className="personal-info">
      <MyPhoto />
      <Name />
      <SocialMedia />
      <Info />
      <Downloadcv />
    </div>
  );
};
export default PersonalInfo;
