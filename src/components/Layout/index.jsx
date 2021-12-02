import React from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import "./index.css";

const Layout = ({ subtitle, title }) => {
  // eslint-disable-next-line no-console
  console.log("render Layout");
  return (
    <div className="Layout">
      <Header subtitle={subtitle} title={title} />
      <Outlet />
    </div>
  );
};

Layout.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired
};

Layout.defaultProps = {
  subtitle: undefined
};

export default Layout;
