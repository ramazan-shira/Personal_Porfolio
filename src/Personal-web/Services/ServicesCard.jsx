import informativeWeb from "../../Assets/Images/informative-web-service.png";
import webApp from "../../Assets/Images/web-app-service.png";
import eCommerce from "../../Assets/Images/e-commerce-service.png";
import designWeb from "../../Assets/Images/design-service.png";

const ServicesCard = () => {
  return (
    <div className="cards-container">
      <div className="service-card">
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
      <div className="service-card">
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
      <div className="service-card">
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

      <div className="service-card">
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
