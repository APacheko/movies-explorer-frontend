import React from "react";
import "./MoviesCard.css";
import movie from "../../images/movie6.jpg";

function MoviesCard() {
  return (
    <li className="movie">
      <div className="movie__container">
        <h1 className="movie__title">В погоне за Бенкси</h1>
        <p className="movie__time">27 минут</p>
      </div>
      <img className="movie__poster" src={movie} alt="Постер к фильму" />
      <button className="movie__btn" type="button">Сохранить</button>
    </li>
  )
}

export default MoviesCard;