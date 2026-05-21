import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Heart, Handshake, Rocket } from 'lucide-react'
import familiaCarroImg from '../../assets/aboutus/familia_carro.png'
import victorImg from '../../assets/aboutus/victor.jpg'
import biancaImg from '../../assets/aboutus/bianca.jpg'
import jhonatanImg from '../../assets/aboutus/Jhonatan_4.jpg'
import kauaImg from '../../assets/aboutus/kaua.jpg'
import kfImg from '../../assets/aboutus/kf.jpg'
import leticiaImg from '../../assets/aboutus/leticia.png'
import taisImg from '../../assets/aboutus/tais.png'

function AboutUs() {
  return (
    <div className="font-sans text-[#0F172A] bg-[#F1F5F9] min-h-screen">

      {/* HERO */}
      <section className="flex items-center justify-between gap-10 px-20 py-16">

        {/* Texto esquerda */}
        <div className="flex-1">
          <span className="text-xs font-bold text-[#06B6D4] uppercase tracking-widest">
            Sobre nós
          </span>

          <h1 className="mt-3 text-4xl font-bold leading-tight">
            Mais que um seguro,{' '}
            <span className="text-[#1E3A8A]">
              um compromisso com a sua segurança.
            </span>
          </h1>

          <p className="mt-5 text-gray-500 leading-relaxed">
            A SaveDrive nasceu com um propósito simples e poderoso: tornar o trânsito mais seguro por meio da prevenção.
          </p>
          <p className="mt-3 text-gray-500 leading-relaxed">
            Acreditamos que cuidar do seu carro é também cuidar de você, da sua família e de todos ao seu redor.
          </p>

          {/* Stats */}
          <div className="flex gap-10 mt-8">
            <div>
              <p className="text-2xl font-bold text-[#1E3A8A]">+50 mil</p>
              <p className="text-sm text-gray-400">clientes protegidos</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#1E3A8A]">+10 anos</p>
              <p className="text-sm text-gray-400">de experiência</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#1E3A8A]">98%</p>
              <p className="text-sm text-gray-400">de satisfação</p>
            </div>
          </div>
        </div>

        {/* Imagem direita */}
        <div className="flex-1 rounded-2xl overflow-hidden shadow-md">
          <img src={familiaCarroImg} alt="Família no carro" className="w-full rounded-2xl object-cover" />
        </div>

      </section>

      {/* NOSSOS VALORES */}
      <section className="px-20 py-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-[#1E3A8A] mb-12">
          Nossos valores
        </h2>
        <div className="grid grid-cols-4 gap-6">
          {[
  { titulo: 'Segurança em primeiro lugar', texto: 'Colocamos a segurança de nossos clientes e suas famílias acima de qualquer coisa.', icone: <Shield size={24} color="#FFFFFF" /> },
  { titulo: 'Prevenção que transforma', texto: 'Incentivamos hábitos melhores para reduzir riscos e proteger vidas.', icone: <Heart size={24} color="#FFFFFF" /> },
  { titulo: 'Transparência e confiança', texto: 'Relações claras, honestas e duradouras com nossos clientes.', icone: <Handshake size={24} color="#FFFFFF" /> },
  { titulo: 'Inovação constante', texto: 'Usamos tecnologia para criar soluções inteligentes e acessíveis.', icone: <Rocket size={24} color="#FFFFFF" /> },
].map((item, i) => {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      key={i}
      className="bg-[#F1F5F9] rounded-xl p-6 shadow-sm cursor-pointer"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-10 h-10 rounded-full bg-[#06B6D4] flex items-center justify-center mb-4">
        {item.icone}
      </div>
      <h3 className="font-bold text-[#1E3A8A] mb-2">{item.titulo}</h3>

      <AnimatePresence>
        {hovered && (
          <motion.p
            className="text-sm text-gray-500"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {item.texto}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  )
})}
        </div>
      </section>

      {/* EQUIPE */}
      <section className="px-20 py-16 bg-[#F1F5F9]">
        <h2 className="text-3xl font-bold text-center text-[#1E3A8A] mb-12">
          Nossa equipe
        </h2>
        <div className="grid grid-cols-4 gap-6">
          {[
  { nome: 'Victor Silva', cargo: 'Desenvolvedor', foto: victorImg },
  { nome: 'Bianca Nascimento', cargo: 'Desenvolvedora', foto: biancaImg },
  { nome: 'Jhonatan Alves', cargo: 'Desenvolvedor', foto: jhonatanImg },
  { nome: 'Kauã Moraes', cargo: 'Scrum Master / Dev', foto: kauaImg },
  { nome: 'Kefilwe Lourenço', cargo: 'Product Owner / Dev', foto: kfImg },
  { nome: 'Letícia Fonseca', cargo: 'QA', foto: leticiaImg },
  { nome: 'Taís Bernardi', cargo: 'QA', foto: taisImg },
].map((membro, i) => (
  <div key={i} className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center text-center">
    <img
      src={membro.foto}
      alt={membro.nome}
      className="w-32 h-32 rounded-full object-cover object-center mb-4 border-4 border-[#06B6D4]"
    />
    <h3 className="font-bold text-[#0F172A]">{membro.nome}</h3>
    <p className="text-sm text-[#06B6D4] mt-1">{membro.cargo}</p>
  </div>
))}
        </div>
      </section>
    {/* CTA FINAL */}
<section className="mx-20 mb-16 bg-[#98D8AA] rounded-2xl p-10 flex items-center justify-between">
  
  <div className="flex items-center gap-6">
    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
      <Shield size={32} color="#1E3A8A" />
    </div>
    <div>
      <h3 className="text-xl font-bold text-[#1E3A8A]">
        Vamos juntos por um trânsito mais seguro?
      </h3>
      <p className="text-[#0F172A] mt-1">
        Faça parte da mudança. Contrate sua proteção com a SaveDrive.
      </p>
    </div>
  </div>

  <button className="bg-[#1E3A8A] text-white font-bold px-8 py-3 rounded-xl hover:bg-[#06B6D4] transition-colors duration-300">
    Contratar agora
  </button>

</section>
    </div>
  );
}

export default AboutUs;