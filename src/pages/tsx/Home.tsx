import CalculoSeguro from './CalculoSeguro';
import '../css/Home.css';

export default function Home() {
  return (
    <main className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Novo: planos a partir de R$ 89,90/mês
          </div>

          <h1 className="hero__title">
            Seu carro protegido, <span className="hero__title-navy">você tranquilo.</span>{' '}
            <span className="hero__title-cyan">Simples assim.</span>
          </h1>

          <p className="hero__subtitle">
            SaveDrive oferece planos de seguro automotivo personalizados, com cobertura completa
            e contratação 100% digital. Proteja seu veículo agora mesmo.
          </p>

          <div className="hero__actions">
            <a href="#planos" className="btn btn--primary">
              Simule seu seguro agora
            </a>
            <a href="#planos" className="btn btn--primary">
              Ver planos
            </a>
          </div>

          <div className="hero__badges">
            <span className="pill">
              <span className="pill__icon">🛡️</span>
              Cobertura completa
            </span>
            <span className="pill">
              <span className="pill__icon">⏱️</span>
              Acionamento em 24h
            </span>
            <span className="pill">
              <span className="pill__icon">✅</span>
              100% digital
            </span>
          </div>
        </div>

        <div className="hero__card">
          <CalculoSeguro />
          </div>
      </section>

      {/* FEATURES / CATEGORIAS */}
      <section className="features" id="categorias">
        <div className="section-header">
          <h2 className="section-header__title">Por que escolher a SaveDrive?</h2>
          <p className="section-header__subtitle">
            Oferecemos mais do que um seguro — oferecemos tranquilidade total na sua jornada.
          </p>
        </div>

        <div className="features__grid">
          <article className="feature-card">
            <div className="feature-card__icon">🛟</div>
            <h3 className="feature-card__title">Suporte 24h</h3>
            <p className="feature-card__text">
              Nossa equipe está disponível a qualquer hora do dia ou da noite para te ajudar
              quando mais precisar.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-card__icon">🔧</div>
            <h3 className="feature-card__title">Manutenção Preventiva</h3>
            <p className="feature-card__text">
              Inclua revisões periódicas no seu plano e mantenha seu veículo sempre em perfeito estado.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-card__icon">📋</div>
            <h3 className="feature-card__title">Planos Personalizados</h3>
            <p className="feature-card__text">
              Monte seu seguro de acordo com o seu perfil de motorista, tipo de veículo e orçamento.
            </p>
          </article>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="stats__grid">
          <div className="stat">
            <span className="stat__value">+50 mil</span>
            <span className="stat__label">Clientes protegidos</span>
          </div>
          <div className="stat">
            <span className="stat__value">4.9/5</span>
            <span className="stat__label">Reclame Aqui</span>
          </div>
          <div className="stat">
            <span className="stat__value">Suporte 24h</span>
            <span className="stat__label">Todos os dias do ano</span>
          </div>
          <div className="stat">
            <span className="stat__value">100%</span>
            <span className="stat__label">Digital e sem burocracia</span>
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section className="plans" id="planos">
        <div className="section-header">
          <h2 className="section-header__title">Planos para todos os perfis</h2>
          <p className="section-header__subtitle">
            Escolha o plano ideal para você. Sem letras miúdas, sem surpresas.
          </p>
        </div>

        <div className="plans__grid">
          <article className="plan-card">
            <header className="plan-card__header">
              <h3 className="plan-card__name">Básico</h3>
            </header>
            <div className="plan-card__price">
              <span className="plan-card__price-value">R$ 89,90</span>
              <span className="plan-card__price-period">/mês</span>
            </div>
            <ul className="plan-card__features">
              <li>Cobertura contra roubo e furto</li>
              <li>Assistência 24h básica</li>
              <li>Danos a terceiros</li>
              <li>Cobertura nacional</li>
            </ul>
            <a href="#" className="plan-card__cta plan-card__cta--outline">
              Contratar Básico
            </a>
          </article>

          <article className="plan-card plan-card--highlight">
            <header className="plan-card__header">
              <h3 className="plan-card__name">Intermediário</h3>
              <span className="plan-card__badge">Mais popular</span>
            </header>
            <div className="plan-card__price">
              <span className="plan-card__price-value">R$ 129,90</span>
              <span className="plan-card__price-period">/mês</span>
            </div>
            <ul className="plan-card__features">
              <li>Tudo do plano Básico</li>
              <li>Cobertura contra colisão</li>
              <li>Carro reserva por 7 dias</li>
              <li>Suporte prioritário</li>
            </ul>
            <a href="#" className="plan-card__cta plan-card__cta--primary">
              Contratar Intermediário
            </a>
          </article>

          <article className="plan-card">
            <header className="plan-card__header">
              <h3 className="plan-card__name">Premium</h3>
            </header>
            <div className="plan-card__price">
              <span className="plan-card__price-value">R$ 199,90</span>
              <span className="plan-card__price-period">/mês</span>
            </div>
            <ul className="plan-card__features">
              <li>Tudo do plano Intermediário</li>
              <li>Carro reserva ilimitado</li>
              <li>Cobertura internacional</li>
              <li>Manutenção preventiva inclusa</li>
            </ul>
            <a href="#" className="plan-card__cta plan-card__cta--outline">
              Contratar Premium
            </a>
          </article>
        </div>
      </section>
    </main>
  );
}