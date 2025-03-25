import React from 'react';
import './Hero.css'; // стили для hero-секции

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Разработка веб-сайтов и приложений</h1>
        <p>Мы помогаем вашему бизнесу расти, создавая качественные IT-решения</p>
        <a href="#services" className="hero-btn">Наши услуги</a>
      </div>
    </section>
  );
}

export default Hero;
