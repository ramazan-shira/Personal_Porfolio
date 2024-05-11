import "./experience.css";
import "./experienceDark.css";

const WorkExpCards = (props) => {
  const { darkMode } = props;

  return (
    <div className="work-exp-cards">
      <div className={darkMode ? "exp-card bg-2 dark" : "exp-card bg-2"}>
        <div className="period">May 2023 - August 2023</div>
        <div className="position">Data Entry</div>
        <div className="company">Buzi Store</div>
      </div>
      <div className={darkMode ? "exp-card bg-1 dark" : "exp-card bg-1"}>
        <div className="period">September 2021 - August 2023</div>
        <div className="position">IT Support Specialist</div>
        <div className="company">ESDP</div>
      </div>
      <div className={darkMode ? "exp-card bg-2 dark" : "exp-card bg-2"}>
        <div className="period">October 2022 - January 2023</div>
        <div className="position">SAP Developer Intern</div>
        <div className="company">iKons</div>
      </div>
    </div>
  );
};

export default WorkExpCards;
