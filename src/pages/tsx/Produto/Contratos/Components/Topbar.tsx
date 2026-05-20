import { motion } from 'framer-motion'
import '../../../../css/Produto/Contratos/Topbar.css'

interface TopbarProps {
  onRefresh: () => void
}

function Topbar({ onRefresh }: TopbarProps) {
  return (
    <header className="topbar">
      <motion.div
        className="topbar-content"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div>
          <span className="topbar-badge">SaveDrive Seguros</span>

          <h1>Contratos de Apólice</h1>

          <p>
            Gerencie veículos, selecione usuários e emita contratos com cálculo
            automático de desconto para veículos antigos.
          </p>
        </div>

        <button type="button" onClick={onRefresh}>
          Atualizar dados
        </button>
      </motion.div>
    </header>
  )
}

export default Topbar