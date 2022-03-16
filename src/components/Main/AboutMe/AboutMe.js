import "./AboutMe.css";
import foto from "../../../images/foto.jpg";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__profile">
          <h3 className="about-me__name">Андрей</h3>
          <p className="about-me__profession">Фронтенд-разработчик, 33 года</p>
          <p className="about-me__description">
            Я родился и живу в Москве, закончил факультет муниципального управления РГГУ.
            Я люблю слушать музыку, играть в футбол и кататься на сноуборде.
            В 2021 году пошел учиться на Фронтенд-разработчикаюю
            После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <ul className="about-me__social">
            <li><a className="about-me__link" href="https://www.facebook.com/profile.php?id=100008955192507" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a className="about-me__link" href="https://github.com/APacheko" target="_blank" rel="noopener noreferrer">Github</a></li>
          </ul>
        </div>
        <img className="about-me__foto" src={foto} alt="Фотография"/>
      </div>
    </section>
  )
}

export default AboutMe;
