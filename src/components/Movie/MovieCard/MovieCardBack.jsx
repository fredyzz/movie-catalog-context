import React, { useContext } from "react";
import PropTypes from "prop-types";
import GlobalContext from "../../../GlobalContext";

const MovieCardBack = ({ baseClass, overview, title }) => {
  // eslint-disable-next-line no-console
  console.log("render MovieCardBack");

  const { isDarkMode } = useContext(GlobalContext);
  const theme = isDarkMode ? "dark" : "light";

  return (
    <div className={`${baseClass}-content--back ${theme}`}>
      <h3 className={`${baseClass}-title`}>{title}</h3>
      <p className={`${baseClass}-description`}>{overview}</p>
    </div>
  );
};

MovieCardBack.propTypes = {
  baseClass: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default MovieCardBack;
