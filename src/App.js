import logo from "./logo.svg";
import "./App.css";
import Content from "./Content";
import Theme from "./Theme-Mode/Theme";
import { useState } from "react";
function App() {
  const [theme, setTheme] = useState(false);
  return (
    <div className="container">
      <Theme theme={theme} setTheme={setTheme} />
      <Content theme={theme} />
    </div>
  );
}

export default App;
