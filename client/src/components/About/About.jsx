import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <h2>Почему выбирают нас?</h2>
      <p>
        Мы — команда профессионалов в области разработки, дизайна и маркетинга.
        Создаем цифровые продукты, которые решают задачи бизнеса и способствуют
        его росту. Наша цель — ваш успех.
      </p>
      <div className="advantages">
        <div className="advantage">
          <span>Индивидуальный подход к каждому клиенту</span>
        </div>
        <div className="advantage">
          <span>Полный цикл: от идеи до запуска</span>
        </div>
        <div className="advantage">
          <span>Прозрачные сроки и этапы</span>
        </div>
        <div className="advantage">
          <span>Техподдержка после релиза</span>
        </div>
      </div>
    </section>
  );
}

export default About;
