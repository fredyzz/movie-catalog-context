import React from "react";
import { useParams } from "react-router-dom";
import "./index.css";

const baseClass = "MovieDetail";

const MovieDetail = () => {
  // eslint-disable-next-line no-console
  console.log("render MovieDetail");

  const { movieId } = useParams();

  return (
    <div className={baseClass}>
      <h3>Movie detail</h3>
      <p>Movie Id: {movieId}</p>
    </div>
  );
};

export default MovieDetail;
