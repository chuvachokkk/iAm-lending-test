import React from 'react';
// import './Reviews.css';

function Reviews() {
  return (
    <section id="reviews" className="reviews">
      <h2>Нас рекомендуют</h2>
      <div className="review">
         <p>
           "Команда I am сделала для нас сайт и запустила рекламу. Через 3 месяца трафик вырос в 5 раз, а заявки – на 300%. Профессионалы, которым можно доверять!"
         </p>
         <p className="review-author">— Алексей, основатель [Название компании]</p>
         <p>
           Ну тут над отзывами можно по работать , в gpt загнать если надо , или вообще без них ?
         </p>
         <p className="review-author">— Пока без вау эффектов , я ещё по думаю над этим </p>
      </div>
    </section>
  );
}

export default Reviews;
