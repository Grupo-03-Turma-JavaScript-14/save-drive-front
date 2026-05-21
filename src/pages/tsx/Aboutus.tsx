import { Link } from 'react-router-dom'
import { Shield, Heart, Handshake, Rocket } from 'lucide-react'

import familiaCarroImg from '../../assets/aboutus/familia_carro.png'
import victorImg from '../../assets/aboutus/victor.jpg'
import biancaImg from '../../assets/aboutus/bianca.jpg'
import jhonatanImg from '../../assets/aboutus/Jhonatan_4.jpg'
import kauaImg from '../../assets/aboutus/kaua.jpg'
import kfImg from '../../assets/aboutus/kf.jpg'
import leticiaImg from '../../assets/aboutus/leticia.png'
import taisImg from '../../assets/aboutus/tais.png'

const valores = [
  {
    titulo: 'Segurança em primeiro lugar',
    texto: 'Colocamos a segurança de nossos clientes e suas famílias acima de qualquer coisa.',
    Icone: Shield,
  },
  {
    titulo: 'Prevenção que transforma',
    texto: 'Incentivamos hábitos melhores para reduzir riscos e proteger vidas.',
    Icone: Heart,
  },
  {
    titulo: 'Transparência e confiança',
    texto: 'Relações claras, honestas e duradouras com nossos clientes.',
    Icone: Handshake,
  },
  {
    titulo: 'Inovação constante',
    texto: 'Usamos tecnologia para criar soluções inteligentes e acessíveis.',
    Icone: Rocket,
  },
]

const equipe = [
  { nome: 'Victor Silva', cargo: 'Desenvolvedor', foto: victorImg },
  { nome: 'Bianca Nascimento', cargo: 'Desenvolvedora', foto: biancaImg },
  { nome: 'Jhonatan Alves', cargo: 'Desenvolvedor', foto: jhonatanImg },
  { nome: 'Kauã Moraes', cargo: 'Scrum Master / Dev', foto: kauaImg },
  { nome: 'Kefilwe Lourenço', cargo: 'Product Owner / Dev', foto: kfImg },
  { nome: 'Letícia Fonseca', cargo: 'QA', foto: leticiaImg },
  { nome: 'Taís Bernardi', cargo: 'QA', foto: taisImg },
]

