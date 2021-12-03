import React, { memo } from "react";
import PropTypes from "prop-types";

const MovieCardFront = ({ baseClass, moviePoster, title }) => {
  // eslint-disable-next-line no-console
  console.log("render MovieCardFront");

  return (
    <div className={`${baseClass}-content--front`}>
      <img src={moviePoster} alt={title} className={`${baseClass}-image`} />
    </div>
  );
};

MovieCardFront.propTypes = {
  baseClass: PropTypes.string.isRequired,
  moviePoster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default memo(MovieCardFront);
