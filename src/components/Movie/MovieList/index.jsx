import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../MovieCard";
import "./index.css";

const MovieList = ({ movies, isDarkMode }) => (
  <div className="MovieList">
    {movies.length ? (
      movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} isDarkMode={isDarkMode} />
      ))
    ) : (
      <p>No movies</p>
    )}
  </div>
);

MovieList.propTypes = {
  isDarkMode: PropTypes.bool,
  movies: PropTypes.arrayOf(PropTypes.object)
};

MovieList.defaultProps = {
  isDarkMode: false,
  movies: []
};

export default MovieList;
