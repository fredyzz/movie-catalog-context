import React, { memo } from "react";
import { useParams } from "react-router-dom";
import "./index.css";

const baseClass = "MovieDetail";

const MovieDetail = () => {
  const { movieId } = useParams();

  return (
    <div className={baseClass}>
      <h3>Movie detail</h3>
      <p>Movie Id: {movieId}</p>
    </div>
  );
};

export default memo(MovieDetail);
