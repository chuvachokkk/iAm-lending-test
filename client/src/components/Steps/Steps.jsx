import React from 'react';
import './Steps.css';

const stepsData = [
  {
    title: 'Анализ и планирование',
    description: 'Анализируем ваши цели, изучаем рынок и разрабатываем стратегию проекта.',
    details: [
      'Определение целей и задач проекта',
      'Анализ рынка и конкурентов',
      'Разработка стратегии и плана реализации',
    ],
  },
  {
    title: 'Дизайн и прототипирование',
    description: 'Создаем уникальный дизайн и прототипы для визуализации идей.',
    details: [
      'Разработка концепции дизайна',
      'Создание макетов и прототипов',
      'Согласование с заказчиком и корректировка',
    ],
  },
  {
    title: 'Разработка и тестирование',
    description: 'Разрабатываем продукт с использованием современных технологий и тестируем его.',
    details: [
      'Программирование и интеграция систем',
      'Юнит-тестирование и исправление ошибок',
      'Проведение интеграционных тестов',
    ],
  },
  {
    title: 'Запуск и поддержка',
    description: 'Запускаем проект и обеспечиваем его сопровождение и развитие.',
    details: [
      'Развертывание проекта на сервере',
      'Мониторинг работы и оптимизация',
      'Техническая поддержка и обновления',
    ],
  },
];

function Steps() {
  return (
    <section className="steps-section">
      <h2>Этапы работы</h2>
      <div className="steps-big-card">
        {stepsData.map((step, index) => (
          <div key={index} className="step-card">
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            {step.details && (
              <ul className="step-details">
                {step.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Steps;
