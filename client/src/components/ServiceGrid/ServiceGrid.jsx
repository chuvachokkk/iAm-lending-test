import React, { useState } from 'react';
import './ServiceGrid.css';

const serviceCards = [
  {
    title: 'Веб-разработка',
    subservices: [
      { name: 'Лендинг', description: 'Одностраничный сайт для быстрой конверсии.' },
      { name: 'Многостраничный', description: 'Полноценный сайт с каталогами и разделами.' },
      { name: 'Онлайн-магазин', description: 'E-commerce с корзиной и онлайн-оплатой.' },
      { name: 'Индивидуальная разработка', description: 'Уникальные решения под ваши задачи.' },
    ],
  },
  {
    title: 'Дизайн',
    subservices: [
      { name: 'UI/UX', description: 'Удобные интерфейсы с учетом пользовательского опыта.' },
      { name: 'Прототипирование', description: 'Интерактивные прототипы для проверки идей.' },
      { name: 'Брендинг', description: 'Логотипы и фирменный стиль для узнаваемости.' },
    ],
  },
  {
    title: 'Маркетинг',
    subservices: [
      { name: 'SEO', description: 'Оптимизация сайта для роста органического трафика.' },
      { name: 'Таргет', description: 'Реклама в соцсетях на целевую аудиторию.' },
      { name: 'Контекст', description: 'Реклама в Google Ads и Яндекс.Директ.' },
    ],
  },
  {
    title: 'Мобильные приложения',
    subservices: [
      { name: 'iOS', description: 'Приложения для iPhone и iPad.' },
      { name: 'Android', description: 'Приложения для Android-устройств.' },
      { name: 'Кроссплатформа', description: 'Разработка на Flutter или React Native.' },
    ],
  },
];

function ServiceGrid() {
  const [selectedSubservice, setSelectedSubservice] = useState(null);

  const closeModal = () => setSelectedSubservice(null);

  return (
    <section className="service-grid-section">
      <h2>Наши услуги</h2>
      <div className="service-grid">
        {serviceCards.map((card, index) => (
          <div key={index} className="service-card">
            <h3>{card.title}</h3>
            <div className="service-options">
              {card.subservices.map((sub, idx) => (
                <button
                  key={idx}
                  className="service-option-btn"
                  onClick={() => setSelectedSubservice(sub)}
                >
                  {sub.name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      {selectedSubservice && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              ✕
            </button>
            <h3>{selectedSubservice.name}</h3>
            <p>{selectedSubservice.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default ServiceGrid;