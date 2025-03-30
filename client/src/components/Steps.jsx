import React from 'react';
import './Steps.css';

const stepsData = [
  {
    title: 'Анализ и планирование',
    description:
      'Мы анализируем ваши цели, изучаем рынок и составляем стратегию для успешного проекта.',
  },
  {
    title: 'Дизайн и прототипирование',
    description:
      'Создаем уникальный дизайн и интерактивные прототипы для визуализации ваших идей.',
  },
  {
    title: 'Разработка и тестирование',
    description:
      'Разрабатываем качественный продукт с применением современных технологий и проводим тщательное тестирование.',
  },
  {
    title: 'Запуск и поддержка',
    description:
      'Запускаем проект, сопровождаем его и обеспечиваем дальнейшую поддержку и развитие.',
  },
];

function Steps() {
  return (
    <section className="steps-section">
      <h2>Этапы работы</h2>
      <div className="steps-grid-wrapper">
        {/* SVG с линиями для соединения карточек */}
        <svg className="steps-lines" xmlns="http://www.w3.org/2000/svg">
          {/* 
              Координаты линий рассчитаны приблизительно:
              - Центр первой карточки: (150, 150)  (карточка 300×300, без сдвига)
              - Центр второй карточки: (470, 350) 
                (вторая карточка во второй колонке: left = 300+20=320, +150=470, margin-top:200 => 200+150=350)
              - Центр третьей карточки: (150, 470) 
                (первая колонка, вторая строка: top = 300+20=320, +150=470)
              - Центр четвертой карточки: (470, 670) 
                (вторая колонка, вторая строка с сдвигом: 320, margin-top:200, +150=670)
          */}
          <line
            x1="150"
            y1="150"
            x2="470"
            y2="350"
            stroke="#C89B6E"
            strokeWidth="4"
            markerEnd="url(#arrow)"
          />
          <line
            x1="470"
            y1="350"
            x2="150"
            y2="470"
            stroke="#C89B6E"
            strokeWidth="4"
            markerEnd="url(#arrow)"
          />
          <line
            x1="150"
            y1="470"
            x2="470"
            y2="670"
            stroke="#C89B6E"
            strokeWidth="4"
            markerEnd="url(#arrow)"
          />
          <defs>
            <marker
              id="arrow"
              markerWidth="10"
              markerHeight="10"
              refX="0"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L0,6 L9,3 z" fill="#C89B6E" />
            </marker>
          </defs>
        </svg>
        {/* Сетка карточек */}
        <div className="steps-grid">
          {stepsData.map((step, index) => (
            <div key={index} className="step-card">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Steps;
