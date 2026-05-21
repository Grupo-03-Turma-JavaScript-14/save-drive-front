import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import {
  formatMoney,
  getCategoriaNome,
} from '../../../../../service/Service'

import type {
  Categoria,
  CreateProdutoDto,
  Produto,
  UpdateProdutoDto,
} from '../../../../../service/Types'

import '../../../../css/Produto/Contratos/LeftBar.css'

interface LeftBarProps {
  produtos: Produto[]
  categorias: Categoria[]
  produtoSelecionado: Produto | null
  onSelectProduto: (produto: Produto) => void
  onCreateProduto: (produto: CreateProdutoDto) => void
  onUpdateProduto: (produto: UpdateProdutoDto) => void
  onDeleteProduto: (id: number) => void
}

function LeftBar({
  produtos,
  categorias,
  produtoSelecionado,
  onSelectProduto,
  onCreateProduto,
  onUpdateProduto,
  onDeleteProduto,
}: LeftBarProps) {
  const anoAtual = new Date().getFullYear()

  const [formAberto, setFormAberto] = useState(false)
  const [editandoId, setEditandoId] = useState<number | null>(null)

  const [marca, setMarca] = useState('')
  const [modelo, setModelo] = useState('')
  const [ano, setAno] = useState(anoAtual)
  const [valorBase, setValorBase] = useState(3000)
  const [categoriaId, setCategoriaId] = useState<number | null>(null)
  const [erro, setErro] = useState<string | null>(null)

  useEffect(() => {
    if (!categoriaId && categorias.length > 0) {
      setCategoriaId(categorias[0].id)
    }
  }, [categorias, categoriaId])

  function abrirCadastro() {
    setEditandoId(null)
    setMarca('')
    setModelo('')
    setAno(anoAtual)
    setValorBase(3000)
    setCategoriaId(categorias[0]?.id ?? null)
    setErro(null)
    setFormAberto(true)
  }

  function abrirEdicao(produto: Produto) {
    setEditandoId(produto.id)
    setMarca(produto.marca)
    setModelo(produto.modelo)
    setAno(Number(produto.ano))
    setValorBase(Number(produto.valorBase))
    setCategoriaId(produto.categoria?.id ?? categorias[0]?.id ?? null)
    setErro(null)
    setFormAberto(true)
  }

  function fecharFormulario() {
    setFormAberto(false)
    setEditandoId(null)
    setErro(null)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setErro(null)

    if (!marca.trim()) {
      setErro('Informe a marca.')
      return
    }

    if (!modelo.trim()) {
      setErro('Informe o modelo.')
      return
    }

    if (!ano || Number.isNaN(Number(ano))) {
      setErro('Informe um ano válido.')
      return
    }

    if (Number(ano) > anoAtual) {
      setErro('O ano do veículo não pode ser maior que o ano atual.')
      return
    }

    if (!valorBase || Number(valorBase) <= 0) {
      setErro('O valor base precisa ser maior que zero.')
      return
    }

    if (!categoriaId) {
      setErro('Selecione uma categoria.')
      return
    }

    const categoriaExiste = categorias.some(
      (categoria) => categoria.id === categoriaId,
    )

    if (!categoriaExiste) {
      setErro('Categoria não encontrada.')
      return
    }

    if (editandoId) {
      onUpdateProduto({
        id: editandoId,
        marca: marca.trim(),
        modelo: modelo.trim(),
        ano: Number(ano),
        valorBase: Number(valorBase),
        categoria: {
          id: categoriaId,
        },
      })
    } else {
      onCreateProduto({
        marca: marca.trim(),
        modelo: modelo.trim(),
        ano: Number(ano),
        valorBase: Number(valorBase),
        categoria: {
          id: categoriaId,
        },
      })
    }

    fecharFormulario()
  }

  return (
    <section className="leftbar panel-card">
      <div className="leftbar-header">
        <div>
          <h2>🚗 Produtos / Veículos</h2>
          <p>Cadastre, edite e selecione o carro do contrato.</p>
        </div>

        {!formAberto && (
          <button type="button" onClick={abrirCadastro}>
            + Novo
          </button>
        )}
      </div>

      {formAberto && (
        <motion.form
          className="leftbar-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22 }}
        >
          <div className="leftbar-form-title">
            <strong>{editandoId ? 'Editar veículo' : 'Novo veículo'}</strong>

            <button type="button" onClick={fecharFormulario}>
              Cancelar
            </button>
          </div>

          {erro && <div className="leftbar-error">{erro}</div>}

          <div className="leftbar-form-grid">
            <label>
              Marca
              <input
                value={marca}
                onChange={(event) => setMarca(event.target.value)}
              />
            </label>

            <label>
              Modelo
              <input
                value={modelo}
                onChange={(event) => setModelo(event.target.value)}
              />
            </label>

            <label>
              Ano
              <input
                type="number"
                value={ano}
                onChange={(event) => setAno(Number(event.target.value))}
              />
            </label>

            <label>
              Valor base
              <input
                type="number"
                value={valorBase}
                onChange={(event) => setValorBase(Number(event.target.value))}
              />
            </label>
          </div>

          <label>
            Categoria
            <select
              value={categoriaId ?? ''}
              onChange={(event) => setCategoriaId(Number(event.target.value))}
            >
              <option value="" disabled>
                Selecione uma categoria
              </option>

              {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>
                  {getCategoriaNome(categoria)}
                </option>
              ))}
            </select>
          </label>

          <button type="submit" className="leftbar-submit">
            {editandoId ? 'Salvar alterações' : 'Cadastrar veículo'}
          </button>
        </motion.form>
      )}

      <div className="leftbar-list">
        {produtos.map((produto) => {
          const ativo = produtoSelecionado?.id === produto.id
          const temDesconto = anoAtual - Number(produto.ano) >= 10

          return (
            <motion.article
              key={produto.id}
              className={ativo ? 'leftbar-item active' : 'leftbar-item'}
              onClick={() => onSelectProduto(produto)}
              whileHover={{ y: -2 }}
            >
              <div className="leftbar-item-main">
                <div className="leftbar-car-icon">🚘</div>

                <div>
                  <div className="leftbar-title">
                    <strong>
                      {produto.marca} {produto.modelo}
                    </strong>

                    {ativo && <span>Selecionado</span>}
                  </div>

                  <div className="leftbar-meta">
                    <small>Ano: {produto.ano}</small>
                    <small>{formatMoney(Number(produto.valorBase))}</small>
                    <small>{getCategoriaNome(produto.categoria)}</small>
                  </div>

                  {temDesconto && (
                    <div className="leftbar-discount">
                      Elegível a 20% de desconto
                    </div>
                  )}
                </div>
              </div>

              <div className="leftbar-actions">
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation()
                    abrirEdicao(produto)
                  }}
                >
                  Editar
                </button>

                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation()
                    onDeleteProduto(produto.id)
                  }}
                >
                  Excluir
                </button>
              </div>
            </motion.article>
          )
        })}

        {produtos.length === 0 && (
          <div className="leftbar-empty">
            <strong>Nenhum veículo cadastrado.</strong>
            <button type="button" onClick={abrirCadastro}>
              Cadastrar primeiro veículo
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default LeftBar