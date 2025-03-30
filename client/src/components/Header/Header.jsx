import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { FaBars, FaTimes, FaEnvelope } from 'react-icons/fa';
import { SiTelegram, SiWhatsapp } from 'react-icons/si';
import './Header.css';

function Header() {
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleBurger = () => setBurgerOpen(!isBurgerOpen);
  const closeBurger = () => setBurgerOpen(false);
  const toggleModal = () => setModalOpen(!isModalOpen);
  const closeModal = () => setModalOpen(false); // Новая функция для закрытия модалки

  return (
    <header className="header">
      <div className="header__left">
        <div className="burger-menu" onClick={toggleBurger}>
          <FaBars size={32} />
        </div>
        {isBurgerOpen && (
          <div className="burger-card">
            <button className="burger-close-btn" onClick={closeBurger}>
              <FaTimes size={16} />
            </button>
            <a href="/" onClick={closeBurger}>
              Главная
            </a>
            <a href="/about" onClick={closeBurger}>
              О нас
            </a>
            <a href="/services" onClick={closeBurger}>
              Услуги
            </a>
            <a href="#contacts" onClick={closeBurger}>
              Контакты
            </a>
          </div>
        )}
      </div>
      <div className="header__center">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="iAM Logo" />
          </a>
        </div>
      </div>
      <div className="header__right">
        <div className="contact-circle" onClick={toggleModal}></div>
        {isModalOpen && (
          <div className="contact-modal-overlay" onClick={toggleModal}>
            <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={closeModal}>
                ✕
              </button>
              <h3>Свяжитесь с нами</h3>
              <a
                href="https://t.me/your_telegram_handle"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeModal} // Закрываем модалку при клике
              >
                <SiTelegram size={20} />
                <span>Telegram</span>
              </a>
              <a
                href="https://wa.me/your_whatsapp_number"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeModal} // Закрываем модалку при клике
              >
                <SiWhatsapp size={20} />
                <span>WhatsApp</span>
              </a>
              <a href="#contacts" onClick={closeModal}>
                <FaEnvelope size={20} />
                <span>Форма заявки</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
