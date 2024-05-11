import logo from "./logo.svg";
import "./App.css";
import Content from "./Content";
import Theme from "./Theme-Mode/Theme";
import { useEffect, useState } from "react";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("darkBg");
    } else {
      document.body.classList.remove("darkBg");
    }
  }, [darkMode]);

  return (
    <div className="container">
      <Theme darkMode={darkMode} setDarkMode={setDarkMode} />
      <Content darkMode={darkMode} />
    </div>
  );
}

export default App;
