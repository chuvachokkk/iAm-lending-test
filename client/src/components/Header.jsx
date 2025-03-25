import React from 'react';
import './Header.css'; // стили для шапки
import logo from '../assets/logo.png'

function Header() {
  return (
    <header className="header">
      {/* Логотип */}
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="nav">
        <a href="#hero">Главная</a>
        <a href="#about">О нас</a>
        <a href="#services">Услуги</a>
        <a href="#contacts">Контакты</a>
      </nav>
    </header>
  );
}

export default Header;
