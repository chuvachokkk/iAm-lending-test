import React, { useState } from 'react';
// import './Contacts.css';

function Contacts() {
  const [formData, setFormData] = useState({ name: '', contact: '', description: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Добавьте логику отправки формы
    setSubmitted(true);
  };

  return (
    <section id="contacts" className="contacts">
      <h2>Готовы обсудить ваш проект?</h2>
      <p>Оставьте заявку, и мы предложим решение уже сегодня.</p>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Имя:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Телефон/Email:
            <input type="text" name="contact" value={formData.contact} onChange={handleChange} required />
          </label>
          <label>
            Описание задачи:
            <textarea name="description" value={formData.description} onChange={handleChange} required />
          </label>
          <button type="submit">Отправить</button>
        </form>
      ) : (
        <div className="thank-you">
          <p>Спасибо за заявку! Мы ответим в течение 1 часа.</p>
        </div>
      )}
      <div className="trust-signals">
         <p>Конфиденциально. Без спама.</p>
         <p>тут идея сделать всплывающее окно , нужно ещё по сайтам по лазить по смотреть</p>
         <p>Норм ? </p>
         <p>Если есть идеи прям с дизайном что спиздить , ты говори) </p>
      </div>
    </section>
  );
}

export default Contacts;
