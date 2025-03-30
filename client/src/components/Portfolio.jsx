import React, { useState } from 'react';
import './Portfolio.css';

const projects = [
  {
    title: "Промо Проект 1",
    image: "https://avatars.mds.yandex.net/i?id=adea007839dfe5ac0ad6f525cabfe799_l-5508813-images-thumbs&n=13", // замените на реальный путь к изображению
    description: "Описание работы над проектом 1. Здесь подробно описывается выполненная работа, достигнутые результаты и преимущества решения."
  },
  {
    title: "Промо Проект 2",
    image: "https://avatars.mds.yandex.net/i?id=30f7bd6cc33da21536722aa486ab492d994975d8-5333993-images-thumbs&n=13", // замените на реальный путь к изображению
    description: "Описание работы над проектом 2. Мы реализовали уникальное решение, которое позволило увеличить продажи и оптимизировать процессы."
  },
  {
    title: "Промо Проект 3",
    image: "https://avatars.mds.yandex.net/i?id=0a36dd24a72a1d14245751c52c1cf0ff_l-5083805-images-thumbs&n=13", // замените на реальный путь к изображению
    description: "Описание работы над проектом 3. Детальный анализ, разработка и поддержка позволили клиенту выйти на новый уровень."
  }
];

function Portfolio() {
  const [current, setCurrent] = useState(0);
  const total = projects.length;

  const prevProject = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const nextProject = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  return (
    <section className="portfolio">
      <h2>Наши проекты</h2>
      <div className="portfolio-slider">
        <button className="arrow left-arrow" onClick={prevProject}>&lt;</button>
        {/* Используем key={current}, чтобы элемент перерисовывался при смене проекта и анимация срабатывала */}
        <div className="portfolio-content" key={current}>
          <div className="portfolio-image">
            <img src={projects[current].image} alt={projects[current].title} />
          </div>
          <div className="portfolio-description">
            <h3>{projects[current].title}</h3>
            <p>{projects[current].description}</p>
          </div>
        </div>
        <button className="arrow right-arrow" onClick={nextProject}>&gt;</button>
      </div>
    </section>
  );
}

export default Portfolio;