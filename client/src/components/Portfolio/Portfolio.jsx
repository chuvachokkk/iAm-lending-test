import React, { useState } from 'react';
import './Portfolio.css';

const projects = [
  {
    title: 'StyleHub',
    image: 'https://avatars.mds.yandex.net/i?id=a960e5537ff63ef83b554a07601b1d8f003c0310-4872430-images-thumbs&n=13', // Замените на реальный путь
    description: 'Разработали интернет-магазин одежды с каталогом и оплатой онлайн. Рост конверсии на 35% за 2 месяца.',
  },
  {
    title: 'FoodExpress',
    image: 'https://i.pinimg.com/originals/ad/a8/7a/ada87a7eb70f3a6722fefaab633b577b.png', // Замените на реальный путь
    description: 'Мобильное приложение для доставки еды. Удобный интерфейс увеличил заказы на 40%.',
  },
  {
    title: 'TechCorp',
    image: 'https://avatars.mds.yandex.net/i?id=39beb1ac30ef8bacf095fd74f64051513fe92bf2-8486579-images-thumbs&n=13', // Замените на реальный путь
    description: 'Многостраничный сайт для IT-компании. Улучшение SEO привело к росту трафика на 50%.',
  },
];

function Portfolio() {
  const [current, setCurrent] = useState(0);
  const total = projects.length;

  const prevProject = () => setCurrent((prev) => (prev - 1 + total) % total);
  const nextProject = () => setCurrent((prev) => (prev + 1) % total);

  return (
    <section className="portfolio">
      <h2>Наши проекты</h2>
      <div className="portfolio-slider">
        <button className="arrow left-arrow" onClick={prevProject}>
          &lt;
        </button>
        <div className="portfolio-content" key={current}>
          <div className="portfolio-image">
            <img src={projects[current].image} alt={projects[current].title} />
          </div>
          <div className="portfolio-description">
            <h3>{projects[current].title}</h3>
            <p>{projects[current].description}</p>
          </div>
        </div>
        <button className="arrow right-arrow" onClick={nextProject}>
          &gt;
        </button>
      </div>
    </section>
  );
}

export default Portfolio;