/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const baseClass = "ThemeToogle";

const ThemeToogle = ({ isDarkMode, onToogle }) => {
  return (
    <div className={baseClass}>
      <input
        id="checkbox"
        type="checkbox"
        className={`${baseClass}-checkbox`}
        onChange={onToogle}
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

ThemeToogle.propTypes = {
  isDarkMode: PropTypes.bool,
  onToogle: PropTypes.func.isRequired
};

ThemeToogle.defaultProps = {
  isDarkMode: false
};

export default ThemeToogle;
