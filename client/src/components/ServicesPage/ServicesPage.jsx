import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './ServicesPage.css';

function ServicesPage() {
  const [isFormOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', contact: '', description: '' });
  const [submitted, setSubmitted] = useState(false);

  const toggleForm = () => setFormOpen(!isFormOpen);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormOpen(false);
  };

  return (
    <div className="services-page">
      <Header />
      <main className="services-content">
        <section className="services-header">
          <h1>I am Web</h1>
          <button className="discuss-btn" onClick={toggleForm}>
            Обсудить проект
          </button>
        </section>

        {isFormOpen && (
          <div className="form-overlay" onClick={toggleForm}>
            <div className="form-modal" onClick={(e) => e.stopPropagation()}>
              <button className="form-close-btn" onClick={toggleForm}>
                ✕
              </button>
              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <h3>Оставьте заявку</h3>
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
                  <h3>Спасибо!</h3>
                  <p>Мы свяжемся с вами в течение часа.</p>
                </div>
              )}
            </div>
          </div>
        )}

        <section className="service-details">
          <h2>Лендинг</h2>
          <p className="service-description">
            Лендинг — это одностраничный сайт, созданный для привлечения клиентов и увеличения конверсии. Идеально подходит для продвижения продукта, услуги или мероприятия.
          </p>
          <div className="pricing-cards">
            <div className="pricing-card light">
              <h3>Пакет Лайт</h3>
              <p className="card-subtitle">Простой лендинг с базовым дизайном</p>
              <ul>
              <li>бла бла бла</li>
              </ul>
              <p className="price">от: Цифру сам выберешь</p>
            </div>
            <div className="pricing-card start">
              <h3>Пакет Старт</h3>
              <p className="card-subtitle">Лендинг с уникальным дизайном</p>
              <ul>
              <li>бла бла бла</li>
              </ul>
              <p className="price">от: Цифру сам выберешь</p>
            </div>
            <div className="pricing-card ultra">
              <h3>Пакет Ультра</h3>
              <p className="card-subtitle">Премиум-лендинг</p>
              <ul>
                <li>бла бла бла</li>
              </ul>
              <p className="price">от: Цифру сам выберешь</p>
            </div>
          </div>
          <h2>Многостроничный сайт</h2>
          <p className="service-description">
          Многостроничный сайт — это сайт, состоящий из нескольких страниц, каждая из которых может содержать уникальный контент и функционал. Идеально подходит для компаний с большим объемом информации или услуг.
          </p>
          <div className="pricing-cards">
            <div className="pricing-card light">
              <h3>Пакет Лайт</h3>
              <p className="card-subtitle">С базовым дизайном</p>
              <ul>
              <li>бла бла бла</li>
              </ul>
              <p className="price">от: Цифру сам выберешь</p>
            </div>
            <div className="pricing-card start">
              <h3>Пакет Старт</h3>
              <p className="card-subtitle">уникальным дизайном</p>
              <ul>
              <li>бла бла бла</li>
              </ul>
              <p className="price">от: Цифру сам выберешь</p>
            </div>
            <div className="pricing-card ultra">
              <h3>Пакет Ультра</h3>
              <p className="card-subtitle">Премиум-лендинг</p>
              <ul>
                <li>бла бла бла</li>
              </ul>
              <p className="price">от: Цифру сам выберешь</p>
            </div>
          </div>
          <h2>Онлайн магазин</h2>
          <p className="service-description">
            Онлайн магазин — это сайт, позволяющий продавать товары или услуги через интернет. Идеально подходит для бизнеса, желающего расширить свою аудиторию и увеличить продажи.
          </p>
          <div className="pricing-cards">
            <div className="pricing-card light">
              <h3>Пакет Лайт</h3>
              <p className="card-subtitle">С базовым дизайном</p>
              <ul>
              <li>бла бла бла</li>
              </ul>
              <p className="price">от: Цифру сам выберешь</p>
            </div>
            <div className="pricing-card start">
              <h3>Пакет Старт</h3>
              <p className="card-subtitle">С уникальным дизайном</p>
              <ul>
              <li>бла бла бла</li>
              </ul>
              <p className="price">от: Цифру сам выберешь</p>
            </div>
            <div className="pricing-card ultra">
              <h3>Пакет Ультра</h3>
              <p className="card-subtitle">Премиум-магазин или что то другое</p>
              <ul>
                <li>бла бла бла</li>
              </ul>
              <p className="price">от: Цифру сам выберешь</p>
            </div>
          </div>
          <h2>Мобильное приложение</h2>
          <p className="service-description">
          Мобильное приложение — это программа, разработанная для работы на мобильных устройствах. Идеально подходит для бизнеса, желающего предложить своим клиентам удобный доступ к своим услугам и продуктам.
          </p>
          <div className="pricing-cards">
            <div className="pricing-card light">
              <h3>Пакет Лайт</h3>
              <p className="card-subtitle">С базовым дизайном</p>
              <ul>
              <li>бла бла бла</li>
              </ul>
              <p className="price">от: Цифру сам выберешь</p>
            </div>
            <div className="pricing-card start">
              <h3>Пакет Старт</h3>
              <p className="card-subtitle">С уникальным дизайном</p>
              <ul>
              <li>бла бла бла</li>
              </ul>
              <p className="price">от: Цифру сам выберешь</p>
            </div>
            <div className="pricing-card ultra">
              <h3>Пакет Ультра</h3>
              <p className="card-subtitle">Премиум-магазин или что то другое</p>
              <ul>
                <li>бла бла бла</li>
              </ul>
              <p className="price">от: Цифру сам выберешь</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ServicesPage;