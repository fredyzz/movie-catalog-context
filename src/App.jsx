import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import MovieList from "./components/Movie/MovieList";
import MovieDetail from "./components/Movie/MovieDetail";
import "./App.css";

// Mocks for developing purposes
import movieListMock from "./__mocks__/movies";

const movieList = movieListMock.result;

const { REACT_APP_TITLE } = process.env;

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toogleDarkMode = () => setIsDarkMode(!isDarkMode);

  const theme = isDarkMode ? "dark" : "light";

  const getLayout = () => (
    <Layout
      isDarkMode={isDarkMode}
      title={REACT_APP_TITLE}
      toogleDarkMode={toogleDarkMode}
    />
  );

  const getMovieList = () => (
    <MovieList movies={movieList} isDarkMode={isDarkMode} />
  );

  const getMovieDetail = () => <MovieDetail />;

  return (
    <div className={`App ${theme}`}>
      <Routes>
        <Route path="/" element={getLayout()}>
          <Route index element={getMovieList()} />
          <Route path="movie/:movieId" element={getMovieDetail()} />
        </Route>
      </Routes>
    </div>
  );
};
export default App;
