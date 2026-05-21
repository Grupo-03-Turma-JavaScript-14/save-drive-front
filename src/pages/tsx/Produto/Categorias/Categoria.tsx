import { useEffect, useMemo, useState } from 'react'
import '../../../css/Produto/Categoria/Categoria.css'

import CategoryModal from '../../../../components/categoria/CategoriaModal'
import DeleteConfirm from '../../../../components/modalpopup/DeleteConfirm'
import { CardCategoria } from '../../../../components/cardcategoria/CardCategoria'

import { contratoApi } from '../../../../service/Service'
import type {
  Categoria as CategoriaType,
  CreateCategoriaDto,
  UpdateCategoriaDto,
} from '../../../../service/Types'

type CategoriaForm = {
  id?: number
  tipoPlano: string
  tempoRevisao: string
}

type CategoriaProdutoModal = {
  id: number
  nome: string
}

type CategoriaModalType = {
  id: number
  tipoPlano: string
  tempoRevisao: string
  produto?: CategoriaProdutoModal[]
}

function Categorias() {
  const [categorias, setCategorias] = useState<CategoriaType[]>([])
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState('')

  const [modalVisible, setModalVisible] = useState(false)
  const [editingCategoria, setEditingCategoria] =
    useState<CategoriaType | null>(null)

  const [deleteVisible, setDeleteVisible] = useState(false)
  const [toDeleteId, setToDeleteId] = useState<number | null>(null)

  const [filterTipo, setFilterTipo] = useState('')
  const [filterTempo, setFilterTempo] = useState('')
  const [sortBy, setSortBy] =
    useState<'tipoPlano' | 'tempoRevisao'>('tipoPlano')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

  useEffect(() => {
    loadCategories()
  }, [])

  async function loadCategories() {
    try {
      setLoading(true)
      setErro('')

      const data = await contratoApi.findCategorias()
      setCategorias(data)
    } catch (error) {
      console.error('Erro ao carregar categorias:', error)
      setErro('Não foi possível carregar as categorias.')
    } finally {
      setLoading(false)
    }
  }

  function openCreate() {
    setEditingCategoria(null)
    setModalVisible(true)
  }

  function openEdit(id: number) {
    const categoria = categorias.find((item) => item.id === id) ?? null
    setEditingCategoria(categoria)
    setModalVisible(true)
  }

  async function handleSave(cat: CategoriaForm) {
    try {
      setErro('')

      if (cat.id) {
        const payload: UpdateCategoriaDto = {
          id: cat.id,
          tipoPlano: cat.tipoPlano,
          tempoRevisao: cat.tempoRevisao,
        }

        const updated = await contratoApi.updateCategoria(payload)

        setCategorias((prev) =>
          prev.map((item) => (item.id === updated.id ? updated : item)),
        )

        setModalVisible(false)
        setEditingCategoria(null)
        return
      }

      const payload: CreateCategoriaDto = {
        tipoPlano: cat.tipoPlano,
        tempoRevisao: cat.tempoRevisao,
      }

      const created = await contratoApi.createCategoria(payload)

      setCategorias((prev) => [...prev, created])

      setModalVisible(false)
      setEditingCategoria(null)
    } catch (error) {
      console.error('Erro ao salvar categoria:', error)
      setErro('Não foi possível salvar a categoria.')
    }
  }

  function openDelete(id: number) {
    setToDeleteId(id)
    setDeleteVisible(true)
  }

  async function confirmDelete() {
    if (toDeleteId == null) {
      setDeleteVisible(false)
      return
    }

    try {
      setErro('')

      await contratoApi.deleteCategoria(toDeleteId)

      setCategorias((prev) =>
        prev.filter((categoria) => categoria.id !== toDeleteId),
      )
    } catch (error) {
      console.error('Erro ao excluir categoria:', error)
      setErro('Não foi possível excluir a categoria.')
    } finally {
      setDeleteVisible(false)
      setToDeleteId(null)
    }
  }

  function getProdutoNome(produto: {
    id: number
    nome?: string
    marca?: string
    modelo?: string
  }) {
    const nomeCompleto = [produto.marca, produto.modelo]
      .filter(Boolean)
      .join(' ')

    return produto.nome || nomeCompleto || `Produto #${produto.id}`
  }

  function adaptarCategoriaParaModal(
    categoria: CategoriaType | null,
  ): CategoriaModalType | null {
    if (!categoria) return null

    return {
      id: categoria.id,
      tipoPlano: categoria.tipoPlano,
      tempoRevisao: categoria.tempoRevisao,
      produto: categoria.produto?.map((produto) => ({
        id: produto.id,
        nome: getProdutoNome(produto),
      })),
    }
  }

  const categoriasFiltradas = useMemo(() => {
    return categorias
      .filter((categoria) =>
        categoria.tipoPlano
          .toLowerCase()
          .includes(filterTipo.toLowerCase()),
      )
      .filter((categoria) =>
        categoria.tempoRevisao
          .toLowerCase()
          .includes(filterTempo.toLowerCase()),
      )
      .slice()
      .sort((a, b) => {
        const dir = sortOrder === 'asc' ? 1 : -1

        if (sortBy === 'tipoPlano') {
          return (
            a.tipoPlano.localeCompare(b.tipoPlano, 'pt-BR', {
              sensitivity: 'base',
            }) * dir
          )
        }

        return (
          a.tempoRevisao.localeCompare(b.tempoRevisao, 'pt-BR', {
            sensitivity: 'base',
          }) * dir
        )
      })
  }, [categorias, filterTipo, filterTempo, sortBy, sortOrder])

  const editingCategoriaModal = adaptarCategoriaParaModal(editingCategoria)

  return (
    <>
      <div className="categorias-container">
        <div className="categorias-header-wrapper">
          <div className="categorias-header">
            <div className="titulo-area">
              <h1>Categorias</h1>

              <p>Gerencie todas as categorias cadastradas na plataforma</p>

              <p className="categorias-total">
                Total de categorias: {categorias.length}
              </p>
            </div>

            <button className="btn-criar" onClick={openCreate}>
              + Nova Categoria
            </button>
          </div>
        </div>

        <div
          className="categorias-filtros"
          style={{ width: '100%', maxWidth: 1200, marginBottom: 16 }}
        >
          <input
            placeholder="Filtrar por tipo de plano"
            value={filterTipo}
            onChange={(e) => setFilterTipo(e.target.value)}
          />

          <input
            placeholder="Filtrar por tempo de revisão"
            value={filterTempo}
            onChange={(e) => setFilterTempo(e.target.value)}
          />

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value as 'tipoPlano' | 'tempoRevisao')
            }
            style={{ padding: '10px 12px', borderRadius: 8 }}
          >
            <option value="tipoPlano">Ordenar por Tipo de Plano</option>
            <option value="tempoRevisao">Ordenar por Tempo de Revisão</option>
          </select>

          <select
            value={sortOrder}
            onChange={(e) =>
              setSortOrder(e.target.value as 'asc' | 'desc')
            }
            style={{ padding: '10px 12px', borderRadius: 8 }}
          >
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        </div>

        {loading && <p>Carregando categorias...</p>}

        {erro && (
          <p style={{ color: 'red', marginBottom: 16 }}>
            {erro}
          </p>
        )}

        {!loading && categoriasFiltradas.length === 0 && (
          <p>Nenhuma categoria encontrada.</p>
        )}

        <div className="categorias-grid">
          {categoriasFiltradas.map((categoria) => (
            <CardCategoria
              key={categoria.id}
              categoria={adaptarCategoriaParaModal(categoria)!}
              onEditar={openEdit}
              onDeletar={openDelete}
            />
          ))}
        </div>
      </div>

      <CategoryModal
        visible={modalVisible}
        categoria={editingCategoriaModal}
        onSave={handleSave}
        onClose={() => {
          setModalVisible(false)
          setEditingCategoria(null)
        }}
      />

      <DeleteConfirm
        visible={deleteVisible}
        message="Confirma a exclusão desta categoria?"
        onConfirm={confirmDelete}
        onCancel={() => {
          setDeleteVisible(false)
          setToDeleteId(null)
        }}
      />
    </>
  )
}

export default Categorias