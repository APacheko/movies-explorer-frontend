import React from "react";
import "./Portfolio.css";
import arrow from "../../../images/arrow.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__project">
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://github.com/APacheko/how-to-learn" target="_blank" rel="noopener noreferrer">
            Статичный сайт
            <img className="portfolio__icon" src={arrow} alt="стрелка" />
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://github.com/APacheko/russian-travel" target="_blank" rel="noopener noreferrer">
            Адаптивный сайт
            <img className="portfolio__icon" src={arrow} alt="стрелка" />
          </a>
        </li>
        <li className="portfolio__item"><a className="portfolio__link" href="https://github.com/APacheko/react-mesto-api-full" target="_blank" rel="noopener noreferrer">
          Одностраничное приложение
          <img className="portfolio__icon" src={arrow} alt="стрелка" />
        </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;