import React, { useState } from 'react';
import { SiTelegram } from 'react-icons/si';
import { FaWhatsapp } from 'react-icons/fa';
import './Contacts.css';

function Contacts() {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleContactClick = () => {
    setShowOptions(true);
  };

  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить логику отправки формы
    setSubmitted(true);
  };

  return (
    <section id="contacts" className="contacts">
      <h2>Связаться с нами</h2>
      {!showOptions && !selectedMethod && (
        <button className="contact-btn" onClick={handleContactClick}>
          Связаться с нами
        </button>
      )}
      {showOptions && !selectedMethod && (
        <div className="contact-options">
          <p>Выберите удобный способ связи:</p>
          <div className="options-buttons">
            <button onClick={() => handleMethodSelect('telegram')}> <SiTelegram size={28} color="#0088cc" /> </button>
            <button onClick={() => handleMethodSelect('whatsapp')}><FaWhatsapp size={28} color="#25D366" /></button>
          </div>
        </div>
      )}
      {selectedMethod && !submitted && (
        <form onSubmit={handleSubmit} className="contact-form">
          <p>Вы выбрали: {selectedMethod === 'telegram' ? 'Телеграм' : 'WhatsApp'}</p>
          <label>
            Имя:
            <input 
              type="text" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </label>
          <label>
            Сообщение:
            <textarea 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              required 
            />
          </label>
          <button type="submit">Отправить</button>
        </form>
      )}
      {submitted && (
        <div className="thank-you">
          <p>Спасибо за обращение! Мы свяжемся с вами через {selectedMethod === 'telegram' ? 'Телеграм' : 'WhatsApp'}.</p>
        </div>
      )}
    </section>
  );
}

export default Contacts;
