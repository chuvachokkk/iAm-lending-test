import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FaBars, FaEnvelope, FaTimes } from 'react-icons/fa';
import { SiTelegram, SiWhatsapp } from 'react-icons/si';
import './Header.css';

function Header() {
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  const [isContactOpen, setContactOpen] = useState(false);

  const toggleBurger = () => {
    setBurgerOpen(!isBurgerOpen);
  };

  const toggleContact = () => {
    setContactOpen(!isContactOpen);
  };

  return (
    <header className="header">
      {/* Левый угол: бургер-меню */}
      <div className="header__left">
        <div className="burger-menu" onClick={toggleBurger}>
          {/* Иконка бургер-меню всегда отображается как FaBars */}
          <FaBars size={24} />
        </div>
        {isBurgerOpen && (
          <div className="burger-card">
            <a href="#about" onClick={() => setBurgerOpen(false)}>О нас</a>
            <a href="#services" onClick={() => setBurgerOpen(false)}>Услуги</a>
            <a href="#contacts" onClick={() => setBurgerOpen(false)}>Контакты</a>
          </div>
        )}
      </div>

      {/* Центр: логотип */}
      <div className="header__center">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </div>

      {/* Правый угол: мигающий кружок для связи */}
      <div className="header__right">
        <div className="contact-circle" onClick={toggleContact}>
          {/* Кружок задаётся через CSS */}
        </div>
        {isContactOpen && (
          <div className="contact-card">
            <button className="close-contact-card" onClick={() => setContactOpen(false)}>
              <FaTimes size={16} />
            </button>
            <a href="https://t.me/your_telegram_handle" target="_blank" rel="noopener noreferrer">
              <SiTelegram size={20} />
              <span>Telegram</span>
            </a>
            <a href="https://wa.me/your_whatsapp_number" target="_blank" rel="noopener noreferrer">
              <SiWhatsapp size={20} />
              <span>WhatsApp</span>
            </a>
            <a href="#contacts">
              <FaEnvelope size={20} />
              <span>Форма заявки</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
