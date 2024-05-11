import "./knowledge.css";
import "./knowledgeDark.css";

const KnowledgeCards = (props) => {
  const { darkMode } = props;
  return (
    <div className="knowledgeCards">
      <div className={darkMode ? "knowledge-card dark" : "knowledge-card"}>
        <span>Problem solving</span>
        <span>Critical thinking</span>
      </div>
      <div className={darkMode ? "knowledge-card dark" : "knowledge-card"}>
        <span>Time Management</span>
        <span>Flexibility</span>
      </div>
      <div className={darkMode ? "knowledge-card dark" : "knowledge-card"}>
        <span>Active learning</span>
        <span>Communication</span>
      </div>
      <div className={darkMode ? "knowledge-card dark" : "knowledge-card"}>
        <span>Adaptablity</span>
      </div>
    </div>
  );
};

export default KnowledgeCards;
