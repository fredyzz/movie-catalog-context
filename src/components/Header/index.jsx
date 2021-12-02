import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ThemeToogle from "./ThemeToogle";
import "./index.css";

const baseClass = "Header";

const Header = ({ subTitle, title }) => {
  // eslint-disable-next-line no-console
  console.log("render Header");
  return (
    <div className={baseClass}>
      <div className={`${baseClass}-titles`}>
        <Link to="/">
          <h1>{title}</h1>
        </Link>

        {subTitle && <h2>{subTitle}</h2>}
      </div>
      <div className={`${baseClass}-actions`}>
        <ThemeToogle />
      </div>
    </div>
  );
};

Header.propTypes = {
  subTitle: PropTypes.string,
  title: PropTypes.string.isRequired
};

Header.defaultProps = {
  subTitle: null
};

export default Header;
