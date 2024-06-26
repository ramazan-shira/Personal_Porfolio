import informativeWeb from "../../Assets/Images/service-1.png";
import webApp from "../../Assets/Images/service-2.png";
import eCommerce from "../../Assets/Images/service-3.png";
import designWeb from "../../Assets/Images/service-4.png";
import "./servicesDark.css";

const ServicesCard = (props) => {
  const { darkMode } = props;

  return (
    <div className="cards-container">
      <div className={darkMode ? "service-card dark" : "service-card"}>
        <div className="service-card-image">
          <img src={informativeWeb} alt="Informative Websites" />
        </div>
        <div className="service-card-title">
          <p>Informative Websites</p>
        </div>
        <div className="service-card-text">
          <p>
            Crafting engaging websites that communicate your brand effectively.
          </p>
        </div>
      </div>
      <div className={darkMode ? "service-card dark" : "service-card"}>
        <div className="service-card-image">
          <img src={webApp} alt="Web Applications" />
        </div>
        <div className="service-card-title">
          <p>Web Applications</p>
        </div>
        <div className="service-card-text">
          <p>Developing user-friendly apps tailored to your business needs.</p>
        </div>
      </div>
      <div className={darkMode ? "service-card dark" : "service-card"}>
        <div className="service-card-image">
          <img src={eCommerce} alt="E-Commerce websites" />
        </div>
        <div className="service-card-title">
          <p>E - Commerce</p>
        </div>
        <div className="service-card-text">
          <p>Building platforms to boost sales and streamline transactions.</p>
        </div>
      </div>

      <div className={darkMode ? "service-card dark" : "service-card"}>
        <div className="service-card-image">
          <img src={designWeb} alt="Design Web Pages/Applications" />
        </div>
        <div className="service-card-title">
          <p>UI/UX Design</p>
        </div>
        <div className="service-card-text">
          <p>Designing intuitive interfaces for better user experience.</p>
        </div>
      </div>
    </div>
  );
};
export default ServicesCard;
