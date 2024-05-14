import { useState } from "react";
import PortfolioCards from "./PortfolioCards";
import PortfolioTabs from "./PortfolioTabs";
import "./portfolio.css";
import "./portfolioDark.css";

const Portfolio = (props) => {
  const { darkMode } = props;

  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className={darkMode ? "portfolio dark" : "portfolio"} id="portfolio">
      <h1>Portfolio</h1>
      <PortfolioTabs
        darkMode={darkMode}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <PortfolioCards darkMode={darkMode} selectedCategory={selectedCategory} />
    </div>
  );
};

export default Portfolio;
