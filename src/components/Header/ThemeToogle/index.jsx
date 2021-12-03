/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { memo } from "react";
import useTheme from "../../../Context/Theme/useTheme";
import "./index.css";

const baseClass = "ThemeToogle";

const ThemeToogle = () => {
  // eslint-disable-next-line no-console
  console.log("render ThemeToogle");

  const { isDarkMode, toogleDarkMode } = useTheme();

  return (
    <div className={baseClass}>
      <input
        id="checkbox"
        type="checkbox"
        className={`${baseClass}-checkbox`}
        onChange={toogleDarkMode}
        checked={isDarkMode}
      />
      <label htmlFor="checkbox" className={`${baseClass}-label`}>
        <i className="fas fa-moon" />
        <i className="fas fa-sun" />
        <div className={`${baseClass}-ball`} />
      </label>
    </div>
  );
};

export default memo(ThemeToogle);
