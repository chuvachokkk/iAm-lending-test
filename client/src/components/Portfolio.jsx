import React from 'react';
// import './Portfolio.css';

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <h2>Наши работы говорят за нас</h2>
      <div className="portfolio-card">
         <h3>Интернет-магазин для бренда косметики</h3>
         <p><strong>Задача:</strong> Увеличить онлайн-продажи на 200% за 6 месяцев.</p>
         <p><strong>Решение:</strong> Разработали удобный магазин, подключили аналитику и настроили рекламу.</p>
         <p><strong>Результат:</strong> Рост выручки на 240%, 3500+ заказов в месяц.</p>
         <h3>Тут мы будем ещё делать ?</h3>
         <p><strong>Задача:</strong> тут можно сделать карточки</p>
         <p><strong>Решение:</strong> с видео </p>
         <p><strong>Результат:</strong>либо просто описание проекта с карточкой и ссылка на него</p>
      </div>
      <a href="/portfolio" className="portfolio-btn">Все кейсы</a>
    </section>
  );
}

export default Portfolio;
