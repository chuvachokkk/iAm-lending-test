import React from 'react';
// import './ServiceGrid.css';

const serviceCards = [
  {
    title: 'Веб разработка',
    options: ['Лендинг', 'Многостраничный', 'Онлайн магазин']
  },
  {
    title: 'Дизайн',
    options: ['UI/UX', 'Прототипирование', 'Брендинг']
  },
  {
    title: 'Маркетинг',
    options: ['SEO', 'Таргет', 'Контекст']
  },
  {
    title: 'Моб приложения',
    options: ['iOS', 'Android', 'Другое']
  },
];

function ServiceGrid() {
  return (
    <section className="service-grid-section">
      <h2>Наши услуги</h2>
      <div className="service-grid">
        {serviceCards.map((card, index) => (
          <div key={index} className="service-card">
            <h3>{card.title}</h3>
            <div className="service-options">
              {card.options.map((option, idx) => (
                <button key={idx} className="service-option-btn">{option}</button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceGrid;
