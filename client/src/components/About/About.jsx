import React from 'react';
import useFadeIn from '../../hooks/useFadeIn';
import './About.css';

function About() {
  useFadeIn();

  return (
    <section id="about" className="about fade-in-section">
      <h2>Почему выбирают нас?</h2>
      <p>
        Мы — команда профессионалов в области разработки, дизайна и маркетинга.
        Создаем цифровые продукты, которые решают задачи бизнеса и способствуют
        его росту. Наша цель — ваш успех.
      </p>
      <div className="advantages">
        <div className="advantage fade-in-section">
          <span>Индивидуальный подход к каждому клиенту</span>
        </div>
        <div className="advantage fade-in-section">
          <span>Полный цикл: от идеи до запуска</span>
        </div>
        <div className="advantage fade-in-section">
          <span>Прозрачные сроки и этапы</span>
        </div>
        <div className="advantage fade-in-section">
          <span>Техподдержка после релиза</span>
        </div>
      </div>
    </section>
  );
}

export default About;