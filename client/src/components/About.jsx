import React from 'react';
// import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <h2>Почему выбирают нас?</h2>
      <p>
        I am – это команда профессионалов в разработке, дизайне и маркетинге. Мы не просто делаем сайты, а создаем инструменты для роста вашего бизнеса. Работаем на результат, а не на галочку.
      </p>
      <div className="advantages">
        <div className="advantage">
          <span>7+ лет в digital</span>
        </div>
        <div className="advantage">
          <span>Сайты, приложения, реклама – под ключ</span>
        </div>
        <div className="advantage">
          <span>Понятные этапы и сроки</span>
        </div>
        <div className="advantage">
          <span>Техподдержка после запуска</span>
        </div>
      </div>
    </section>
  );
}

export default About;
