import { useState } from "react";
import "./portfolio.css";
import "./portfolioDark.css";

const PortfolioTabs = (props) => {
  const { darkMode, setSelectedCategory, selectedCategory } = props;

  const categories = [
    { name: "All", id: "all" },
    { name: "Development", id: "development" },
    { name: "Design", id: "design" },
    { name: "Games", id: "games" },
  ];

  return (
    <div className={darkMode ? "portfolio-tabs dark" : "portfolio-tabs"}>
      {categories.map((category) => (
        <p key={category.id}>{category.name}</p>
      ))}
    </div>
  );
};
export default PortfolioTabs;
