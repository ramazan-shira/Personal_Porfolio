import PortfolioCards from "./PortfolioCards";
import PortfolioTabs from "./PortfolioTabs";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <PortfolioTabs />
      <PortfolioCards />
    </div>
  );
};

export default Portfolio;
