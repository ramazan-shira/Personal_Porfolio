import "@fortawesome/fontawesome-free/css/all.min.css";
import "./personalinfo.css";
import "./personalInfoDark.css";

const SocialMedia = (props) => {
  const { darkMode } = props;

  return (
    <div className={darkMode ? "social-media dark" : "social-media"}>
      <a href="https://www.facebook.com/zani.shira.3">
        <i className="fa-brands fa-facebook-f"></i>
      </a>
      <a href="https://www.instagram.com/_.zanii_/">
        <i className="fa-brands fa-instagram"></i>
      </a>
      <a href="https://www.instagram.com/_.zanii_/">
        <i className="fa-brands fa-linkedin-in"></i>
      </a>
      <a href="https://github.com/ramazan-shira">
        <i className="fa-brands fa-github"></i>
      </a>
      <a href="https://ramazanshira.netlify.app/">
        <i className="fa-solid fa-folder-closed"></i>
      </a>
    </div>
  );
};
export default SocialMedia;
