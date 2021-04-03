import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import { IoMoonSharp } from "react-icons/io5";

const ThemeToggle = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div
          className={`theme-toggler ${theme === "dark" ? "dark" : ""}`}
          onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}
        >
          <IoMoonSharp />
        </div>
      )}
    </ThemeToggler>
  );
};

export default ThemeToggle;
