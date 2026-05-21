import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import type { CreateUsuarioDto, Usuario } from '../../../../../Service/Types'
import '../../../../css/Produto/Contratos/UserBar.css'

interface UserBarProps {
  usuarios: Usuario[]
  usuarioSelecionado: Usuario | null
  onSelectUsuario: (usuario: Usuario) => void
  onCreateUsuario: (usuario: CreateUsuarioDto) => Promise<void>
}

function UserBar({
  usuarios,
  usuarioSelecionado,
  onSelectUsuario,
  onCreateUsuario,
}: UserBarProps) {
  const [open, setOpen] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState<string | null>(null)
  const [salvando, setSalvando] = useState(false)

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setErro(null)

    if (!nome.trim()) {
      setErro('Informe o nome.')
      return
    }

    if (!email.trim()) {
      setErro('Informe o e-mail.')
      return
    }

    if (!senha.trim()) {
      setErro('Informe a senha.')
      return
    }

    try {
      setSalvando(true)

      await onCreateUsuario({
        nome: nome.trim(),
        email: email.trim(),
        senha: senha.trim(),
      })

      setNome('')
      setEmail('')
      setSenha('')
      setOpen(false)
    } catch {
      setErro('Erro ao criar usuário.')
    } finally {
      setSalvando(false)
    }
  }

  return (
    <>
      <button
        type="button"
        className="userbar-trigger"
        onClick={() => setOpen(true)}
      >
        <span>👤</span>

        <div>
          <strong>{usuarioSelecionado?.nome || 'Selecionar usuário'}</strong>
          <small>
            {usuarioSelecionado ? `ID ${usuarioSelecionado.id}` : 'Obrigatório'}
          </small>
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="userbar-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="userbar-modal"
              initial={{ opacity: 0, y: 22, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 22, scale: 0.96 }}
              transition={{ duration: 0.22 }}
            >
              <div className="userbar-modal-header">
                <div>
                  <span>Usuário do contrato</span>
                  <h3>Selecionar ou criar usuário</h3>
                  <p>O ID selecionado será usado na emissão do contrato.</p>
                </div>

                <button type="button" onClick={() => setOpen(false)}>
                  ×
                </button>
              </div>

              <label className="userbar-select-label">
                Usuário existente
                <select
                  value={usuarioSelecionado?.id || ''}
                  onChange={(event) => {
                    const usuario = usuarios.find(
                      (item) => item.id === Number(event.target.value),
                    )

                    if (usuario) {
                      onSelectUsuario(usuario)
                    }
                  }}
                >
                  <option value="" disabled>
                    Selecione um usuário
                  </option>

                  {usuarios.map((usuario) => (
                    <option key={usuario.id} value={usuario.id}>
                      #{usuario.id} — {usuario.nome}
                    </option>
                  ))}
                </select>
              </label>

              <div className="userbar-divider">
                <span>ou crie um novo</span>
              </div>

              <form className="userbar-form" onSubmit={handleSubmit}>
                {erro && <div className="userbar-error">{erro}</div>}

                <label>
                  Nome
                  <input
                    type="text"
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                    placeholder="Nome do usuário"
                  />
                </label>

                <label>
                  E-mail
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="email@exemplo.com"
                  />
                </label>

                <label>
                  Senha
                  <input
                    type="password"
                    value={senha}
                    onChange={(event) => setSenha(event.target.value)}
                    placeholder="Senha"
                  />
                </label>

                <button type="submit" disabled={salvando}>
                  {salvando ? 'Criando...' : 'Criar e selecionar'}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default UserBar