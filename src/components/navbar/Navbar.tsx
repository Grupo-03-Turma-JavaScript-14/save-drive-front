// src/components/navbar/Navbar.tsx
import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/Savedrive-logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Sobre Nós", href: "/sobre" },
  { label: "Usuarios", href: "/usuarios" },
  { label: "Categorias", href: "/categorias" },
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
          <img src={logo} alt="SaveDrive" className="navbar__logo-img" />

        </a>

        {/* Links desktop + CTA juntos */}
        <nav className="navbar__links">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}

          <a href="#planos" className="navbar__cta">
            Contratar agora
          </a>
        </nav>

        {/* Botão hamburguer (mobile) */}
        <button
          type="button"
          className="navbar__toggle"
          onClick={toggleMenu}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`navbar__toggle-bar ${menuOpen ? "navbar__toggle-bar--top-open" : ""}`}
          />
          <span
            className={`navbar__toggle-bar ${menuOpen ? "navbar__toggle-bar--middle-open" : ""}`}
          />
          <span
            className={`navbar__toggle-bar ${menuOpen ? "navbar__toggle-bar--bottom-open" : ""}`}
          />
        </button>
      </div>

      {/* Menu mobile */}
      <nav
        className={`navbar__mobile ${menuOpen ? "navbar__mobile--open" : ""}`}
      >
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
        <a href="#planos" className="navbar__mobile-cta" onClick={closeMenu}>
          Contratar agora
        </a>
      </nav>
    </header>
  );
}
