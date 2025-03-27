import React from 'react';
// import './Services.css';

const servicesData = [
  {
    title: 'Сайты под ключ',
    description: 'От лендингов до интернет-магазинов – с продуманным UX и высокой конверсией.Тут с иконками которые я потом по ищу в интернете',
  },
  {
    title: 'Мобильные приложения',
    description: 'iOS и Android-приложения, которые решают задачи бизнеса и пользователей.Тут с иконками которые я потом по ищу в интернете',
  },
  {
    title: 'Дизайн и брендинг',
    description: 'Запоминающийся визуальный стиль, который усиливает доверие к вашему бренду.Тут с иконками которые я потом по ищу в интернете',
  },
  {
    title: 'Реклама и продвижение',
    description: 'Настроим рекламу, которая привлекает клиентов, а не просто тратит бюджет.Тут с иконками которые я потом по ищу в интернете',
  },
  {
    title: 'Ещё что то добавим ?)',
    description: 'Или просто более подробно распишем ?',
  }
];

function Services() {
  return (
    <section id="services" className="services">
      <h2>Что мы делаем</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <a href="/services" className="services-btn">Подробнее об услугах</a>
    </section>
  );
}

export default Services;
