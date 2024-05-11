import KnowledgeCards from "./KnowledgeCards";
import "./knowledge.css";
import "./knowledgeDark.css";

const Knowledge = (props) => {
  const { darkMode } = props;
  return (
    <div className={darkMode ? "knowledge dark" : "knowledge"}>
      <h2>Knowledges</h2>
      <KnowledgeCards darkMode={darkMode} />
    </div>
  );
};

export default Knowledge;
