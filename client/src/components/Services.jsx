import React from 'react';
import './Services.css';

// Массив с данными об услугах
const servicesData = [
  { 
    title: 'Лендинг', 
    price: 'от 20 000 руб.', 
    support: 'тут будет описание что это',
    image: 'https://avatars.mds.yandex.net/i?id=ec2aa17f80982b72eca5b4261d29a0589eca1e34-6906583-images-thumbs&n=13'
  },
  { 
    title: 'Одностраничный сайт', 
    price: 'от 35 000 руб.', 
    support: 'тут будет описание что это',
    image: 'https://avatars.mds.yandex.net/i?id=ec2aa17f80982b72eca5b4261d29a0589eca1e34-6906583-images-thumbs&n=13'
  },
  { 
    title: 'Многостраничник', 
    price: 'от 50 000 руб.', 
    support: 'тут будет описание что это',
    image: 'https://avatars.mds.yandex.net/i?id=ec2aa17f80982b72eca5b4261d29a0589eca1e34-6906583-images-thumbs&n=13'
  },
  { 
    title: 'Онлайн магазин', 
    price: 'от 70 000 руб.', 
    support: 'тут будет описание что это',
    image: 'https://avatars.mds.yandex.net/i?id=ec2aa17f80982b72eca5b4261d29a0589eca1e34-6906583-images-thumbs&n=13'
  },
  { 
    title: 'Разработка приложений', 
    price: 'от 80 000 руб.', 
    support: 'тут будет описание что это',
    image: 'https://avatars.mds.yandex.net/i?id=ec2aa17f80982b72eca5b4261d29a0589eca1e34-6906583-images-thumbs&n=13'
  },
  { 
    title: 'Разработка чат ботов', 
    price: 'от 15 000 руб.', 
    support: 'тут будет описание что это',
    image: 'https://avatars.mds.yandex.net/i?id=ec2aa17f80982b72eca5b4261d29a0589eca1e34-6906583-images-thumbs&n=13'
  },
  { 
    title: 'Разработка парсеров', 
    price: 'от 15 000 руб.', 
    support: 'тут будет описание что это',
    image: 'https://avatars.mds.yandex.net/i?id=ec2aa17f80982b72eca5b4261d29a0589eca1e34-6906583-images-thumbs&n=13'
  },
];

function Services() {
  return (
    <section id="services" className="services">
      <h2>Услуги и цены</h2>
      {/* Контейнер для карточек, реализованный с помощью CSS Grid */}
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="card">
            {/* Изображение услуги */}
            <img src={service.image} alt={service.title} className="card-image" />
            <div className="card-content">
              {/* Название услуги */}
              <h3>{service.title}</h3>
              {/* Описание услуги: цена и поддержка */}
              <p>{service.price}</p>
              <p>{service.support}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
