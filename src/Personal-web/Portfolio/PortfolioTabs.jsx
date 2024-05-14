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

  const handleCategory = (id) => {
    setSelectedCategory(id);
  };

  return (
    <div className={darkMode ? "portfolio-tabs dark" : "portfolio-tabs"}>
      {categories.map((category) => (
        <p
          key={category.id}
          onClick={() => handleCategory(category.id)}
          className={category.id === selectedCategory ? "active" : ""}
        >
          {category.name}
        </p>
      ))}
    </div>
  );
};
export default PortfolioTabs;
