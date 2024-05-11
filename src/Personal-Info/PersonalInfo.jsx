import Downloadcv from "./Downloadcv";
import Info from "./Info";
import MyPhoto from "./MyPhoto";
import Name from "./Name";
import SocialMedia from "./SocialMedia";
import "./personalinfo.css";
import "./personalInfoDark.css";

const PersonalInfo = (props) => {
  const { darkMode } = props;

  return (
    <div className={darkMode ? "personal-info dark" : "personal-info"}>
      <MyPhoto />
      <Name darkMode={darkMode} />
      <SocialMedia darkMode={darkMode} />
      <Info darkMode={darkMode} />
      <Downloadcv />
    </div>
  );
};
export default PersonalInfo;
