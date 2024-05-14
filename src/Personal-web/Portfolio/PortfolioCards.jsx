import PortfolioCard from "./PortfolioCard";
import "./portfolio.css";
import cards from "./cards";

const PortfolioCards = (props) => {
  const { darkMode, selectedCategory } = props;

  return (
    <div className="portfolio-cards">
      {cards
        .filter(
          (card) =>
            card.category === selectedCategory || selectedCategory === "all"
        )
        .map((card) => (
          <PortfolioCard
            darkMode={darkMode}
            title={card.title}
            subtitle={card.subtitle}
            url={card.url}
            img={card.img}
          />
        ))}
    </div>
  );
};

export default PortfolioCards;
