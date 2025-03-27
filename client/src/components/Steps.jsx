import React from 'react';
// import './Steps.css';

function Steps() {
  return (
    <section id="steps" className="steps">
      <h2>Как мы работаем</h2>
      <ol>
         <li><strong>Брифование</strong> – Погружаемся в ваш бизнес и цели.</li>
         <li><strong>Прототипирование</strong> – Создаем понятную структуру будущего продукта.</li>
         <li><strong>Дизайн и разработка</strong> – Воплощаем идею в жизнь.</li>
         <li><strong>Тестирование</strong> – Проверяем каждую деталь.</li>
         <li><strong>Запуск и поддержка</strong> – Помогаем масштабироваться.</li>
         <li><strong>Тут тоже</strong> – Можем добавить.</li>
      </ol>
      <a href="#contacts" className="steps-btn">Начать сотрудничество</a>
    </section>
  );
}

export default Steps;
