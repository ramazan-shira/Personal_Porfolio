import PortfolioCards from "./PortfolioCards";
import PortfolioTabs from "./PortfolioTabs";
import "./portfolio.css";
import "./portfolioDark.css";

const Portfolio = (props) => {
  const { darkMode } = props;
  return (
    <div className={darkMode ? "portfolio dark" : "portfolio"} id="portfolio">
      <h1>Portfolio</h1>
      <PortfolioTabs darkMode={darkMode} />
      <PortfolioCards darkMode={darkMode} />
    </div>
  );
};

export default Portfolio;
