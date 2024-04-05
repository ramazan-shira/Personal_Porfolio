import "./education.css";
const EducationCards = () => {
  return (
    <div className="education-cards">
      <div className="education-card bg-1">
        <p className="period">2022 - 2024</p>
        <p className="profile">MSC Information Systems in Economics</p>
        <p className="institution">University of Tirana</p>
      </div>
      <div className="education-card bg-2">
        <p className="period">2019 - 2022</p>
        <p className="profile">Bachelor in Business - Informatics</p>
        <p className="institution">University of Tirana</p>
      </div>
      <div className="education-card bg-1">
        <p className="period">2023</p>
        <p className="profile">Web Developer</p>
        <p className="institution">Tirana ICT Academy</p>
      </div>
    </div>
  );
};

export default EducationCards;
