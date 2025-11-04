import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
            <Link 
              to="/" 
              className={`header__nav-link ${isActive('/')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              to="/sobre-mi" 
              className={`header__nav-link ${isActive('/sobre-mi')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre mí
            </Link>
            <Link 
              to="/proyectos" 
              className={`header__nav-link ${isActive('/proyectos')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Proyectos
            </Link>
            <Link 
              to="/contacto" 
              className={`header__nav-link ${isActive('/contacto')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </nav>

          <button 
            className={`header__menu-toggle ${isMenuOpen ? 'header__menu-toggle--open' : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;