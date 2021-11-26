import React from "react";
import PropTypes from "prop-types";
import { MOVIE_IMAGE_BASE_URL } from "../../../config";

const MovieDetail = ({ movie }) => {
  const { overview, poster_path: posterPath, title } = movie;
  const moviePoster = `${MOVIE_IMAGE_BASE_URL}${posterPath}`;

  return (
    <div>
      <img src={moviePoster} alt={title} />
      <h3>{title}</h3>
      <p>{overview}</p>
    </div>
  );
};

MovieDetail.propTypes = {
  movie: PropTypes.shape({
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
};

export default MovieDetail;
