import "./portfolio.css";

import "./portfolioDark.css";

const PortfolioCard = (props) => {
  const { darkMode, title, subtitle, url, img } = props;
  return (
    <div className={darkMode ? "card  dark" : "card"}>
      <a href={url}>
        <img src={img} alt={title} />
      </a>
      <p className="subtitle">{subtitle}</p>
      <a href={url}>
        {" "}
        <p className="title">{title}</p>
      </a>
    </div>
  );
};

export default PortfolioCard;
