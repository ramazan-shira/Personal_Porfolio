import "./theme.css";
import { useEffect } from "react";

const Theme = (props) => {
  const { darkMode, setDarkMode } = props;

  const handleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    localStorage.setItem("theme", JSON.stringify(newDarkMode));
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, [setDarkMode]);

  return (
    <div className={darkMode ? "theme dark" : "theme"}>
      <button onClick={handleTheme}>
        <i
          className={
            darkMode ? "sunicon fa-regular fa-sun" : "moonicon fa-solid fa-moon"
          }
        ></i>
      </button>
    </div>
  );
};
export default Theme;
