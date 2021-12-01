import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./index.css";
import ThemeToogle from "./ThemeToogle";

const Header = ({ isDarkMode, title, toogleDarkMode, subTitle }) => {
  const baseClass = "Header";

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
  title: PropTypes.string.isRequired,
  toogleDarkMode: PropTypes.func.isRequired,
  subTitle: PropTypes.string
};

Header.defaultProps = {
  isDarkMode: false,
  subTitle: null
};

export default Header;
