import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

// ─── Hero ──────────────────────────────────────────────────────────────────────

const heroBadges = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    text: 'Cobertura completa',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    text: 'Acionamento em 24h',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    text: '100% digital',
  },
];

function HeroSection() {
  return (
    <section className="min-h-screen bg-[#F1F5F9] pt-16 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left col */}
          <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
            {/* Badge animado */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center justify-center lg:justify-start"
            >
              <span className="inline-flex items-center gap-2 bg-[#06B6D4]/10 text-[#06B6D4] text-sm font-semibold px-4 py-1.5 rounded-full border border-[#06B6D4]/30">
                <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse" />
                Novo: planos a partir de R$ 89,90/mês
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-4xl sm:text-5xl font-bold leading-tight text-[#0F172A]"
            >
              Seu carro protegido,{' '}
              <span className="text-[#1E3A8A]">você tranquilo.</span>{' '}
              <span className="text-[#06B6D4]">Simples assim.</span>
            </motion.h1>

            {/* Parágrafo */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="text-[#0F172A]/70 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              SaveDrive oferece planos de seguro automotivo personalizados, com cobertura completa e contratação 100% digital. Proteja seu veículo agora mesmo.
            </motion.p>

            {/* Botões */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <a
                href="#planos"
                className="bg-[#1E3A8A] hover:bg-[#1e40af] text-white font-semibold px-7 py-3.5 rounded-xl transition-colors duration-200 text-base"
              >
                Simule seu seguro agora
              </a>
              <a
                href="#planos"
                className="border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white font-semibold px-7 py-3.5 rounded-xl transition-colors duration-200 text-base"
              >
                Ver planos
              </a>
            </motion.div>

            {/* Mini-badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              {heroBadges.map((b) => (
                <span
                  key={b.text}
                  className="inline-flex items-center gap-2 bg-white text-[#0F172A] text-sm font-medium px-4 py-2 rounded-xl shadow-sm border border-[#1E3A8A]/10"
                >
                  {b.icon}
                  {b.text}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right col — slot card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex-1 w-full max-w-md mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-[0_8px_40px_0_rgba(30,58,138,0.12)] p-8 min-h-[360px] flex flex-col items-center justify-center gap-4 border border-[#1E3A8A]/10">
              {/* SLOT: componente de desconto */}
              <div className="w-full flex flex-col items-center gap-3 text-[#0F172A]/30">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <path d="M9 9h.01M15 15h.01M15 9l-6 6" />
                </svg>
                <p className="text-sm font-medium text-center">Componente de cálculo de desconto</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Features ──────────────────────────────────────────────────────────────────

const features = [
  {
    emoji: '🛟',
    title: 'Suporte 24h',
    description: 'Nossa equipe está disponível a qualquer hora do dia ou da noite para te ajudar quando mais precisar.',
  },
  {
    emoji: '🔧',
    title: 'Manutenção Preventiva',
    description: 'Inclua revisões periódicas no seu plano e mantenha seu veículo sempre em perfeito estado.',
  },
  {
    emoji: '📋',
    title: 'Planos Personalizados',
    description: 'Monte seu seguro de acordo com o seu perfil de motorista, tipo de veículo e orçamento disponível.',
  },
];

function FeaturesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="categorias" ref={ref} className="bg-[#F1F5F9] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#1E3A8A] mb-3">Por que escolher a SaveDrive?</h2>
          <p className="text-[#0F172A]/60 text-base max-w-xl mx-auto">
            Oferecemos mais do que um seguro — oferecemos tranquilidade total na sua jornada.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
              className="bg-white rounded-2xl p-7 border border-transparent hover:border-[#06B6D4] hover:shadow-[0_4px_24px_0_rgba(30,58,138,0.10)] transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 bg-[#F1F5F9] rounded-xl flex items-center justify-center text-2xl mb-5">
                {f.emoji}
              </div>
              <h3 className="text-lg font-semibold text-[#0F172A] mb-2">{f.title}</h3>
              <p className="text-[#0F172A]/60 text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Plans ─────────────────────────────────────────────────────────────────────

const plans = [
  {
    name: 'Básico',
    price: 'R$ 89,90',
    highlight: false,
    features: [
      'Cobertura contra roubo e furto',
      'Assistência 24h básica',
      'Danos a terceiros',
      'Cobertura nacional',
    ],
  },
  {
    name: 'Intermediário',
    price: 'R$ 129,90',
    highlight: true,
    features: [
      'Tudo do plano Básico',
      'Cobertura contra colisão',
      'Carro reserva por 7 dias',
      'Suporte prioritário',
    ],
  },
  {
    name: 'Premium',
    price: 'R$ 199,90',
    highlight: false,
    features: [
      'Tudo do plano Intermediário',
      'Carro reserva ilimitado',
      'Cobertura internacional',
      'Manutenção preventiva inclusa',
    ],
  },
];

function PlansSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="planos" ref={ref} className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#1E3A8A] mb-3">Planos para todos os perfis</h2>
          <p className="text-[#0F172A]/60 text-base max-w-xl mx-auto">
            Escolha o plano ideal para você. Sem letras miúdas, sem surpresas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
              className={[
                'rounded-2xl p-8 flex flex-col gap-6 border transition-all duration-300',
                plan.highlight
                  ? 'bg-[#1E3A8A] text-white border-[#1E3A8A] md:scale-[1.03] shadow-[0_8px_40px_0_rgba(30,58,138,0.25)]'
                  : 'bg-white text-[#0F172A] border-[#1E3A8A]/20 hover:border-[#06B6D4] hover:shadow-[0_4px_24px_0_rgba(30,58,138,0.10)]',
              ].join(' ')}
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <h3 className={`text-lg font-semibold ${plan.highlight ? 'text-white' : 'text-[#0F172A]'}`}>
                  {plan.name}
                </h3>
                {plan.highlight && (
                  <span className="bg-[#06B6D4] text-white text-xs font-bold px-3 py-1 rounded-full">
                    Mais popular
                  </span>
                )}
              </div>

              {/* Price */}
              <div>
                <span className={`text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-[#1E3A8A]'}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ml-1 ${plan.highlight ? 'text-white/70' : 'text-[#0F172A]/50'}`}>/mês</span>
              </div>

              {/* Features list */}
              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-sm">
                    <svg
                      className={`mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-[#06B6D4]' : 'text-[#06B6D4]'}`}
                      width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className={plan.highlight ? 'text-white/85' : 'text-[#0F172A]/70'}>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#"
                className={[
                  'w-full text-center font-semibold py-4 text-base rounded-xl transition-colors duration-200',
                  plan.highlight
                    ? 'bg-[#06B6D4] hover:bg-[#0891b2] text-white'
                    : 'border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white',
                ].join(' ')}
              >
                Contratar {plan.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Stats ─────────────────────────────────────────────────────────────────────

const stats = [
  { value: '+50 mil', label: 'Clientes protegidos' },
  { value: '4.9/5', label: 'Reclame Aqui' },
  { value: 'Suporte 24h', label: 'Todos os dias do ano' },
  { value: '100%', label: 'Digital e sem burocracia' },
];

function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-white border-t border-[#1E3A8A]/10 py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.1 }}
              className="flex flex-col items-center text-center gap-1"
            >
              <span className="text-3xl sm:text-4xl font-bold text-[#1E3A8A]">{s.value}</span>
              <span className="text-sm text-[#0F172A]/55 font-medium">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <PlansSection />
    </>
  );
}