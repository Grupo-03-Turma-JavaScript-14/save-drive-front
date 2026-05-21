import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import {
  formatMoney,
  getCategoriaDescricao,
  getCategoriaNome,
  todayIsoDate,
} from '../../../../../Service/Service'

import type {
  Categoria,
  CreateContratoDto,
  CreateUsuarioDto,
  Produto,
  UpdateProdutoDto,
  Usuario,
} from '../../../../../Service/Types'

import UserBar from './UserBar'
import '../../../../css/Produto/Contratos/RightBar.css'

interface RightBarProps {
  categorias: Categoria[]
  usuarios: Usuario[]
  produtoSelecionado: Produto | null
  usuarioSelecionado: Usuario | null
  onSelectUsuario: (usuario: Usuario) => void
  onCreateUsuario: (usuario: CreateUsuarioDto) => Promise<void>
  onCreateContrato: (dto: CreateContratoDto) => void
  onUpdateProduto: (produto: UpdateProdutoDto) => void
}

function RightBar({
  categorias,
  usuarios,
  produtoSelecionado,
  usuarioSelecionado,
  onSelectUsuario,
  onCreateUsuario,
  onCreateContrato,
  onUpdateProduto,
}: RightBarProps) {
  const [categoriaId, setCategoriaId] = useState<number | null>(null)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (produtoSelecionado?.categoria?.id) {
      setCategoriaId(produtoSelecionado.categoria.id)
    } else {
      setCategoriaId(null)
    }
  }, [produtoSelecionado])

  if (!produtoSelecionado) {
    return (
      <section className="rightbar panel-card rightbar-empty">
        <div>🛡️</div>
        <h2>Emitir Nova Apólice</h2>
        <p>Selecione um veículo no lado esquerdo para iniciar o contrato.</p>
      </section>
    )
  }

  const produto = produtoSelecionado

  const anoAtual = new Date().getFullYear()
  const idade = anoAtual - Number(produto.ano)
  const valorBase = Number(produto.valorBase)

  const categoriaSelecionada =
    categorias.find((categoria) => categoria.id === categoriaId) ??
    produto.categoria

  const categoriaFoiAlterada =
    !!categoriaSelecionada?.id &&
    !!produto.categoria?.id &&
    categoriaSelecionada.id !== produto.categoria.id

  const temDesconto = idade >= 10
  const valorDesconto = temDesconto ? valorBase * 0.2 : 0
  const valorContrato = temDesconto ? valorBase * 0.8 : valorBase

  let erro: string | null = null

  if (!usuarioSelecionado) {
    erro = 'Selecione ou crie um usuário para emitir o contrato.'
  } else if (!categoriaSelecionada?.id) {
    erro = 'Selecione um plano de cobertura.'
  } else if (Number(produto.ano) > anoAtual) {
    erro = 'O ano do veículo não pode ser maior que o ano atual.'
  } else if (valorBase <= 0 || Number.isNaN(valorBase)) {
    erro = 'O valor base do produto é inválido.'
  }

  function alterarCategoriaProduto() {
    if (!categoriaSelecionada?.id) return

    onUpdateProduto({
      id: produto.id,
      modelo: produto.modelo,
      marca: produto.marca,
      ano: Number(produto.ano),
      valorBase: Number(produto.valorBase),
      categoria: {
        id: categoriaSelecionada.id,
      },
    })
  }

  function emitirContrato() {
    if (erro || !usuarioSelecionado || !categoriaSelecionada?.id) return

    onCreateContrato({
      produtoId: produto.id,
      categoriaId: categoriaSelecionada.id,
      usuarioId: usuarioSelecionado.id,
      ano: Number(produto.ano),
      data: todayIsoDate(),
    })

    setSuccess(true)

    setTimeout(() => {
      setSuccess(false)
    }, 2800)
  }

  return (
    <section className="rightbar panel-card">
      {success && (
        <motion.div
          className="rightbar-success"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div>✓</div>
          <h3>Contrato emitido</h3>
          <p>Apólice enviada para a API com sucesso.</p>
        </motion.div>
      )}

      <div className="rightbar-header">
        <div>
          <h2>🛡️ Emitir Nova Apólice</h2>
          <p>Simulação e validação das regras do seguro.</p>
        </div>

        <UserBar
          usuarios={usuarios}
          usuarioSelecionado={usuarioSelecionado}
          onSelectUsuario={onSelectUsuario}
          onCreateUsuario={onCreateUsuario}
        />
      </div>

      <div className="rightbar-product-box">
        <span>Veículo selecionado</span>

        <h3>
          {produto.marca} {produto.modelo}
        </h3>

        <div className="rightbar-mini-grid">
          <div>
            <small>Ano / Idade</small>
            <strong>
              {produto.ano} — {idade} anos
            </strong>
          </div>

          <div>
            <small>Valor base</small>
            <strong>{formatMoney(valorBase)}</strong>
          </div>

          <div>
            <small>Categoria atual</small>
            <strong>{getCategoriaNome(produto.categoria)}</strong>
          </div>

          <div>
            <small>Usuário</small>
            <strong>{usuarioSelecionado?.nome || 'Não selecionado'}</strong>
          </div>
        </div>
      </div>

      <div className="rightbar-section">
        <div className="rightbar-section-title">
          <label>Plano de cobertura</label>
          <span>Atual: {getCategoriaNome(produto.categoria)}</span>
        </div>

        <div className="rightbar-plans">
          {categorias.map((categoria) => {
            const selected = categoria.id === categoriaId
            const atual = categoria.id === produto.categoria?.id

            return (
              <button
                key={categoria.id}
                type="button"
                className={selected ? 'rightbar-plan selected' : 'rightbar-plan'}
                onClick={() => setCategoriaId(categoria.id)}
              >
                <div>
                  <strong>{getCategoriaNome(categoria)}</strong>
                  {atual && <span>Atual</span>}
                </div>

                <p>{getCategoriaDescricao(categoria)}</p>
              </button>
            )
          })}
        </div>
      </div>

      {erro ? (
        <div className="rightbar-alert warning">
          <strong>Validação pendente</strong>
          <p>{erro}</p>
        </div>
      ) : (
        <div className="rightbar-alert success">
          ✓ Tudo certo. O contrato pode ser emitido.
        </div>
      )}

      {categoriaFoiAlterada && (
        <div className="rightbar-alert warning">
          <strong>Categoria alterada</strong>
          <p>
            Você selecionou {getCategoriaNome(categoriaSelecionada)} para este
            veículo.
          </p>

          <button
            type="button"
            className="rightbar-update-category"
            onClick={alterarCategoriaProduto}
          >
            Salvar alteração no veículo
          </button>
        </div>
      )}

      <div className="rightbar-calc">
        <h3>Resumo do contrato</h3>

        <div>
          <span>Prêmio base anual</span>
          <strong>{formatMoney(valorBase)}</strong>
        </div>

        <div>
          <span>Idade do veículo</span>
          <strong>{idade} anos</strong>
        </div>

        <div className={temDesconto ? 'discount' : 'muted'}>
          <span>Desconto antiguidade</span>
          <strong>
            {temDesconto ? `- ${formatMoney(valorDesconto)}` : 'Sem desconto'}
          </strong>
        </div>

        <div>
          <span>Categoria selecionada</span>
          <strong>{getCategoriaNome(categoriaSelecionada)}</strong>
        </div>

        <div className="rightbar-total">
          <span>Valor final do contrato</span>
          <strong>{formatMoney(valorContrato)}</strong>
        </div>
      </div>

      <button
        type="button"
        className="rightbar-emit"
        disabled={!!erro}
        onClick={emitirContrato}
      >
        Confirmar e Emitir Seguro
      </button>
    </section>
  )
}

export default RightBar