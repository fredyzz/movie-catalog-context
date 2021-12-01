import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { MOVIE_IMAGE_BASE_URL } from "../../../config";
import MovieCardFront from "./MovieCardFront";
import MovieCardBack from "./MovieCardBack";
import "./index.css";

const MovieCard = ({ movie, isDarkMode }) => {
  const baseClass = "MovieCard";

  const theme = isDarkMode ? "dark" : "light";

  const { overview, poster_path: posterPath, title } = movie;
  const moviePoster = `${MOVIE_IMAGE_BASE_URL}${posterPath}`;

  return (
    <div className={`${baseClass} `}>
      <Link to="detail">
        <div className={`${baseClass}-content`}>
          <MovieCardFront
            baseClass={baseClass}
            moviePoster={moviePoster}
            title={title}
          />
          <MovieCardBack
            baseClass={baseClass}
            overview={overview}
            theme={theme}
            title={title}
          />
        </div>
      </Link>
    </div>
  );
};

MovieCard.propTypes = {
  isDarkMode: PropTypes.bool,
  movie: PropTypes.shape({
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
};

MovieCard.defaultProps = {
  isDarkMode: false
};

export default MovieCard;
