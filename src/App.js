import logo from "./logo.svg";
import "./App.css";
import Content from "./Content";
import Theme from "./Theme-Mode/Theme";
function App() {
  return (
    <div className="container">
      <Theme />
      <Content />
    </div>
  );
}

export default App;
