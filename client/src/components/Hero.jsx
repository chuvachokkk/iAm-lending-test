import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Создаем digital-продукты, которые приносят прибыль</h1>
        <p>
          Разрабатываем сайты, приложения и дизайн, которые выделяют ваш бизнес среди конкурентов. Полный цикл: от идеи до масштабирования.
        </p>
        <div className="hero-cta">
          <a href="#contacts" className="hero-btn">Обсудить проект</a>
          <a href="#portfolio" className="hero-btn">Посмотреть кейсы</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
