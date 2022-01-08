/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

const React = require("react");

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="dark-theme-toggler"
      dangerouslySetInnerHTML={{
        __html: `(function () {
          // From Victor https://victorzhou.com/blog/dark-mode-gatsby/
          function setTheme(theme) {
            window.__theme = theme;
            console.log("Theme updated:", theme);

            if (theme === "dark") {
              document.documentElement.body.className = "dark";
            } else {
              document.documentElement.body.className = "";
            }
          }

          window.__setPreferredTheme = function (theme) {
            setTheme(theme);
            try {
              localStorage.setItem("preferred-theme", theme);
            } catch (e) {
              console.error(e);
            }
          };

          let preferredTheme;
          try {
            preferredTheme = localStorage.getItem("preferred-theme");
          } catch (e) {
            console.error(e);
          };

          let darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
          setTheme(preferredTheme || (darkQuery.matches ? "dark" : "light"));
        })()`,
      }}
    />,
  ]);
};
