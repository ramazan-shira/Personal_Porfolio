import ServicesCard from "./ServicesCard";
import "./services.css";

const ServicesCards = (props) => {
  const { darkMode } = props;

  return (
    <div className="services-cards-container">
      <ServicesCard darkMode={darkMode} />
    </div>
  );
};

export default ServicesCards;
