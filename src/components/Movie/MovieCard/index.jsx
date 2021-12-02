import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import MovieCardFront from "./MovieCardFront";
import MovieCardBack from "./MovieCardBack";
import { MOVIE_IMAGE_BASE_URL } from "../../../config";
import "./index.css";

const baseClass = "MovieCard";

const MovieCard = ({ movie }) => {
  // eslint-disable-next-line no-console
  console.log("render MovieCard");

  const { overview, poster_path: posterPath, title } = movie;
  const moviePoster = `${MOVIE_IMAGE_BASE_URL}${posterPath}`;

  return (
    <div className={`${baseClass} `}>
      <Link to={`movie/${movie.id}`}>
        <div className={`${baseClass}-content`}>
          <MovieCardFront
            baseClass={baseClass}
            moviePoster={moviePoster}
            title={title}
          />
          <MovieCardBack
            baseClass={baseClass}
            overview={overview}
            title={title}
          />
        </div>
      </Link>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
};

export default MovieCard;
