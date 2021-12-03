import { useContext } from "react";
import { ThemeContext } from "./ThemeWrapper";

const useTheme = () => {
  const { isDarkMode, toogleDarkMode } = useContext(ThemeContext);
  const theme = isDarkMode ? "dark" : "light";

  return { isDarkMode, theme, toogleDarkMode };
};

export default useTheme;
