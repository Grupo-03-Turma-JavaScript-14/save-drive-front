// src/components/footer/Footer.tsx
import './Footer.css';

const quickLinks = ['Home', 'Categorias', 'Produtos', 'Sobre nós', 'Contato'];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        {/* Coluna 1 - Logo + texto + redes */}
        <div className="footer__col">
          <div className="footer__brand">
            <svg
              className="footer__logo-icon"
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
            <span className="footer__logo-text">
              Save<span className="footer__logo-text--accent">Drive</span>
            </span>
          </div>

          <p className="footer__tagline">
            Protegendo quem move o Brasil. Seguros automotivos inteligentes, rápidos e 100% digitais.
          </p>

          <div className="footer__social">
            <a href="#" aria-label="Instagram" className="footer__social-link">
              {/* Instagram */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>

            <a href="#" aria-label="LinkedIn" className="footer__social-link">
              {/* LinkedIn */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            <a href="#" aria-label="Facebook" className="footer__social-link">
              {/* Facebook */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Coluna 2 - Links rápidos */}
        <div className="footer__col">
          <h3 className="footer__heading">Links rápidos</h3>
          <ul className="footer__list">
            {quickLinks.map((link) => (
              <li key={link}>
                <a href="#" className="footer__link">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna 3 - Contato */}
        <div className="footer__col">
          <h3 className="footer__heading">Contato</h3>
          <ul className="footer__contact-list">
            <li className="footer__contact-item">
              <span className="footer__contact-icon">
                {/* email */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              <span>contato@savedrive.com.br</span>
            </li>

            <li className="footer__contact-item">
              <span className="footer__contact-icon">
                {/* phone */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-.79a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <span>(11) 3000-0000</span>
            </li>

            <li className="footer__contact-item">
              <span className="footer__contact-icon">
                {/* location */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <span>Av. Paulista, 1000 — São Paulo, SP</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p className="footer__bottom-text">© 2026 SaveDrive. Todos os direitos reservados.</p>
          <p className="footer__bottom-text">CNPJ 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  );
}