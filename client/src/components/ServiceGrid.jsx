import React, { useState } from 'react';
import './ServiceGrid.css';

// Массив с услугами и подуслугами
// У каждой подуслуги есть "name" и "description"
const serviceCards = [
  {
    title: 'Веб разработка',
    subservices: [
      {
        name: 'Лендинг',
        description:
          'Короткий промо-сайт с одной страницей, рассчитанный на быструю конверсию.',
      },
      {
        name: 'Многостраничный',
        description:
          'Полноценный сайт с несколькими страницами, каталогами и т.д.',
      },
      {
        name: 'Онлайн магазин',
        description:
          'E-commerce решение с каталогом товаров, корзиной и оплатой онлайн.',
      },
      {
        name: 'Тоже тест , если есть какие то идеи по стилю , ты скажи , я могу сделать по другому',
        description:
          'если есть какие то идеи по стилю , ты скажи , я могу сделать по другому',
      },
    ],
  },
  {
    title: 'Дизайн',
    subservices: [
      {
        name: 'UI/UX',
        description:
          'Разработка удобных интерфейсов с учётом пользовательского опыта.',
      },
      {
        name: 'Прототипирование',
        description:
          'Создание интерактивных прототипов для проверки гипотез и удобства.',
      },
      {
        name: 'Брендинг',
        description:
          'Логотипы, фирменный стиль и гайдлайны для узнаваемости бренда.',
      },
    ],
  },
  {
    title: 'Маркетинг',
    subservices: [
      {
        name: 'SEO',
        description:
          'Оптимизация сайта для поисковых систем, рост органического трафика.',
      },
      {
        name: 'Таргет',
        description:
          'Настройка рекламных кампаний в соцсетях на целевую аудиторию.',
      },
      {
        name: 'Контекст',
        description:
          'Запуск рекламы в поисковых системах: Google Ads, Яндекс.Директ.',
      },
    ],
  },
  {
    title: 'Мобильные приложения',
    subservices: [
      {
        name: 'iOS',
        description: 'Разработка приложений для iPhone и iPad.',
      },
      {
        name: 'Android',
        description:
          'Разработка приложений для Android-смартфонов и планшетов.',
      },
      {
        name: 'Другое',
        description:
          'Кроссплатформенная разработка, Flutter, React Native и т.д.',
      },
    ],
  },
];

function ServiceGrid() {
  // Храним выбранную подуслугу, чтобы показать всплывающее окно
  const [selectedSubservice, setSelectedSubservice] = useState(null);

  const closeModal = () => {
    setSelectedSubservice(null);
  };

  return (
    <section className="service-grid-section">
      <h2>Наши услуги</h2>

      {/* Сетка 2×2 */}
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

      {/* Модальное окно при выборе подуслуги */}
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
