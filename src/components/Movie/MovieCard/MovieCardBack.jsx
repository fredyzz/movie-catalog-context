import React from "react";
import PropTypes from "prop-types";

const MovieCardBack = ({ baseClass, overview, theme, title }) => {
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
  theme: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default MovieCardBack;
