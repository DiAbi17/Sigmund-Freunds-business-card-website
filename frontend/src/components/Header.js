import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../media/logo.png'; // путь к логотипу

export default function Header() {
  return (
    <header>
      <nav className="nav-container">
        <ul className="nav-menu">
          <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Главная</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>О себе</NavLink></li>
          <li><NavLink to="/consultation" className={({ isActive }) => isActive ? 'active' : ''}>Онлайн консультация</NavLink></li>
          <li><NavLink to="/contacts" className={({ isActive }) => isActive ? 'active' : ''}>Контакты</NavLink></li>
        </ul>
        <div className="nav-logo">
          <NavLink to="/">
          <img src={logo} alt="Логотип" />
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
