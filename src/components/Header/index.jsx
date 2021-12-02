import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ThemeToogle from "./ThemeToogle";
import "./index.css";

const baseClass = "Header";

const Header = ({ isDarkMode, subTitle, title, toogleDarkMode }) => {
  return (
    <div className={baseClass}>
      <div className={`${baseClass}-titles`}>
        <Link to="/">
          <h1>{title}</h1>
        </Link>

        {subTitle && <h2>{subTitle}</h2>}
      </div>
      <div className={`${baseClass}-actions`}>
        <ThemeToogle onToogle={toogleDarkMode} isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

Header.propTypes = {
  isDarkMode: PropTypes.bool,
  subTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  toogleDarkMode: PropTypes.func.isRequired
};

Header.defaultProps = {
  isDarkMode: false,
  subTitle: null
};

export default Header;
