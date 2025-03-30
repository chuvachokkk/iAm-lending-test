import React from 'react';
import './Steps.css';

const stepsData = [
  {
    title: 'Анализ и планирование',
    description: 'Анализируем ваши цели, изучаем рынок и разрабатываем стратегию проекта.',
  },
  {
    title: 'Дизайн и прототипирование',
    description: 'Создаем уникальный дизайн и прототипы для визуализации идей.',
  },
  {
    title: 'Разработка и тестирование',
    description: 'Разрабатываем продукт с использованием современных технологий и тестируем его.',
  },
  {
    title: 'Запуск и поддержка',
    description: 'Запускаем проект и обеспечиваем его сопровождение и развитие.',
  },
];

function Steps() {
  return (
    <section className="steps-section">
      <h2>Этапы работы</h2>
      <div className="steps-grid-wrapper">
        <svg className="steps-lines" xmlns="http://www.w3.org/2000/svg">
          <line x1="150" y1="150" x2="470" y2="350" stroke="#C89B6E" strokeWidth="4" markerEnd="url(#arrow)" />
          <line x1="470" y1="350" x2="150" y2="470" stroke="#C89B6E" strokeWidth="4" markerEnd="url(#arrow)" />
          <line x1="150" y1="470" x2="470" y2="670" stroke="#C89B6E" strokeWidth="4" markerEnd="url(#arrow)" />
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
              <path d="M0,0 L0,6 L9,3 z" fill="#C89B6E" />
            </marker>
          </defs>
        </svg>
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