function Aboutus() {
  return (
    <div className="!min-h-screen !w-full !bg-[#F1F5F9] !pt-20 !font-sans !text-[#0F172A]">
      {/* HERO */}
      <div className="!mx-auto !grid !max-w-7xl !grid-cols-1 !items-center !gap-12 !px-6 !py-14 lg:!grid-cols-2 lg:!px-8 lg:!py-20">
        <div className="!w-full">
          <div className="!mb-5 !text-xs !font-bold !uppercase !tracking-[0.35em] !text-[#06B6D4]">
            Sobre nós
          </div>

          <div className="!max-w-2xl !text-4xl !font-extrabold !leading-tight !text-[#0F172A] md:!text-5xl">
            Mais que um seguro,{' '}
            <span className="!text-[#1E3A8A]">
              um compromisso com a sua segurança.
            </span>
          </div>

          <div className="!mt-6 !max-w-xl !text-base !leading-relaxed !text-slate-500">
            A SaveDrive nasceu com um propósito simples e poderoso: tornar o
            trânsito mais seguro por meio da prevenção.
          </div>

          <div className="!mt-2 !max-w-xl !text-base !leading-relaxed !text-slate-500">
            Acreditamos que cuidar do seu carro é também cuidar de você, da sua
            família e de todos ao seu redor.
          </div>

          <div className="!mt-8 !flex !flex-wrap !gap-10">
            <div>
              <div className="!text-3xl !font-extrabold !text-[#1E3A8A]">
                +50 mil
              </div>
              <div className="!text-sm !text-slate-400">
                clientes protegidos
              </div>
            </div>

            <div>
              <div className="!text-3xl !font-extrabold !text-[#1E3A8A]">
                +10 anos
              </div>
              <div className="!text-sm !text-slate-400">
                de experiência
              </div>
            </div>

            <div>
              <div className="!text-3xl !font-extrabold !text-[#1E3A8A]">
                98%
              </div>
              <div className="!text-sm !text-slate-400">
                de satisfação
              </div>
            </div>
          </div>
        </div>

        <div className="!w-full !overflow-hidden !rounded-[32px] !bg-white !p-5 !shadow-xl">
          <img
            src={familiaCarroImg}
            alt="Família no carro"
            className="!block !h-[420px] !w-full !rounded-[24px] !object-cover md:!h-[500px]"
          />
        </div>
      </div>

      {/* VALORES */}
      <div className="!bg-white !px-6 !py-16 lg:!px-8">
        <div className="!mx-auto !max-w-7xl">
          <div className="!mb-14 !text-center !text-3xl !font-extrabold !text-[#1E3A8A] md:!text-4xl">
            Nossos valores
          </div>

          <div className="!grid !grid-cols-1 !gap-8 md:!grid-cols-2 lg:!grid-cols-4">
            {valores.map(({ titulo, texto, Icone }) => (
              <div
                key={titulo}
                className="!relative !min-h-[190px] !rounded-3xl !bg-[#F1F5F9] !p-7 !pt-10 !shadow-sm !transition-all !duration-300 hover:!-translate-y-1 hover:!shadow-md"
              >
                <div className="!absolute !-top-5 !left-7 !flex !h-11 !w-11 !items-center !justify-center !rounded-full !bg-[#06B6D4] !shadow-md">
                  <Icone size={23} color="#FFFFFF" />
                </div>

                <div className="!text-lg !font-extrabold !leading-snug !text-[#1E3A8A]">
                  {titulo}
                </div>

                <div className="!mt-3 !text-sm !leading-relaxed !text-slate-500">
                  {texto}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* EQUIPE */}
      <div className="!px-6 !py-16 lg:!px-8">
        <div className="!mx-auto !max-w-6xl">
          <div className="!mb-12 !text-center !text-3xl !font-extrabold !text-[#1E3A8A] md:!text-4xl">
            Nossa equipe
          </div>

          <div className="!grid !grid-cols-1 !justify-items-center !gap-8 sm:!grid-cols-2 lg:!grid-cols-4">
            {equipe.map((membro) => (
              <div
                key={membro.nome}
                className="!flex !w-full !max-w-[240px] !flex-col !items-center !rounded-3xl !bg-white !p-8 !text-center !shadow-sm !transition-all !duration-300 hover:!-translate-y-1 hover:!shadow-md"
              >
                <img
                  src={membro.foto}
                  alt={membro.nome}
                  className="!mb-5 !block !h-32 !w-32 !rounded-full !border-4 !border-[#06B6D4] !object-cover !object-center"
                />

                <div className="!text-base !font-extrabold !text-[#0F172A]">
                  {membro.nome}
                </div>

                <div className="!mt-1 !text-sm !font-medium !text-[#06B6D4]">
                  {membro.cargo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="!px-6 !pb-20 lg:!px-8">
        <div className="!mx-auto !flex !max-w-5xl !flex-col !items-center !justify-between !gap-6 !rounded-[32px] !bg-[#98D8AA] !px-8 !py-6 !shadow-sm md:!flex-row md:!rounded-full">
          <div className="!flex !items-center !gap-5">
            <div className="!flex !h-14 !w-14 !shrink-0 !items-center !justify-center !rounded-full !bg-white !shadow-sm">
              <Shield size={28} color="#1E3A8A" />
            </div>

            <div>
              <div className="!text-xl !font-extrabold !text-[#1E3A8A]">
                Vamos juntos por um trânsito mais seguro?
              </div>

              <div className="!mt-1 !text-sm !text-[#0F172A]">
                Faça parte da mudança. Contrate sua proteção com a SaveDrive.
              </div>
            </div>
          </div>

          <Link
            to="/produto/contratos"
            className="!rounded-full !bg-[#1E3A8A] !px-8 !py-3 !text-sm !font-bold !text-white !no-underline !transition-colors !duration-300 hover:!bg-[#06B6D4]"
          >
            Contratar agora
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Aboutus