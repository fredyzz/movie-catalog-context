import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";

export const ThemeContext = React.createContext();

export const ThemeWrapper = ({ children, darkMode }) => {
  const [isDarkMode, setIsDarkMode] = useState(darkMode);
  const toogleDarkMode = () => setIsDarkMode(!isDarkMode);

  const contextInitialValues = useMemo(() => {
    return { isDarkMode, toogleDarkMode };
  }, [isDarkMode, toogleDarkMode]);

  return (
    <ThemeContext.Provider value={contextInitialValues}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  darkMode: PropTypes.bool
};

ThemeWrapper.defaultProps = {
  darkMode: false
};
