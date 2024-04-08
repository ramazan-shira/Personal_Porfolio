import "./theme.css";
import { useState } from "react";

const Theme = (props) => {
  const { theme, setTheme } = props;
  const changeTheme = () => {
    setTheme(!theme);
  };

  return (
    <div className="theme">
      <button onClick={changeTheme}>
        <i
          className={
            theme ? "sunicon fa-regular fa-sun" : "moonicon fa-solid fa-moon"
          }
        ></i>
      </button>
    </div>
  );
};
export default Theme;
