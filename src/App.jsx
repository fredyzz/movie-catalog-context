import React, { useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import GlobalContext from "./GlobalContext";
import Layout from "./components/Layout";
import MovieList from "./components/Movie/MovieList";
import MovieDetail from "./components/Movie/MovieDetail";
import "./App.css";

// Mocks for developing purposes
import movieListMock from "./__mocks__/movies";

const movieList = movieListMock.result;

const { REACT_APP_TITLE } = process.env;

const App = () => {
  // eslint-disable-next-line no-console
  console.log("render App");

  // Constructing context initial values and methods
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toogleDarkMode = () => setIsDarkMode(!isDarkMode);

  const contextInitialValues = {
    isDarkMode,
    toogleDarkMode
  };

  // This is to avoid re-render unless the values change
  const memoizedContextInitialValues = useMemo(
    () => contextInitialValues,
    [isDarkMode, toogleDarkMode]
  );

  const theme = isDarkMode ? "dark" : "light";

  const getLayout = () => <Layout title={REACT_APP_TITLE} />;
  const getMovieList = () => <MovieList movies={movieList} />;
  const getMovieDetail = () => <MovieDetail />;

  return (
    <GlobalContext.Provider value={memoizedContextInitialValues}>
      <div className={`App ${theme}`}>
        <Routes>
          <Route path="/" element={getLayout()}>
            <Route index element={getMovieList()} />
            <Route path="movie/:movieId" element={getMovieDetail()} />
          </Route>
        </Routes>
      </div>
    </GlobalContext.Provider>
  );
};
export default App;
