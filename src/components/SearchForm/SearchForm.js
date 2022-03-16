import React from "react";
import "./SearchForm.css";


function SearchForm() {

  return (
    <section className="search">
    <form className="search__form">
      <input className="search__input" id="search" type="text" placeholder="Фильм" minLength="1" maxLength="50" />
      <span class="field__txt-error" id="nsearch-error">Что-то пошло не так</span>
      <button className="search__btn" type="submit">Найти</button>
    </form>
  </section>
  )
}
export default SearchForm;