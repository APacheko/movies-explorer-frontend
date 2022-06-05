import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import SearchIcon from "../../images/icon-search.svg"

function SearchForm({ onSubmit, setMovies, suffix }) {

  const [keyword, setKeyword] = React.useState('');
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    const search = JSON.parse(localStorage.getItem(`search${suffix}`));
    const checked = JSON.parse(localStorage.getItem(`checked${suffix}`));
    const moviesFilter = JSON.parse(localStorage.getItem(`moviesFilter${suffix}`));
    if (search) {
      setKeyword(search);
      setChecked(checked);
      setMovies(moviesFilter)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSubmit(e) {
    if (e) e.preventDefault();
    onSubmit(keyword, checked);

  }

  function handleKeywordChange(e) {
    setKeyword(e.target.value)
  }

  function chengeCheckbox(e) {
    setChecked(!checked);
  }

  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form" noValidate onSubmit={handleSubmit}>
          <img className="search__icon" src={SearchIcon} alt="Поиск" />
          <input className="search__input" id="search" type="text" placeholder="Фильм" minLength="1" value={keyword} maxLength="50" onChange={handleKeywordChange} />
          <button className="search__btn" type="submit">Найти</button>
        </form>
        <FilterCheckbox checked={checked} onChange={chengeCheckbox} />
      </div>
    </section>
  )
}
export default SearchForm;