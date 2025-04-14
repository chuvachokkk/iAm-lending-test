import React from 'react';
import './Reviews.css';

function Reviews() {
  return (
    <section id="reviews" className="reviews">
      <section id="reviews" className="reviews fade-in-section"></section>
      <h2>Нас рекомендуют</h2>
      <div className="review">
        <p>
          "Команда разработала сайт для нашего интернет-магазина одежды и настроила рекламу. За 3 месяца трафик вырос в 5 раз, а количество заявок увеличилось на 300%. Рекомендую!"
        </p>
        <p className="review-author">— Алексей, основатель "StyleHub"</p>
      </div>
      <div className="review">
        <p>
          "Создали мобильное приложение для доставки еды. Интуитивный интерфейс и стабильная работа — клиенты довольны, а заказы выросли на 40%."
        </p>
        <p className="review-author">— Мария, директор "FoodExpress"</p>
      </div>
    </section>
  );
}

export default Reviews;