import "./portfolio.css";
import "./portfolioDark.css";

const PortfolioTabs = (props) => {
  const { darkMode } = props;

  return (
    <div className={darkMode ? "portfolio-tabs dark" : "portfolio-tabs"}>
      <p>All</p>
      <p>Development</p>
      <p>Applications</p>
      <p>Design</p>
      <p>Games</p>
    </div>
  );
};
export default PortfolioTabs;
