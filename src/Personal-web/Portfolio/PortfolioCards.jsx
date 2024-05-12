import PortfolioCard from "./PortfolioCard";
import "./portfolio.css";

const PortfolioCards = (props) => {
  const { darkMode } = props;

  return (
    <div className="portfolio-cards">
      <PortfolioCard darkMode={darkMode} />
    </div>
  );
};

export default PortfolioCards;
