import React, { useState } from "react";
import { IoMoonSharp } from "react-icons/io5";

const ThemeToggler = () => {
  const [darkTheme, setDarkTheme] = useState(
    typeof window !== "undefined" && window.__theme !== "dark"
  );

  const toggleHandler = () => {
    setDarkTheme(!darkTheme);
    window.__setPreferredTheme(darkTheme ? "dark" : "light");
  };

  return (
    <div
      className="theme-toggler"
      onClick={() => toggleHandler()}
      role="button"
      tabIndex="0"
      onKeyPress={() => toggleHandler()}
    >
      <IoMoonSharp />
    </div>
  );
};

export default ThemeToggler;
