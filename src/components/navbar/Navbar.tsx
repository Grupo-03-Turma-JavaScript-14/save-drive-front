// src/components/navbar/Navbar.tsx
import { useState } from "react"
import { NavLink } from "react-router-dom"
import "./Navbar.css"
import logo from "../../assets/Savedrive-logo.png"

const navLinks = [
  { label: "Home", to: "/home" },
  { label: "Sobre Nós", to: "/aboutus" },
]

const productLinks = [
  { label: "Usuários", to: "/produto/usuario" },
  { label: "Categorias", to: "/produto/categoria" },
  { label: "Contratos", to: "/produto/contratos" },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((prev) => !prev)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <NavLink to="/home" className="navbar__brand" onClick={closeMenu}>
          <img src={logo} alt="SaveDrive" className="navbar__logo-img" />
        </NavLink>

        <nav className="navbar__links">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="navbar__link"
            >
              {link.label}
            </NavLink>
          ))}

          <div className="navbar__dropdown">
            <button type="button" className="navbar__dropdown-button">
              Produto
              <span className="navbar__dropdown-arrow">▾</span>
            </button>

            <div className="navbar__dropdown-menu">
              {productLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  className="navbar__dropdown-link"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          <NavLink to="/produto/contratos" className="navbar__cta">
            Contratar agora
          </NavLink>
        </nav>

        <button
          type="button"
          className="navbar__toggle"
          onClick={toggleMenu}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`navbar__toggle-bar ${
              menuOpen ? "navbar__toggle-bar--top-open" : ""
            }`}
          />
          <span
            className={`navbar__toggle-bar ${
              menuOpen ? "navbar__toggle-bar--middle-open" : ""
            }`}
          />
          <span
            className={`navbar__toggle-bar ${
              menuOpen ? "navbar__toggle-bar--bottom-open" : ""
            }`}
          />
        </button>
      </div>

      <nav className={`navbar__mobile ${menuOpen ? "navbar__mobile--open" : ""}`}>
        {navLinks.map((link) => (
          <NavLink
            key={link.label}
            to={link.to}
            className="navbar__mobile-link"
            onClick={closeMenu}
          >
            {link.label}
          </NavLink>
        ))}

        <div className="navbar__mobile-group">
          <span className="navbar__mobile-title">Produto</span>

          {productLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="navbar__mobile-sub-link"
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <NavLink
          to="/produto/contratos"
          className="navbar__mobile-cta"
          onClick={closeMenu}
        >
          Contratar agora
        </NavLink>
      </nav>
    </header>
  )
}