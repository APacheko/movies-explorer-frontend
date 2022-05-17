import React from "react";
import "./MoviesCard.css";
import movie from "../../images/movie6.jpg";

function MoviesCard({ statusBtn }) {
  
  return (
    <li className="movie">
      <div className="movie__container">
        <h1 className="movie__title">В погоне за Бенкси</h1>
        <p className="movie__time">27 минут</p>
      </div>
      <img className="movie__poster" src={movie} alt="Постер к фильму" />
       {statusBtn === "save" && (
         <button className="movie__btn" type="button">Сохранить</button>
        )}
       {statusBtn === "delete" && (
         <button className="movie__btn movie__btn_type_delete" type="button"></button>
        )}
        {statusBtn === "saved" && (
         <button className="movie__btn movie__btn_type_active" type="button"></button>
        )}
    </li>
  )
}

export default MoviesCard;