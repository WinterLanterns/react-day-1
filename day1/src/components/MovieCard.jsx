import React from "react";
import "./MovieCard.css";
import Utils from "../Utils";

const MovieCard = ({ title, type, posterURL }) => {
  return (
    <div className="movie-card">
      <img
        src="https://m.media-amazon.com/images/M/MV5BNzk1OGU2NmMtNTdhZC00NjdlLWE5YTMtZTQ0MGExZTQzOGQyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        alt="halloween"
      />
      <div className="movie-card__infobox">
        <h1 className="movie-card__title">Halloween</h1>

        <button className="movie-card__button">Movie</button>
      </div>
    </div>
  );
};

export default MovieCard;
