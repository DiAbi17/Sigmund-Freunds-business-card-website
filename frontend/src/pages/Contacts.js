import React from 'react';
import '../styles/Contacts.css';
import profilePhoto from '../media/freud.jpg';

export default function Contacts() {
  return (
    <main className="contacts-container">
      <h1>Контакты</h1>
      <section className="contact-info">
        <img
          src={profilePhoto}
          alt="Зигмунд Фрейд"
          className="freud-photo"
        />
        <div className="freud-details">
          <h2>Зигмунд Фрейд</h2>
          <p>
            Зигмунд Фрейд — австрийский невролог и основатель психоанализа, оказавший огромное влияние
            на развитие психологии, психотерапии и культуры XX века.
          </p>
          <p><strong>Email:</strong> freud@psychoanalysis.org</p>
          <p><strong>Телефон:</strong> +43 1 319 15 96</p>
          <p><strong>Адрес:</strong> Berggasse 19, 1090 Wien, Австрия</p>
        </div>
      </section>

      <section className="map-section">
        <h3>Кабинет Зигмунда Фрейда — Berggasse 19, Вена</h3>
        <iframe
            src="https://yandex.ru/map-widget/v1/?ll=16.363029%2C48.218645&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoyODU5MTMxMDIxEiDDlnN0ZXJyZWljaCwgV2llbiwgQmVyZ2dhc3NlLCAxOSIKDX7ngkEV5N9AQg%2C%2C&z=17.6"
            width="100%"
            height="400"
            frameBorder="1"
            allowFullScreen
            style={{ position: 'relative' }}
            title="Карта — Berggasse 19, Vienna"
        ></iframe>  
      </section>


    </main>
  );
}
