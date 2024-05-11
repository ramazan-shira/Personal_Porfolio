import Cards from "./Cards";
import "./whatIDo.css";
const WhatIDoCards = (props) => {
  const { darkMode } = props;

  return (
    <div className="what-do-cards">
      <h2>What I Do!</h2>
      <Cards darkMode={darkMode} />
    </div>
  );
};

export default WhatIDoCards;
