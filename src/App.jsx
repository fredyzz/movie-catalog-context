import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import MovieList from "./components/Movie/MovieList";
import MovieDetail from "./components/Movie/MovieDetail";
import "./App.css";

// Mocks for developing purposes
import movieListMock from "./__mocks__/movies";
import { ThemeWrapper } from "./Context/Theme/ThemeWrapper";

const movieList = movieListMock.result;

const { REACT_APP_TITLE } = process.env;

const App = () => {
  const getLayout = () => <Layout title={REACT_APP_TITLE} />;
  const getMovieDetail = () => <MovieDetail />;
  const getMovieList = () => <MovieList movies={movieList} />;

  return (
    <div className="App">
      <ThemeWrapper>
        <Routes>
          <Route path="/" element={getLayout()}>
            <Route index element={getMovieList()} />
            <Route path="movie/:movieId" element={getMovieDetail()} />
          </Route>
        </Routes>
      </ThemeWrapper>
    </div>
  );
};
export default App;
