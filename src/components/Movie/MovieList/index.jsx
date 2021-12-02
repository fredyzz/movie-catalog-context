import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../MovieCard";
import "./index.css";

const MovieList = ({ movies }) => {
  // eslint-disable-next-line no-console
  console.log("render MovieList");

  return (
    <div className="MovieList">
      {movies.length ? (
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      ) : (
        <p>No movies</p>
      )}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object)
};

MovieList.defaultProps = {
  movies: []
};

export default MovieList;
