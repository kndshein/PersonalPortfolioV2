import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import { IoMoonSharp } from "react-icons/io5";

const ThemeToggle = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
        console.log("theme", theme);
        return (
          <div
            className="theme-toggler"
            onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
            role="button"
            tabIndex="0"
            onKeyPress={() => toggleTheme(theme === "dark" ? "light" : "dark")}
          >
            <IoMoonSharp />
          </div>
        );
      }}
    </ThemeToggler>
  );
};

export default ThemeToggle;
