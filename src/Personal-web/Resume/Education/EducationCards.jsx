import "./education.css";
import "./educationDark.css";

const EducationCards = (props) => {
  const { darkMode } = props;
  return (
    <div className="education-cards">
      <div
        className={
          darkMode ? "education-card bg-1 dark" : "education-card bg-1 "
        }
      >
        <p className="period">2022 - 2024</p>
        <p className="profile">MSC Information Systems in Economics</p>
        <p className="institution">University of Tirana</p>
      </div>
      <div
        className={
          darkMode ? "education-card bg-2 dark" : "education-card bg-2 "
        }
      >
        <p className="period">2019 - 2022</p>
        <p className="profile">Bachelor in Business - Informatics</p>
        <p className="institution">University of Tirana</p>
      </div>
    </div>
  );
};

export default EducationCards;
