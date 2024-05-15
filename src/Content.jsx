import PersonalInfo from "./Personal-Info/PersonalInfo";
import Footer from "./Footer/Footer";
import PersonalWeb from "./Personal-web/Web";

const Content = (props) => {
  const { darkMode } = props;

  return (
    <>
      <div className="content">
        <PersonalInfo darkMode={darkMode} />
        <PersonalWeb darkMode={darkMode} />
      </div>
      <div className="footer-container">
        <Footer darkMode={darkMode} />
      </div>
    </>
  );
};
export default Content;
