import "./portfolio.css";
import personalPortfolio from "../../Assets/Images/personal-portfolio.png";
import toDoList from "../../Assets/Images/todo-list.png";
import tasteIt from "../../Assets/Images/taste-it.png";
import addMembers from "../../Assets/Images/add-members.png";
import llotoB from "../../Assets/Images/llotob.png";
import guessNr from "../../Assets/Images/guess-nr.png";
import rollDice from "../../Assets/Images/roll-dice.png";
import "./portfolioDark.css";

const PortfolioCard = (props) => {
  const { darkMode } = props;

  return (
    <div className="portfolio-cards-container">
      <div className="portfolio-cards-container-column1">
        <div className={darkMode ? "card bg-1 dark" : "card bg-1"}>
          <a href="https://ramazanshira.netlify.app/">
            <img src={personalPortfolio} alt="Personal Portfolio website" />
          </a>
          <p className="subtitle">Personal Portfolio Website</p>
          <a href="https://ramazanshira.netlify.app/">
            <p className="title">My Portfolio</p>
          </a>
        </div>

        <div className={darkMode ? "card bg-2 dark" : "card bg-2"}>
          <a href="https://tasteit-restaurant.netlify.app/">
            <img src={tasteIt} alt="Taste It" />
          </a>
          <p className="subtitle">Reastaurant Website</p>
          <a href="https://tasteit-restaurant.netlify.app/">
            <p className="title">Taste It</p>
          </a>
        </div>

        <div className={darkMode ? "card bg-1 dark" : "card bg-1"}>
          <a href="https://addusers-app.netlify.app/">
            <img src={addMembers} alt="Add Members" />
          </a>
          <p className="subtitle">Add New Members </p>
          <a href="https://addusers-app.netlify.app/">
            <p className="title">Add Members</p>
          </a>
        </div>

        <div className={darkMode ? "card bg-2 dark" : "card bg-2"}>
          <a href="https://rsh-roll-dice.netlify.app/">
            <img src={rollDice} alt="Roll Dice" />
          </a>
          <p className="subtitle">Roll Gice Game</p>
          <a href="https://rsh-roll-dice.netlify.app/">
            <p className="title">Roll Dice</p>
          </a>
        </div>
      </div>

      <div className="portfolio-cards-container-column2">
        <div className={darkMode ? "card bg-2 long dark" : "card bg-2"}>
          <a href="https://rsh-todolist.netlify.app/">
            <img src={toDoList} alt="To Do List" />
          </a>
          <p className="subtitle">To Do Tasks</p>
          <a href="https://rsh-todolist.netlify.app/">
            {" "}
            <p className="title">To Do List App</p>
          </a>
        </div>

        <div className={darkMode ? "card bg-1 dark" : "card bg-1"}>
          <a href="https://llotob-app.netlify.app/">
            <img src={llotoB} alt="Lloto B" />
          </a>
          <p className="subtitle">Lottery page</p>
          <a href="https://llotob-app.netlify.app/">
            <p className="title">LlotoB</p>
          </a>
        </div>

        <div className={darkMode ? "card bg-2 long dark" : "card bg-2"}>
          <a href="https://rsh-guess-number.netlify.app/">
            <img src={guessNr} alt="Guess Number" />
          </a>
          <p className="subtitle">Guess Number Game</p>
          <a href="https://rsh-guess-number.netlify.app/">
            <p className="title">Guess Number</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
