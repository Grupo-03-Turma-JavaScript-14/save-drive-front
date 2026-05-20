// src/components/navbar/Navbar.tsx
import { useState } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Categorias', href: '#categorias' },
  { label: 'Produtos', href: '#planos' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        {/* Logo */}
        <a href="#" className="navbar__brand">
          <svg
            className="navbar__logo-icon"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 2L4 7V17C4 23.627 9.373 29.627 16 31C22.627 29.627 28 23.627 28 17V7L16 2Z"
              fill="#06B6D4"
              fillOpacity="0.2"
              stroke="#06B6D4"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M11 16.5L14.5 20L21 13"
              stroke="#06B6D4"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span className="navbar__logo-text">
            Save<span className="navbar__logo-text--accent">Drive</span>
          </span>
        </a>

        {/* Links desktop */}
        <nav className="navbar__links">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="navbar__link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <a href="#planos" className="navbar__cta">
          Contratar agora
        </a>

        {/* Botão hamburguer (mobile) */}
        <button
          type="button"
          className="navbar__toggle"
          onClick={toggleMenu}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <span className={`navbar__toggle-bar ${menuOpen ? 'navbar__toggle-bar--top-open' : ''}`} />
          <span className={`navbar__toggle-bar ${menuOpen ? 'navbar__toggle-bar--middle-open' : ''}`} />
          <span className={`navbar__toggle-bar ${menuOpen ? 'navbar__toggle-bar--bottom-open' : ''}`} />
        </button>
      </div>

      {/* Menu mobile */}
      <nav className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="navbar__mobile-link"
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#planos"
          className="navbar__mobile-cta"
          onClick={closeMenu}
        >
          Contratar agora
        </a>
      </nav>
    </header>
  );
}