import React from "react";
import { ThemeContext } from "./themeContext";
import { BsBrightnessHigh } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div>
      {theme === "dark" ? (
         <BsBrightnessHigh
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
         />
      ) : (
       <BsMoonFill
         onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
       />
       )}
    </div>
  );
};

export default Toggle;
