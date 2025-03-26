import React from 'react';
import './Hero.css'; // стили для hero-секции

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Разработка веб-сайтов и приложений</h1>
        <p>тут можно сделать какой нибудь текст , именно про описание компании и т.д.</p>
        <a href="#contacts" className="hero-btn">Связаться с нами</a>
      </div>
    </section>
  );
}

export default Hero;
