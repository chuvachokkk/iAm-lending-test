import React from 'react';
// import './Header.css';
import logo from '../assets/logo.png';
import { SiTelegram, SiWhatsapp } from 'react-icons/si';

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </div>
      
      {/* Навигация по центру */}
      <nav className="header__center">
        <a href="#hero">Главная</a>
        <a href="#about">О нас</a>
        <a href="#services">Услуги</a>
        <a href="#contacts">Контакты</a>
      </nav>
      
      {/* Иконки в правом углу */}
      <div className="header__right">
        <a href="https://t.me/your_telegram_handle" target="_blank" rel="noopener noreferrer">
          <SiTelegram size={24} />
        </a>
        <a href="https://wa.me/your_whatsapp_number" target="_blank" rel="noopener noreferrer">
          <SiWhatsapp size={24} />
        </a>
      </div>
    </header>
  );
}

export default Header;
