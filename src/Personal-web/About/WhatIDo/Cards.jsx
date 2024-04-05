import "./whatIDo.css";
import web from "../../../Assets/Images/web-development.png";
import app from "../../../Assets/Images/app-development.png";
import design from "../../../Assets/Images/ui_ux-design.png";
import commerce from "../../../Assets/Images/ecommerce.png";

const Cards = () => {
  return (
    <div className="about-cards-container">
      <div className="about-card bg-1">
        <div className="about-card-image">
          <img src={web} alt="Web development" />
        </div>
        <div className="about-card-content">
          <p className="about-card-title">Web Development</p>
          <p className="about-card-text">
            Elevate your online presence with custom-built websites tailored to
            your unique needs.
          </p>
        </div>
      </div>
      <div className="about-card bg-2">
        <div className="about-card-image">
          <img src={app} alt="App Development" />
        </div>
        <div className="about-card-content">
          <p className="about-card-title">App Development</p>
          <p className="about-card-text">
            Transform your ideas into innovative applications that bring
            convenience and functionality to your users.
          </p>
        </div>
      </div>
      <div className="about-card bg-2">
        <div className="about-card-image">
          <img src={design} alt="UI/UX Design" />
        </div>
        <div className="about-card-content">
          <p className="about-card-title">UI/UX Design</p>
          <p className="about-card-text">
            Enhance user satisfaction and engagement with intuitive and visually
            appealing interfaces.
          </p>
        </div>
      </div>
      <div className="about-card bg-1">
        <div className="about-card-image">
          <img src={commerce} alt="E-Commerce" />
        </div>
        <div className="about-card-content">
          <p className="about-card-title">E-Commerce</p>
          <p className="about-card-text">
            Launch your online store with a secure and feature-rich e-commerce
            solution that drives sales.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
