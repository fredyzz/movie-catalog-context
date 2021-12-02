import React from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import "./index.css";

const Layout = ({ isDarkMode, subtitle, title, toogleDarkMode }) => {
  return (
    <div className="Layout">
      <Header
        isDarkMode={isDarkMode}
        subtitle={subtitle}
        title={title}
        toogleDarkMode={toogleDarkMode}
      />
      <Outlet />
    </div>
  );
};

Layout.propTypes = {
  isDarkMode: PropTypes.bool,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  toogleDarkMode: PropTypes.func.isRequired
};

Layout.defaultProps = {
  isDarkMode: false,
  subtitle: undefined
};

export default Layout;
