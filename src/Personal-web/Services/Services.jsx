import ServicesCards from "./ServicesCards";
import "./services.css";
import "./servicesDark.css";

const Services = (props) => {
  const { darkMode } = props;
  return (
    <div className={darkMode ? "services dark" : "services"} id="services">
      <h1>Services</h1>
      <ServicesCards darkMode={darkMode} />
    </div>
  );
};
export default Services;
