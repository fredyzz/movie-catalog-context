import React from "react";
import PropTypes from "prop-types";
import MovieDetail from "../MovieDetail";

const MovieList = ({ movies }) => (
  <div>
    {movies.length ? (
      movies.map((movie) => <MovieDetail key={movie.id} movie={movie} />)
    ) : (
      <p>No movies</p>
    )}
  </div>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object)
};

MovieList.defaultProps = {
  movies: []
};

export default MovieList;
