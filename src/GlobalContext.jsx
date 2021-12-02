import React from "react";

const defaultValue = {
  isDarkMode: false,
  toogleDarkMode: () => {}
};

const GlobalContext = React.createContext(defaultValue);
GlobalContext.displayName = "GlobalContext";

export default GlobalContext;
