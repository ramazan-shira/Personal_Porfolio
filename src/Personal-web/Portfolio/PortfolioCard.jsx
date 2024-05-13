import "./portfolio.css";
import personalPortfolio from "../../Assets/Images/personalPortfolio.png";
import notes from "../../Assets/Images/notes-react.png";
import todolistReact from "../../Assets/Images/todolist=react.png";
import toDoList from "../../Assets/Images/toDoList.png";
import digitalmastery from "../../Assets/Images/digitalmastery.png";
import llotoB from "../../Assets/Images/llotob.png";
import guessNr from "../../Assets/Images/guessNr.png";
import tasteIt from "../../Assets/Images/tasteIt.png";
import rollDice from "../../Assets/Images/rollDice.png";

import "./portfolioDark.css";

const PortfolioCard = (props) => {
  const { darkMode } = props;
  return (
    <div className="portfolio-cards-container">
      <div className="portfolio-cards-container-column1">
        <div className={darkMode ? "card bg-1  dark" : "card bg-1 "}>
          <a href="https://rsh-portfolio.netlify.app/">
            <img src={personalPortfolio} alt="Personal Portfolio website" />
          </a>
          <p className="subtitle">Personal Portfolio Website</p>
          <a href="https://rsh-portfolio.netlify.app/">
            <p className="title">My Portfolio</p>
          </a>
        </div>

        <div className={darkMode ? "card bg-2 dark" : "card bg-2"}>
          <a href="https://rsh-notesapp-react.netlify.app/">
            <img src={notes} alt="notes" />
          </a>
          <p className="subtitle">Notes application</p>
          <a href="https://rsh-notesapp-react.netlify.app/">
            <p className="title">Notes - React App</p>
          </a>
        </div>
        <div className={darkMode ? "card bg-1 long dark" : "card bg-1 long"}>
          <a href="https://zani-todolist.netlify.app/">
            <img src={todolistReact} alt="to do list" />
          </a>
          <p className="subtitle">To Do List</p>
          <a href="https://zani-todolist.netlify.app/">
            <p className="title">To Do List - React App</p>
          </a>
        </div>
        <div className={darkMode ? "card bg-2 dark" : "card bg-2"}>
          <a href="https://digitalmastery.netlify.app/">
            <img src={digitalmastery} alt="digitalmastery" />
          </a>
          <p className="subtitle">Course/Training center website</p>
          <a href="https://digitalmastery.netlify.app/">
            <p className="title">DigitalMastery</p>
          </a>
        </div>
        <div className={darkMode ? "card bg-2 long dark" : "card bg-2"}>
          <a href="https://rsh-roll-dice.netlify.app/">
            <img src={rollDice} alt="roll dice" />
          </a>
          <p className="subtitle">Roll Dice Game</p>
          <a href="https://rsh-roll-dice.netlify.app/">
            <p className="title">Roll Dice</p>
          </a>
        </div>
      </div>
      <div className="portfolio-cards-container-column2">
        <div className={darkMode ? "card bg-2  dark" : "card bg-2"}>
          <a href="https://rsh-todolist.netlify.app/">
            <img src={toDoList} alt="To Do List" />
          </a>
          <p className="subtitle">To Do List application</p>
          <a href="https://rsh-todolist.netlify.app/">
            {" "}
            <p className="title">To Do List - JavaScript App</p>
          </a>
        </div>

        <div className={darkMode ? "card bg-1 long dark" : "card bg-1 long"}>
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

        <div className={darkMode ? "card bg-1 long dark" : "card bg-1 long"}>
          <a href="https://tasteit-restaurant.netlify.app/">
            <img src={tasteIt} alt="taste it" />
          </a>
          <p className="subtitle">Taste IT - Restaurant website</p>
          <a href="https://tasteit-restaurant.netlify.app/">
            <p className="title">Taste IT</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
