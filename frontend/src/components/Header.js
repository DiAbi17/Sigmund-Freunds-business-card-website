import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../media/logo.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <nav className="nav-container">
        <div className={`burger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Главная</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>О себе</NavLink></li>
          <li><NavLink to="/consultation" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Онлайн консультация</NavLink></li>
          <li><NavLink to="/contacts" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Контакты</NavLink></li>
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
