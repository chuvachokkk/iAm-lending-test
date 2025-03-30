import React from 'react';
import { SiTelegram, SiInstagram } from 'react-icons/si';
import { FaVk } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 iAM. Все права защищены.</p>
      <div className="socials">
        <a href="https://t.me/yourchannel" target="_blank" rel="noopener noreferrer">
          <SiTelegram size={28} color="#0088cc" />
        </a>
        <a href="https://vk.com/yourpage" target="_blank" rel="noopener noreferrer">
          <FaVk size={28} color="#4a76a8" />
        </a>
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <SiInstagram size={28} color="#E1306C" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;