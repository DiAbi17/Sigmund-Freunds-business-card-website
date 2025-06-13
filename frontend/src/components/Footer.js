import React from 'react';
import { FiMail, FiPhone } from 'react-icons/fi'; // Иконки почты и телефона

export default function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Психолог Онлайн. Все права защищены.</p>
      <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        <span>
          <FiMail style={{ marginRight: '0.5rem' }} />
          freud@psychoanalysis.org
        </span>
        <span>
          <FiPhone style={{ marginRight: '0.5rem' }} />
          +43 1 319 15 96
        </span>
      </p>
      <p>Адрес: Berggasse 19, 1090 Wien, Австрия</p>
    </footer>
  );
}
