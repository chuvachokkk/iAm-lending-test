import React, { useRef } from 'react';
import './Services.css';

const servicesData = [
  { 
    title: 'Лендинг', 
    price: 'от 20 000 руб.', 
    support: '5 000 руб./мес',
    image: 'https://avatars.mds.yandex.net/i?id=07337d6648e4bad6d3279b6d56e76d708943c432-4769507-images-thumbs&n=13'
  },
  { 
    title: 'Одностраничный сайт', 
    price: 'от 35 000 руб.', 
    support: '5 000 руб./мес',
    image: 'https://avatars.mds.yandex.net/i?id=07337d6648e4bad6d3279b6d56e76d708943c432-4769507-images-thumbs&n=13'
  },
  { 
    title: 'Многостраничник', 
    price: 'от 50 000 руб.', 
    support: '10 000 руб./мес',
    image: 'https://avatars.mds.yandex.net/i?id=07337d6648e4bad6d3279b6d56e76d708943c432-4769507-images-thumbs&n=13'
  },
  { 
    title: 'Онлайн магазин', 
    price: 'от 70 000 руб.', 
    support: '20 000 руб./мес',
    image: 'https://avatars.mds.yandex.net/i?id=07337d6648e4bad6d3279b6d56e76d708943c432-4769507-images-thumbs&n=13'
  },
  { 
    title: 'Разработка приложений', 
    price: 'от 80 000 руб.', 
    support: '20 000 руб./мес',
    image: 'https://avatars.mds.yandex.net/i?id=07337d6648e4bad6d3279b6d56e76d708943c432-4769507-images-thumbs&n=13'
  },
  { 
    title: 'Разработка чат ботов', 
    price: 'от 15 000 руб.', 
    support: '5 000 руб./мес',
    image: 'https://avatars.mds.yandex.net/i?id=07337d6648e4bad6d3279b6d56e76d708943c432-4769507-images-thumbs&n=13'
  },
  { 
    title: 'Разработка парсеров', 
    price: 'от 15 000 руб.', 
    support: '5 000 руб./мес',
    image: 'https://avatars.mds.yandex.net/i?id=07337d6648e4bad6d3279b6d56e76d708943c432-4769507-images-thumbs&n=13'
  },
];

function Services() {
  const scrollRef = useRef(null);

  const scrollAmount = 500; // можно регулировать величину прокрутки

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="services">
      <h2>Услуги и цены</h2>
      <div className="carousel-container">
        <button className="carousel-button prev" onClick={handleScrollLeft}>
          &lt;
        </button>
        <div className="carousel-slider" ref={scrollRef}>
          {servicesData.map((service, index) => (
            <div key={index} className="card">
              <img src={service.image} alt={service.title} className="card-image" />
              <div className="card-content">
                <h3>{service.title}</h3>
                <p className="price">{service.price}</p>
                <p className="support">{service.support}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-button next" onClick={handleScrollRight}>
          &gt;
        </button>
      </div>
    </section>
  );
}

export default Services;
