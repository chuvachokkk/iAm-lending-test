import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ivan from '../../assets/ivan.jpg';
import mark1 from '../../assets/mark1.jpg';
import designer from '../../assets/disiner.jpg';
import './AboutPage.css';


function AboutPage() {
  return (
    <div className="about-page">
      <Header />
      <main className="about-content">
        {/* Описание компании */}
        <section className="company-description">
          <h1>О нас</h1>
          <p>
            Мы — команда iAM, специализируемся на создании цифровых продуктов, которые помогают бизнесу расти. Мы разрабатываем сайты, приложения и маркетинговые решения, превращая идеи клиентов в эффективные инструменты. Наша цель — ваш успех.
          </p>
        </section>

        {/* Секция команды */}
        <section className="team">
          <h2>Наша команда</h2>
          <div className="team-member">
            <div className="member-photo">
              <img src={mark1} alt="mark1" />
            </div>
            <div className="member-info">
              <h3>Марк тут будешь ты</h3>
              <p>Роль: Основатель</p>
              <p>
                Я занимаюсь стратегическим управлением и развитием компании. Мой опыт включает создание успешных проектов и управление командами разработчиков.
              </p>
            </div>
          </div>

          <div className="team-member reverse">
            <div className="member-photo">
              <img src={ivan} alt="ivan" />
            </div>
            <div className="member-info">
              <h3>Ваня будет тут</h3>
              <p>Роль: FullStack-разработчи</p>
              <p>
                Я занимаюсь разработкой веб-приложений, обеспечивая высокое качество кода и производительность. Мой опыт включает работу с различными технологиями и фреймворками.
              </p>
            </div>
          </div>
          <div className="team-member">
            <div className="member-photo">
              <img src={designer} alt="desiner" />
            </div>
            <div className="member-info">
              <h3>тут ещё кто то будет</h3>
              <p>Роль: Дизайнер например </p>
              <p>
                Я занимаюсь UI/UX-дизайном, создаю уникальные интерфейсы и брендинг, которые выделяют ваш бизнес среди конкурентов.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;