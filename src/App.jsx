import React from "react";
import Header from "./components/Header";
import MovieList from "./components/Movie/MovieList";
import "./App.css";

// Mocks for developing purposes
import movieListMock from "./__mocks__/movies";

const movieList = movieListMock.result;

const App = () => (
  <div className="App">
    <Header title="Movie Catalog" />
    <MovieList movies={movieList} />
  </div>
);
export default App;
