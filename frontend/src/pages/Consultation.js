import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Consultation.css';
import profilePhoto from '../media/fred_2.jpg';

export default function Consultation() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/consult/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setStatus(data.status);

      if (data.status === 'success') {
        // Очистка формы
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <motion.main
      className="consultation-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <img
        src={profilePhoto}
        alt="Консультант"
        className="consultation-image"
      />
      <h1>Онлайн консультация</h1>
       <p className="consultation-description">
          Заполните форму ниже — и я свяжусь с вами в течение 24 часов, чтобы согласовать удобное время консультации.
        </p>
      <form className="consultation-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ваше имя"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <textarea
          placeholder="Ваше сообщение"
          rows="5"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
        />
        <button type="submit">Отправить</button>
      </form>
      {status && (
        <p className={`status-message ${status === 'success' ? 'success' : 'error'}`}>
          {status === 'success' ? 'Сообщение отправлено! Ждите, я с вами свяжусь!' : 'Ошибка отправки.'}
        </p>
      )}
    </motion.main>
  );
}
