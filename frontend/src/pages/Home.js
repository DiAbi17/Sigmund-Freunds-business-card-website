import React from 'react';
import '../styles/Home.css';
import heroImage from '../media/fred.jpg'; // Замените на своё изображение

export default function Home() {
  return (
    <main className="home-container">
      <div className="text-section">
        <h1>Что говорит о тебе твой выбор кофе, сериалов и бывших?</h1>
        <p className="slogan">
          Ты можешь не понимать, почему выбираешь именно такую жизнь —
          но твоё бессознательное знает. Давай разберёмся вместе.
        </p>

        <section className="section-block">
          <h2>Почему психоанализ «Фрейд»?</h2>
          <ul>
            <li>😶 Чувствуешь, что «всё вроде хорошо», но что-то внутри не так?</li>
            <li>💔 Повторяющиеся сценарии в отношениях, избегание близости?</li>
            <li>⚠️ Навязчивые мысли и тревожность, с которыми не справляешься?</li>
            <li>🔍 Хочешь не просто облегчения, а глубинных перемен?</li>
          </ul>
        </section>

        <section className="section-block">
          <h2>Кому подходит?</h2>
          <ul>
            <li>🧠 Интеллектуалы, философы, творческие личности</li>
            <li>🎯 Миллениалы и зумеры, интересующиеся глубинной психологией</li>
            <li>🚫 Люди, уставшие от «позитивного мышления»</li>
            <li>🧩 Те, кто уже был в терапии, но не нашёл ответы</li>
          </ul>
        </section>

        <section className="section-block">
          <h2>Методы работы</h2>
          <ul>
            <li>📌 Индивидуальная психоаналитическая терапия</li>
            <li>📌 Разбор паттернов и сценариев</li>
            <li>📌 Интерпретация снов</li>
            <li>📌 Работа с бессознательным</li>
          </ul>
        </section>
      </div>

      <div className="image-section">
        <img src={heroImage} alt="Психолог" />
      </div>
    </main>
  );
}
