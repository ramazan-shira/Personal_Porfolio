import notes from "../../Assets/Images/notes-react.png";
import todolistReact from "../../Assets/Images/todolist=react.png";
import toDoList from "../../Assets/Images/toDoList.png";
import digitalmastery from "../../Assets/Images/digitalmastery.png";
import llotoB from "../../Assets/Images/lloto.png";
import guessNr from "../../Assets/Images/guessNr.png";
import tasteIt from "../../Assets/Images/tasteIt.png";
import rollDice from "../../Assets/Images/rollDice.png";
import personalPortfolio from "../../Assets/Images/personalPortfolio.png";

const cards = [
  {
    id: 1,
    title: "My Portfolio",
    subtitle: "Personal Portfolio Website",
    url: "https://rsh-portfolio.netlify.app/",
    img: personalPortfolio,
    category: "design",
  },
  {
    id: 2,
    title: "Notes - React App",
    subtitle: "Notes application",
    url: "https://rsh-notesapp-react.netlify.app/",
    img: notes,
    category: "development",
  },
  {
    id: 3,
    title: "To Do List - React App",
    subtitle: "To Do List",
    url: "https://zani-todolist.netlify.app/",
    img: todolistReact,
    category: "development",
  },
  {
    id: 4,
    title: "DigitalMastery Hub",
    subtitle: "Course/Training center website",
    url: "https://digitalmastery.netlify.app/",
    img: digitalmastery,
    category: "design",
  },
  {
    id: 5,
    title: "Roll Dice",
    subtitle: "oll Dice Game",
    url: "https://rsh-roll-dice.netlify.app/",
    img: rollDice,
    category: "games",
  },
  {
    id: 6,
    title: "To Do List - JavaScript App",
    subtitle: "To Do List application",
    url: "https://rsh-todolist.netlify.app/",
    img: toDoList,
    category: "development",
  },
  {
    id: 7,
    title: "LlotoB",
    subtitle: "Lottery page",
    url: "https://llotob-app.netlify.app/",
    img: llotoB,
    category: "design",
  },
  {
    id: 8,
    title: "Guess Number",
    subtitle: "Guess Number Game",
    url: "https://rsh-guess-number.netlify.app/",
    img: guessNr,
    category: "games",
  },
  {
    id: 9,
    title: "Taste IT",
    subtitle: "Taste IT - Restaurant website",
    url: "https://tasteit-restaurant.netlify.app/",
    img: tasteIt,
    category: "design",
  },
];

export default cards;
